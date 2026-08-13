"use client";

import React, { useState } from "react";
import { Plane, Hotel, Package, Car } from "lucide-react";
import { IoBusOutline } from "react-icons/io5";

import FlightForm from "@/components/forms/FlightForm";
import HotelForm from "@/components/forms/HotelForm";
import PackageForm from "@/components/forms/PackageForm";
import BusForm from "@/components/forms/BusForm";
import CarForm from "@/components/forms/CabForm";

const serviceTabs = [
  { id: "Flight", label: "Flight", icon: Plane },
  { id: "Hotel", label: "Hotel", icon: Hotel },
  { id: "Package", label: "Package", icon: Package },
  { id: "Bus", label: "Bus", icon: IoBusOutline },
  { id: "CarRental", label: "Car Rental", icon: Car },
] as const;

type ServiceTab = (typeof serviceTabs)[number]["id"];

export default function DarkBookingSearch() {
  const [selectedOption, setSelectedOption] = useState<ServiceTab>("Flight");

  return (
    <section className="relative z-30 w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1700px] mx-auto mt-4 sm:-mt-40 lg:-mt-44">
      {/* Top Tabs Attached Bar */}
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-fit">
        {serviceTabs.map(({ id, label, icon: Icon }) => {
          const isActive = selectedOption === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setSelectedOption(id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-t-2xl text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 ${isActive
                ? "bg-white text-neutral-900 shadow-md"
                : "bg-neutral-900/90 text-white/80 hover:text-white hover:bg-neutral-800"
                }`}
            >
              <Icon className="w-4.5 h-4.5" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Main White Booking Card containing Full Interactive Forms */}
      <div className="bg-white rounded-b-3xl rounded-tr-3xl p-4 sm:p-6 lg:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100/80 text-gray-900">
        {selectedOption === "Flight" && <FlightForm isDark={false} />}
        {selectedOption === "Hotel" && <HotelForm isDark={false} />}
        {selectedOption === "Package" && <PackageForm isDark={false} />}
        {selectedOption === "Bus" && <BusForm isDark={false} />}
        {selectedOption === "CarRental" && <CarForm isDark={false} />}
      </div>
    </section>
  );
}
