import React from 'react';
import { Check, ShieldCheck, Map, Phone } from 'lucide-react';

const solutions = [
  {
    name: 'Pack Visibilité',
    description: "L'essentiel pour apparaître là où vos clients vous cherchent.",
    features: [
      'Audit complet de visibilité digitale',
      'Optimisation Fiche Google Business',
      'Stratégie de mots-clés locaux',
      'Nettoyage des citations web',
      'Rapport mensuel de positionnement'
    ],
    highlight: false,
    icon: Map
  },
  {
    name: 'Pack Performance',
    description: "Dominez votre secteur et capturez chaque opportunité.",
    features: [
      'Tout du Pack Visibilité',
      'Réceptionniste IA (24h/7j)',
      'Placement garanti Top 3 Local Pack*',
      'Relance SMS automatique sur appels manqués',
      'Essai gratuit 7 jours inclus',
      'Gestion automatisée des avis Google'
    ],
    highlight: true,
    icon: ShieldCheck
  },
  {
    name: 'Pack Domination',
    description: "Pour les entreprises de toiture qui veulent verrouiller leur marché.",
    features: [
      'Tout du Pack Performance',
      'Campagnes Google Ads locales ciblées',
      'Multi-fiches Google (selon éligibilité)',
      'Intégration CRM métier complète',
      'Suivi stratégique bi-mensuel',
      'Support VIP prioritaire'
    ],
    highlight: false,
    icon: Phone
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-100 dark:bg-slate-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Nos Solutions de Croissance
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 font-medium">
            Des résultats mesurables : plus de visibilité, plus d'appels, plus de chantiers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol) => (
            <div
              key={sol.name}
              className={`relative p-10 bg-white dark:bg-slate-800 rounded border-2 flex flex-col transition-all ${
                sol.highlight
                  ? 'border-accent-600 shadow-xl shadow-accent-600/10 scale-105 z-10'
                  : 'border-transparent shadow-md'
              }`}
            >
              {sol.highlight && (
                 <div className="absolute top-0 py-1 px-4 bg-accent-600 rounded-full transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs font-black text-white uppercase tracking-widest shadow-lg">
                    Populaire
                 </div>
              )}
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <sol.icon className="h-6 w-6 text-accent-600" />
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        {sol.name}
                    </h3>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium italic">
                    {sol.description}
                </p>

                <div className="h-px bg-slate-100 dark:bg-slate-700 my-8"></div>

                <ul role="list" className="space-y-4">
                  {sol.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-4 w-4 text-accent-600" aria-hidden="true" />
                      </div>
                      <span className="ml-3 text-sm font-bold text-slate-700 dark:text-slate-300 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-10 block w-full py-4 px-6 rounded text-center font-black uppercase tracking-widest transition-all ${
                  sol.highlight
                    ? 'bg-accent-600 text-white hover:bg-accent-700'
                    : 'bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800'
                }`}
              >
                Demander un devis
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-800 rounded border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-center font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                *Engagement sur résultats : <br/>
                <span className="text-slate-500 font-medium normal-case italic">Notre accompagnement Performance inclut une garantie de progression de votre visibilité locale sous 90 jours.</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;