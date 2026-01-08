import React, { useEffect } from 'react';
import { Bot, Sparkles, Phone, MessageSquare } from 'lucide-react';

const AIDemo: React.FC = () => {
  useEffect(() => {
    // Intégration du widget LeadConnector
    const script = document.createElement('script');
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute('data-resources-url', "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute('data-widget-id', "6904bfe3c01664615ceb1bf1");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optionnel: nettoyage du script si nécessaire lors du démontage
      // Mais généralement les widgets GHL restent persistants
    };
  }, []);

  return (
    <section id="demo" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden scroll-mt-20 transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-brand-600/20 to-transparent dark:from-brand-900/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 mb-2 px-4 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 border border-brand-500/30">
                <Sparkles className="text-brand-600 dark:text-brand-400 h-4 w-4" />
                <span className="text-brand-700 dark:text-brand-400 font-semibold uppercase tracking-wider text-xs">Démonstration Interactive</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300">
              Testez la puissance de <span className="text-accent-600">l'IA</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-300">Interagissez en temps réel avec nos outils automatisés.</p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-stretch">
          
          {/* Phone Demo Section */}
          <div className="col-span-12 lg:col-span-5 mb-8 lg:mb-0">
             <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl hover:border-accent-600/30 transition-all h-full flex flex-col justify-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-accent-100 dark:bg-accent-600/20 text-accent-600 mx-auto mb-6 animate-pulse-slow">
                    <Phone className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white text-center mb-4 uppercase tracking-tight">Agent Vocal IA</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center text-lg mb-8 font-medium">
                    Appelez notre ligne de démonstration pour voir comment l'IA gère vos appels entrants, qualifie les travaux et prend rendez-vous.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-accent-600/30 rounded-xl p-6 text-center mb-6 transition-colors">
                    <p className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-2">Ligne de Démonstration</p>
                    <a href="tel:0939030564" className="text-3xl font-mono font-black text-slate-900 dark:text-white tracking-wider hover:text-accent-600 transition-colors">
                      09 39 03 05 64
                    </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm font-bold text-accent-700 dark:text-accent-500 bg-accent-50 dark:bg-accent-900/20 py-2 rounded">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                    OPÉRATIONNEL 24H/7J
                </div>
             </div>
          </div>

          {/* Chat Widget Info Section */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full min-h-[400px] transition-colors duration-300">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between transition-colors">
                  <div className="flex items-center">
                      <div className="relative">
                        <div className="h-12 w-12 rounded-full bg-accent-600 flex items-center justify-center text-white">
                            <Bot className="h-7 w-7" />
                        </div>
                        <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-slate-50 dark:border-slate-800"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Assistant WEBAFORCE</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold">Widget de Chat Officiel Activé</p>
                      </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-10 text-center space-y-6">
                    <div className="p-4 bg-accent-50 dark:bg-accent-900/10 rounded-full">
                        <MessageSquare className="h-12 w-12 text-accent-600" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4">Besoin d'aide ?</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md mx-auto font-medium">
                            Notre assistant intelligent est disponible pour répondre à toutes vos questions sur nos solutions pour couvreurs. 
                            <br/><br/>
                            <span className="text-accent-600 font-bold">Utilisez la bulle de discussion en bas à droite de votre écran pour commencer à discuter avec nous !</span>
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Tarifs", "Installation", "Démo Vocale"].map((tag) => (
                            <span key={tag} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-black uppercase tracking-widest rounded-full border border-slate-200 dark:border-slate-700">
                                {tag}
                            </span>
                        ))}
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