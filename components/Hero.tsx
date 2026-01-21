import React from 'react';
import { ArrowRight, MapPin, PhoneForwarded, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="inline-flex items-center px-4 py-1.5 rounded bg-accent-600/10 border border-accent-600/20 text-accent-700 dark:text-accent-500 text-sm font-bold tracking-widest uppercase mb-6">
            Spécialiste Couvreurs & Charpentiers
          </div>
          <h1 className="text-4xl tracking-tight font-black text-slate-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.1] transition-colors duration-300 uppercase">
            Soyez le premier <br/>
            <span className="text-accent-600">Couvreur appelé</span> <br/>
            sur Google Maps.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            80% des clients cliquent sur les 3 premiers résultats Maps. Nous vous y installons. Et quand vous êtes sur le toit, notre <span className="font-bold text-slate-900 dark:text-white">Réceptionniste IA</span> décroche pour vous : ne laissez plus vos prospects appeler vos concurrents.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded bg-accent-600 hover:bg-accent-700 text-white transition-all shadow-lg uppercase tracking-wider group"
            >
              Mon Audit Gratuit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-base font-bold rounded text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all uppercase tracking-wider"
            >
              Essai Gratuit 2 Semaines
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="h-5 w-5 text-accent-600" />
                <span>Top 3 Google Pack</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <PhoneForwarded className="h-5 w-5 text-accent-600" />
                <span>Zéro Appels Perdus</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
                <BarChart3 className="h-5 w-5 text-accent-600" />
                <span>Audit de Visibilité Offert</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 relative group">
           <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800 transition-all duration-700 bg-slate-900">
              <img 
                src="https://storage.googleapis.com/msgsndr/Vgeb2do8weO0FdB77r5v/media/695ff046fface13a472aaac6.png" 
                alt="Artisan couvreur utilisant WEBAFORCE" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
           </div>
           
           <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 z-20 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                 <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <TrendingUpIcon className="h-6 w-6 text-green-600" />
                 </div>
                 <div>
                    <p className="text-[10px] uppercase font-black text-slate-500">Visibilité</p>
                    <p className="text-xl font-black text-slate-900 dark:text-white uppercase">TOP 3 MAPS</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

const TrendingUpIcon = ({className}: {className?: string}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
);

export default Hero;