import React from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import IndiusLogoWhite from "../assets/images/logo/IndiusLogoWhite.png";

const Footer = ({ onOpenLegal }) => {
  return (
    <footer className="bg-navy/95 backdrop-blur-xl text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-medical/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Brand Column - Centered on Mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={IndiusLogoWhite}
                alt="Indius Healthcare"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col md:block">
                <div className="flex flex-row gap-2 font-black text-base tracking-tighter leading-none text-white justify-center md:justify-start">
                  INDIUS{" "}
                  <span className="block font-bold tracking-[0.2em] uppercase opacity-60 text-white">
                    Healthcare
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm font-light leading-loose max-w-xs opacity-70">
              Connecting Mauritius to India's premier medical institutions with
              transparency and care.
            </p>
          </div>

          {/* Links Columns - Side by Side on Mobile */}
          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 opacity-90">
              Explore
            </h4>
            <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide">
              <a href="#home" className="hover:text-medical transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-medical transition-colors">
                About
              </a>
              <a
                href="#hospitals"
                className="hover:text-medical transition-colors"
              >
                Hospitals
              </a>
              <a
                href="#contact"
                className="hover:text-medical transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 opacity-90">
              Legal
            </h4>
            <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide">
              <button
                onClick={() => onOpenLegal("privacy")}
                className="hover:text-medical transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenLegal("terms")}
                className="hover:text-medical transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => onOpenLegal("patient")}
                className="hover:text-medical transition-colors"
              >
                Patient Agreement
              </button>
            </nav>
          </div>

          {/* Connect Column - Centered on Mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 opacity-90">
              Connect
            </h4>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-medical text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-medical text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-medical text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-row flex-wrap justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] font-medium uppercase tracking-widest text-slate-600 w-full md:w-auto text-center md:text-left">
            © 2025 Indius Healthcare
          </p>
          <a
            href="https://voxelyndynamics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors flex items-center justify-center gap-2 group whitespace-nowrap w-full md:w-auto"
          >
            Designed & Developed by{" "}
            <span className="text-slate-500 group-hover:text-medical transition-colors">
              Voxelyn Dynamics
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
