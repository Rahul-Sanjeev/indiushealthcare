import React, { useState, useEffect, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import IndiusLogoDark from "../assets/images/logo/IndiusLogoDark.png";
import IndiusLogoWhite from "../assets/images/logo/IndiusLogoWhite.png";

const NAV_LINKS = ["Home", "About", "Hospitals", "Contact"];

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
    window.history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }, []);

  const handleNavLinkClick = useCallback((e, link) => {
    e.preventDefault();
    setIsOpen(false);

    // Delayed scroll to allow menu animation to start closing
    setTimeout(() => {
      const element = document.getElementById(link.toLowerCase());
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, null, `#${link.toLowerCase()}`);
      }
    }, 300);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 will-change-transform ${
        scrolled || isOpen
          ? "bg-white/90 backdrop-blur-md py-4 border-b border-slate-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer relative z-[110]"
          onClick={handleLogoClick}
        >
          <img
            src={scrolled || isOpen ? IndiusLogoDark : IndiusLogoWhite}
            alt="Indius Healthcare"
            className="h-9 w-auto object-contain transition-all duration-300"
          />
          <div
            className={`flex flex-row gap-2 font-black text-[14px] tracking-tighter leading-none ${
              scrolled || isOpen ? "text-navy" : "text-white"
            }`}
          >
            INDIUS{" "}
            <span
              className={`block font-bold tracking-[0.3em] uppercase opacity-60 ${
                scrolled || isOpen ? "text-navy" : "text-white"
              }`}
            >
              Healthcare
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-[14px] font-bold uppercase tracking-[0.25em] transition-colors hover:text-medical ${
                scrolled ? "text-navy/60" : "text-white/80"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className={`relative z-[110] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center md:hidden ${
            scrolled || isOpen ? "text-navy" : "text-white"
          }`}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-xl z-[90] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className="text-sm font-bold uppercase tracking-[0.3em] text-navy hover:text-medical p-4 min-h-[44px]"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

export default Navbar;
