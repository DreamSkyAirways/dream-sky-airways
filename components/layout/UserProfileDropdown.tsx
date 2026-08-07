"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User, LogOut, ChevronDown, UserCheck } from "lucide-react";

interface UserProfileDropdownProps {
  user: {
    username: string;
    email: string;
    role?: "user" | string;
  };
  logout: () => void;
}

export default function UserProfileDropdown({ user, logout }: UserProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Name ya Email ka first character
  const displayLetter = user?.username
    ? user.username.charAt(0).toUpperCase()
    : user?.email
    ? user.email.charAt(0).toUpperCase()
    : "U";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Modern Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 p-1.5 pr-2.5 rounded-full bg-white/80 hover:bg-white transition-all duration-300 border border-gray-200/80 hover:border-gray-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 active:scale-[0.98]"
        aria-label="User menu"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-semibold text-sm sm:text-base flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
          {displayLetter}
        </div>
        
        <span className="text-xs font-medium text-gray-700 hidden md:inline-block max-w-[100px] truncate">
          {user?.username || "Account"}
        </span>

        <ChevronDown
          size={15}
          className={`text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-600" : "group-hover:text-gray-700"
          }`}
        />
      </button>

      {/* Modern Glassmorphism Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2.5 w-60 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-600 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
          
          {/* User Info Header */}
          <div className="px-4 pt-3 border-b border-gray-100/80">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {user?.username || "User Account"}
            </p>
            <p className="text-xs text-gray-500 truncate mb-2">{user?.email || ""}</p>
             <hr />
            {/* Strictly Fixed "User" Role Badge */}
            {/* <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
              <UserCheck size={13} className="text-blue-600" />
              {user.role}
            </span> */}
          </div>

          {/* Navigation Links */}
          <div className="py-1.5 px-1.5">
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-all duration-150 group"
            >
              <User size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              My Profile
            </Link>
          </div>

          {/* Logout Section */}
          <div className="border-t border-gray-100/80 pt-1.5 px-1.5">
            <button
              onClick={() => {
                setIsOpen(false);
                logout();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs sm:text-sm font-medium text-rose-600 hover:bg-rose-50/80 rounded-xl transition-all duration-150 text-left group"
            >
              <LogOut size={16} className="text-rose-500 group-hover:translate-x-0.5 transition-transform" />
              Sign Out
            </button>
          </div>

        </div>
      )}
    </div>
  );
}