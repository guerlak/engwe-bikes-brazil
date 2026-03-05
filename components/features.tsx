'use client';

import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

const FEATURES = [
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Entrega gratuita para todo o Brasil em pedidos acima de R$ 500.'
  },
  {
    icon: ShieldCheck,
    title: 'Garantia de 1 Ano',
    description: 'Cobertura completa para defeitos de fabricação e peças principais.'
  },
  {
    icon: RotateCcw,
    title: '30 Dias para Devolução',
    description: 'Não gostou? Devolva em até 30 dias sem complicações.'
  },
  {
    icon: Headphones,
    title: 'Suporte Premium',
    description: 'Equipe especializada pronta para ajudar via chat ou email.'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
