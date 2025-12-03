import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import AIDemo from './components/AIDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <FAQ />
        <AIDemo />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;