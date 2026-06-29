"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Wifi, Wind, ShieldAlert, Sparkles, Phone } from "lucide-react";
import { RESORT_IMAGES } from "../constants/images";

const COTTAGES = [
  {
    id: "royal-bengal-villa",
    name: "Royal Bengal Villa",
    type: "Premium Private Haven",
    price: "₹5,499",
    image: RESORT_IMAGES.villa,
    description: "Our signature villa features spacious interiors, rich teakwood furniture, a private sun-deck veranda with garden views, and personalized service.",
    amenities: ["King Size Bed", "High-speed Wi-Fi", "Split AC", "Coffee Maker", "Premium Linen", "24/7 Power Backup"],
    tag: "Most Popular",
  },
  {
    id: "lalmati-heritage-cottage",
    name: "Lalmati Heritage Cottage",
    type: "Terracotta Theme Luxury",
    price: "₹4,299",
    image: RESORT_IMAGES.luxuryRoom,
    description: "Designed in traditional red-clay terracotta style, this cottage boasts hand-crafted clay accents, local Kantha embroidered linens, and a private botanical sit-out.",
    amenities: ["Queen Bed", "High-speed Wi-Fi", "Split AC", "Cottage Sit-out", "Kantha Decor", "Complimentary Breakfast"],
    tag: "Heritage Pick",
  },
  {
    id: "deluxe-garden-suite",
    name: "Deluxe Garden Suite",
    type: "Modern Nature Retreat",
    price: "₹3,499",
    image: RESORT_IMAGES.resortExterior,
    description: "Spacious suite featuring large picture windows looking out into the resort gardens, combining contemporary luxury with rustic natural elements.",
    amenities: ["King Size Bed", "High-speed Wi-Fi", "In-room Dining", "Split AC", "Work Desk", "Plush Sofa Lounge"],
    tag: "Serene View",
  },
  {
    id: "standard-garden-room",
    name: "Standard Garden Room",
    type: "Elegant Comfort Stay",
    price: "₹2,499",
    image: RESORT_IMAGES.receptionLobby,
    description: "A perfect blend of convenience and luxury for travelers. Located along our central garden walk, offering cozy bedding and modern amenities.",
    amenities: ["Double Bed", "High-speed Wi-Fi", "Split AC", "Housekeeping", "Standard Toiletries", "Power Backup"],
    tag: "Best Value",
  },
];

export default function Accommodations() {
  const handleBookRoom = (roomName) => {
    const message = encodeURIComponent(
      `Hello Sibani Resort! I am interested in reserving the "${roomName}". Please let me know the availability.`
    );
    window.open(`https://wa.me/919932826480?text=${message}`, "_blank");
  };

  return (
    <section id="cottages" className="py-24 md:py-32 bg-[#262626] text-[#F2EBE7] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
            Luxurious Sanctuary
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-white">
            The Cottage &amp; Villa Collection
          </h2>
          <div className="w-16 h-0.5 bg-[#CF3147] mx-auto" />
          <p className="text-sm md:text-base text-white/70 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Choose from our thoughtfully curated private accommodations, each designed to capture the heritage of West Bengal while delivering modern luxury and complete serenity.
          </p>
        </div>

        {/* Cottages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {COTTAGES.map((cottage, idx) => (
            <motion.div
              key={cottage.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-[#333333] rounded-3xl overflow-hidden shadow-lg border border-white/5 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
                <img
                  src={cottage.image}
                  alt={cottage.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 z-10 flex space-x-2">
                  <span className="bg-[#CF3147] text-white text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full font-semibold border border-white/10 shadow-sm">
                    {cottage.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-10 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#CF3147] font-semibold font-sans">{cottage.type}</p>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mt-0.5">{cottage.name}</h3>
                </div>
                <div className="absolute bottom-4 right-4 z-10 bg-[#CF3147] text-white px-4 py-1.5 rounded-full shadow-md text-xs font-semibold tracking-wider font-sans">
                  {cottage.price} <span className="text-[10px] font-light">/ night</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                <p className="text-sm text-white/80 font-sans font-light leading-relaxed">
                  {cottage.description}
                </p>

                {/* Amenities Grid */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#CF3147] font-semibold font-sans mb-3">Premium Inclusions</p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {cottage.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CF3147] shrink-0" />
                        <span className="font-sans font-light">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center justify-between gap-4">
                  <button
                    onClick={() => handleBookRoom(cottage.name)}
                    className="w-full py-3 bg-[#CF3147] hover:bg-[#591F28] text-white rounded-full text-xs font-semibold tracking-widest uppercase border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.447 4.908 1.448 5.413 0 9.808-4.4 9.812-9.815.002-2.623-1.01-5.086-2.855-6.936C16.628 3.987 14.15 2.97 11.53 2.97c-5.42 0-9.82 4.4-9.824 9.818-.001 1.849.503 3.543 1.461 5.176l-.962 3.512 3.616-.948zm12.39-7.143c-.27-.136-1.602-.79-1.85-.88-.25-.09-.432-.136-.614.137-.182.273-.705.88-.863 1.062-.16.182-.318.204-.588.068-.27-.136-1.14-.42-2.172-1.34-.803-.717-1.345-1.603-1.503-1.876-.16-.273-.017-.42.119-.556.122-.122.27-.318.406-.477.136-.16.182-.272.272-.455.09-.182.046-.34-.022-.477-.068-.136-.613-1.477-.84-2.023-.223-.538-.47-.464-.614-.472-.14-.01-.3-.01-.462-.01-.162 0-.427.06-.65.305-.224.244-.855.836-.855 2.037 0 1.2.875 2.36 1.0 2.527.125.166 1.72 2.628 4.167 3.684.582.251 1.037.4 1.392.513.585.186 1.117.16 1.538.097.469-.07 1.602-.656 1.83-1.28.228-.624.228-1.16.16-1.28-.07-.12-.25-.205-.52-.34z" />
                    </svg>
                    <span>Instant WhatsApp Book</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on ID Policies */}
        <div className="mt-16 flex items-center justify-center space-x-2 text-center text-xs text-white/50">
          <ShieldAlert className="w-4 h-4 text-[#CF3147]" />
          <span>Note: Valid Government photo ID is required for checking-in. Local residents and couples are welcome under standard hotel guidelines.</span>
        </div>
      </div>
    </section>
  );
}
