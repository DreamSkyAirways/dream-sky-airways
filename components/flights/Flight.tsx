// components/flights/Flight.tsx
'use client';
import React, { useState } from 'react';
import DepartureCalendar from '../forms/DepartureCalendar';

// Simple CalendarDays icon component to avoid external icon dependency
const CalendarDays: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);


interface Flight {
  id: string;
  airline: string;
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  duration: string;
  price: number;
  stops:number;
  isNonStop: boolean;
  logo?: string;
}

const FlightComponent: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
  nonStop: true,
  refundable: false,
  indigo: true,
  airIndia: false,
  airIndiaExpress: false,
  akasaAir: false,
});
  const [priceRange, setPriceRange] = useState([8400, 25500]);
  const [stopsFilter, setStopsFilter] = useState({
  '0': true,   // Non-stop
  '1': false,
  '2': true,
  '3+': true,
});
  const [tripType, setTripType] = useState('Round Trip');
  const [from, setFrom] = useState('New Delhi, India');
  const [to, setTo] = useState('Bengaluru, India');
  const [passengersClass, setPassengersClass] = useState('1 Adult, Economy');
  

  // Sample flight data (replace with real API data later)
  const flights: Flight[] = [
    {
      id: '1',
      airline: 'IndiGo',
      departureTime: '06:40',
      departureAirport: 'Bengaluru',
      arrivalTime: '09:10',
      arrivalAirport: 'Noida',
      duration: '02 h 30 m',
      price: 8810,
      stops:1,
      isNonStop: true,
    },
    {
      id: '2',
      airline: 'IndiGo',
      departureTime: '14:20',
      departureAirport: 'Delhi',
      arrivalTime: '17:05',
      arrivalAirport: 'Bengaluru',
      duration: '02 h 45 m',
      price: 9687,
      stops:0,

      isNonStop: true,
    },
    {
      id: '3',
      airline: 'Air India',
      departureTime: '08:15',
      departureAirport: 'Delhi',
      arrivalTime: '11:30',
      arrivalAirport: 'Bengaluru',
      duration: '03 h 15 m',
      price: 12450,
      stops:2,
      isNonStop: false,
    },
    {
      id: '4',
      airline: 'Akasa Air',
      departureTime: '10:00',
      departureAirport: 'Delhi',
      arrivalTime: '13:20',
      arrivalAirport: 'Bengaluru',
      duration: '03 h 20 m',
      price: 10999,
      stops:1,
      isNonStop: true,
    },
  ];

  // Improved Filtering Logic
const filteredFlights = flights.filter(flight => {
  // Non-stop filter
  if (selectedFilters.nonStop && !flight.isNonStop) return false;

  // Airline filters
  const airlineMatch =
    (selectedFilters.indigo && flight.airline === 'IndiGo') ||
    (selectedFilters.airIndia && flight.airline === 'Air India') ||
    (selectedFilters.airIndiaExpress && flight.airline === 'Air India Express') ||
    (selectedFilters.akasaAir && flight.airline === 'Akasa Air');

  // If no airline filter is selected, show all airlines
  if (
    selectedFilters.indigo ||
    selectedFilters.airIndia ||
    selectedFilters.airIndiaExpress ||
    selectedFilters.akasaAir
  ) {
    if (!airlineMatch) return false;
  }

  // Price range filter
  if (flight.price < priceRange[0] || flight.price > priceRange[1]) {
    return false;

    const stopKey = flight.stops >= 3 ? '3+' : flight.stops.toString();
  if (!stopsFilter[stopKey as keyof typeof stopsFilter]) {
    return false;
  }
  }

  return true;
});
  const toggleFilter = (filter: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans  min-h-screen">
      {/* Header / Search Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-end">
          <div>
      <label className="block text-xs text-gray-500 mb-1">TRIP TYPE</label>
      <select
        value={tripType}
        onChange={(e) => setTripType(e.target.value)}
        className="px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 cursor-pointer w-full min-w-[140px]"
      >
        <option value="Round Trip">Round Trip</option>
        <option value="One Way">One Way</option>
        <option value="Multi City">Multi Trip</option>
      </select>
    </div>
          <div className="flex-1 min-w-[200px]">
      <label className="block text-xs text-gray-500 mb-1">FROM</label>
      <input
        type="text"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="Departure City"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1"
      />
    </div>

    <div className="flex items-center justify-center text-3xl text-gray-400 pt-6">↔</div>
         <div className="flex-1 min-w-[200px]">
      <label className="block text-xs text-gray-500 mb-1">TO</label>
      <input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Arrival City"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1"
      />
    </div>
          <div className="lg:col-span-3 border-r pl-2">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <CalendarDays size={18} />
                      <span>Depart</span>
                    </div>
                    <DepartureCalendar />
                  </div>
          <div className="lg:col-span-3 border-r pl-2">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <CalendarDays size={18} />
                      <span>Return</span>
                    </div>
                    <DepartureCalendar />
                  </div>

          <div>
      <label className="block text-xs text-gray-500 mb-1">PASSENGERS & CLASS</label>
      <select
        value={passengersClass}
        onChange={(e) => setPassengersClass(e.target.value)}
        className="px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 cursor-pointer w-full min-w-[170px]"
      >
        <option value="1 Adult, Economy">1 Adult, Economy</option>
        <option value="1 Adult, Premium Economy">1 Adult, Premium Economy</option>
        <option value="1 Adult, Business">1 Adult, Business</option>
        <option value="2 Adults, Economy">2 Adults, Economy</option>
        <option value="2 Adults, Premium Economy">2 Adults, Premium Economy</option>
        <option value="2 Adults, Business">2 Adults, Business</option>
        <option value="3 Adults, Economy">3 Adults, Economy</option>
        <option value="1 Adult + 1 Child, Economy">1 Adult + 1 Child, Economy</option>
        <option value="1 Adult, Economy + 1 Infant">1 Adult, Economy + 1 Infant</option>
      </select>
    </div>
          <button
          onClick={() => alert("Finding Flights!")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            SEARCH
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="w-72 bg-white rounded-xl shadow p-5 h-fit sticky top-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Popular Filters</h3>
            <button className="text-blue-600 text-sm">Clear</button>
          </div>

          <div className="space-y-10">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.nonStop}
                onChange={() => toggleFilter('nonStop')}
                className="w-5 h-5 accent-blue-600"
              />
              <span>Non Stop</span>
              <span className="ml-auto text-gray-400 text-sm">73</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.refundable}
                onChange={() => toggleFilter('refundable')}
                className="w-5 h-5 accent-blue-600"
              />
              <span>Refundable Fares</span>
              <span className="ml-auto text-gray-400 text-sm">3</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.indigo}
                onChange={() => toggleFilter('indigo')}
                className="w-5 h-5 accent-blue-600"
              />
              <span>IndiGo</span>
              <span className="ml-auto text-gray-400 text-sm">88</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.airIndia}
                onChange={() => toggleFilter('airIndia')}
                className="w-5 h-5 accent-blue-600"
              />
              <span>Air India</span>
              <span className="ml-auto text-gray-400 text-sm">26</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.airIndiaExpress}
                onChange={() => toggleFilter('airIndiaExpress')}
                className="w-5 h-5 accent-blue-600"
              />
              <span>Air India Express</span>
              <span className="ml-auto text-gray-400 text-sm">9</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.akasaAir}
                onChange={() => toggleFilter('akasaAir')}
                className="w-5 h-5 accent-blue-600"
              />
              <span>Akasa Air</span>
              <span className="ml-auto text-gray-400 text-sm">8</span>
            </label>
          </div>

         {/* Price Range */}
<div className="mt-8">
  <h3 className="font-semibold mb-4">Price Range</h3>
  <input
    type="range"
    min="8400"
    max="25500"
    step="100"
    value={priceRange[1]}
    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
    className="w-full accent-blue-600"
  />
  <div className="flex justify-between text-sm mt-2 font-medium">
    <span>₹{priceRange[0]}</span>
    <span>₹{priceRange[1]}</span>
  </div>
</div>
          {/* Number of Stops Filter */}
<div className="mt-8">
  <h3 className="font-semibold mb-4">Number of Stops</h3>
  <div className="space-y-3">
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={stopsFilter['0']}
        onChange={() => setStopsFilter(prev => ({ ...prev, '0': !prev['0'] }))}
        className="w-5 h-5 accent-blue-600"
      />
      <span>Non Stop (0)</span>
    </label>

    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={stopsFilter['1']}
        onChange={() => setStopsFilter(prev => ({ ...prev, '1': !prev['1'] }))}
        className="w-5 h-5 accent-blue-600"
      />
      <span>1 Stop</span>
    </label>

    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={stopsFilter['2']}
        onChange={() => setStopsFilter(prev => ({ ...prev, '2': !prev['2'] }))}
        className="w-5 h-5 accent-blue-600"
      />
      <span>2 Stops</span>
    </label>

    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={stopsFilter['3+']}
        onChange={() => setStopsFilter(prev => ({ ...prev, '3+': !prev['3+'] }))}
        className="w-5 h-5 accent-blue-600"
      />
      <span>3+ Stops</span>
    </label>
  </div>
</div>
          {/* Dream Sky Branding */}
          <div className="mt-8 pt-6 border-t text-center">
            <div className="text-blue-600 font-bold text-xl">✈️ Dream Sky Airways</div>
            <p className="text-xs text-gray-500 mt-1">Book with Confidence</p>
          </div>
        </div>

        {/* Main Flight List */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Flights from New Delhi to Bengaluru, and back</h2>

          {/* Promotional Banners */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center gap-3">
              <div className="text-3xl">🛡️</div>
              <div>
                <div className="font-semibold">Price Drop Protection</div>
                <div className="text-sm text-gray-600">We refund the difference, if price drops</div>
              </div>
            </div>
            <div className="bg-white border p-4 rounded-xl flex items-center gap-3">
              <div className="text-red-600 font-bold text-xl">VISA</div>
              <div>
                <div className="font-semibold">VISA Exclusive Offer</div>
                <div className="text-sm text-gray-600">Free Seat with VISA Signature...</div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-3">
              <div className="text-3xl">🏦</div>
              <div>
                <div className="font-semibold">Flat 10% Instant Discount</div>
                <div className="text-sm text-gray-600">on Dream Sky Card</div>
              </div>
            </div>
          </div>

          {/* Flights */}
          <div className="space-y-4">
            {filteredFlights.map(flight => (
              <div key={flight.id} className="bg-white rounded-2xl shadow border p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  {/* Departure */}
                  <div className="w-40">
                    <div className="text-3xl font-semibold">{flight.departureTime}</div>
                    <div className="text-sm text-gray-600">{flight.departureAirport}</div>
                  </div>

                  {/* Duration */}
                  <div className="text-center flex-1">
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <div className="h-px bg-gray-300 flex-1"></div>
                      <span className="text-sm whitespace-nowrap">{flight.duration}</span>
                      <div className="h-px bg-gray-300 flex-1"></div>
                    </div>
                    <div className="text-xs text-emerald-600 font-medium">NON STOP</div>
                  </div>

                  {/* Arrival */}
                  <div className="w-40 text-right">
                    <div className="text-3xl font-semibold">{flight.arrivalTime}</div>
                    <div className="text-sm text-gray-600">{flight.arrivalAirport}</div>
                  </div>

                  {/* Price & Book */}
                  <div className="text-right" item-center justify-between >
                    <div className="text-3xl font-bold text-green-600">₹{flight.price}</div>
                    <div className="text-xs text-gray-500">per adult</div>
                    <button 
      onClick={() => alert("Flight booked successfully! 🎉")}
      className="bg-blue-600 hover:bg-blue-700 mt-18 text-white px-10 py-3 rounded-xl font-semibold transition active:scale-95"
    >
      Book Now
    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <span className="text-lg">🛫</span> {flight.airline}
                  </span>
                  <span className="text-gray-300">•</span>
                  <button className="text-blue-600 hover:underline">Flight Details</button>
                </div>
              </div>
            ))}
          </div>

          {filteredFlights.length === 0 && (
            <div className="text-center py-20 text-gray-500">No flights match your filters</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightComponent;