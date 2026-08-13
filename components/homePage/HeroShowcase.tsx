"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Destination, destinationsData } from "@/app/data/destinations";

interface HeroShowcaseProps {
  destinations?: Destination[];
}

/**
 * Reusable helper function to dynamically append Cloudinary optimization parameters.
 * Automatically inserts transformations directly after '/upload/' in the URL.
 */

const getCloudinaryUrl = (url: string, transform: string): string => {
  if (!url) return url;
  if (url.includes("/upload/") && !url.includes(`upload/${transform}`)) {
    return url.replace("/upload/", `/upload/${transform}/`);
  }
  return url;
};

export default function HeroShowcase({
  destinations = destinationsData,
}: HeroShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeDestination = destinations[currentIndex] || destinations[0];

  // Smooth scroll thumbnail container to center selected card
  const scrollToCard = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        const cardOffsetLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollPosition = cardOffsetLeft - containerWidth / 2 + cardWidth / 2;

        container.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: "smooth",
        });
      }
    }
  }, []);

  // Optimized Auto-play timer: runs continuously every 6s without thrashing/re-creating interval on every index change
  useEffect(() => {
    if (!destinations.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [destinations.length]);

  // Scroll carousel to active card when index changes
  useEffect(() => {
    scrollToCard(currentIndex);
  }, [currentIndex, scrollToCard]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full min-h-[640px] lg:h-screen lg:min-h-[750px] bg-black overflow-hidden select-none">
      {/* 1. Full-bleed Background Image with Framer Motion Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDestination.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <img
            src={getCloudinaryUrl(activeDestination.image, "f_auto,q_auto,w_1920")}
            alt={activeDestination.title}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          {/* Subtle overlay gradients for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Main Hero Grid Content */}
      <div className="relative z-10 w-full h-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-28 sm:pt-36 lg:pt-40 pb-10 flex flex-col justify-between">
        {/* Top Space for Header Alignment */}
        <div className="w-full" />

        {/* Center Content Row: Left Text + Right Thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end my-auto w-full">
          {/* Left Text Block */}
          <div className="lg:col-span-6 xl:col-span-6 text-white space-y-5">
            {/* Subtitle / Location tag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`sub-${activeDestination.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="w-8 h-[3px] bg-white/80 rounded-full" />
                <span className="text-sm sm:text-base font-medium tracking-wide text-gray-200 uppercase">
                  {activeDestination.location}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Giant Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${activeDestination.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight leading-none drop-shadow-md"
              >
                {activeDestination.title}
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeDestination.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed line-clamp-3 font-light"
              >
                {activeDestination.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Right Card Carousel Showcase (Uniform Size & Smooth Scroll) */}
          <div className="lg:col-span-6 xl:col-span-6 overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-4 overflow-x-auto pb-4 pt-2 px-1 scrollbar-hide scroll-smooth snap-x"
            >
              {destinations.map((item, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(index)}
                    className={`relative shrink-0 cursor-pointer snap-start transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl w-40 sm:w-48 h-60 sm:h-68 ${isActive
                      ? "opacity-100 z-20"
                      : "opacity-70 hover:opacity-100 z-10"
                      }`}
                  >
                    {/* Thumbnail Image */}
                    <img
                      src={getCloudinaryUrl(item.image, "f_auto,q_auto,w_500")}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Card Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-[10px] sm:text-xs text-gray-300 font-medium tracking-wide uppercase line-clamp-1">
                        {item.location}
                      </p>
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white uppercase tracking-tight leading-tight line-clamp-2 mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
