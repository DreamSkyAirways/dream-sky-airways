"use client";

import Link from "next/link";

const hotels = [
  {
    id: 1,
    name: "Skyline Grand Hotel",
    location: "Dubai, UAE",
    price: "$120/Night",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
  },
  {
    id: 2,
    name: "Royal Paris Suites",
    location: "Paris, France",
    price: "$180/Night",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
  },
  {
    id: 3,
    name: "Ocean Bay Resort",
    location: "Singapore",
    price: "$140/Night",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
  },
  {
    id: 4,
    name: "Elite London Palace",
    location: "London, UK",
    price: "$220/Night",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
  },
];

export default function Hotels() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Luxury Stays
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Find Your Perfect Hotel
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Experience comfort and luxury with our carefully
            selected hotels and resorts across the world most
            popular destinations.
          </p>
        </div>

        {/* Hotel Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-64 object-cover"
                />

                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ {hotel.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {hotel.name}
                </h3>

                <p className="text-slate-500 mt-2">
                  📍 {hotel.location}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-slate-500 text-sm">
                      Starting From
                    </p>
                    <h4 className="text-2xl font-bold text-blue-600">
                      {hotel.price}
                    </h4>
                  </div>
                </div>

                <Link href="/booking">
                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                    Reserve Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Banner */}
        <div className="mt-24">
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Premium Hotel Deals
                </span>

                <h3 className="text-4xl font-bold mt-6">
                  Save Up To 40% On Luxury Hotels
                </h3>

                <p className="mt-4 text-blue-100">
                  Book your dream accommodation and enjoy
                  exclusive discounts available only through
                  Dream Sky Airways.
                </p>

                <Link href="/hotels">
                  <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition">
                    Explore Hotels
                  </button>
                </Link>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1400"
                  alt="Luxury Hotel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
