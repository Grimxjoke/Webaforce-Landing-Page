import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "C'est quoi le 'Top 3 Maps' de Google ?",
    answer: "C'est l'encadré qui affiche les 3 meilleurs artisans en haut de Google quand quelqu'un cherche 'Couvreur + votre ville'. 80% des clients appellent l'un de ces 3 résultats. Notre but est de vous y placer."
  },
  {
    question: "Comment fonctionne l'essai gratuit de 2 semaines ?",
    answer: "Nous mettons en place un système simple : si vous ne décrochez pas votre téléphone (sur un chantier ou en rendez-vous), notre Réceptionniste IA prend l'appel à votre place. Vous testez cela gratuitement pendant 14 jours pour voir tous les leads que vous récupérez."
  },
  {
    question: "Pourquoi est-ce que je perds des clients ?",
    answer: "Parce que quand un prospect appelle un couvreur pour une urgence ou un devis et tombe sur une messagerie, il n'attend pas : il appelle immédiatement le concurrent suivant sur la liste. L'IA empêche cela en répondant instantanément."
  },
  {
    question: "Que contient l'audit gratuit ?",
    answer: "Nous comparons votre profil Google Business avec votre page web. Nous vérifions si vos informations sont à jour partout sur le web et si votre site est optimisé pour transformer les visiteurs en appels. Vous recevez un rapport PDF clair."
  },
  {
    question: "Dois-je changer mon numéro ?",
    answer: "Non. Vous gardez votre numéro de téléphone habituel. Le transfert vers l'IA ne se fait que si vous ne répondez pas."
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
            Comprendre comment booster votre entreprise.
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