import Image from 'next/image';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export default function CommmunitySection() {
  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: 'https://instagram.com/engwebra', label: 'Instagram' },
    { icon: <Youtube className="w-6 h-6" />, href: 'https://youtube.com/@engwe', label: 'YouTube' },
    { icon: <Facebook className="w-6 h-6" />, href: 'https://facebook.com/engwe', label: 'Facebook' },
  ];

  return (
    <section id="community" className="py-24 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Comunidade Engwe
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Junte-se a Milhares de <br />
              Aventureiros pelo Mundo.
            </h2>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              Nossas bicicletas não são apenas um meio de transporte, são um passaporte para a liberdade. Veja como nossa comunidade está explorando o mundo, desde trilhas urbanas até montanhas inexploradas.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-500 transition-all duration-300 shadow-sm"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src="/images/home/bike-pessoa-001.png"
                  alt="Lifestyle 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden relative group">
                <Image
                  src="/images/home/bike-pessoa-002.png"
                  alt="Lifestyle 2"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden relative group">
                <Image
                  src="/images/home/bike-pessoa-001.png"
                  alt="Lifestyle 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden relative group">
                <Image
                  src="/images/home/bike-pessoa-002.png"
                  alt="Lifestyle 4"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 