"use client";

import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/components/data/testimonials";
import { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
      <div className="container mx-auto">
        {/* Centered Title Header */}
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-2xl sm:text-2xl font-light tracking-wide text-gray-600 mb-1">
            Real Stories From
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-8 gap-y-1 py-1">
            {/* OUR */}
            <div className="flex items-center gap-0.5 sm:gap-2">
              {"OUR".split("").map((letter, idx) => (
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
                  className="text-2xl xs:text-3xl sm:text-6xl font-extrabold text-red-600 tracking-tight inline-block cursor-pointer select-none will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* TRAVELERS */}
            <div className="flex items-center gap-0.5 sm:gap-2">
              {"TRAVELERS".split("").map((letter, idx) => (
                <motion.span
                  key={idx + 3}
                  animate={{
                    rotateX: [0, 360],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    delay: (idx + 3) * 0.08,
                    ease: [0.45, 0.05, 0.25, 0.95],
                  }}
                  whileHover={{
                    rotateX: 180,
                    scale: 1.25,
                    transition: { duration: 0.4 },
                  }}
                  className="text-2xl xs:text-3xl sm:text-6xl font-extrabold text-gray-900 tracking-tight inline-block cursor-pointer select-none will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons Row */}
        <div className="flex justify-end gap-2 mb-3 sm:mb-4">
          <button
            onClick={scrollLeft}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="Previous Testimonials"
          >
            <FaChevronLeft size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="Next Testimonials"
          >
            <FaChevronRight size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

        {/* Testimonials Slider */}
        <div
          ref={sliderRef}
          className="flex gap-2.5 sm:gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pt-1"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[calc(50%-5px)] sm:w-[340px] lg:w-[360px]"
            >
              <Link href={`/testimonials/${item.slug}`}>
                <div className="group relative bg-gray-50/90 border border-gray-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-1.5 cursor-pointer">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-4 mb-6">
                    "{item.review}"
                  </p>

                  {/* User Profile Footer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border border-gray-300 shadow-sm"
                    />

                    <div>
                      <h3 className="font-extrabold text-base text-gray-900">
                        {item.name}
                      </h3>

                      <p className="text-xs text-gray-500 font-medium">
                        📍 {item.location}
                      </p>
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
};

export default Testimonials;
