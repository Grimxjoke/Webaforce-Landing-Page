import { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load components
const Services = lazy(() => import('./components/Services'));
const FAQ = lazy(() => import('./components/FAQ'));
const AIDemo = lazy(() => import('./components/AIDemo'));
const Pricing = lazy(() => import('./components/Pricing'));

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 selection:bg-accent-500 selection:text-white">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Suspense fallback={
          <div className="py-20 flex justify-center items-center">
            <div className="h-10 w-10 animate-spin rounded border-4 border-accent-600 border-t-transparent"></div>
          </div>
        }>
          <Services />
          <AIDemo />
          <Pricing />
          <FAQ />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;