"use client";
import React, {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Compass, Target, Sparkles} from "lucide-react";

const COCKPIT_IMG = "/images/domestic_international.png";

const values = [
  {
    icon: Compass,
    title: "Our Mission",
    text: "At Dream Sky Airways, our mission is to provide reliable, affordable, and personalized travel solutions that make every journey comfortable, memorable, and stress-free.",
  },
  {
    icon: Target,
    title: "Our Vision",
    text: "To become India's most trusted travel and aviation services company by delivering exceptional travel experiences, innovative solutions",
  },
  {
    icon: Sparkles,
    title: "Our Promise",
    text: "We promise to put our customers first by offering transparent services, trusted travel support, and seamless travel experiences.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  return (
    <section
      id="about"
      className="relative py-14 lg:py-12 bg-[#050B1A] overflow-hidden"
    >
      {/* Instrument line */}
      <div className="absolute top-0 left-0 right-0 instrument-line" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{opacity: 0, y: 40}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.7}}
          className="mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.3em] text-[#0055FF] uppercase"></span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Navigating Futures
            <br />
            <span className="text-gradient-blue">Since 2018</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with cockpit display */}
          <motion.div
            initial={{opacity: 0, x: -40}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.8, delay: 0.2}}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden relative group">
              <img
                src={COCKPIT_IMG}
                alt="Modern cockpit flight display with glowing blue telemetry"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A]/80 to-transparent" />

              {/* Chromatic aberration hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen">
                <div className="absolute inset-0 bg-[#0055FF]/5 translate-x-0.5" />
                <div className="absolute inset-0 bg-[#00D1FF]/5 -translate-x-0.5" />
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{opacity: 0, scale: 0.8}}
              animate={isInView ? {opacity: 1, scale: 1} : {}}
              transition={{delay: 0.8, duration: 0.5}}
              className="absolute -bottom-6 -right-2 sm:right-4 glass-panel-strong rounded-xl px-5 py-4 glow-blue"
            >
              <span className="font-mono text-[10px] text-[#00D1FF]/60 tracking-wider block">
                YEARS OF EXCELLENCE
              </span>
              <span className="text-3xl font-heading font-bold text-white">
                7+
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{opacity: 0, x: 40}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.8, delay: 0.3}}
          >
            <p className="text-[#E2E8F0]/70 font-body text-base sm:text-lg leading-relaxed mb-8">
              Welcome to Dream Sky Airways Pvt. Ltd., your trusted partner in
              travel, tourism, and aviation services. We are dedicated to
              creating seamless travel experiences and helping travelers explore
              the world with confidence and comfort. From domestic vacations and
              international tours to flight bookings and travel assistance, our
              mission is to make every journey memorable, affordable, and
              hassle-free. With a commitment to excellence, personalized
              service, and customer satisfaction, Dream Sky Airways has grown
              into a reliable name in the travel industry. Our experienced team
              works tirelessly to provide customized travel solutions that meet
              the unique needs of families, solo travelers, corporate clients,
              and aviation enthusiasts.
            </p>
            <p className="text-[#E2E8F0]/50 font-body text-base leading-relaxed mb-10"></p>

            <div className="space-y-6 ">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{opacity: 0, y: 20}}
                  animate={isInView ? {opacity: 1, y: 0} : {}}
                  transition={{delay: 0.5 + i * 0.15}}
                  className="glass-panel rounded-xl p-5 hover:bg-white/[0.07] transition-colors duration-300 border border-blue-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0055FF]/10 border border-[#0055FF]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#0055FF]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#E2E8F0]/50 font-body leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
