'use client';
import React, { useState } from 'react';
import DepartureCalendar from '../forms/DepartureCalendar';
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


interface Bus {
  id: string;
  operator: string;
  busName: string;
  type: string;
  rating: number;
  ratingCount: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  seatsAvailable: number;
  isAC: boolean;
  isSleeper: boolean;
  isSeater: boolean;
  freeCancellation: boolean;
  departureCity: string;
  arrivalCity: string;
}

const BusComponent: React.FC = () => {
  const [from, setFrom] = useState('ISBT Kashmiri Gate, Delhi');
  const [to, setTo] = useState('Agra');
  const [selectedDate] = useState('19 Jun, 2026');

  // Filters
  const [filters, setFilters] = useState({
    primo: false,
    freeCancellation: false,
    ac: true,
    sleeper: false,
    seater: false,
    nonAc: false,
    singleSeats: false,
  });

  const [timeFilter, setTimeFilter] = useState({
    morning: false,
    night: false,
  });

  // Sample Bus Data
  const buses: Bus[] = [
    {
      id: '1',
      operator: 'Volvo Express',
      busName: 'Volvo',
      type: 'VE A/C Seater / Sleeper (2+1)',
      rating: 4.7,
      ratingCount: 257,
      departureTime: '23:35',
      arrivalTime: '05:00',
      duration: '5h 25m',
      price: 650,
      seatsAvailable: 15,
      isAC: true,
      isSleeper: true,
      isSeater: true,
      freeCancellation: true,
      departureCity: 'Delhi',
      arrivalCity: 'agra',
    },
    {
      id: '2',
      operator: 'Armaan Tour & Travels',
      busName: '',
      type: 'A/C Seater / Sleeper (2+1)',
      rating: 3.7,
      ratingCount: 229,
      departureTime: '14:10',
      arrivalTime: '22:05',
      duration: '7h 55m',
      price: 599,
      seatsAvailable: 29,
      isAC: true,
      isSleeper: true,
      isSeater: true,
      freeCancellation: false,
      departureCity: 'Delhi',
      arrivalCity: 'agra',
    },
    {
      id: '3',
      operator: 'Laxmi Holidays Pvt Ltd',
      busName: 'Bharat Benz A/C Seater / Sleeper',
      type: '(2+1)',
      rating: 4.5,
      ratingCount: 423,
      departureTime: '23:30',
      arrivalTime: '05:20',
      duration: '5h 50m',
      price: 822,
      seatsAvailable: 32,
      isAC: true,
      isSleeper: true,
      isSeater: true,
      freeCancellation: true,
      departureCity: 'Delhi',
      arrivalCity: 'agra',
    },
  ];

  // Filter Logic
  const filteredBuses = buses.filter((bus) => {
    if (filters.freeCancellation && !bus.freeCancellation) return false;
    if (filters.ac && !bus.isAC) return false;
    if (filters.sleeper && !bus.isSleeper) return false;
    if (filters.seater && !bus.isSeater) return false;
    if (filters.nonAc && bus.isAC) return false;
    if (filters.primo && bus.operator !== 'Golden Temple Express') return false;
    return true;
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSearch = () => {
    alert(`Searching buses from ${from} to ${to} on ${selectedDate} 🎉`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans bg-gray-50 min-h-screen">
      {/* Top Search Bar */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex-1 min-w-[280px]">
            <label className="text-xs text-gray-500">FROM</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="text-3xl text-gray-400">→</div>

          <div className="flex-1 min-w-[280px]">
            <label className="text-xs text-gray-500">TO</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
             <div className="lg:col-span-3 border-r pl-2">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <CalendarDays size={18} />
                      <span>Return</span>
                    </div>
                    <DepartureCalendar />
                  </div>
         

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-xl font-semibold text-lg transition active:scale-95"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Left Sidebar Filters */}
        <div className="w-76 bg-white rounded-2xl shadow p-19 h-fit sticky top-4">
          <h2 className="text-xl font-bold mb-5">Filter buses</h2>

          <div className="space-y-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filters.primo} onChange={() => toggleFilter('primo')} className="w-5 h-5 accent-blue-600" />
              <span>Primo Bus</span>
              <span className="ml-auto text-gray-500">(7)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filters.freeCancellation} onChange={() => toggleFilter('freeCancellation')} className="w-5 h-5 accent-blue-600" />
              <span>Free Cancellation</span>
              <span className="ml-auto text-gray-500">(83)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filters.ac} onChange={() => toggleFilter('ac')} className="w-5 h-5 accent-blue-600" />
              <span>AC</span>
              <span className="ml-auto text-gray-500">(120)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filters.sleeper} onChange={() => toggleFilter('sleeper')} className="w-5 h-5 accent-blue-600" />
              <span>SLEEPER</span>
              <span className="ml-auto text-gray-500">(109)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filters.seater} onChange={() => toggleFilter('seater')} className="w-5 h-5 accent-blue-600" />
              <span>SEATER</span>
              <span className="ml-auto text-gray-500">(106)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filters.nonAc} onChange={() => toggleFilter('nonAc')} className="w-5 h-5 accent-blue-600" />
              <span>NONAC</span>
              <span className="ml-auto text-gray-500">(2)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filters.singleSeats} onChange={() => toggleFilter('singleSeats')} className="w-5 h-5 accent-blue-600" />
              <span>Single Seats</span>
              <span className="ml-auto text-gray-500">(83)</span>
            </label>
          </div>

          {/* Time Filters */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Departure Time</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={timeFilter.night} onChange={() => setTimeFilter(p => ({...p, night: !p.night}))} className="w-5 h-5 accent-blue-600" />
                <span>18:00 - 24:00</span>
                <span className="ml-auto text-gray-500">(89)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={timeFilter.morning} onChange={() => setTimeFilter(p => ({...p, morning: !p.morning}))} className="w-5 h-5 accent-blue-600" />
                <span>06:00 - 12:00</span>
                <span className="ml-auto text-gray-500">(13)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Main Bus List */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Buses from {from.split(',')[0]} to {to}</h2>

          <div className="space-y-4">
            {filteredBuses.map(bus => (
              <div key={bus.id} className="bg-white border rounded-2xl p-5 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">{bus.operator}</span>
                      {bus.busName && <span className="text-gray-600">• {bus.busName}</span>}
                    </div>
                    <p className="text-gray-600 text-sm">{bus.type}</p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <span className="bg-green-600 text-white text-sm px-2 py-0.5 rounded font-medium">{bus.rating}</span>
                      <span className="text-gray-500 text-sm">({bus.ratingCount})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <div className="text-3xl font-semibold">{bus.departureTime}</div>
                    <div className="text-sm text-gray-600">{bus.departureCity}</div>
                  </div>

                  <div className="text-center">
                    <div className="text-gray-400 text-sm">{bus.duration}</div>
                    <div className="h-px bg-gray-300 w-24 my-1"></div>
                    <div className="text-xs text-gray-500">Non Stop</div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-semibold">{bus.arrivalTime}</div>
                    <div className="text-sm text-gray-600">{bus.arrivalCity}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">₹{bus.price}</div>
                    <div className="text-xs text-gray-500">per seat</div>
                    <div className="text-emerald-600 text-sm mt-1">{bus.seatsAvailable} Seats left</div>
                  </div>

                  <button  onClick={() => alert("15 seats available!")} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
                    View seats
                  </button>
                </div>

                {bus.freeCancellation && (
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-green-600">
                    ✓ Free Cancellation Available
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredBuses.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-xl">No buses found matching your filters</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusComponent;