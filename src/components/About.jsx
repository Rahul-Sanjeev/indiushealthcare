import React, { memo } from "react";
import {
  Stethoscope,
  Plane,
  Building2,
  HeartPulse,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";
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
      className="py-16 md:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Vision & Identity Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-24 items-start">
          {/* Left Column: Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-32"
          >
            {/* Mission Section */}
            <div className="mb-12">
              <span className="text-medical text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">
                Our Mission
              </span>
              <div className="border-l-4 border-medical pl-6 md:pl-8">
                <p className="text-xl md:text-2xl font-light text-navy leading-relaxed tracking-tight">
                  "To curate a seamless medical journey with a focus on making
                  international healthcare accessible beyond borders by
                  connecting patients with trusted providers in order to ensure
                  a safe and efficient treatment along with personalised care
                  plans offering comprehensive support from diagnosis to
                  recovery."
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div>
              <span className="text-medical text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">
                Our Vision
              </span>
              <div className="border-l-4 border-medical pl-6 md:pl-8">
                <p className="text-xl md:text-2xl font-light text-navy leading-relaxed tracking-tight">
                  "To be recognised as a leading global facilitator for
                  pioneering ethical medical tourism that empowers patients to
                  confidently access world-class medical care for enhancing
                  their quality of life and overall well-being."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Identity Cards */}
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 will-change-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-navy">
                  <Users size={24} />
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-medical px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Award size={12} />
                  <span>30+ Years Exp</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Who We Are</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We are a group of dynamic healthcare professionals having worked
                locally and internationally, in UK and Australia, boasting over
                30 years of experience in clinical, advisory and managerial
                roles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 will-change-transform"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-navy mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">What We Do</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We assist patients to make informed health decisions by ensuring
                transparency and dedicated support from consultation to
                recovery, including follow-up care coordination.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-200 mb-20 md:mb-24 opacity-60" />

        {/* Patient Journey Section */}
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
              transition={{ delay: 0.2 + idx * 0.1 }}
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
