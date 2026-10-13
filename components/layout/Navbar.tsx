
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  UserRound,
  MapPin,
  Plane,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowRightToBracket } from "react-icons/fa6";

import { useAuth } from "@/hooks/useAuth";
import UserProfileDropdown from "./UserProfileDropdown";

type NavItem = {
  label: string;
  href: string;
};

type DropdownProps = {
  href: string;
  label: string;
  items: NavItem[];
  isActive: boolean;
};

const packageMenu: NavItem[] = [
  { label: "All Holiday Packages", href: "/packages" },
  { label: "Domestic Packages", href: "/packages/domestic-package" },
  { label: "Honeymoon Packages", href: "/packages/honeymoon-package" },
  { label: "Family Packages", href: "/packages/family-package" },
];

const destinationMenu: NavItem[] = [
  { label: "Kashmir", href: "/packages" },
  { label: "Kerala", href: "/packages" },
  { label: "Rajasthan", href: "/packages" },
  { label: "Goa", href: "/packages" },
  { label: "Himachal Pradesh", href: "/packages" },
];

const primaryLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Travel Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopDropdown({
  href,
  label,
  items,
  isActive,
}: DropdownProps) {
  return (
    <div className="group relative">
      <Link
        href={href}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition ${
          isActive
            ? "bg-[#087e70]/10 text-[#087e70]"
            : "text-[#25443d] hover:bg-[#087e70]/10 hover:text-[#087e70]"
        }`}
      >
        {label}
        <ChevronDown
          size={15}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </Link>

      <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-[#e5eee8] bg-white p-2 shadow-xl shadow-[#173b35]/10">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#25443d] transition hover:bg-[#f0f7f3] hover:text-[#087e70]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#087e70]/10 text-[#087e70]">
                <ChevronRight size={15} />
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  href,
  items,
  onClose,
  isActive,
}: DropdownProps & { onClose: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e8eee9] last:border-b-0">
      <div className="flex items-center">
        <Link
          href={href}
          onClick={onClose}
          className={`flex-1 px-5 py-4 text-sm font-semibold ${
            isActive ? "text-[#087e70]" : "text-[#25443d]"
          }`}
        >
          {label}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={`Toggle ${label} submenu`}
          aria-expanded={open}
          className="p-4 text-[#25443d]"
        >
          <ChevronDown
            size={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-[#f6faf7]"
          >
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-2 px-8 py-3 text-sm text-[#526b62] transition hover:text-[#087e70]"
              >
                <ChevronRight size={14} />
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
  const menuRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    try {
      await logout();
      closeMenu();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[999] border-b transition-all duration-300 ${
          isTransparent
            ? "border-white/20 bg-[#173b35]/20 text-white backdrop-blur-sm"
            : "border-[#e6eee8] bg-white/95 text-[#173b35] shadow-sm backdrop-blur-xl"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10"
        >
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 shrink-0 items-center gap-2.5"
            aria-label="Dream Sky Airways homepage"
          >
            <Image
              src="/logo.png"
              alt="Dream Sky Airways logo"
              width={46}
              height={46}
              priority
              className="h-9 w-9 object-contain sm:h-11 sm:w-11"
            />

            <span className="flex flex-col">
              <span
                className={`whitespace-nowrap text-sm font-extrabold tracking-tight sm:text-lg ${
                  isTransparent ? "text-white" : "text-[#173b35]"
                }`}
              >
                Dream Sky Airways
              </span>
              <span
                className={`hidden text-[9px] font-semibold uppercase tracking-[0.19em] sm:block ${
                  isTransparent ? "text-white/75" : "text-[#71857b]"
                }`}
              >
                Explore Beyond
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {primaryLinks.slice(0, 1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isPathActive(pathname, item.href)
                    ? "bg-[#087e70]/10 text-[#087e70]"
                    : isTransparent
                      ? "text-white hover:bg-white/15"
                      : "text-[#25443d] hover:bg-[#087e70]/10 hover:text-[#087e70]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <DesktopDropdown
              href="/packages"
              label="Holiday Packages"
              items={packageMenu}
              isActive={isPathActive(pathname, "/packages")}
            />

            <DesktopDropdown
              href="/packages"
              label="Destinations"
              items={destinationMenu}
              isActive={isPathActive(pathname, "/packages")}
            />

            {primaryLinks.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isPathActive(pathname, item.href)
                    ? "bg-[#087e70]/10 text-[#087e70]"
                    : isTransparent
                      ? "text-white hover:bg-white/15"
                      : "text-[#25443d] hover:bg-[#087e70]/10 hover:text-[#087e70]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Account and CTA */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            {loading ? (
              <div
                className={`h-9 w-9 animate-pulse rounded-full ${
                  isTransparent ? "bg-white/20" : "bg-[#087e70]/10"
                }`}
              />
            ) : user ? (
              <UserProfileDropdown user={user} logout={handleLogout} />
            ) : (
              <Link
                href="/sign-in"
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isTransparent
                    ? "border-white/40 text-white hover:bg-white/10"
                    : "border-[#dbe8df] text-[#25443d] hover:border-[#087e70] hover:text-[#087e70]"
                }`}
              >
                <UserRound size={17} />
                Sign In
              </Link>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#087e70] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-[#087e70]/15 transition hover:bg-[#06685d]"
            >
              <Plane size={16} />
              Plan a Trip
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {!loading && user && (
              <UserProfileDropdown user={user} logout={handleLogout} />
            )}

            {!loading && !user && (
              <Link
                href="/sign-in"
                aria-label="Sign in"
                className={`rounded-full p-2 ${
                  isTransparent ? "text-white" : "text-[#173b35]"
                }`}
              >
                <UserRound size={21} />
              </Link>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className={`rounded-xl p-2 transition ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-[#173b35] hover:bg-[#087e70]/10"
              }`}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[998] bg-[#102d27]/50 backdrop-blur-sm md:hidden"
            />

            <motion.aside
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed right-0 top-0 z-[999] flex h-dvh w-[88%] max-w-sm flex-col overflow-y-auto bg-white text-[#173b35] shadow-2xl md:hidden"
              aria-label="Mobile navigation"
            >
              {/* Drawer Brand */}
              <div className="flex items-center justify-between border-b border-[#e6eee8] bg-[#f6faf7] px-5 py-5">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/logo.png"
                    alt="Dream Sky Airways logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />

                  <span>
                    <span className="block text-sm font-extrabold">
                      Dream Sky Airways
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#71857b]">
                      Explore Beyond
                    </span>
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="rounded-full p-2 transition hover:bg-[#e8f2ec]"
                >
                  <X size={21} />
                </button>
              </div>

              {/* Quick Trip CTA */}
              <div className="m-4 rounded-2xl bg-[#173b35] p-4 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b8e2d0]">
                  <MapPin size={15} />
                  Your next journey starts here
                </div>
                <p className="mt-2 text-lg font-bold">
                  Where would you like to go?
                </p>
                <Link
                  href="/packages"
                  onClick={closeMenu}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#e88b42] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#d9782f]"
                >
                  Explore Packages
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 px-1">
                {primaryLinks.slice(0, 1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block border-b border-[#e8eee9] px-5 py-4 text-sm font-semibold ${
                      isPathActive(pathname, item.href)
                        ? "text-[#087e70]"
                        : "text-[#25443d]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <MobileAccordion
                  href="/packages"
                  label="Holiday Packages"
                  items={packageMenu}
                  isActive={isPathActive(pathname, "/packages")}
                  onClose={closeMenu}
                />

                <MobileAccordion
                  href="/packages"
                  label="Destinations"
                  items={destinationMenu}
                  isActive={isPathActive(pathname, "/packages")}
                  onClose={closeMenu}
                />

                {primaryLinks.slice(1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block border-b border-[#e8eee9] px-5 py-4 text-sm font-semibold transition ${
                      isPathActive(pathname, item.href)
                        ? "text-[#087e70]"
                        : "text-[#25443d] hover:text-[#087e70]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-[#e6eee8] bg-[#f6faf7] p-5">
                {!user && (
                  <Link
                    href="/sign-in"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#dbe8df] bg-white py-3 text-sm font-bold text-[#25443d] transition hover:border-[#087e70] hover:text-[#087e70]"
                  >
                    <FaArrowRightToBracket size={15} />
                    Sign In to Your Account
                  </Link>
                )}

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#087e70] py-3 text-sm font-bold text-white transition hover:bg-[#06685d]"
                >
                  <Plane size={16} />
                  Contact Dream Sky Airways
                </Link>

                <p className="mt-4 text-center text-xs text-[#71857b]">
                  Discover destinations. Create memories.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Prevent page content from sitting underneath the fixed navbar */}
      {!isHomePage && <div aria-hidden="true" className="h-[68px] sm:h-[76px]" />}
    </>
  );
}
