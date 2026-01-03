import React, { memo } from "react";
import { Stethoscope, Plane, Building2, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const JOURNEY = [
  {
    id: 1,
    title: "Medical Review",
    desc: "Expert clinical assessment and file review.",
    icon: <Stethoscope size={20} />,
  },
  {
    id: 2,
    title: "Travel Logistics",
    desc: "Visa assistance and flight bookings.",
    icon: <Plane size={20} />,
  },
  {
    id: 3,
    title: "Treatment",
    desc: "Priority care in Tier-1 Indian hospitals.",
    icon: <Building2 size={20} />,
  },
  {
    id: 4,
    title: "Recovery",
    desc: "Post-operative monitoring and support.",
    icon: <HeartPulse size={20} />,
  },
];

const About = memo(() => {
  return (
    <section
      id="about"
      className="py-16 md:py-32 bg-slate-50 border-y border-slate-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <span className="text-medical text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-navy tracking-tighter">
            The Patient Journey
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {JOURNEY.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group will-change-transform"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm mb-6 group-hover:bg-medical group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-widest mb-3">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default About;
