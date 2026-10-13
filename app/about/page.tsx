
import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import WhatWeDo from "@/components/about/WhatWeDo";
import AirlineSlider from "@/components/about/SliderAbout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us | Dream Sky Airways – Your Travel Partner",
  description:
    "Discover Dream Sky Airways, your travel partner for holiday packages, flight bookings, hotel stays, visa assistance and memorable travel experiences across India and worldwide.",
  path: "/about",
  keywords: [
    "about Dream Sky Airways",
    "tour and travel company in India",
    "holiday packages India",
    "travel agency India",
    "flight and hotel booking",
    "international holiday packages",
    "visa assistance services",
    "customized travel packages",
  ],
});

const siteUrl = "https://www.dreamskyairways.com";
const aboutUrl = `${siteUrl}/about`;

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Dream Sky Airways",
  url: aboutUrl,
  description:
    "Discover Dream Sky Airways and our travel services, including holiday packages, flights, hotels, visa assistance and personalized travel experiences.",
  mainEntity: {
    "@type": "Organization",
    name: "Dream Sky Airways",
    url: siteUrl,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: aboutUrl,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f7f9f6] text-[#183b35]">
        <AboutHero />
        <AboutSection />
        <WhatWeDo />
        {/* <AirlineSlider /> */}
      </main>
    </>
  );
}
