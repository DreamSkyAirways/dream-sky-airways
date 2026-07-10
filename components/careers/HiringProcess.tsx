"use client";

import Image from "next/image";
import {
  FileText,
  Search,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Apply Online",
    description:
      "Submit your resume and portfolio through our careers portal.",
    icon: FileText,
  },
  {
    id: "02",
    title: "Profile Screening",
    description:
      "Our hiring team reviews your experience and qualifications.",
    icon: Search,
  },
  {
    id: "03",
    title: "Interview Process",
    description:
      "Technical and HR discussions to understand your skills and goals.",
    icon: MessageCircle,
  },
  {
    id: "04",
    title: "Welcome to Employeement",
    description:
      "Receive your offer letter and begin your journey with us.",
    icon: BadgeCheck,
  },
];

const HiringProcess = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Hiring Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Your Journey Starts Here
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            A simple, transparent, and candidate-friendly recruitment process.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative mt-20 overflow-visible rounded-[40px] bg-white shadow-2xl ring-1 ring-slate-100">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Side */}
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-slate-900">
                How We Hire
              </h3>

              <p className="mt-4 text-slate-600">
                We focus on talent, passion, and growth potential. Our process
                is designed to make every candidate comfortable and informed.
              </p>

              <div className="mt-10 space-y-5">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.id}
                      className="flex gap-5 rounded-3xl border border-blue-100 bg-blue-50/60 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-blue-600">
                          STEP {step.id}
                        </span>

                        <h4 className="mt-1 text-xl font-bold text-slate-900">
                          {step.title}
                        </h4>

                        <p className="mt-2 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side Images */}
            <div className="relative min-h-[600px] p-8">
              {/* Main Image */}
              <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                  src="/images/careers/ogImage.webp"
                  alt="Interview Process"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overflow Image */}
              <div className="absolute -bottom-35 left-10 h-96 w-[500px] overflow-hidden rounded-[28px] border-8 border-white shadow-2xl">
                <Image
                  src="/images/careers/Our_Value.webp"
                  alt="Team Meeting"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute right-6 top-6 rounded-3xl bg-blue-600 px-6 py-4 text-white shadow-xl">
                <h4 className="text-3xl font-bold">4 Steps</h4>
                <p className="text-sm text-blue-100">
                  Fast & Transparent Hiring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
