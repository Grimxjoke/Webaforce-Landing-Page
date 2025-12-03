import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Zap className="h-6 w-6 text-brand-400" />
          <span className="text-xl font-bold text-white">WEBAFORCE</span>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            Mentions Légales
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;