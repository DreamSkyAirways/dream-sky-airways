"use client";

import React from "react";
import { Plane, Headphones, ShieldCheck, Clock } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-24 bg-white text-gray-900 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto select-none">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Header & Description */}
          <div className="lg:col-span-5">
            {/* Main Heading */}
            <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-3 sm:mb-6">
              Why People <span className="text-red-500 font-serif font-normal">Choose Us?</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-gray-500 leading-relaxed text-xs sm:text-base mb-6 sm:mb-8 max-w-lg">
              Experience seamless travel bookings, handpicked hotel staycations, round-the-clock customer support, and guaranteed best prices for your journeys across India and worldwide.
            </p>
          </div>

          {/* Right Column: 2-Column Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-11 gap-6 sm:gap-8 items-center pt-2 lg:pt-0">
            
            {/* Grid Column 1 */}
            <div className="md:col-span-5 space-y-5 sm:space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-red-400 text-red-500 bg-red-50/60 flex items-center justify-center shrink-0">
                  <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-xl mb-0.5 sm:mb-1">
                    24/7 Dedicated Support
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed">
                    Our travel experts are available round the clock to assist you anytime.
                  </p>
                </div>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full h-[1px] bg-gray-200" />

              {/* Feature 2 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-red-400 text-red-500 bg-red-50/60 flex items-center justify-center shrink-0">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-xl mb-0.5 sm:mb-1">
                    Curated Travel Packages
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed">
                    Handpicked destinations and tailored tour packages for every budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Vertical Divider Line */}
            <div className="hidden md:flex md:col-span-1 justify-center self-stretch">
              <div className="w-[1px] bg-gray-200 h-full" />
            </div>

            {/* Grid Column 2 */}
            <div className="md:col-span-5 space-y-5 sm:space-y-8">
              {/* Feature 3 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-red-400 text-red-500 bg-red-50/60 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-xl mb-0.5 sm:mb-1">
                    Best Price Guarantee
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed">
                    Unbeatable prices on flights and hotels with complete transparency.
                  </p>
                </div>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full h-[1px] bg-gray-200" />

              {/* Feature 4 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-red-400 text-red-500 bg-red-50/60 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-xl mb-0.5 sm:mb-1">
                    Instant Booking
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed">
                    Fast and secure booking process with instant ticket confirmation.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}