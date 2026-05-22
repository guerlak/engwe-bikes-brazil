import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import logo from '@/public/logo-white.png';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src={logo} alt="Logo Engwe" width={150} height={150} className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Redefinindo a mobilidade urbana e a aventura off-road com bicicletas elétricas inovadoras, potentes e acessíveis.
            </p>
            <div className="flex space-x-5">
              <Link href="https://www.instagram.com/engwebrasil" className="text-zinc-500 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/@engweofficial" className="text-zinc-500 hover:text-orange-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Produtos</h4>
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
            <h4 className="text-white font-semibold text-lg mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="/assistencia" className="hover:text-orange-500 transition-colors font-medium">Assistência Técnica</Link></li>
              <li><Link href="/garantia" className="hover:text-orange-500 transition-colors">Garantia</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-zinc-500 shrink-0" />
                <a href="mailto:contato@engwe.com.br" className="hover:text-orange-500 transition-colors">contato@engwebrasil.com.br</a>
              </li>
              {/* <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-zinc-500 shrink-0" />
                <span className="hover:text-orange-500 transition-colors cursor-pointer">+55 (21) 99381-8787</span>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-zinc-500 shrink-0" />
                <span>Rio de Janeiro, RJ - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Engwe Brasil Concept. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
