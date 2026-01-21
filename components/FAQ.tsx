import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Qu'est-ce que le 'Local Pack' de Google Maps ?",
    answer: "C'est l'encadré qui affiche les 3 meilleures entreprises locales en haut des résultats de recherche Google. Être dans le Top 3 garantit environ 90% des clics des clients qui cherchent un couvreur dans votre ville."
  },
  {
    question: "Comment fonctionne l'essai gratuit de l'IA ?",
    answer: "Nous installons un numéro de transfert. Si vous ne décrochez pas après 3 sonneries, notre agent IA prend l'appel, répond aux questions du client et vous envoie un résumé par SMS/Email avec les coordonnées. Vous testez cela gratuitement pendant 7 jours."
  },
  {
    question: "C'est quoi le 'Dark Funnel' ?",
    answer: "C'est le phénomène où vous perdez des clients potentiels simplement parce que vous étiez occupé sur un chantier quand ils ont appelé. Un prospect qui tombe sur une messagerie appelle immédiatement votre concurrent. L'IA élimine ce trou dans votre chiffre d'affaires."
  },
  {
    question: "Garantissez-vous la position Top 3 ?",
    answer: "Chaque zone géographique est différente. Notre audit gratuit nous permet de vous dire exactement si nous pouvons vous garantir le Top 3. Dans la majorité des cas, nos optimisations SEO Local portent leurs fruits sous 30 à 60 jours."
  },
  {
    question: "Dois-je changer de numéro de téléphone ?",
    answer: "Non. Nous utilisons un système de transfert d'appel intelligent. Vous gardez votre numéro actuel, l'IA ne s'active que si vous ne pouvez pas répondre."
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
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white dark:bg-slate-800 text-accent-600 dark:text-accent-400 mb-4 border border-slate-200 dark:border-slate-700 shadow-sm">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300 uppercase tracking-tight">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 transition-colors duration-300">
            Comprendre comment nous boostons votre carnet de commandes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg transition-all duration-200 ${
                openIndex === index 
                  ? 'bg-white dark:bg-slate-900 border-accent-500/50 shadow-md' 
                  : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold text-lg transition-colors uppercase tracking-tight ${openIndex === index ? 'text-accent-600 dark:text-accent-400' : 'text-slate-800 dark:text-slate-200'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed transition-colors font-medium">
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