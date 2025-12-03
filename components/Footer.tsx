import React from 'react';
import { Zap, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Zap className="h-6 w-6 text-brand-600 dark:text-brand-400" />
          <span className="text-xl font-bold text-slate-900 dark:text-white">WEBAFORCE</span>
        </div>
        
        <div className="flex space-x-6 items-center">
          <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
           <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
           <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-brand-600 dark:hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
          <a href="#" className="text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-white transition-colors">
            Mentions Légales
          </a>
          <a href="#" className="text-sm text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-white transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;