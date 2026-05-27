"use client";
import React, { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Search,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
    hotels: "5,372 accommodations",
  },
  {
    id: 2,
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66",
    hotels: "4,177 accommodations",
  },
  {
    id: 3,
    name: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    hotels: "2,735 accommodations",
  },
  {
    id: 4,
    name: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    hotels: "12,786 accommodations",
  },
  {
    id: 5,
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    hotels: "9,254 accommodations",
  },
];

const Destination = () => {
  const [selectedDestination, setSelectedDestination] =
    useState("Bangalore");

  const [stayType, setStayType] =
    useState("Overnight Stays");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [adults, setAdults] = useState(1);

  const handleSearch = () => {
    alert(`
Destination: ${selectedDestination}
Stay Type: ${stayType}
From: ${fromDate}
To: ${toDate}
Adults: ${adults}
    `);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-8">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-sky-900">
          Dream Sky Airways
        </h1>

        <p className="text-gray-600 mt-2">
          Luxury Hotels, Overnight Stays & Day Use Stays
        </p>
      </div>

      {/* Destinations */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Top Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {destinations.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setSelectedDestination(item.name)
              }
              className={`bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedDestination === item.name
                  ? "border-4 border-blue-500"
                  : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.hotels}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto">

        {/* Stay Type Buttons */}
        <div className="flex gap-4 mb-8">

          <button
            onClick={() =>
              setStayType("Overnight Stays")
            }
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              stayType === "Overnight Stays"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Overnight Stays
          </button>

          <button
            onClick={() =>
              setStayType("Day Use Stays")
            }
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              stayType === "Day Use Stays"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Day Use Stays
          </button>
        </div>

        {/* Destination */}
        <div className="border rounded-2xl p-5 flex items-center gap-4 mb-6">
          <MapPin size={28} />

          <input
            type="text"
            value={selectedDestination}
            onChange={(e) =>
              setSelectedDestination(e.target.value)
            }
            placeholder="Enter Destination"
            className="w-full outline-none text-xl"
          />
        </div>

        {/* Dates + Adults */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* From Date */}
          <div className="border rounded-2xl p-5 flex items-center gap-4">
            <CalendarDays size={28} />

            <div className="w-full">
              <label className="block text-gray-500 mb-1">
                From Date
              </label>

              <input
                type="date"
                value={fromDate}
                onChange={(e) =>
                  setFromDate(e.target.value)
                }
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* To Date */}
          <div className="border rounded-2xl p-5 flex items-center gap-4">
            <CalendarDays size={28} />

            <div className="w-full">
              <label className="block text-gray-500 mb-1">
                To Date
              </label>

              <input
                type="date"
                value={toDate}
                onChange={(e) =>
                  setToDate(e.target.value)
                }
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Adults */}
          <div className="border rounded-2xl p-5 flex items-center gap-4">
            <Users size={28} />

            <div className="w-full">
              <label className="block text-gray-500 mb-1">
                Adults
              </label>

              <select
                value={adults}
                onChange={(e) =>
                  setAdults(Number(e.target.value))
                }
                className="w-full outline-none"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} Adult{num > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-10 flex justify-center">

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-14 py-4 rounded-full text-xl font-bold flex items-center gap-3 shadow-lg"
          >
            <Search size={24} />
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destination;