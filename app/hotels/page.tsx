"use client";

import { useState } from "react";

import HotelCard from "@/components/hotels/HotelCard";
import HotelFilter from "@/components/hotels/HotelFilter";

import { featuredHotels } from "@/components/data/featuredPackages";

export default function HotelsPage() {
  const [filters, setFilters] = useState<any>({});

  const filteredHotels = featuredHotels.filter(
    (hotel) => {
      if (
        filters.priceRange &&
        filters.priceRange.length > 0
      ) {
        const price = Number(
          hotel.price.replace(/[₹,]/g, "")
        );

        const matchesPrice =
          filters.priceRange.some(
            (range: string) => {
              if (
                range.includes("and above")
              ) {
                return price >= 40000;
              }

              const [min, max] = range
                .replace(/₹|,/g, "")
                .split(" - ")
                .map(Number);

              return (
                price >= min &&
                price <= (max || Infinity)
              );
            }
          );

        if (!matchesPrice) {
          return false;
        }
      }

      if (
        filters.starRatings &&
        filters.starRatings.length > 0
      ) {
        const matchesStar =
          filters.starRatings.some(
            (star: string) => {
              return (
                hotel.star ===
                Number(star.charAt(0))
              );
            }
          );

        if (!matchesStar) {
          return false;
        }
      }

      return true;
    }
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Dream Sky Airways Hotels
            </h1>

            <p className="text-gray-600 mt-2">
              Showing{" "}
              {filteredHotels.length} hotels
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-3 border rounded-xl hover:bg-gray-100">
              Map
            </button>

            <button className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Trending
            </button>

            <button className="px-5 py-3 border rounded-xl hover:bg-gray-100">
              Popular
            </button>

            <button className="px-5 py-3 border rounded-xl hover:bg-gray-100">
              Lowest Price
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <HotelFilter
              onFilterChange={
                setFilters
              }
            />
          </div>

          {/* Hotel Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              {filteredHotels.length >
              0 ? (
                filteredHotels.map(
                  (hotel) => (
                    <HotelCard
                      key={hotel.id}
                      hotel={hotel}
                    />
                  )
                )
              ) : (
                <div className="col-span-2 text-center py-20 text-gray-500">
                  No hotels found.
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}