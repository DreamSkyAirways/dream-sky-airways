"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { useAuth } from "@/hooks/useAuth";
import UserProfileDropdown from "./UserProfileDropdown";
import { usePathname, useRouter } from "next/navigation";

const packageMenu = [
  { label: "Domestic Packages", href: "/packages/domestic-package" },
  { label: "Honeymoon Packages", href: "/packages/honeymoon-package" },
  { label: "Family Packages", href: "/packages/family-package" },
];

const destinationMenu = [
  { label: "Kashmir", href: "/packages" },
  { label: "Kerala", href: "/packages" },
  { label: "Rajasthan", href: "/packages" },
  { label: "Goa & Beaches", href: "/packages" },
  { label: "Himachal & Ladakh", href: "/packages" },
];

// Desktop Dropdown Section
function DesktopDropdown({ href, label, items, isActive }: any) {
  return (
    <section className="relative group">
      <Link
        href={href}
        className={`hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs lg:text-sm font-bold tracking-widest uppercase transition border-b-2 ${
          isActive
            ? "text-red-500 border-red-500"
            : "text-red-500 border-transparent hover:border-red-500 hover:text-red-400"
        }`}
      >
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="inline-flex items-center gap-1.5"
        >
          <span>{label}</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </motion.span>
        <ChevronDown
          size={14}
          className="transition-transform duration-300 group-hover:rotate-180 text-red-500"
        />
      </Link>
      <div className="absolute left-0 top-full mt-2 w-60 bg-slate-950/95 backdrop-blur-lg shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-white/10 overflow-hidden">
        {items.map((item: any) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 px-4 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-red-400 transition border-b border-white/5 last:border-b-0"
          >
            <ChevronRight size={14} className="text-red-500" />
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

// Mobile Accordion Item
function MobileAccordion({ href, label, items, onClose, isRed }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <div className="flex items-center justify-between">
        <Link
          href={href}
          onClick={onClose}
          className={`flex items-center gap-3 px-5 py-3 text-sm font-bold uppercase tracking-wider flex-1 ${
            isRed ? "text-red-500 hover:text-red-400" : "text-gray-200 hover:text-white"
          }`}
        >
          {isRed ? (
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="inline-flex items-center gap-1.5"
            >
              <span>{label}</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </motion.span>
          ) : (
            label
          )}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-3 text-gray-400 hover:text-white"
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
            className="overflow-hidden bg-slate-950/50"
          >
            {items.map((item: any) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-2 px-8 py-2.5 text-sm text-gray-300 hover:text-red-400 hover:bg-white/5 border-b border-white/5 last:border-b-0"
              >
                <ChevronRight size={13} className="text-red-500 shrink-0" />
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
  const [scrolled, setScrolled] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const { user, loading, logout } = useAuth();
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isTransparent
            ? "bg-black/5 backdrop-blur-[2px] border-b border-white/5 text-white"
            : "bg-slate-950/85 backdrop-blur-md border-b border-white/10 text-white shadow-md"
        }`}
      >
        <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 py-3.5 max-w-[1750px] mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/logo.png"
                alt="Dream Sky Airways Logo"
                width={42}
                height={42}
                priority
                className="object-contain w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md"
              />
              <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white">
                Dream Sky Airways
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            <Link
              href="/"
              className={`inline-flex items-center px-3.5 py-1.5 text-xs lg:text-sm font-bold tracking-widest uppercase transition border-b-2 ${
                pathname === "/"
                  ? "text-yellow-400 border-yellow-400"
                  : "text-white/90 border-transparent hover:text-yellow-400 hover:border-yellow-400"
              }`}
            >
              Home
            </Link>

            <Link
              href="/services"
              className={`inline-flex items-center px-3.5 py-1.5 text-xs lg:text-sm font-bold tracking-widest uppercase transition border-b-2 ${
                pathname === "/services"
                  ? "text-yellow-400 border-yellow-400"
                  : "text-white/90 border-transparent hover:text-yellow-400 hover:border-yellow-400"
              }`}
            >
              Services
            </Link>

            <Link
              href="/about"
              className={`inline-flex items-center px-3.5 py-1.5 text-xs lg:text-sm font-bold tracking-widest uppercase transition border-b-2 ${
                pathname === "/about"
                  ? "text-yellow-400 border-yellow-400"
                  : "text-white/90 border-transparent hover:text-yellow-400 hover:border-yellow-400"
              }`}
            >
              About Us
            </Link>

            <DesktopDropdown
              href="/packages"
              label="Offers"
              items={packageMenu}
              isActive={pathname.startsWith("/packages")}
            />

            <Link
              href="/contact"
              className={`inline-flex items-center px-3.5 py-1.5 text-xs lg:text-sm font-bold tracking-widest uppercase transition border-b-2 ${
                pathname === "/contact"
                  ? "text-yellow-400 border-yellow-400"
                  : "text-white/90 border-transparent hover:text-yellow-400 hover:border-yellow-400"
              }`}
            >
              Contacts
            </Link>
          </div>

          {/* Desktop Right Action Area: User Profile */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {loading ? (
              <div className="w-9 h-9 rounded-full bg-white/20 animate-pulse" />
            ) : user ? (
              <UserProfileDropdown user={user} logout={handleLogout} />
            ) : (
              <Link
                href="/sign-in"
                className="px-4 py-2 text-white/90 hover:text-yellow-400 border border-white/20 hover:border-yellow-400 transition rounded-full flex items-center gap-1.5 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm bg-white/5 hover:bg-black/40"
                aria-label="User Account"
              >
                <User size={18} />
                <span>Account</span>
              </Link>
            )}
          </div>

          {/* Mobile Actions + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {!loading && user ? (
              <UserProfileDropdown user={user} logout={logout} />
            ) : (
              <Link
                href="/sign-in"
                className="p-2 text-white hover:text-yellow-400 transition"
                aria-label="Account"
              >
                <User size={20} />
              </Link>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 transition"
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
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] md:hidden"
              onClick={closeMenu}
            />

            <motion.div
              key="drawer"
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-slate-900 text-white z-[999] shadow-2xl flex flex-col md:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950">
                <div className="flex items-center gap-2.5">
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
                  className="text-white/80 hover:text-white transition"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col flex-1 py-2">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="px-5 py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-white/5"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="px-5 py-3 text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white border-b border-white/5"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="px-5 py-3 text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white border-b border-white/5"
                >
                  About Us
                </Link>
                <MobileAccordion
                  href="/packages"
                  label="Offers"
                  items={packageMenu}
                  onClose={closeMenu}
                  isRed={true}
                />
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="px-5 py-3 text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white border-b border-white/5"
                >
                  Contacts
                </Link>
              </div>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-white/10 flex flex-col gap-3">
                {!user && (
                  <Link
                    href="/sign-in"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-gray-100 transition shadow-lg"
                  >
                    <FaArrowRightToBracket size={15} />
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for non-homepage subpages so content isn't covered */}
      {!isHomePage && <div className="h-[68px]" />}
    </>
  );
}