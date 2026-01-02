import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "./SafeImage";

import hospital1 from "../assets/images/hospitals/apollo.jpg";
import hospital2 from "../assets/images/hospitals/fortis.jpg";
import hospital3 from "../assets/images/hospitals/manipal.jpg";
import hospital4 from "../assets/images/hospitals/ck-birla-delhi.jpg";
import hospital5 from "../assets/images/hospitals/yashoda.jpg";
import hospital6 from "../assets/images/hospitals/max.jpg";
import hospital7 from "../assets/images/hospitals/narayana.jpg";
import hospital8 from "../assets/images/hospitals/medanta.jpg";
import hospital9 from "../assets/images/hospitals/sanar.jpg";
import hospital10 from "../assets/images/hospitals/marengo.jpg";
import hospital11 from "../assets/images/hospitals/artemis.jpg";
import hospital12 from "../assets/images/hospitals/paras.jpg";

const HOSPITALS = [
  {
    id: 1,
    name: "Apollo Hospital",
    city: "New Delhi",
    specialties: ["Oncology", "Transplants", "Cardiology"],
    image: hospital1,
  },
  {
    id: 2,
    name: "Fortis Memorial",
    city: "Gurgaon",
    specialties: ["Neurology", "Orthopaedics", "Robotics"],
    image: hospital2,
  },
  {
    id: 3,
    name: "Manipal Hospital",
    city: "Dwarka, New Delhi",
    specialties: ["Genetics", "IVF", "Renal Care"],
    image: hospital3,
  },
  {
    id: 4,
    name: "CK Birla Hospital",
    city: "New Delhi",
    specialties: ["Liver Transplant", "Cardiology", "Neurosciences"],
    image: hospital4,
  },
  {
    id: 5,
    name: "Yashoda Hospital",
    city: "Ghaziabad & Delhi",
    specialties: ["Joint Replacement", "Spine Surgery", "Oncology"],
    image: hospital5,
  },
  {
    id: 6,
    name: "Max Super Speciality",
    city: "New Delhi",
    specialties: ["Cardiac Surgery", "Kidney Transplant", "Bone Marrow"],
    image: hospital6,
  },
  {
    id: 7,
    name: "Narayana Health",
    city: "Gurgaon",
    specialties: ["Cardiac Care", "Solid Organ Transplant", "Haematology"],
    image: hospital7,
  },
  {
    id: 8,
    name: "Medanta",
    city: "Gurgaon",
    specialties: ["Cardiac Care", "Solid Organ Transplant", "Haematology"],
    image: hospital8,
  },
  {
    id: 9,
    name: "Sanar Hospital",
    city: "Gurgaon",
    specialties: ["Cardiac Care", "Solid Organ Transplant", "Haematology"],
    image: hospital9,
  },
  {
    id: 10,
    name: "Marengo Hospital",
    city: "Gurgaon",
    specialties: ["Cardiac Care", "Solid Organ Transplant", "Haematology"],
    image: hospital10,
  },
  {
    id: 11,
    name: "Artemis Hospital",
    city: "Gurgaon",
    specialties: ["Cardiac Care", "Solid Organ Transplant", "Haematology"],
    image: hospital11,
  },
  {
    id: 12,
    name: "Paras Hospital",
    city: "Gurgaon",
    specialties: ["Cardiac Care", "Solid Organ Transplant", "Haematology"],
    image: hospital12,
  },
];

const Hospitals = () => {
  const scrollRef = React.useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Configuration
  const itemWidth = 272; // 240px card + 32px gap
  const speed = 1; // Pixels per frame

  // Auto-scroll logic
  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const loop = () => {
      if (!isPaused) {
        // Main auto-scroll
        scrollContainer.scrollLeft += speed;

        // Infinite Loop Logic:
        // We render 4 sets. We start in the middle.
        // Seamless reset condition:
        // One set width
        const setWidth = HOSPITALS.length * itemWidth;

        // If we've scrolled past the second set, jump back to first
        if (scrollContainer.scrollLeft >= setWidth * 2) {
          scrollContainer.scrollLeft -= setWidth;
        }
        // If we've scrolled to start (via back button), jump forward
        else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft += setWidth;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    // Start loop
    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section id="hospitals" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center md:text-left">
          <span className="text-medical text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
            Network
          </span>
          <h2 className="text-4xl font-light text-navy tracking-tighter">
            Premier Institutions
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Slider Container */}
      <div
        className="relative w-full group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrollable Area */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden no-scrollbar pb-8" // horizontal scroll hidden bars
          style={{ gap: "32px" }}
        >
          {/* Render 4 sets of data to ensure robust infinite looping buffer */}
          {[...HOSPITALS, ...HOSPITALS, ...HOSPITALS, ...HOSPITALS].map(
            (hospital, idx) => (
              <div
                key={`${hospital.id}-${idx}`}
                className="w-[230px] flex-shrink-0 cursor-pointer group/card"
              >
                <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-slate-100 h-full flex flex-col">
                  {/* Maximized Image Area */}
                  <div className="h-36 w-full overflow-hidden relative">
                    <SafeImage
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    {/* Subtle gradient at bottom of image area for transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Area */}
                  <div className="p-4 flex flex-col items-center text-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <h3 className="text-base font-bold text-navy tracking-tight leading-tight group-hover/card:text-medical transition-colors">
                        {hospital.name}
                      </h3>
                      <div className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-widest text-slate-400">
                        <MapPin size={8} className="text-medical" />{" "}
                        {hospital.city.split(",")[0]}
                      </div>
                    </div>

                    <div className="w-6 h-px bg-slate-100 my-1" />

                    <div className="flex flex-wrap justify-center gap-1">
                      {hospital.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="px-1.5 py-0.5 rounded bg-white border border-slate-100 shadow-sm text-[8px] font-bold text-slate-500 group-hover/card:border-medical/20 group-hover/card:text-navy transition-all"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Hospitals;
