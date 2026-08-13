"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export default function AirwaysMarquee() {
  const textItem = "Dream Sky Airways";
  const items = Array(12).fill(textItem);

  return (
    <div className="relative w-full overflow-hidden bg-neutral-950 text-white py-4 sm:py-5 my-6 sm:my-10 shadow-lg border-y border-white/10 select-none z-20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 opacity-50 pointer-events-none" />

      {/* Marquee Track moving Left to Right */}
      <motion.div
        className="flex items-center whitespace-nowrap gap-8"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="text-2xl sm:text-4xl font-black tracking-widest uppercase text-red-500 drop-shadow-sm">
              {text}
            </span>
            <span className="text-red-500 font-bold text-xl sm:text-2xl">✦</span>
            <Plane className="w-5 h-5 sm:w-7 sm:h-7 text-red-500 -rotate-45 shrink-0" />
            <span className="text-red-500 font-bold text-xl sm:text-2xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
