import React from 'react';
import { MapPin, PhoneCall, Search, Star, CheckCircle } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Classement Top 3 Maps",
    description: "80% des recherches locales s'arrêtent au Top 3 de Google Maps. Nous optimisons votre profil pour que vous soyez l'entreprise que les clients voient et appellent en premier.",
    icon: MapPin
  },
  {
    title: "Réceptionniste IA 24h/7j",
    description: "Quand vous êtes sur un chantier, l'IA décroche pour vous. Elle qualifie le projet (type de toiture, urgence fuite) et prend les coordonnées. Ne laissez plus vos clients appeler ailleurs.",
    icon: PhoneCall
  },
  {
    title: "Audit Digital Complet",
    description: "Nous analysons l'état de votre image numérique : comparaison entre votre profil Google Business et votre page web pour corriger ce qui bloque votre visibilité.",
    icon: Search
  },
  {
    title: "Essai Gratuit 2 Semaines",
    description: "Testez notre réceptionniste IA sur votre ligne actuelle pendant 14 jours sans aucun frais. Constatez par vous-même comment il capture vos appels quand vous travaillez.",
    icon: CheckCircle
  },
  {
    title: "Gestion d'Avis Clients",
    description: "Les avis sont le moteur du classement Google Maps. Nous automatisons la demande d'avis 5 étoiles auprès de vos clients satisfaits pour bétonner votre réputation.",
    icon: Star
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-accent-600 font-black uppercase tracking-widest text-sm">Pack Domination Locale</h2>
          <p className="mt-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            Visibilité Google Maps <br/>
            <span className="text-slate-400 dark:text-slate-600">& Zéro Appel Perdu.</span>
          </p>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-medium">
            Nous faisons de vous le couvreur le plus visible de votre ville et nous nous assurons qu'aucun prospect ne tombe sur votre messagerie.
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