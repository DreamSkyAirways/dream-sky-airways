
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Compass,
  Target,
  Sparkles,
  MapPin,
  Globe2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const TRAVEL_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85";

const values = [
  {
    icon: Compass,
    number: "01",
    title: "Our Mission",
    text: "To make travel simple, accessible and memorable through thoughtfully planned holidays, personalized itineraries and reliable travel assistance.",
  },
  {
    icon: Target,
    number: "02",
    title: "Our Vision",
    text: "To become a trusted travel partner for explorers seeking meaningful experiences, seamless planning and unforgettable journeys across India and beyond.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Our Promise",
    text: "We put travelers first with transparent communication, tailored travel solutions and attentive support throughout the planning process.",
  },
];

const services = [
  "Domestic & international holiday packages",
  "Flight and hotel booking assistance",
  "Customized itineraries and travel planning",
  "Visa assistance and travel support",
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#f8faf7] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#dcefe9] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#ffedda] blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-3xl lg:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6e8df] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#087e70] shadow-sm">
            <Globe2 size={15} />
            Discover Dream Sky
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#173b35] sm:text-5xl lg:text-6xl">
            Every journey has
            <br className="hidden sm:block" /> a story to tell.
            <span className="mt-2 block text-[#e88b42]">
              Let&apos;s make yours memorable.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#64736d] sm:text-lg">
            We help turn your travel ideas into meaningful experiences,
            from relaxing beach escapes to exciting international adventures
            and thoughtfully planned family holidays.
          </p>
        </motion.div>

        {/* Image and company story */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative pb-7 pr-4 sm:pr-7"
          >
            <div className="group relative overflow-hidden rounded-[28px] bg-[#dce9e3] shadow-xl shadow-[#173b35]/10">
              <img
                src={TRAVEL_IMAGE}
                alt="Beautiful tropical beach destination with turquoise ocean and golden sand"
                className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[480px] lg:h-[560px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102e2b]/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/90">
                  <MapPin size={17} className="text-[#ffc18c]" />
                  Discover somewhere beautiful
                </div>

                <p className="max-w-sm text-2xl font-bold leading-snug text-white sm:text-3xl">
                  More places to see.
                  <br />
                  More memories to make.
                </p>
              </div>
            </div>

            {/* Establishment badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute -bottom-1 right-0 rounded-2xl border border-[#e5eee8] bg-white p-5 shadow-xl sm:right-3 sm:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#829087]">
                Established
              </p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight text-[#087e70]">
                2023
              </p>
              <p className="mt-1 text-xs text-[#64736d]">
                Your travel journey starts here
              </p>
            </motion.div>
          </motion.div>

          {/* Company introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087e70]">
              Who We Are
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#173b35] sm:text-4xl">
              Your plans.
              <br />
              Our passion for travel.
            </h3>

            <p className="mt-5 text-base leading-8 text-[#64736d]">
              Welcome to Dream Sky Airways Pvt. Ltd., established in 2023
              with a focus on helping people explore the world with confidence.
              We believe every traveler deserves a trip that suits their
              interests, preferences and budget.
            </p>

            <p className="mt-4 text-base leading-8 text-[#64736d]">
              From domestic getaways and international holiday packages
              to flight bookings, hotel stays and visa assistance, we aim
              to make planning your next trip easier and more enjoyable.
              Our approach is centered on personalized service, clear
              communication and experiences worth remembering.
            </p>

            <div className="mt-7 space-y-4">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#087e70]"
                  />
                  <p className="text-sm leading-6 text-[#435d54] sm:text-base">
                    {service}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/packages"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#087e70] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#087e70]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#066357]"
            >
              Explore Holiday Packages
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Mission, vision and promise */}
        <div className="mt-24 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087e70]">
              What Guides Us
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#173b35] sm:text-4xl">
              Travel with purpose.
              <br />
              Explore with confidence.
            </h3>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: 0.25 + index * 0.12,
                  }}
                  className="group rounded-3xl border border-[#e4ece5] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c4ded1] hover:shadow-xl hover:shadow-[#173b35]/5 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f4ed] text-[#087e70] transition group-hover:bg-[#087e70] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-[#b1c4b8]">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-7 text-xl font-bold text-[#173b35]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#718078]">
                    {item.text}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-[#e9a15d] transition-all duration-300 group-hover:w-20" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
