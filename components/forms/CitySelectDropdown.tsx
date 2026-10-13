"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { MapPin, Building2, Compass, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface CityOption {
  city: string;
  code?: string;
  name: string;
  country: string;
  popular?: boolean;
  type?: "metro" | "beach" | "international" | "hill";
}

export const POPULAR_CITIES: CityOption[] = [
  { city: "Delhi", code: "DEL", name: "Indira Gandhi International Airport", country: "India", popular: true, type: "metro" },
  { city: "Mumbai", code: "BOM", name: "Chhatrapati Shivaji Maharaj Airport", country: "India", popular: true, type: "metro" },
  { city: "Bengaluru", code: "BLR", name: "Kempegowda International Airport", country: "India", popular: true, type: "metro" },
  { city: "Goa", code: "GOI", name: "Dabolim & Mopa Airport", country: "India", popular: true, type: "beach" },
  { city: "Hyderabad", code: "HYD", name: "Rajiv Gandhi International Airport", country: "India", popular: true, type: "metro" },
  { city: "Chennai", code: "MAA", name: "Chennai International Airport", country: "India", popular: true, type: "metro" },
  { city: "Kolkata", code: "CCU", name: "Netaji Subhash Chandra Bose Airport", country: "India", popular: true, type: "metro" },
  { city: "Jaipur", code: "JAI", name: "Jaipur International Airport", country: "India", popular: true, type: "hill" },
  { city: "Ahmedabad", code: "AMD", name: "Sardar Vallabhbhai Patel Airport", country: "India", popular: false, type: "metro" },
  { city: "Pune", code: "PNQ", name: "Pune Airport", country: "India", popular: true, type: "metro" },
  { city: "Kochi", code: "COK", name: "Cochin International Airport", country: "India", popular: false, type: "beach" },
  { city: "Manali", code: "KUU", name: "Kullu Manali Airport", country: "India", popular: true, type: "hill" },
  { city: "Varanasi", code: "VNS", name: "Lal Bahadur Shastri Airport", country: "India", popular: true, type: "metro" },
  { city: "Srinagar", code: "SXR", name: "Sheikh ul-Alam Airport", country: "India", popular: true, type: "hill" },
  { city: "Amritsar", code: "ATQ", name: "Sri Guru Ram Dass Jee Airport", country: "India", popular: false, type: "metro" },
  { city: "Lucknow", code: "LKO", name: "Chaudhary Charan Singh Airport", country: "India", popular: false, type: "metro" },
  { city: "Chandigarh", code: "IXC", name: "Shaheed Bhagat Singh Airport", country: "India", popular: false, type: "metro" },
  { city: "Patna", code: "PAT", name: "Jay Prakash Narayan Airport", country: "India", popular: false, type: "metro" },
  { city: "Udaipur", code: "UDR", name: "Maharana Pratap Airport", country: "India", popular: true, type: "hill" },
];

interface CityInputFieldProps {
  label?: string;
  icon?: React.ReactNode;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  subLabel?: string;
  inputClassName?: string;
  isDark?: boolean;
}

export default function CityInputField({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder = "Select City",
  subLabel = "City or Airport",
  inputClassName,
  isDark = false,
}: CityInputFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceId = useId();

  const defaultInputClass = isDark
    ? "w-full text-xl sm:text-2xl font-extrabold outline-none placeholder:text-gray-400 bg-transparent text-white border-none shadow-none ring-0"
    : "w-full text-2xl sm:text-3xl font-semibold outline-none placeholder:text-gray-400 border-b pb-3";

  const activeInputClass = isDark
    ? "w-full text-xl sm:text-2xl font-extrabold outline-none placeholder:text-gray-400 bg-transparent text-white border-none shadow-none ring-0"
    : (inputClassName || defaultInputClass);

  // Function to open this dropdown and notify others to close
  const openDropdown = () => {
    setIsOpen(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("form-popover-open", { detail: { id: instanceId } })
      );
    }
  };

  // Close dropdown when another form popover opens or outside click occurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleOtherPopoverOpen = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (customEvt.detail?.id !== instanceId) {
        setIsOpen(false);
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
  }, [instanceId]);

  // Filter cities based on current input text
  const filteredCities = POPULAR_CITIES.filter((item) => {
    if (!value) return true;
    const query = value.toLowerCase().trim();
    return (
      item.city.toLowerCase().includes(query) ||
      (item.code && item.code.toLowerCase().includes(query)) ||
      item.name.toLowerCase().includes(query) ||
      item.country.toLowerCase().includes(query)
    );
  });

  const handleSelect = (cityObj: CityOption) => {
    const formatted = cityObj.code ? `${cityObj.city} (${cityObj.code})` : cityObj.city;
    onChange(formatted);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Container: Transparent Dark Glass Box when isDark is true */}
      <div className={isDark ? "bg-slate-900/60 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-2xl p-3.5 sm:p-4 text-white shadow-md focus-within:border-white focus-within:bg-slate-900/80 transition-all duration-200" : ""}>
        {label && (
          <div className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
            {icon || <MapPin size={15} />}
            <span>{label}</span>
          </div>
        )}

        <input
          type="text"
          name={name}
          value={value}
          onClick={openDropdown}
          onFocus={openDropdown}
          onChange={(e) => {
            onChange(e.target.value);
            openDropdown();
          }}
          placeholder={placeholder}
          className={activeInputClass}
          style={isDark ? { backgroundColor: "transparent", color: "white" } : undefined}
          autoComplete="off"
        />

        {subLabel && <p className={`text-xs mt-1 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>{subLabel}</p>}
      </div>

      {/* City Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`absolute left-0 top-full mt-2 w-full min-w-[280px] max-w-sm sm:max-w-md rounded-2xl shadow-2xl z-[9999] overflow-hidden text-left ${isDark
              ? "bg-slate-900/95 backdrop-blur-2xl border border-white/10 text-white"
              : "bg-white border border-gray-200 text-gray-900"
              }`}
          >
            {/* Header Title */}
            <div className={`px-4 py-2.5 border-b flex items-center justify-between text-xs font-bold uppercase tracking-wider ${isDark
              ? "bg-slate-950/80 border-white/10 text-white"
              : "bg-gray-50 border-gray-100 text-gray-700"
              }`}>
              <span>{value ? "Search Results" : "Popular Destinations & Cities"}</span>
              <span className={isDark ? "text-gray-300" : "text-black"}>Select City</span>
            </div>

            {/* City Options List */}
            <div className={`max-h-64 overflow-y-auto divide-y scrollbar-thin ${isDark
              ? "divide-white/5 scrollbar-thumb-white/20"
              : "divide-gray-100 scrollbar-thumb-gray-300"
              }`}>
              {filteredCities.length > 0 ? (
                filteredCities.map((item, idx) => {
                  const isSelected = value.toLowerCase().includes(item.city.toLowerCase());
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelect(item)}
                      className={`flex items-center justify-between p-3 cursor-pointer transition-colors group ${isDark
                        ? isSelected
                          ? "bg-white/15 text-white font-bold"
                          : "hover:bg-white/10 text-gray-200"
                        : isSelected
                          ? "bg-gray-100 font-bold"
                          : "hover:bg-gray-50"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isDark
                          ? "bg-white/10 text-white group-hover:bg-white group-hover:text-black"
                          : "bg-gray-100 text-black group-hover:bg-black group-hover:text-white"
                          }`}>
                          {item.type === "international" ? (
                            <Compass size={16} />
                          ) : item.type === "beach" ? (
                            <MapPin size={16} />
                          ) : (
                            <Building2 size={16} />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-sm transition-colors ${isDark
                              ? "text-white group-hover:text-white"
                              : "text-gray-900 group-hover:text-black"
                              }`}>
                              {item.city}
                            </span>
                            {item.code && (
                              <span className={`text-xs font-mono font-semibold px-1.5 py-0.5 rounded ${isDark
                                ? "bg-white/10 text-gray-300"
                                : "bg-gray-100 text-gray-500"
                                }`}>
                                {item.code}
                              </span>
                            )}
                          </div>
                          <p className={`text-xs line-clamp-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{item.name}</p>
                        </div>
                      </div>

                      {isSelected && <Check size={16} className={isDark ? "text-white shrink-0" : "text-black shrink-0"} />}
                    </div>
                  );
                })
              ) : (
                <div className={`p-4 text-center text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  No cities matching &quot;{value}&quot;
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className={`px-4 py-2 text-[11px] font-medium text-center border-t ${isDark
              ? "bg-slate-950/80 border-white/10 text-gray-300"
              : "bg-gray-50 border-gray-200 text-gray-700"
              }`}>
              💡 Type any city name or select from the list above
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
