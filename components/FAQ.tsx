import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "L'IA va-t-elle remplacer mes employés ?",
    answer: "Non, l'IA est conçue pour être un assistant surpuissant, pas un remplaçant. Elle libère votre équipe des tâches répétitives (répondre aux questions basiques, prise de RDV, relances) pour qu'ils puissent se concentrer sur ce qui rapporte vraiment : la vente finale et la relation client humaine."
  },
  {
    question: "Combien de temps faut-il pour mettre en place le système ?",
    answer: "Pour les packs 'Essentiel' et 'Croissance', nous sommes généralement opérationnels en 7 à 14 jours ouvrés, le temps de configurer votre numéro, votre chatbot et vos automatisations. L'offre 'Domination' nécessite une phase d'audit et de calibrage plus poussée (environ 30 jours)."
  },
  {
    question: "Est-ce compatible avec mes outils actuels ?",
    answer: "Absolument. Nous pouvons nous intégrer à la majorité des CRM du marché, calendriers (Google, Outlook) et outils de gestion. Si vous n'avez pas de CRM, nous vous fournissons notre propre plateforme tout-en-un incluse dans l'abonnement."
  },
  {
    question: "Quels résultats puis-je espérer le premier mois ?",
    answer: "Nos clients observent souvent un effet immédiat grâce à la 'Réactivation de Base Client'. En moyenne, nous récupérons 15% à 30% de prospects 'dormants' dès la première campagne SMS, ce qui rentabilise souvent l'investissement dès la première semaine."
  },
  {
    question: "L'IA vocale parle-t-elle un français naturel ?",
    answer: "Oui, nos agents vocaux utilisent les dernières technologies de synthèse vocale neurale. L'intonation, les pauses et la réactivité sont extrêmement proches d'une conversation humaine réelle. Vos clients seront surpris de fluidité de l'échange."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 mb-4 border border-slate-200 dark:border-slate-700 shadow-sm">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 transition-colors duration-300">
            Tout ce que vous devez savoir avant d'automatiser votre succès.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg transition-all duration-200 ${
                openIndex === index 
                  ? 'bg-white dark:bg-slate-900 border-brand-500/50 shadow-md' 
                  : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-medium text-lg transition-colors ${openIndex === index ? 'text-brand-600 dark:text-brand-400' : 'text-slate-800 dark:text-slate-200'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;