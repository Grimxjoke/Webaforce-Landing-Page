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

        {/* Hero Image - Simulation de l'image de l'artisan connecté */}
        <div className="lg:w-2/5 relative">
           <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800 transform lg:rotate-2 hover:rotate-0 transition-all duration-700 bg-slate-200 dark:bg-slate-800 group">
              
              {/* Image principale (Charpentier sur toit) */}
              <img 
                src="https://images.unsplash.com/photo-1635424710928-0544e8512eea?auto=format&fit=crop&q=80&w=1200" 
                alt="Charpentier professionnel sur un chantier de toiture" 
                className="w-full h-auto object-cover min-h-[500px] transition-transform duration-700 group-hover:scale-110"
                loading="eager"
              />

              {/* Overlay Holographique / Tech (Simule l'IA de la photo) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-600/20 via-transparent to-blue-500/20 mix-blend-overlay"></div>
              
              {/* Éléments HUD (Lignes et grilles technologiques) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-blue-400 shadow-[0_0_10px_#60a5fa] animate-[pulse_4s_infinite]"></div>
                  <div className="absolute top-1/3 left-10 w-32 h-32 border border-blue-400/30 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 border border-blue-400/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                  </div>
                  <div className="absolute bottom-1/4 right-10 flex flex-col gap-1">
                      {[1,2,3,4].map(i => <div key={i} className="h-1 w-8 bg-blue-400/40" style={{width: `${Math.random()*40 + 20}px`}}></div>)}
                  </div>
              </div>

              {/* Badge d'information IA style HUD */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md p-5 rounded-lg border border-blue-500/30 shadow-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
                    <p className="text-blue-400 font-black uppercase text-[10px] tracking-[0.3em]">IA Analysis Terminal</p>
                  </div>
                  <p className="text-white font-bold text-sm tracking-tight leading-snug">
                    <span className="text-blue-400 mr-2">></span> 
                    Qualification du prospect : <span className="text-accent-500">Rénovation complète requise</span>
                  </p>
                  <div className="mt-3 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-3/4 animate-[shimmer_2s_infinite]"></div>
                  </div>
              </div>
           </div>
           
           {/* Badge de réassurance flottant (Gain de temps) */}
           <div className="absolute -top-6 -right-6 bg-accent-600 text-white p-5 rounded-full shadow-2xl flex flex-col items-center justify-center w-24 h-24 transform -rotate-12 z-20 border-4 border-slate-50 dark:border-slate-950">
              <span className="text-[10px] font-bold uppercase leading-none mb-1">Libérez</span>
              <span className="text-2xl font-black">10H</span>
              <span className="text-[10px] font-bold uppercase leading-none mt-1">/ Semaine</span>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;