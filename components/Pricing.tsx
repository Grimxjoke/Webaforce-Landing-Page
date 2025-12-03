import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Essentiel',
    price: 300,
    description: "L'étincelle pour réactiver votre trésorerie dormante.",
    features: [
      'Réactivation de Base Client (Email/SMS)',
      'CRM de Gestion de Contacts',
      'Automatisations Marketing de base',
      'Support par email',
      'Rapports de performance mensuels'
    ],
    recommended: false
  },
  {
    name: 'Croissance',
    price: 500,
    description: "L'automatisation totale pour ne plus jamais perdre un prospect.",
    features: [
      'Tout du pack Essentiel',
      'Chatbot IA Conversationnel (Site Web)',
      'Agent IA Vocal (Ligne téléphonique dédiée)',
      'Relance SMS sur Appel Manqué',
      'Prise de RDV 100% Autonome',
      'Gestion Centralisée des Réseaux Sociaux',
      'Support Prioritaire VIP'
    ],
    recommended: true
  },
  {
    name: 'Domination',
    price: 0,
    customPrice: "Sur Mesure",
    buttonText: "Contacter un expert",
    description: "Nous devenons votre département marketing complet.",
    features: [
      'Tout du pack Croissance',
      'Gestion Publicitaire (Google Ads & Facebook)',
      'SEO Avancé & Référencement Local',
      'Création de Contenu Vidéo (Reels/TikTok)',
      'Stratégie de Marque Complète',
      'Responsable de Compte Dédié',
      'Rapports Hebdomadaires Détaillés'
    ],
    recommended: false
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-100 dark:bg-slate-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Investissez dans votre Croissance
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 transition-colors duration-300">
            Des solutions évolutives conçues pour maximiser votre retour sur investissement dès le premier mois.
          </p>
        </div>
        
        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 bg-white dark:bg-slate-800 border rounded-2xl shadow-sm flex flex-col transition-all duration-300 ${
                tier.recommended
                  ? 'border-brand-500 shadow-xl shadow-brand-500/10 dark:shadow-[0_0_40px_rgba(14,165,233,0.2)] scale-105 z-10 dark:bg-slate-800/80 dark:backdrop-blur'
                  : 'border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-slate-600'
              }`}
            >
              {tier.recommended && (
                 <div className="absolute top-0 py-1.5 px-4 bg-gradient-to-r from-brand-600 to-accent-500 rounded-full transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs font-bold text-white tracking-wide uppercase shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Meilleur ROI
                 </div>
              )}
              
              <div className="flex-1">
                <h3 className={`text-xl font-bold ${tier.name === 'Domination' ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400' : 'text-slate-900 dark:text-white'}`}>
                    {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline text-slate-900 dark:text-white">
                  {tier.customPrice ? (
                    <span className="text-4xl font-extrabold tracking-tight">{tier.customPrice}</span>
                  ) : (
                    <>
                      <span className="text-5xl font-extrabold tracking-tight">{tier.price}€</span>
                      <span className="ml-1 text-xl font-semibold text-slate-500 dark:text-slate-400">/mois</span>
                    </>
                  )}
                </p>
                <p className="mt-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{tier.description}</p>

                <ul role="list" className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-brand-500 dark:text-brand-400" aria-hidden="true" />
                      </div>
                      <span className="ml-3 text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-bold text-sm uppercase tracking-wide transition-all ${
                  tier.recommended
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg hover:shadow-brand-500/40'
                    : tier.name === 'Domination' 
                        ? 'bg-gradient-to-r from-brand-900 to-slate-900 dark:from-brand-900 dark:to-slate-900 border-brand-700 text-white dark:text-brand-100 hover:from-brand-800 hover:to-slate-800'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-brand-100 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {tier.buttonText || `Choisir ${tier.name}`}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;