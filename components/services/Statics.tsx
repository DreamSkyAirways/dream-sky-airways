"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, MapPin, Ticket, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  decimals: number;
  label: string;
  icon: any;
}

const STATS_DATA: StatItem[] = [
  {
    id: "travelers",
    targetNumber: 50,
    suffix: "K+",
    decimals: 0,
    label: "Travelers",
    icon: Users,
  },
  {
    id: "destinations",
    targetNumber: 120,
    suffix: "+",
    decimals: 0,
    label: "Destinations",
    icon: MapPin,
  },
  {
    id: "bookings",
    targetNumber: 25,
    suffix: "K+",
    decimals: 0,
    label: "Bookings",
    icon: Ticket,
  },
  {
    id: "rating",
    targetNumber: 4.8,
    suffix: "/5",
    decimals: 1,
    label: "Rating",
    icon: Star,
  },
];

export default function Statics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    travelers: 0,
    destinations: 0,
    bookings: 0,
    rating: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountersFromZero();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
    }, sectionRef);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      ctx.revert();
    };
  }, []);

  const runCountersFromZero = () => {
    setCounts({
      travelers: 0,
      destinations: 0,
      bookings: 0,
      rating: 0,
    });

    const duration = 2200;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        travelers: parseFloat((50 * easeOut).toFixed(0)),
        destinations: parseFloat((120 * easeOut).toFixed(0)),
        bookings: parseFloat((25 * easeOut).toFixed(0)),
        rating: parseFloat((4.8 * easeOut).toFixed(1)),
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white text-black font-sans py-8 sm:py-12 px-4 sm:px-8 lg:px-16 border-t border-gray-200 select-none">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black uppercase tracking-tight">
            OUR IMPACT IN NUMBERS
          </h2>
        </div>

        {/* 4 Big Running Statics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((item, idx) => {
            const Icon = item.icon;
            const currentVal = counts[item.id] ?? 0;
            const formattedVal =
              item.decimals > 0
                ? currentVal.toFixed(item.decimals)
                : currentVal.toString();

            return (
              <div
                key={item.id}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="group bg-neutral-50 border border-gray-200 p-6 sm:p-8 rounded-3xl space-y-4 hover:border-blue-600 hover:bg-blue-50/40 transition duration-300 cursor-pointer text-center flex flex-col items-center justify-between"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-black text-white group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Big Running Counter */}
                <div className="space-y-1 my-auto">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black group-hover:text-blue-600 tracking-tight transition-colors duration-300 font-mono">
                    {formattedVal}
                    <span className="text-2xl sm:text-3xl lg:text-4xl ml-0.5 text-black group-hover:text-blue-600 transition-colors duration-300">
                      {item.suffix}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-black group-hover:text-blue-900 uppercase tracking-wider transition-colors duration-300">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
