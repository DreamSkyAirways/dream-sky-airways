"use client";

import React, { useState } from "react";
import { CalendarDays, Clock, MapPin, Search, Car } from "lucide-react";
import { GoArrowSwitch } from "react-icons/go";
import DepartureCalendar from "./DepartureCalendar";
import { useRouter } from "next/navigation";
import CityInputField from "./CitySelectDropdown";

const CarTabs = ["Outstation One-Way", "Outstation Round-Trip", "Airport Transfer"];

interface CarFormProps {
  isDark?: boolean;
}

const CarForm = ({ isDark = true }: CarFormProps) => {
  const router = useRouter();
  const [carTab, setCarTab] = useState<
    "Outstation One-Way" | "Outstation Round-Trip" | "Airport Transfer"
  >("Outstation One-Way");

  const [carData, setCarData] = useState({
    pickupCity: "",
    dropCity: "",
    pickupDate: "",
    pickupTime: "10:00",
    carType: "Sedan",
  });

  const handleSwap = () => {
    setCarData((prev) => ({
      ...prev,
      pickupCity: prev.dropCity,
      dropCity: prev.pickupCity,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCarData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Car/Cab Search:", { carTab, ...carData });
    router.push("/cabs");
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Car Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
        {CarTabs.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setCarTab(type as typeof carTab)}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-200 border text-sm sm:text-base ${isDark
                ? carTab === type
                  ? "bg-white text-black font-extrabold border-white shadow-lg scale-105"
                  : "bg-slate-800/80 text-gray-200 border-white/10 hover:border-white/40 hover:text-white"
                : carTab === type
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Main Form Container */}
      <form onSubmit={handleSubmit}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-3.5 relative p-4 sm:p-5 rounded-3xl border ${isDark
              ? "bg-slate-900/90 backdrop-blur-2xl border-white/10 text-white"
              : "bg-gray-50 border-gray-200 text-gray-900"
            }`}
        >
          {/* Pickup City */}
          <div className="xl:col-span-3">
            <CityInputField
              label="Pickup City"
              icon={<MapPin size={16} />}
              name="pickupCity"
              value={carData.pickupCity}
              onChange={(val) => setCarData((prev) => ({ ...prev, pickupCity: val }))}
              placeholder="Delhi"
              subLabel="Where do you start?"
              isDark={isDark}
            />
          </div>

          {/* Swap Button */}
          <div className="hidden xl:flex absolute left-[23.5%] top-[50%] -translate-y-1/2 -translate-x-1/2 z-[99]">
            <button
              type="button"
              onClick={handleSwap}
              className={`p-2.5 rounded-full border shadow-xl hover:rotate-180 transition-all duration-300 ${isDark
                  ? "bg-slate-800 border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
                  : "bg-white border-gray-300 text-black hover:bg-gray-100"
                }`}
            >
              <GoArrowSwitch className="text-xl" />
            </button>
          </div>

          {/* Drop City */}
          <div className="xl:col-span-3">
            <CityInputField
              label="Drop City"
              icon={<MapPin size={16} />}
              name="dropCity"
              value={carData.dropCity}
              onChange={(val) => setCarData((prev) => ({ ...prev, dropCity: val }))}
              placeholder="Jaipur"
              subLabel="Destination City"
              isDark={isDark}
            />
          </div>

          {/* Pickup Date */}
          <div
            className={
              isDark
                ? "xl:col-span-2 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all"
                : "xl:col-span-2 p-3 border-b md:border-b xl:border-r border-gray-200"
            }
          >
            <div
              className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"
                }`}
            >
              <CalendarDays size={15} />
              <span>Pickup Date</span>
            </div>
            <DepartureCalendar isDark={isDark} />
          </div>

          {/* Pickup Time */}
          <div
            className={
              isDark
                ? "xl:col-span-2 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all"
                : "xl:col-span-2 p-3 border-b md:border-b xl:border-r border-gray-200"
            }
          >
            <div
              className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"
                }`}
            >
              <Clock size={15} />
              <span>Pickup Time</span>
            </div>
            <input
              type="time"
              name="pickupTime"
              value={carData.pickupTime}
              onChange={handleChange}
              className={`w-full bg-transparent font-extrabold text-xl sm:text-2xl outline-none cursor-pointer ${isDark ? "text-white [color-scheme:dark]" : "text-gray-900"
                }`}
            />
          </div>

          {/* Car Type */}
          <div
            className={
              isDark
                ? "xl:col-span-2 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all"
                : "xl:col-span-2 p-3"
            }
          >
            <div
              className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"
                }`}
            >
              <Car size={15} />
              <span>Car Type</span>
            </div>
            <select
              name="carType"
              value={carData.carType}
              onChange={handleChange}
              className={`w-full bg-transparent font-extrabold text-base sm:text-lg outline-none cursor-pointer border-none focus:ring-0 ${isDark ? "text-white bg-slate-900" : "text-gray-900 bg-white"
                }`}
            >
              <option value="Sedan">Sedan (4 Seater)</option>
              <option value="SUV">SUV (6-7 Seater)</option>
              <option value="Hatchback">Hatchback (4 Seater)</option>
              <option value="Luxury">Luxury Car</option>
              <option value="Van">Van / Tempo</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-black hover:bg-neutral-800 transition-all text-white px-8 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Search Cabs / Cars</span>
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
