"use client";

import Link from "next/link";

const flights = [
  {
    id: 1,
    city: "Dubai",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
    price: "$299",
  },
  {
    id: 2,
    city: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
    price: "$499",
  },
  {
    id: 3,
    city: "Singapore",
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200",
    price: "$399",
  },
  {
    id: 4,
    city: "London",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200",
    price: "$549",
  },
];

export default function Flights() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Popular Destinations
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6">
            Fly To Your Dream Destination
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Discover exciting international destinations with
            affordable fares and premium travel experiences from
            Dream Sky Airways.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={flight.image}
                  alt={flight.city}
                  className="w-full h-64 object-cover"
                />

                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                  {flight.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {flight.city}
                </h3>

                <p className="text-slate-500 mt-2">
                  {flight.country}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">
                    Starting From
                  </span>

                  <span className="text-xl font-bold text-slate-900">
                    {flight.price}
                  </span>
                </div>

                <Link href="/booking">
                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                    Book Flight
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
