import React from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-950 to-slate-950"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="text-center md:text-left md:w-1/2 pt-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
            Nouvelle technologie 2024
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl leading-tight">
            <span className="block">Dominez votre marché par</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">
              l'Automatisation Intelligente
            </span>
          </h1>
          <p className="mt-6 max-w-md mx-auto md:mx-0 text-base text-slate-400 sm:text-lg md:mt-5 md:text-xl leading-relaxed">
            <strong>WEBAFORCE</strong> transforme votre acquisition client. De la <strong>réactivation de base client</strong> à la gestion multicanale, nous déployons les systèmes qui génèrent du profit pendant que vous dormez.
          </p>
          
          <div className="mt-8 sm:flex sm:justify-center md:justify-start gap-4">
            <div className="rounded-md shadow">
              <a
                href="#pricing"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg transition-all shadow-[0_0_20px_rgba(2,132,199,0.4)]"
              >
                Découvrir nos Offres
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-3 sm:mt-0">
              <a
                href="#demo"
                className="w-full flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-md text-brand-400 bg-slate-900/50 hover:bg-slate-800 md:py-4 md:text-lg transition-colors backdrop-blur-sm"
              >
                <Play className="ml-2 h-4 w-4 mr-2 fill-current" />
                Voir la démo
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-brand-500" />
                <span>Installation Rapide</span>
            </div>
            <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-brand-500" />
                <span>ROI Mesurable</span>
            </div>
            <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-brand-500" />
                <span>Sans Engagement</span>
            </div>
          </div>
        </div>

        {/* Visual Representation - Image generated conceptually by Nano Banana */}
        <div className="mt-12 md:mt-0 md:w-1/2 relative perspective-1000">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group transform transition-transform hover:scale-[1.02] duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
              <div className="absolute inset-0 bg-brand-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              
              {/* Image: Futuristic AI Brain/Network - Dark Mode Theme */}
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000" 
                alt="Intelligence Artificielle WEBAFORCE" 
                className="w-full h-auto object-cover min-h-[400px]"
              />

              {/* Floating Elements Overlay */}
              <div className="absolute bottom-6 left-6 z-20 right-6">
                 <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-lg flex items-center gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="h-12 w-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                        <div className="w-3 h-3 bg-brand-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Système WEBAFORCE Actif</p>
                        <p className="text-brand-400 text-xs">Analyse des leads en temps réel...</p>
                    </div>
                    <div className="ml-auto text-green-400 text-xs font-mono font-bold">
                        +34% CROISSANCE
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;