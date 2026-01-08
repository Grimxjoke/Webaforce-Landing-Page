import React from 'react';
import { MessageSquare, RefreshCw, Smartphone, PhoneMissed, MapPin, ClipboardCheck } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "Relance sur Appels Manqués",
    description: "Vous êtes sur une échelle et vous ne pouvez pas répondre ? Notre système détecte l'appel manqué et envoie instantanément un SMS personnalisé à votre prospect pour fixer un rendez-vous avant qu'il n'appelle un autre couvreur.",
    icon: PhoneMissed
  },
  {
    title: "Secrétariat IA 24h/24",
    description: "Un agent vocal intelligent qui décroche à votre place, même le soir et le week-end. Il qualifie le type de travaux (fuite, rénovation, charpente), prend les coordonnées et enregistre la demande dans votre interface.",
    icon: Smartphone
  },
  {
    title: "Réactivation des Devis en Attente",
    description: "Vous avez des devis envoyés qui dorment ? Notre automate relance poliment vos clients par SMS ou Email pour valider le chantier, sans que vous ayez à passer un seul coup de fil de relance.",
    icon: RefreshCw
  },
  {
    title: "Prise de RDV Chantier",
    description: "L'IA accède à vos disponibilités et cale directement vos rendez-vous de métrage ou de visite technique dans votre agenda. Elle gère aussi les confirmations pour éviter les déplacements inutiles.",
    icon: ClipboardCheck
  },
  {
    title: "Référencement Local & Avis",
    description: "Boostez votre visibilité sur Google Maps. Nous automatisons la demande d'avis positifs auprès de vos clients satisfaits après chaque fin de chantier pour vous assurer de rester le N°1 de votre secteur.",
    icon: MapPin
  },
  {
    title: "Standard Centralisé",
    description: "Retrouvez tous vos messages (SMS, WhatsApp, appels, Facebook) au même endroit. Ne perdez plus aucune information client, tout est archivé et facile à retrouver pour vos futurs chantiers.",
    icon: MessageSquare
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-accent-600 font-black uppercase tracking-widest text-sm">Outils de Croissance</h2>
          <p className="mt-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            Gagnez du temps sur l'administratif, <br/>
            <span className="text-slate-400 dark:text-slate-600">Gagnez de l'argent sur le toit.</span>
          </p>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-medium">
            Nous avons conçu nos solutions spécifiquement pour répondre aux contraintes des métiers du bâtiment.
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