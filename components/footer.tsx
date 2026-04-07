import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import logo from '@/public/logo.png';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src={logo} alt="Logo Engwe" width={150} height={150} />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Redefinindo a mobilidade urbana e a aventura off-road com bicicletas elétricas inovadoras, potentes e acessíveis.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>

            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Produtos</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="/#bikes" className="hover:text-orange-500 transition-colors">Todas as E-Bikes</Link></li>
              <li><Link href="/bike/engwe-m1" className="hover:text-orange-500 transition-colors">Série M1</Link></li>
              <li><Link href="/bike/engwe-engine-x" className="hover:text-orange-500 transition-colors">Série Engine-X</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Acessórios</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Peças de Reposição</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Central de Ajuda</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Manuais</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Garantia</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Política de Devolução</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Fique por dentro</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Receba novidades, promoções exclusivas e dicas de manutenção.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors text-sm uppercase tracking-wide">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            © 2026 Engwe Brasil Concept. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos</Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
