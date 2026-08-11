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
}

export default function CityInputField({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder = "Select City",
  subLabel = "City or Airport",
  inputClassName = "w-full text-2xl sm:text-3xl font-semibold outline-none placeholder:text-gray-400 border-b pb-3",
}: CityInputFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceId = useId();

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
      {label && (
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          {icon || <MapPin size={18} />}
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
        className={inputClassName}
        autoComplete="off"
      />

      {subLabel && <p className="text-gray-500 text-sm mt-1">{subLabel}</p>}

      {/* City Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 top-full mt-2 w-full min-w-[280px] max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 z-[9999] overflow-hidden text-left"
          >
            {/* Header Title */}
            <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span>{value ? "Search Results" : "Popular Destinations & Cities"}</span>
              <span className="text-[10px] text-blue-600 font-semibold">Select City</span>
            </div>

            {/* City Options List */}
            <div className="max-h-64 overflow-y-auto divide-y divide-gray-100 scrollbar-thin scrollbar-thumb-gray-300">
              {filteredCities.length > 0 ? (
                filteredCities.map((item, idx) => {
                  const isSelected = value.toLowerCase().includes(item.city.toLowerCase());
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelect(item)}
                      className={`flex items-center justify-between p-3 cursor-pointer hover:bg-blue-50/80 transition-colors group ${
                        isSelected ? "bg-blue-50/50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
                            <span className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.city}
                            </span>
                            {item.code && (
                              <span className="text-xs font-mono font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                                {item.code}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 line-clamp-1">{item.name}</p>
                        </div>
                      </div>

                      {isSelected && <Check size={16} className="text-blue-600 shrink-0" />}
                    </div>
                  );
                })
              ) : (
                <div className="p-4 text-center text-sm text-gray-500">
                  No cities matching &quot;{value}&quot;
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="bg-blue-50/40 px-4 py-2 text-[11px] text-blue-800 font-medium text-center border-t border-blue-100">
              💡 Type any city name or select from the list above
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
