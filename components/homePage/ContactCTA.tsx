"use client";

import Link from "next/link";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
      <div className="container mx-auto">
        <div className="relative bg-gray-50 border border-gray-100 rounded-[36px] p-8 sm:p-14 lg:p-20 shadow-sm max-w-[1700px] mx-auto overflow-hidden">

          {/* Subtle Background Glow Accents */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">

            {/* Top Subtitle Tag */}
            <p className="text-2xl sm:text-2xl font-light tracking-wide text-gray-600 mb-2">
              Ready For Your Next
            </p>

            {/* Character-by-Character Upside Flip Animated Header */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-8 gap-y-1 py-1 mb-4 sm:mb-6">
              {/* DREAM */}
              <div className="flex items-center gap-0.5 sm:gap-2">
                {"DREAM".split("").map((letter, idx) => (
                  <motion.span
                    key={idx}
                    animate={{
                      rotateX: [0, 360],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      delay: idx * 0.08,
                      ease: [0.45, 0.05, 0.25, 0.95],
                    }}
                    whileHover={{
                      rotateX: 180,
                      scale: 1.25,
                      transition: { duration: 0.4 },
                    }}
                    className="text-2xl xs:text-3xl sm:text-6xl font-extrabold text-red-600 tracking-tight inline-block cursor-pointer select-none will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* VACATION? */}
              <div className="flex items-center gap-0.5 sm:gap-2">
                {"VACATION?".split("").map((letter, idx) => (
                  <motion.span
                    key={idx + 5}
                    animate={{
                      rotateX: [0, 360],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      delay: (idx + 5) * 0.08,
                      ease: [0.45, 0.05, 0.25, 0.95],
                    }}
                    whileHover={{
                      rotateX: 180,
                      scale: 1.25,
                      transition: { duration: 0.4 },
                    }}
                    className="text-2xl xs:text-3xl sm:text-6xl font-extrabold text-gray-900 tracking-tight inline-block cursor-pointer select-none will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-500 text-xs sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
              Discover amazing destinations, exclusive holiday packages, affordable flight deals, and 24/7 dedicated support with Dream Sky Airways.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-14">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl sm:rounded-2xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Book Your Trip</span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>

              <a
                href="tel:+917291000329"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-900 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm shadow-sm transition-all hover:bg-gray-100/60 active:scale-95 cursor-pointer"
              >
                <Phone size={16} className="text-red-500 sm:w-[18px] sm:h-[18px]" />
                <span>Call +91 72910 00329</span>
              </a>
            </div>

            {/* Contact Information Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 text-left max-w-3xl mx-auto pt-4 sm:pt-6 border-t border-gray-200/60">

              <div className="bg-white border border-gray-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 flex items-center gap-3 sm:gap-4 shadow-sm hover:border-red-200 transition-colors">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-red-50 text-red-500 border border-red-200 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider block">Call Support 24/7</span>
                  <a href="tel:+917291000329" className="text-gray-900 font-extrabold text-sm sm:text-lg hover:text-red-600 transition-colors">
                    +91 72910 00329
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200/80 rounded-2xl p-3.5 sm:p-6 flex items-center gap-3 sm:gap-4 shadow-sm hover:border-red-200 transition-colors">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-red-50 text-red-500 border border-red-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider block">Email Assistance</span>
                  <a href="mailto:info@dreamskyairways.com" className="text-gray-900 font-extrabold text-xs xs:text-sm sm:text-lg hover:text-red-600 transition-colors">
                    info@dreamskyairways.com
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
