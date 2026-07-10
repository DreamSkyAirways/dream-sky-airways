import { useState } from "react";

type TripType = "one-way" | "round-trip";
type CabinClass = "economy" | "premium-economy" | "business" | "first";

interface Passengers {
  adults: number;
  children: number;
  infants: number;
}

export default function FlightSearch() {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [flyingFrom, setFlyingFrom] = useState("");
  const [flyingTo, setFlyingTo] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [passengers, setPassengers] = useState<Passengers>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabinClass, setCabinClass] = useState<CabinClass>("economy");
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date(2026, 4, 1)); // May 2026

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const updatePassenger = (type: keyof Passengers, delta: number) => {
    setPassengers((prev) => {
      const newValue = prev[type] + delta;
      if (type === "adults" && newValue < 1) return prev;
      if (newValue < 0) return prev;
      if (type === "infants" && newValue > prev.adults) return prev;
      return { ...prev, [type]: newValue };
    });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCabinLabel = () => {
    const labels: Record<CabinClass, string> = {
      economy: "Economy",
      "premium-economy": "Premium Economy",
      business: "Business",
      first: "First",
    };
    return labels[cabinClass];
  };

  const handleSearch = () => {
    console.log({
      tripType,
      flyingFrom,
      flyingTo,
      departureDate,
      returnDate,
      passengers,
      cabinClass,
    });
    alert("Search initiated! Check console for details.");
  };

  const swapLocations = () => {
    const temp = flyingFrom;
    setFlyingFrom(flyingTo);
    setFlyingTo(temp);
  };

  // Calendar Component
  const Calendar = ({
    selectedDate,
    onSelect,
    onClose,
  }: {
    selectedDate: Date | null;
    onSelect: (date: Date) => void;
    onClose: () => void;
  }) => {
    const [viewMonth, setViewMonth] = useState(calendarMonth);

    const getDaysInMonth = (date: Date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
      const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
      return day === 0 ? 6 : day - 1; // Monday = 0
    };

    const isDateDisabled = (date: Date) => {
      const today = new Date(2026, 4, 27); // May 27, 2026
      today.setHours(0, 0, 0, 0);
      return date < today;
    };

    const renderMonth = (monthOffset: number) => {
      const currentMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + monthOffset, 1);
      const daysInMonth = getDaysInMonth(currentMonth);
      const firstDay = getFirstDayOfMonth(currentMonth);
      const days: (number | null)[] = [];

      for (let i = 0; i < firstDay; i++) {
        days.push(null);
      }
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
      }

      const monthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

      return (
        <div className="flex-1">
          <div className="text-center font-semibold text-gray-800 mb-4">{monthName}</div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
              <div key={day} className="text-gray-500 font-medium py-2">
                {day}
              </div>
            ))}
            {days.map((day, idx) => {
              if (day === null) {
                return <div key={`empty-${idx}`} />;
              }
              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              const disabled = isDateDisabled(date);
              const isSelected =
                selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

              return (
                <button
                  key={day}
                  disabled={disabled}
                  onClick={() => {
                    onSelect(date);
                    onClose();
                  }}
                  className={`py-2 rounded-full transition-colors ${
                    disabled
                      ? "text-gray-300 cursor-not-allowed"
                      : isSelected
                      ? "bg-sky-600 text-white"
                      : "hover:bg-sky-100 text-gray-700"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 min-w-[600px]">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex gap-8">
          {renderMonth(0)}
          {renderMonth(1)}
        </div>
      </div>
    );
  };

  return (
    <div>

      {/* Hero Section */}
      <div>
        
        {/* Search Card */}
        <div className=" p-6 md:p-8">
          {/* Trip Type Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setTripType("one-way")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                tripType === "one-way"
                  ? "bg-sky-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              One-way
            </button>
            <button
              onClick={() => setTripType("round-trip")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                tripType === "round-trip"
                  ? "bg-sky-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Round-trip
            </button>
          </div>



          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Flying From / To */}
            <div className="md:col-span-2 flex items-center gap-2">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Flying from"
                  value={flyingFrom}
                  onChange={(e) => setFlyingFrom(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <button
                onClick={swapLocations}
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors "
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Flying to"
                  value={flyingTo}
                  onChange={(e) => setFlyingTo(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="relative">
              <div
                onClick={() => {
                  setShowDepartureCalendar(!showDepartureCalendar);
                  setShowReturnCalendar(false);
                  setShowPassengerDropdown(false);
                }}
                className="flex items-center gap-3 px-4 py-4 border border-gray-300 rounded-xl cursor-pointer hover:border-sky-500 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className={departureDate ? "text-gray-800" : "text-gray-400"}>
                  {departureDate ? formatDate(departureDate) : "Departure"}
                </span>
              </div>
              {showDepartureCalendar && (
                <Calendar
                  selectedDate={departureDate}
                  onSelect={(date) => setDepartureDate(date)}
                  onClose={() => setShowDepartureCalendar(false)}
                />
              )}
            </div>

            {/* Return Date (only for round-trip) */}
            {tripType === "round-trip" && (
              <div className="relative">
                <div
                  onClick={() => {
                    setShowReturnCalendar(!showReturnCalendar);
                    setShowDepartureCalendar(false);
                    setShowPassengerDropdown(false);
                  }}
                  className="flex items-center gap-3 px-4 py-4 border border-gray-300 rounded-xl cursor-pointer hover:border-sky-500 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className={returnDate ? "text-gray-800" : "text-gray-400"}>
                    {returnDate ? formatDate(returnDate) : "Return"}
                  </span>
                </div>
                {showReturnCalendar && (
                  <Calendar
                    selectedDate={returnDate}
                    onSelect={(date) => setReturnDate(date)}
                    onClose={() => setShowReturnCalendar(false)}
                  />
                )}
              </div>
            )}

            {/* Passengers & Class */}
            <div className={`relative ${tripType === "one-way" ? "md:col-span-1" : ""}`}>
              <div
                onClick={() => {
                  setShowPassengerDropdown(!showPassengerDropdown);
                  setShowDepartureCalendar(false);
                  setShowReturnCalendar(false);
                }}
                className="flex items-center gap-3 px-4 py-4 border border-gray-300 rounded-xl cursor-pointer hover:border-sky-500 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-800">
                  {totalPassengers} Passenger{totalPassengers !== 1 ? "s" : ""}, {getCabinLabel()}
                </span>
                <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Passenger Dropdown */}
              {showPassengerDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 min-w-[320px]">
                  {/* Adults */}
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium text-gray-800">Adults</div>
                      <div className="text-sm text-gray-500">12 years and above</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updatePassenger("adults", -1)}
                        disabled={passengers.adults <= 1}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-medium">{passengers.adults}</span>
                      <button
                        onClick={() => updatePassenger("adults", 1)}
                        className="w-8 h-8 rounded-full border border-sky-500 flex items-center justify-center text-sky-600 hover:bg-sky-50"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <div>
                      <div className="font-medium text-gray-800">Children</div>
                      <div className="text-sm text-gray-500">2-11 years</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updatePassenger("children", -1)}
                        disabled={passengers.children <= 0}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-medium">{passengers.children}</span>
                      <button
                        onClick={() => updatePassenger("children", 1)}
                        className="w-8 h-8 rounded-full border border-sky-500 flex items-center justify-center text-sky-600 hover:bg-sky-50"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <div>
                      <div className="font-medium text-gray-800">Infants</div>
                      <div className="text-sm text-gray-500">Below 2 years</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updatePassenger("infants", -1)}
                        disabled={passengers.infants <= 0}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-medium">{passengers.infants}</span>
                      <button
                        onClick={() => updatePassenger("infants", 1)}
                        disabled={passengers.infants >= passengers.adults}
                        className="w-8 h-8 rounded-full border border-sky-500 flex items-center justify-center text-sky-600 hover:bg-sky-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Cabin Class */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-100">
                    {(["economy", "premium-economy", "business", "first"] as CabinClass[]).map((cls) => (
                      <button
                        key={cls}
                        onClick={() => setCabinClass(cls)}
                        className={`py-3 px-4 rounded-lg font-medium transition-all ${
                          cabinClass === cls
                            ? "bg-sky-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {cls === "economy" && "Economy"}
                        {cls === "premium-economy" && "Premium Economy"}
                        {cls === "business" && "Business"}
                        {cls === "first" && "First"}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4  mt-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            SEARCH FLIGHTS
          </button>
        </div>

      </div>

      {/* Click outside to close dropdowns */}
      {(showPassengerDropdown || showDepartureCalendar || showReturnCalendar) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowPassengerDropdown(false);
            setShowDepartureCalendar(false);
            setShowReturnCalendar(false);
          }}
        />
      )}
    </div>
  );
}
