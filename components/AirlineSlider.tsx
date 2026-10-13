"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const airlines = [
  "Logo.png",
  "Air_India.webp",
  "Akasa_Air.webp",
  "Alliance_Air.webp",
  "Cathay_Pacific.webp",
  "Etihad_Airways_logo.webp",
  "Indigo.webp",
  "Qatar_Airways.webp",
  "Singapore_Airlines.webp",
  "SpiceJet.webp",
  "Vistara.webp",
];

export default function AirlineSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-black text-white px-4 sm:px-8 lg:px-12 w-full my-6 select-none overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Centered Title Header - Black Theme */}
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-2xl font-light tracking-wide text-gray-400 mb-1">
            Our Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 py-1">
            {/* TOP */}
            <div className="flex items-center gap-1 sm:gap-2">
              {"TOP".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  animate={isMobile ? {} : { rotateX: [0, 360] }}
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
                  className="text-4xl sm:text-6xl font-extrabold text-red-500 tracking-tight inline-block cursor-pointer select-none will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* AIRLINES */}
            <div className="flex items-center gap-1 sm:gap-2">
              {"AIRLINES".split("").map((letter, idx) => (
                <motion.span
                  key={idx + 3}
                  animate={isMobile ? {} : { rotateX: [0, 360] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    delay: (idx + 3) * 0.08,
                    ease: [0.45, 0.05, 0.25, 0.95],
                  }}
                  whileHover={{
                    rotateX: 180,
                    scale: 1.25,
                    transition: { duration: 0.4 },
                  }}
                  className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight inline-block cursor-pointer select-none will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Logo Slider */}
        <div className="relative overflow-hidden py-4">
          {/* Black Gradient Edge Fades */}
          <div className="absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

          <motion.div
            className="flex items-center gap-6 sm:gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...airlines, ...airlines].map((logo, i) => (
              <div
                key={i}
                className="group flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-full bg-white border border-white/20 p-4 shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Image
                  src={`/airlines/${logo}`}
                  alt={logo}
                  width={75}
                  height={75}
                  className="object-contain max-h-14 w-auto transition-transform group-hover:scale-105"
                  priority={i < 5}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
