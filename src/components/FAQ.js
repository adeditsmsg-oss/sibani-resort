"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "What are the standard check-in and check-out timings?",
    answer: "Our standard check-in time is 12:00 PM and check-out is 11:00 AM. Early check-ins or late check-outs can be requested in advance and are subject to room availability.",
  },
  {
    question: "Where is the resort located, and how far is it from the station?",
    answer: "Sibani Resort is conveniently situated at Chowrangee More, Kharagpur. It is just a 10-minute drive (approx. 4 km) from the Kharagpur Railway Station and the main bus stand, making it extremely accessible for transit travelers.",
  },
  {
    question: "Are couples allowed to check-in, and what IDs are required?",
    answer: "Yes, we welcome couples under standard hotel guidelines. All guests checking in must present a valid government-issued photo ID (Aadhaar Card, Passport, or Voter ID). PAN cards are not accepted as valid address proof.",
  },
  {
    question: "Does the resort have power backup during load shedding?",
    answer: "Yes, we have 100% generator power backup. This ensures that the air conditioning, hot water geysers, Wi-Fi router, and lighting systems run seamlessly during any local power outages.",
  },
  {
    question: "What kind of food is served at the restaurant?",
    answer: "Our multi-cuisine restaurant is highly praised for Mughlai specialties (tandoori chicken, kebabs), authentic Indian-Chinese dishes, and traditional Bengali comfort thalis (including fresh fish and mutton curry). Room service is also available.",
  },
  {
    question: "How do I book the banquet hall or lawn for a marriage or conference?",
    answer: "You can book our Heritage Banquet Hall (50-200 guests) or outdoor lawns by contacting us directly at +91 99328 26480. We offer customizable event decoration, seating setups, and culinary catering packages.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#262626] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
            Queries Resolved
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#CF3147] mx-auto" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#333333] border border-white/5 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-[#CF3147] shrink-0" />
                    <span className="font-serif text-sm sm:text-base font-semibold text-white/90">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#CF3147]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white/40" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-white/70 font-sans font-light leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
