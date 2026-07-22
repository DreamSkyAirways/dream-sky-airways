import FamilyPackage from "@/components/package/FimalyPackage";
import SeoPageIntro from "@/components/seo/SeoPageIntro";

export default function FamilyPackagesPage() {
  return (
    <div>
      <SeoPageIntro
        title="Family Holiday Packages India – Kid-Friendly Tours"
        subtitle="Safe, comfortable and fun family tour packages"
        paragraphs={[
          "Plan stress-free family vacations with Dream Sky Airways family holiday packages. We focus on kid-friendly hotels, paced sightseeing, safety, and activities that every age group can enjoy—from beaches and hill stations to wildlife and cultural cities.",
          "If you are searching for family tour packages India, vacation with kids, senior-citizen friendly trips, or affordable family holiday deals, browse our curated packages below and book online with complete travel assistance.",
        ]}
        bullets={[
          "Family rooms and child-friendly stays",
          "Balanced itineraries for all ages",
          "Transparent package pricing",
          "Travel support throughout the trip",
        ]}
        links={[
          {href: "/packages", label: "All Tour Packages"},
          {href: "/blog/perfect-family-vacation-planning", label: "Family Trip Planning Guide"},
          {href: "/contact", label: "Customize Family Trip"},
        ]}
      />
      <FamilyPackage />
    </div>
  );
}
