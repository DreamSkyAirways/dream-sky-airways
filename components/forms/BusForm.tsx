"use client";

import React, { useState } from "react";
import { CalendarDays, MapPin, Search } from "lucide-react";
import { GoArrowSwitch } from "react-icons/go";
import DepartureCalendar from "./DepartureCalendar";
import { useRouter } from "next/navigation";
import CityInputField from "./CitySelectDropdown";

const BusTabs = ["One Way Bus", "Round Trip Bus"];

interface BusFormProps {
  isDark?: boolean;
}

const BusForm = ({ isDark = true }: BusFormProps) => {
  const router = useRouter();
  const [busType, setBusType] = useState<"One Way Bus" | "Round Trip Bus">("One Way Bus");
  const [busData, setBusData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
  });

  const handleSwap = () => {
    setBusData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Bus Search:", { busType, ...busData });
    router.push("/buses");
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Bus Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
        {BusTabs.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setBusType(type as typeof busType)}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-200 border text-sm sm:text-base ${
              isDark
                ? busType === type
                  ? "bg-white text-black font-extrabold border-white shadow-lg scale-105"
                  : "bg-slate-800/80 text-gray-200 border-white/10 hover:border-white/40 hover:text-white"
                : busType === type
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Main Form Container */}
      <form onSubmit={handleSearch}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-3.5 relative p-4 sm:p-5 rounded-3xl border ${
            isDark
              ? "bg-slate-900/90 backdrop-blur-2xl border-white/10 text-white"
              : "bg-gray-50 border-gray-200 text-gray-900"
          }`}
        >
          {/* From */}
          <div className="xl:col-span-4">
            <CityInputField
              label="From"
              icon={<MapPin size={16} />}
              name="from"
              value={busData.from}
              onChange={(val) => setBusData((prev) => ({ ...prev, from: val }))}
              placeholder="Delhi"
              subLabel="Departure City"
              isDark={isDark}
            />
          </div>

          {/* Swap Button */}
          <div className="hidden xl:flex absolute left-[32.5%] top-[50%] -translate-y-1/2 -translate-x-1/2 z-[99]">
            <button
              type="button"
              onClick={handleSwap}
              className={`p-2.5 rounded-full border shadow-xl hover:rotate-180 transition-all duration-300 ${
                isDark
                  ? "bg-slate-800 border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
                  : "bg-white border-gray-300 text-black hover:bg-gray-100"
              }`}
            >
              <GoArrowSwitch className="text-xl" />
            </button>
          </div>

          {/* To */}
          <div className="xl:col-span-4">
            <CityInputField
              label="To"
              icon={<MapPin size={16} />}
              name="to"
              value={busData.to}
              onChange={(val) => setBusData((prev) => ({ ...prev, to: val }))}
              placeholder="Jaipur"
              subLabel="Destination City"
              isDark={isDark}
            />
          </div>

          {/* Departure Date */}
          <div
            className={
              isDark
                ? `${busType === "Round Trip Bus" ? "xl:col-span-2" : "xl:col-span-4"} bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all`
                : "xl:col-span-4 p-3 border-b md:border-b xl:border-r border-gray-200"
            }
          >
            <div
              className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${
                isDark ? "text-gray-300" : "text-gray-500"
              }`}
            >
              <CalendarDays size={15} />
              <span>Travel Date</span>
            </div>
            <DepartureCalendar isDark={isDark} />
          </div>

          {/* Return Date (if Round Trip) */}
          {busType === "Round Trip Bus" && (
            <div
              className={
                isDark
                  ? "xl:col-span-2 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all"
                  : "xl:col-span-2 p-3"
              }
            >
              <div
                className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                <CalendarDays size={15} />
                <span>Return Date</span>
              </div>
              <DepartureCalendar isDark={isDark} />
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-black hover:bg-neutral-800 transition-all text-white px-8 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Search Buses</span>
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusForm;

