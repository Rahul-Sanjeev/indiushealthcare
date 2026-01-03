import React, { useState, useRef, useEffect, memo, useMemo } from "react";
import { MapPin } from "lucide-react";
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
    city: "Ghazi Ghaziabad & Delhi",
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

const ITEM_WIDTH = 272;
const SPEED = 1;

const HospitalCard = memo(({ hospital }) => (
  <div className="w-[230px] flex-shrink-0 cursor-pointer group/card will-change-transform">
    <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-slate-100 h-full flex flex-col">
      <div className="h-36 w-full overflow-hidden relative">
        <SafeImage
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-4 flex flex-col items-center text-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-bold text-navy tracking-tight leading-tight group-hover/card:text-medical transition-colors line-clamp-1">
            {hospital.name}
          </h3>
          <div className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-widest text-slate-400">
            <MapPin size={8} className="text-medical" />
            {hospital.city.split(",")[0]}
          </div>
        </div>

        <div className="w-6 h-px bg-slate-100 my-1" />

        <div className="flex flex-wrap justify-center gap-1">
          {hospital.specialties.slice(0, 3).map((spec) => (
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
));

const Hospitals = memo(() => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    const setWidth = HOSPITALS.length * ITEM_WIDTH;

    const loop = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += SPEED;

        if (scrollContainer.scrollLeft >= setWidth * 2) {
          scrollContainer.scrollLeft -= setWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft += setWidth;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const fullHospitals = useMemo(
    () => [...HOSPITALS, ...HOSPITALS, ...HOSPITALS, ...HOSPITALS],
    []
  );

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

      <div
        className="relative w-full group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex overflow-x-hidden no-scrollbar pb-8 will-change-transform"
          style={{ gap: "32px" }}
        >
          {fullHospitals.map((hospital, idx) => (
            <HospitalCard key={`${hospital.id}-${idx}`} hospital={hospital} />
          ))}
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
});

export default Hospitals;
