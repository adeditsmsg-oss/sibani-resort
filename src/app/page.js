import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accommodations from "@/components/Accommodations";
import Experiences from "@/components/Experiences";
import Dining from "@/components/Dining";
import Spa from "@/components/Spa";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Reputation from "@/components/Reputation";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import Attractions from "@/components/Attractions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MessageCircle, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Assembly */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Accommodations />
        <Experiences />
        <Dining />
        <Spa />
        <Events />
        <Gallery />
        <Testimonials />
        <Reputation />
        <FAQ />
        <WhyChooseUs />
        <Attractions />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Reservation Bar (Sticky booking & WhatsApp buttons) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden glass-panel border-t border-[#262626]/10 px-4 py-3 flex gap-3 shadow-2xl justify-between">
        <a
          href="https://wa.me/919932826480?text=Hello%20Sibani%20Resort!%20I%20want%20to%20reserve%20a%20cottage."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 bg-emerald-700 text-white rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
          <span>WhatsApp Chat</span>
        </a>
        <a
          href="#contact"
          className="flex-1 py-3.5 bg-[#CF3147] text-white rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Stay</span>
        </a>
      </div>
    </div>
  );
}
