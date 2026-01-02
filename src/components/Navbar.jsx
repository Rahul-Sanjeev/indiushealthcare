import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import IndiusLogo from '../assets/images/logo/IndiusLogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = ['Home', 'About', 'Hospitals', 'Contact'];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <img src={IndiusLogo} alt="Indius Healthcare" className="h-10 w-auto object-contain" />
                    <div className={`flex flex-row gap-2 font-black text-[15px] tracking-tighter leading-none ${scrolled ? 'text-navy' : 'text-white'}`}>
                        INDIUS <span className={`block font-bold tracking-[0.3em] uppercase opacity-60 ${scrolled ? 'text-navy' : 'text-white'}`}>Healthcare</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={`text-[15px] font-bold uppercase tracking-[0.25em] transition-colors hover:text-medical ${scrolled ? 'text-navy/60' : 'text-white/80'}`}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${scrolled ? 'text-navy' : 'text-white'}`}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="p-6 flex flex-col gap-6 text-center">
                            {links.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xs font-bold uppercase tracking-widest text-navy hover:text-medical"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
