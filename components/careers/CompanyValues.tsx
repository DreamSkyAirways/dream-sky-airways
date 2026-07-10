"use client";

import React from "react";
import {
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  Users,
  Globe2,
  PlaneTakeoff,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We prioritize safety, reliability, and trust in every journey we create.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Commitment",
    description:
      "Delivering exceptional experiences and putting travelers at the center of everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing technology and creative ideas to shape the future of aviation.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We succeed together through collaboration, respect, and shared goals.",
  },
  {
    icon: Globe2,
    title: "Sustainability",
    description:
      "Building a greener future through responsible and sustainable practices.",
  },
  {
    icon: PlaneTakeoff,
    title: "Excellence",
    description:
      "Maintaining the highest standards in service, operations, and performance.",
  },
];

const CompanyValues = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24">
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Our Foundation
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            The Values That
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Drive Our Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            At Dream Sky Airways, our culture is built on trust, innovation,
            and a commitment to excellence. These principles guide every
            decision we make and every experience we create.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                  <Icon className="h-8 w-8 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-10 backdrop-blur-md">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Our People, Our Strength
              </h3>

              <p className="mt-3 max-w-2xl text-slate-300">
                We believe in empowering individuals, encouraging innovation,
                and creating opportunities for everyone to reach new heights.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
              <Users className="h-8 w-8 text-cyan-400" />

              <div>
                <h4 className="text-xl font-bold text-white">150+ Team Members</h4>
                <p className="text-sm text-slate-400">
                  Growing together across multiple domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;