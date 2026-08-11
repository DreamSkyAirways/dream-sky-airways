"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface SlideItem {
  id: string;
  tagline: string;
  title: string;
  country: string;
  quote: string;
  image: string;
  slug: string;
}

const sliderData: SlideItem[] = [
  {
    id: "rishikesh",
    tagline: "ADVENTURE & YOGA CAPITAL 2026",
    title: "RISHIKESH",
    country: "UTTARAKHAND, INDIA",
    quote:
      "SACRED GANGA RIVERS, THRILLING WHITE-WATER RAFTING, MEDITATION RETREATS, EVENING TRIVENI AARTI & SCENIC HIMALAYAN FOOTHILLS.",
    image: "/Packages/Rishikesh/Rishikesh3.webp",
    slug: "rishikesh-travel-guide-rafting-yoga",
  },
  {
    id: "goa",
    tagline: "BEACH & SUNSET HAVEN 2026",
    title: "GOA",
    country: "GOA, INDIA",
    quote:
      "PALM-FRINGED BEACHES, GOLDEN SUNSETS ON THE ARABIAN SEA, COLONIAL CHURCHES, VIBRANT NIGHTMARKETS & COASTAL SEAFOOD PARADISE.",
    image: "/Packages/domestic/goa_4_sunset_beach.webp",
    slug: "goa-tour-package-guide",
  },
  {
    id: "manali",
    tagline: "HIMACHAL SNOW PARADISE 2026",
    title: "MANALI",
    country: "HIMACHAL PRADESH, INDIA",
    quote:
      "SNOW-COVERED PEAKS OF SOLANG VALLEY, WHISPERING BEAS RIVER PINES, ROMANTIC HONEYMOON CABINS & ADVENTURE PARAGLIDING ACROSS THE BLUE SKIES.",
    image: "/Packages/honeymoon/manali_2_solang_valley.webp",
    slug: "manali-tour-package-from-delhi",
  },
  {
    id: "kashmir",
    tagline: "PARADISE ON EARTH 2026",
    title: "KASHMIR",
    country: "JAMMU & KASHMIR, INDIA",
    quote:
      "SERENE DAL LAKE HOUSEBOATS, SHALIMAR BAGH MUGHAL GARDENS, SNOWY GULMARG SLOPES & BREATHTAKING MOUNTAIN VALLEYS.",
    image: "/Packages/honeymoon/manali_1_beas_river.webp",
    slug: "best-honeymoon-destinations-india",
  },
  {
    id: "jaipur",
    tagline: "ROYAL RAJASTHAN HERITAGE 2026",
    title: "JAIPUR",
    country: "RAJASTHAN, INDIA",
    quote:
      "MAJESTIC HAWA MAHAL PALACES, FORTRESSES OF AMBER, COLORFUL PINK CITY BAZAARS & TIMELESS ROYAL CULTURAL HERITAGE.",
    image: "/Packages/domestic/jaipur_1_hawa_mahal.webp",
    slug: "cheap-holiday-packages-india-2026",
  },
];

export default function BlogFeaturedSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSlide = sliderData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <section className="relative w-full min-h-[650px] lg:min-h-[750px] py-12 lg:py-16 bg-black text-white font-sans select-none overflow-hidden flex flex-col justify-between">
      {/* Background Image with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Top Bar Navigation */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Featured Indian Destination
          </span>
        </div>

        {/* Destination Pills */}
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/20 overflow-x-auto scrollbar-none">
          {sliderData.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                activeIndex === idx
                  ? "bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105"
                  : "text-white/80 hover:text-white hover:bg-white/15"
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area - Clean, Spacious & Zero Overlaps */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Tagline */}
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-amber-300 uppercase">
                {currentSlide.tagline}
              </p>

              {/* Huge Bold Title with Generous Breathing Space */}
              <div className="my-6 sm:my-8 md:my-10">
                <h1
                  className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-wider text-white uppercase leading-none drop-shadow-2xl"
                  style={{ fontFamily: "'Anton', 'Bebas Neue', 'Impact', sans-serif" }}
                >
                  {currentSlide.title}
                </h1>
              </div>

              {/* Subtitle Quote Box with Gap */}
              <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed font-sans max-w-xl bg-black/50 backdrop-blur-md p-5 sm:p-6 rounded-2xl border-l-4 border-amber-400 my-6">
                &quot;{currentSlide.quote}&quot;
              </p>

              {/* Country Badge & Explore Button */}
              <div className="flex items-center gap-4 pt-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-400 text-black text-xs font-black uppercase tracking-widest rounded-xl shadow-lg">
                  <MapPin className="w-4 h-4 fill-black" />
                  {currentSlide.country}
                </span>

                <Link
                  href={`/blog/${currentSlide.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-extrabold uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-2xl hover:scale-105 group"
                >
                  <span>Explore Travel Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Slider Controls & Counter */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <div className="text-xs font-mono font-bold text-gray-400">
          <span className="text-amber-400 text-base font-extrabold">0{activeIndex + 1}</span> / 0{sliderData.length}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-all"
            aria-label="Previous Destination"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black transition-all"
            aria-label="Next Destination"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
