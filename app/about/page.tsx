import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import WhatWeDo from "@/components/about/WhatWeDo";
import AirlineSlider from "@/components/about/SliderAbout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Journey & Mission – Dream Sky Airways India",
  description:
    "Discover the story of Dream Sky Airways, our mission, values and aviation experience. Learn how we support careers and travel services.",
  path: "/about",
  keywords: [
    "company profile dream sky",
    "aviation business india",
    "travel management company india",
    "aviation career support",
    "travel consulting firm india",
  ],
});
export default function AboutPage() {
  return (
      <>
      {/* About Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Us - Dream Sky Airways",
            "url": "https://www.dreamskyairways.com/about",
            "description": "Learn more about Dream Sky Airways, our mission, values, and commitment to providing trusted travel, visa, and insurance services in India."
            }`,
        }}
      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dreamskyairways.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://www.dreamskyairways.com/about"
        }
      ]
    }`,
  }}
/>

    
    <main className="mb-10">
      <AboutHero />
      <AboutSection />
      <WhatWeDo />
      <AirlineSlider />
    
      
    </main>
    </>
  );
}
