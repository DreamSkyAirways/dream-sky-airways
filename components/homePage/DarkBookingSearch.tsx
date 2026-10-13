"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Hotel, Package, Car } from "lucide-react";
import { IoBusOutline } from "react-icons/io5";

import FlightForm from "@/components/forms/FlightForm";
import HotelForm from "@/components/forms/HotelForm";
import PackageForm from "@/components/forms/PackageForm";
import BusForm from "@/components/forms/BusForm";
import CarForm from "@/components/forms/CabForm";

const serviceTabs = [
  { id: "Flight", label: "Flights", icon: Plane },
  { id: "Hotel", label: "Hotels", icon: Hotel },
  { id: "Package", label: "Packages", icon: Package },
  { id: "Bus", label: "Buses", icon: IoBusOutline },
  { id: "CarRental", label: "Car rental", icon: Car },
] as const;

type ServiceTab = (typeof serviceTabs)[number]["id"];

/**
 * Design: one clean panel that floats over the bottom of the hero.
 * Tabs sit inside the panel as a text row; the active tab is marked by an
 * underline that slides between tabs (the only motion, and it answers a click).
 */
export default function DarkBookingSearch() {
  const [selectedOption, setSelectedOption] = useState<ServiceTab>("Flight");

  return (
    <section
      aria-label="Search and book"
      className="relative z-30 mx-auto mt-4 w-full max-w-[1700px] px-4 sm:-mt-12 sm:px-8 lg:-mt-14 lg:px-12 xl:px-16"
    >
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.35)]">
        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Booking type"
          className="scrollbar-hide flex overflow-x-auto border-b border-neutral-200 bg-neutral-50 px-2 sm:px-4"
        >
          {serviceTabs.map(({ id, label, icon: Icon }) => {
            const isActive = selectedOption === id;
            return (
              <button
                key={id}
                id={`tab-${id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`panel-${id}`}
                onClick={() => setSelectedOption(id)}
                className={`relative flex shrink-0 items-center gap-2 px-4 py-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900 sm:px-6 ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                <span>{label}</span>
                {isActive && (
                  <motion.span
                    layoutId="booking-tab-underline"
                    className="absolute inset-x-3 bottom-0 h-[3px] rounded-t-full bg-neutral-900"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div
          role="tabpanel"
          id={`panel-${selectedOption}`}
          aria-labelledby={`tab-${selectedOption}`}
          className="p-4 sm:p-6 lg:p-8"
        >
          {selectedOption === "Flight" && <FlightForm isDark={false} />}
          {selectedOption === "Hotel" && <HotelForm isDark={false} />}
          {selectedOption === "Package" && <PackageForm isDark={false} />}
          {selectedOption === "Bus" && <BusForm isDark={false} />}
          {selectedOption === "CarRental" && <CarForm isDark={false} />}
        </div>
      </div>
    </section>
  );
}