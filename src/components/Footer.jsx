import React, { memo, useCallback } from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import IndiusLogoWhite from "../assets/images/logo/IndiusLogoWhite.png";

const Footer = memo(({ onOpenLegal }) => {
  const handleLegalClick = useCallback(
    (tab) => {
      onOpenLegal(tab);
    },
    [onOpenLegal]
  );

  return (
    <footer
      id="footer"
      className="bg-navy/95 backdrop-blur-xl text-slate-400 py-16 border-t border-white/5 relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-medical/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src={IndiusLogoWhite}
                alt="Indius Healthcare"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 font-black text-base tracking-tighter leading-none text-white justify-start">
                  INDIUS{" "}
                  <span className="block font-bold tracking-[0.2em] uppercase opacity-60 text-white">
                    Healthcare
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm font-light leading-relaxed opacity-70 max-w-xs text-left">
              Connecting Mauritius to India's premier medical institutions with
              transparency and care.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 opacity-90">
              Explore
            </h4>
            <nav className="flex flex-col gap-3 text-sm font-medium tracking-wide">
              <a
                href="#home"
                className="hover:text-medical transition-colors text-left"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-medical transition-colors text-left"
              >
                About
              </a>
              <a
                href="#hospitals"
                className="hover:text-medical transition-colors text-left"
              >
                Hospitals
              </a>
              <a
                href="#contact"
                className="hover:text-medical transition-colors text-left"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 opacity-90">
              Legal
            </h4>
            <nav className="flex flex-col gap-3 text-sm font-medium tracking-wide">
              <button
                onClick={() => handleLegalClick("privacy")}
                className="hover:text-medical transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLegalClick("terms")}
                className="hover:text-medical transition-colors text-left"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLegalClick("patient")}
                className="hover:text-medical transition-colors text-left"
              >
                Patient Agreement
              </button>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 opacity-90">
              Connect
            </h4>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-medical mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-slate-400">
                  Lallmatie, Mauritius
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-medical shrink-0" />
                <a
                  href="tel:+23058227575"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  +230 5822 7575
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-medical shrink-0" />
                <a
                  href="https://wa.me/23058227575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  +230 5822 7575
                </a>
              </div>
            </div>

            <div className="flex gap-4">
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

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-medium uppercase tracking-widest text-slate-600">
            © 2025 Indius Healthcare
          </p>
          <a
            href="https://voxelyndynamics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors flex items-center gap-2 group"
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
});

export default Footer;
