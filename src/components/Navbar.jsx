import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import IndiusLogoDark from "../assets/images/logo/IndiusLogoDark.png";
import IndiusLogoWhite from "../assets/images/logo/IndiusLogoWhite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Hospitals", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-4 border-b border-slate-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
            window.history.pushState(
              "",
              document.title,
              window.location.pathname + window.location.search
            );
          }}
        >
          <img
            src={scrolled ? IndiusLogoDark : IndiusLogoWhite}
            alt="Indius Healthcare"
            className="h-10 w-auto object-contain transition-all duration-300"
          />
          <div
            className={`flex flex-row gap-2 font-black text-[15px] tracking-tighter leading-none ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            INDIUS{" "}
            <span
              className={`block font-bold tracking-[0.3em] uppercase opacity-60 ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              Healthcare
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-[15px] font-bold uppercase tracking-[0.25em] transition-colors hover:text-medical ${
                scrolled ? "text-navy/60" : "text-white/80"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${scrolled ? "text-navy" : "text-white"}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-[88px] left-0 w-full bg-white border-t border-slate-100 overflow-hidden shadow-xl z-40"
          >
            <div className="flex flex-col text-center divide-y divide-slate-50">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById(
                        link.toLowerCase()
                      );
                      if (element) {
                        const offset = 80;
                        const bodyRect =
                          document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });

                        // Update URL hash manually without jump
                        window.history.pushState(
                          null,
                          null,
                          `#${link.toLowerCase()}`
                        );
                      }
                    }, 300);
                  }}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-navy hover:text-medical hover:bg-slate-50 py-6 transition-all active:scale-95"
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
