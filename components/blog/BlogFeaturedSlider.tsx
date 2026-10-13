"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Compass,
  Sparkles,
} from "lucide-react";

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
    taglineBase: "ADVENTURE & YOGA",
    title: "RISHIKESH",
    country: "UTTARAKHAND, INDIA",
    quote:
      "Experience the sacred Ganga, thrilling river rafting, peaceful yoga retreats, evening Ganga Aarti, and beautiful Himalayan foothills.",
    image: "/Blog/slider/rishikesh.png",
    slug: "rishikesh-travel-guide-rafting-yoga",
    duration: "4 Days / 3 Nights",
    bestSeason: "Sep – May",
    nextBatchOffsetDays: 3,
  },
  {
    id: "goa",
    taglineBase: "BEACHES & SUNSETS",
    title: "GOA",
    country: "GOA, INDIA",
    quote:
      "Explore palm-lined beaches, golden sunsets, Portuguese heritage, colorful markets, and memorable coastal experiences.",
    image: "/Blog/slider/goa.png",
    slug: "goa-tour-package-guide",
    duration: "5 Days / 4 Nights",
    bestSeason: "Nov – Feb",
    nextBatchOffsetDays: 5,
  },
  {
    id: "manali",
    taglineBase: "MOUNTAINS & ADVENTURE",
    title: "MANALI",
    country: "HIMACHAL PRADESH, INDIA",
    quote:
      "Discover snow-covered mountains, Solang Valley, riverside views, cozy stays, and exciting outdoor adventures.",
    image: "/Blog/slider/manali.png",
    slug: "manali-snow-adventure-solang-valley",
    duration: "6 Days / 5 Nights",
    bestSeason: "Oct – Mar",
    nextBatchOffsetDays: 4,
  },
  {
    id: "kashmir",
    taglineBase: "A BEAUTIFUL MOUNTAIN ESCAPE",
    title: "KASHMIR",
    country: "JAMMU & KASHMIR, INDIA",
    quote:
      "Enjoy peaceful Dal Lake, Mughal gardens, mountain valleys, scenic houseboats, and the unforgettable beauty of Kashmir.",
    image: "/Blog/slider/kashmir.png",
    slug: "kashmir-romantic-paradise-honeymoon-guide",
    duration: "7 Days / 6 Nights",
    bestSeason: "Mar – Oct",
    nextBatchOffsetDays: 6,
  },
  {
    id: "jaipur",
    taglineBase: "ROYAL HERITAGE & CULTURE",
    title: "JAIPUR",
    country: "RAJASTHAN, INDIA",
    quote:
      "Explore the iconic Hawa Mahal, magnificent forts, vibrant Pink City markets, and Rajasthan's rich cultural heritage.",
    image: "/Blog/slider/jaipur.png",
    slug: "jaipur-pink-city-royal-heritage-guide",
    duration: "4 Days / 3 Nights",
    bestSeason: "Oct – Mar",
    nextBatchOffsetDays: 2,
  },
];

export default function BlogFeaturedSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextDepartureFormatted, setNextDepartureFormatted] =
    useState("");

  const currentSlide = sliderData[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const date = new Date(
      Date.now() + currentSlide.nextBatchOffsetDays * 86400000
    );

    setNextDepartureFormatted(
      date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    );
  }, [currentSlide]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f8faf7] py-14 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d9f1e9]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#ffead7]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c5e7dc] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087e70] shadow-sm">
              <Sparkles size={15} />
              Travel Inspiration
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#173b35] sm:text-4xl lg:text-5xl">
              Discover Your Next
              <span className="block text-[#e88b42]">
                Favourite Destination
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Explore inspiring destinations, discover local experiences,
              and find ideas for your next unforgettable holiday.
            </p>
          </div>

          {/* Desktop controls */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous destination"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dce9e2] bg-white text-[#173b35] shadow-sm transition hover:border-[#087e70] hover:bg-[#087e70] hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next destination"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#087e70] text-white shadow-md transition hover:bg-[#06675d]"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Destination selector */}
        <div className="mb-7 flex gap-2 overflow-x-auto pb-2">
          {sliderData.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                activeIndex === index
                  ? "bg-[#173b35] text-white shadow-md"
                  : "border border-[#e1eae4] bg-white text-gray-600 hover:border-[#087e70] hover:text-[#087e70]"
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>

        {/* Featured destination */}
        <div className="overflow-hidden rounded-[2rem] border border-[#e3ece5] bg-white shadow-[0_20px_65px_rgba(23,59,53,0.08)]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* Image panel */}
            <div className="relative min-h-[320px] overflow-hidden sm:min-h-[440px] lg:min-h-[570px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentSlide.image}
                    alt={`${currentSlide.title} travel destination`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#102d28]/80 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#173b35] shadow-sm">
                  <MapPin size={14} className="text-[#087e70]" />
                  Featured Destination
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id + "-image-caption"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-6 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffd3a6] sm:text-sm">
                    {currentSlide.taglineBase}
                  </p>

                  <h3 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                    {currentSlide.title}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/90 sm:text-sm">
                    <MapPin size={16} />
                    {currentSlide.country}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Information panel */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10 xl:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id + "-content"}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087e70]">
                    Your travel story starts here
                  </span>

                  <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#173b35] sm:text-3xl">
                    Explore the beauty of{" "}
                    <span className="text-[#e88b42]">
                      {currentSlide.title}
                    </span>
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {currentSlide.quote}
                  </p>

                  {/* Travel details */}
                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-2xl bg-[#f1f8f4] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#087e70] shadow-sm">
                        <Clock size={19} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Ideal Duration</p>
                        <p className="mt-1 text-sm font-bold text-[#173b35]">
                          {currentSlide.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-[#fff6ee] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#e88b42] shadow-sm">
                        <Compass size={19} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Best Season</p>
                        <p className="mt-1 text-sm font-bold text-[#173b35]">
                          {currentSlide.bestSeason}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-[#e8eee9] p-4 sm:col-span-2">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f8f4] text-[#087e70]">
                        <Calendar size={19} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          Suggested Enquiry Date
                        </p>
                        <p className="mt-1 text-sm font-bold text-[#173b35]">
                          {nextDepartureFormatted || "Enquire for details"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${currentSlide.slug}`}
                    className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#087e70] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#087e70]/15 transition hover:-translate-y-0.5 hover:bg-[#06675d] sm:w-auto"
                  >
                    Read Travel Guide
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom pagination and mobile controls */}
        <div className="mt-7 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {sliderData.map((slide, index) => (
              <button
                type="button"
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${slide.title}`}
                aria-pressed={activeIndex === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#087e70]"
                    : "w-2 bg-[#cbdcd2] hover:bg-[#e88b42]"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tabular-nums text-gray-500">
              <span className="text-[#087e70]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(sliderData.length).padStart(2, "0")}
            </span>

            <div className="flex gap-2 md:hidden">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous destination"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce9e2] bg-white text-[#173b35]"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next destination"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#087e70] text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
