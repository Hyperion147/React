import './App.css';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function App() {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

    </>
  );
}

export default App;