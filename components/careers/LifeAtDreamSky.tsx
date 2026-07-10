"use client";

import React from "react";
import Image from "next/image";
import {
  Users,
  Coffee,
  GraduationCap,
  PartyPopper,
  Plane,
  Heart,
} from "lucide-react";

const experiences = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside talented professionals who believe in teamwork, innovation, and shared success.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Upskill through workshops, certifications, mentorship programs, and leadership training.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "We foster a healthy environment with flexible work practices and employee well-being initiatives.",
  },
  {
    icon: PartyPopper,
    title: "Celebrations & Events",
    description:
      "From annual retreats to cultural events, we celebrate every achievement together.",
  },
  {
    icon: Plane,
    title: "Travel Experiences",
    description:
      "Explore exciting destinations and enjoy exclusive travel opportunities as part of our team.",
  },
  {
    icon: Heart,
    title: "People First",
    description:
      "Respect, inclusivity, and personal growth are at the core of everything we do.",
  },
];

const LifeAtDreamSky = () => {
  return (
    <section
      id="culture"
      className="relative overflow-hidden bg-blue-950 py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Life At Dream Sky
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            More Than Work,
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              It's A Community
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            At Dream Sky Airways, we create an environment where innovation,
            collaboration, and personal growth flourish. We believe happy
            employees build extraordinary travel experiences.
          </p>
        </div>

        {/* Image + Content */}
        <div className="mt-20 grid gap-4 lg:grid-cols-2 lg:items-center">
          {/* Left Side Image */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10">
            <Image
              src="/images/careers/life-at-dream-sky.png"
              alt="Life at Dream Sky Airways"
              width={700}
              height={700}
              className="h-[750px] w-full object-cover "    
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white">
                150+ Team Members
              </h3>
              <p className="text-slate-300">
                Growing together across India.
              </p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="grid gap-3 sm:grid-cols-2">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500/20">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-24 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-10 backdrop-blur-md">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold text-white">
              "People are the wings that help Dream Sky Airways soar higher."
            </h3>

            <p className="mt-5 text-lg text-slate-300">
              We invest in our people, celebrate diversity, and create
              opportunities that empower every individual to achieve their
              fullest potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtDreamSky;