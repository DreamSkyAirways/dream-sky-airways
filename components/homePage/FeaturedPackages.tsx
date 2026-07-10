"use client";

import Image from "next/image";
import Link from "next/link";
import {featuredHotels} from "@/components/data/featuredPackages";
import {useRef, useEffect} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const FeaturedPackages = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-white md:px-15">
      {" "}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-widest">
              Featured Hotels
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Handpicked Hotel Experiences
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl">
              Discover our most popular tour packages designed for unforgettable
              journeys across India.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-all duration-300"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-all duration-300"
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
          {featuredHotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/hotels/${hotel.slug}`}
              className="group flex-shrink-0 w-full sm:w-[48%] lg:w-[32%]"
            >
              <div className="overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Hotel Image */}
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={hotel.images[0]}
                    alt={hotel.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Category */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {hotel.category}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-blue-700 text-white text-sm px-3 py-1 rounded-full">
                    ⭐ {hotel.rating}
                  </div>

                  {/* Stars */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {"⭐".repeat(hotel.star)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">
                    📍 {hotel.location}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 line-clamp-2">
                    {hotel.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 line-clamp-1">
                    {hotel.address}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-3 mt-5 text-center">
                    <div className="bg-gray-50 rounded-xl py-3">
                      <p className="text-xs text-gray-500">Rooms</p>
                      <p className="font-semibold">{hotel.rooms}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl py-3">
                      <p className="text-xs text-gray-500">Check-In</p>
                      <p className="font-semibold">{hotel.checkIn}</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl py-3">
                      <p className="text-xs text-gray-500">Check-Out</p>
                      <p className="font-semibold">{hotel.checkOut}</p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {hotel.amenities.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t mt-6 pt-5">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>

                      <p className="text-3xl font-bold text-blue-700">
                        {hotel.price}
                      </p>

                      <p className="text-xs text-gray-400">per night</p>
                    </div>

                    <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-2xl font-medium transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
