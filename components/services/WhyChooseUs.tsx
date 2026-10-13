"use client";

import React from "react";
import {
  Headphones,
  ShieldCheck,
  Tag,
  Compass,
  Award,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const POINTS = [
  {
    code: "01",
    title: "Personalised Travel Planning",
    desc: "Get help planning a trip around your destination, budget, travel dates and preferences.",
    icon: Headphones,
  },
  {
    code: "02",
    title: "Transparent Pricing",
    desc: "Review available options and pricing details before confirming your travel arrangements.",
    icon: Tag,
  },
  {
    code: "03",
    title: "Trips Made for You",
    desc: "Explore holiday itineraries designed around your interests, schedule and travel style.",
    icon: Compass,
  },
  {
    code: "04",
    title: "Travel Guidance & Support",
    desc: "Get guidance with travel documentation, visa requirements and booking-related queries.",
    icon: ShieldCheck,
  },
  {
    code: "05",
    title: "Convenient Travel Options",
    desc: "Explore suitable flights, hotels, cab transfers and holiday experiences for your trip.",
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[#e4ece7] bg-[#f8faf7] px-4 py-16 font-sans text-[#173b35] sm:px-8 sm:py-20 lg:px-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#087e70]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#e88b42]/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-7xl space-y-10 sm:space-y-12">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#087e70]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#087e70] shadow-sm sm:text-sm">
            <Sparkles size={16} />
            The Dream Sky Difference
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Why Travel With{" "}
            <span className="text-[#087e70]">Dream Sky Airways?</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From choosing your destination to organising the details, we help
            make planning your next holiday simpler and more convenient.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <article
                key={item.code}
                className={`group relative overflow-hidden rounded-3xl border border-[#e1ebe5] bg-white p-6 shadow-[0_8px_30px_rgba(23,59,53,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#087e70]/40 hover:shadow-[0_18px_40px_rgba(23,59,53,0.09)] sm:p-7 ${
                  idx === 3 ? "lg:col-start-1" : ""
                }`}
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#087e70] transition-all duration-500 group-hover:w-full" />

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f4ef] text-[#087e70] transition-all duration-300 group-hover:bg-[#087e70] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold tracking-wider text-gray-400 transition-colors group-hover:text-[#087e70]">
                      {item.code}
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#e88b42]"
                    />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-bold leading-snug text-[#173b35] transition-colors duration-300 group-hover:text-[#087e70] sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {item.desc}
                </p>

                <div className="mt-6 h-px w-full bg-[#edf2ee]" />

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087e70]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e88b42]" />
                  Your Journey, Your Way
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#173b35] p-6 text-center text-white sm:flex-row sm:px-8 sm:py-7 sm:text-left">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f2b47e]">
              Start Exploring
            </p>
            <h3 className="text-xl font-bold sm:text-2xl">
              Let&apos;s plan your next adventure.
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Tell us where you want to go, and explore the possibilities.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#e88b42] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#d87830] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f2b47e] focus:ring-offset-2 focus:ring-offset-[#173b35]"
          >
            Plan Your Trip
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}