"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, MapPin } from "lucide-react";
import { RESORT_IMAGES } from "../constants/images";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F2EBE7] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Staggered Visual Collage */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            <div className="absolute inset-0 bg-[#CF3147]/5 rounded-3xl -m-6 lg:-m-8 z-0 pointer-events-none" />
            
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="col-span-8 z-10"
            >
              <img
                src={RESORT_IMAGES.resortExterior}
                alt="Sibani Resort Cottages"
                className="w-full h-[320px] md:h-[450px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            {/* Staggered Overlay Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-5 col-start-8 row-start-1 mt-20 -ml-12 z-20"
            >
              <img
                src={RESORT_IMAGES.receptionLobby}
                alt="Reception Lobby"
                className="w-full h-[220px] md:h-[300px] object-cover rounded-3xl shadow-2xl border-4 border-[#F2EBE7] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Experience Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 left-6 z-30 glass-panel px-6 py-4 rounded-2xl shadow-xl flex items-center space-x-4 border border-[#262626]/10"
            >
              <div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center text-[#CF3147]">
                <Sparkles className="w-5.5 h-5.5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#262626]/60 font-semibold font-sans">Nature &amp; Calm</p>
                <p className="text-base font-serif font-bold text-[#262626]">Lush Garden Oasis</p>
              </div>
            </motion.div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
                The Heritage Legacy
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#262626] leading-tight">
                A Serene Sanctuary in the <span className="italic font-light text-[#CF3147]">Heart of Kharagpur</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#591F28] mt-4" />
            </div>

            <div className="space-y-6 text-[#262626]/80 font-sans font-light text-sm md:text-base leading-relaxed">
              <p>
                Situated at the historic gateway of Chowrangee More in Kharagpur, <strong>Sibani Resort</strong> weaves together Bengal's rich culture of hospitality with an abundance of natural serenity.
              </p>
              <p>
                What once served as a warm, convenient transit stop for travelers is now reimagined as a premium heritage eco-sanctuary. Surrounded by towering palms, manicured stone pathways, and traditional red-clay terracotta architecture, our resort offers a sensory escape from the hum of modern life.
              </p>
              <p>
                Whether you are visiting for a peaceful weekend getaway, dining at our multi-cuisine culinary deck, or celebrating grand lifetime memories in our banquets, Sibani welcomes you with genuine care and timeless elegance.
              </p>
            </div>

            {/* Location highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#262626]/10">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-[#CF3147] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#262626]">Perfect Access</h4>
                  <p className="text-xs text-[#262626]/70 mt-1">10 minutes from Kharagpur Railway Station &amp; Bus Terminus.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Compass className="w-5 h-5 text-[#CF3147] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#262626]">Local Gateway</h4>
                  <p className="text-xs text-[#262626]/70 mt-1">Conveniently close to IIT Kharagpur, Salboni, and historic temples.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
