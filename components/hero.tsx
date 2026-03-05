'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/public/engwe-hero.png';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Engwe E-bike em ação"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
            Nova Série X
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-6">
            EXPLORE <br />
            SEM LIMITES.
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed">
            Descubra a liberdade com as bicicletas elétricas mais potentes e versáteis do mercado. Projetadas para qualquer terreno, construídas para a aventura.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 group">
              Comprar Agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-all border border-white/10">
              Ver Modelos
            </button>
          </div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-widest">Role para baixo</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
