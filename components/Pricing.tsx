import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    name: 'Solution Artisans',
    description: "L'essentiel pour ne plus rater d'appels et professionnaliser votre accueil.",
    features: [
      'Relance SMS automatique sur appels manqués',
      'Réactivation de votre base de données clients',
      'Gestion centralisée des messages (SMS/WhatsApp)',
      'Installation du Chatbot IA sur votre site',
      'Accès à l\'application mobile de gestion'
    ],
    highlight: false
  },
  {
    name: 'Solution Performance',
    description: "Le système complet pour déléguer totalement la prise de rendez-vous.",
    features: [
      'Tout de la Solution Artisans',
      'Agent Vocal IA (Répond au téléphone 24/7)',
      'Qualification complète des projets travaux',
      'Synchronisation avec votre agenda pro',
      'Relances automatiques des devis non signés',
      'Demandes d\'avis Google automatisées'
    ],
    highlight: true
  },
  {
    name: 'Sur-Mesure / Multi-Équipes',
    description: "Pour les entreprises de couverture structurées avec plusieurs équipes.",
    features: [
      'Tout de la Solution Performance',
      'Gestion multi-numéros / multi-agences',
      'Intégration CRM métier avancée',
      'Rapports de performance détaillés par équipe',
      'Accompagnement stratégique dédié',
      'Support prioritaire 7j/7'
    ],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-100 dark:bg-slate-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Nos Accompagnements
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 font-medium">
            Pas d'abonnement caché, juste des solutions concrètes pour développer votre entreprise.
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
                    Recommandé
                 </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                    {sol.name}
                </h3>
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
                Demander plus d'infos
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-800 rounded border border-dashed border-slate-300 dark:border-slate-700">
            <ShieldCheck className="h-10 w-10 text-accent-600 mb-4" />
            <p className="text-center font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                Installation garantie en moins de 10 jours <br/>
                <span className="text-slate-500 font-medium normal-case">Sans engagement de durée. Vous restez maître de votre entreprise.</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;