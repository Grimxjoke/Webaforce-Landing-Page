import React from 'react';
import { MapPin, PhoneCall, Search, Star, MessageSquare, CheckCircle } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Classement Top 3 Maps",
    description: "90% des recherches locales s'arrêtent au Top 3. Nous optimisons votre profil Google pour que vous soyez l'entreprise que les clients voient en premier.",
    icon: MapPin
  },
  {
    title: "Audit Digital Complet",
    description: "Nous analysons l'image que vous renvoyez en ligne : cohérence Google Business vs Site Web. Un audit gratuit pour identifier vos leviers de croissance.",
    icon: Search
  },
  {
    title: "Réceptionniste IA 24h/7j",
    description: "Éliminez le 'Dark Funnel'. Quand vous ne décrochez pas, l'IA le fait pour vous, qualifie le besoin et prend le RDV. Plus aucun lead ne part chez le concurrent.",
    icon: PhoneCall
  },
  {
    title: "Essai IA Gratuit",
    description: "Testez notre agent vocal sur votre ligne actuelle pendant 7 jours sans frais. Constatez par vous-même l'efficacité de la capture de leads automatique.",
    icon: CheckCircle
  },
  {
    title: "Gestion d'Avis Automatisée",
    description: "Le classement Maps dépend de vos avis. Nous automatisons la demande d'avis 5 étoiles auprès de vos clients pour booster votre réputation.",
    icon: Star
  },
  {
    title: "Speed-to-Lead SMS",
    description: "Si vous manquez un appel, l'IA envoie instantanément un SMS pour engager le prospect. Un client à qui l'on répond tout de suite est un client gagné.",
    icon: MessageSquare
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-accent-600 font-black uppercase tracking-widest text-sm">Spécialiste Toiture & Charpente</h2>
          <p className="mt-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            Visibilité Local Pack, <br/>
            <span className="text-slate-400 dark:text-slate-600">Réponse garantie.</span>
          </p>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-medium">
            Nous transformons votre présence en ligne pour que vous n'ayez plus à chercher de chantiers : ils viendront à vous.
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