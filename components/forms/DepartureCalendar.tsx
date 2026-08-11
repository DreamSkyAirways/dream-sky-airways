"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

import "react-day-picker/dist/style.css";

const DepartureCalendar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceId = useId();

  const toggleOpen = () => {
    const nextState = !open;
    setOpen(nextState);
    if (nextState && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("form-popover-open", { detail: { id: instanceId } })
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleOtherPopoverOpen = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (customEvt.detail?.id !== instanceId) {
        setOpen(false);
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

  return (
    <div ref={containerRef} className="lg:col-span-2 relative">
      <div onClick={toggleOpen} className="cursor-pointer">
        <h2 className="text-3xl font-semibold text-gray-900">
          {selected ? format(selected, "dd") : "--"}
        </h2>

        <p className="text-gray-600">
          {selected ? format(selected, "MMM yyyy, EEEE") : "Select Date"}
        </p>
      </div>

      {/* Calendar Popup */}
      {open && (
        <div
          className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            mt-4
            bg-white
            shadow-2xl
            rounded-3xl
            p-6
            z-[9999]
            border border-gray-100
          "
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              setSelected(date);
              setOpen(false);
            }}
            numberOfMonths={2}
            pagedNavigation
            disabled={{ before: new Date() }}
            classNames={{
              months: "flex gap-5",
              month: "space-y-4",
              month_caption: "flex justify-center font-semibold text-lg",
              weekdays: "flex justify-between",
              weekday: "w-10 text-center text-gray-400 text-sm",
              week: "flex gap-2",
              day: "w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer",
              selected: "bg-blue-600 text-white hover:bg-blue-600",
              today: "border border-blue-600 rounded-full",
            }}
            components={{
              Chevron: (props) =>
                props.orientation === "left" ? (
                  <ChevronLeft size={18} />
                ) : (
                  <ChevronRight size={18} />
                ),
            }}
          />

          <div className="mt-5 text-sm text-gray-500">
            Showing our lowest prices
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartureCalendar;
