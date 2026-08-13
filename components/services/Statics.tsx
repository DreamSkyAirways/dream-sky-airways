"use client";

import React, { useEffect, useState } from "react";
import { Users, MapPin, Ticket, Star } from "lucide-react";

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
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    travelers: 50,
    destinations: 120,
    bookings: 25,
    rating: 4.8,
  });

  return (
    <section className="w-full bg-white text-black font-sans py-8 sm:py-12 px-4 sm:px-8 lg:px-16 border-t border-gray-100 select-none max-w-[1700px] mx-auto">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            <span className="text-red-600">OUR</span> <span className="text-black">IMPACT IN NUMBERS</span>
          </h2>
        </div>

        {/* 4 Big Statics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((item) => {
            const Icon = item.icon;
            const currentVal = counts[item.id] ?? 0;
            const formattedVal =
              item.decimals > 0
                ? currentVal.toFixed(item.decimals)
                : currentVal.toString();

            return (
              <div
                key={item.id}
                className="group bg-neutral-50 border border-gray-200 p-6 sm:p-8 rounded-3xl space-y-4 hover:border-red-600 hover:bg-red-50/30 transition duration-300 cursor-pointer text-center flex flex-col items-center justify-between"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-black text-white group-hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Big Counter */}
                <div className="space-y-1 my-auto">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black group-hover:text-red-600 tracking-tight transition-colors duration-300 font-mono">
                    {formattedVal}
                    <span className="text-2xl sm:text-3xl lg:text-4xl ml-0.5 text-black group-hover:text-red-600 transition-colors duration-300">
                      {item.suffix}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-black group-hover:text-gray-900 uppercase tracking-wider transition-colors duration-300">
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
