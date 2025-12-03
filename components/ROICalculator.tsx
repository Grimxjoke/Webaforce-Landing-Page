import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [leads, setLeads] = useState(50);
  const [conversionRate, setConversionRate] = useState(2);
  const [avgTicket, setAvgTicket] = useState(500);

  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [projectedRevenue, setProjectedRevenue] = useState(0);
  const [additionalProfit, setAdditionalProfit] = useState(0);

  useEffect(() => {
    // Calcul basique
    const current = leads * (conversionRate / 100) * avgTicket;
    
    // WEBAFORCE boost : Hypothèse conservatrice de +40% de conversion grâce au suivi auto et speed-to-lead
    // + récupération de 10% de leads perdus
    const optimizedConversion = conversionRate * 1.4; 
    const projected = leads * (optimizedConversion / 100) * avgTicket;

    setCurrentRevenue(Math.round(current));
    setProjectedRevenue(Math.round(projected));
    setAdditionalProfit(Math.round(projected - current));
  }, [leads, conversionRate, avgTicket]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="roi-calculator" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-4 border border-brand-200 dark:border-brand-700/50 shadow-sm">
                <Calculator className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl transition-colors">
            Calculez votre Potentiel Inexploité
            </h2>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            L'automatisation ne coûte pas, elle rapporte. Estimez le gain mensuel immédiat en installant nos systèmes.
            </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Inputs Section */}
                <div className="p-8 lg:p-12 space-y-8">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Prospects par mois</label>
                            <span className="text-sm font-bold text-brand-600 dark:text-brand-400">{leads}</span>
                        </div>
                        <input 
                            type="range" 
                            min="10" 
                            max="500" 
                            step="10" 
                            value={leads} 
                            onChange={(e) => setLeads(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Taux de conversion actuel (%)</label>
                            <span className="text-sm font-bold text-brand-600 dark:text-brand-400">{conversionRate}%</span>
                        </div>
                        <input 
                            type="range" 
                            min="0.5" 
                            max="20" 
                            step="0.5" 
                            value={conversionRate} 
                            onChange={(e) => setConversionRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Panier moyen (€)</label>
                            <span className="text-sm font-bold text-brand-600 dark:text-brand-400">{avgTicket}€</span>
                        </div>
                        <input 
                            type="range" 
                            min="50" 
                            max="5000" 
                            step="50" 
                            value={avgTicket} 
                            onChange={(e) => setAvgTicket(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                        />
                    </div>

                    <div className="pt-4">
                        <p className="text-xs text-slate-500 italic">
                            *Basé sur une augmentation moyenne de 40% du taux de conversion grâce à la réponse instantanée (Speed-to-Lead) et aux relances automatiques.
                        </p>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-brand-600 dark:bg-slate-900 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative bg */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-brand-400/20 blur-3xl"></div>

                    <div className="relative z-10 space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-white/20">
                            <span className="text-brand-100 dark:text-slate-400 font-medium">Revenu Actuel</span>
                            <span className="text-2xl font-bold text-white dark:text-slate-200">{formatCurrency(currentRevenue)}</span>
                        </div>

                        <div className="flex justify-between items-center pb-4 border-b border-white/20">
                             <span className="text-white dark:text-brand-400 font-medium flex items-center gap-2">
                                <TrendingUp className="h-5 w-5" />
                                Avec WEBAFORCE
                             </span>
                            <span className="text-3xl font-bold text-white">{formatCurrency(projectedRevenue)}</span>
                        </div>

                        <div className="bg-white/10 dark:bg-brand-500/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-brand-500/30 transform transition-all duration-500 hover:scale-105">
                            <p className="text-brand-100 dark:text-brand-300 text-sm font-bold uppercase tracking-wider mb-1">Gain Mensuel Estimé</p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-white dark:text-brand-400 drop-shadow-md">
                                +{formatCurrency(additionalProfit)}
                            </p>
                        </div>

                        <a href="#contact" className="inline-flex items-center justify-center w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-brand-700 bg-white hover:bg-brand-50 font-bold transition-all mt-4">
                            Capturer ce revenu maintenant
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;