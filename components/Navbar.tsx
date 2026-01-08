import React, { useState } from 'react';
import { Menu, X, Hammer, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Nos Services', href: '#services' },
    { name: 'Démo IA', href: '#demo' },
    { name: 'Notre Approche', href: '#solutions' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" aria-label="Retour à l'accueil" className="flex-shrink-0 text-accent-600 flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Hammer className="h-8 w-8" />
              <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">WEBAFORCE</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-500 px-1 py-2 rounded-md text-sm font-semibold transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <a
                href="tel:0939030564"
                className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2.5 rounded shadow-md hover:shadow-lg transition-all font-bold uppercase text-sm tracking-wider"
              >
                Appeler pour un devis
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-500"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-500 hover:text-accent-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 dark:text-slate-200 block px-3 py-3 text-base font-bold uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0939030564"
              onClick={() => setIsOpen(false)}
              className="bg-accent-600 text-white block px-4 py-3 rounded font-bold text-center uppercase shadow-md"
            >
              Appeler Directement
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;