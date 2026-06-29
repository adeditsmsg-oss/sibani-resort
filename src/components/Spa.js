"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smile, Sparkles, Compass } from "lucide-react";
import { RESORT_IMAGES } from "../constants/images";

export default function Spa() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EBE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-[#CF3147]/5 rounded-3xl -m-6 z-0 pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#262626]/5 z-10"
            >
              <img
                src={RESORT_IMAGES.spa}
                alt="Spa Treatment Room"
                className="w-full h-[320px] md:h-[450px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
                Holistic Healing
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#262626]">
                Ananda Spa <br />
                <span className="italic font-light text-[#CF3147]">&amp; Wellness Center</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#591F28] mt-4" />
            </div>

            <div className="space-y-6 text-[#262626]/80 font-sans font-light text-sm md:text-base leading-relaxed">
              <p>
                Step into a sanctuary designed to calm the mind and revitalize the body. The **Ananda Wellness Center** draws from ancient Ayurvedic sciences and modern therapies to bring you a deeply restoring experience.
              </p>
              <p>
                Our curated therapies include traditional oil massage (*Abhyanga*), stress-relieving deep tissue therapy, herbal body scrubs using hand-ground local botanical elements, and warm stone therapy. Let the aroma of fresh jasmine and sandalwood carry your worries away.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4 pt-4 border-t border-[#262626]/10">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-[#CF3147] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#262626]">Ayurvedic &amp; Western Therapies</h4>
                  <p className="text-xs text-[#262626]/75 mt-1">Conducted by highly trained massage therapists using certified organic oils.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Compass className="w-5 h-5 text-[#CF3147] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#262626]">Private Therapy Suites</h4>
                  <p className="text-xs text-[#262626]/75 mt-1">Quiet, ambient spaces with warm showers and comforting acoustics.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
