"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Dr. Anirban Mukherjee",
    role: "Visiting Faculty, IIT Kharagpur",
    rating: 5,
    text: "I regularly stay at Sibani Resort during my academic visits. The garden setting is incredibly peaceful, and the restaurant serves the best Tandoori chicken and Mughlai food in the area. Highly recommend the Deluxe Garden Suite.",
  },
  {
    name: "Saurav & Riya Sen",
    role: "Couple Travel Bloggers",
    rating: 5,
    text: "We spent our anniversary here. The Lalmati Heritage Cottages feel very traditional and cozy. Walking under the green palm trees at sunset and having tea in clay pots on the veranda was magical. A hidden gem near Midnapore!",
  },
  {
    name: "Priyanka Dasgupta",
    role: "Family Vacationer",
    rating: 5,
    text: "Perfect place for a weekend family gathering. The kids had plenty of lawn space to run around, and we loved watching the cricket match on the big screen in the open-air dining area. Clean bathrooms and polite service.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#591F28] text-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
            Guest Experiences
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Guest Memories
          </h2>
          <div className="w-12 h-0.5 bg-[#CF3147] mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="relative glass-panel-dark p-8 md:p-16 rounded-3xl border border-white/5 shadow-xl">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-[#CF3147]/10">
            <Quote className="w-20 h-20 fill-[#CF3147]/5 text-[#CF3147]/5" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center text-[#CF3147] space-x-1">
                {[...Array(REVIEWS[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#CF3147] text-[#CF3147]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-serif text-lg md:text-2xl font-light italic leading-relaxed text-[#F2EBE7]">
                “{REVIEWS[index].text}”
              </p>

              {/* Name & Role */}
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-white">
                  {REVIEWS[index].name}
                </h4>
                <p className="text-xs text-[#CF3147] font-sans font-medium tracking-wider uppercase">
                  {REVIEWS[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-10">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-white/20 hover:bg-[#CF3147] hover:text-white hover:border-[#CF3147] text-white/80 transition-all duration-300"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-sans text-white/50">
              {index + 1} / {REVIEWS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-white/20 hover:bg-[#CF3147] hover:text-white hover:border-[#CF3147] text-white/80 transition-all duration-300"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
