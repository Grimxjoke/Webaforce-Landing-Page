import React from 'react';
import { MessageSquare, RefreshCw, Smartphone, Share2, TrendingUp, CalendarClock } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Réactivation de Base Client",
    description: "Vos anciens clients sont votre plus grande richesse inexploitée. Notre système identifie, segmente et recontacte automatiquement vos listes inactives via des campagnes SMS et Email hyper-personnalisées. Résultat : des ventes immédiates sans dépenser un centime en publicité.",
    icon: RefreshCw
  },
  {
    title: "Agent IA Conversationnel",
    description: "Installez un commercial expert sur votre site web. Disponible 24h/24 et 7j/7, notre chatbot intelligent qualifie chaque visiteur, répond aux objections en temps réel et capture les coordonnées des prospects chauds directement dans votre CRM.",
    icon: MessageSquare
  },
  {
    title: "Relance SMS sur Appel Manqué",
    description: "62% des appels aux PME restent sans réponse, ce qui équivaut à une perte massive de chiffre d'affaires. Notre technologie 'Missed-Call Text-Back' détecte instantanément l'appel manqué et engage la conversation par SMS pour sécuriser le client avant qu'il n'appelle votre concurrent.",
    icon: Smartphone
  },
  {
    title: "Prise de RDV Autonome",
    description: "Éliminez les allers-retours interminables pour fixer une date. L'IA gère votre agenda, propose les créneaux libres, envoie les confirmations et les rappels automatiques, réduisant drastiquement le taux d'absentéisme (No-Show) à vos rendez-vous.",
    icon: CalendarClock
  },
  {
    title: "Centralisation Omnicanale",
    description: "Ne jonglez plus entre les onglets. Facebook Messenger, Instagram DM, Google Business Profile, SMS, et Email sont désormais centralisés. Pilotez toutes vos conversations clients depuis un tableau de bord unique, intuitif et performant pour une réactivité maximale.",
    icon: Share2
  },
  {
    title: "Croissance Prédictible",
    description: "Passez de l'incertitude à la prévisibilité. Nos systèmes d'automatisation sont conçus pour générer un flux constant et mesurable de nouveaux prospects qualifiés chaque mois, vous permettant de planifier votre croissance financière avec sérénité.",
    icon: TrendingUp
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase">L'Arsenal WEBAFORCE</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Une suite technologique pour dominer votre secteur
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-400 mx-auto transition-colors duration-300">
            L'automatisation n'est plus une option, c'est une nécessité. Découvrez comment nos solutions transforment vos processus manuels en machines à générer du profit.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6 group">
                <div className="flow-root bg-white dark:bg-slate-900 rounded-lg px-6 pb-8 h-full border border-slate-200 dark:border-slate-800 transition-all duration-300 ease-out transform group-hover:scale-[1.03] group-hover:border-brand-500 group-hover:shadow-[0_10px_40px_-10px_rgba(14,165,233,0.15)] dark:group-hover:shadow-[0_10px_40px_-10px_rgba(14,165,233,0.2)]">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-100 dark:bg-brand-900 rounded-md shadow-lg group-hover:bg-brand-600 transition-colors duration-300 ring-4 ring-slate-50 dark:ring-slate-950">
                        <feature.icon className="h-6 w-6 text-brand-600 dark:text-brand-100 group-hover:text-white transform group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{feature.title}</h3>
                    <p className="mt-5 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;