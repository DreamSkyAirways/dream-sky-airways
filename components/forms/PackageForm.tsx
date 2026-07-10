"use client";

import React, {useState} from "react";
import {CalendarDays, MapPinned, Search, Users} from "lucide-react";
import DepartureCalendar from "./DepartureCalendar";
import { useRouter } from "next/navigation";

const PackageTabs = [
  "Domestic Packages",
  "International Packages",
  "Honeymoon",
];

const filters = ["Beach Tours", "Family Trips", "Adventure", "Luxury Holidays"];

const PackageForm = () => {
  const router = useRouter();
  const [packageType, setPackageType] = useState<
    "Domestic Packages" | "International Packages" | "Honeymoon"
  >("Domestic Packages");

  const [formData, setFormData] = useState({
    destination: "",
    travelDate: "",
    travelers: "2",
    rooms: "1",
  });
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    );
  };

  const [showGuests, setShowGuests] = useState(false);

  const [guestInfo, setGuestInfo] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Package Search:", {packageType, ...formData});
    // API call here
    router.push("/packages")
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Package Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
        {PackageTabs.map((type) => (
          <button
            key={type}
            onClick={() => setPackageType(type as typeof packageType)}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200 border shadow-sm text-sm sm:text-base
              ${
                packageType === type
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Main Form Container */}
      <div>
        <form onSubmit={handleSubmit} className="p-6 lg:p-8">
          {/* Destination */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <MapPinned size={20} />
              <span>Destination</span>
            </div>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Goa, Bali, Dubai..."
              className="w-full text-3xl font-semibold outline-none placeholder:text-gray-400 border-b pb-3"
            />
            <p className="text-gray-500 text-sm mt-1">
              Explore amazing tour packages
            </p>
          </div>

          {/* Travel Date & Travelers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Travel Date */}
            <div className="lg:col-span-5 border-r">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <CalendarDays size={20} />
                <span>Travel Date</span>
              </div>
              <DepartureCalendar />
            </div>

            {/* Travelers */}
            <div className="lg:col-span-4 p-3 relative">
              <div
                onClick={() => setShowGuests(!showGuests)}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Users size={20} />
                  <span>Travellers & Rooms</span>
                </div>

                <h2 className="text-2xl font-bold">
                  {guestInfo.adults} Adults
                </h2>

                <p className="text-gray-500">
                  {guestInfo.rooms} Room • {guestInfo.children} Children
                </p>
              </div>

              {/* Popup */}
              {showGuests && (
                <div className="absolute top-full right-0 mt-4 w-80 bg-white rounded-2xl shadow-xl p-5 z-50">
                  {/* Adults */}
                  {/* Children */}
                  {/* Rooms */}
                  {/* Same Hotel Form Code */}
                </div>
              )}
            </div>
          </div>

          {/* Quick Filters / Tags */}
          <div className="flex flex-wrap gap-3 mt-5 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => toggleFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
      ${
        selectedFilters.includes(filter)
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700"
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
            Search Packages
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageForm;
