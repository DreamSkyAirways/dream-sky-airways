"use client";

import React, { useState, useRef, useEffect } from "react";
import {CalendarDays, ChevronDown, Search, Users} from "lucide-react";
import DepartureCalendar from "./DepartureCalendar";
import {useRouter} from "next/navigation";
import CityInputField from "./CitySelectDropdown";

const hotelFilters = [
  "Free Breakfast",
  "Couple Friendly",
  "Free Cancellation",
  "Luxury Hotels",
];

const HotelForm = () => {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
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

  const [stayType, setStayType] = useState<"Overnight" | "Day Use">(
    "Overnight",
  );

  const [formData, setFormData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    rooms: "1",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hotel Search:", {stayType, ...formData});
    // API call here
    router.push("hotels");
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Stay Type Tabs */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
        <button
          onClick={() => setStayType("Overnight")}
          className={`min-w-fit px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-medium transition-all duration-200 border shadow-sm text-xs sm:text-sm lg:text-base
          ${
            stayType === "Overnight"
              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
          }`}
        >
          Overnight Stays
        </button>

        <button
          onClick={() => setStayType("Day Use")}
          className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200 border shadow-sm text-sm sm:text-base
            ${
              stayType === "Day Use"
                ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
            }`}
        >
          Day Use Stays
        </button>
      </div>

      {/* Main Form Container */}
      <div>
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8">
          {/* Location */}
          <div className="mb-8">
            <CityInputField
              label="Where do you want to stay?"
              icon={<Search size={20} />}
              name="location"
              value={formData.location}
              onChange={(val) => setFormData((prev) => ({ ...prev, location: val }))}
              placeholder="Mumbai, Maharashtra"
              subLabel="Hotels, resorts, apartments & more"
              inputClassName="w-full text-xl sm:text-2xl lg:text-3xl font-semibold outline-none placeholder:text-gray-400 border-b pb-3 bg-transparent"
            />
          </div>

          {/* Dates & Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
            {/* Check In */}
            <div className="
                        xl:col-span-4
                        border-b
                        pb-4
                        md:border-b
                        xl:border-r
                        xl:border-b-0
                        ">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <CalendarDays size={20} />
                <span>Check In</span>
              </div>
              <DepartureCalendar />
            </div>

            {/* Check Out */}
            <div className="
                        xl:col-span-4
                        border-b
                        pb-4
                        md:border-b
                        xl:border-r
                        xl:border-b-0
                        ">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <CalendarDays size={20} />
                <span>Check Out</span>
              </div>
              <DepartureCalendar />
            </div>

            {/* Guests & Rooms */}
            <div ref={guestRef} className="xl:col-span-4 relative">
              <div
                onClick={toggleGuests}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Users size={20} />
                  <span>Guests & Rooms</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold">
                  {guestInfo.adults} Adults,
                  {guestInfo.rooms} Room
                </h2>

                <p className="text-gray-500">{guestInfo.children} Children</p>
              </div>

              {showGuests && (
                <div
                        className="
                        absolute
                        top-full
                        left-0
                        sm:left-auto
                        sm:right-0
                        mt-4
                        w-[95vw]
                        max-w-[320px]
                        bg-white
                        rounded-2xl
                        shadow-xl
                        p-4
                        sm:p-5
                        z-50
                      "
                      >
                  {/* Adults */}
                  <div className="flex justify-between items-center mb-4">
                    <span>Adults</span>

                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() =>
                          setGuestInfo((prev) => ({
                            ...prev,
                            adults: Math.max(1, prev.adults - 1),
                          }))
                        }
                         className="
                              w-8 h-8
                              rounded-full
                              bg-gray-100
                              hover:bg-gray-200
                              font-bold
                            "
                      >
                        -
                      </button>

                      <span>{guestInfo.adults}</span>

                      <button
                        onClick={() =>
                          setGuestInfo((prev) => ({
                            ...prev,
                            adults: prev.adults + 1,
                          }))
                        }
                         className="
                              w-8 h-8
                              rounded-full
                              bg-gray-100
                              hover:bg-gray-200
                              font-bold
                            "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex justify-between items-center mb-4">
                    <span>Children</span>

                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() =>
                          setGuestInfo((prev) => ({
                            ...prev,
                            children: Math.max(0, prev.children - 1),
                          }))
                        }
                         className="
                              w-8 h-8
                              rounded-full
                              bg-gray-100
                              hover:bg-gray-200
                              font-bold
                            "
                      >
                        -
                      </button>

                      <span>{guestInfo.children}</span>

                      <button
                        onClick={() =>
                          setGuestInfo((prev) => ({
                            ...prev,
                            children: prev.children + 1,
                          }))
                        }
                         className="
                              w-8 h-8
                              rounded-full
                              bg-gray-100
                              hover:bg-gray-200
                              font-bold
                            "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Rooms */}
                  <div className="flex justify-between items-center mb-5">
                    <span>Rooms</span>

                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() =>
                          setGuestInfo((prev) => ({
                            ...prev,
                            rooms: Math.max(1, prev.rooms - 1),
                          }))
                        }
                         className="
                              w-8 h-8
                              rounded-full
                              bg-gray-100
                              hover:bg-gray-200
                              font-bold
                            "
                      >
                        -
                      </button>

                      <span>{guestInfo.rooms}</span>

                      <button
                        onClick={() =>
                          setGuestInfo((prev) => ({
                            ...prev,
                            rooms: prev.rooms + 1,
                          }))
                        }
                         className="
                              w-8 h-8
                              rounded-full
                              bg-gray-100
                              hover:bg-gray-200
                              font-bold
                            "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="w-full bg-blue-600 text-white py-3 rounded-xl"
                    onClick={() => setShowGuests(false)}
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mt-8 mb-10">
            {hotelFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => toggleFilter(filter)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition
        ${
          selectedFilters.includes(filter)
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Button - Bottom */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30"
          >
            <Search size={28} />
            Search Hotels
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelForm;
