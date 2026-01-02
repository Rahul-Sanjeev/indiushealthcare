import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2400",
        title: "Excellence in Global Healing"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2400",
        title: "Advanced Surgical Infrastructure"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=2400",
        title: "Compassionate Patient Care"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent((prev) => (prev + 1) % SLIDES.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen min-h-[700px] w-full bg-navy overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-105" style={{ backgroundImage: `url(${SLIDES[current].image})` }} />
                    <div className="absolute inset-0 bg-navy/40" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
                <motion.div
                    key={current}
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-light text-white mb-10 tracking-tighter leading-tight">
                        {SLIDES[current].title}
                    </h1>
                    <motion.a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-medical text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:text-navy transition-colors"
                    >
                        <MessageCircle size={16} /> Connect on WhatsApp
                    </motion.a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-0 w-full flex flex-col items-center justify-end gap-8 pb-8 pointer-events-none">
                <div className="flex gap-3 pointer-events-auto">
                    {SLIDES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`h-1 rounded-full transition-all duration-500 ${idx === current ? 'w-12 bg-white' : 'w-4 bg-white/20'}`}
                        />
                    ))}
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 pointer-events-auto cursor-pointer"
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                    <span className="text-[9px] text-white/40 font-bold uppercase tracking-[0.3em] writing-mode-vertical">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
