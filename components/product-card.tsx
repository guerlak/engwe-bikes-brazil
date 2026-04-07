import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, Zap, Battery, Gauge } from 'lucide-react';

interface ProductProps {
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  mktplaceLink: string;
  specs: {
    speed: string;
    range: string;
    power: string;
  };
  tag?: string;
  images: Record<string, string[]>;
}

export function ProductCard({ product }: { product: ProductProps }) {
  return (
    <Link href={`/bike/${product.slug}`} className="">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-white rounded-2xl overflow-hidden border-2 border-zinc-100 hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      >
        {/* Badge */}
        {product.tag && (
          <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.tag}
          </div>
        )}

        {/* Image */}
        <div className="relative aspect-[4/3] bg-zinc-50 overflow-hidden">
          <Image
            src={Object.values(product.images)[0][0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">

          <h3 className="font-display text-xl font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
            {product.name}
          </h3>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-zinc-100 min-h-30">
            <div className="text-center">
              <Gauge className="w-4 h-4 mx-auto mb-1 text-zinc-400" />
              <p className="text-[10px] text-zinc-500 uppercase font-medium">Velocidade</p>
              <p className="text-xs font-bold text-zinc-900">{product.specs.speed}</p>
            </div>
            <div className="text-center border-l border-zinc-100">
              <Battery className="w-4 h-4 mx-auto mb-1 text-zinc-400" />
              <p className="text-[10px] text-zinc-500 uppercase font-medium">Autonomia</p>
              <p className="text-xs font-bold text-zinc-900">{product.specs.range}</p>
            </div>
            <div className="text-center border-l border-zinc-100">
              <Zap className="w-4 h-4 mx-auto mb-1 text-zinc-400" />
              <p className="text-[10px] text-zinc-500 uppercase font-medium">Potência</p>
              <p className="text-xs font-bold text-zinc-900">{product.specs.power}</p>
            </div>
          </div>

          <div className="flex justify-center">

            <span className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium group-hover:bg-orange-500 transition-colors">
              Ver Detalhes
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
