"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CalendarDays, Users2, Award } from "lucide-react";
import { RESORT_IMAGES } from "../constants/images";

export default function Events() {
  const handleInquireEvents = () => {
    const message = encodeURIComponent(
      "Hello Sibani Resort! I would like to inquire about booking your banquet hall/lawn for an upcoming event. Please share details and packages."
    );
    window.open(`https://wa.me/919932826480?text=${message}`, "_blank");
  };

  return (
    <section id="events" className="py-24 md:py-32 bg-[#262626] text-white relative overflow-hidden">
      {/* Background Graphic overlay */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#CF3147]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Staggered Visual Showcase */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            <div className="absolute inset-0 bg-[#CF3147]/5 rounded-3xl -m-6 z-0 pointer-events-none" />
            
            {/* Top Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12"
            >
              <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src={RESORT_IMAGES.receptionLobby}
                  alt="Elegant Banquet Hall"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#CF3147] font-semibold font-sans">Traditional &amp; Royal Styling</p>
                  <h3 className="font-serif text-lg md:text-xl font-bold">Heritage Banquet Hall</h3>
                </div>
              </div>
            </motion.div>

            {/* Floating stats badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 right-6 z-30 bg-[#591F28] text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-3"
            >
              <Users2 className="w-6 h-6 text-[#CF3147]" />
              <div>
                <p className="text-[9px] uppercase tracking-widest text-white/60 font-sans font-semibold">Total Event Capacity</p>
                <p className="text-sm font-serif font-bold text-white">Up to 300+ Guests</p>
              </div>
            </motion.div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
                Grand Celebrations
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#F2EBE7]">
                Weddings, Banquets <br />
                <span className="italic font-light text-[#CF3147]">&amp; Royal Gatherings</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#CF3147] mt-4" />
            </div>

            <div className="space-y-6 text-white/80 font-sans font-light text-sm md:text-base leading-relaxed">
              <p>
                Host your special milestones in a setting that matches the significance of the occasion. From intimate engagement parties and traditional wedding receptions to corporate retreats, Sibani Resort provides versatile spaces and exemplary execution.
              </p>
              <p>
                Our indoor **Heritage Banquet Hall** features elegant draped ceilings, high-end upholstery, and customizable stage setups. Outdoors, our green garden lawns provide a spacious setting for evening receptions, complete with food counters serving gourmet menus.
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2.5">
                <div className="w-2 h-2 rounded-full bg-[#CF3147]" />
                <span className="text-xs font-semibold text-white/90 font-sans">Full Event Catering</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-2 h-2 rounded-full bg-[#CF3147]" />
                <span className="text-xs font-semibold text-white/90 font-sans">Audio-Visual Systems</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-2 h-2 rounded-full bg-[#CF3147]" />
                <span className="text-xs font-semibold text-white/90 font-sans">Bridal Dressing Rooms</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-2 h-2 rounded-full bg-[#CF3147]" />
                <span className="text-xs font-semibold text-white/90 font-sans">Ample Guest Parking</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={handleInquireEvents}
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#CF3147] hover:bg-[#591F28] text-white rounded-full text-xs font-semibold tracking-widest uppercase border border-white/10 shadow-lg transition-all duration-300"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Inquire Event Package</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
