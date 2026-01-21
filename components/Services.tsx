import React from 'react';
import { MapPin, PhoneCall, Search, Star, Smartphone, ShieldCheck } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Domination Google Maps",
    description: "Nous optimisons votre profil Business pour vous propulser dans le Top 3 du Local Pack. C'est là que 90% de vos futurs clients se trouvent quand ils cherchent un couvreur.",
    icon: MapPin
  },
  {
    title: "Réceptionniste IA 24h/7j",
    description: "Fini le 'Dark Funnel'. Notre IA décroche quand vous travaillez ou dormez. Elle qualifie le projet et prend les coordonnées. Un prospect qui a une réponse immédiate n'appelle pas la concurrence.",
    icon: PhoneCall
  },
  {
    title: "Audit de Visibilité Digital",
    description: "Nous analysons l'état de votre image numérique : cohérence entre votre fiche Google et votre site web. Un audit complet pour identifier vos points faibles face aux concurrents.",
    icon: Search
  },
  {
    title: "Gestion de Réputation Auto",
    description: "Le Local Pack adore les avis. Nous automatisons la récolte d'avis 5 étoiles auprès de vos clients satisfaits pour bétonner votre crédibilité et votre classement.",
    icon: Star
  },
  {
    title: "Speed-to-Lead SMS",
    description: "Si vous manquez un appel, l'IA envoie instantanément un SMS pour engager la conversation. Répondre en moins d'une minute multiplie par 7 vos chances de conversion.",
    icon: Smartphone
  },
  {
    title: "Essai Gratuit Réceptionniste",
    description: "Testez notre agent vocal sans aucun frais. Voyez par vous-même comment il gère vos prospects avant de vous engager. La preuve par les résultats.",
    icon: ShieldCheck
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-accent-600 font-black uppercase tracking-widest text-sm">Le Pack Domination Locale</h2>
          <p className="mt-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            Visibilité maximale, <br/>
            <span className="text-slate-400 dark:text-slate-600">Réponse immédiate.</span>
          </p>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-medium">
            Nous combinons le SEO local et l'Intelligence Artificielle pour que vous soyez l'entreprise la plus visible et la plus réactive de votre région.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-slate-50 dark:bg-slate-900 p-8 rounded border border-slate-200 dark:border-slate-800 hover:border-accent-600/50 transition-all">
              <div className="mb-6 inline-flex items-center justify-center p-3 bg-white dark:bg-slate-800 rounded shadow-sm text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-all">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;