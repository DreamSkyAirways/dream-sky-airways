"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Headphones, ShieldCheck, Tag, Compass, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length && window.innerWidth >= 768) {
        validCards.forEach((card, index) => {
          const fromX = index % 2 === 0 ? -50 : 50;
          gsap.fromTo(
            card,
            { opacity: 0, x: fromX },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white text-black font-sans py-8 sm:py-12 px-4 sm:px-8 lg:px-16 border-t border-gray-200 select-none">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Simple Compact Title */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black uppercase tracking-tight">
            WHY CHOOSE US
          </h2>
        </div>

        {/* 5 Simple Compact Cards with Blue Text Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="why-card group bg-neutral-50 border border-gray-200 p-5 rounded-2xl space-y-3 hover:border-blue-600 hover:bg-blue-50/40 transition duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-black text-white group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    {item.code}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-black group-hover:text-blue-600 uppercase tracking-tight transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-blue-900 leading-relaxed font-medium transition-colors duration-300">
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
