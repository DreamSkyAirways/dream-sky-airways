import DomesticCard from "@/components/package/DomesticCard";
import SeoPageIntro from "@/components/seo/SeoPageIntro";

export default function DomesticPackagesPage() {
  return (
    <div>
      <SeoPageIntro
        title="Domestic Tour Packages India – Affordable Holiday Deals"
        subtitle="Best domestic holiday packages by Dream Sky Airways"
        paragraphs={[
          "Discover top domestic tour packages across India with Dream Sky Airways. From Mumbai city tours and Kerala backwaters to Jaipur heritage trips and beach holidays, our domestic packages are crafted for comfort, value, and unforgettable experiences.",
          "Searchers looking for cheap domestic packages, weekend getaways India, family holiday packages, and customized India tour packages can book online with transparent pricing and verified hotels. Compare destinations and pick the itinerary that matches your budget and travel style.",
        ]}
        bullets={[
          "Pan-India destinations covered",
          "Family and couple friendly options",
          "Budget to premium stay choices",
          "Easy online booking support",
        ]}
        links={[
          {href: "/packages", label: "All Packages"},
          {href: "/packages/honeymoon-package", label: "Honeymoon Packages"},
          {href: "/blog", label: "Travel Tips Blog"},
        ]}
      />
      <DomesticCard />
    </div>
  );
}
