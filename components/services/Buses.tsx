"use client";

import Link from "next/link";

const buses = [
  {
    id: 1,
    route: "Delhi → Manali",
    type: "Volvo Sleeper",
    price: "$25",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200",
  },
  {
    id: 2,
    route: "Mumbai → Goa",
    type: "Luxury Coach",
    price: "$30",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200",
  },
  {
    id: 3,
    route: "Bangalore → Chennai",
    type: "AC Seater",
    price: "$18",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200",
  },
  {
    id: 4,
    route: "Jaipur → Udaipur",
    type: "Premium Sleeper",
    price: "$22",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1200",
  },
];

export default function Buses() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Bus Travel Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Comfortable Bus Journeys
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Travel conveniently with premium buses, luxury
            coaches, and sleeper services connecting major
            destinations at affordable prices.
          </p>
        </div>

        {/* Bus Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {buses.map((bus) => (
            <div
              key={bus.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={bus.image}
                  alt={bus.route}
                  className="w-full h-64 object-cover"
                />

                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ {bus.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {bus.route}
                </h3>

                <p className="text-slate-500 mt-2">
                  🚌 {bus.type}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-slate-500 text-sm">
                      Starting From
                    </p>

                    <h4 className="text-2xl font-bold text-blue-600">
                      {bus.price}
                    </h4>
                  </div>
                </div>

                <Link href="/booking">
                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                    Book Bus
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-24">
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Limited Time Offer
                </span>

                <h3 className="text-4xl font-bold mt-6">
                  Save Up To 35% On Bus Tickets
                </h3>

                <p className="mt-4 text-blue-100">
                  Enjoy comfortable journeys at discounted
                  prices. Book your next bus trip with Dream
                  Sky Airways and travel smarter.
                </p>

                <Link href="/buses">
                  <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition">
                    View All Routes
                  </button>
                </Link>
              </div>

              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=1400"
                  alt="Luxury Bus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              500+
            </h3>
            <p className="text-slate-600 mt-2">
              Daily Routes
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              50K+
            </h3>
            <p className="text-slate-600 mt-2">
              Monthly Travelers
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              24/7
            </h3>
            <p className="text-slate-600 mt-2">
              Customer Support
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              100+
            </h3>
            <p className="text-slate-600 mt-2">
              Cities Connected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}