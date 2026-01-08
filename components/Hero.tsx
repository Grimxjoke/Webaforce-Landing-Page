import React from 'react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Texture de fond discrète */}
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
            Spécialiste Couvreurs & Charpentiers
          </div>
          <h1 className="text-4xl tracking-tight font-black text-slate-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.1] transition-colors duration-300 uppercase">
            Ne laissez plus vos devis <br/>
            <span className="text-accent-600">s'envoler.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Sur le toit ou en plein chantier ? <strong>WEBAFORCE</strong> automatise votre accueil client. Notre IA répond à vos appels, qualifie les demandes de travaux et fixe vos rendez-vous 24h/24. Concentrez-vous sur votre métier, nous gérons votre carnet de commandes.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded bg-accent-600 hover:bg-accent-700 text-white transition-all shadow-lg uppercase tracking-wider"
            >
              Demander une étude gratuite
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
                <span>Réponse 24h/7j</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                <span>Zéro appel manqué</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                <span>Devis qualifiés</span>
            </div>
          </div>
        </div>

        {/* Hero Image - Couvreur/Charpente */}
        <div className="lg:w-2/5 relative">
           <div className="relative rounded shadow-2xl overflow-hidden border-8 border-white dark:border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1635424710928-0544e8512eea?auto=format&fit=crop&q=80&w=800" 
                alt="Travaux de couverture et charpente professionnelle" 
                className="w-full h-auto object-cover min-h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 p-4 rounded shadow-lg border-l-4 border-accent-600">
                  <p className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-widest mb-1">Status Système</p>
                  <p className="text-accent-700 dark:text-accent-500 font-bold text-sm">IA en ligne : Prise de RDV active</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;