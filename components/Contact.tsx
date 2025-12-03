import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Regex pour valider un email standard
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Regex pour valider un numéro français (mobile ou fixe, avec ou sans +33)
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

  const validate = () => {
    const newErrors: { phone?: string; email?: string } = {};
    let isValid = true;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide.";
      isValid = false;
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Veuillez entrer un numéro de téléphone valide (ex: 06 12 34 56 78).";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulation d'envoi
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // Reset message après 5s
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Effacer l'erreur en cours de frappe
    if (errors[e.target.id as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.id]: undefined });
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Contact Info Section with Background Image */}
          <div className="lg:w-5/12 relative flex flex-col justify-between p-10 text-white overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                    alt="Connexion Mondiale" 
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 to-slate-900/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Contactez WEBAFORCE</h3>
              <p className="text-brand-100 mb-8 text-lg leading-relaxed">
                Votre potentiel est illimité. Nos outils le sont aussi. Discutons de votre stratégie de domination dès aujourd'hui.
              </p>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-center group cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-brand-500 transition-colors">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-medium group-hover:text-brand-300 transition-colors">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-brand-500 transition-colors">
                     <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-medium group-hover:text-brand-300 transition-colors">contact@webaforce.com</span>
                </div>
                <div className="flex items-center group">
                   <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                     <MapPin className="h-5 w-5 text-white" />
                   </div>
                  <span className="text-lg font-medium">Paris, France</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12">
              <p className="text-sm text-brand-200 opacity-60">
                © 2024 WEBAFORCE. Innovation Française.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-7/12 p-10 bg-slate-800/50 backdrop-blur-sm">
            <div className="mb-8">
                <h4 className="text-xl font-bold text-white">Demande de Consultation</h4>
                <p className="text-slate-400 text-sm mt-1">Remplissez ce formulaire pour obtenir un audit gratuit de votre situation.</p>
            </div>

            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-brand-900/20 border border-brand-500/30 rounded-lg animate-pulse-slow">
                <CheckCircle className="h-16 w-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Demande Envoyée !</h3>
                <p className="text-slate-300">Un expert WEBAFORCE vous recontactera sous 24h.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nom complet
                      </label>
                      <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full bg-slate-900/50 border border-slate-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                      />
                  </div>
                  <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Téléphone
                      </label>
                      <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full bg-slate-900/50 border rounded-lg shadow-sm py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-600'}`}
                      placeholder="06 12 34 56 78"
                      />
                      {errors.phone && (
                        <div className="flex items-center mt-1 text-red-400 text-xs">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.phone}
                        </div>
                      )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full bg-slate-900/50 border rounded-lg shadow-sm py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-600'}`}
                    placeholder="jean@entreprise.com"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-1 text-red-400 text-xs">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Votre objectif principal
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full bg-slate-900/50 border border-slate-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    placeholder="Je souhaite automatiser ma prise de rendez-vous et augmenter mon taux de conversion..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-brand-500 transition-all transform hover:scale-[1.01]"
                >
                  Valider ma demande
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  Vos données sont sécurisées. Nous vous répondrons sous 24h.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;