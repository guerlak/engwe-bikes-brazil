import { PRODUCTS } from '@/lib/data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Truck, ShieldCheck, RotateCcw, Check, ArrowLeft } from 'lucide-react';


export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Link href="/" className="text-orange-500 hover:underline">
            Voltar para a loja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-zinc-900">
        <Navbar />
      </div>
      
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#bikes" className="inline-flex items-center text-zinc-500 hover:text-orange-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para E-Bikes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden relative">
              <Image
                src={product.images?.[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.tag && (
                <div className="absolute top-6 left-6 bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {product.tag}
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {(product.images).map((img, i) => (
                <div key={i} className="aspect-square bg-zinc-100 rounded-xl overflow-hidden relative cursor-pointer hover:ring-2 ring-orange-500 transition-all">
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-zinc-200 fill-zinc-200'}`} />
                ))}
              </div>
              <span className="text-sm text-zinc-500 font-medium">{product.reviews} Avaliações</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-end gap-4 mb-8">
              <p className="text-4xl font-bold text-zinc-900">
                R$ {product.price.toLocaleString('pt-BR')}
              </p>
              {product.oldPrice && (
                <p className="text-xl text-zinc-400 line-through mb-1.5">
                  R$ {product.oldPrice.toLocaleString('pt-BR')}
                </p>
              )}
            </div>

            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                  <p className="text-xs text-zinc-500 uppercase font-bold mb-1">
                    {key === 'speed' ? 'Velocidade' : 
                     key === 'range' ? 'Autonomia' :
                     key === 'power' ? 'Potência' :
                     key === 'battery' ? 'Bateria' :
                     key === 'tires' ? 'Pneus' :
                     key === 'weight' ? 'Peso' :
                     key === 'chargeTime' ? 'Tempo de Carga' : key}
                  </p>
                  <p className="font-semibold text-zinc-900">{value}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="mb-10">
              <h3 className="font-bold text-zinc-900 mb-4">Destaques</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-zinc-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-lg shadow-orange-500/20">
                Adicionar ao Carrinho
              </button> */}
              <button className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold py-4 rounded-xl transition-colors text-lg">
                Comprar Agora
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-zinc-100">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-zinc-400 mb-2" />
                <span className="text-xs font-medium text-zinc-600">Frete Grátis</span>
              </div>
              {/* <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-6 h-6 text-zinc-400 mb-2" />
                <span className="text-xs font-medium text-zinc-600">Garantia de 1 Ano</span>
              </div> */}
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="w-6 h-6 text-zinc-400 mb-2" />
                <span className="text-xs font-medium text-zinc-600">Devolução Fácil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
