import React from 'react';
import { MessageSquare, RefreshCw, Smartphone, Share2, TrendingUp, CalendarClock } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Réactivation de Base Client",
    description: "Ne laissez plus dormir vos fichiers clients. Nous réactivons automatiquement vos anciens contacts par SMS et Email pour générer des ventes immédiates sans coût publicitaire additionnel.",
    icon: RefreshCw
  },
  {
    title: "Agent IA Conversationnel",
    description: "Un expert virtuel disponible 24/7 sur votre site. Il répond aux questions, qualifie les visiteurs et sécurise les coordonnées de vos futurs clients automatiquement.",
    icon: MessageSquare
  },
  {
    title: "Relance SMS sur Appel Manqué",
    description: "62% des appels aux PME restent sans réponse. Notre système détecte l'appel manqué et engage immédiatement la conversation par SMS pour ne jamais perdre une opportunité.",
    icon: Smartphone
  },
  {
    title: "Prise de RDV Autonome",
    description: "Libérez votre standard. L'IA gère votre agenda, propose les créneaux libres, envoie les confirmations et réduit drastiquement le taux d'absentéisme (No-Show).",
    icon: CalendarClock
  },
  {
    title: "Centralisation des Canaux",
    description: "Facebook, Instagram, Google Business, SMS, Email : pilotez toutes vos conversations clients depuis un tableau de bord unique et performant.",
    icon: Share2
  },
  {
    title: "Croissance Prédictible",
    description: "Arrêtez de deviner. Nos systèmes sont conçus pour apporter un flux constant, mesurable et évolutif de nouveaux prospects qualifiés chaque mois.",
    icon: TrendingUp
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-400 font-semibold tracking-wide uppercase">L'Arsenal WEBAFORCE</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Une suite technologique pour dominer votre secteur
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Nous ne vendons pas de simples outils, nous vendons de la performance automatisée.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6 group">
                <div className="flow-root bg-slate-900 rounded-lg px-6 pb-8 h-full border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transform hover:-translate-y-2">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-900 rounded-md shadow-lg group-hover:bg-brand-600 transition-colors duration-300">
                        <feature.icon className="h-6 w-6 text-brand-100" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-slate-400 leading-relaxed">
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