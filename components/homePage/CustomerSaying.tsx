"use client";

import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Delhi",
    image: "/reviews/review-1.png",
    review:
      "I got the best traveling experience through Dream Sky Airways. Seamless flight bookings and top-notch customer support!",
  },
  {
    id: 2,
    name: "Ravi Verma",
    role: "Mumbai",
    image: "/reviews/review-2.png",
    review:
      "The best flight & hotel booking site I've ever visited. Great pricing transparency and instant ticket confirmations.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Bangalore",
    image: "/reviews/review-3.png",
    review:
      "Booked our family staycation through Dream Sky Airways. Exceptional hotel choices and hassle-free cancellation options.",
  },
  {
    id: 4,
    name: "Gurkeerat Singh",
    role: "Goa",
    image: "/reviews/review-4.png",
    review:
      "The package deals section is super helpful and affordable. Highly recommend for any weekend getaway planning!",
  },
  {
    id: 5,
    name: "Vikash Gupta",
    role: "Pune",
    image: "/reviews/review-5.png",
    review:
      "Sleek and modern user experience. Quick search, clear flight schedules, and very responsive customer care.",
  },
];

export default function CustomersSaying() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
      <div className="container mx-auto">

        {/* Centered Title Header */}
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-2xl sm:text-2xl font-light tracking-wide text-gray-600 mb-1">
            What Our
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-8 gap-y-1 py-1">
            {/* TRAVELERS */}
            <div className="flex items-center gap-0.5 sm:gap-2">
              {"TRAVELERS".split("").map((letter, idx) => (
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

            {/* SAY */}
            <div className="flex items-center gap-0.5 sm:gap-2">
              {"SAY".split("").map((letter, idx) => (
                <motion.span
                  key={idx + 9}
                  animate={{
                    rotateX: [0, 360],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    delay: (idx + 9) * 0.08,
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
        <div className="flex justify-end gap-2 mb-3 sm:mb-4 max-w-5xl mx-auto">
          <button
            onClick={prevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-800 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Next Testimonial"
          >
            <FaChevronRight size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

        {/* Slider Card */}
        <div className="max-w-5xl mx-auto relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="min-w-full px-1 sm:px-2">
                <div className="relative bg-gray-50/80 border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-12 shadow-sm hover:shadow-md transition-all">
                  {/* Red Decorative Quote Icon */}
                  <div className="absolute top-4 right-5 sm:top-6 sm:right-8 text-red-500/25 pointer-events-none">
                    <FaQuoteRight className="w-8 h-8 sm:w-14 sm:h-14" />
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex gap-1 sm:gap-1.5 mb-3 sm:mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className="text-amber-400 fill-amber-400 sm:w-[18px] sm:h-[18px]"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm sm:text-2xl font-medium leading-relaxed mb-4 sm:mb-8 max-w-3xl relative z-10">
                    "{item.review}"
                  </p>

                  {/* User Profile Footer */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200/60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                    />

                    <div>
                      <h3 className="font-extrabold text-sm sm:text-lg text-gray-900">
                        {item.name}
                      </h3>

                      <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gray-200/80 text-gray-700 inline-block mt-0.5">
                        📍 {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index
                  ? "bg-black w-8"
                  : "bg-gray-200 w-2.5 hover:bg-gray-300"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}