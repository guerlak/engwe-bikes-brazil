import { PRODUCTS } from '@/lib/data';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Star, Truck, ShieldCheck, RotateCcw, Check, ArrowLeft, Quote } from 'lucide-react';
import { ProductGallery } from '@/components/product-gallery';
import { NavbarNested } from '@/components/navbarNested';


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
      <NavbarNested />
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#bikes" className="inline-flex items-center text-zinc-500 hover:text-orange-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery Section */}
          <ProductGallery images={product.images} name={product.name} tag={product.tag} />

          {/* Product Info Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href={`#reviews`} className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-zinc-200 fill-zinc-200'}`} />
                ))}

                <span className="text-sm text-zinc-500 font-medium ml-1">{product.testimonials.length} Avaliações</span>
              </Link>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              {product.name}
            </h1>



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

              <a href={product.mktplaceLink} target='_blank' className="inline-flex items-center justify-center flex-1/2 bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-colors text-lg">
                Acessar Loja Oficial
              </a>
            </div>

            {/* Trust Badges */}

          </div>
        </div>

        {/* Testimonials Section */}
        {product.testimonials && (
          <div className="mt-16 max-w-5xl mx-auto" id="reviews">
            <h3 className="text-2xl font-bold text-zinc-900 mb-10 text-center">O que nossos clientes dizem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.testimonials.map((t, i) => (
                <div key={i} className="bg-zinc-50 rounded-2xl p-6 relative overflow-hidden border border-zinc-100 shadow-sm flex flex-col justify-between">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-zinc-200/50 -z-0" />
                  <div className="relative z-10">
                    <div className="flex text-orange-400 mb-3">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} className={`w-4 h-4 ${starIndex < t.rating ? 'fill-current' : 'text-zinc-200'}`} />
                      ))}
                    </div>
                    <blockquote className="text-zinc-700 leading-relaxed mb-6 italic text-sm md:text-base">
                      "{t.phrase}"
                    </blockquote>
                  </div>
                  <div className="relative z-10 flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <cite className="not-italic font-bold text-zinc-900 text-sm block leading-none mb-1">
                        {t.name}
                      </cite>
                      <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">Cliente Verificado</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
