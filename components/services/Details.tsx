"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bus,
  Plane,
  Car,
  Compass,
  Bike,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Send,
  X,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface PureTextService {
  id: string;
  code: string;
  badge: string;
  title: string;
  startingPrice: string;
  shortDesc: string;
  icon: any;
  providesList: string[];
  featuresList: string[];
  popularOfferings: { name: string; duration: string; price: string; description: string }[];
}

const FIVE_SERVICES: PureTextService[] = [
  {
    id: "bus-services",
    code: "01",
    badge: "Intercity Bus Fleet",
    title: "EXPRESS BUS SERVICES",
    startingPrice: "From ₹499",
    shortDesc: "Luxury Volvo & Scania AC sleeper buses with live GPS tracking across 100+ cities.",
    icon: Bus,
    providesList: [
      "We provide 24/7 Volvo AC Sleeper & Seater Coach Reservations",
      "We provide Real-time Live GPS Bus Tracking for traveler safety",
      "We provide Reserved Seating for Female Solo Travelers",
      "We provide Clean Sanitized Blankets, Pillows & USB Charging Ports",
      "We provide Verified Highway Dining Rest Stops & Punctual Schedules",
      "We provide Instant Mobile E-Tickets with Zero Surge Charges",
    ],
    featuresList: [
      "Multi-axle Volvo & Scania Sleepers",
      "Live Location Sharing via SMS",
      "Sanitized Bedding & Power Outlets",
      "Instant 100% Refund Protection",
    ],
    popularOfferings: [
      { name: "Delhi → Manali AC Volvo Sleeper", duration: "12 Hours Overnight", price: "₹1,299", description: "Reclining sleeper berths with live GPS tracking and sanitized bedding." },
      { name: "Mumbai → Goa Express Multi-Axle", duration: "10 Hours Overnight", price: "₹1,499", description: "Coastal highway coach with verified dining stopovers & female reserved seats." },
      { name: "Bangalore → Chennai AC Seater Express", duration: "6 Hours Day Trip", price: "₹799", description: "High-frequency daytime AC seater connect with instant e-ticket." },
    ],
  },
  {
    id: "flight-services",
    code: "02",
    badge: "Commercial & Jet Charters",
    title: "FLIGHT BOOKING SERVICES",
    startingPrice: "From ₹2,999",
    shortDesc: "Domestic & international air tickets across 500+ airlines and VIP private jet charters.",
    icon: Plane,
    providesList: [
      "We provide Instant Seat Locking across 500+ Global Partner Airlines",
      "We provide Private Jet Charters & Executive VIP Aircraft Handling",
      "We provide Wholesale GDS Fares & Corporate Group Discounts",
      "We provide Priority Airport Lounge Access Passes",
      "We provide Complimentary In-flight Meal & Seat Pre-selection",
      "We provide 24/7 Flight Concierge & Baggage Loss Reimbursement",
    ],
    featuresList: [
      "Instant E-Ticket & Boarding Pass Issue",
      "Priority Check-in & Extra Baggage Allowance",
      "Zero Cancellation Fee Add-on Available",
      "24/7 Rebooking & Emergency Support",
    ],
    popularOfferings: [
      { name: "Delhi → Dubai Non-Stop Express", duration: "3h 40m Direct", price: "₹18,999", description: "Daily non-stop flight with 30kg baggage allowance & hot meals." },
      { name: "Mumbai → Singapore Premium Economy", duration: "5h 15m Flight", price: "₹24,999", description: "Spacious legroom seating with priority check-in & lounge voucher." },
      { name: "London Heathrow → New York JFK", duration: "7h 45m Direct", price: "₹45,999", description: "Transatlantic flight with zero change fee options." },
    ],
  },
  {
    id: "cab-services",
    code: "03",
    badge: "VIP Ground Transit",
    title: "AIRPORT & OUTSTATION CAB SERVICES",
    startingPrice: "From ₹999",
    shortDesc: "Punctual airport pickups and outstation cab rentals with zero surge pricing.",
    icon: Car,
    providesList: [
      "We provide 24/7 Doorstep Airport Pickups & Drops",
      "We provide Outstation Roundtrip Cab Rentals & One-Way Drops",
      "We provide Luxury Sedans, SUVs & Executive Tempo Travelers",
      "We provide Uniformed Professional Chauffeurs",
      "We provide 60 Minutes Free Airport Wait Time & Flight Delay Sync",
      "We provide Transparent Per-Kilometer Rates with Zero Surge Fares",
    ],
    featuresList: [
      "No Surge Pricing Guarantee",
      "Automatic Flight Delay Tracking",
      "Sanitized Vehicles with Bottled Water",
      "Corporate GST Invoicing Available",
    ],
    popularOfferings: [
      { name: "Airport Pick & Drop Transfer", duration: "24/7 Doorstep Pickup", price: "₹1,499", description: "Uniformed driver with name placard & free 60 minutes airport waiting time." },
      { name: "Outstation Weekend Cab Rental", duration: "Per Day / Fixed KM", price: "₹2,999", description: "Spacious Innova SUV for outstation trips, sightseeing & family travel." },
    ],
  },
  {
    id: "tour-honeymoon",
    code: "04",
    badge: "Tours & Honeymoons",
    title: "TOUR & HONEYMOON PACKAGES",
    startingPrice: "From ₹24,999",
    shortDesc: "End-to-end customized vacation itineraries and romantic overwater villa escapes.",
    icon: Compass,
    providesList: [
      "We provide Customized Domestic & International Vacation Packages",
      "We provide All-Inclusive Kashmir Valley & Gulmarg Snow Tours",
      "We provide Private Maldives Overwater Bungalow & Floating Breakfast Escapes",
      "We provide Bali Infinity Pool Villa & Romantic Flower Bath Packages",
      "We provide Private Sightseeing Vehicles with Personal Guides",
      "We provide 24/7 Destination Manager Assistance throughout your trip",
    ],
    featuresList: [
      "100% Tailor-Made Custom Itineraries",
      "Includes Airfare, 5-Star Stays & Meals",
      "Special Honeymoon Room Decoration",
      "Easy EMI Installment Options",
    ],
    popularOfferings: [
      { name: "Maldives Overwater Villa Honeymoon", duration: "5 Days / 4 Nights", price: "₹69,999", description: "Direct ocean access, floating breakfast & private candlelit beach dinner." },
      { name: "Golden Triangle (Delhi-Agra-Jaipur)", duration: "5 Days / 4 Nights", price: "₹19,999", description: "Private guided Taj Mahal sunrise visit and pink city palace experiences." },
      { name: "Kerala Backwaters & Tea Gardens", duration: "6 Days / 5 Nights", price: "₹22,999", description: "Overnight luxury houseboat cruise in Alleppey backwaters & spice tours." },
    ],
  },
  {
    id: "bike-services",
    code: "05",
    badge: "Mountain Safaris",
    title: "MOTORBIKE EXPEDITIONS & BIKE SERVICES",
    startingPrice: "From ₹18,999",
    shortDesc: "Royal Enfield bike trips across Leh-Ladakh, Spiti Valley & high Himalayan passes.",
    icon: Bike,
    providesList: [
      "We provide Fully-Supported Royal Enfield Himalayan Motorbike Expeditions",
      "We provide Leh-Ladakh Umling La Pass & Khardung La Circuit Safaris",
      "We provide Spiti Valley Rugged Off-Road Riding Tours",
      "We provide Luggage & Mechanic Van Backup on all riding routes",
      "We provide Onboard Medical Oxygen Cylinders & Emergency First-Aid",
      "We provide All Inner Line Permits, Passes & High-Altitude Camping Gear",
    ],
    featuresList: [
      "Top-Condition Royal Enfield 450 Fleet",
      "Dedicated Mechanic & Luggage Van",
      "Fuel Allowance & Gear Provided",
      "Experienced Road Captain Leadership",
    ],
    popularOfferings: [
      { name: "Leh-Ladakh Highest Pass Expedition", duration: "8 Days / 7 Nights", price: "₹34,999", description: "Ride to Umling La Pass with full mechanic van & oxygen cylinder backup." },
      { name: "Spiti Off-Road Circuit Tour", duration: "7 Days / 6 Nights", price: "₹28,999", description: "High altitude mountain passes, Key Monastery visits & homestays." },
    ],
  },
];

export default function Details() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length && window.innerWidth >= 768) {
        validCards.forEach((card, index) => {
          const fromX = index % 2 === 0 ? -50 : 50;
          gsap.fromTo(
            card,
            { opacity: 0, x: fromX },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleDropdown = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section ref={sectionRef} className="w-full bg-white text-black font-sans py-8 sm:py-12 px-4 sm:px-8 lg:px-16 border-t border-gray-200 select-none">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {FIVE_SERVICES.map((srv, index) => {
          const Icon = srv.icon;
          const isExpanded = expandedId === srv.id;

          return (
            <div
              key={srv.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`w-full bg-white border-2 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm ${
                isExpanded ? "border-blue-600 shadow-blue-100/50" : "border-gray-200 hover:border-black"
              }`}
            >
              {/* COLLAPSED STATE (COMPACT 1/4 VIEWPORT HEIGHT) */}
              <div
                onClick={() => toggleDropdown(srv.id)}
                className="min-h-[24vh] p-6 sm:p-8 flex flex-col justify-between cursor-pointer bg-white hover:bg-neutral-50/70 transition"
              >
                {/* Top Bar */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-2xl sm:text-3xl font-extrabold font-mono transition-colors ${
                        isExpanded ? "text-blue-600" : "text-black"
                      }`}
                    >
                      {srv.code}
                    </span>
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                        isExpanded ? "bg-blue-600 text-white" : "bg-black text-white"
                      }`}
                    >
                      {srv.badge}
                    </span>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? "rotate-180 bg-blue-600 text-white border-blue-600"
                        : "bg-gray-100 text-black border-black"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Center Title */}
                <div className="my-auto py-4">
                  <h3
                    className={`text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight transition-colors ${
                      isExpanded ? "text-blue-600" : "text-black"
                    }`}
                  >
                    {srv.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-lg font-medium mt-2 max-w-3xl transition-colors ${
                      isExpanded ? "text-blue-900/80" : "text-gray-600"
                    }`}
                  >
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Bottom Strip */}
                <div
                  className={`flex items-center justify-between pt-4 border-t text-xs sm:text-sm font-bold transition-colors ${
                    isExpanded ? "border-blue-100 text-blue-600" : "border-gray-200 text-black"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isExpanded ? "text-blue-600" : "text-black"}`} />
                    <span>{srv.startingPrice}</span>
                  </div>
                  <span
                    className={`flex items-center gap-1 font-extrabold uppercase hover:underline ${
                      isExpanded ? "text-blue-600" : "text-black"
                    }`}
                  >
                    {isExpanded ? "Hide Details ▲" : "Click to view what we provide ▼"}
                  </span>
                </div>
              </div>

              {/* ANIMATED DROPDOWN (BG WHITE ALL TIME, BLUE TEXT WHEN OPEN) */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="overflow-hidden border-t-2 border-blue-600 bg-white p-6 sm:p-10 space-y-8 text-blue-900"
                  >
                    {/* WHAT WE PROVIDE TEXT LIST */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono tracking-[0.25em] text-blue-600 uppercase font-bold">
                        /// EVERYTHING WE PROVIDE IN THIS SERVICE
                      </div>

                      <div className="space-y-3">
                        {srv.providesList.map((item, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 text-sm sm:text-base lg:text-lg font-bold text-blue-950">
                            <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* KEY ADVANTAGES TEXT GRID */}
                    <div className="space-y-3 pt-4 border-t border-blue-100">
                      <div className="text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
                        KEY GUARANTEES & ADVANTAGES
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-blue-900 font-medium">
                        {srv.featuresList.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5 bg-blue-50/80 p-3 rounded-xl border border-blue-200">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                            <span className="font-semibold text-blue-950">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* POPULAR ROUTE & PACKAGE TEXT OPTIONS */}
                    <div className="space-y-4 pt-4 border-t border-blue-100">
                      <div className="text-xs font-mono tracking-widest text-blue-600 uppercase font-bold">
                        POPULAR TRIPS & SCHEDULE OPTIONS
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {srv.popularOfferings.map((offering, oIdx) => (
                          <div
                            key={oIdx}
                            className="bg-blue-50/60 border border-blue-200 p-5 rounded-2xl space-y-3 flex flex-col justify-between"
                          >
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs text-blue-700 font-mono">
                                <span>{offering.duration}</span>
                                <span className="font-extrabold text-blue-600 text-sm">{offering.price}</span>
                              </div>
                              <h4 className="text-base font-extrabold text-blue-950">{offering.name}</h4>
                              <p className="text-xs text-blue-800 leading-relaxed font-medium">
                                {offering.description}
                              </p>
                            </div>

                            <button
                              onClick={() => setModalTitle(offering.name)}
                              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                            >
                              <span>Inquire / Book</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM ACTION */}
                    <div className="pt-4 flex items-center justify-between border-t border-blue-100">
                      <span className="text-xs font-semibold text-blue-700">24/7 Dedicated Support Desk Available</span>
                      <button
                        onClick={() => setModalTitle(srv.title)}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2"
                      >
                        <span>Request Custom Quote</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* QUICK INQUIRY MODAL */}
      <AnimatePresence>
        {modalTitle && (
          <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-black border-2 border-blue-600 rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <div className="text-[10px] font-mono font-bold text-blue-600 uppercase">QUICK INQUIRY</div>
                  <h4 className="text-base sm:text-lg font-black text-black">{modalTitle}</h4>
                </div>
                <button
                  onClick={() => setModalTitle(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-black flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you! Your booking inquiry for "${modalTitle}" has been received.`);
                  setModalTitle(null);
                }}
                className="space-y-4 text-xs font-medium"
              >
                <div>
                  <label className="block text-black font-bold mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Alex Morgan"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs text-black outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-black font-bold mb-1">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs text-black outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-bold mb-1">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-xs text-black outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl transition shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
