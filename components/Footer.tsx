import React from 'react';
import { Zap, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-6 w-6 text-brand-600 dark:text-brand-400" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">WEBAFORCE</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs text-center md:text-left">
            L'agence d'automatisation nouvelle génération pour les entreprises ambitieuses.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <a href="https://linkedin.com/company/webaforce" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors transform hover:scale-110">
            <Linkedin className="h-5 w-5" />
          </a>
           <a href="https://twitter.com/webaforce" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors transform hover:scale-110">
            <Twitter className="h-5 w-5" />
          </a>
           <a href="https://facebook.com/webaforce" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors transform hover:scale-110">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://instagram.com/webaforce" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors transform hover:scale-110">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://youtube.com/@webaforce" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors transform hover:scale-110">
            <Youtube className="h-5 w-5" />
          </a>
          
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block mx-2"></div>
          
          <div className="flex gap-4">
            <a href="#" className="text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                Mentions Légales
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;