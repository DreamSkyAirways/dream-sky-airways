"use client";

import ContactSection from "@/components/ContactSection";
import SpecialOffers from "@/components/Offers/SpecialOffers";
import AboutSection from "@/components/about/AboutSection";
import VisionValues from "@/components/about/VisionValues";
import TestimonialsPage from "./testimonials/page";

import AirlineSlider from "@/components/AirlineSlider";
import PackageSection from "@/components/PackageSection";
import TravelBlogs from "@/components/blogs/TravelBlogs";
import {
  ArrowLeftRight,
  CalendarDays,
  Car,
  ChevronDown,
  Hotel,
  MapPinned,
  Package,
  Phone,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Search,
  Users,
} from "lucide-react";
import {useState} from "react";

// export const metadata: Metadata = {
//   title: "Dream Sky Airways | Aviation & Travel Company in India",
//   description:
//     "Explore aviation-based holiday packages and flight services with Dream Sky Airways. Enjoy easy booking and reliable travel assistance for smooth journeys.",
// };

export default function Home(string: any) {
  const [selectedOption, setSelectedOption] = useState<
    "Hotel" | "Flight" | "Package" | "CarRental" | "Activities" | "Contact"
  >("Hotel");


  return (
    <>
      <div className="relative w-full desktop-safe-mobile">
        <div className=" flex flex-col items-start justify-start w-full">
          <div
            className="
                  relative 
                  w-full 
                  h-[250px]
                  sm:h-[350px]
                  md:h-[450px]
                  lg:h-[550px]
                  rounded-b-[80px]
                  sm:rounded-b-[60px]
                  md:rounded-b-[80px]
                  overflow-hidden 
                  bg-cover 
                  bg-center 
                  bg-no-repeat
                "
            style={{
              backgroundImage: "url('/travel-poster.png')",
            }}
          ></div>

          <div className="relative -mt-40 z-10 w-full px-4">
            <section className="rounded-lg flex flex-col gap-4 items-center ">
              <div className="bg-white relative z-20 mb-[-40px]  w-full max-w-4xl mx-auto  flex gap-4 flex-wrap     justify-between shadow-md   rounded-md shadow-sm">
                <ul className="flex gap-4 flex-wrap justify-between">
                  <li
                    onClick={() => setSelectedOption("Hotel")}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-4 rounded transition-all duration-300 ${
                      selectedOption === "Hotel"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:border-b-2  hover:border-blue-500 "
                    }`}
                  >
                    <Hotel className="w-5 h-5" />
                    <span className="font-medium">Hotel</span>
                  </li>

                  <li
                    onClick={() => setSelectedOption("Flight")}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-3 rounded transition-all duration-300 ${
                      selectedOption === "Flight"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:border-b-2  hover:border-blue-500"
                    }`}
                  >
                    <Plane className="w-5 h-5" />
                    <span className="font-medium">Flight</span>
                  </li>

                  <li
                    onClick={() => setSelectedOption("CarRental")}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded transition-all duration-300 ${
                      selectedOption === "CarRental"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:border-b-2  hover:border-blue-500"
                    }`}
                  >
                    <Car className="w-5 h-5" />
                    <span className="font-medium">Car Rental</span>
                  </li>

                  <li
                    onClick={() => setSelectedOption("Package")}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded transition-all duration-300 ${
                      selectedOption === "Package"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:border-b-2  hover:border-blue-500"
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    <span className="font-medium">Package</span>
                  </li>

                  <li
                    onClick={() => setSelectedOption("Activities")}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded transition-all duration-300 ${
                      selectedOption === "Activities"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:border-b-2  hover:border-blue-500"
                    }`}
                  >
                    <MapPinned className="w-5 h-5" />
                    <span className="font-medium">Activities</span>
                  </li>

                  <li
                    onClick={() => setSelectedOption("Contact")}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded transition-all duration-300 ${
                      selectedOption === "Contact"
                       ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:border-b-2  hover:border-blue-500"
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Contact Us</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white  p-4 sm:p-6 w-full max-w-6xl mx-auto rounded-lg shadow-lg">
                {selectedOption == "Hotel" && (
                  <div className="p-6 md:p-8 sm:p-4 rounded-lg">
                    {/* Top Tabs */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <button className="bg-blue-600 text-white rounded-full px-7 py-3 font-semibold shadow-lg">
                        Overnight Stays
                      </button>

                      <button className="bg-gray-100 hover:bg-gray-200 transition-all text-gray-700 rounded-full px-7 py-3 font-medium">
                        Day Use Stays
                      </button>
                    </div>

                    {/* Search Location */}
                    <div className="bg-gradient-to-r from-slate-50 to-white border border-gray-200 rounded-[30px] px-7 py-7 flex items-center gap-5 mb-6 hover:border-blue-300 transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                        <Search className="w-7 h-7 text-blue-600" />
                      </div>

                      <div className="w-full">
                        <p className="text-sm text-gray-500 mb-1">
                          Where do you want to stay?
                        </p>

                        <input
                          type="text"
                          placeholder="Mumbai"
                          className="w-full bg-transparent outline-none text-4xl font-bold text-gray-800 placeholder:text-gray-400"
                        />

                        <p className="text-gray-500 mt-1">
                          Hotels, resorts, apartments & more
                        </p>
                      </div>
                    </div>

                    {/* Date & Guests */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                      {/* Check In / Out */}
                      <div className="lg:col-span-2 bg-gradient-to-r from-slate-50 to-white border border-gray-200 rounded-[30px] p-7 flex flex-col md:flex-row justify-between gap-6 hover:border-blue-300 transition-all duration-300">
                        {/* Check In */}
                        <div className="flex gap-4 items-start">
                          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <CalendarDays className="w-7 h-7 text-blue-600" />
                          </div>

                          <div>
                            <p className="text-sm text-gray-500 mb-1">
                              Check In
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800">
                              16 May 2026
                            </h2>

                            <p className="text-gray-500 mt-1">Saturday</p>
                          </div>
                        </div>

                        <div className="hidden md:block w-[1px] bg-gray-200"></div>

                        {/* Check Out */}
                        <div className="flex gap-4 items-start">
                          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <CalendarDays className="w-7 h-7 text-blue-600" />
                          </div>

                          <div>
                            <p className="text-sm text-gray-500 mb-1">
                              Check Out
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800">
                              17 May 2026
                            </h2>

                            <p className="text-gray-500 mt-1">Sunday</p>
                          </div>
                        </div>
                      </div>

                      {/* Guests */}
                      <div className="bg-gradient-to-r from-slate-50 to-white border border-gray-200 rounded-[30px] px-7 py-7 flex justify-between items-center hover:border-blue-300 transition-all duration-300">
                        <div className="flex gap-4 items-start">
                          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <Users className="w-7 h-7 text-blue-600" />
                          </div>

                          <div>
                            <p className="text-sm text-gray-500 mb-1">
                              Guests & Rooms
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800">
                              1 Adult
                            </h2>

                            <p className="text-gray-500 mt-1">1 Room</p>
                          </div>
                        </div>

                        <ChevronDown className="w-6 h-6 text-gray-500" />
                      </div>
                    </div>

                    {/* Bottom Features */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <button className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full font-medium">
                        Free Breakfast
                      </button>

                      <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium">
                        Couple Friendly
                      </button>

                      <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium">
                        Free Cancellation
                      </button>

                      <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium">
                        Luxury Hotels
                      </button>
                    </div>

                    {/* Search Button */}
                    <div className="flex justify-center">
                      <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white text-xl md:text-2xl font-semibold px-16 md:px-24 py-5 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.35)] flex items-center gap-3">
                        <Search className="w-6 h-6" />
                        Search Hotels
                      </button>
                    </div>
                  </div>
                )}

                {selectedOption === "Flight" && (
                  <div className=" p-6 md:p-8">
                    {/* Trip Type */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md">
                        One Way
                      </button>

                      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium">
                        Round Trip
                      </button>

                      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium">
                        Multi City
                      </button>
                    </div>

                    {/* Main Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                      {/* From */}
                      <div className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-3xl p-5">
                        <div className="flex items-start gap-4">
                          <PlaneTakeoff className="w-7 h-7 text-blue-600 mt-1" />

                          <div>
                            <p className="text-gray-500 text-sm mb-1">From</p>

                            <h2 className="text-3xl font-bold text-gray-800">
                              Delhi
                            </h2>

                            <p className="text-gray-500 mt-1">
                              Indira Gandhi International
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Swap Button */}
                      <div className="hidden lg:flex items-center justify-center">
                        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
                          <ArrowLeftRight className="w-5 h-5" />
                        </button>
                      </div>

                      {/* To */}
                      <div className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-3xl p-5">
                        <div className="flex items-start gap-4">
                          <PlaneLanding className="w-7 h-7 text-blue-600 mt-1" />

                          <div>
                            <p className="text-gray-500 text-sm mb-1">To</p>

                            <h2 className="text-3xl font-bold text-gray-800">
                              Mumbai
                            </h2>

                            <p className="text-gray-500 mt-1">
                              Chhatrapati Shivaji Airport
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Departure */}
                      <div className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-5">
                        <div className="flex gap-4 items-start">
                          <CalendarDays className="w-7 h-7 text-blue-600 mt-1" />

                          <div>
                            <p className="text-gray-500 text-sm mb-1">
                              Departure
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800">
                              18 May
                            </h2>

                            <p className="text-gray-500">Monday</p>
                          </div>
                        </div>
                      </div>

                      {/* Travellers */}
                      <div className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-5">
                        <div className="flex gap-4 items-start">
                          <Users className="w-7 h-7 text-blue-600 mt-1" />

                          <div>
                            <p className="text-gray-500 text-sm mb-1">
                              Travellers
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800">
                              2 Adults
                            </h2>

                            <p className="text-gray-500">Economy</p>
                          </div>
                        </div>
                      </div>

                      {/* Search */}
                      <div className="lg:col-span-1 flex items-center justify-center">
                        <button className="w-full h-full min-h-[120px] bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white rounded-3xl flex items-center justify-center shadow-lg">
                          <Search className="w-8 h-8" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Options */}
                    <div className="flex flex-wrap gap-6 mt-8">
                      <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <input type="checkbox" className="w-4 h-4" />
                        Student Fare
                      </label>

                      <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <input type="checkbox" className="w-4 h-4" />
                        Senior Citizen
                      </label>

                      <label className="flex items-center gap-2 text-gray-700 font-medium">
                        <input type="checkbox" className="w-4 h-4" />
                        Armed Forces
                      </label>
                    </div>
                  </div>
                )}

                {selectedOption === "Package" && (
                  <div className=" p-6 md:p-8 ">
                    {/* Top Tabs */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <button className="bg-blue-600 text-white rounded-full px-6 py-3 font-medium shadow-md">
                        Domestic Packages
                      </button>

                      <button className="border border-gray-300 text-gray-700 rounded-full px-6 py-3 font-medium bg-white">
                        International Packages
                      </button>

                      <button className="border border-gray-300 text-gray-700 rounded-full px-6 py-3 font-medium bg-white">
                        Honeymoon
                      </button>
                    </div>

                    {/* Search Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
                      {/* Destination */}
                      <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-3xl px-6 py-6">
                        <div className="flex gap-4 items-start">
                          <MapPinned className="w-7 h-7 text-blue-600 mt-1" />

                          <div className="w-full">
                            <p className="text-gray-500 text-sm mb-1">
                              Destination
                            </p>

                            <input
                              type="text"
                              placeholder="Goa, Bali, Dubai..."
                              className="w-full bg-transparent outline-none text-3xl font-semibold text-gray-800 placeholder:text-gray-400"
                            />

                            <p className="text-gray-500 mt-1">
                              Explore amazing tour packages
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Travel Date */}
                      <div className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-3xl px-6 py-6">
                        <div className="flex gap-4 items-start">
                          <CalendarDays className="w-7 h-7 text-blue-600 mt-1" />

                          <div>
                            <p className="text-gray-500 text-sm mb-1">
                              Travel Date
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800">
                              18 May 2026
                            </h2>

                            <p className="text-gray-500">Flexible Dates</p>
                          </div>
                        </div>
                      </div>

                      {/* Guests */}
                      <div className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-3xl px-6 py-6 flex justify-between items-center">
                        <div className="flex gap-4 items-start">
                          <Users className="w-7 h-7 text-blue-600 mt-1" />

                          <div>
                            <p className="text-gray-500 text-sm mb-1">
                              Travelers
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800">
                              2 Adults
                            </h2>

                            <p className="text-gray-500">1 Room</p>
                          </div>
                        </div>

                        <ChevronDown className="w-6 h-6 text-gray-500" />
                      </div>
                    </div>

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full font-medium">
                        Beach Tours
                      </button>

                      <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium">
                        Family Trips
                      </button>

                      <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium">
                        Adventure
                      </button>

                      <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-medium">
                        Luxury Holidays
                      </button>
                    </div>

                    {/* Search Button */}
                    <div className="lg:col-span-2">
                      <button className=" bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-3xl text-white flex items-center justify-center shadow-lg px-10 py-4 mt-6 w-full text-xl font-semibold gap-3">
                        <Search className="w-8 h-8" /> Search Packages
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* </div> */}
            </section>
          </div>
        </div>

        <PackageSection />
        {/* Offers */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Best Savings
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            Exclusive Flight & Holiday Offers
          </h2>
        </div>
        <SpecialOffers />

        {/* Testimonials */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Trusted By Travelers
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            Experiences Shared By Our Happy Clients
          </h2>
        </div>
        <TestimonialsPage />

        {/* Blogs */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Travel Inspiration
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            Latest Travel Guides & Smart Tips
          </h2>
        </div>
        <TravelBlogs />

        {/* Airlines */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Airline Network
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            We Connect You With Leading Airlines
          </h2>
        </div>
        <AirlineSlider />

        <div className="mt-8 sm:mt-10">
          <AboutSection />
        </div>

        <div className="mt-8 sm:mt-10">
          <VisionValues />
        </div>

        <div className="mt-8 sm:mt-10">
          <ContactSection />
        </div>
      </div>
    </>
  );
}
