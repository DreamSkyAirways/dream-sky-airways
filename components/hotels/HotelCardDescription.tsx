"use client";

import { useState } from "react";
import HotelBookingForm from "@/components/forms/HotelBookingForm";

interface HotelCardDescriptionProps {
  hotel: any; // baad me proper type bana lena
}

const HotelCardDescription = ({
  hotel,
}: HotelCardDescriptionProps) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-gray-900">
              {hotel.title}
            </h1>

            <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
              {hotel.star} Star
            </div>
          </div>

          <p className="text-gray-600 text-lg flex items-center gap-2">
            {hotel.location}
            <span className="text-yellow-500">
              {"★".repeat(hotel.star)}
            </span>
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {hotel.address}
          </p>
        </div>

        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">
            {hotel.price}
          </div>

          <p className="text-sm text-gray-500">
            per night
          </p>

          <button
            onClick={() => setShowBookingForm(true)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-2xl font-semibold"
          >
            Book This Hotel
          </button>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
          <p className="text-emerald-600 text-3xl font-bold">
            {hotel.rooms}
          </p>
          <p className="text-gray-600">Rooms</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
          <p className="text-emerald-600 text-2xl font-bold">
            {hotel.rating}
          </p>
          <p className="text-gray-600">Guest Rating</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
          <p className="text-emerald-600 text-2xl font-bold">
            {hotel.checkIn}
          </p>
          <p className="text-gray-600">Check In</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
          <p className="text-emerald-600 text-2xl font-bold">
            {hotel.checkOut}
          </p>
          <p className="text-gray-600">Check Out</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Description */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <h2 className="text-3xl font-semibold mb-5">
              About The Hotel
            </h2>

            <p className="text-gray-700 leading-relaxed text-[17px]">
              {hotel.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
              {hotel.highlights.map(
                (item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="text-2xl text-emerald-500">
                      ✔
                    </span>

                    <p className="text-gray-700">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Facilities & Amenities
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hotel.amenities.map(
                (facility: string, i: number) => (
                  <div
                    key={i}
                    className="bg-gray-50 px-5 py-4 rounded-2xl"
                  >
                    ● {facility}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-screen overflow-y-auto">
              <button
                onClick={() => setShowBookingForm(false)}
                className="absolute top-5 right-5"
              >
                ✕
              </button>

              <HotelBookingForm />
            </div>
          </div>
        )}

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-8 bg-white border rounded-3xl p-8 shadow-lg">
            <h3 className="font-semibold text-2xl mb-6">
              Hotel Details
            </h3>

            <div className="space-y-4">
              <p>
                <strong>Category:</strong> {hotel.category}
              </p>

              <p>
                <strong>Duration:</strong> {hotel.duration}
              </p>

              <p>
                <strong>Reviews:</strong> {hotel.reviews}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCardDescription;