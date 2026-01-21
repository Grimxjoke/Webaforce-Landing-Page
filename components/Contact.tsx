import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle, Search } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    auditRequested: true
  });
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

  const validate = () => {
    const newErrors: { phone?: string; email?: string } = {};
    let isValid = true;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email invalide.";
      isValid = false;
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Numéro invalide.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', company: '', auditRequested: true });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.id]: value });
    if (errors[e.target.id as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.id]: undefined });
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row min-h-[600px] transition-colors duration-300">
          
          <div className="lg:w-5/12 relative flex flex-col justify-between p-10 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1631650774840-02540b71948d?auto=format&fit=crop&q=80&w=800"
                    alt="Artisan sur un toit" 
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 tracking-tight uppercase">Audit Google Maps Gratuit</h3>
              <p className="text-slate-100 mb-8 text-lg leading-relaxed">
                Découvrez pourquoi vos concurrents prennent vos clients. Nous analysons votre profil Google et votre site web gratuitement.
              </p>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-center group cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-accent-600 flex items-center justify-center mr-4 shadow-lg shadow-accent-600/20">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-black uppercase">09 39 03 05 64</span>
                </div>
                <div className="flex items-center group">
                   <div className="h-10 w-10 rounded-full bg-accent-600 flex items-center justify-center mr-4 shadow-lg shadow-accent-600/20">
                     <Search className="h-5 w-5 text-white" />
                   </div>
                  <span className="text-lg font-bold">Audit offert sous 24h</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12">
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">
                © {currentYear} WEBAFORCE.
              </p>
            </div>
          </div>

          <div className="lg:w-7/12 p-10 bg-white dark:bg-slate-800">
            <div className="mb-8">
                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Vérifiez votre visibilité locale</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 uppercase font-bold">Analysez votre fiche Google et votre page web.</p>
            </div>

            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 rounded-lg">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase">Demande Reçue !</h3>
                <p className="text-slate-600 dark:text-slate-300">Nous préparons votre audit. Un expert vous contactera d'ici demain.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="name" className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Nom complet</label>
                      <input type="text" id="name" required value={formData.name} onChange={handleChange} className="block w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-accent-600 outline-none transition-all" placeholder="Jean Dupont" />
                  </div>
                  <div>
                      <label htmlFor="company" className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Nom entreprise</label>
                      <input type="text" id="company" required value={formData.company} onChange={handleChange} className="block w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-accent-600 outline-none transition-all" placeholder="Artisan Toiture 75" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="phone" className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Téléphone</label>
                      <input type="tel" id="phone" required value={formData.phone} onChange={handleChange} className="block w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-accent-600 outline-none transition-all" placeholder="06 12 34 56 78" />
                      {errors.phone && <p className="mt-1 text-xs text-red-500 font-bold">{errors.phone}</p>}
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Email</label>
                      <input type="email" id="email" required value={formData.email} onChange={handleChange} className="block w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-accent-600 outline-none transition-all" placeholder="jean@toiturepro.fr" />
                      {errors.email && <p className="mt-1 text-xs text-red-500 font-bold">{errors.email}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-accent-600/5 rounded-lg border border-accent-600/20">
                    <input type="checkbox" id="auditRequested" checked={formData.auditRequested} onChange={handleChange} className="h-5 w-5 accent-accent-600 cursor-pointer" />
                    <label htmlFor="auditRequested" className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight cursor-pointer select-none">Je souhaite recevoir mon audit gratuit Google Maps + Web</label>
                </div>

                <button type="submit" className="w-full flex items-center justify-center py-4 px-4 rounded-lg shadow-xl text-base font-black text-white bg-accent-600 hover:bg-accent-700 transition-all uppercase tracking-widest active:scale-[0.98]">
                  Lancer l'audit gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;