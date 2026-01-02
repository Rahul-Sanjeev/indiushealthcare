import React from 'react';
import { Phone, Mail } from 'lucide-react';

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

export default Contact;
