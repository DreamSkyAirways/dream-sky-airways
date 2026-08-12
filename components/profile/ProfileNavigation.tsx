"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileNavigation = () => {
  const pathname = usePathname();

  const navigationItems = [
    {
      name: "Overview",
      href: "/profile",
    },
    {
      name: "Personal Information",
      href: "/personal-information",
    },
    {
      name: "My Enquiry",
      href: "/profile/my-enquiry",
    },
    {
      name: "My Bookings",
      href: "/profile/my-bookings",
    },
    {
      name: "Saved Travellers",
      href: "/profile/saved-travellers",
    },
    {
      name: "Documents",
      href: "/profile/documents",
    },
    {
      name: "Notifications",
      href: "/profile/notifications",
    },
    {
      name: "Security & Password",
      href: "/profile/security",
    },
    {
      name: "Settings",
      href: "/profile/settings",
    },
  ];

  return (
    <nav className="w-full bg-white border border-slate-100 rounded-2xl shadow-sm overflow-x-auto">
      <div className="flex items-center min-w-max px-4 sm:px-6">

        {navigationItems.map((item) => {
          const isActive =
            item.href === "/profile"
              ? pathname === "/profile"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative
                px-4
                py-4
                text-sm
                font-semibold
                whitespace-nowrap
                transition-colors
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-900"
                }
              `}
            >
              {item.name}

              {/* Active Bottom Border */}
              {isActive && (
                <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          );
        })}

      </div>
    </nav>
  );
};

export default ProfileNavigation;