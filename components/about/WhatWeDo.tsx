"use client";

import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Domestic & International Tour Planning",
//     description:
//       "Dream Sky Airways specializes in customized domestic and international tour planning. From family vacations to honeymoon packages and corporate trips, we design journeys that match your budget, preferences, and travel goals.",
//   },
//   {
//     title: "Flight Ticket Booking",
//     description:
//       "Book affordable flight tickets for both domestic and international destinations through our platform. We ensure the best routes, competitive pricing, and hassle-free booking for a smooth travel experience.",
//   },
//   {
//     title: "Complete Travel & Tour Services",
//     description:
//       "We offer end-to-end travel solutions including hotels, sightseeing, transportation, and guided tours—so you can enjoy a seamless and stress-free journey from start to finish.",
//   },
//   {
//     title: "Aviation Career Guidance & Job Placement",
//     description:
//       "Alongside travel services, we provide free aviation career guidance and job placement support for aspiring pilots, cabin crew, ground staff, and other aviation professionals.",
//   },
//   {
//     title: "Hotel & Accommodation Management",
//     description:
//       "Our hotel and accommodation services ensure comfortable stays at trusted partner hotels, offering quality service, safety, and value for money at every destination.",
//   },
//   {
//     title: "Digital Services & Brand Support",
//     description:
//       "Dream Sky Airways also delivers professional digital solutions including website development, online marketing, and content creation to support travel businesses and startups in growing their online presence.",
//   },
// ];
const services = [
  {
    title: "Domestic Tour Planning",
    image:
      "/images/domestic_international.png",
    description:
      "Dream Sky Airways specializes in customized domestic and international tour planning. From family vacations to honeymoon packages and corporate trips, we design journeys that match your budget, preferences, and travel goals.",
  },
  {
    title: "Flight Ticket Booking",
    image:
      "/images/flight-ticket-booking.png",
    description:
      "Book affordable flight tickets for both domestic and international destinations through our platform. We ensure the best routes, competitive pricing, and hassle-free booking for a smooth travel experience.",
  },
  {
    title: "Complete Travel & Tour Services",
    image:
     "/images/complete-travel.png",
    description:
      "We offer end-to-end travel solutions including hotels, sightseeing, transportation, and guided tours—so you can enjoy a seamless and stress-free journey from start to finish.",
  },
  {
    title: "Flight Services ",
    image:
      "/images/aviation-careers.png",
    description:
      "Book affordable flight tickets for both domestic and international destinations through our platform. We ensure the best routes, competitive pricing, and hassle-free booking for a smooth travel experience.",
  },
  {
    title: "Hotel & Accommodation Management",
    image:
      "/images/hotel-management.png",
    description:
      "Our hotel and accommodation services ensure comfortable stays at trusted partner hotels, offering quality service, safety, and value for money at every destination.",
  },
  {
    title: "Digital Services & Brand Support",
    image:"/images/digital-service.png",
    description:
      "Dream Sky Airways also delivers professional digital solutions including website development, online marketing, and content creation to support travel businesses and startups in growing their online presence.",
  },
];
export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#050B1A] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_35%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-950 bg-white/5 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-md">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            What We Do
          </h2>

          <p className="mt-5 text-base leading-8 text-blue-100/80 md:text-lg">
            Dream Sky Airways is a reliable travel and aviation services company
            offering complete tour planning, ticket booking, and career support—
            designed to make every journey smooth, affordable, and memorable.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-blue-400/30 hover:bg-white/[0.08]"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-[380px] lg:w-[450px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[250px] w-full object-cover md:h-[350px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050B1A]/40" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#050B1A]/80 backdrop-blur-md border border-white/10 text-white font-bold">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
                  <span className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                    Dream Sky Airways
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white transition group-hover:text-sky-300">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-3xl leading-8 text-blue-100/75">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-1 w-16 rounded-full bg-blue-600" />
                    <div className="h-1 w-8 rounded-full bg-sky-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
