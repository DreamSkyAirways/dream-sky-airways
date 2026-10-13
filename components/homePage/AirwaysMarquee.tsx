"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Plane } from "lucide-react";

/**
 * SEO notes
 * - Real heading (h2), a descriptive paragraph and crawlable <a> links
 *   instead of one brand name repeated 24 times.
 * - The scrolling copy is aria-hidden and not focusable, so crawlers and
 *   screen readers see each route once.
 * - Airline structured data (JSON-LD) is included.
 * Edit COPY and ROUTES to match your real offer and URLs.
 */
const COPY = {
  heading: "Cheap flights across India and abroad with Dream Sky Airways",
  body: "Compare fares, pick your seat and book in minutes. Dream Sky Airways connects major Indian cities and popular international routes, with free date changes on selected fares and 24/7 support.",
};

const ROUTES = [
  { label: "Delhi to Mumbai", href: "/flights/delhi-to-mumbai" },
  { label: "Delhi to Goa", href: "/flights/delhi-to-goa" },
  { label: "Mumbai to Bengaluru", href: "/flights/mumbai-to-bengaluru" },
  { label: "Delhi to Dubai", href: "/flights/delhi-to-dubai" },
  { label: "Kolkata to Delhi", href: "/flights/kolkata-to-delhi" },
  { label: "Delhi to Bangkok", href: "/flights/delhi-to-bangkok" },
  { label: "Chennai to Singapore", href: "/flights/chennai-to-singapore" },
  { label: "Mumbai to London", href: "/flights/mumbai-to-london" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Airline",
  name: "Dream Sky Airways",
  description: COPY.body,
};

function RouteLink({
  label,
  href,
  hidden = false,
}: {
  label: string;
  href: string;
  hidden?: boolean;
}) {
  return (
    <Link
      href={href}
      tabIndex={hidden ? -1 : undefined}
      className="flex shrink-0 items-center gap-3 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:text-base"
    >
      <Plane className="h-4 w-4 -rotate-45 text-red-600" aria-hidden="true" />
      {label}
    </Link>
  );
}

export default function AirwaysMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="airways-heading"
      className="relative z-20 my-10 w-full bg-neutral-100 py-12 text-neutral-900 sm:my-16 sm:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2
            id="airways-heading"
            className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif" }}
          >
            {COPY.heading}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-neutral-600">
            {COPY.body}
          </p>
        </div>

        <p className="mb-4 mt-10 text-sm font-medium text-neutral-500">
          Popular routes
        </p>
      </div>

      {reduceMotion ? (
        /* Static list for people who prefer reduced motion */
        <nav aria-label="Popular flight routes" className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <ul className="flex flex-wrap gap-3">
            {ROUTES.map((r) => (
              <li key={r.href}>
                <RouteLink {...r} />
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div className="relative overflow-hidden">
          <nav aria-label="Popular flight routes">
            <motion.ul
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {ROUTES.map((r) => (
                <li key={r.href} className="mr-3">
                  <RouteLink {...r} />
                </li>
              ))}
              {/* Duplicate set for a seamless loop; hidden from crawlers and assistive tech */}
              {ROUTES.map((r) => (
                <li key={`dup-${r.href}`} aria-hidden="true" className="mr-3">
                  <RouteLink {...r} hidden />
                </li>
              ))}
            </motion.ul>
          </nav>
          {/* Soft edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-100 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-100 to-transparent" />
        </div>
      )}
    </section>
  );
}