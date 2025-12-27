import React, { useState, useEffect } from 'react';
import {
  Menu, X, MessageCircle, MapPin,
  Linkedin, Facebook, Instagram,
  Award, MoveRight, Stethoscope,
  Plane, Building2, HeartPulse,
  ArrowRight, Phone, Mail, Globe, CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Safe Image Component ---
const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`bg-slate-50 flex items-center justify-center ${className}`}>
        <Building2 className="text-slate-200" size={32} />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

// --- Data Configuration ---
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

const JOURNEY = [
  { id: 1, title: "Medical Review", desc: "Expert clinical assessment and file review.", icon: <Stethoscope size={20} /> },
  { id: 2, title: "Travel Logistics", desc: "Visa assistance and flight bookings.", icon: <Plane size={20} /> },
  { id: 3, title: "Treatment", desc: "Priority care in Tier-1 Indian hospitals.", icon: <Building2 size={20} /> },
  { id: 4, title: "Recovery", desc: "Post-operative monitoring and support.", icon: <HeartPulse size={20} /> }
];

const HOSPITALS = [
  {
    id: 1,
    name: "Apollo Hospitals",
    city: "New Delhi",
    specialties: ["Oncology", "Transplants", "Cardiology"],
    image: "https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    name: "Fortis Memorial",
    city: "Gurgaon",
    specialties: ["Neurology", "Orthopaedics", "Robotics"],
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    name: "Manipal Hospital",
    city: "Bangalore",
    specialties: ["Genetics", "IVF", "Renal Care"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0674f66?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    name: "Medanta The Medicity",
    city: "Gurgaon",
    specialties: ["Liver Transplant", "Cardiology", "Neurosciences"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    name: "Artemis Hospitals",
    city: "Gurgaon",
    specialties: ["Joint Replacement", "Spine Surgery", "Oncology"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 6,
    name: "Max Super Speciality",
    city: "New Delhi",
    specialties: ["Cardiac Surgery", "Kidney Transplant", "Bone Marrow"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 7,
    name: "Kokilaben Dhirubhai",
    city: "Mumbai",
    specialties: ["Robotic Surgery", "Sports Medicine", "Children's Heart"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 8,
    name: "Gleneagles Global",
    city: "Chennai",
    specialties: ["Lung Transplant", "Hepatology", "Gastroenterology"],
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 9,
    name: "Narayana Health",
    city: "Bangalore",
    specialties: ["Cardiac Care", "Solid Organ Transplant", "Haematology"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0674f66?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 10,
    name: "BLK-Max Hospital",
    city: "New Delhi",
    specialties: ["Bone Marrow Transplant", "Cancer Care", "Obesity"],
    image: "https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?auto=format&fit=crop&q=80&w=1200"
  }
];

// --- Legal Modal Component ---
const LegalModal = ({ isOpen, onClose, initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'patient', label: 'Patient Agreement' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-navy/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-lg font-bold text-navy uppercase tracking-widest">Legal Portal</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-navy transition-colors"><X size={20} /></button>
            </div>
            <div className="flex border-b border-slate-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'text-medical border-b-2 border-medical bg-medical/5' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto p-8 text-sm text-slate-500 font-light leading-relaxed space-y-4">
              {activeTab === 'privacy' && <p>Indius Healthcare ensures strict confidentiality of all patient medical records in compliance with international GDPR and HIPAA standards. Data is shared exclusively with accredited medical teams for case review.</p>}
              {activeTab === 'terms' && <p>We act as a medical travel facilitator. We do not provide medical advice or treatment. All clinical decisions are the sole responsibility of the treating hospitals and specialists in India.</p>}
              {activeTab === 'patient' && <p>Patients agree to provide accurate and complete medical history to facilitate safe and effective treatment planning. Indius Healthcare is not liable for outcomes resulting from undisclosed information.</p>}
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 text-right">
              <button onClick={onClose} className="px-8 py-2 bg-navy text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-medical transition-colors">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main Components ---

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
          <div className="w-8 h-8 bg-navy text-white flex items-center justify-center rounded-lg shadow-lg">
            <HeartPulse size={18} className="text-medical" />
          </div>
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

const About = () => {
  return (
    <section id="about" className="py-32 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-medical text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">How It Works</span>
          <h2 className="text-4xl font-light text-navy tracking-tighter">The Patient Journey</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {JOURNEY.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm mb-6 group-hover:bg-medical group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-widest mb-3">{step.title}</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hospitals = () => {
  return (
    <section id="hospitals" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <span className="text-medical text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Network</span>
          <h2 className="text-4xl font-light text-navy tracking-tighter">Premier Institutions</h2>
        </div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate list for seamless loop */}
          {[...HOSPITALS, ...HOSPITALS].map((hospital, idx) => (
            <div
              key={`${hospital.id}-${idx}`}
              className="w-[350px] flex-shrink-0 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6 border border-slate-100 shadow-sm transition-all group-hover:shadow-2xl">
                <SafeImage src={hospital.image} alt={hospital.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-2 opacity-80">
                    <MapPin size={12} /> {hospital.city}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight">{hospital.name}</h3>
                </div>
              </div>
              <ul className="space-y-2 px-2">
                {hospital.specialties.map(spec => (
                  <li key={spec} className="flex items-center gap-3 text-xs text-slate-500 font-light">
                    <ArrowRight size={12} className="text-medical" /> {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-medical text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Concierge Desk</span>
            <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tighter mb-12">
              Start Your Journey <br /> <span className="font-bold">To Recovery.</span>
            </h2>
            <form className="max-w-md mx-auto space-y-4 mb-10 text-left">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-4 mb-1 block">Patient Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-medical transition-colors" placeholder="Full Name" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-4 mb-1 block">Medical Concern</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-medical transition-colors" placeholder="Describe briefly" />
              </div>
              <button className="w-full bg-navy text-white rounded-full py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-medical transition-colors shadow-lg">Submit Request</button>
            </form>
            <div className="flex justify-center gap-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 hover:text-navy transition-colors">
                <Phone size={16} /> <span className="text-xs font-bold tracking-widest">+230 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 hover:text-navy transition-colors">
                <Mail size={16} /> <span className="text-xs font-bold tracking-widest">care@indius.health</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenLegal }) => {
  return (
    <footer className="bg-navy text-slate-400 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="font-black text-2xl tracking-tighter text-white mb-6">INDIUS <span className="font-light opacity-60">HEALTH</span></div>
            <p className="text-xs font-light leading-relaxed max-w-xs">Connecting Mauritius to India's premier medical institutions with transparency and care.</p>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Explore</h4>
            <nav className="flex flex-col gap-3 text-xs font-medium">
              <a href="#home" className="hover:text-medical transition-colors">Home</a>
              <a href="#about" className="hover:text-medical transition-colors">About</a>
              <a href="#hospitals" className="hover:text-medical transition-colors">Hospitals</a>
              <a href="#contact" className="hover:text-medical transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Legal</h4>
            <nav className="flex flex-col gap-3 text-xs font-medium">
              <button onClick={() => onOpenLegal('privacy')} className="text-left hover:text-medical transition-colors">Privacy Policy</button>
              <button onClick={() => onOpenLegal('terms')} className="text-left hover:text-medical transition-colors">Terms of Service</button>
              <button onClick={() => onOpenLegal('patient')} className="text-left hover:text-medical transition-colors">Patient Agreement</button>
            </nav>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-medical hover:text-white transition-all"><Facebook size={16} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-medical hover:text-white transition-all"><Linkedin size={16} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-medical hover:text-white transition-all"><Instagram size={16} /></a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">© 2025 Indius Healthcare</p>
          <a
            href="https://voxelyndynamics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors flex items-center gap-2 group"
          >
            Designed & Developed by <span className="text-white group-hover:text-medical transition-colors">Voxelyn Dynamics</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- App Root ---
function App() {
  const [legal, setLegal] = useState({ isOpen: false, tab: 'privacy' });
  const openLegal = (tab) => setLegal({ isOpen: true, tab });
  const closeLegal = () => setLegal({ ...legal, isOpen: false });

  return (
    <div className="antialiased w-full overflow-x-hidden font-sans selection:bg-medical/20 selection:text-medical scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Hospitals />
        <Contact />
      </main>
      <Footer onOpenLegal={openLegal} />
      <LegalModal isOpen={legal.isOpen} onClose={closeLegal} initialTab={legal.tab} />
    </div>
  );
}

export default App;
