"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FlameKindling, Utensils, HeartHandshake, Award } from "lucide-react";

const VALUE_PROPS = [
  {
    title: "100% Power & AC Backup",
    desc: "Complete 24-hour generator backup ensures your AC, lighting, and hot showers never face interruptions.",
    icon: ShieldCheck,
  },
  {
    title: "Culinary Destination",
    desc: "Renowned across Kharagpur for our tandoori kebabs, Mughlai, and traditional home-styled Bengali thalis.",
    icon: Utensils,
  },
  {
    title: "Lush & Quiet Grounds",
    desc: "A sprawling green escape away from the city traffic noise, perfect for walks, bonfires, and gatherings.",
    icon: FlameKindling,
  },
  {
    title: "Warm Bengali Hospitality",
    desc: "Our attentive staff is committed to making your stay comfortable, assisting with transit, local safaris, and requests.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F2EBE7] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Column 1: Value props grid */}
          <div className="lg:col-span-8 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUE_PROPS.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-[#262626]/5 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#CF3147]/5 flex items-center justify-center text-[#CF3147] mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#262626]">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-[#262626]/75 font-sans font-light leading-relaxed mt-2">
                    {prop.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Column 2: Text & Accolades */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
                Quality Standards
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#262626]">
                Redefining the <br />
                <span className="italic font-light text-[#CF3147]">Resort Experience</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#591F28] mt-4" />
            </div>
            
            <p className="text-xs sm:text-sm text-[#262626]/80 font-sans font-light leading-relaxed">
              We focus on the fine details—providing clean, cool, and comfortable cottage stays that address common guest pain points.
            </p>

            {/* Accolades */}
            <div className="pt-6 space-y-4 border-t border-[#262626]/10">
              <div className="flex items-center space-x-3 text-[#262626]">
                <Award className="w-5 h-5 text-[#CF3147] shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">Top Rated Garden Resort 2025</span>
              </div>
              <div className="flex items-center space-x-3 text-[#262626]">
                <Award className="w-5 h-5 text-[#CF3147] shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">Highly Commended Regional Cuisine</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
