'use client';

import { ProductCard } from './product-card';
import { PRODUCTS } from '@/lib/data';

export function ProductSection() {
  return (
    <section id="bikes" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-zinc-900 mb-4">
            Nossos Modelos
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Escolha a bicicleta perfeita para o seu estilo de vida. Seja para aventuras off-road ou deslocamento urbano, temos a opção ideal para você.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.slug} className="w-full sm:w-[calc(50%-1rem)] max-w-[550px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
