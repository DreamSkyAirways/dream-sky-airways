"use client";

import React from "react";
import { Headphones, ShieldCheck, Tag, Compass, Award } from "lucide-react";

const POINTS = [
  {
    code: "01",
    title: "24/7 DEDICATED CONCIERGE",
    desc: "1-on-1 personal travel managers available 24/7 with under 30 seconds call connect.",
    icon: Headphones,
  },
  {
    code: "02",
    title: "BEST PRICE & ZERO HIDDEN FEES",
    desc: "Wholesale direct GDS airfares and 100% transparent billing with zero surge charges.",
    icon: Tag,
  },
  {
    code: "03",
    title: "100% TAILOR-MADE ITINERARIES",
    desc: "Fully customized holiday packages tailored to your schedule with free date amendments.",
    icon: Compass,
  },
  {
    code: "04",
    title: "99.2% VISA APPROVAL ASSURANCE",
    desc: "Certified 1-on-1 document vetting, doorstep biometrics & $500k medical insurance.",
    icon: ShieldCheck,
  },
  {
    code: "05",
    title: "GPS SAFETY & PUNCTUALITY",
    desc: "Live GPS tracked Volvo bus fleet, verified cab chauffeurs & 99.5% on-time guarantee.",
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white text-black font-sans py-6 sm:py-12 px-4 sm:px-8 lg:px-16 border-t border-gray-100 select-none max-w-[1700px] mx-auto">
      <div className="space-y-6 sm:space-y-8">
        {/* Simple Compact Title */}
        <div className="text-center space-y-1 sm:space-y-2">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            <span className="text-red-600">WHY</span> <span className="text-black">CHOOSE US</span>
          </h2>
        </div>

        {/* 5 Simple Compact Cards with Red Accent Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-neutral-50 border border-gray-200 p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-2 sm:space-y-3 hover:border-red-600 hover:bg-red-50/30 transition duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-black text-white group-hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-gray-400 group-hover:text-red-600 transition-colors duration-300">
                    {item.code}
                  </span>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-xs sm:text-base font-extrabold text-black group-hover:text-red-600 uppercase tracking-tight transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 group-hover:text-gray-900 leading-relaxed font-medium transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
