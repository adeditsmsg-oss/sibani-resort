"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tv, Flame, Leaf, Sun } from "lucide-react";
import { RESORT_IMAGES } from "../constants/images";

const EXPERIENCES = [
  {
    id: "sky-cinema",
    title: "The Sky Cinema & Deck",
    subtitle: "Cricket & Movies Under the Stars",
    image: RESORT_IMAGES.aerialView,
    icon: Tv,
    description: "Gather at our rooftop open-air lounge for live screenings of cricket matches, sports, and classic movies. Indulge in warm food and local beverages in a highly energetic yet cozy atmosphere.",
  },
  {
    id: "bonfire-nights",
    title: "Lalmati Bonfire Evenings",
    subtitle: "Warmth & Melodies Under Fairy Lights",
    image: RESORT_IMAGES.bonfireEvening,
    icon: Flame,
    description: "As the sun sets, gather around our signature fire pit. Framed by twinkling fairy lights, traditional seating, and ambient acoustics, it's the perfect setting to relax with family and friends.",
  },
  {
    id: "nature-trails",
    title: "Botanical Garden Trails",
    subtitle: "A Walk through Bengal's Flora",
    image: RESORT_IMAGES.natureTrail,
    icon: Leaf,
    description: "Take a quiet stroll down our manicured stone pathways. Flanked by tall palms, lush local shrubs, and beautiful rows of golden marigold flowers, it is a bird-watcher's peaceful delight.",
  },
  {
    id: "sunrise-yoga",
    title: "Sunrise Yoga & Calm",
    subtitle: "Revitalize Mind & Soul",
    image: RESORT_IMAGES.coupleResort,
    icon: Sun,
    description: "Start your morning with a guided yoga session on the manicured green lawns. Unwind with breathing exercises, serene music, and traditional herbal tea brewed from local gardens.",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-[#F2EBE7] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
            Resort Life
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#262626]">
            Signature Experiences
          </h2>
          <div className="w-16 h-0.5 bg-[#591F28]" />
          <p className="text-sm md:text-base text-[#262626]/75 font-sans font-light max-w-2xl leading-relaxed">
            From the cheers of an open-air cricket screening to the absolute quietude of morning garden walks, discover curated activities designed to make every moment memorable.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {EXPERIENCES.map((exp, idx) => {
            const IconComp = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative h-[450px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Background */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/40 to-black/30 transition-opacity duration-500 z-10" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 text-[#F2EBE7]">
                  {/* Icon */}
                  <div className="self-end w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#CF3147] border border-white/10">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#CF3147] font-semibold font-sans block">
                        {exp.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mt-1">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-white/80 font-sans font-light leading-relaxed max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
