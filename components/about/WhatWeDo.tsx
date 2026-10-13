
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Plane,
  MapPinned,
  Hotel,
  FileCheck,
  Compass,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Domestic & International Tours",
    category: "TOUR PLANNING",
    image: "/images/domestic_international.png",
    description:
      "Discover beautiful destinations with customized tour plans for family holidays, honeymoons, group trips, and international adventures tailored to your budget.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Flight Ticket Booking",
    category: "FLIGHT BOOKINGS",
    image: "/images/flight-ticket-booking.png",
    description:
      "Plan your journey with domestic and international flight bookings. Compare suitable travel options and find convenient routes for your next trip.",
    icon: Plane,
  },
  {
    number: "03",
    title: "Holiday Packages & Experiences",
    category: "TRAVEL EXPERIENCES",
    image: "/images/complete-travel.png",
    description:
      "Enjoy thoughtfully planned holidays with sightseeing, local experiences, transportation, and itineraries designed to make every trip memorable.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Visa Assistance",
    category: "TRAVEL DOCUMENTATION",
    image: "/images/domestic_international.png",
    description:
      "Get guidance on visa requirements, application documentation, and travel preparation to help you plan your international journey with confidence.",
    icon: FileCheck,
  },
  {
    number: "05",
    title: "Hotels & Accommodation",
    category: "STAYS & COMFORT",
    image: "/images/hotel-management.png",
    description:
      "Find suitable accommodation for every kind of trip, from comfortable family stays to premium hotels and relaxing holiday resorts.",
    icon: Hotel,
  },
  {
    number: "06",
    title: "Travel Business Digital Support",
    category: "DIGITAL SOLUTIONS",
    image: "/images/digital-service.png",
    description:
      "We help travel businesses strengthen their online presence through website development, digital marketing, and travel-focused content solutions.",
    icon: MonitorSmartphone,
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8faf7] py-16 sm:py-20 lg:py-24"
    >
      {/* Soft background decorations */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#d9f1e9]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#ffead7]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#bce6d9] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#087e70] shadow-sm">
            <Globe2 size={15} />
            Our Travel Services
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#173b35] sm:text-4xl lg:text-5xl">
            Everything You Need
            <br className="hidden sm:block" /> for Your Next{" "}
            <span className="text-[#e88b42]">Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            From discovering new destinations to arranging flights and
            comfortable stays, Dream Sky Airways helps make your travel
            planning simpler, smoother, and more memorable.
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#087e70]" />
            <span className="h-1 w-3 rounded-full bg-[#e88b42]" />
            <span className="h-1 w-3 rounded-full bg-[#bce6d9]" />
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-[#e5eee8] bg-white shadow-[0_8px_30px_rgba(23,59,53,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(23,59,53,0.12)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden sm:h-60">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102d28]/65 via-transparent to-black/5" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/95 px-3 py-1.5 text-xs font-bold tracking-wider text-[#173b35]">
                    {service.number}
                  </span>

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#087e70] px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white">
                    {service.category}
                  </span>

                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#087e70] shadow-lg transition-colors group-hover:bg-[#e88b42] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold leading-snug text-[#173b35] transition-colors group-hover:text-[#087e70]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-xs font-medium text-gray-500">
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-[#087e70]"
                        />
                        Personalized travel solutions
                      </span>

                      <ArrowRight
                        size={19}
                        className="shrink-0 text-[#e88b42] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#173b35] p-7 text-center sm:mt-16 sm:flex-row sm:p-10 sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9fe0ce]">
              Your next adventure starts here
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Ready to plan your next trip?
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Let us help you create a journey worth remembering.
            </p>
          </div>

          <a
            href="/packages"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#e88b42] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#d77931]"
          >
            Explore Packages
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
