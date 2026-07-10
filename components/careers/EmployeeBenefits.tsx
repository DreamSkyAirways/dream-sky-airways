"use client";

import React from "react";
import {
  Plane,
  HeartPulse,
  GraduationCap,
  Laptop,
  Gift,
  Umbrella,
} from "lucide-react";

const benefits = [
  {
    icon: Plane,
    title: "Travel Privileges",
    description:
      "Enjoy exclusive discounts and special offers on domestic and international trips.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    description:
      "Comprehensive medical coverage, wellness programs, and mental health support.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description:
      "Access certifications, workshops, and training opportunities to grow your career.",
  },
  {
    icon: Laptop,
    title: "Flexible Work",
    description:
      "Hybrid and remote work options for eligible teams and departments.",
  },
  {
    icon: Gift,
    title: "Rewards & Recognition",
    description:
      "Performance bonuses, employee awards, and celebration programs.",
  },
  {
    icon: Umbrella,
    title: "Paid Time Off",
    description:
      "Generous leave policies to maintain a healthy work-life balance.",
  },
];

const EmployeeBenefits = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emebluerald-100 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">
            Employee Benefits
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            We Take Care of
            <span className="block text-blue-600">
              Our People
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-800">
            At Dream Sky Airways, we believe that happy employees create
            exceptional experiences. That's why we invest in benefits that
            support your health, growth, and lifestyle.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-500 to-blue-950 p-10 text-white shadow-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-bold">
                Your Growth Is Our Priority
              </h3>

              <p className="mt-4 max-w-2xl text-blue-50">
                We provide the tools, opportunities, and support you need to
                achieve your professional goals and enjoy a fulfilling career.
              </p>
            </div>

            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
              Explore Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeBenefits;
