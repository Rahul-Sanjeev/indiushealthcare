import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

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

export default Footer;
