"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Users, Plane } from "lucide-react";

const CareerHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
       <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/flight.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/75 via-blue-950/60 to-blue-900/50" />

      {/* Decorative Blur */}
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            <Plane className="h-4 w-4" />
            Join Dream Sky Airways
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Build Your Career
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Above The Clouds
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Be part of a passionate team that's transforming the future of
            travel. From technology and operations to customer experience,
            discover opportunities that help you grow and make an impact.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#jobs"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Open Positions
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="#culture"
              className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Life at Dream Sky
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <Briefcase className="mb-3 h-8 w-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">20+</h3>
              <p className="text-sm text-slate-400">Open Opportunities</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <Users className="mb-3 h-8 w-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">150+</h3>
              <p className="text-sm text-slate-400">Team Members</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <Plane className="mb-3 h-8 w-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">10+</h3>
              <p className="text-sm text-slate-400">Destinations Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default CareerHero;
