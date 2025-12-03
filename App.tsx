import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load components that are below the fold to reduce initial bundle size
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const AIDemo = lazy(() => import('./components/AIDemo'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={
          <div className="py-20 flex justify-center items-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent"></div>
          </div>
        }>
          <Services />
          <Testimonials />
          <FAQ />
          <AIDemo />
          <Pricing />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;