"use client";

import React from "react";
import {
  Rocket,
  GraduationCap,
  HeartHandshake,
  Plane,
  Globe,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Career Growth",
    description:
      "Accelerate your career with mentorship programs, leadership opportunities, and continuous learning.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "Access certifications, workshops, and training programs to sharpen your professional skills.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Culture",
    description:
      "Work in an inclusive environment where collaboration, respect, and innovation thrive.",
  },
  {
    icon: Plane,
    title: "Travel Opportunities",
    description:
      "Enjoy exciting travel experiences and exclusive employee travel benefits.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description:
      "Collaborate with diverse teams and contribute to projects that impact travelers worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Wellness & Security",
    description:
      "Comprehensive health benefits and employee well-being programs for a balanced life.",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="relative bg-blue-950/90 py-24">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Why Dream Sky Airways?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            More Than a Job,
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              It's a Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            At Dream Sky Airways, we believe our people are our greatest
            strength. We provide an environment where talent grows,
            innovation thrives, and every team member contributes to shaping
            the future of travel.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500/20">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-10 backdrop-blur-md">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Ready to Fly Higher With Us?
              </h3>

              <p className="mt-3 max-w-2xl text-slate-300">
                Join a team that values passion, innovation, and excellence.
                Your next career destination starts here.
              </p>
            </div>

            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
