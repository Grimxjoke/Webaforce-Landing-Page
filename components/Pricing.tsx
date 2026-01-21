import React from 'react';
import { Check, ShieldCheck, Map, Phone } from 'lucide-react';

const solutions = [
  {
    name: 'Pack Visibilité',
    description: "L'essentiel pour être vu par vos clients locaux.",
    features: [
      'Audit complet fiche Google & Web',
      'Optimisation Profil Business',
      'Stratégie mots-clés (Couvreur, Toiture)',
      'Correction des citations web',
      'Suivi mensuel de positionnement'
    ],
    highlight: false,
    icon: Map
  },
  {
    name: 'Pack Performance',
    description: "Visibilité maximale et capture de leads 24h/7j.",
    features: [
      'Tout du Pack Visibilité',
      'Réceptionniste IA (24h/7j)',
      'Placement Local Pack Top 3',
      'Essai gratuit 2 semaines IA',
      'Collecte automatique avis clients'
    ],
    highlight: true,
    icon: ShieldCheck
  },
  {
    name: 'Pack Domination',
    description: "Pour verrouiller le marché de votre région.",
    features: [
      'Tout du Pack Performance',
      'Publicité Google Ads Locales',
      'Multi-fiches Google (selon secteur)',
      'Rapport de performance hebdomadaire',
      'Support technique prioritaire'
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
            Nos Solutions Couvreurs
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 font-medium">
            Des résultats concrets : plus de visibilité et aucun appel manqué.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol) => (
            <div
              key={sol.name}
              className={`relative p-10 bg-white dark:bg-slate-800 rounded border-2 flex flex-col transition-all ${
                sol.highlight
                  ? 'border-accent-600 shadow-xl scale-105 z-10'
                  : 'border-transparent shadow-md'
              }`}
            >
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
                      <span className="ml-3 text-sm font-bold text-slate-700 dark:text-slate-300 leading-tight uppercase tracking-tight">{feature}</span>
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
                Devis & Audit Gratuit
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;