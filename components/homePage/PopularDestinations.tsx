"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";
import { packages } from "@/components/data/package";

const SERIF = "'Fraunces', 'Iowan Old Style', Georgia, serif";

/**
 * Compact cards: square photo, price chip on the photo,
 * title + location + duration underneath. Slider is controlled by the visitor.
 */
export default function PopularDestinations() {
  const sliderRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = sliderRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.8, 520), behavior: "smooth" });
  };

  const arrowClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

  return (
    <section
      aria-labelledby="popular-packages-heading"
      className="mx-auto w-full max-w-[1700px] bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16"
    >
      <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
        <div className="max-w-xl">
          <h2
            id="popular-packages-heading"
            className="text-2xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl"
            style={{ fontFamily: SERIF }}
          >
            Popular holiday packages
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Flights, stays and sightseeing included. Prices are per person.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous packages" className={arrowClass}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => scrollByCard(1)} aria-label="Next packages" className={arrowClass}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={sliderRef}
        className="scrollbar-hide -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 motion-safe:scroll-smooth sm:gap-4"
      >
        {packages.map((pkg) => (
          <li
            key={pkg.id}
            className="w-[calc(50%-6px)] shrink-0 snap-start sm:w-[210px] lg:w-[230px]"
          >
            <Link
              href={`/packages/${pkg.slug}`}
              className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-200">
                <Image
                  src={pkg.images?.[0] || "/placeholder.jpg"}
                  alt={`${pkg.title} holiday package`}
                  fill
                  sizes="(min-width: 1024px) 230px, (min-width: 640px) 210px, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/55 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
                  <Star size={11} aria-hidden="true" className="fill-amber-400 text-amber-400" />
                  {pkg.rating || "4.7"}
                </span>
                <span className="absolute bottom-2 left-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm sm:text-sm">
                  {pkg.price}
                </span>
              </div>

              <h3 className="mt-2.5 text-sm font-semibold leading-snug text-neutral-900 line-clamp-1 sm:text-base">
                {pkg.title}
              </h3>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-neutral-600">
                <MapPin size={12} aria-hidden="true" className="shrink-0" />
                <span className="truncate">{pkg.location}</span>
                <span aria-hidden="true">•</span>
                <span className="shrink-0">{pkg.duration}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}