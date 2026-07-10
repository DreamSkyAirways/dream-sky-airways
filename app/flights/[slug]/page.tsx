'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import {  Clock, Plane, Users, Shield, Star, Calendar } from 'lucide-react';

interface FlightData {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    time: string;
    date: string;
    airport: string;
    city: string;
  };
  arrival: {
    time: string;
    date: string;
    airport: string;
    city: string;
  };
  duration: string;
  price: number;
  cabin: string;
  baggage: string;
  seatsLeft: number;
}

const FlightSlugPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Mock flight data based on slug
  const flight: FlightData = {
    id: slug || 'dreamsky-dl-blr-001',
    airline: 'Dream Sky Airways',
    flightNumber: 'DS 1812',
    departure: {
      time: '22:55',
      date: 'Tue, 23 Jun 2026',
      airport: 'Terminal T1',
      city: 'New Delhi, India',
    },
    arrival: {
      time: '01:50',
      date: 'Wed, 24 Jun 2026',
      airport: 'Terminal T1',
      city: 'Bengaluru, India',
    },
    duration: '02h 55m',
    price: 10201,
    cabin: 'Economy / Premium',
    baggage: '15 Kgs (1 piece only)',
    seatsLeft: 7,
  };

  const [selectedClass, setSelectedClass] = useState('Economy');
  const [passengers, setPassengers] = useState(1);

  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 bg-white rounded-2xl p-2 shadow border">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
              <div>
                <div className="text-xs text-gray-500">FROM</div>
                <div className="font-semibold">New Delhi, India</div>
              </div>
            </div>

            <div className="w-10 h-10 bg-[#0033cc] text-white rounded-2xl flex items-center justify-center rotate-180">
              ↔
            </div>

            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
              <div>
                <div className="text-xs text-gray-500">TO</div>
                <div className="font-semibold">Bengaluru, India</div>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 rounded-xl">
              <div className="text-xs text-gray-500">DEPART</div>
              <div className="font-semibold flex items-center gap-1">
                23 Jun 26 <Calendar className="w-4 h-4" />
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 rounded-xl">
              <div className="text-xs text-gray-500">RETURN</div>
              <div className="font-semibold flex items-center gap-1">
                24 Jun 26 <Calendar className="w-4 h-4" />
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 rounded-xl">
              <div className="text-xs text-gray-500">TRAVELLERS</div>
              <div className="font-semibold flex items-center gap-1">
                {passengers} Adult, {selectedClass}
              </div>
            </div>

            <button className="bg-[#0033cc] hover:bg-[#002299] transition text-white px-10 py-4 rounded-2xl font-semibold text-lg">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Left Sidebar - Filters */}
        <div className="w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow">         
          </div>

          {/* Travel Tips */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <div className="font-semibold mb-2 text-blue-900">✈️ Travel Hack</div>
            <p className="text-sm text-blue-800">
              Book within next 2 hours to get <span className="font-bold">₹500 instant discount</span> using code <span className="font-mono bg-white px-1.5 py-0.5 rounded">DSKY500</span>
            </p>
          </div>
        </div>

        {/* Main Flight Details */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl shadow overflow-hidden">
            {/* Header */}
            <div className="bg-[#0033cc] text-white px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl">✈️</div>
                <div>
                  <div className="text-xl font-bold">New Delhi → Bengaluru</div>
                  {/* <div className="text-blue-200 text-sm">{flight.date}</div> */}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">₹{flight.price.toLocaleString('en-IN')}</div>
                <div className="text-xs text-blue-200">per adult</div>
              </div>
            </div>

            {/* Flight Info */}
            <div className="p-8">
              <div className="flex items-start gap-8">
                {/* Left Timings */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-4xl font-mono font-semibold text-gray-900">{flight.departure.time}</div>
                      <div className="text-sm text-gray-500 mt-1">{flight.departure.date}</div>
                      <div className="mt-4">
                        <div className="font-semibold">{flight.departure.airport}</div>
                        <div className="text-sm text-gray-600">{flight.departure.city}</div>
                      </div>
                    </div>

                    <div className="text-center pt-6">
                      <div className="flex items-center justify-center gap-2 text-[#0033cc] mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium text-sm">{flight.duration}</span>
                      </div>
                      <div className="h-px w-24 bg-gray-300 mx-auto"></div>
                      <div className="mt-1 text-xs text-gray-500">Non-stop</div>
                    </div>

                    <div className="text-right">
                      <div className="text-4xl font-mono font-semibold text-gray-900">{flight.arrival.time}</div>
                      <div className="text-sm text-gray-500 mt-1">{flight.arrival.date}</div>
                      <div className="mt-4">
                        <div className="font-semibold">{flight.arrival.airport}</div>
                        <div className="text-sm text-gray-600">{flight.arrival.city}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Airline Info */}
                <div className="w-56 border-l pl-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      DS
                    </div>
                    <div>
                      <div className="font-bold text-lg">{flight.airline}</div>
                      <div className="text-sm text-gray-500">{flight.flightNumber}</div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-emerald-500" />
                      <div>
                        <div className="font-medium">Refundable</div>
                        <div className="text-xs text-gray-500">Up to 2 hours before departure</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#0033cc]" />
                      <div>
                        <div className="font-medium">{flight.seatsLeft} seats left</div>
                        <div className="text-xs text-gray-500">at this price</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Baggage & Cabin */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-8">
                <div>
                  <div className="uppercase text-xs tracking-widest text-gray-500 mb-1">BAGGAGE</div>
                  <div className="font-semibold">Adult</div>
                  <div className="text-sm text-gray-600 mt-0.5">{flight.baggage}</div>
                </div>
                <div>
                  <div className="uppercase text-xs tracking-widest text-gray-500 mb-1">CABIN</div>
                  <div className="font-semibold">{flight.cabin}</div>
                  <div className="text-xs text-emerald-600 mt-1">7 Kgs (1 piece only)</div>
                </div>
                <div>
                  <div className="uppercase text-xs tracking-widest text-gray-500 mb-1">MEALS</div>
                  <div className="font-semibold">Complimentary Snack + Beverage</div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-gray-50 border-t px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-emerald-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  Few seats left at this price
                </div>
                <div className="text-gray-500">Free seat selection for Dream Sky Elite members</div>
              </div>

              <button 
                onClick={() => alert('Proceeding to booking for flight ' + flight.flightNumber)}
                className="bg-[#0033cc] hover:bg-[#002299] transition-all active:scale-95 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-500/30 flex items-center gap-3"
              >
                CONTINUE TO BOOK
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            All prices include taxes and fees • Dream Sky Airways • Flight operated by DS Fleet
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSlugPage;