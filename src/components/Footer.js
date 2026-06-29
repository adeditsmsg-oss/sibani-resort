"use client";

import React from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#262626] text-white/95 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand details */}
        <div className="space-y-6">
          <a href="#" onClick={handleScrollToTop} className="flex flex-col group">
            <span className="font-serif text-3xl font-bold tracking-[0.2em] text-white group-hover:text-[#CF3147] transition-colors duration-300">
              SIBANI
            </span>
            <span className="text-[10px] tracking-[0.35em] text-[#CF3147] font-sans font-light uppercase">
              Heritage &amp; Nature Resort
            </span>
          </a>
          <p className="text-xs text-white/60 font-sans font-light leading-relaxed">
            Nestled near Chowrangee More in Kharagpur, Sibani Resort blends traditional West Bengal terracotta aesthetics with serene botanical pathways to offer a premium, restorative retreat.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#CF3147] font-sans">
            Quick Navigation
          </h4>
          <ul className="space-y-3 text-xs font-sans text-white/70">
            <li>
              <a href="#about" className="hover:text-white transition-colors">The Legacy</a>
            </li>
            <li>
              <a href="#cottages" className="hover:text-white transition-colors">Cottage Suites</a>
            </li>
            <li>
              <a href="#experiences" className="hover:text-white transition-colors">Experiences</a>
            </li>
            <li>
              <a href="#dining" className="hover:text-white transition-colors">Gastronomy</a>
            </li>
            <li>
              <a href="#events" className="hover:text-white transition-colors">Banquets &amp; Events</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Actions */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#CF3147] font-sans">
            Connect With Us
          </h4>
          <ul className="space-y-3.5 text-xs font-sans text-white/70">
            <li className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#CF3147]" />
              <span>+91 99328 26480 / +91 80010 85111</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#CF3147]" />
              <span>info@sibaniresort.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#CF3147]" />
              <span>Chowrangee More, Kharagpur</span>
            </li>
          </ul>
        </div>

        {/* Column 4: WhatsApp Reservation info */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#CF3147] font-sans">
            Booking &amp; Support
          </h4>
          <p className="text-xs text-white/60 leading-relaxed font-sans font-light">
            Plan your stay instantly. Click below to begin a secure booking session directly with our management desk on WhatsApp.
          </p>
          <a
            href="https://wa.me/919932826480?text=Hello!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#CF3147] hover:bg-[#591F28] text-white px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-300 border border-white/10"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#262626]" />
            <span>Chat Reservations</span>
          </a>
        </div>

      </div>

      {/* Copyright border */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/40 font-sans">
        <p>© {new Date().getFullYear()} Sibani Resort. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">
          Designed by Antigravity | Premium Hospitality Agency Vibe
        </p>
      </div>
    </footer>
  );
}
