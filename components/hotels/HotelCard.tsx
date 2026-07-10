"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Hotel {
  id: number;
  title: string;
  slug: string;
  location: string;
  address: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  star: number;
  rooms: number;
  checkIn: string;
  checkOut: string;
  amenities: string[];
  images: string[];
}

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={hotel.images[0]}
          alt={hotel.title}
          fill
          className="object-cover hover:scale-105 transition duration-700"
        />

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
          {hotel.category}
        </div>

        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          ⭐ {hotel.rating}
        </div>

        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {"⭐".repeat(hotel.star)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-2xl text-gray-900 line-clamp-2">
          {hotel.title}
        </h3>

        <p className="text-gray-500 mt-2">
          📍 {hotel.location}
        </p>

        <p className="text-sm text-gray-400 mt-1 line-clamp-1">
          {hotel.address}
        </p>

        <p className="text-sm text-blue-600 mt-2 font-medium">
          {hotel.reviews}+ Reviews
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-5">
          {hotel.amenities.slice(0, 3).map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Hotel Info */}
        <div className="grid grid-cols-3 gap-3 mt-6 text-center">
          <div className="bg-gray-50 rounded-xl py-3">
            <p className="text-xs text-gray-500">Rooms</p>
            <p className="font-semibold">{hotel.rooms}</p>
          </div>

          <div className="bg-gray-50 rounded-xl py-3">
            <p className="text-xs text-gray-500">Check-In</p>
            <p className="font-semibold">{hotel.checkIn}</p>
          </div>

          <div className="bg-gray-50 rounded-xl py-3">
            <p className="text-xs text-gray-500">Check-Out</p>
            <p className="font-semibold">{hotel.checkOut}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end border-t mt-6 pt-5">
          <div>
            <p className="text-xs text-gray-500">
              Starting from
            </p>

            <p className="text-3xl font-bold text-blue-700">
              {hotel.price}
            </p>

            <p className="text-xs text-gray-400">
              per night
            </p>
          </div>

          <Link
            href={`/hotels/${hotel.slug}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;