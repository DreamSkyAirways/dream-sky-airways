
"use client";

import { useState } from "react";

const carTypes = [
    {
        name: "Economy",
        image: "🚗",
        seats: "4 Seats",
        bags: "2 Bags",
        transmission: "Automatic",
        price: "₹2,499/day",
    },
    {
        name: "SUV",
        image: "🚙",
        seats: "7 Seats",
        bags: "4 Bags",
        transmission: "Automatic",
        price: "₹4,999/day",
    },
    {
        name: "Luxury",
        image: "🏎️",
        seats: "4 Seats",
        bags: "3 Bags",
        transmission: "Automatic",
        price: "₹8,999/day",
    },
    {
        name: "Electric",
        image: "⚡",
        seats: "5 Seats",
        bags: "3 Bags",
        transmission: "Automatic",
        price: "₹5,499/day",
    },
];

export default function CarRental() {
    const [tripType, setTripType] = useState("same-location");
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropoffLocation, setDropoffLocation] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const handleSearch = () => {
        alert("Searching rental cars...");
    };

    return (    
        <>
            <div className=" px-4 py-10">
                <div>

                    <div >
                        <div className="flex flex-wrap gap-4 mb-8">
                            <button
                                onClick={() => setTripType("same-location")}
                                className={`rounded-full px-6 py-3 font-medium shadow-md transition-all ${tripType === "same-location"
                                    ? "bg-blue-600 text-white"
                                    : "border border-gray-300 text-gray-700 bg-white"
                                    }`}
                            >
                                Same Location
                            </button>

                            <button
                                onClick={() => setTripType("different-dropoff")}
                                className={`rounded-full px-6 py-3 font-medium shadow-md transition-all ${tripType === "different-dropoff"
                                    ? "bg-blue-600 text-white"
                                    : "border border-gray-300 text-gray-700 bg-white"
                                    }`}
                            >
                                Different Drop-off
                            </button>

                            <button
                                onClick={() => setTripType("airport-pickup")}
                                className={`rounded-full px-6 py-3 font-medium shadow-md transition-all ${tripType === "airport-pickup"
                                    ? "bg-blue-600 text-white"
                                    : "border border-gray-300 text-gray-700 bg-white"
                                    }`}
                            >
                                Airport Pickup
                            </button>
                        </div>

                        {/* Search Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <input
                                type="text"
                                placeholder="Pickup Location"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                                className="border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="text"
                                placeholder="Drop-off Location"
                                value={dropoffLocation}
                                onChange={(e) => setDropoffLocation(e.target.value)}
                                className="border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="date"
                                value={pickupDate}
                                onChange={(e) => setPickupDate(e.target.value)}
                                className="border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="date"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                className="border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={handleSearch}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all"
                        >
                            SEARCH CARS
                        </button>
                    </div>
                </div>

            </div>


        </>
    )
};

