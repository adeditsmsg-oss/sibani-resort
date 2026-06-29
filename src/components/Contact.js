"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    cottage: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = `*New Booking Inquiry (Sibani Resort Website)*\n\n*Name:* ${form.name}\n*Contact (Email/Phone):* ${form.contact}\n*Preferred Stay:* ${form.cottage}\n\n*Message details:*\n${form.message}`;
    const encoded = encodeURIComponent(whatsappMsg);
    window.open(`https://wa.me/919932826480?text=${encoded}`, "_blank");
    setSubmitted(true);
    setForm({ name: "", contact: "", cottage: "General Inquiry", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#F2EBE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#CF3147] font-semibold font-sans block">
            Reservations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#262626]">
            Plan Your Heritage Stay
          </h2>
          <div className="w-16 h-0.5 bg-[#591F28]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-5 bg-[#262626] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between shadow-xl">
            <div className="space-y-8">
              <h3 className="font-serif text-xl md:text-2xl font-bold tracking-wide text-white">
                Contact Details
              </h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#CF3147] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">Resort Address</h4>
                    <p className="text-sm text-white/90 mt-1 leading-relaxed">
                      Chowrangee More, Kharagpur, <br />
                      West Bengal, India, Pin - 721305.
                    </p>
                  </div>
                </div>

                {/* Numbers */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#CF3147] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">Phone Numbers</h4>
                    <p className="text-sm text-white/90 mt-1 space-y-1">
                      <a href="tel:+919932826480" className="block hover:text-[#CF3147] transition-colors">+91 99328 26480</a>
                      <a href="tel:+918001085111" className="block hover:text-[#CF3147] transition-colors">+91 80010 85111</a>
                      <a href="tel:+917326079861" className="block hover:text-[#CF3147] transition-colors">+91 73260 79861</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#CF3147] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">Email Address</h4>
                    <p className="text-sm text-white/90 mt-1">
                      <a href="mailto:info@sibaniresort.com" className="hover:text-[#CF3147] transition-colors">info@sibaniresort.com</a>
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-[#CF3147] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">Hours</h4>
                    <p className="text-sm text-white/90 mt-1">
                      Front Desk: 24/7 Service <br />
                      Restaurant: 11:00 AM - 10:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919932826480"
                className="flex-1 py-3 bg-[#CF3147] hover:bg-[#591F28] text-white text-center text-xs font-semibold tracking-widest uppercase rounded-full transition-colors duration-300"
              >
                Call Front Desk
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#262626]/5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-xl md:text-2xl font-bold tracking-wide text-[#262626]">
                Reservation Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#262626]/60 font-semibold mb-1 block">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F2EBE7]/50 border border-[#262626]/10 rounded-xl px-4 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#CF3147] transition-colors"
                    placeholder="e.g. Priyankar Bose"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#262626]/60 font-semibold mb-1 block">Phone / Email</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F2EBE7]/50 border border-[#262626]/10 rounded-xl px-4 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#CF3147] transition-colors"
                    placeholder="e.g. +91 98300 12345 or bose@gmail.com"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#262626]/60 font-semibold mb-1 block">Stay Type</label>
                  <select
                    className="w-full bg-[#F2EBE7]/50 border border-[#262626]/10 rounded-xl px-4 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#CF3147] transition-colors cursor-pointer"
                    value={form.cottage}
                    onChange={(e) => setForm({ ...form, cottage: e.target.value })}
                  >
                    <option value="Royal Bengal Villa">Royal Bengal Villa (Premium)</option>
                    <option value="Lalmati Heritage Cottage">Lalmati Heritage Cottage</option>
                    <option value="Deluxe Garden Suite">Deluxe Garden Suite</option>
                    <option value="Standard Garden Room">Standard Garden Room</option>
                    <option value="Banquet Hall Event">Banquet Hall / Lawn Booking</option>
                    <option value="General Inquiry">General Reservation Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#262626]/60 font-semibold mb-1 block">Inquiry / Message Details</label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows="4"
                    className="w-full bg-[#F2EBE7]/50 border border-[#262626]/10 rounded-xl px-4 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#CF3147] transition-colors resize-none"
                    placeholder="Tell us about your check-in dates, number of guests, or event plans..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#CF3147] hover:bg-[#591F28] text-white rounded-full text-xs font-semibold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center space-x-2 border border-white/10"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
              </form>

              {submitted && (
                <p className="text-[11px] text-emerald-700 font-medium text-center">
                  Thank you! Your details have been formatted. We have launched WhatsApp to send your request.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg border border-[#262626]/5 h-[350px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0838186105876!2d87.3414062!3d22.3710237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4187063d8033%3A0xe54e6fa7f016f5c8!2sSibani+Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location of Sibani Resort"
          />
        </div>

      </div>
    </section>
  );
}
