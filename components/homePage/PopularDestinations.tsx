"use client";

import Link from "next/link";
import Image from "next/image";
import { packages } from "@/components/data/package";
import { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Star, MapPin } from "lucide-react";

import { motion } from "framer-motion";

export default function PopularDestinations() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 10
    ) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: 420,
        behavior: "smooth",
      });
    }
  };

  // Auto Slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
      <div className="container mx-auto">
        {/* Centered Title Header */}
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-2xl font-light tracking-wide text-gray-600 mb-1">
            Explore the
          </p>
          <div className="flex items-center justify-center gap-0.5 sm:gap-3 py-1">
            {"BEAUTIFUL".split("").map((letter, idx) => (
              <motion.span
                key={idx}
                animate={{
                  rotateX: [0, 360],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3.5,
                  delay: idx * 0.08,
                  ease: [0.45, 0.05, 0.25, 0.95],
                }}
                whileHover={{
                  rotateX: 180,
                  scale: 1.25,
                  transition: { duration: 0.4 },
                }}
                className="text-3xl xs:text-4xl sm:text-7xl font-extrabold text-gray-900 tracking-tight inline-block cursor-pointer select-none will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Navigation Buttons Row */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="Previous Destinations"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="Next Destinations"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Tall Cards Carousel Slider - 2 Images Visible on Mobile */}
        <div
          ref={sliderRef}
          className="flex gap-2.5 sm:gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pt-1"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex-shrink-0 w-[calc(50%-5px)] sm:w-[340px] lg:w-[360px]"
            >
              <Link href={`/packages/${pkg.slug}`}>
                <div className="group relative h-[280px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer bg-black">
                  {/* Full Card Background Image */}
                  <Image
                    src={pkg.images?.[0] || "/placeholder.jpg"}
                    alt={pkg.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between z-10">
                    <span className="bg-black/40 backdrop-blur-md text-white text-[9px] sm:text-xs font-medium px-1.5 py-0.5 sm:px-3 sm:py-1.5 rounded-full border border-white/20">
                      {pkg.duration}
                    </span>

                    <span className="bg-white/95 backdrop-blur-md text-gray-900 text-[9px] sm:text-sm font-bold px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md flex items-center gap-0.5 sm:gap-1">
                      <Star size={10} className="text-amber-500 fill-amber-500 sm:w-3.5 sm:h-3.5" />
                      <span>{pkg.rating || "4.7"}</span>
                    </span>
                  </div>

                  {/* Bottom Text Content Overlaid on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-6 z-10 text-white">
                    <p className="text-[9px] sm:text-sm text-gray-300 font-medium flex items-center gap-1 mb-0.5 sm:mb-1">
                      <MapPin size={10} className="text-gray-300 shrink-0 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{pkg.location}</span>
                    </p>

                    <h3 className="text-xs sm:text-2xl font-bold text-white leading-snug tracking-tight line-clamp-1 sm:line-clamp-2 drop-shadow-sm">
                      {pkg.title}
                    </h3>

                    <div className="mt-1.5 sm:mt-4 pt-1 sm:pt-3 border-t border-white/15 flex items-center justify-between">
                      <div>
                        <span className="text-[8px] sm:text-[11px] uppercase tracking-wider text-gray-300 block leading-none">Starting From</span>
                        <span className="text-xs sm:text-xl font-extrabold text-white">{pkg.price}</span>
                      </div>
                      <span className="text-[9px] sm:text-xs font-bold text-white underline underline-offset-4 group-hover:text-amber-400 transition-colors">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}