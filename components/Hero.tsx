import React from 'react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="inline-flex items-center px-4 py-1.5 rounded bg-accent-600/10 border border-accent-600/20 text-accent-700 dark:text-accent-500 text-sm font-bold tracking-widest uppercase mb-6">
            L'Artisanat de demain, aujourd'hui
          </div>
          <h1 className="text-4xl tracking-tight font-black text-slate-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.1] transition-colors duration-300 uppercase">
            La force de l'IA <br/>
            <span className="text-accent-600">sur chaque chantier.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Gagnez 10h par semaine. WEBAFORCE automatise votre accueil, qualifie vos projets et remplit votre carnet de commandes. Laissez l'IA gérer l'administratif, gardez les mains sur les outils.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="tel:0939030564"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded bg-accent-600 hover:bg-accent-700 text-white transition-all shadow-lg uppercase tracking-wider group"
            >
              Appeler pour un Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-base font-bold rounded text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all uppercase tracking-wider"
            >
              <Phone className="mr-2 h-5 w-5 text-accent-600" />
              Tester la démo
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                <span>Expertise Bâtiment</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                <span>Gain de CA immédiat</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                <span>Support 7j/7</span>
            </div>
          </div>
        </div>

        {/* Hero Image - Photo Officielle */}
        <div className="lg:w-1/2 relative group">
           <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800 transition-all duration-700 bg-slate-900">
              <img 
                src="https://storage.googleapis.com/msgsndr/Vgeb2do8weO0FdB77r5v/media/695ff046fface13a472aaac6.png" 
                alt="Charpentier utilisant l'interface IA WEBAFORCE sur un chantier" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />
              
              {/* Overlay subtil pour le contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
           </div>
           
           {/* Badge flottant Gain de temps */}
           <div className="absolute -top-6 -right-6 bg-accent-600 text-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-28 h-28 transform -rotate-12 z-20 border-4 border-slate-50 dark:border-slate-950">
              <span className="text-[10px] font-bold uppercase leading-none mb-1">Gagnez</span>
              <span className="text-3xl font-black">10H</span>
              <span className="text-[10px] font-bold uppercase leading-none mt-1">/ Semaine</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;