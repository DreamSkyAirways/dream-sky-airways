"use client";

import Link from "next/link";

const packages = [
  {
    id: 1,
    title: "Maldives Honeymoon",
    duration: "5 Days / 4 Nights",
    price: "$799",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
  },

  {
    id: 2,
    title: "Dubai Luxury Tour",
    duration: "6 Days / 5 Nights",
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
  },

  {
    id: 3,
    title: "Swiss Alps Adventure",
    duration: "7 Days / 6 Nights",
    price: "$1199",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  },

  {
    id: 4,
    title: "Bali Beach Escape",
    duration: "4 Days / 3 Nights",
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200",
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Holiday Packages
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6">
            Explore Our Best Tour Packages
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Discover exciting destinations with affordable holiday packages
            specially designed for families, couples, and adventure lovers.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-72 object-cover"
                />

                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                  {pkg.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {pkg.title}
                </h3>

                <p className="text-slate-500 mt-3">📅 {pkg.duration}</p>

                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <p className="text-slate-500 text-sm">Starting From</p>

                    <h4 className="text-2xl font-bold text-blue-600">
                      {pkg.price}
                    </h4>
                  </div>
                </div>

                <Link href="/booking">
                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                    Book Package
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}

        <div className="mt-24">
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Special Holiday Deals
                </span>

                <h3 className="text-4xl font-bold mt-6">
                  Save Up To 50% On Tour Packages
                </h3>

                <p className="mt-4 text-blue-100">
                  Book your dream vacation with Dream Sky Airways and enjoy
                  premium experiences at unbeatable prices.
                </p>

                <Link href="/packages">
                  <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition">
                    Explore Packages
                  </button>
                </Link>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400"
                  alt="Travel Package"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="bg-slate-50 p-8 rounded-2xl text-center shadow">
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>

            <p className="text-slate-600 mt-2">Tour Packages</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl text-center shadow">
            <h3 className="text-4xl font-bold text-blue-600">50K+</h3>

            <p className="text-slate-600 mt-2">Happy Travelers</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl text-center shadow">
            <h3 className="text-4xl font-bold text-blue-600">40+</h3>

            <p className="text-slate-600 mt-2">Countries Covered</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl text-center shadow">
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>

            <p className="text-slate-600 mt-2">Travel Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
