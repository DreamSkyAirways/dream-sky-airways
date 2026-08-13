"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/dreamskyairwayspvtltd",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dreamskyairways",
      icon: Instagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@dreamskyairways",
      icon: Youtube,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dream-sky-airways-952379382",
      icon: Linkedin,
    },
  ];

  const services = [
    { name: "All Services", href: "/services" },
    { name: "Flight Booking", href: "/flights" },
    { name: "Hotel Reservation", href: "/hotels" },
    { name: "Tour Packages", href: "/packages" },
    { name: "Cab Services", href: "/cabs" },
    { name: "Bus Booking", href: "/buses" },
    { name: "Travel Blog", href: "/blog" },
    { name: "Visa Assistance", href: "/visa" },
    { name: "Travel Insurance", href: "/insurance" },
  ];

  return (
    <footer className="bg-black text-white border-t border-neutral-900 select-none">
      {/* Main content */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-16 pb-8 sm:pb-14">
        <div className="grid grid-cols-2 lg:grid-cols-15 gap-5 sm:gap-10">
          
          {/* Company Info - Full Width on Mobile Header */}
          <div className="col-span-2 lg:col-span-4 border-b border-neutral-900/80 lg:border-b-0 pb-4 lg:pb-0">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-6">
              <Image
                src="/logo.png"
                alt="Dream Sky Airways Logo"
                width={48}
                height={48}
                className="object-contain sm:w-[60px] sm:h-[60px]"
              />
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  Dream Sky Airways
                </h3>
                <p className="text-[10px] sm:text-xs text-yellow-400 font-semibold tracking-wider uppercase">Since 2018</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed text-[11px] sm:text-[12px] md:text-base max-w-md">
              Explore the world with confidence. From flights and hotels to
              holiday packages, visa assistance, and travel insurance, we
              deliver complete travel solutions under one roof.
            </p>

            {/* Social Media Icons */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-lg font-bold text-yellow-400 uppercase tracking-wider mb-2 sm:mb-3">
                Follow Us
              </h4>

              <div className="flex gap-2.5 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-neutral-800 bg-neutral-900/80 flex items-center justify-center text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:scale-110 shadow-sm"
                      aria-label={social.name}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links - Box 1 on Mobile Row 1 */}
          <div className="col-span-1 lg:col-span-2">
            <div className="relative mb-3 sm:mb-6">
              <h4 className="text-sm sm:text-lg font-bold text-yellow-400 tracking-wide pb-1 sm:pb-2 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 h-0.5 w-8 sm:w-10 bg-yellow-400 rounded-full" />
              </h4>
            </div>

            <ul className="space-y-2 sm:space-y-3.5 text-xs sm:text-[15px]">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact Us" },
                { href: "/blog", label: "Travel Blog" },
                { href: "/careers", label: "Career" },
                { href: "/faq", label: "FAQ" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-white hover:text-red-500 transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-yellow-400 group-hover:bg-red-500 mr-2 transition-colors duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services - Box 2 on Mobile Row 1 */}
          <div className="col-span-1 lg:col-span-2">
            <div className="relative mb-3 sm:mb-6">
              <h4 className="text-sm sm:text-lg font-bold text-yellow-400 tracking-wide pb-1 sm:pb-2 relative inline-block">
                <Link
                  href="/services"
                  className="hover:text-red-500 transition-colors"
                >
                  Our Services
                </Link>
                <span className="absolute -bottom-1 left-0 h-0.5 w-8 sm:w-10 bg-yellow-400 rounded-full" />
              </h4>
            </div>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-[15px]">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-white hover:text-red-500 transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-yellow-400 group-hover:bg-red-500 mr-2 transition-colors duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages - Box 3 on Mobile Row 2 */}
          <div className="col-span-1 lg:col-span-3">
            <div className="relative mb-3 sm:mb-6">
              <h4 className="text-sm sm:text-lg font-bold text-yellow-400 tracking-wide pb-1 sm:pb-2 relative inline-block">
                Popular Packages
                <span className="absolute -bottom-1 left-0 h-0.5 w-8 sm:w-10 bg-yellow-400 rounded-full" />
              </h4>
            </div>

            <nav>
              <ul className="space-y-2 sm:space-y-3.5">
                {[
                  {
                    href: "/packages/rishikesh-adventure-tour",
                    label: "Rishikesh Tour Package",
                  },
                  { href: "/packages/delhi-heritage-tour", label: "Delhi Heritage Tour" },
                  { href: "/packages/jaipur-royal-rajasthan-tour", label: "Jaipur Royal Rajasthan Tour" },
                  { href: "/packages/manali-snow-adventure", label: "Manali Snow Adventure" },
                  { href: "/packages/goa-beach-holiday", label: "Goa Beach Holiday" },
                  { href: "/packages/honeymoon-package/kashmir-romantic-paradise", label: "Kashmir Romantic Paradise" },
                  { href: "/packages/honeymoon-package/mussoorie-romantic-hills", label: "Mussoorie Romantic Hills" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-white hover:text-red-500 transition-all duration-300 ease-out hover:translate-x-1.5 text-xs sm:text-[15px]"
                    >
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-yellow-400 group-hover:bg-red-500 mr-2 transition-colors duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Us - Box 4 on Mobile Row 2 */}
          <div className="col-span-1 lg:col-span-4">
            <div className="relative mb-3 sm:mb-6">
              <h4 className="text-sm sm:text-lg font-bold text-yellow-400 tracking-wide pb-1 sm:pb-2 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 h-0.5 w-8 sm:w-10 bg-yellow-400 rounded-full" />
              </h4>
            </div>

            <address className="not-italic text-white space-y-1.5 sm:space-y-3 text-xs sm:text-[15px] leading-relaxed">
              <p className="text-white">
                Email:{" "}
                <a
                  href="mailto:support@dreamskyairways.com"
                  className="text-white hover:text-red-500 transition-colors underline-offset-4 hover:underline"
                >
                  support@dreamskyairways.com
                </a>
              </p>
              <p className="text-white">
                Career:{" "}
                <a
                  href="mailto:career@dreamskyairways.com"
                  className="text-white hover:text-red-500 transition-colors underline-offset-4 hover:underline"
                >
                  career@dreamskyairways.com
                </a>
              </p>
              <p className="text-white">
                HR:{" "}
                <a
                  href="mailto:hr@dreamskyairways.com"
                  className="text-white hover:text-red-500 transition-colors underline-offset-4 hover:underline"
                >
                  hr@dreamskyairways.com
                </a>
              </p>
              <p className="text-white">
                Package Enquiry:{" "}
                <a
                  href="mailto:package@dreamskyairways.com"
                  className="text-white hover:text-red-500 transition-colors underline-offset-4 hover:underline"
                >
                  package@dreamskyairways.com
                </a>
              </p>
              <p className="text-white">
                Phone:{" "}
                <a
                  href="tel:+911205213312"
                  className="text-white hover:text-red-500 transition-colors underline-offset-4 hover:underline"
                >
                  +91-1205213312
                </a>
              </p>
              <p className="text-white">
                Phone:{" "}
                <a
                  href="tel:+917291000329"
                  className="text-white hover:text-red-500 transition-colors underline-offset-4 hover:underline"
                >
                  +91 7291000329
                </a>
              </p>
              <p className="text-white/90">
                A-Block, Sector -63 Noida,
                <br />
                Uttar Pradesh – 201301, India
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 bg-black">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] sm:text-sm text-white/80">
          <p>© {currentYear} Dream Sky Airways. All rights reserved.</p>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/privacy-policy"
              className="text-white hover:text-red-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-700">|</span>
            <Link
              href="/terms"
              className="text-white hover:text-red-500 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-neutral-700">|</span>
            <Link
              href="/disclaimer"
              className="text-white hover:text-red-500 transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
