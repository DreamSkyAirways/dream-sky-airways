"use client";

import React, { useState, useRef, useEffect } from "react";
import { GoArrowSwitch } from "react-icons/go";
import {
  CalendarDays,
  PlaneLanding,
  PlaneTakeoff,
  Search,
  Users,
  ArrowRight,
} from "lucide-react";
import DepartureCalendar from "./DepartureCalendar";
import { useRouter } from "next/navigation";
import CityInputField from "./CitySelectDropdown";

const TripTabs = ["One Way", "Round Trip", "Multi City"];

interface FlightFormData {
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  passenger: string;
  travelClass: string;
}

interface FlightFormProps {
  isDark?: boolean;
}

const FlightForm = ({ isDark = false }: FlightFormProps) => {
  const router = useRouter();
  const [showTraveller, setShowTraveller] = useState(false);
  const travellerRef = useRef<HTMLDivElement | null>(null);

  const toggleTraveller = () => {
    const nextState = !showTraveller;
    setShowTraveller(nextState);
    if (nextState && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("form-popover-open", { detail: { id: "flight-traveller-popover" } })
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (travellerRef.current && !travellerRef.current.contains(e.target as Node)) {
        setShowTraveller(false);
      }
    };

    const handleOtherPopoverOpen = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (customEvt.detail?.id !== "flight-traveller-popover") {
        setShowTraveller(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    if (typeof window !== "undefined") {
      window.addEventListener("form-popover-open", handleOtherPopoverOpen);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (typeof window !== "undefined") {
        window.removeEventListener("form-popover-open", handleOtherPopoverOpen);
      }
    };
  }, []);

  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: "Economy",
  });

  const [tripType, setTripType] = useState<
    "One Way" | "Round Trip" | "Multi City"
  >("One Way");
  const [formData, setFormData] = useState<FlightFormData>({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passenger: "1",
    travelClass: "Economy",
  });

  const handleSwap = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Data:", { tripType, ...formData });
    router.push("/flights");
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Trip Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
        {TripTabs.map((trip) => (
          <button
            key={trip}
            type="button"
            onClick={() => setTripType(trip as typeof tripType)}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-200 border text-sm sm:text-base ${isDark
              ? tripType === trip
                ? "bg-white text-black font-extrabold border-white shadow-lg scale-105"
                : "bg-slate-800/80 text-gray-200 border-white/10 hover:border-white/40 hover:text-white"
              : tripType === trip
                ? "bg-black text-white border-black shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
          >
            {trip}
          </button>
        ))}
      </div>

      {/* Main Form Container */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* One Way & Round Trip */}
          {(tripType === "One Way" || tripType === "Round Trip") && (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-3.5 relative p-4 sm:p-5 rounded-3xl border ${isDark
                ? "bg-slate-900/90 backdrop-blur-2xl border-white/10 text-white"
                : "bg-gray-50 border-gray-200 text-gray-900"
                }`}
            >
              {/* From */}
              <div className="xl:col-span-3">
                <CityInputField
                  label="From"
                  icon={<PlaneTakeoff size={16} />}
                  name="from"
                  value={formData.from}
                  onChange={(val) => setFormData((prev) => ({ ...prev, from: val }))}
                  placeholder="Delhi (DEL)"
                  subLabel="Departure City"
                  isDark={isDark}
                />
              </div>

              {/* Swap Button */}
              <div className="hidden xl:flex absolute left-[23.5%] top-[50%] -translate-y-1/2 -translate-x-1/2 z-[99]">
                <button
                  type="button"
                  onClick={handleSwap}
                  className={`p-2.5 rounded-full border shadow-xl hover:rotate-180 transition-all duration-300 ${isDark
                    ? "bg-slate-800 border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
                    : "bg-white border-gray-300 text-black hover:bg-gray-100"
                    }`}
                >
                  <GoArrowSwitch className="text-xl" />
                </button>
              </div>

              {/* To */}
              <div className="xl:col-span-3">
                <CityInputField
                  label="To"
                  icon={<PlaneLanding size={16} />}
                  name="to"
                  value={formData.to}
                  onChange={(val) => setFormData((prev) => ({ ...prev, to: val }))}
                  placeholder="Mumbai (BOM)"
                  subLabel="Destination City"
                  isDark={isDark}
                />
              </div>

              {/* Departure Date */}
              <div className={isDark ? "xl:col-span-3 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all" : "xl:col-span-3 p-3 border-b md:border-b xl:border-r xl:border-b-0 border-white/10"}>
                <div className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                  <CalendarDays size={15} />
                  <span>Departure</span>
                </div>
                <DepartureCalendar isDark={isDark} />
              </div>

              {/* Return Date */}
              {tripType === "Round Trip" && (
                <div className={isDark ? "xl:col-span-3 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all" : "lg:col-span-3 border-r border-white/10 p-3"}>
                  <div className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                    <CalendarDays size={15} />
                    <span>Return</span>
                  </div>
                  <DepartureCalendar isDark={isDark} />
                </div>
              )}

              {/* Travellers & Class */}
              <div ref={travellerRef} className={`relative ${isDark ? "xl:col-span-3 bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md transition-all" : "lg:col-span-3 p-3"}`}>
                <div onClick={toggleTraveller} className="cursor-pointer">
                  <div className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                    <Users size={15} />
                    <span>Travellers & Class</span>
                  </div>

                  <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    {travellers.adults + travellers.children + travellers.infants}{" "}
                    Traveller
                  </h2>

                  <p className={`text-xs mt-1 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>{travellers.travelClass}</p>
                </div>

                {showTraveller && (
                  <div
                    className={`absolute top-full right-0 mt-4 w-[350px] rounded-2xl shadow-2xl p-5 z-50 border ${isDark
                      ? "bg-slate-900/95 backdrop-blur-2xl border-white/10 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                      }`}
                  >
                    {/* Adults */}

                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <h4 className="font-semibold">Adults</h4>
                        <p className="text-xs text-gray-500">12+ Years</p>
                      </div>

                      <div className="flex gap-3 items-center">
                        <button
                          onClick={() =>
                            setTravellers((prev) => ({
                              ...prev,
                              adults: Math.max(1, prev.adults - 1),
                            }))
                          }
                        >
                          -
                        </button>

                        <span>{travellers.adults}</span>

                        <button
                          onClick={() =>
                            setTravellers((prev) => ({
                              ...prev,
                              adults: prev.adults + 1,
                            }))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children */}

                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <h4 className="font-semibold">Children</h4>
                        <p className="text-xs text-gray-500">2-12 Years</p>
                      </div>

                      <div className="flex gap-3 items-center">
                        <button
                          onClick={() =>
                            setTravellers((prev) => ({
                              ...prev,
                              children: Math.max(0, prev.children - 1),
                            }))
                          }
                        >
                          -
                        </button>

                        <span>{travellers.children}</span>

                        <button
                          onClick={() =>
                            setTravellers((prev) => ({
                              ...prev,
                              children: prev.children + 1,
                            }))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Infants */}

                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <h4 className="font-semibold">Infants</h4>
                        <p className="text-xs text-gray-500">Below 2 Years</p>
                      </div>

                      <div className="flex gap-3 items-center">
                        <button
                          onClick={() =>
                            setTravellers((prev) => ({
                              ...prev,
                              infants: Math.max(0, prev.infants - 1),
                            }))
                          }
                        >
                          -
                        </button>

                        <span>{travellers.infants}</span>

                        <button
                          onClick={() =>
                            setTravellers((prev) => ({
                              ...prev,
                              infants: prev.infants + 1,
                            }))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Travel Class */}

                    <h4 className="font-semibold mb-3">Travel Class</h4>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Economy",
                        "Premium Economy",
                        "Business",
                        "First Class",
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() =>
                            setTravellers((prev) => ({
                              ...prev,
                              travelClass: item,
                            }))
                          }
                          className={`border rounded-lg py-2 text-sm ${travellers.travelClass === item
                            ? "bg-black text-white"
                            : ""
                            }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    <button
                      className="mt-5 w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-xl cursor-pointer"
                      onClick={() => setShowTraveller(false)}
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ==================== MULTI CITY ==================== */}

          {tripType === "Multi City" && (
            <div className="space-y-8">
              {tripType === "Multi City" && (
                <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-15 gap-4 relative border p-4 sm:p-5 rounded-2xl ${isDark ? "bg-slate-900/90 backdrop-blur-2xl border-white/10" : "bg-gray-50 border-gray-200"}`}>
                  {/* From */}
                  <div className={`lg:col-span-3 border-r p-3 ${isDark ? "border-white/10" : "border-gray-200"}`}>
                    <CityInputField
                      label="From"
                      icon={<PlaneTakeoff size={18} />}
                      name="from"
                      value={formData.from}
                      onChange={(val) => setFormData((prev) => ({ ...prev, from: val }))}
                      placeholder="Delhi (DEL)"
                      subLabel="Departure City"
                      isDark={isDark}
                      inputClassName={`w-full text-2xl sm:text-3xl font-semibold outline-none bg-transparent ${isDark ? "placeholder:text-gray-500 text-white" : "placeholder:text-gray-400 text-gray-900"}`}
                    />
                  </div>

                  <div className="hidden lg:flex absolute left-[205px] top-[55%] -translate-y-1/2 z-999">
                    <button
                      type="button"
                      onClick={handleSwap}
                      className={`p-1 rounded-full border hover:rotate-180 transition-all duration-300 ${isDark ? "bg-slate-800 border-white/20 text-white hover:bg-white hover:text-black" : "bg-white border-gray-300"}`}
                    >
                      <GoArrowSwitch className={`text-2xl ${isDark ? "" : "text-blue-600"}`} />
                    </button>
                  </div>

                  <div className={`lg:col-span-3 border-r p-3 ${isDark ? "border-white/10" : "border-gray-200"}`}>
                    <CityInputField
                      label="To"
                      icon={<PlaneLanding size={18} />}
                      name="to"
                      value={formData.to}
                      onChange={(val) => setFormData((prev) => ({ ...prev, to: val }))}
                      placeholder="Mumbai (BOM)"
                      subLabel="Destination City"
                      isDark={isDark}
                      inputClassName={`w-full text-2xl sm:text-3xl font-semibold outline-none bg-transparent ${isDark ? "placeholder:text-gray-500 text-white" : "placeholder:text-gray-400 text-gray-900"}`}
                    />
                  </div>

                  <div className={`lg:col-span-3 border-r p-3 ${isDark ? "border-white/10" : "border-gray-200"}`}>
                    <div className={`flex items-center gap-2 text-sm mb-2 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                      <CalendarDays size={18} />
                      <span>Departure</span>
                    </div>
                    <DepartureCalendar isDark={isDark} />
                  </div>

                  {/* Return Date */}

                  <div className={`lg:col-span-3 border-r p-3 ${isDark ? "border-white/10" : "border-gray-200"}`}>
                    <div className={`flex items-center gap-2 text-sm mb-2 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                      <CalendarDays size={18} />
                      <span>Return</span>
                    </div>
                    <DepartureCalendar isDark={isDark} />
                  </div>

                  {/* Travellers & Class */}
                  <div className="lg:col-span-3 p-3 relative">
                    <div
                      onClick={() => setShowTraveller(!showTraveller)}
                      className="cursor-pointer"
                    >
                      <div className={`flex items-center gap-2 text-sm mb-2 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                        <Users size={18} />
                        <span>Travellers & Class</span>
                      </div>

                      <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                        {travellers.adults +
                          travellers.children +
                          travellers.infants}{" "}
                        Traveller
                      </h2>

                      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{travellers.travelClass}</p>
                    </div>
                    {showTraveller && (
                      <div
                        className={`absolute top-full right-0 mt-4 w-[350px] rounded-2xl shadow-2xl p-5 z-50 border ${isDark ? "bg-slate-900/95 backdrop-blur-2xl border-white/10 text-white" : "bg-white border-gray-200 text-gray-900"}`}
                      >
                        {/* Adults */}

                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <h4 className="font-semibold">Adults</h4>
                            <p className="text-xs text-gray-500">12+ Years</p>
                          </div>

                          <div className="flex gap-3 items-center">
                            <button
                              onClick={() =>
                                setTravellers((prev) => ({
                                  ...prev,
                                  adults: Math.max(1, prev.adults - 1),
                                }))
                              }
                              className=" text-2xl font-semibold"
                            >
                              -
                            </button>

                            <span className="mt-1">{travellers.adults}</span>

                            <button
                              onClick={() =>
                                setTravellers((prev) => ({
                                  ...prev,
                                  adults: prev.adults + 1,
                                }))
                              }
                              className=" text-1xl font-semibold mt-1"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children */}

                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <h4 className="font-semibold">Children</h4>
                            <p className="text-xs text-gray-500">2-12 Years</p>
                          </div>

                          <div className="flex gap-3 items-center">
                            <button
                              onClick={() =>
                                setTravellers((prev) => ({
                                  ...prev,
                                  children: Math.max(0, prev.children - 1),
                                }))
                              }
                              className=" text-2xl font-semibold"
                            >
                              -
                            </button>

                            <span className="mt-1">{travellers.children}</span>

                            <button
                              onClick={() =>
                                setTravellers((prev) => ({
                                  ...prev,
                                  children: prev.children + 1,
                                }))
                              }
                              className=" text-1xl font-semibold mt-1"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Infants */}

                        <div className="flex justify-between items-center mb-5">
                          <div>
                            <h4 className="font-semibold">Infants</h4>
                            <p className="text-xs text-gray-500">
                              Below 2 Years
                            </p>
                          </div>

                          <div className="flex gap-3 items-center">
                            <button
                              onClick={() =>
                                setTravellers((prev) => ({
                                  ...prev,
                                  infants: Math.max(0, prev.infants - 1),
                                }))
                              }
                              className=" text-2xl font-semibold"
                            >
                              -
                            </button>

                            <span className="mt-1">{travellers.infants}</span>

                            <button
                              onClick={() =>
                                setTravellers((prev) => ({
                                  ...prev,
                                  infants: prev.infants + 1,
                                }))
                              }
                              className=" text-1xl font-semibold mt-1"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Travel Class */}

                        <h4 className="font-semibold mb-3">Travel Class</h4>

                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "Economy",
                            "Premium Economy",
                            "Business",
                            "First Class",
                          ].map((item) => (
                            <button
                              key={item}
                              onClick={() =>
                                setTravellers((prev) => ({
                                  ...prev,
                                  travelClass: item,
                                }))
                              }
                              className={`border rounded-lg py-2 text-sm ${travellers.travelClass === item
                                ? "bg-black text-white"
                                : ""
                                }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>

                        <button
                          className="mt-5 w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-xl cursor-pointer"
                          onClick={() => setShowTraveller(false)}
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <button
                type="button"
                className="text-black hover:text-neutral-700 font-bold flex items-center gap-2 mt-4"
              >
                + Add another leg
              </button>
            </div>
          )}

          {/* Search Button - Bottom Right */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-black hover:bg-neutral-800 transition-all text-white px-8 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Search Flights</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightForm;
