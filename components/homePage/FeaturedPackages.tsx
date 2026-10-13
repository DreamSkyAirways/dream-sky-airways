"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";
import { featuredHotels } from "@/components/data/featuredPackages";

const SERIF = "'Fraunces', 'Iowan Old Style', Georgia, serif";

/**
 * Hotels slider. Landscape photo, details underneath, price on the right.
 * Same header and arrow style as the packages section; no auto-slide.
 */
const FeaturedPackages = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = sliderRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.8, 560), behavior: "smooth" });
  };

  const arrowClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

  return (
    <section
      aria-labelledby="featured-hotels-heading"
      className="mx-auto w-full max-w-[1700px] bg-neutral-50 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16"
    >
      <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
        <div className="max-w-xl">
          <h2
            id="featured-hotels-heading"
            className="text-2xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl"
            style={{ fontFamily: SERIF }}
          >
            Handpicked hotels for every kind of stay
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Comfortable rooms, good locations and guest-rated service.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous hotels" className={arrowClass}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => scrollByCard(1)} aria-label="Next hotels" className={arrowClass}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={sliderRef}
        className="scrollbar-hide -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 motion-safe:scroll-smooth sm:gap-5"
      >
        {featuredHotels.map((hotel) => (
          <li
            key={hotel.id}
            className="w-[78%] shrink-0 snap-start sm:w-[290px] lg:w-[310px]"
          >
            <Link
              href={`/hotels/${hotel.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src={hotel.images?.[0] || "/placeholder.jpg"}
                  alt={`${hotel.title} hotel`}
                  fill
                  sizes="(min-width: 1024px) 310px, (min-width: 640px) 290px, 78vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-neutral-900 sm:left-3 sm:top-3 sm:text-xs">
                  {hotel.category || "Luxury Stay"}
                </span>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold leading-snug text-neutral-900 line-clamp-1">
                    {hotel.title}
                  </h3>
                  <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-neutral-900">
                    <Star size={14} aria-hidden="true" className="fill-amber-500 text-amber-500" />
                    {hotel.rating || "4.8"}
                  </span>
                </div>
                <p className="mt-1 flex items-center gap-1 text-sm text-neutral-600">
                  <MapPin size={14} aria-hidden="true" className="shrink-0" />
                  <span className="truncate">{hotel.location}</span>
                </p>
                <p className="mt-3 border-t border-neutral-200 pt-3 text-sm text-neutral-600">
                  From{" "}
                  <span className="text-lg font-semibold text-neutral-900">{hotel.price}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedPackages;