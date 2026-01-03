import React, { useState, useEffect, useCallback, memo } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import slider1 from "../assets/images/slider/slider1.jpg";
import slider2 from "../assets/images/slider/slider2.jpg";
import slider3 from "../assets/images/slider/slider3.jpg";
import slider4 from "../assets/images/slider/slider4.jpg";

const SLIDES = [
  { id: 1, image: slider1, title: "Excellence in Global Healing" },
  { id: 2, image: slider2, title: "Advanced Surgical Infrastructure" },
  { id: 3, image: slider3, title: "Compassionate Patient Care" },
  { id: 4, image: slider4, title: "Innovative Healthcare Solutions" },
];

const Hero = memo(() => {
  const [current, setCurrent] = useState(0);

  // Preload images for smooth transition
  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % SLIDES.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const handleScrollClick = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleDotClick = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full bg-black overflow-hidden"
    >
      {/* Background Slides - Z-Stacked Crossfade */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => {
          const isActive = current === index;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.1 : 1.05,
              }}
              transition={{
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 10, ease: "linear" },
              }}
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url(${slide.image})`,
                zIndex: isActive ? 2 : 1,
              }}
            >
              <div className="absolute inset-0 bg-navy/50" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-start md:justify-center items-center text-center pt-32 md:pt-0">
        <div className="relative h-32 md:h-40 w-full flex items-center justify-center mb-6 md:mb-10">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute max-w-4xl"
            >
              <h1 className="text-3xl md:text-7xl font-light text-white tracking-tighter leading-tight drop-shadow-2xl px-4">
                {SLIDES[current].title}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.a
          href="https://wa.me/23057092332"
          target="_blank"
          rel="noopener noreferrer"
          style={{ willChange: "transform" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-medical text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:text-navy transition-colors relative z-20"
        >
          <MessageCircle size={16} /> Connect on WhatsApp
        </motion.a>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center justify-end gap-8 pb-8 z-20">
        <div className="flex gap-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === current ? "w-12 bg-white" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={handleScrollClick}
        >
          <span className="text-[9px] text-white/40 font-bold uppercase tracking-[0.3em] writing-mode-vertical group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent group-hover:from-white transition-all" />
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
