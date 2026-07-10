"use client";

import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/components/data/testimonials";
import { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
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
    left: 400,
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

return ( <section className="py-20 bg-gradient-to-b from-blue-950 to-slate-950"> <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
      <div>
        <span className="text-blue-400 font-semibold uppercase tracking-widest">
          Testimonials
        </span>

        <h2 className="text-4xl font-bold text-white mt-3">
          What Our Travelers Say
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl">
          Read real stories and experiences shared by our happy travelers.
        </p>
      </div>

      <div className="flex gap-3 mt-6 md:mt-0">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-700 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-700 transition"
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
      {testimonials.map((item) => (
        <Link
          key={item.id}
          href={`/testimonials/${item.slug}`}
          className="group flex-shrink-0 w-full sm:w-[48%] lg:w-[32%]"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-500 hover:-translate-y-2">

            {/* Cover Image */}
            <div className="relative h-40 overflow-hidden">
              <Image
                src={item.coverImage}
                alt={item.destination}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">

              <div className="flex items-center gap-4 mb-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-blue-500 object-cover"
                />

                <div>
                  <h3 className="font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.location}
                  </p>
                </div>
              </div>

              <div className="text-yellow-400 text-lg mb-3">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 line-clamp-3">
                {item.review}
              </p>

              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="inline-block bg-blue-900 text-blue-200 text-sm px-3 py-1 rounded-full">
                  {item.destination}
                </span>
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

export default Testimonials;
