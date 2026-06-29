"use client";

import React, { useState } from "react";
import { Star, Calendar, Users, ArrowDown, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { RESORT_IMAGES } from "../constants/images";

export default function Hero() {
  const [searchParams, setSearchParams] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const msgField = document.getElementById("inquiry-message");
      if (msgField) {
        msgField.value = `I would like to check availability for ${searchParams.guests} from ${searchParams.checkIn || "TBD"} to ${searchParams.checkOut || "TBD"}.`;
      }
    }
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      "Hello Sibani Resort! I want to check availability and book a room. Please assist me."
    );
    window.open(`https://wa.me/919932826480?text=${message}`, "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 animate-kenburns"
          style={{ backgroundImage: `url(${RESORT_IMAGES.heroLandscape})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#262626]/20 to-[#262626]/90 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-grow flex items-center justify-center px-6 md:px-12 pt-28">
        <div className="max-w-4xl text-center text-white space-y-6 md:space-y-8">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-[#CF3147]/20 px-4 py-1.5 rounded-full"
          >
            <div className="flex text-[#CF3147]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#CF3147] text-[#CF3147]" />
              ))}
            </div>
            <span className="text-xs font-sans tracking-widest text-[#F2EBE7] uppercase font-semibold">
              Excellent 4.6 Rated Sanctuary
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide leading-tight text-[#F2EBE7]"
          >
            Experience Tranquil Luxury <br />
            <span className="italic font-light text-[#CF3147]">&amp; Timeless Heritage</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-[#F2EBE7]/80 font-sans font-light tracking-wider leading-relaxed"
          >
            A premium luxury retreat nestled in Kharagpur, West Bengal. Unwind in garden cottages, experience authentic regional dining, and celebrate life's golden moments.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => document.getElementById("cottages")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#CF3147] hover:bg-[#591F28] text-white rounded-full font-sans text-sm font-semibold tracking-widest uppercase border border-white/10 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore Cottages
            </button>
            <button
              onClick={handleWhatsAppBooking}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#262626] hover:bg-black text-white rounded-full font-sans text-sm font-semibold tracking-widest uppercase flex items-center justify-center space-x-2 border border-white/10 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.447 4.908 1.448 5.413 0 9.808-4.4 9.812-9.815.002-2.623-1.01-5.086-2.855-6.936C16.628 3.987 14.15 2.97 11.53 2.97c-5.42 0-9.82 4.4-9.824 9.818-.001 1.849.503 3.543 1.461 5.176l-.962 3.512 3.616-.948zm12.39-7.143c-.27-.136-1.602-.79-1.85-.88-.25-.09-.432-.136-.614.137-.182.273-.705.88-.863 1.062-.16.182-.318.204-.588.068-.27-.136-1.14-.42-2.172-1.34-.803-.717-1.345-1.603-1.503-1.876-.16-.273-.017-.42.119-.556.122-.122.27-.318.406-.477.136-.16.182-.272.272-.455.09-.182.046-.34-.022-.477-.068-.136-.613-1.477-.84-2.023-.223-.538-.47-.464-.614-.472-.14-.01-.3-.01-.462-.01-.162 0-.427.06-.65.305-.224.244-.855.836-.855 2.037 0 1.2.875 2.36 1.0 2.527.125.166 1.72 2.628 4.167 3.684.582.251 1.037.4 1.392.513.585.186 1.117.16 1.538.097.469-.07 1.602-.656 1.83-1.28.228-.624.228-1.16.16-1.28-.07-.12-.25-.205-.52-.34z" />
              </svg>
              <span>WhatsApp Booking</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Availability Widget */}
      <div className="relative z-20 w-full px-6 md:px-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-5xl mx-auto glass-panel p-4 md:p-6 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-[#262626]/10"
        >
          <form onSubmit={handleSearch} className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 flex-grow">
            {/* Check In */}
            <div className="flex flex-col px-4 py-2 border-r border-[#262626]/10 sm:border-r-0 md:border-r">
              <label className="text-[10px] tracking-widest text-[#262626]/60 uppercase font-sans font-semibold mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#CF3147]" />
                Check In
              </label>
              <input
                type="date"
                required
                className="bg-transparent border-0 text-sm font-semibold text-[#262626] focus:outline-none w-full"
                value={searchParams.checkIn}
                onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col px-4 py-2 border-r border-[#262626]/10 sm:border-r-0 md:border-r">
              <label className="text-[10px] tracking-widest text-[#262626]/60 uppercase font-sans font-semibold mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#CF3147]" />
                Check Out
              </label>
              <input
                type="date"
                required
                className="bg-transparent border-0 text-sm font-semibold text-[#262626] focus:outline-none w-full"
                value={searchParams.checkOut}
                onChange={(e) => setSearchParams({ ...searchParams, checkOut: e.target.value })}
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col px-4 py-2">
              <label className="text-[10px] tracking-widest text-[#262626]/60 uppercase font-sans font-semibold mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#CF3147]" />
                Guests &amp; Rooms
              </label>
              <select
                className="bg-transparent border-0 text-sm font-semibold text-[#262626] focus:outline-none w-full cursor-pointer"
                value={searchParams.guests}
                onChange={(e) => setSearchParams({ ...searchParams, guests: e.target.value })}
              >
                <option value="1 Guest">1 Guest, 1 Room</option>
                <option value="2 Guests">2 Guests, 1 Room</option>
                <option value="3 Guests">3 Guests, 1 Room</option>
                <option value="4+ Guests">4+ Guests, 2 Rooms</option>
                <option value="Corporate Group">Corporate / Group Event</option>
              </select>
            </div>
          </form>

          {/* Submit */}
          <button
            onClick={handleSearch}
            className="w-full md:w-auto px-8 py-4 bg-[#CF3147] hover:bg-[#591F28] text-white rounded-xl md:rounded-full text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            <span>Check Availability</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
