"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { RESORT_IMAGES } from "../constants/images";

const GALLERY_ITEMS = [
  { src: RESORT_IMAGES.heroLandscape, category: "Grounds", title: "Sunset over Cottages" },
  { src: RESORT_IMAGES.aerialView, category: "Grounds", title: "Drone Aerial View" },
  { src: RESORT_IMAGES.resortExterior, category: "Grounds", title: "Garden Cottages Pathway" },
  { src: RESORT_IMAGES.luxuryRoom, category: "Rooms", title: "Lalmati Suite Interior" },
  { src: RESORT_IMAGES.villa, category: "Rooms", title: "Royal Bengal Villa Sun-Deck" },
  { src: RESORT_IMAGES.infinityPool, category: "Wellness", title: "Sunset Infinity Pool" },
  { src: RESORT_IMAGES.restaurant, category: "Dining", title: "Fine Dining & Sky Deck" },
  { src: RESORT_IMAGES.spa, category: "Wellness", title: "Ananda Spa Therapy Room" },
  { src: RESORT_IMAGES.scenicBreakfast, category: "Dining", title: "Outdoor Garden Breakfast" },
  { src: RESORT_IMAGES.natureTrail, category: "Grounds", title: "Stone Walk Pathways" },
  { src: RESORT_IMAGES.receptionLobby, category: "Rooms", title: "Terracotta Theme Lobby" },
  { src: RESORT_IMAGES.bonfireEvening, category: "Wellness", title: "Evening Bonfire Lounge" },
];

const CATEGORIES = ["All", "Rooms", "Dining", "Wellness", "Grounds"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeFilter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F2EBE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
            Visual Story
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#262626]">
            Resort Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#CF3147] mx-auto" />
          <p className="text-sm md:text-base text-[#262626]/75 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Step inside our garden sanctuaries. Browse photos of our terracotta cottages, gourmet dishes, open-air big screens, and quiet wellness lounges.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-[#262626] border-[#262626] text-white shadow-md"
                  : "bg-white/80 border-[#262626]/10 text-[#262626] hover:border-[#CF3147] hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-4/3 rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl border border-[#262626]/5 cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10 text-white">
                  <div className="self-end w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#CF3147] font-semibold font-sans">{item.category}</span>
                    <h3 className="font-serif text-lg font-bold text-white mt-0.5">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#262626]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-55 bg-black/25 rounded-full hover:bg-black/50 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Image */}
            <button
              className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 z-55 bg-black/25 rounded-full hover:bg-black/50 transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-5xl max-h-[80vh] relative z-10 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="text-center mt-4 text-white">
                <p className="text-[10px] uppercase tracking-widest text-[#CF3147] font-semibold font-sans">{filteredItems[lightboxIndex].category}</p>
                <h4 className="font-serif text-xl font-bold mt-0.5">{filteredItems[lightboxIndex].title}</h4>
              </div>
            </motion.div>

            {/* Next Image */}
            <button
              className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 z-55 bg-black/25 rounded-full hover:bg-black/50 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
