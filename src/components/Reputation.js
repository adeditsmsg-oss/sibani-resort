"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageCircle, AlertCircle, ExternalLink } from "lucide-react";

export default function Reputation() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [privateFeedback, setPrivateFeedback] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/Sibani+Resort/@22.3710237,87.3414062,3a,75y,90t";
  const OWNER_WHATSAPP = "919932826480";

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setSubmitted(false);
  };

  const handlePositiveSubmit = () => {
    window.open(GOOGLE_REVIEW_URL, "_blank");
    setSubmitted(true);
  };

  const handleNegativeSubmit = (e) => {
    e.preventDefault();
    const messageText = `*New Private Feedback Alert (Sibani Resort)*\n\n*Guest Name:* ${privateFeedback.name}\n*Phone:* ${privateFeedback.phone}\n*Rating Given:* ${rating}/5 Stars\n\n*Feedback details:*\n${privateFeedback.message}`;
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setPrivateFeedback({ name: "", phone: "", message: "" });
  };

  return (
    <section id="reviews" className="py-24 bg-[#F2EBE7] relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Card Panel */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[#262626]/10 shadow-2xl text-center space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
              Guest Voice
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#262626]">
              Your Experience Matters
            </h2>
            <div className="w-12 h-0.5 bg-[#CF3147] mx-auto" />
            <p className="text-xs md:text-sm text-[#262626]/70 font-sans max-w-md mx-auto">
              Please rate your recent visit. Your authentic feedback drives our pursuit of hospitality excellence.
            </p>
          </div>

          {/* Star selector */}
          <div className="flex items-center justify-center space-x-3 py-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="focus:outline-none transition-transform active:scale-95 duration-100 p-1"
                aria-label={`Rate ${star} Stars`}
              >
                <Star
                  className={`w-10 h-10 md:w-12 md:h-12 transition-colors duration-200 ${
                    star <= (hoverRating || rating)
                      ? "fill-[#CF3147] text-[#CF3147]"
                      : "text-[#262626]/15 fill-transparent"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Form Routing */}
          <div className="mt-8 text-left max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              {rating === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-xs text-[#262626]/50 font-sans italic"
                >
                  Click on the stars above to select your rating.
                </motion.div>
              )}

              {/* Positive Review (4-5 Stars) */}
              {rating >= 4 && !submitted && (
                <motion.div
                  key="positive"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center space-y-6"
                >
                  <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-xs sm:text-sm font-sans flex items-start space-x-3 border border-emerald-100 text-left">
                    <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>We are thrilled you enjoyed your stay!</strong> As a local hospitality business, your rating on Google means the world to our staff.
                    </span>
                  </div>
                  <button
                    onClick={handlePositiveSubmit}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-[#CF3147] hover:bg-[#591F28] text-white rounded-full text-xs font-semibold tracking-widest uppercase border border-white/10 shadow-lg transition-all duration-300"
                  >
                    <span>Write Google Review</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}

              {/* Negative Review (1-3 Stars) */}
              {rating > 0 && rating <= 3 && !submitted && (
                <motion.div
                  key="negative"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6"
                >
                  <div className="p-4 bg-amber-50 text-amber-900 rounded-2xl text-xs sm:text-sm font-sans flex items-start space-x-3 border border-amber-100">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>We sincerely apologize for not meeting your expectations.</strong> Please tell us what we can improve. Your feedback is sent privately to the owner to take corrective action.
                    </span>
                  </div>

                  <form onSubmit={handleNegativeSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#262626]/60 font-semibold mb-1 block">Your Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-[#F2EBE7] border border-[#262626]/10 rounded-xl px-4 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#CF3147] transition-colors"
                          placeholder="e.g. Rahul Sen"
                          value={privateFeedback.name}
                          onChange={(e) => setPrivateFeedback({ ...privateFeedback, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#262626]/60 font-semibold mb-1 block">Phone Number</label>
                        <input
                          type="tel"
                          required
                          className="w-full bg-[#F2EBE7] border border-[#262626]/10 rounded-xl px-4 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#CF3147] transition-colors"
                          placeholder="e.g. +91 99000 00000"
                          value={privateFeedback.phone}
                          onChange={(e) => setPrivateFeedback({ ...privateFeedback, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#262626]/60 font-semibold mb-1 block">Feedback Details</label>
                      <textarea
                        required
                        rows="3"
                        className="w-full bg-[#F2EBE7] border border-[#262626]/10 rounded-xl px-4 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#CF3147] transition-colors resize-none"
                        placeholder="Please tell us about your experience and how we can make it right..."
                        value={privateFeedback.message}
                        onChange={(e) => setPrivateFeedback({ ...privateFeedback, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#262626] hover:bg-[#591F28] text-white rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 border border-white/5"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#262626]" />
                      <span>Submit Private Feedback via WhatsApp</span>
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Thank You View */}
              {submitted && (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4 py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#CF3147]/10 flex items-center justify-center text-[#CF3147] mx-auto">
                    <Star className="w-8 h-8 fill-[#CF3147] text-[#CF3147]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#262626]">Dhanyabad (Thank You)</h3>
                  <p className="text-xs text-[#262626]/70 font-sans max-w-sm mx-auto leading-relaxed">
                    Your response has been processed. We deeply value your support and connection in building a premium experience.
                  </p>
                  <button
                    onClick={() => { setRating(0); setSubmitted(false); }}
                    className="text-xs text-[#CF3147] font-semibold underline hover:text-[#591F28]"
                  >
                    Submit another response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
