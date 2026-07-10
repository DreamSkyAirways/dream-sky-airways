"use client";

import {
  ShieldCheck,
  Headphones,
  BadgeDollarSign,
  Plane,
  Clock3,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Best Travel Packages",
    description:
      "Carefully curated domestic and international tour packages for every traveler.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    description:
      "Get the most competitive prices with no hidden charges and complete transparency.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our travel experts are available round the clock to assist you anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Booking",
    description:
      "Your payments and personal information are protected with secure booking systems.",
  },
  {
    icon: Clock3,
    title: "Fast Booking Process",
    description:
      "Book flights, hotels, and holiday packages quickly with a hassle-free experience.",
  },
  {
    icon: Star,
    title: "Trusted by Thousands",
    description:
      "Thousands of happy travelers trust us for memorable travel experiences.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-slate-950 md:px-15">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <span className="text-blue-400 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Your Trusted Travel Partner
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            We make every journey unforgettable with premium travel services,
            expert guidance, and exceptional customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-900 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-all">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400">10K+</h3>
            <p className="text-gray-300 mt-2">Happy Travelers</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400">500+</h3>
            <p className="text-gray-300 mt-2">Tour Packages</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400">50+</h3>
            <p className="text-gray-300 mt-2">Destinations</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400">24/7</h3>
            <p className="text-gray-300 mt-2">Customer Support</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;