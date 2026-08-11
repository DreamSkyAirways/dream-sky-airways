"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { useAuth } from "@/hooks/useAuth";
import UserProfileDropdown from "./UserProfileDropdown";
import { useRouter } from "next/navigation";

const packageMenu = [
  { label: "Domestic Packages", href: "/packages/domestic-package" },
  { label: "Honeymoon Packages", href: "/packages/honeymoon-package" },
  { label: "Family Packages", href: "/packages/family-package" },
];

// Desktop Dropdown Section
function DesktopDropdown({ href, label, items }: any) {
  return (
    <section className="relative group">
      <Link
        href={href}
        className="hidden md:inline-flex items-center gap-1 px-3 py-2 text-black rounded text-md font-bold transition border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600"
      >
        {label}
        <ChevronDown
          size={16}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </Link>
      <div className="absolute left-0 top-full mt-2 w-60 bg-white shadow-2xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200 overflow-hidden">
        {items.map((item: any) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 px-4 py-3 text-md text-black hover:bg-gray-100 transition border-b border-gray-200 last:border-b-0 hover:text-blue-600"
          >
            <ChevronRight size={14} />
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

// Mobile Accordion Item
function MobileAccordion({ href, label, items, onClose }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <div className="flex items-center justify-between">
        <Link
          href={href}
          onClick={onClose}
          className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-800 hover:text-blue-600 flex-1"
        >
          {label}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-3 text-gray-500 hover:text-blue-600"
          aria-label={`Toggle ${label} submenu`}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-gray-50"
          >
            {items.map((item: any) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-2 px-8 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
              >
                <ChevronRight size={13} className="text-blue-400 shrink-0" />
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const { user, loading, logout } = useAuth();
  console.log(user)


  // logout method

    const handleLogout = async () => {
      try {
        await logout();

        // Logout ke baad home page
        router.push("/");
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999] bg-white border-b border-gray-200 shadow-md">
        <nav className="flex items-center justify-between px-3 sm:px-6 lg:px-10 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.png"
                alt="Dream Sky Airways Logo"
                width={42}
                height={42}
                priority
                className="object-contain w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-base sm:text-xl lg:text-2xl font-bold text-blue-900 leading-tight">
                Dream Sky Airways
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3 py-2 text-black text-md font-bold transition border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-3 py-2 text-black text-md font-bold transition border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600 rounded-md"
            >
              About Us
            </Link>

            <DesktopDropdown
              href="/packages"
              label="Packages"
              items={packageMenu}
            />

            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-3 py-2 text-black text-md font-bold transition border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600 rounded-md"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="items-center gap-2 px-3 py-2 rounded-md text-md font-bold transition border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Right Action Area */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {loading ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
             <UserProfileDropdown
                user={user}
                logout={handleLogout}
              />
            ) : (
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 px-3 py-2 bg-blue-700 text-white rounded-md text-md font-bold hover:bg-blue-800 transition"
              >
                Create an Account
              </Link>
            )}
          </div>

          {/* Mobile: buttons / Avatar + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {!loading && user ? (
              <UserProfileDropdown user={user} logout={logout} />
            ) : (
              <Link
                href="/sign-in"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-blue-700 text-white rounded-md text-xs font-medium hover:bg-blue-800 transition"
              >
                <FaArrowRightToBracket size={13} />
                <span className="hidden xs:inline">Sign In</span>
              </Link>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[998] md:hidden"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white z-[999] shadow-2xl flex flex-col md:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-blue-900">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Dream Sky Airways Logo"
                    width={32}
                    height={32}
                    priority
                    className="object-contain w-8 h-8"
                  />
                  <span className="text-white font-bold text-base">
                    Dream Sky Airways
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex flex-col flex-1">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100"
                >
                  About Us
                </Link>

                <MobileAccordion
                  href="/packages"
                  label="Packages"
                  items={packageMenu}
                  onClose={closeMenu}
                />

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100"
                >
                  Services
                </Link>

                <Link
                  href="/careers"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100"
                >
                  Careers
                </Link>
              </div>

              {/* Drawer Footer Buttons */}
              <div className="p-4 border-t border-gray-200 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition"
                >
                  <RiContactsLine size={16} />
                  Contact Us
                </Link>
                {!user && (
                  <Link
                    href="/sign-in"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition"
                  >
                    <FaArrowRightToBracket size={16} />
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[60px] sm:h-[68px]" />
    </>
  );
}