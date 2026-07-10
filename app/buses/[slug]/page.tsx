'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Users, Shield, Star, Calendar, Bus, MapPin } from 'lucide-react';

interface BusData {
  id: string;
  operator: string;
  busType: string;
  departure: {
    time: string;
    date: string;
    place: string;
    city: string;
  };
  arrival: {
    time: string;
    date: string;
    place: string;
    city: string;
  };
  duration: string;
  price: number;
  seatsLeft: number;
  rating: number;
}

const BusSlugPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const bus: BusData = {
    id: slug || 'nuego-del-ag-001',
    operator: 'NueGo',
    busType: 'Electric AC Seater',
    departure: {
      time: '18:00',
      date: 'Mon, 22 Jun 2026',
      place: 'ISBT Kashmiri Gate',
      city: 'Delhi',
    },
    arrival: {
      time: '23:15',
      date: 'Mon, 22 Jun 2026',
      place: 'Agra Bus Stand',
      city: 'Agra',
    },
    duration: '5h 15m',
    price: 368,
    seatsLeft: 12,
    rating: 4.2,
  };

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showPassengerForm, setShowPassengerForm] = useState(false);

  // Generate seat layout (5x8 grid simulation)
  const seats = Array.from({ length: 40 }, (_, i) => ({
    id: `S${(i + 1).toString().padStart(2, '0')}`,
    status: i % 7 === 0 ? 'sold' : 'available',
  }));

  const toggleSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else if (selectedSeats.length < 6) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const totalPrice = selectedSeats.length * bus.price;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[#0033cc] text-white py-3 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Bus className="w-8 h-8" />
            <div>
              <div className="font-bold text-xl">Dream Sky Airways</div>
              <div className="text-xs text-blue-200">Tour & Travel</div>
            </div>
          </div>
        </div>
        <Link href="/buses" className="flex items-center gap-2 hover:text-blue-200">
          <ArrowLeft className="w-5 h-5" /> Back to Buses
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 text-2xl font-bold">
                {bus.departure.city} → {bus.arrival.city}
                <span className="text-sm font-normal bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">5% OFF</span>
              </div>
              <div className="text-gray-600 mt-1">{bus.departure.place} → {bus.arrival.place}</div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-[#0033cc]">₹{bus.price}</div>
              <div className="text-sm text-gray-500">per seat</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Seat Map - Left Side */}
          <div className="col-span-5">
            <div className="bg-white rounded-3xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl">Select Seats</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div> Available
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div> Sold
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-3 mb-8">
                {seats.map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => seat.status === 'available' && toggleSeat(seat.id)}
                    disabled={seat.status === 'sold'}
                    className={`h-12 rounded-xl flex items-center justify-center text-sm font-medium transition-all border-2
                      ${seat.status === 'sold' 
                        ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed' 
                        : selectedSeats.includes(seat.id)
                        ? 'bg-[#0033cc] text-white border-[#0033cc]'
                        : 'bg-white border-green-500 hover:bg-green-50 text-green-700'
                      }`}
                  >
                    {seat.id}
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="font-semibold mb-2">Selected Seats ({selectedSeats.length})</div>
                <div className="flex flex-wrap gap-2">
                  {selectedSeats.length > 0 ? (
                    selectedSeats.map(seat => (
                      <div key={seat} className="bg-[#0033cc] text-white px-4 py-1 rounded-xl text-sm">{seat}</div>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">No seats selected yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bus Details - Right Side */}
          <div className="col-span-7">
            <div className="bg-white rounded-3xl shadow overflow-hidden">
              <div className="bg-[#0033cc] text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🚌</div>
                  <div>
                    <div className="text-xl font-bold">{bus.operator} • {bus.busType}</div>
                    <div className="flex items-center gap-2 text-blue-200">
                      ★ {bus.rating} <span className="text-sm">(137 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center py-6 border-b">
                  <div>
                    <div className="text-4xl font-mono font-semibold">{bus.departure.time}</div>
                    <div className="text-sm text-gray-500 mt-1">{bus.departure.date}</div>
                    <div className="mt-3 font-medium">{bus.departure.place}</div>
                  </div>

                  <div className="text-center">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-[#0033cc]" />
                    <div className="font-medium">{bus.duration}</div>
                    <div className="text-xs text-gray-500">Non-stop</div>
                  </div>

                  <div className="text-right">
                    <div className="text-4xl font-mono font-semibold">{bus.arrival.time}</div>
                    <div className="text-sm text-gray-500 mt-1">{bus.arrival.date}</div>
                    <div className="mt-3 font-medium">{bus.arrival.place}</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Star className="text-[#0033cc]" /> Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-2xl">
                      <div className="font-medium">Free Bus Change</div>
                      <div className="text-sm text-gray-600">Up to 1h before trip</div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-2xl">
                      <div className="font-medium">Electric Bus</div>
                      <div className="text-sm text-gray-600">Eco-friendly • Low CO₂</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Bar */}
              <div className="bg-gray-50 border-t px-8 py-6 flex items-center justify-between">
                <div>
                  <div className="text-emerald-600 font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    {bus.seatsLeft} seats left
                  </div>
                  <div className="text-xl font-bold mt-1">
                    ₹{totalPrice || bus.price} 
                    <span className="text-sm font-normal text-gray-500"> for {selectedSeats.length || 1} seat(s)</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowPassengerForm(true)}
                  disabled={selectedSeats.length === 0}
                  className="bg-[#0033cc] hover:bg-[#002299] disabled:bg-gray-400 transition text-white px-12 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3"
                >
                  CONTINUE TO BOOK
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSlugPage;
