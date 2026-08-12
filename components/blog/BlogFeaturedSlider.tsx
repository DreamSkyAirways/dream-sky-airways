"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, ChevronLeft, ChevronRight, Calendar, Clock, Compass } from "lucide-react";

interface SlideItem {
  id: string;
  taglineBase: string;
  title: string;
  country: string;
  quote: string;
  image: string;
  slug: string;
  duration: string;
  bestSeason: string;
  nextBatchOffsetDays: number;
}

const sliderData: SlideItem[] = [
  {
    id: "rishikesh",
    taglineBase: "ADVENTURE & YOGA CAPITAL",
    title: "RISHIKESH",
    country: "UTTARAKHAND, INDIA",
    quote:
      "SACRED GANGA RIVERS, THRILLING WHITE-WATER RAFTING, MEDITATION RETREATS, EVENING TRIVENI AARTI & SCENIC HIMALAYAN FOOTHILLS.",
    image: "/Blog/slider/rishikesh.png",
    slug: "rishikesh-travel-guide-rafting-yoga",
    duration: "4 Days / 3 Nights",
    bestSeason: "Sep – May (Peak Rafting)",
    nextBatchOffsetDays: 3,
  },
  {
    id: "goa",
    taglineBase: "BEACH & SUNSET HAVEN",
    title: "GOA",
    country: "GOA, INDIA",
    quote:
      "PALM-FRINGED BEACHES, GOLDEN SUNSETS ON THE ARABIAN SEA, COLONIAL CHURCHES, VIBRANT NIGHTMARKETS & COASTAL SEAFOOD PARADISE.",
    image: "/Blog/slider/goa.png",
    slug: "goa-tour-package-guide",
    duration: "5 Days / 4 Nights",
    bestSeason: "Nov – Feb (Peak Sunset)",
    nextBatchOffsetDays: 5,
  },
  {
    id: "manali",
    taglineBase: "HIMACHAL SNOW PARADISE",
    title: "MANALI",
    country: "HIMACHAL PRADESH, INDIA",
    quote:
      "SNOW-COVERED PEAKS OF SOLANG VALLEY, WHISPERING BEAS RIVER PINES, ROMANTIC HONEYMOON CABINS & ADVENTURE PARAGLIDING ACROSS THE BLUE SKIES.",
    image: "/Blog/slider/manali.png",
    slug: "manali-snow-adventure-solang-valley",
    duration: "6 Days / 5 Nights",
    bestSeason: "Oct – Mar (Snow Season)",
    nextBatchOffsetDays: 4,
  },
  {
    id: "kashmir",
    taglineBase: "PARADISE ON EARTH",
    title: "KASHMIR",
    country: "JAMMU & KASHMIR, INDIA",
    quote:
      "SERENE DAL LAKE HOUSEBOATS, SHALIMAR BAGH MUGHAL GARDENS, SNOWY GULMARG SLOPES & BREATHTAKING MOUNTAIN VALLEYS.",
    image: "/Blog/slider/kashmir.png",
    slug: "kashmir-romantic-paradise-honeymoon-guide",
    duration: "7 Days / 6 Nights",
    bestSeason: "Year-Round Marvel",
    nextBatchOffsetDays: 6,
  },
  {
    id: "jaipur",
    taglineBase: "ROYAL RAJASTHAN HERITAGE",
    title: "JAIPUR",
    country: "RAJASTHAN, INDIA",
    quote:
      "MAJESTIC HAWA MAHAL PALACES, FORTRESSES OF AMBER, COLORFUL PINK CITY BAZAARS & TIMELESS ROYAL CULTURAL HERITAGE.",
    image: "/Blog/slider/jaipur.png",
    slug: "jaipur-pink-city-royal-heritage-guide",
    duration: "4 Days / 3 Nights",
    bestSeason: "Oct – Mar (Royal Festive)",
    nextBatchOffsetDays: 2,
  },
];

export default function BlogFeaturedSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [nextDepartureFormatted, setNextDepartureFormatted] = useState<string>("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);

    // Auto swap images and data every 5 seconds (1 to 5 continuously)
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = sliderData[activeIndex];

  useEffect(() => {
    const date = new Date(Date.now() + currentSlide.nextBatchOffsetDays * 86400000);
    setNextDepartureFormatted(
      date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    );
  }, [activeIndex, currentSlide.nextBatchOffsetDays]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <section className="relative w-full min-h-[550px] lg:min-h-[650px] py-10 lg:py-12 bg-black text-white font-sans select-none overflow-hidden flex flex-col justify-between">
      {/* Ultra HD Background Image with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradients for maximum visual quality & readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Top Bar Navigation */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-end gap-4">
        {/* Destination Pills aligned on right */}
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/20 overflow-x-auto scrollbar-none shadow-xl ml-auto">
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

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Dynamic Tagline (No static 2026) */}
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-amber-300 uppercase">
                  {currentSlide.taglineBase} {currentYear}
                </p>

              </div>

              {/* Huge Bold Title */}
              <div className="my-4 sm:my-6 md:my-8">
                <h1
                  className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-wider text-white uppercase leading-none drop-shadow-2xl"
                  style={{ fontFamily: "'Anton', 'Bebas Neue', 'Impact', sans-serif" }}
                >
                  {currentSlide.title}
                </h1>
              </div>

              {/* Subtitle Quote Box */}
              <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed font-sans max-w-xl bg-black/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border-l-4 border-amber-400 my-4 shadow-xl">
                &quot;{currentSlide.quote}&quot;
              </p>

              {/* Dynamic Timeline Info Badges (No static 2026) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl py-2">
                <div className="flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Duration</div>
                    <div className="text-xs font-extrabold text-white">{currentSlide.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                  <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Best Season</div>
                    <div className="text-xs font-extrabold text-white">{currentSlide.bestSeason}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Next Batch</div>
                    <div className="text-xs font-extrabold text-amber-300">{nextDepartureFormatted || "Enquire Now"}</div>
                  </div>
                </div>
              </div>

              {/* Country Badge & Explore Button */}
              <div className="flex items-center gap-4 pt-2 flex-wrap">
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
