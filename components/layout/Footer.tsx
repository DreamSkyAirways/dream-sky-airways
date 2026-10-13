"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Compass,
  Globe2,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Travel Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faq" },
];

const services = [
  { name: "Holiday Packages", href: "/packages" },
  { name: "Domestic Tours", href: "/packages/domestic-package" },
  { name: "Honeymoon Holidays", href: "/packages/honeymoon-package" },
  { name: "Family Vacations", href: "/packages/family-package" },
  { name: "Hotel Reservations", href: "/hotels" },
  { name: "Flight Booking", href: "/flights" },
  { name: "Cab & Transfers", href: "/cabs" },
  { name: "Visa Assistance", href: "/visa" },
];

const popularPackages = [
  { name: "Rishikesh Adventure Tour", href: "/packages/rishikesh-adventure-tour" },
  { name: "Delhi Heritage Tour", href: "/packages/delhi-heritage-tour" },
  { name: "Jaipur Royal Rajasthan Tour", href: "/packages/jaipur-royal-rajasthan-tour" },
  { name: "Manali Snow Adventure", href: "/packages/manali-snow-adventure" },
  { name: "Goa Beach Holiday", href: "/packages/goa-beach-holiday" },
  { name: "Kashmir Romantic Holiday", href: "/packages/honeymoon-package/kashmir-romantic-paradise" },
];

const policies = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
];

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-start gap-2 text-sm leading-6 text-white/65 transition-colors duration-200 hover:text-[#f0a05a]"
    >
      <ArrowUpRight
        size={14}
        className="mt-1 shrink-0 text-[#e88b42] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <span>{children}</span>
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#102f2a] text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#087e70]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#e88b42]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        {/* Brand and CTA */}
        <div className="mb-12 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-lg">
              <Image
                src="/logo.png"
                alt="Dream Sky Airways logo"
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Dream Sky Airways
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a05a]">
                Explore Beyond
              </p>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="text-sm leading-7 text-white/70 sm:text-base">
              Discover new destinations, plan memorable holidays, and make
              every journey special with travel experiences tailored to you.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#e88b42] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#d9782f] md:self-center"
          >
            Plan Your Trip
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company introduction */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-lg font-bold">Travel with Confidence</h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              Dream Sky Airways helps travellers explore destinations through
              holiday packages, travel arrangements, accommodation and
              personalised trip planning.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <Compass size={17} className="shrink-0 text-[#e88b42]" />
              Your journey, your way.
            </div>

            <div className="mt-7">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f0a05a]">
                Follow Our Journey
              </h4>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Dream Sky Airways on ${social.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition duration-200 hover:border-[#e88b42] hover:bg-[#e88b42] hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-base font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel services */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-base font-bold">Travel Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <FooterLink href={item.href}>
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular destinations and packages */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-base font-bold">Popular Holidays</h3>
            <ul className="space-y-3">
              {popularPackages.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>

            <Link
              href="/packages"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#f0a05a] transition hover:text-white"
            >
              Explore All Packages
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold">Get in Touch</h3>

            <p className="mb-5 text-sm leading-6 text-white/65">
              Need help planning your next holiday? Contact our team for
              travel-related enquiries.
            </p>

            <address className="space-y-4 not-italic">
              <a
                href="mailto:support@dreamskyairways.com"
                className="flex items-start gap-3 text-sm text-white/70 transition hover:text-[#f0a05a]"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-[#e88b42]" />
                <span className="break-all">
                  support@dreamskyairways.com
                </span>
              </a>

              <a
                href="tel:+911205213312"
                className="flex items-start gap-3 text-sm text-white/70 transition hover:text-[#f0a05a]"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-[#e88b42]" />
                <span>+91-1205213312</span>
              </a>

              <a
                href="tel:+917291000329"
                className="flex items-start gap-3 text-sm text-white/70 transition hover:text-[#f0a05a]"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-[#e88b42]" />
                <span>+91 7291000329</span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#e88b42]" />
                <span>
                  A-Block, Sector 63, Noida,
                  <br />
                  Uttar Pradesh – 201301, India
                </span>
              </div>
            </address>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Globe2 size={17} className="text-[#e88b42]" />
                Ready to explore?
              </div>
              <Link
                href="/packages"
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#f0a05a] transition hover:text-white"
              >
                Find your next holiday
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-xs leading-6 text-white/50 sm:text-sm">
              © {currentYear} Dream Sky Airways. All rights reserved.
            </p>

            <nav
              aria-label="Legal links"
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end"
            >
              {policies.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-white/55 transition hover:text-[#f0a05a] sm:text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <p className="flex items-center justify-center gap-1.5 text-xs text-white/50 sm:text-sm">
              Made for travellers
              <Heart size={13} className="fill-[#e88b42] text-[#e88b42]" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
