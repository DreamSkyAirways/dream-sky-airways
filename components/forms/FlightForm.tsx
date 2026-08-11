"use client";

import React, { useState, useRef, useEffect } from "react";
import { GoArrowSwitch } from "react-icons/go";
import {
  CalendarDays,
  PlaneLanding,
  PlaneTakeoff,
  Search,
  Users,
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

const FlightForm = () => {
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
    // axios.post("/api/flights/search", { tripType, ...formData });
    router.push("/flights");
  };

  return (
    <div className="mt-6 px-2 sm:px-4">
      {/* Trip Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
        {TripTabs.map((trip) => (
          <button
            key={trip}
            onClick={() => setTripType(trip as typeof tripType)}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200 border   shadow-sm text-sm sm:text-base
              ${tripType === trip
                ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
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
            <div className=" grid
                          grid-cols-1
                          md:grid-cols-2
                          xl:grid-cols-15
                          gap-4
                          relative
                          border
                          border-gray-200
                          p-4
                          sm:p-5
                          rounded-2xl
                          bg-gray-50 ">
              {/* From */}
              <div className="
                            xl:col-span-3
                            p-3
                            border-b
                            md:border-b
                            xl:border-r
                            xl:border-b-0
                          ">
                <CityInputField
                  label="From"
                  icon={<PlaneTakeoff size={18} />}
                  name="from"
                  value={formData.from}
                  onChange={(val) => setFormData((prev) => ({ ...prev, from: val }))}
                  placeholder="Delhi (DEL)"
                  subLabel="Departure City"
                  inputClassName="w-full text-2xl sm:text-3xl font-semibold outline-none placeholder:text-gray-400 bg-transparent"
                />
              </div>

              {/* Swap Button */}
              <div className="hidden lg:flex absolute left-[205px] top-[55%] -translate-y-1/2 z-999">
                <button
                  type="button"
                  onClick={handleSwap}
                  className="bg-white p-1 rounded-full border border-gray-300  hover:rotate-180 transition-all duration-300"
                >
                  <GoArrowSwitch className="text-blue-600 text-2xl" />
                </button>
              </div>

              {/* To */}
              <div className="
                      xl:col-span-3
                      p-3
                      border-b
                      md:border-b
                      xl:border-r
                      xl:border-b-0
                    ">
                <CityInputField
                  label="To"
                  icon={<PlaneLanding size={18} />}
                  name="to"
                  value={formData.to}
                  onChange={(val) => setFormData((prev) => ({ ...prev, to: val }))}
                  placeholder="Mumbai (BOM)"
                  subLabel="Destination City"
                  inputClassName="w-full text-2xl sm:text-3xl font-semibold outline-none placeholder:text-gray-400 bg-transparent"
                />
              </div>

              <div className="
                          xl:col-span-3
                          p-3
                          border-b
                          md:border-b
                          xl:border-r
                          xl:border-b-0
                        ">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <CalendarDays size={18} />
                  <span>Departure</span>
                </div>
                <DepartureCalendar />
              </div>

              {/* Return Date */}
              {tripType === "Round Trip" && (
                <div className="lg:col-span-3 border-r p-3">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <CalendarDays size={18} />
                    <span>Return</span>
                  </div>
                  <DepartureCalendar />
                </div>
              )}

              {/* Travellers & Class */}
              <div ref={travellerRef} className="lg:col-span-3 p-3 relative">
                <div
                  onClick={toggleTraveller}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <Users size={18} />
                    <span>Travellers & Class</span>
                  </div>

                  <h2 className="text-2xl font-bold">
                    {travellers.adults +
                      travellers.children +
                      travellers.infants}{" "}
                    Traveller
                  </h2>

                  <p className="text-gray-500">{travellers.travelClass}</p>
                </div>

                {showTraveller && (
                  <div
                    className="
                        absolute
                        top-full
                        right-0
                        mt-4
                        w-[350px]
                        bg-white
                        rounded-2xl
                        shadow-xl
                        p-5
                        z-50
                      "
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
                              ? "bg-blue-600 text-white"
                              : ""
                            }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    <button
                      className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl cursor-pointer"
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
                <div className=" grid
                          grid-cols-1
                          md:grid-cols-2
                          xl:grid-cols-15
                          gap-4
                          relative
                          border
                          border-gray-200
                          p-4
                          sm:p-5
                          rounded-2xl
                          bg-gray-50 ">
                  {/* From */}
                  <div className="lg:col-span-3 border-r p-3 ">
                    <CityInputField
                      label="From"
                      icon={<PlaneTakeoff size={18} />}
                      name="from"
                      value={formData.from}
                      onChange={(val) => setFormData((prev) => ({ ...prev, from: val }))}
                      placeholder="Delhi (DEL)"
                      subLabel="Departure City"
                      inputClassName="w-full text-2xl sm:text-3xl font-semibold outline-none placeholder:text-gray-400 bg-transparent"
                    />
                  </div>

                  <div className="hidden lg:flex absolute left-[205px] top-[55%] -translate-y-1/2 z-999">
                    <button
                      type="button"
                      onClick={handleSwap}
                      className="bg-white p-1 rounded-full border border-gray-300  hover:rotate-180 transition-all duration-300"
                    >
                      <GoArrowSwitch className="text-blue-600 text-2xl" />
                    </button>
                  </div>

                  <div className="lg:col-span-3 border-r p-3 ">
                    <CityInputField
                      label="To"
                      icon={<PlaneLanding size={18} />}
                      name="to"
                      value={formData.to}
                      onChange={(val) => setFormData((prev) => ({ ...prev, to: val }))}
                      placeholder="Mumbai (BOM)"
                      subLabel="Destination City"
                      inputClassName="w-full text-2xl sm:text-3xl font-semibold outline-none placeholder:text-gray-400 bg-transparent"
                    />
                  </div>

                  <div className="lg:col-span-3 border-r p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <CalendarDays size={18} />
                      <span>Departure</span>
                    </div>
                    <DepartureCalendar />
                  </div>

                  {/* Return Date */}

                  <div className="lg:col-span-3 border-r p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <CalendarDays size={18} />
                      <span>Return</span>
                    </div>
                    <DepartureCalendar />
                  </div>

                  {/* Travellers & Class */}
                  <div className="lg:col-span-3 p-3 relative">
                    <div
                      onClick={() => setShowTraveller(!showTraveller)}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                        <Users size={18} />
                        <span>Travellers & Class</span>
                      </div>

                      <h2 className="text-2xl font-bold">
                        {travellers.adults +
                          travellers.children +
                          travellers.infants}{" "}
                        Traveller
                      </h2>

                      <p className="text-gray-500">{travellers.travelClass}</p>
                    </div>
                    {showTraveller && (
                      <div
                        className="
                            absolute
                            top-full
                            right-0
                            mt-4
                            w-[350px]
                            bg-white
                            rounded-2xl
                            shadow-xl
                            p-5
                            z-50  
                          "
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
                                  ? "bg-blue-600 text-white"
                                  : ""
                                }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>

                        <button
                          className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl"
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
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mt-4"
              >
                + Add another leg
              </button>
            </div>
          )}

          {/* Search Button - Bottom (Common for all trip types) */}
          <div className="mt-10">
            <button


              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              <Search size={28} />
              Search Flights
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightForm;
