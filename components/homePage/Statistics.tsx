"use client";

import { useState } from "react";
import {
  Users,
  MapPinned,
  Plane,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Travelers",
    subtext: "Satisfied customers across India & abroad",
  },
  {
    icon: Plane,
    value: "500+",
    label: "Tour Packages",
    subtext: "Handcrafted flight & holiday deals",
  },
  {
    icon: MapPinned,
    value: "50+",
    label: "Destinations",
    subtext: "Top domestic & international locations",
  },
  {
    icon: Award,
    value: "99%",
    label: "Satisfaction Rate",
    subtext: "Positive ratings & repeat bookings",
  },
];

const faqs = [
  {
    question: "Do you provide customized tour packages?",
    answer:
      "Yes, we create customized domestic and international tour packages tailored to your preferences, schedule, and budget.",
  },
  {
    question: "Can I book flights and hotels separately?",
    answer:
      "Absolultely! We offer standalone flight tickets, individual hotel reservations, or complete bundled vacation packages.",
  },
  {
    question: "Do you offer group and corporate discounts?",
    answer:
      "Yes, special discounted rates are available for corporate travel, family reunions, and large group bookings.",
  },
  {
    question: "Is customer support available 24/7 during my trip?",
    answer:
      "Yes, our dedicated travel support team is available round the clock to assist you before, during, and after your trip.",
  },
];

import { motion } from "framer-motion";

const Statistics = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-20 bg-white text-gray-900 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto">
      <div className="container mx-auto">

        {/* Centered Title Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-10 gap-y-1 py-1">
            {/* OUR */}
            <div className="flex items-center gap-0.5 sm:gap-3">
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
                  className="text-2xl xs:text-3xl sm:text-7xl font-extrabold text-red-600 tracking-tight inline-block cursor-pointer select-none will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* ACHIEVEMENTS */}
            <div className="flex items-center gap-0.5 sm:gap-3">
              {"ACHIEVEMENTS".split("").map((letter, idx) => (
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
                  className="text-2xl xs:text-3xl sm:text-7xl font-extrabold text-gray-900 tracking-tight inline-block cursor-pointer select-none will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Grid - 4 Boxes in 2 Rows on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-gray-50/80 border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center transition-all duration-300 hover:border-red-200 hover:bg-white hover:shadow-xl hover:-translate-y-1.5"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-full border border-red-400 text-red-500 bg-red-50/60 flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-red-500" />
                </div>

                <h3 className="text-2xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                  {item.value}
                </h3>

                <p className="text-gray-900 font-bold mt-1 sm:mt-2 text-xs sm:text-lg">
                  {item.label}
                </p>

                <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>

       

      </div>
    </section>
  );
};

export default Statistics;
