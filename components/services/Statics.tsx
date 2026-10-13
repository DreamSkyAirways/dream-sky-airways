"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  MapPin,
  Ticket,
  Star,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  decimals: number;
  label: string;
  description: string;
  icon: React.ElementType;
}

const STATS_DATA: StatItem[] = [
  {
    id: "travelers",
    targetNumber: 50,
    suffix: "K+",
    decimals: 0,
    label: "Happy Travelers",
    description: "Memorable journeys start here",
    icon: Users,
  },
  {
    id: "destinations",
    targetNumber: 120,
    suffix: "+",
    decimals: 0,
    label: "Destinations",
    description: "Places waiting to be explored",
    icon: MapPin,
  },
  {
    id: "bookings",
    targetNumber: 25,
    suffix: "K+",
    decimals: 0,
    label: "Bookings",
    description: "Trips planned with care",
    icon: Ticket,
  },
  {
    id: "rating",
    targetNumber: 4.8,
    suffix: "/5",
    decimals: 1,
    label: "Customer Rating",
    description: "Experiences that matter",
    icon: Star,
  },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Number((target * easedProgress).toFixed(2)));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [target, active, duration]);

  return count;
}

function StatCard({ item }: { item: StatItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const count = useCountUp(item.targetNumber, isVisible);
  const Icon = item.icon;

  const formattedValue =
    item.decimals > 0
      ? count.toFixed(item.decimals)
      : Math.floor(count).toString();

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl border border-[#e3ece8] bg-white p-6 shadow-[0_8px_30px_rgba(23,59,53,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#087e70]/40 hover:shadow-[0_20px_45px_rgba(23,59,53,0.10)] sm:p-8"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#087e70]/[0.04] transition-transform duration-500 group-hover:scale-150" />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f4ef] text-[#087e70] transition-all duration-300 group-hover:bg-[#087e70] group-hover:text-white">
          <Icon size={27} strokeWidth={1.8} />
        </div>

        <div className="mb-2 flex items-baseline justify-center gap-0.5">
          <span className="text-4xl font-extrabold tracking-tight text-[#173b35] transition-colors duration-300 group-hover:text-[#087e70] sm:text-5xl lg:text-6xl">
            {formattedValue}
          </span>
          <span className="text-xl font-bold text-[#e88b42] sm:text-2xl">
            {item.suffix}
          </span>
        </div>

        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#173b35] sm:text-base">
          {item.label}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {item.description}
        </p>

        <div className="mt-5 h-1 w-10 rounded-full bg-[#e88b42] transition-all duration-300 group-hover:w-20" />
      </div>
    </div>
  );
}

export default function Statics() {
  return (
    <section className="relative overflow-hidden border-y border-[#e6eee9] bg-[#f8faf7] px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#087e70]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#e88b42]/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#087e70]/15 bg-white px-4 py-2 text-sm font-semibold text-[#087e70] shadow-sm">
            <Sparkles size={16} />
            <span>Our Journey Together</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#173b35] sm:text-4xl lg:text-5xl">
            Every Journey Has a Story.
            <span className="mt-2 block text-[#087e70]">
              Here&apos;s Ours.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            From discovering new destinations to planning unforgettable
            holidays, we aim to make every travel experience meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STATS_DATA.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f4ef] text-[#087e70]">
            <TrendingUp size={20} />
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-600">
            Your next adventure could be the beginning of another wonderful
            travel story.
          </p>
        </div>
      </div>
    </section>
  );
}