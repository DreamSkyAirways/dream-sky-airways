'use client';
import React, { useState } from 'react';

interface Cab {
  id: string;
  name: string;
  type: string;
  rating: number;
  ratingCount: number;
  price: number;
  priceType: string;
  duration: string;
  seats: number;
  isAC: boolean;
  image?: string;
}

const CabsRental: React.FC = () => {
  // Search States
  const [pickupCity, setPickupCity] = useState('New Delhi');
  const [dropCity, setDropCity] = useState('Bengaluru');
  const [pickupDate, setPickupDate] = useState('23 Jun 2026');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [carType, setCarType] = useState('All');

  // Filters
  const [filters, setFilters] = useState({
    sedan: true,
    suv: true,
    hatchback: false,
    luxury: false,
    ac: true,
    driverIncluded: true,
  });

  const [priceRange, setPriceRange] = useState([2500, 8500]);

  // Sample Cab Data
  const cabs: Cab[] = [
    {
      id: '1',
      name: 'Swift Dzire or Equivalent',
      type: 'Sedan',
      rating: 4.6,
      ratingCount: 1243,
      price: 399,
      priceType: 'per day',
      duration: 'Full Day',
      seats: 4,
      isAC: true,
    },
    {
      id: '2',
      name: 'Innova Crysta',
      type: 'SUV',
      rating: 4.8,
      ratingCount: 876,
      price: 599,
      priceType: 'per day',
      duration: 'Full Day',
      seats: 7,
      isAC: true,
    },
    {
      id: '3',
      name: 'WagonR / i10',
      type: 'Hatchback',
      rating: 4.3,
      ratingCount: 654,
      price: 560,
      priceType: 'per day',
      duration: 'Full Day',
      seats: 4,
      isAC: true,
    },
    {
      id: '4',
      name: 'Mercedes Benz E-Class',
      type: 'Luxury',
      rating: 4.9,
      ratingCount: 312,
      price: 405,
      priceType: 'per day',
      duration: 'Full Day',
      seats: 4,
      isAC: true,
    },
  ];

  // Working Filter Logic
  const filteredCabs = cabs.filter((cab) => {
    if (filters.sedan && cab.type === 'Sedan') return true;
    if (filters.suv && cab.type === 'SUV') return true;
    if (filters.hatchback && cab.type === 'Hatchback') return true;
    if (filters.luxury && cab.type === 'Luxury') return true;
    if (filters.ac && !cab.isAC) return false;
    if (cab.price < priceRange[0] || cab.price > priceRange[1]) return false;
    return true;
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSearch = () => {
    alert(`Searching cabs from ${pickupCity} to ${dropCity} on ${pickupDate} at ${pickupTime} 🎉`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* Pickup City */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">PICKUP CITY</label>
            <input
              type="text"
              value={pickupCity}
              onChange={(e) => setPickupCity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Drop City */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">DROP CITY</label>
            <input
              type="text"
              value={dropCity}
              onChange={(e) => setDropCity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Pickup Date */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">PICKUP DATE</label>
            <input
              type="date"
              value={pickupDate.split(' ').reverse().join('-')}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">PICKUP TIME</label>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Car Type */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">CAR TYPE</label>
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 bg-white"
            >
              <option value="All">All Types</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition active:scale-95 md:col-span-1"
          >
            Search Cabs
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Left Filters */}
        <div className="w-72 bg-white mt-3 rounded-2xl shadow p-5 h-fit sticky top-1">
          <h2 className="font-bold text-xl mb-5">Filters</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Car Type</h3>
              {['sedan', 'suv', 'hatchback', 'luxury'].map((key) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer py-1">
                  <input
                    type="checkbox"
                    checked={filters[key as keyof typeof filters]}
                    onChange={() => toggleFilter(key as keyof typeof filters)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span className="capitalize">{key}</span>
                </label>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-3">Other Filters</h3>
              <label className="flex items-center gap-2 cursor-pointer py-1">
                <input
                  type="checkbox"
                  checked={filters.ac}
                  onChange={() => toggleFilter('ac')}
                  className="w-5 h-5 accent-blue-600"
                />
                <span>AC Cabs</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer py-1">
                <input
                  type="checkbox"
                  checked={filters.driverIncluded}
                  onChange={() => toggleFilter('driverIncluded')}
                  className="w-5 h-5 accent-blue-600"
                />
                <span>Driver Included</span>
              </label>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-3">Price Range (per day)</h3>
              <input
                type="range"
                min="1000"
                max="10000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-sm mt-1">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cabs List */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-5">
            Available Cabs from {pickupCity} to {dropCity}
          </h2>

          <div className="space-y-4">
            {filteredCabs.length > 0 ? (
              filteredCabs.map((cab) => (
                <div
                  key={cab.id}
                  className="bg-white border rounded-2xl p-6 hover:shadow-lg transition-all flex gap-6"
                >
                  <div className="w-40 h-28 bg-gray-200 rounded-xl flex items-center justify-center text-5xl">
                    🚗
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-xl">{cab.name}</h3>
                        <p className="text-gray-600">{cab.type} • {cab.seats} Seater • AC</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="bg-green-600 text-white text-sm px-2 py-1 rounded font-medium">
                            {cab.rating}
                          </span>
                          <span className="text-gray-500">({cab.ratingCount})</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <div className="text-3xl font-bold text-green-600">₹{cab.price}</div>
                        <div className="text-sm text-gray-500">/{cab.priceType}</div>
                      </div>

                      <div className="text-right">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-500 text-xl">
                No cabs found matching your filters
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabsRental;