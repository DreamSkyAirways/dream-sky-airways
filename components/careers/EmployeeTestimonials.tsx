"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "HR Executive",
    image: "/images/careers/testimonial-1.jpg",
    review:
      "Working at Dream Sky Airways has been an incredible journey. The supportive culture and growth opportunities have helped me advance both professionally and personally.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Frontend Developer",
    image: "/images/careers/testimonial-2.jpg",
    review:
      "The technology team encourages innovation and collaboration. Every project gives us the freedom to learn new skills and build meaningful products.",
  },
  {
    id: 3,
    name: "Anjali Singh",
    role: "Tour Manager",
    image: "/images/careers/testimonial-3.jpg",
    review:
      "I love being part of a company that values customer happiness and employee well-being equally. Every day brings exciting challenges and experiences.",
  },
];

const EmployeeTestimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-md bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Employee Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Hear From Our Team
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Discover what our employees say about working at Dream Sky Airways
            and how we foster a culture of growth, innovation, and excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 opacity-10">
                <Quote size={80} className="text-blue-600" />
              </div>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-blue-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-sm font-medium text-blue-600">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="mt-8 leading-8 text-slate-600">
                "{item.review}"
              </p>

              {/* Bottom Border */}
              <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-32" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 overflow-hidden rounded-[40px] bg-blue-600 p-12 text-white shadow-2xl">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-4xl font-bold">
                Become Part of Our Story
              </h3>

              <p className="mt-4 max-w-2xl text-lg text-blue-100">
                Join a passionate team that is redefining travel experiences and
                creating opportunities for growth, innovation, and success.
              </p>
            </div>

            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonials;
