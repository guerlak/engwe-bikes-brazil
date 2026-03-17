'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const RECOGNITIONS = [
  {
    company: 'C-NET',
    logo: '/images/press/wired.svg', // I'll use text for now as placeholders or SVGs
    testimonial: 'ENGWEs e-bikes, you can ride someting that feels great and looks awesome',
    rating: 5
  },
  {
    company: 'Forbes',
    logo: '/images/press/forbes.svg',
    testimonial: 'You\'d be hard pressed to find a reliable e-bike for less than this, which makes it even more impressive.',
    rating: 5
  },
  {
    company: 'The Verge',
    logo: '/images/press/gq.svg',
    testimonial: 'A fine option if you \'re looking to buy a fun two-wheeler for play and the occasional errand.',
    rating: 5
  },
];

export function InternationalRecognition() {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-4"
          >
            Reconhecimento Internacional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
          >
            O que a imprensa especializada e as maiores autoridades globais dizem sobre a Engwe em todo o mundo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {RECOGNITIONS.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Logo Placeholder - Text based styling to look like press logos */}
              <div className="mb-6 h-8 flex items-center justify-center">
                <span className={`text-2xl font-black tracking-tighter text-zinc-300 group-hover:text-zinc-900 transition-colors uppercase ${
                  item.company === 'C-NET' ? 'font-sans' :
                    item.company === 'Forbes' ? 'font-serif italic' :
                      item.company === 'The Verge' ? 'font-display' : 'font-sans'
                  }`}>
                  {item.company}
                </span>
              </div>

              <div className="mb-4">
                <Quote className="w-8 h-8 text-orange-500/20 mx-auto" />
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed italic mb-4">
                "{item.testimonial}"
              </p>

              <div className="mt-auto pt-4 border-t border-zinc-50 w-full">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Press Review
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats or Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-zinc-900">10+</p>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Países</p>
          </div>
          <div className="w-px h-8 bg-zinc-200 hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-zinc-900">100K+</p>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">e-Bikers</p>
          </div>
          <div className="w-px h-8 bg-zinc-200 hidden md:block" />

        </motion.div>
      </div>
    </section>
  );
}
