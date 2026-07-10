"use client";

import { useState } from "react";
import PackageBookingForm from "@/components/forms/PackageBookingForm";

interface Props {
  pkg: any;
}

export default function PackageDetail({ pkg }: Props) {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 relative">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            {pkg.title}
          </h1>

          <p className="text-gray-600 mt-2">
            {pkg.location}
          </p>
        </div>

        <div>
          <p className="text-3xl sm:text-4xl font-bold text-blue-600">
            {pkg.price}
          </p>

          <button
            onClick={() => setShowBookingForm(true)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="p-5 border rounded-xl">
          <p className="text-gray-500">Duration</p>
          <p className="font-semibold">{pkg.duration}</p>
        </div>

        <div className="p-5 border rounded-xl">
          <p className="text-gray-500">Destination</p>
          <p className="font-semibold">{pkg.location}</p>
        </div>

        <div className="p-5 border rounded-xl">
          <p className="text-gray-500">Category</p>
          <p className="font-semibold">{pkg.category}</p>
        </div>

        <div className="p-5 border rounded-xl">
          <p className="text-gray-500">Rating</p>
          <p className="font-semibold">⭐ {pkg.rating}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Package Overview
        </h2>

        <p className="text-gray-700 leading-8">
          {pkg.shortDescription}
        </p>
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 mt-18">
          <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[100vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setShowBookingForm(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-xl"
            >
              ✕
            </button>

            <PackageBookingForm pkg={pkg} />
          </div>
        </div>
      )}
    </div>
  );
}