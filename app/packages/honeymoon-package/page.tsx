import HoneymoonPackageClient from "./HoneymoonPackageClient";
import SeoPageIntro from "@/components/seo/SeoPageIntro";

export default function HoneymoonPackagesPage() {
  return (
    <div>
      <SeoPageIntro
        title="Honeymoon Packages India – Romantic Getaways for Couples"
        subtitle="Best honeymoon destinations with Dream Sky Airways"
        paragraphs={[
          "Celebrate love with romantic honeymoon packages India designed by Dream Sky Airways. From Kashmir valleys and Manali snow escapes to Goa beaches and Mussoorie hill stays, our couples packages include scenic stays, flexible sightseeing, and memorable experiences.",
          "Couples searching for cheap honeymoon packages, Kashmir honeymoon package, Manali honeymoon package, Goa honeymoon package, or customized romantic holidays can book online with trusted hotels and caring travel support.",
        ]}
        bullets={[
          "Romantic destinations across India",
          "Couple-friendly hotels and views",
          "Customizable private experiences",
          "Affordable honeymoon deals",
        ]}
        links={[
          {href: "/packages", label: "All Packages"},
          {href: "/packages/family-package", label: "Family Packages"},
          {href: "/blog", label: "Honeymoon Travel Tips"},
        ]}
      />
      <HoneymoonPackageClient />
    </div>
  );
}
