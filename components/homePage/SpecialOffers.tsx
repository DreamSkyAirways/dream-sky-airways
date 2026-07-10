"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { specialOffers } from "@/components/data/specialOffers";

const SpecialOffers = () => {
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
    left: 380,
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

return ( <section className="py-20 bg-slate-50 md:px-15"> <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
      <div>
        <span className="text-blue-700 font-semibold uppercase tracking-widest">
          Special Offers
        </span>

        <h2 className="text-4xl font-bold text-gray-900 mt-3">
          Exclusive Travel Deals
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl">
          Discover limited-time travel offers and enjoy unforgettable
          experiences at unbeatable prices.
        </p>
      </div>

     <div className="hidden sm:flex items-center gap-2">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>

    {/* Slider */}
    <div
      ref={sliderRef}
      className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
    >
      {specialOffers.map((offer) => (
        <Link
          key={offer.id}
          href={`/offers/${offer.slug}`}
          className="group flex-shrink-0 w-full sm:w-[48%] lg:w-[32%]"
        >
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            {/* Image */}
            <div className="relative h-35 overflow-hidden">
              <Image
                src={offer.images[0]}
                alt={offer.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {offer.discount}
              </div>

              <div className="absolute top-4 right-4 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                ⭐ {offer.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">

              <span className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full mb-3">
                {offer.category}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {offer.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3">
                📍 {offer.location}
              </p>

              <p className="text-gray-600 line-clamp-2 mb-4">
                {offer.description}
              </p>

              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <p className="text-sm text-gray-400 line-through">
                    {offer.originalPrice}
                  </p>

                  <p className="text-2xl font-bold text-blue-700">
                    {offer.price}
                  </p>
                </div>

                <button className="px-5 py-2.5 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition">
                  View Offer
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

export default SpecialOffers;
