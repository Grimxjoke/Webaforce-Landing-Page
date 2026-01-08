import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Cpu, Activity, BarChart3 } from 'lucide-react';

const AIInterface = () => (
  <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center lg:justify-end lg:pr-12">
    {/* Conteneur de l'hologramme avec animation de flottement */}
    <div className="relative w-72 h-80 sm:w-80 sm:h-96 bg-blue-500/10 backdrop-blur-md border border-blue-400/30 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.2)] p-4 animate-[float_6s_ease-in-out_infinite] hidden md:block overflow-hidden">
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-20 w-full -translate-y-full animate-[scan_3s_linear_infinite]"></div>

      <div className="flex items-center gap-2 mb-4 border-b border-blue-400/20 pb-2">
        <Cpu className="h-4 w-4 text-blue-400" />
        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">WEBAFORCE OS v2.5</span>
      </div>

      {/* Simulation de Flowchart/Graphique */}
      <div className="space-y-4">
        <div className="bg-blue-400/10 p-2 rounded border border-blue-400/20">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[8px] text-blue-300 uppercase">Analyse Structurelle</span>
            <Activity className="h-3 w-3 text-blue-400" />
          </div>
          <div className="h-12 flex items-end gap-1 px-1">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-500/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-900/40 p-2 rounded border border-blue-400/20">
            <p className="text-[8px] text-blue-300 uppercase mb-1">Précision</p>
            <p className="text-sm font-black text-white">99.8%</p>
          </div>
          <div className="bg-slate-900/40 p-2 rounded border border-blue-400/20">
            <p className="text-[8px] text-blue-300 uppercase mb-1">Status</p>
            <p className="text-sm font-black text-green-400">OPTIMAL</p>
          </div>
        </div>

        <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-400/40 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border-2 border-blue-400 border-t-transparent animate-spin"></div>
          <div>
            <p className="text-[9px] text-white font-bold">CALCUL DES DEVIS...</p>
            <p className="text-[7px] text-blue-300">Synchronisation Cloud Artisans</p>
          </div>
        </div>

        <div className="pt-2">
           <div className="flex items-center justify-between text-[8px] text-blue-300 mb-1 uppercase tracking-tighter">
              <span>Optimisation Marges</span>
              <span>+24%</span>
           </div>
           <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="h-full bg-blue-400 w-3/4"></div>
           </div>
        </div>
      </div>

      {/* Effet de lueur sur les coins */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-400"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-400"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-400"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-400"></div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Grid Pattern */}
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

        {/* Hero Image - Artisan avec Hologramme IA */}
        <div className="lg:w-1/2 relative group">
           <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800 transform lg:rotate-1 hover:rotate-0 transition-all duration-700 bg-slate-900">
              
              {/* Image HD (Charpentier / Sunset / Charpente apparente) */}
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" 
                alt="Charpentier travaillant au coucher du soleil" 
                className="w-full h-auto object-cover min-h-[500px] opacity-80 group-hover:scale-105 transition-transform duration-1000"
                loading="eager"
              />

              {/* L'interface holographique dynamique */}
              <AIInterface />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-lg border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-white font-black uppercase text-[10px] tracking-widest">IA Métier Active</p>
                  </div>
                  <p className="text-slate-300 text-xs mt-1">Identification automatique des besoins : Toiture Ardoise / Rénovation complète</p>
              </div>
           </div>
           
           {/* Flottant Gain de temps */}
           <div className="absolute -top-8 -right-8 bg-accent-600 text-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-28 h-28 transform -rotate-12 z-30 border-4 border-slate-50 dark:border-slate-950 animate-bounce-slow">
              <span className="text-[10px] font-bold uppercase leading-none mb-1">Gagnez</span>
              <span className="text-3xl font-black">10H</span>
              <span className="text-[10px] font-bold uppercase leading-none mt-1">/ Semaine</span>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-10px) rotate(-12deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;