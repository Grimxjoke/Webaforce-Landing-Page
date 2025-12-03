import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  results: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Depuis que nous avons installé l'agent vocal WEBAFORCE, nous ne ratons plus aucun appel le week-end. Le système prend les RDV tout seul directement dans notre agenda.",
    author: "Marc Delorme",
    role: "Directeur d'Agence",
    company: "Immobilier Sud",
    results: "+5 mandats/mois"
  },
  {
    content: "Le système de réactivation a fait des miracles. On a relancé une base de 500 anciens clients dormants et généré 12 000€ de chiffre d'affaires en 48h juste avec des SMS automatiques.",
    author: "Sarah Levi",
    role: "Gérante",
    company: "Institut Éclat",
    results: "12k€ générés en 48h"
  },
  {
    content: "Je passais 2h par jour à répondre aux mêmes questions et gérer mes RDV. Aujourd'hui, le chatbot le fait seul. Je peux enfin me concentrer sur mes chantiers et ma technique.",
    author: "Thomas Bernard",
    role: "Entrepreneur",
    company: "Rénov'Habitat",
    results: "10h gagnées/semaine"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden scroll-mt-20 transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase">Ils ont automatisé leur succès</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Ce que disent nos partenaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 relative hover:-translate-y-1 transition-all duration-300 shadow-lg dark:shadow-none hover:shadow-xl">
              <div className="absolute top-6 right-8 text-slate-200 dark:text-slate-700">
                <Quote className="h-8 w-8 opacity-50" aria-hidden="true" />
              </div>
              
              <div className="flex space-x-1 mb-6" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed italic transition-colors">
                "{t.content}"
              </p>

              <div className="mt-auto border-t border-slate-100 dark:border-slate-700 pt-6 transition-colors">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-slate-900 dark:text-white font-bold transition-colors">{t.author}</p>
                        <p className="text-brand-600 dark:text-brand-400 text-sm transition-colors">{t.role}, {t.company}</p>
                    </div>
                    <div className="text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 transition-colors">
                            {t.results}
                        </span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;