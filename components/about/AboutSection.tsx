"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, BadgeCheck, Building, FileCheck, Globe } from "lucide-react";

const certItems = [
  {
    icon: Shield,
    name: "Ministry of Corporate Affairs",
    abbr: "MCA",
    
    status: "VERIFIED",
    year: "2018",
  },
  {
    icon: Award,
    name: "Micro, Small & Medium Enterprise",
    abbr: "MSME",
    
    status: "ACTIVE",
    year: "2018",
  },
  {
    icon: BadgeCheck,
    name: "National Council for Training",
    abbr: "NCT",
    
    status: "CERTIFIED",
    year: "2020",
  },
  
  {
    icon: FileCheck,
    name: "Skill India Registered",
    abbr: "NSDC",
    
    status: "APPROVED",
    year: "2022",
  },
  
];

export default function CertificationLedger() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="relative py-10 lg:py-1 bg-[#050B1A] overflow-hidden text-white">
      <div className="absolute top-0 left-0 right-0 instrument-line" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 "
        >
          <span className="font-mono text-[11px] tracking-[0.3em] text-[#0055FF] uppercase">
            
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Certified <span className="text-gradient-blue">Authority</span>
          </h2>
          <p className="mt-4 text-[#E2E8F0]/50 font-body max-w-lg mx-auto">
            Every credential verified. Every certification authentic.
            Built on a foundation of institutional trust.
          </p>
        </motion.div>

        {/* Certification grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {certItems.map((cert, i) => (
            <motion.div
              key={cert.abbr}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass-panel rounded-xl p-5 group hover:border-[#0055FF]/30 transition-all duration-500  border border-blue-400"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0055FF]/10 border border-[#0055FF]/20 flex items-center justify-center group-hover:glow-blue transition-all duration-500">
                  <cert.icon className="w-5 h-5 text-[#0055FF]" />
                </div>
                <span className="px-2 py-1 rounded font-mono text-[9px] font-semibold bg-[#00D1FF]/10 text-[#00D1FF] border border-[#00D1FF]/20">
                  {cert.status}
                </span>
              </div>

              <h3 className="text-base font-heading font-semibold text-white mb-1">
                {cert.abbr}
              </h3>
              <p className="text-xs text-[#E2E8F0]/40 font-body mb-4">
                {cert.name}
              </p>

              {/* Technical details - revealed on hover */}
              <div className="instrument-line mb-3 opacity-50" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#E2E8F0]/30 truncate max-w-[70%]">
                  {cert.year}
                </span>
                <span className="font-mono text-[10px] text-[#00D1FF]/50">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ticker tape */}
        <div className="mt-16 overflow-hidden py-4">
          <div className="flex whitespace-nowrap" style={{ animation: "ticker 30s linear infinite" }}>
            {[...certItems, ...certItems].map((cert, i) => (
              <span
                key={i}
                className="mx-8 font-mono text-xs text-[#0055FF]/30 tracking-wider uppercase"
              >
                {cert.abbr} • {cert.status}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}