import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import slider1 from "../assets/images/slider/slider1.jpg";
import slider2 from "../assets/images/slider/slider2.jpg";
import slider3 from "../assets/images/slider/slider3.jpg";
import slider4 from "../assets/images/slider/slider4.jpg";

const SLIDES = [
  {
    id: 1,
    image: slider1,
    title: "Excellence in Global Healing",
  },
  {
    id: 2,
    image: slider2,
    title: "Advanced Surgical Infrastructure",
  },
  {
    id: 3,
    image: slider3,
    title: "Compassionate Patient Care",
  },
  {
    id: 4,
    image: slider4,
    title: "Innovative Healthcare Solutions",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % SLIDES.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full bg-navy overflow-hidden"
    >
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10, ease: "linear" }}
            style={{ backgroundImage: `url(${SLIDES[current].image})` }}
          />
          <div className="absolute inset-0 bg-navy/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          key={current}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mb-10"
        >
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-tight">
            {SLIDES[current].title}
          </h1>
        </motion.div>

        <motion.a
          href="https://wa.me/23057092332"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-medical text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:text-navy transition-colors"
        >
          <MessageCircle size={16} /> Connect on WhatsApp
        </motion.a>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center justify-end gap-8 pb-8 pointer-events-none">
        <div className="flex gap-3 pointer-events-auto">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === current ? "w-12 bg-white" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 pointer-events-auto cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-[9px] text-white/40 font-bold uppercase tracking-[0.3em] writing-mode-vertical">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
