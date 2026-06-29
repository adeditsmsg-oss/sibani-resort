"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, Trees, GraduationCap, Compass } from "lucide-react";

const ATTRACTIONS = [
  {
    name: "IIT Kharagpur Campus",
    distance: "12 mins away",
    icon: GraduationCap,
    description: "Visit India's first and largest Indian Institute of Technology. The campus features sprawling green walks, the Nehru Museum of Science and Technology, and historic heritage points.",
  },
  {
    name: "Regional Terracotta Temples",
    distance: "20 mins away",
    icon: Landmark,
    description: "Explore the ancient clay and terracotta temples scattered across the heritage areas. They showcase traditional hand-carved panels depicting mythological scenes from Bengal's history.",
  },
  {
    name: "Gopegarh Heritage Eco-Park",
    distance: "25 mins away",
    icon: Compass,
    description: "Perched on the banks of the Kangsabati River, this scenic park houses historic fort ruins, nature watchtowers, and panoramic views of the river plains.",
  },
  {
    name: "Salboni & Arabari Sal Forests",
    distance: "35 mins away",
    icon: Trees,
    description: "Drive out to the deep Sal and Eucalyptus woodlands. Home to traditional eco-tourism reserves, scenic drives, and seasonal elephant migration paths.",
  },
];

export default function Attractions() {
  return (
    <section className="py-24 bg-[#F2EBE7] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
            Regional Discovery
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#262626]">
            Explore the Kharagpur Region
          </h2>
          <div className="w-16 h-0.5 bg-[#591F28]" />
          <p className="text-sm md:text-base text-[#262626]/75 font-sans font-light max-w-2xl leading-relaxed">
            Sibani Resort is situated at Chowrangee More, making it the ideal central base for academic visits to IIT Kharagpur, historic temple safaris, or forest trails.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATTRACTIONS.map((att, idx) => {
            const IconComp = att.icon;
            return (
              <motion.div
                key={att.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-[#262626]/5 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Icon & Distance */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#262626]/5 group-hover:bg-[#262626] flex items-center justify-center text-[#CF3147] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#CF3147] font-semibold font-sans bg-[#CF3147]/5 px-3 py-1 rounded-full">
                      {att.distance}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-[#262626]">
                    {att.name}
                  </h3>
                  
                  {/* Desc */}
                  <p className="text-xs text-[#262626]/75 font-sans font-light leading-relaxed">
                    {att.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
