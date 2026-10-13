"use client";

import React from "react";
import { Plane, Headphones, ShieldCheck, Clock } from "lucide-react";

const SERIF = "'Fraunces', 'Iowan Old Style', Georgia, serif";

const features = [
  {
    icon: Headphones,
    title: "24/7 support",
    text: "Our travel experts are available round the clock, before and during your trip.",
  },
  {
    icon: Plane,
    title: "Curated packages",
    text: "Handpicked destinations and tour packages for every budget.",
  },
  {
    icon: ShieldCheck,
    title: "Best price guarantee",
    text: "Clear prices on flights and hotels, with no hidden charges at checkout.",
  },
  {
    icon: Clock,
    title: "Instant booking",
    text: "Book securely in minutes and get your ticket confirmation right away.",
  },
];

/**
 * Design: one dark panel closes the page's long run of white sections.
 * Heading on the left, four plain feature blocks on the right with a
 * hairline above each; no icon circles or card boxes.
 */
export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="mx-auto w-full max-w-[1700px] px-4 py-12 sm:px-8 sm:py-20 lg:px-12 xl:px-16"
    >
      <div className="rounded-3xl bg-neutral-900 px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2
              id="why-choose-us-heading"
              className="text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              style={{ fontFamily: SERIF }}
            >
              Why travellers book with us
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Book flights, hotels and holiday packages across India and
              worldwide in one place, with support and fair prices at every
              step.
            </p>
          </div>

          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="border-t border-white/20 pt-5">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}