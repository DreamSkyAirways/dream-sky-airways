"use client";

import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaQuoteRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Delhi",
    image: "/reviews/review-1.png",
    review:
      "I got best traveeling experience through dream sky airways.",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Mumbai",
    image: "/reviews/review-2.png",
    review:
      "The best flight & bus booking site i ever visited",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Banglore",
    image: "/reviews/review-3.png", 
    review:
      "I got the best hotels through this site , best experience ever",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Goa",
    image: "/reviews/review-4.png",
    review:
      "Packages section are very helpful and affordable.",
  },
  {
    id: 5,
    name: "Vikash Gupta",
    role: "Pune",
    image: "/reviews/review-5.png",
    review:
      "UI of this site is so good like MakemyTrip.",
  },
];

export default function CustomersSaying() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 uppercase tracking-[4px] font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto text-lg">
            Real Experiences from travellers across india & abroad
          </p>
        </div>

        <div className="relative">
          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="min-w-full px-4">
                  <div className="relative bg-white rounded-[32px] border border-gray-100 shadow-xl p-10 md:p-12">
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 text-blue-100">
                      <FaQuoteRight size={70} />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="text-yellow-400 text-xl"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-4xl">
                      "{item.review}"
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                      />

                      <div>
                        <h3 className="font-bold text-xl text-slate-900">
                          {item.name}
                        </h3>

                        <p className="text-blue-600 font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 bg-white shadow-xl border border-gray-100 rounded-full w-14 h-14 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600"
          >
            <SlArrowLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 bg-white shadow-xl border border-gray-100 rounded-full w-14 h-14 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600"
          >
            <SlArrowRight  />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-blue-600 w-10"
                  : "bg-gray-300 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}