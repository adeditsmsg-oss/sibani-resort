"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Star } from "lucide-react";
import { RESORT_IMAGES } from "../constants/images";

export default function Dining() {
  return (
    <section id="dining" className="py-24 md:py-32 bg-[#591F28] text-white relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#CF3147]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text/Copy Column */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
                Gastronomy &amp; Tastes
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#F2EBE7]">
                A Journey of <span className="italic font-light text-[#CF3147]">Bengal's Flavors</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#CF3147] mt-4" />
            </div>

            <div className="space-y-6 text-white/80 font-sans font-light text-sm md:text-base leading-relaxed">
              <p>
                Food lies at the very heart of the Sibani experience. Our master chefs combine authentic, age-old recipes with local garden ingredients to curate a culinary palette that satisfies both travelers and food connoisseurs.
              </p>
              <p>
                From rich, aromatic Bengali delicacies (like slow-cooked mutton *Kosha Mangsho*, mustard-laced *Hilsa*, and *Chingri Malaikari*) to hot-off-the-tandoor *Mughlai Kababs* and comforting *Indian-Chinese* favorites, every meal is prepared fresh with passion.
              </p>
              <p>
                Choose to dine in our air-conditioned interior hall, or head up to **The Sky Deck**—our open-air dining space lit with warm fairy lights and custom hanging cane lanterns. It's the ultimate setting to watch sports or dine under the stars.
              </p>
            </div>

            {/* Specialties Row */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#CF3147] font-semibold font-sans">Our Signature Dishes</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-[#262626] p-3.5 rounded-2xl border border-white/5">
                  <UtensilsCrossed className="w-4 h-4 text-[#CF3147] shrink-0" />
                  <span className="text-xs font-semibold text-white/90">Heritage Bengali Thali</span>
                </div>
                <div className="flex items-center space-x-3 bg-[#262626] p-3.5 rounded-2xl border border-white/5">
                  <Coffee className="w-4 h-4 text-[#CF3147] shrink-0" />
                  <span className="text-xs font-semibold text-white/90">Clay-Pot Tandoori Chai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 order-1 lg:order-2">
            
            {/* Top Large Image (Restaurant Interior) */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12"
            >
              <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src={RESORT_IMAGES.restaurant}
                  alt="Fine Dining Restaurant"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/75 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#CF3147] font-semibold font-sans">Open Air &amp; Indoor Dining</p>
                  <h3 className="font-serif text-lg md:text-xl font-bold">The Heritage Bistro</h3>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Small Image (Scenic Breakfast) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-6 mt-4"
            >
              <img
                src={RESORT_IMAGES.scenicBreakfast}
                alt="Scenic Outdoor Breakfast"
                className="w-full h-[180px] md:h-[240px] object-cover rounded-3xl shadow-md hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Bottom Right Details */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-6 mt-4 bg-[#262626] text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between border border-white/5"
            >
              <div className="flex text-[#CF3147]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#CF3147] text-[#CF3147]" />
                ))}
              </div>
              <div>
                <p className="font-serif text-xl md:text-2xl font-bold text-[#F2EBE7] mt-4">“The best Tandoori in Kharagpur”</p>
                <p className="text-[10px] uppercase tracking-widest text-[#CF3147] mt-3 font-semibold font-sans">— Google Local Guide</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
