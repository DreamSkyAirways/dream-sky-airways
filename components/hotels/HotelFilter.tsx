// components/hotels/HotelFilter.tsx
'use client';
import React, { useState } from 'react';

interface HotelFilterValues {
  priceRange: string[];
  starRatings: string[];
  selectedAmenities: string[];
}

interface FilterProps {
  onFilterChange?: (filters: HotelFilterValues) => void;
}

const HotelFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [starRatings, setStarRatings] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const togglePrice = (range: string) => {
    const newRanges = priceRange.includes(range)
      ? priceRange.filter(r => r !== range)
      : [...priceRange, range];
    setPriceRange(newRanges);
    onFilterChange?.({ priceRange: newRanges, starRatings, selectedAmenities });
  };

  const toggleStar = (rating: string) => {
    const newStars = starRatings.includes(rating)
      ? starRatings.filter(r => r !== rating)
      : [...starRatings, rating];
    setStarRatings(newStars);
    onFilterChange?.({ priceRange, starRatings: newStars, selectedAmenities });
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter(a => a !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(newAmenities);
    onFilterChange?.({ priceRange, starRatings, selectedAmenities: newAmenities });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
        <button 
          onClick={() => {
            setPriceRange([]);
            setStarRatings([]);
            setSelectedAmenities([]);
            onFilterChange?.({ priceRange: [], starRatings: [], selectedAmenities: [] });
          }}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Your Hotel Search */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-700 mb-3">Your Hotel Search</h3>
        <div className="space-y-3">
          {[
            { label: 'Geneva', icon: '🏨' },
            { label: '1 Room(s)', icon: '🛏️' },
            { label: 'Indian', icon: '🇮🇳' },
            { label: '1 Adult(s)', icon: '👤' },
          ].map((item, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedAmenities.includes(item.label)}
                onChange={() => toggleAmenity(item.label)}
                className="w-5 h-5 accent-blue-600 rounded border-gray-300" 
              />
              <span className="text-gray-700 flex items-center gap-2">
                {item.icon} {item.label}
              </span>
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-blue-600 rounded border-gray-300" 
            />
            <span className="text-gray-700 flex items-center gap-1">⭐ Show All</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-700 mb-3">Price in ₹ :</h3>
        <div className="space-y-3">
          {[
            '₹ 3700 - ₹ 13700',
            '₹ 13701 - ₹ 23700',
            '₹ 23701 - ₹ 33700',
            '₹ 33701 - ₹ 43700',
            '₹ 43701 and above',
          ].map((range, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={priceRange.includes(range)}
                onChange={() => togglePrice(range)}
                className="w-5 h-5 accent-blue-600 rounded border-gray-300" 
              />
              <span className="text-gray-700">{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Star Rating */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Star Rating :</h3>
        <div className="space-y-3">
          {[
            { label: 'Unrated Hotel', stars: '☆' },
            { label: '1 Star Hotel', stars: '★' },
            { label: '2 Star Hotel', stars: '★★' },
            { label: '3 Star Hotel', stars: '★★★' },
            { label: '4 Star Hotel', stars: '★★★★' },
            { label: '5 Star Hotel', stars: '★★★★★' },
          ].map((item, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={starRatings.includes(item.label)}
                onChange={() => toggleStar(item.label)}
                className="w-5 h-5 accent-blue-600 rounded border-gray-300" 
              />
              <span className="text-gray-700 flex items-center gap-1">
                {item.stars} {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="text-xs text-gray-500">
          
        </div>
      </div>
    </div>
  );
};

export default HotelFilter;