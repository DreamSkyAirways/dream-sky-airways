"use client";

import {Facebook, Instagram, Linkedin, Youtube} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

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
      hoverColor: "hover:bg-blue-600/20 hover:text-blue-400",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dreamskyairways",
      icon: Instagram,
      hoverColor: "hover:bg-pink-600/20 hover:text-pink-400",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@dreamskyairways",
      icon: Youtube,
      hoverColor: "hover:bg-red-600/20 hover:text-red-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dream-sky-airways-952379382",
      icon: Linkedin,
      hoverColor: "hover:bg-blue-700/20 hover:text-blue-400",
    },
  ];

  const services = [
    {name: "Flight Booking", href: "/flights"},
    {name: "Hotel Reservation", href: "/hotels"},
    {name: "Tour Packages", href: "/packages"},
    {name: "Cab Services", href: "/cabs"},
    {name: "Bus Booking", href: "/buses"},
    {name: "Travel Blog", href: "/blog"},
    {name: "Visa Assistance", href: "/visa"},
    {name: "Travel Insurance", href: "/insurance"},
  ];

  return (
    <footer className="bg-blue-950 text-gray-200">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-15 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Dream Sky Airways Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-300 tracking-tight">
                  Dream Sky Airways
                </h3>
                <p className="text-sm text-[#4a9a92] font-medium">Since 2018</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-[12px] md:text-base max-w-md">
              Explore the world with confidence. From flights and hotels to
              holiday packages, visa assistance, and travel insurance, we
              deliver complete travel solutions under one roof.
            </p>

            {/* Social Media Icons */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">
                Follow Us
              </h4>

              <div className="flex gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 transition-all duration-300 ${social.hoverColor} hover:border-transparent hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div className="lg:col-span-2">
            <div className="relative mb-6">
              <h4 className="text-lg font-semibold text-gray-300 tracking-wide pb-2 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 h-0.5 w-10 bg-[#0E5B63] rounded-full"></span>
              </h4>
            </div>

            <ul className="space-y-3.5 text-[15px]">
              {[
                {href: "/", label: "Home"},
                {href: "/about", label: "About Us"},
                {href: "/contact", label: "Contact Us"},
                {href: "/blog", label: "Travel Blog"},
                {href: "/careers", label: "Career"},
                {href: "/faq", label: "FAQ"},
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E5B63] group-hover:bg-white mr-2 group-hover:bg-[#0E5B63]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Our Services */}
          <div className="lg:col-span-2">
            <div className="relative mb-6">
              <h4 className="text-lg font-semibold text-gray-300 tracking-wide pb-2 relative inline-block">
                Our Services
                <span className="absolute -bottom-1 left-0 h-0.5 w-10 bg-[#0E5B63] rounded-full"></span>
              </h4>
            </div>

            <ul className="space-y-3 text-[15px]">
              {" "}
              {services.map((service) => (
                <li key={service.name}>
                  {" "}
                  <Link
                    href={service.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {" "}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E5B63] group-hover:bg-white mr-2 group-hover:bg-[#0E5B63]" />{" "}
                    {service.name}{" "}
                  </Link>{" "}
                </li>
              ))}{" "}
            </ul>
          </div>

          {/* Important Links */}
          <div className="lg:col-span-3">
            <div className="relative mb-6">
              <h4 className="text-lg font-semibold text-gray-300 tracking-wide pb-2 relative inline-block">
                Popular Packages
                <span className="absolute -bottom-1 left-0 h-0.5 w-10 bg-[#0E5B63] rounded-full"></span>
              </h4>
            </div>

            <nav>
              <ul className="space-y-3.5">
                {[
                  {
                    href: "/packages/rishikesh-adventure-tour",
                    label: "Rishikesh Tour Package",
                  },
                  {href: "/packages/delhi-heritage-tour", label: "Delhi Heritage Tour"},
                  {href: "/packages/jaipur-royal-rajasthan-tour", label: "Jaipur Royal Rajasthan Tour"},
                  {href: "/packages/manali-snow-adventure", label: "Manali Snow Adventure"},
                  {href: "/packages/goa-beach-holiday", label: "Goa Beach Holiday"},
                  {href: "/packages/honeymoon-package/kashmir-romantic-paradise", label: "Kashmir Romantic Paradise"},
                  {href: "/packages/honeymoon-package/mussoorie-romantic-hills", label: "Mussoorie Romantic Hills"},
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 ease-out hover:translate-x-1.5 text-[15px]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E5B63] group-hover:bg-white mr-2 transition-colors duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="relative mb-6">
              <h4 className="text-lg font-semibold text-gray-300 tracking-wide pb-2 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 h-0.5 w-10 bg-[#0E5B63] rounded-full"></span>
              </h4>
            </div>

            <address className="not-italic text-gray-300 space-y-3 text-[15px] leading-relaxed">
              <p className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:support@dreamskyairways.com"
                  className="text-gray-400 hover:text-white transition-colors underline-offset-4 decoration-[#0E5B63]/60 hover:underline"
                >
                  support@dreamskyairways.com
                </a>
              </p>
              <p className="text-gray-400">
                Career:{" "}
                <a
                  href="mailto:career@dreamskyairways.com"
                  className="text-gray-400 hover:text-white transition-colors underline-offset-4 decoration-[#0E5B63]/60 hover:underline"
                >
                  career@dreamskyairways.com
                </a>
              </p>
              <p className="text-gray-400">
                Hr:{" "}
                <a
                  href="mailto:hr@dreamskyairways.com"
                  className="text-gray-400 hover:text-white transition-colors underline-offset-4 decoration-[#0E5B63]/60 hover:underline"
                >
                  hr@dreamskyairways.com
                </a>
              </p>
              <p className="text-gray-400">
                Package Enquiry:{" "}
                <a
                  href="mailto:package@dreamskyairways.com"
                  className="text-gray-400 hover:text-white transition-colors underline-offset-4 decoration-[#0E5B63]/60 hover:underline"
                >
                  package@dreamskyairways.com
                </a>
              </p>
              <p className="text-gray-400">
                Phone:{" "}
                <a
                  href="tel:+911205213312"
                  className="text-gray-400 hover:text-white transition-colors underline-offset-4 decoration-[#0E5B63]/60 hover:underline"
                >
                  +91-1205213312
                </a>
              </p>
              <p className="text-gray-400">
                Phone:{" "}
                <a
                  href="tel:+917291000329"
                  className="text-gray-400 hover:text-white transition-colors underline-offset-4 decoration-[#0E5B63]/60 hover:underline"
                >
                  +91 7291000329
                </a>
              </p>
              <p className="text-gray-300">
                A-Block, Sector -63 Noida,
                <br />
                Uttar Pradesh – 201301, India
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a5a63] bg-blue-950/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Dream Sky Airways. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link
              href="/disclaimer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
