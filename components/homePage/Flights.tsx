"use client";

import React, { useState } from "react";
import {
  Plane,
  MapPin,
  CalendarDays,
  Users,
  Search,
  ArrowLeftRight,
} from "lucide-react";

const Flights = () => {
  const [tripType, setTripType] =
    useState("One-way");

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [departureDate, setDepartureDate] =
    useState("");

  const [returnDate, setReturnDate] =
    useState("");

  const [passengers, setPassengers] =
    useState(1);

  const [flightClass, setFlightClass] =
    useState("Economy");

  const handleSearch = () => {
    alert(`
Trip Type: ${tripType}
From: ${from}
To: ${to}
Departure: ${departureDate}
Return: ${returnDate}
Passengers: ${passengers}
Class: ${flightClass}
    `);
  };

  return (
    <div className="w-full bg-[#f5f5f5] py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-10">

        <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-sm">
          Dream Sky Airways
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-2">
          Search & Book Flights
        </h2>

        <p className="text-gray-500 mt-3 text-lg">
          Book One-way & Round-trip Flights Worldwide
        </p>
      </div>

      {/* Flight Search Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl p-6 sm:p-10">

        {/* Trip Type */}
        <div className="flex gap-4 mb-8">

          <button
            onClick={() =>
              setTripType("One-way")
            }
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              tripType === "One-way"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            One-way
          </button>

          <button
            onClick={() =>
              setTripType("Round-trip")
            }
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              tripType === "Round-trip"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Round-trip
          </button>
        </div>

        {/* From & To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative mb-8">

          {/* Flying From */}
          <div className="border rounded-2xl p-6 flex items-center gap-4 bg-white min-h-[100px]">

            <Plane className="text-gray-500" />

            <input
              type="text"
              placeholder="Flying from"
              value={from}
              onChange={(e) =>
                setFrom(e.target.value)
              }
              className="w-full outline-none text-lg"
            />
          </div>

          {/* Flying To */}
          <div className="border rounded-2xl p-6 flex items-center gap-4 bg-white min-h-[100px]">

            <MapPin className="text-gray-500" />

            <input
              type="text"
              placeholder="Flying to"
              value={to}
              onChange={(e) =>
                setTo(e.target.value)
              }
              className="w-full outline-none text-lg"
            />
          </div>

          {/* Swap Icon */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-xl items-center justify-center">
            <ArrowLeftRight className="text-gray-700" />
          </div>
        </div>

        {/* Dates + Passenger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">

          {/* Departure Date */}
          <div className="border rounded-2xl p-6 flex items-center gap-4 min-h-[120px]">

            <CalendarDays className="text-gray-500" />

            <div className="w-full">
              <label className="text-sm text-gray-500">
                Departure
              </label>

              <input
                type="date"
                value={departureDate}
                onChange={(e) =>
                  setDepartureDate(e.target.value)
                }
                className="w-full outline-none mt-2 text-lg"
              />
            </div>
          </div>

          {/* Return Date */}
          {tripType === "Round-trip" && (
            <div className="border rounded-2xl p-6 flex items-center gap-4 min-h-[120px]">

              <CalendarDays className="text-gray-500" />

              <div className="w-full">
                <label className="text-sm text-gray-500">
                  Return Date
                </label>

                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) =>
                    setReturnDate(e.target.value)
                  }
                  className="w-full outline-none mt-2 text-lg"
                />
              </div>
            </div>
          )}

          {/* Passenger & Class */}
          <div className="border rounded-2xl p-6 flex items-center gap-4 min-h-[120px]">

            <Users className="text-gray-500" />

            <div className="w-full flex flex-col gap-4">

              {/* Passengers */}
              <div>
                <label className="text-sm text-gray-500">
                  Passengers
                </label>

                <select
                  value={passengers}
                  onChange={(e) =>
                    setPassengers(Number(e.target.value))
                  }
                  className="w-full outline-none mt-2 text-lg"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option
                      key={num}
                      value={num}
                    >
                      {num} Passenger
                      {num > 1 && "s"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Flight Class */}
              <div>
                <label className="text-sm text-gray-500">
                  Flight Class
                </label>

                <select
                  value={flightClass}
                  onChange={(e) =>
                    setFlightClass(e.target.value)
                  }
                  className="w-full outline-none mt-2 text-lg"
                >
                  <option>
                    Economy
                  </option>

                  <option>
                    Business
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center mt-12">

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-16 py-4 rounded-full text-xl font-semibold flex items-center gap-3 shadow-lg"
          >
            <Search size={24} />

            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flights;