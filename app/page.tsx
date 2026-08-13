"use client";

import AirlineSlider from "@/components/AirlineSlider";
import ContactCTA from "@/components/homePage/ContactCTA";
import CustomersSaying from "@/components/homePage/CustomerSaying";
import FAQSection from "@/components/homePage/FAQSection";
import DarkBookingSearch from "@/components/homePage/DarkBookingSearch";
import AirwaysMarquee from "@/components/homePage/AirwaysMarquee";
import FeaturedPackages from "@/components/homePage/FeaturedPackages";
import HeroShowcase from "@/components/homePage/HeroShowcase";
import PopularDestinations from "@/components/homePage/PopularDestinations";
import Statistics from "@/components/homePage/Statistics";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";

export default function Home() {
  return (
    <>
      {/* Dark hero section */}
      <div className="relative w-full desktop-safe-mobile bg-slate-50 text-white">
        {/* Full-bleed Interactive Hero Showcase Slider */}
        <HeroShowcase />

        {/* Set Destinations Search Card with Dark Theme */}
        <DarkBookingSearch />
      </div>

      {/* Marquee Banner between Dark Booking Search and Popular Destinations */}
      <AirwaysMarquee />

      {/* Light section below hero */}
      <div className="bg-white text-gray-900 rounded-xl">
        <div>
          <PopularDestinations />
        </div>
        <div className="mt-4 sm:mt-2">
          <FeaturedPackages />
        </div>
        <div className="mt-8 sm:mt-10">
          <WhyChooseUs />
        </div>
        <div className="mt-8 sm:mt-10">
          <Statistics />
        </div>
        <div>
          <AirlineSlider />
        </div>
        <div>
          <CustomersSaying />
        </div>
        <div>
          <FAQSection />
        </div>
        <div>
          <ContactCTA />
        </div>
      </div>
    </>
  );
}
