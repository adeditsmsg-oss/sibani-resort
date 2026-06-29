"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "The Legacy", href: "#about" },
  { label: "Cottages", href: "#cottages" },
  { label: "Experiences", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 px-4 md:px-8 mx-auto mt-0 max-w-full bg-[#262626]/90 backdrop-blur-md border-b border-[#CF3147]/10 shadow-lg text-white"
            : "py-6 px-6 md:px-12 bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#F2EBE7] group-hover:text-[#CF3147] transition-colors duration-300">
              SIBANI
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.35em] text-[#CF3147] font-sans font-light uppercase">
              Heritage &amp; Nature Resort
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-xs xl:text-sm tracking-widest uppercase text-[#F2EBE7]/85 hover:text-[#CF3147] transition-colors duration-300 font-sans font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:+919932826480"
              className="flex items-center space-x-2 text-xs tracking-widest uppercase border border-[#F2EBE7]/20 hover:border-[#CF3147] hover:text-[#CF3147] px-4 py-2 rounded-full transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="flex items-center space-x-2 text-xs tracking-widest uppercase bg-[#CF3147] hover:bg-[#591F28] text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 border border-white/10 shadow-md hover:shadow-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Room</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#F2EBE7] hover:text-[#CF3147] p-1.5 focus:outline-none transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#262626] flex flex-col justify-between pt-28 pb-12 px-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-center my-auto">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="font-serif text-2xl font-bold tracking-wider text-[#F2EBE7]/90 hover:text-[#CF3147] transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col sm:hidden space-y-4 items-center">
              <a
                href="tel:+919932826480"
                className="w-full max-w-xs flex items-center justify-center space-x-2 text-sm tracking-widest uppercase border border-[#F2EBE7]/30 text-[#F2EBE7] py-3 rounded-full"
              >
                <Phone className="w-4 h-4" />
                <span>+91 99328 26480</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full max-w-xs flex items-center justify-center space-x-2 text-sm tracking-widest uppercase bg-[#CF3147] text-white py-3.5 rounded-full font-semibold border border-[#CF3147]/30"
              >
                <span>Reserve Room</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
