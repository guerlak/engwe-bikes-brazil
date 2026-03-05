'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import logo from '@/public/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'E-Bikes', href: '#bikes' },
    { name: 'Acessórios', href: '#accessories' },
    { name: 'Comunidade', href: '#community' },
    { name: 'Suporte', href: '#support' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src={logo} alt="Logo" width={150} height={150} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  scrolled ? 'text-zinc-800' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          {/* <div className="hidden md:flex items-center space-x-6">
            <button className={`transition-colors hover:text-orange-500 ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`transition-colors hover:text-orange-500 ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
              <User className="w-5 h-5" />
            </button>
            <button className={`relative transition-colors hover:text-orange-500 ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-zinc-800' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-zinc-900 hover:text-orange-500 border-b border-zinc-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* <div className="flex items-center space-x-6 px-3 py-4">
                <Search className="w-5 h-5 text-zinc-900" />
                <User className="w-5 h-5 text-zinc-900" />
                <ShoppingCart className="w-5 h-5 text-zinc-900" />
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
