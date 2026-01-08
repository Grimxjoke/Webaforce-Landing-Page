import React from 'react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Texture de fond discrète (Quadrillage de plan de charpente) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="text-center lg:text-left lg:w-3/5">
          <div className="inline-flex items-center px-4 py-1.5 rounded bg-accent-600/10 border border-accent-600/20 text-accent-700 dark:text-accent-500 text-sm font-bold tracking-widest uppercase mb-6">
            L'Intelligence Artificielle au service du bâtiment
          </div>
          <h1 className="text-4xl tracking-tight font-black text-slate-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.1] transition-colors duration-300 uppercase">
            Le futur de la <br/>
            <span className="text-accent-600">charpente & couverture.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Gagnez 10h par semaine sur vos devis et votre gestion client. Notre IA spécialisée dans le bâtiment automatise vos prises de rendez-vous chantier pendant que vous restez concentré sur l'essentiel : la qualité de vos ouvrages.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="tel:0939030564"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded bg-accent-600 hover:bg-accent-700 text-white transition-all shadow-lg uppercase tracking-wider"
            >
              Appeler pour un Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-base font-bold rounded text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all uppercase tracking-wider"
            >
              <Phone className="mr-2 h-5 w-5 text-accent-600" />
              Tester l'Agent Vocal
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                <span>Analyse de projet IA</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                <span>Réponse Immédiate</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                <span>Chantiers Qualifiés</span>
            </div>
          </div>
        </div>

        {/* Hero Image - Couvreur/Charpente avec Interface IA */}
        <div className="lg:w-2/5 relative">
           <div className="relative rounded shadow-2xl overflow-hidden border-8 border-white dark:border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-slate-200 dark:bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1621905235858-668d249edbbd?auto=format&fit=crop&q=80&w=1200" 
                alt="Charpentier professionnel utilisant des outils digitaux avancés" 
                className="w-full h-auto object-cover min-h-[450px] mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              
              {/* Overlay technologique pour simuler l'interface holographique */}
              <div className="absolute top-1/4 left-0 right-0 h-1/2 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-full h-px bg-accent-500/50 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 p-4 rounded shadow-lg border-l-4 border-accent-600 backdrop-blur-sm">
                  <p className="text-slate-900 dark:text-white font-black uppercase text-[10px] tracking-widest mb-1">Algorithme Métier</p>
                  <p className="text-accent-700 dark:text-accent-500 font-bold text-sm">IA de Qualification active : 100% opérationnelle</p>
              </div>
           </div>
           
           {/* Badge de réassurance flottant */}
           <div className="absolute -top-4 -right-4 bg-accent-600 text-white p-4 rounded-full shadow-xl hidden sm:flex flex-col items-center justify-center w-20 h-20 transform -rotate-12">
              <span className="text-[10px] font-bold uppercase leading-none">Gain de</span>
              <span className="text-xl font-black">75%</span>
              <span className="text-[10px] font-bold uppercase leading-none">Temps</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;