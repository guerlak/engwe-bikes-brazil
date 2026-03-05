'use client';

import { motion } from 'motion/react';

export function VideoSection() {
  return (
    <section className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-zinc-800/40 rounded-full blur-[100px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            Performance em Movimento
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]"
          >
            A Força que Move sua <br />
            <span className="text-zinc-500">Próxima Aventura.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Assista e sinta a potência das nossas e-bikes em ação. Tecnologia de ponta, design robusto e a liberdade que você sempre buscou.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group max-w-5xl mx-auto"
        >
          {/* Video Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl bg-black border border-white/5">
            <iframe 
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              src="https://www.youtube.com/embed/6TYow1Ish1U?si=RnwONz8smAoxYgIY" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
