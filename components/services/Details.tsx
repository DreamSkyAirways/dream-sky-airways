
"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bus,
  Plane,
  Car,
  Compass,
  Mountain,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Send,
  X,
  MapPin,
  CalendarDays,
  Heart,
  Hotel,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TravelOffering {
  name: string;
  duration: string;
  price: string;
  description: string;
}

interface TravelService {
  id: string;
  code: string;
  badge: string;
  title: string;
  startingPrice: string;
  shortDesc: string;
  icon: LucideIcon;
  providesList: string[];
  featuresList: string[];
  popularOfferings: TravelOffering[];
}

const SERVICES: TravelService[] = [
  {
    id: "holiday-packages",
    code: "01",
    badge: "Discover Your Next Escape",
    title: "HOLIDAY PACKAGES",
    startingPrice: "Customised Pricing",
    shortDesc:
      "Explore memorable holidays with personalised itineraries, comfortable stays and experiences suited to your travel plans.",
    icon: Compass,
    providesList: [
      "Customised domestic and international holiday packages",
      "Family vacations, couple getaways and group holidays",
      "Destination sightseeing and local experiences",
      "Hotel and accommodation arrangements",
      "Travel itineraries based on your interests and schedule",
      "Trip planning assistance before your journey",
    ],
    featuresList: [
      "Personalised holiday itineraries",
      "Flexible destination choices",
      "Family and group travel options",
      "Assistance with trip planning",
    ],
    popularOfferings: [
      {
        name: "Kerala Backwaters Escape",
        duration: "6 Days / 5 Nights",
        price: "Request a quote",
        description:
          "Discover Kerala's backwaters, scenic landscapes, local culture and relaxing holiday experiences.",
      },
      {
        name: "Goa Beach Holiday",
        duration: "4 Days / 3 Nights",
        price: "Request a quote",
        description:
          "Plan a beach getaway with sightseeing, leisure time and optional local experiences.",
      },
      {
        name: "Golden Triangle Tour",
        duration: "5 Days / 4 Nights",
        price: "Request a quote",
        description:
          "Explore Delhi, Agra and Jaipur through a cultural and heritage-focused itinerary.",
      },
    ],
  },
  {
    id: "domestic-tours",
    code: "02",
    badge: "Explore Incredible India",
    title: "DOMESTIC TOUR PACKAGES",
    startingPrice: "Customised Pricing",
    shortDesc:
      "Discover India's mountains, beaches, heritage cities and cultural destinations with thoughtfully planned trips.",
    icon: MapPin,
    providesList: [
      "Domestic tours across popular Indian destinations",
      "Himachal Pradesh, Kashmir and Uttarakhand holidays",
      "Rajasthan heritage and cultural experiences",
      "Kerala, Goa and coastal holiday planning",
      "Local sightseeing and transfer arrangements",
      "Custom itineraries for families, couples and groups",
    ],
    featuresList: [
      "Multiple Indian destinations",
      "Flexible trip duration",
      "Sightseeing arrangements",
      "Options for different travel styles",
    ],
    popularOfferings: [
      {
        name: "Kashmir Valley Holiday",
        duration: "6 Days / 5 Nights",
        price: "Request a quote",
        description:
          "Explore Kashmir's mountain scenery, valleys and local attractions.",
      },
      {
        name: "Manali Mountain Escape",
        duration: "5 Days / 4 Nights",
        price: "Request a quote",
        description:
          "Enjoy mountain views, local sightseeing and a refreshing Himalayan getaway.",
      },
      {
        name: "Jaipur Heritage Tour",
        duration: "3 Days / 2 Nights",
        price: "Request a quote",
        description:
          "Discover Rajasthan's architecture, heritage attractions and local cuisine.",
      },
    ],
  },
  {
    id: "flight-booking",
    code: "03",
    badge: "Travel Connections",
    title: "FLIGHT BOOKING",
    startingPrice: "Fare on Request",
    shortDesc:
      "Plan domestic and international journeys with flight search assistance and travel booking support.",
    icon: Plane,
    providesList: [
      "Domestic flight booking assistance",
      "International flight booking assistance",
      "Flight options based on route and travel dates",
      "Fare and schedule comparison assistance",
      "Support with booking-related queries",
      "Guidance regarding airline baggage and cancellation rules",
    ],
    featuresList: [
      "Domestic and international routes",
      "Travel-date based options",
      "Booking assistance",
      "Airline policy guidance",
    ],
    popularOfferings: [
      {
        name: "Domestic Flight Booking",
        duration: "India",
        price: "Fare on Request",
        description:
          "Explore flight options for your preferred Indian destination and travel date.",
      },
      {
        name: "International Flight Booking",
        duration: "International",
        price: "Fare on Request",
        description:
          "Find suitable international flight options for your planned journey.",
      },
    ],
  },
  {
    id: "cab-transfers",
    code: "04",
    badge: "Comfortable Road Travel",
    title: "CAB & TRANSFER SERVICES",
    startingPrice: "Fare on Request",
    shortDesc:
      "Arrange convenient local transfers, airport pickups and outstation journeys for holidays and business trips.",
    icon: Car,
    providesList: [
      "Airport pickup and drop arrangements",
      "Local sightseeing transfers",
      "Outstation one-way and round-trip cab enquiries",
      "Family and group vehicle options, subject to availability",
      "Hotel-to-destination transfer planning",
      "Travel itinerary and transfer coordination",
    ],
    featuresList: [
      "Local and outstation travel",
      "Pickup and drop arrangements",
      "Family travel options",
      "Advance booking enquiries",
    ],
    popularOfferings: [
      {
        name: "Airport Transfer",
        duration: "Pickup / Drop",
        price: "Request a quote",
        description:
          "Arrange a pickup or drop based on your location, travel time and vehicle needs.",
      },
      {
        name: "Outstation Cab",
        duration: "One-way / Round Trip",
        price: "Request a quote",
        description:
          "Plan road journeys for weekend trips, sightseeing and family holidays.",
      },
    ],
  },
  {
    id: "adventure-tours",
    code: "05",
    badge: "For the Love of Adventure",
    title: "ADVENTURE & HONEYMOON TOURS",
    startingPrice: "Customised Pricing",
    shortDesc:
      "Plan romantic escapes and outdoor adventures, from Himalayan holidays to relaxing couple getaways.",
    icon: Mountain,
    providesList: [
      "Honeymoon and romantic holiday planning",
      "Mountain and nature-focused itineraries",
      "Leh-Ladakh and Spiti Valley trip enquiries",
      "Adventure activities subject to destination availability",
      "Accommodation and sightseeing coordination",
      "Customised trips for couples and small groups",
    ],
    featuresList: [
      "Romantic getaway options",
      "Mountain and nature holidays",
      "Flexible itinerary planning",
      "Activity and stay coordination",
    ],
    popularOfferings: [
      {
        name: "Leh-Ladakh Adventure",
        duration: "8 Days / 7 Nights",
        price: "Request a quote",
        description:
          "Plan a Himalayan journey with destination sightseeing and accommodation options.",
      },
      {
        name: "Kashmir Couple Getaway",
        duration: "5 Days / 4 Nights",
        price: "Request a quote",
        description:
          "Enjoy mountain scenery, relaxed sightseeing and a personalised romantic itinerary.",
      },
      {
        name: "Mussoorie Hill Escape",
        duration: "3 Days / 2 Nights",
        price: "Request a quote",
        description:
          "Experience a refreshing hill-station break with scenic views and local attractions.",
      },
    ],
  },
];

const additionalServices = [
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "Find accommodation options suited to your destination, budget and travel dates.",
  },
  {
    icon: Heart,
    title: "Honeymoon Planning",
    description:
      "Plan a romantic getaway with personalised destinations and experiences.",
  },
  {
    icon: Users,
    title: "Family & Group Trips",
    description:
      "Coordinate travel plans for families, friends and group holidays.",
  },
];

type InquirySelection = {
  title: string;
  service: string;
};

export default function Details() {
  const [expandedId, setExpandedId] = useState<string | null>(
    "holiday-packages"
  );
  const [inquiry, setInquiry] = useState<InquirySelection | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!inquiry) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setInquiry(null);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inquiry]);

  const openInquiry = (title: string, service: string) => {
    setInquiry({ title, service });
  };

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inquiry || submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const date = String(formData.get("date") || "");
    const travellers = String(formData.get("travellers") || "");
    const message = String(formData.get("message") || "").trim();

    const subject = `Travel enquiry: ${inquiry.title}`;

    const body = [
      "Travel enquiry for Dream Sky Airways",
      "",
      `Service: ${inquiry.service}`,
      `Package / Request: ${inquiry.title}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Preferred travel date: ${date || "Not specified"}`,
      `Number of travellers: ${travellers || "Not specified"}`,
      "",
      "Additional details:",
      message || "None provided",
    ].join("\n");

    const mailtoUrl =
      `mailto:support@dreamskyairways.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setSubmitting(true);
    window.location.href = mailtoUrl;
    setSubmitting(false);
    setInquiry(null);
  };

  return (
    <section
      id="travel-services"
      className="relative w-full overflow-hidden bg-[#f8faf7] px-4 py-14 font-sans sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#d8eee4]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#f9e4cf]/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d8e8dd] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#087e70]">
            <Sparkles size={15} className="text-[#e88b42]" />
            Travel Experiences by Dream Sky Airways
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-[#173b35] sm:text-5xl lg:text-6xl">
            Find the Right Trip
            <span className="mt-2 block text-[#087e70]">
              for Your Next Adventure
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#61736b] sm:text-base sm:leading-8">
            From holiday packages and cultural tours to comfortable transfers
            and mountain adventures, explore travel services designed around
            your destination, preferences and plans.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-5 sm:space-y-7">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <article
                key={service.id}
                className={`overflow-hidden rounded-[28px] border bg-white transition-all duration-300 ${
                  isExpanded
                    ? "border-[#087e70]/40 shadow-xl shadow-[#173b35]/[0.07]"
                    : "border-[#e3ece5] shadow-sm hover:border-[#087e70]/30 hover:shadow-lg"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={`details-${service.id}`}
                  onClick={() =>
                    setExpandedId(isExpanded ? null : service.id)
                  }
                  className="block w-full p-5 text-left sm:p-8 lg:p-10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`font-mono text-2xl font-bold sm:text-3xl ${
                          isExpanded ? "text-[#087e70]" : "text-[#9aaba0]"
                        }`}
                      >
                        {service.code}
                      </span>

                      <span className="rounded-full bg-[#edf6f0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#315d4e] sm:text-xs">
                        {service.badge}
                      </span>
                    </div>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                        isExpanded
                          ? "border-[#087e70] bg-[#087e70] text-white"
                          : "border-[#dbe8df] bg-[#f8faf7] text-[#315d4e]"
                      }`}
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </div>

                  <div className="mt-7 flex flex-col gap-5 sm:mt-9 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-3xl">
                      <div className="mb-3 flex items-center gap-2 text-[#087e70]">
                        <Icon size={21} />
                        <span className="text-xs font-bold uppercase tracking-[0.15em]">
                          Travel Service
                        </span>
                      </div>

                      <h3 className="text-2xl font-black leading-tight tracking-tight text-[#173b35] sm:text-4xl lg:text-5xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#61736b] sm:text-base">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#e8eee9] pt-4 sm:min-w-40 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                      <span className="text-xs font-semibold text-[#71857b]">
                        Pricing
                      </span>
                      <span className="text-sm font-extrabold text-[#087e70] sm:text-right">
                        {service.startingPrice}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#e8eee9] pt-4 text-xs font-bold sm:text-sm">
                    <span className="text-[#71857b]">
                      {service.popularOfferings.length} trip ideas
                    </span>

                    <span className="inline-flex items-center gap-2 text-[#087e70]">
                      {isExpanded ? "Hide details" : "Explore this service"}
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`details-${service.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#e3ece5] bg-[#fbfdfb] p-5 sm:p-8 lg:p-10">
                        {/* Service inclusions */}
                        <div>
                          <div className="mb-5">
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e70]">
                              How We Can Help
                            </span>
                            <h4 className="mt-2 text-xl font-extrabold text-[#173b35] sm:text-2xl">
                              Explore service options
                            </h4>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            {service.providesList.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3 rounded-2xl border border-[#e3ece5] bg-white p-4"
                              >
                                <CheckCircle2
                                  size={19}
                                  className="mt-0.5 shrink-0 text-[#087e70]"
                                />
                                <span className="text-sm leading-6 text-[#40584e]">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mt-9 border-t border-[#e3ece5] pt-8">
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e70]">
                            Travel Planning Highlights
                          </span>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {service.featuresList.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-2.5 rounded-xl bg-[#edf6f0] p-4"
                              >
                                <Sparkles
                                  size={16}
                                  className="mt-0.5 shrink-0 text-[#e88b42]"
                                />
                                <span className="text-sm font-semibold leading-6 text-[#315d4e]">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Popular trip ideas */}
                        <div className="mt-9 border-t border-[#e3ece5] pt-8">
                          <div className="mb-5">
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e70]">
                              Get Inspired
                            </span>
                            <h4 className="mt-2 text-xl font-extrabold text-[#173b35] sm:text-2xl">
                              Popular trip ideas
                            </h4>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {service.popularOfferings.map((offering) => (
                              <div
                                key={offering.name}
                                className="flex flex-col rounded-2xl border border-[#e3ece5] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#71857b]">
                                    <CalendarDays size={14} />
                                    {offering.duration}
                                  </span>
                                  <MapPin
                                    size={17}
                                    className="shrink-0 text-[#e88b42]"
                                  />
                                </div>

                                <h5 className="mt-4 text-lg font-extrabold leading-6 text-[#173b35]">
                                  {offering.name}
                                </h5>

                                <p className="mt-3 flex-1 text-sm leading-6 text-[#61736b]">
                                  {offering.description}
                                </p>

                                <div className="mt-5 border-t border-[#e8eee9] pt-4">
                                  <p className="text-xs font-semibold text-[#71857b]">
                                    Pricing
                                  </p>
                                  <p className="mt-1 text-sm font-extrabold text-[#087e70]">
                                    {offering.price}
                                  </p>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      openInquiry(
                                        offering.name,
                                        service.title
                                      )
                                    }
                                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#087e70] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#06685d]"
                                  >
                                    Enquire About This Trip
                                    <ArrowRight size={16} />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Service CTA */}
                        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#173b35] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                          <div>
                            <h4 className="text-lg font-extrabold text-white">
                              Need a customised travel plan?
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-white/70">
                              Share your preferences and enquire about{" "}
                              {service.title.toLowerCase()}.
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              openInquiry(service.title, service.title)
                            }
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#e88b42] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#d9782f]"
                          >
                            Request an Enquiry
                            <Send size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        {/* Additional travel services */}
        <div className="mt-16">
          <div className="mb-7 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e70]">
              More Ways to Travel
            </span>
            <h3 className="mt-3 text-2xl font-black text-[#173b35] sm:text-3xl">
              Travel Planning for Every Occasion
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {additionalServices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e3ece5] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6f0] text-[#087e70]">
                    <Icon size={23} />
                  </span>
                  <h4 className="mt-5 text-lg font-extrabold text-[#173b35]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-[#61736b]">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => openInquiry(item.title, item.title)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#087e70] hover:text-[#e88b42]"
                  >
                    Make an enquiry
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Travel enquiry modal */}
      <AnimatePresence>
        {inquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setInquiry(null);
              }
            }}
            className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-[#102f2a]/65 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="travel-inquiry-title"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="my-auto max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-[#e3ece5] bg-white p-5 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#e8eee9] pb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e70]">
                    Dream Sky Airways
                  </span>
                  <h3
                    id="travel-inquiry-title"
                    className="mt-2 text-2xl font-black text-[#173b35]"
                  >
                    Travel Enquiry
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#61736b]">
                    Tell us a little about your travel plans.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setInquiry(null)}
                  aria-label="Close enquiry form"
                  className="rounded-full bg-[#f0f6f1] p-2 text-[#315d4e] transition hover:bg-[#e3ece5]"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="mt-5 rounded-xl bg-[#edf6f0] p-4">
                <p className="text-xs font-semibold text-[#71857b]">
                  Selected service
                </p>
                <p className="mt-1 font-bold text-[#173b35]">
                  {inquiry.service}
                </p>
                <p className="mt-1 text-sm text-[#087e70]">
                  {inquiry.title}
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="travel-name"
                    className="mb-1.5 block text-sm font-semibold text-[#25443d]"
                  >
                    Full name *
                  </label>
                  <input
                    id="travel-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-[#dbe8df] bg-[#fbfdfb] px-4 py-3 text-sm text-[#173b35] outline-none transition focus:border-[#087e70] focus:ring-2 focus:ring-[#087e70]/10"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="travel-phone"
                      className="mb-1.5 block text-sm font-semibold text-[#25443d]"
                    >
                      Phone number *
                    </label>
                    <input
                      id="travel-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-[#dbe8df] bg-[#fbfdfb] px-4 py-3 text-sm text-[#173b35] outline-none transition focus:border-[#087e70] focus:ring-2 focus:ring-[#087e70]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="travel-email"
                      className="mb-1.5 block text-sm font-semibold text-[#25443d]"
                    >
                      Email address
                    </label>
                    <input
                      id="travel-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#dbe8df] bg-[#fbfdfb] px-4 py-3 text-sm text-[#173b35] outline-none transition focus:border-[#087e70] focus:ring-2 focus:ring-[#087e70]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="travel-date"
                      className="mb-1.5 block text-sm font-semibold text-[#25443d]"
                    >
                      Preferred travel date
                    </label>
                    <input
                      id="travel-date"
                      name="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-xl border border-[#dbe8df] bg-[#fbfdfb] px-4 py-3 text-sm text-[#173b35] outline-none transition focus:border-[#087e70] focus:ring-2 focus:ring-[#087e70]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="travel-travellers"
                      className="mb-1.5 block text-sm font-semibold text-[#25443d]"
                    >
                      Number of travellers
                    </label>
                    <select
                      id="travel-travellers"
                      name="travellers"
                      defaultValue="2"
                      className="w-full rounded-xl border border-[#dbe8df] bg-[#fbfdfb] px-4 py-3 text-sm text-[#173b35] outline-none transition focus:border-[#087e70] focus:ring-2 focus:ring-[#087e70]/10"
                    >
                      <option value="1">1 traveller</option>
                      <option value="2">2 travellers</option>
                      <option value="3-5">3–5 travellers</option>
                      <option value="6-10">6–10 travellers</option>
                      <option value="10+">More than 10</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="travel-message"
                    className="mb-1.5 block text-sm font-semibold text-[#25443d]"
                  >
                    Destination or other requirements
                  </label>
                  <textarea
                    id="travel-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us your destination, budget or preferences..."
                    className="w-full resize-y rounded-xl border border-[#dbe8df] bg-[#fbfdfb] px-4 py-3 text-sm text-[#173b35] outline-none transition focus:border-[#087e70] focus:ring-2 focus:ring-[#087e70]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087e70] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#06685d] disabled:opacity-60"
                >
                  Prepare Email Enquiry
                  <Send size={16} />
                </button>

                <p className="text-xs leading-5 text-[#71857b]">
                  This opens your default email application with the enquiry
                  details prepared. You must send the email to complete the
                  request.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
