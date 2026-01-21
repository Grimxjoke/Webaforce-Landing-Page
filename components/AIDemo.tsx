import React, { useEffect } from 'react';
import { Bot, Sparkles, Phone, Shield } from 'lucide-react';

const AIDemo: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute('data-resources-url', "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute('data-widget-id', "6904bfe3c01664615ceb1bf1");
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="demo" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 mb-2 px-4 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 border border-accent-500/30">
                <Shield className="text-accent-600 dark:text-accent-400 h-4 w-4" />
                <span className="text-accent-700 dark:text-accent-400 font-semibold uppercase tracking-wider text-xs">Essai Gratuit Disponible</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300 uppercase">
              Éliminez le <span className="text-accent-600">Dark Funnel</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300">Testez notre ligne de démonstration ou lancez votre essai gratuit de 7 jours.</p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-stretch">
          
          <div className="col-span-12 lg:col-span-5 mb-8 lg:mb-0">
             <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl hover:border-accent-600/30 transition-all h-full flex flex-col justify-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-accent-100 dark:bg-accent-600/20 text-accent-600 mx-auto mb-6">
                    <Phone className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white text-center mb-4 uppercase tracking-tight">Ligne Démo IA</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center text-lg mb-8 font-medium">
                    Appelez pour voir comment l'IA qualifie une demande de toiture ardoise ou une urgence fuite en quelques secondes.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-accent-600/30 rounded-xl p-6 text-center mb-6">
                    <p className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-2">Numéro de Test</p>
                    <a href="tel:0939030564" className="text-3xl font-mono font-black text-slate-900 dark:text-white tracking-wider hover:text-accent-600 transition-colors">
                      09 39 03 05 64
                    </a>
                </div>

                <a href="#contact" className="text-center py-3 bg-accent-600 text-white font-bold rounded uppercase tracking-widest hover:bg-accent-700 transition-colors">
                    Démarrer mon essai gratuit
                </a>
             </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full min-h-[400px]">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-accent-600 flex items-center justify-center text-white">
                          <Bot className="h-7 w-7" />
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Audit de Visibilité</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold">Analyse Google Maps & Web</p>
                      </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-10 text-center space-y-6">
                    <div className="p-4 bg-accent-50 dark:bg-accent-900/10 rounded-full">
                        <Sparkles className="h-12 w-12 text-accent-600" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4">Où en est votre entreprise ?</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md mx-auto font-medium">
                            Nous réalisons une recherche réelle sur votre secteur pour vous montrer votre position actuelle et celle de vos concurrents dans le Local Pack.
                            <br/><br/>
                            <span className="text-accent-600 font-bold">Contactez-nous via le formulaire ci-dessous pour recevoir votre rapport PDF gratuit.</span>
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;