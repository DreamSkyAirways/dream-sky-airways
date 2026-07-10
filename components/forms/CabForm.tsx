"use client";

import React, { useState } from "react";
import { CalendarDays, MapPin, Search, Users, Clock } from "lucide-react";
import DepartureCalendar from "./DepartureCalendar";
import { useRouter } from "next/navigation";

const CarForm = () => {
  const router = useRouter();
  const [carData, setCarData] = useState({
    pickupCity: "",
    dropCity: "",
    pickupDate: "",
    pickupTime: "",
    carType: "Sedan",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCarData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Car/Cab Search:", carData);
    // API call here
    router.push("/cabs")
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Main Form Container */}
      <div >
        <form onSubmit={handleSubmit} className="p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Pickup City */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <MapPin size={20} />
                <span>Pickup City</span>
              </div>
              <input
                type="text"
                name="pickupCity"
                value={carData.pickupCity}
                onChange={handleChange}
                placeholder="Delhi"
                className="w-full text-3xl font-semibold outline-none placeholder:text-gray-400 border-b pb-3"
              />
              <p className="text-gray-500 text-sm mt-1">Where do you want to start?</p>
            </div>

            {/* Drop City */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <MapPin size={20} />
                <span>Drop City</span>
              </div>
              <input
                type="text"
                name="dropCity"
                value={carData.dropCity}
                onChange={handleChange}
                placeholder="Jaipur (Optional)"
                className="w-full text-3xl font-semibold outline-none placeholder:text-gray-400 border-b pb-3"
              />
              <p className="text-gray-500 text-sm mt-1">Same as pickup if one-way</p>
            </div>

            {/* Pickup Date */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <CalendarDays size={20} />
                <span>Pickup Date</span>
              </div>
             <DepartureCalendar/>
            </div>

            {/* Pickup Time & Car Type */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <Clock size={20} />
                <span>Pickup Time</span>
              </div>
              <input
                type="time"
                name="pickupTime"
                value={carData.pickupTime}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl p-5 text-lg outline-none focus:border-blue-500"
              />
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <Users size={20} />
                <span>Car Type</span>
              </div>
              <select
                name="carType"
                value={carData.carType}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl p-5 text-lg outline-none focus:border-blue-500"
              >
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury Car</option>
                <option value="Van">Van / Tempo</option>
              </select>
            </div>
          </div>

          {/* Search Button - Bottom */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30"
            >
              <Search size={28} />
              Search Cabs / Cars
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;