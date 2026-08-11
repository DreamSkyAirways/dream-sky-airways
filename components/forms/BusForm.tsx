"use client";

import React, {useState} from "react";
import {
  CalendarDays,
  MapPin,
  PlaneTakeoff,
  PlaneLanding,
  Search,
} from "lucide-react";
import DepartureCalendar from "./DepartureCalendar";
import {useRouter} from "next/navigation";
import CityInputField from "./CitySelectDropdown";

const BusForm = () => {
  const router = useRouter();
  const [busData, setBusData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Bus Search:", busData);
    // axios.post("/api/bus/search", busData);
    router.push("/buses")
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Main Form Container */}
      <div>
        <form onSubmit={handleSearch} className="p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* From */}
            <div className="lg:col-span-4">
              <CityInputField
                label="From"
                icon={<PlaneTakeoff size={20} />}
                name="from"
                value={busData.from}
                onChange={(val) => setBusData((prev) => ({ ...prev, from: val }))}
                placeholder="Delhi"
                subLabel="Departure City"
                inputClassName="w-full text-3xl font-semibold outline-none placeholder:text-gray-400 border-b pb-3 bg-transparent"
              />
            </div>

            {/* To */}
            <div className="lg:col-span-4">
              <CityInputField
                label="To"
                icon={<PlaneLanding size={20} />}
                name="to"
                value={busData.to}
                onChange={(val) => setBusData((prev) => ({ ...prev, to: val }))}
                placeholder="Jaipur"
                subLabel="Destination City"
                inputClassName="w-full text-3xl font-semibold outline-none placeholder:text-gray-400 border-b pb-3 bg-transparent"
              />
            </div>

            {/* Date */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <CalendarDays size={20} />
                <span>Date</span>
              </div>
              <DepartureCalendar />
            </div>
          </div>

          {/* Search Button - Bottom */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30"
            >
              <Search size={28} />
              Search Buses
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusForm;
