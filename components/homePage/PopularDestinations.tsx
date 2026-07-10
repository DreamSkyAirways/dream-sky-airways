"use client";

import Link from "next/link";
import Image from "next/image";
import { packages } from "@/components/data/package";
import { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PopularDestinations() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;

    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 10
    ) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: 365,
        behavior: "smooth",
      });
    }
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-2 bg-white md:px-15">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Explore Amazing Tour Packages
            </h2>

           
          </div>

          {/* Navigation */}
              <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={scrollLeft}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-800 transition-all duration-300"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    onClick={scrollRight}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-800 transition-all duration-300"
                  >
                    <FaChevronRight />
                  </button>
                </div>
            </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex-shrink-0 w-full sm:w-[48%] lg:w-[32%]"
            >
              <Link href={`/packages/${pkg.slug}`}>
                <div className="group overflow-hidden rounded-2xl bg-blue-950 border border-blue-900 hover:border-blue-600 transition-all duration-300 hover:-translate-y-2">

                  {/* Image */}
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={pkg.images?.[0] || "/placeholder.jpg"}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />

                    <span className="absolute top-4 left-4 bg-blue-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                      {pkg.duration}
                    </span>

                    <span className="absolute top-4 right-4 bg-white text-blue-950 text-sm font-bold px-3 py-1 rounded-lg">
                      ⭐ {pkg.rating}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-blue-300 text-sm mb-2">
                      📍 {pkg.location}
                    </p>

                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center justify-between border-t border-blue-900 pt-4">
                      <div>
                        <p className="text-gray-400 text-sm">
                          Starting From
                        </p>

                        <p className="text-2xl font-bold text-blue-400">
                          {pkg.price}
                        </p>
                      </div>

                      <button className="px-4 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 text-white font-medium transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}