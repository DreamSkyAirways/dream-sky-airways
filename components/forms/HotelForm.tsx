"use client";

import React, { useState, useRef, useEffect } from "react";
import { Building2, CalendarDays, ChevronDown, Search, Users } from "lucide-react";
import DepartureCalendar from "./DepartureCalendar";
import { useRouter } from "next/navigation";
import CityInputField from "./CitySelectDropdown";

const hotelFilters = [
  "Free Breakfast",
  "Couple Friendly",
  "Free Cancellation",
  "Luxury Hotels",
];

interface HotelFormProps {
  isDark?: boolean;
}

const HotelForm = ({ isDark = true }: HotelFormProps) => {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const [showGuests, setShowGuests] = useState(false);
  const guestRef = useRef<HTMLDivElement | null>(null);

  const toggleGuests = () => {
    const nextState = !showGuests;
    setShowGuests(nextState);
    if (nextState && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("form-popover-open", { detail: { id: "hotel-guests-popover" } })
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (guestRef.current && !guestRef.current.contains(e.target as Node)) {
        setShowGuests(false);
      }
    };

    const handleOtherPopoverOpen = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (customEvt.detail?.id !== "hotel-guests-popover") {
        setShowGuests(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    if (typeof window !== "undefined") {
      window.addEventListener("form-popover-open", handleOtherPopoverOpen);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (typeof window !== "undefined") {
        window.removeEventListener("form-popover-open", handleOtherPopoverOpen);
      }
    };
  }, []);

  const [guestInfo, setGuestInfo] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const [stayType, setStayType] = useState<"Overnight" | "Day Use">("Overnight");

  const [formData, setFormData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    rooms: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hotel Search:", { stayType, ...formData });
    router.push("/hotels");
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Stay Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
        <button
          type="button"
          onClick={() => setStayType("Overnight")}
          className={`px-6 py-3 rounded-2xl font-bold transition-all duration-200 border text-sm sm:text-base ${isDark
              ? stayType === "Overnight"
                ? "bg-white text-black font-extrabold border-white shadow-lg scale-105"
                : "bg-slate-800/80 text-gray-200 border-white/10 hover:border-white/40 hover:text-white"
              : stayType === "Overnight"
                ? "bg-black text-white border-black shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
        >
          Overnight Stays
        </button>

        <button
          type="button"
          onClick={() => setStayType("Day Use")}
          className={`px-6 py-3 rounded-2xl font-bold transition-all duration-200 border text-sm sm:text-base ${isDark
              ? stayType === "Day Use"
                ? "bg-white text-black font-extrabold border-white shadow-lg scale-105"
                : "bg-slate-800/80 text-gray-200 border-white/10 hover:border-white/40 hover:text-white"
              : stayType === "Day Use"
                ? "bg-black text-white border-black shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
        >
          Day Use Stays
        </button>
      </div>

      {/* Main Form Container */}
      <form onSubmit={handleSubmit}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-3.5 relative p-4 sm:p-5 rounded-3xl border ${isDark
              ? "bg-slate-900/90 backdrop-blur-2xl border-white/10 text-white"
              : "bg-gray-50 border-gray-200 text-gray-900"
            }`}
        >
          {/* Location */}
          <div className="xl:col-span-4">
            <CityInputField
              label="Where do you want to stay?"
              icon={<Building2 size={16} />}
              name="location"
              value={formData.location}
              onChange={(val) => setFormData((prev) => ({ ...prev, location: val }))}
              placeholder="Mumbai, Maharashtra"
              subLabel="Hotels, resorts, apartments & more"
              isDark={isDark}
            />
          </div>

          {/* Check In */}
          <div
            className={
              isDark
                ? "xl:col-span-3 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all"
                : "xl:col-span-3 p-3 border-b md:border-b xl:border-r border-gray-200"
            }
          >
            <div
              className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"
                }`}
            >
              <CalendarDays size={15} />
              <span>Check In</span>
            </div>
            <DepartureCalendar isDark={isDark} />
          </div>

          {/* Check Out */}
          <div
            className={
              isDark
                ? "xl:col-span-3 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all"
                : "xl:col-span-3 p-3 border-b md:border-b xl:border-r border-gray-200"
            }
          >
            <div
              className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"
                }`}
            >
              <CalendarDays size={15} />
              <span>Check Out</span>
            </div>
            <DepartureCalendar isDark={isDark} />
          </div>

          {/* Guests & Rooms */}
          <div
            ref={guestRef}
            className={`relative ${isDark
                ? "xl:col-span-2 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all cursor-pointer"
                : "xl:col-span-2 p-3 cursor-pointer"
              }`}
          >
            <div onClick={toggleGuests}>
              <div
                className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"
                  }`}
              >
                <Users size={15} />
                <span>Guests & Rooms</span>
              </div>

              <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                {guestInfo.adults + guestInfo.children} Guests
              </h2>

              <p className={`text-xs mt-1 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                {guestInfo.rooms} Room
              </p>
            </div>

            {showGuests && (
              <div
                className={`absolute top-full right-0 mt-4 w-[320px] rounded-2xl shadow-2xl p-5 z-50 border ${isDark
                    ? "bg-slate-900/95 backdrop-blur-2xl border-white/15 text-white"
                    : "bg-white border-gray-200 text-gray-900"
                  }`}
              >
                {/* Adults */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-semibold text-sm">Adults</h4>
                    <p className="text-xs text-gray-400">12+ Years</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setGuestInfo((prev) => ({
                          ...prev,
                          adults: Math.max(1, prev.adults - 1),
                        }))
                      }
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold border border-white/20 flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-base w-4 text-center">{guestInfo.adults}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setGuestInfo((prev) => ({
                          ...prev,
                          adults: prev.adults + 1,
                        }))
                      }
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold border border-white/20 flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-semibold text-sm">Children</h4>
                    <p className="text-xs text-gray-400">0-12 Years</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setGuestInfo((prev) => ({
                          ...prev,
                          children: Math.max(0, prev.children - 1),
                        }))
                      }
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold border border-white/20 flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-base w-4 text-center">{guestInfo.children}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setGuestInfo((prev) => ({
                          ...prev,
                          children: prev.children + 1,
                        }))
                      }
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold border border-white/20 flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <h4 className="font-semibold text-sm">Rooms</h4>
                    <p className="text-xs text-gray-400">Total Rooms</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setGuestInfo((prev) => ({
                          ...prev,
                          rooms: Math.max(1, prev.rooms - 1),
                        }))
                      }
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold border border-white/20 flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-base w-4 text-center">{guestInfo.rooms}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setGuestInfo((prev) => ({
                          ...prev,
                          rooms: prev.rooms + 1,
                        }))
                      }
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold border border-white/20 flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 rounded-xl transition cursor-pointer"
                  onClick={() => setShowGuests(false)}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 mb-4">
          {hotelFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => toggleFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition cursor-pointer border ${selectedFilters.includes(filter)
                  ? "bg-white text-black border-white shadow-md"
                  : "bg-slate-800/80 text-gray-300 border-white/10 hover:border-white/40 hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-black hover:bg-neutral-800 transition-all text-white px-8 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Search Hotels</span>
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelForm;

