import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Hospitals from "./components/Hospitals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LegalModal from "./components/LegalModal";
import IndiusIntro from "./assets/images/logo/INDIUS.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [legal, setLegal] = useState({ isOpen: false, tab: "privacy" });

  useEffect(() => {
    // Force scroll to top on load/refresh
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openLegal = useCallback((tab) => {
    setLegal({ isOpen: true, tab });
  }, []);

  const closeLegal = useCallback(() => {
    setLegal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <div className="antialiased w-full overflow-x-hidden font-sans selection:bg-medical/20 selection:text-medical scroll-smooth">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-6"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={IndiusIntro}
              alt="Indius Healthcare"
              className="max-w-full max-h-[30vh] w-auto h-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Hospitals />
        <Contact />
      </main>
      <Footer onOpenLegal={openLegal} />
      <LegalModal
        isOpen={legal.isOpen}
        onClose={closeLegal}
        initialTab={legal.tab}
      />
    </div>
  );
}

export default App;
