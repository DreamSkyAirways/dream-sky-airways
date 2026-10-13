"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Destination, destinationsData } from "@/app/data/destinations";

interface HeroShowcaseProps {
  destinations?: Destination[];
}

const AUTOPLAY_MS = 6000;

/** Inserts Cloudinary transformations right after '/upload/'. */
const getCloudinaryUrl = (url: string, transform: string): string => {
  if (!url) return url;
  if (url.includes("/upload/") && !url.includes(`upload/${transform}`)) {
    return url.replace("/upload/", `/upload/${transform}/`);
  }
  return url;
};

/**
 * Design: photo-first. Big sentence-case serif title anchored bottom-left,
 * a quiet destination index on the right where the active item carries an
 * autoplay progress line (the one memorable detail).
 */
export default function HeroShowcase({
  destinations = destinationsData,
}: HeroShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  const active = destinations[currentIndex] || destinations[0];

  // Autoplay tied to the current index so the progress line stays in sync
  useEffect(() => {
    if (destinations.length < 2) return;
    const t = setTimeout(
      () => setCurrentIndex((i) => (i + 1) % destinations.length),
      AUTOPLAY_MS
    );
    return () => clearTimeout(t);
  }, [currentIndex, destinations.length]);

  // Keep the active item visible in the index
  useEffect(() => {
    itemRefs.current[currentIndex]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentIndex, reduceMotion]);

  if (!active) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured destinations"
      className="relative w-full min-h-[640px] lg:h-screen lg:min-h-[720px] overflow-hidden bg-[#14181c] text-white"
    >
      {/* Background photo */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0"
        >
          <img
            src={getCloudinaryUrl(active.image, "f_auto,q_auto,w_1920")}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      {/* Single scrim: darker at bottom where the text sits */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35" />

      <div className="relative z-10 mx-auto flex h-full min-h-[640px] w-full max-w-[1600px] flex-col justify-end gap-10 px-5 pb-8 pt-32 sm:px-10 lg:min-h-[720px] lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-14 lg:pb-14">
        {/* Text */}
        <div className="max-w-2xl" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-base text-white/80 sm:text-lg">
                {active.location}
              </p>
              <h1
                className="text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
                style={{ fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif" }}
              >
                {active.title}
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 line-clamp-3">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Destination index */}
        <nav
          aria-label="Choose destination"
          className="w-full lg:w-[340px] lg:shrink-0"
        >
          <ul className="scrollbar-hide flex gap-3 overflow-x-auto pb-1 lg:max-h-[340px] lg:flex-col lg:gap-0 lg:overflow-y-auto lg:overflow-x-hidden">
            {destinations.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <li key={item.id} className="shrink-0 lg:shrink">
                  <button
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-current={isActive}
                    className={`group relative flex w-56 items-center gap-3 rounded-lg p-2 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:w-full ${
                      isActive ? "bg-white/15 backdrop-blur-md" : "hover:bg-white/10"
                    }`}
                  >
                    <img
                      src={getCloudinaryUrl(item.image, "f_auto,q_auto,w_160,h_160,c_fill")}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-md object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="min-w-0">
                      <span
                        className={`block truncate text-sm font-semibold ${
                          isActive ? "text-white" : "text-white/75"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="block truncate text-xs text-white/60">
                        {item.location}
                      </span>
                    </span>

                    {/* Autoplay progress */}
                    {isActive && (
                      <span className="absolute inset-x-2 bottom-0 h-[2px] overflow-hidden rounded-full bg-white/20">
                        <motion.span
                          key={`progress-${currentIndex}`}
                          className="block h-full bg-white"
                          initial={{ width: reduceMotion ? "100%" : "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                        />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}