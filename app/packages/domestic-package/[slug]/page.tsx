import {domesticPackages} from "@/components/data/domesticPackage";
import PackageCustomerReview from "@/components/package/PackageCustomerReview";
import PackageDetail from "@/components/package/PackageDetail";
import PackageGallery from "@/components/package/PackageGallery";
import {buildPageMetadata} from "@/lib/seo";
import {notFound} from "next/navigation";
import type {Metadata} from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return domesticPackages.map((pkg) => ({slug: pkg.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const pkg = domesticPackages.find((item) => item.slug === slug);

  if (!pkg) {
    return buildPageMetadata({
      title: "Domestic Tour Package",
      description: "Explore domestic holiday packages with Dream Sky Airways.",
      path: `/packages/domestic-package/${slug}`,
      slug,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${pkg.title} – Domestic Package`,
    description:
      pkg.description ||
      `Book ${pkg.title} in ${pkg.location}. Best domestic holiday package by Dream Sky Airways.`,
    path: `/packages/domestic-package/${slug}`,
    slug: pkg.slug,
    location: pkg.location,
    category: pkg.category || "Domestic",
    image: pkg.images?.[0],
    extras: [
      "domestic tour package",
      `${pkg.location} holiday package`,
      `book ${pkg.title}`,
    ],
  });
}

export default async function DomesticPackageDetails({params}: Props) {
  const {slug} = await params;

  const pkg = domesticPackages.find((item) => item.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="px-4 lg:px-10">
      <PackageGallery pkg={pkg} />
      <PackageDetail
        pkg={{
          ...pkg,
          duration: (pkg as {duration?: string}).duration || "Flexible",
          shortDescription: pkg.description,
          rating: (pkg as {rating?: number}).rating || 4.8,
          category: pkg.category || "Domestic",
          seoContent: `${pkg.description}

Looking for the best ${pkg.location} tour package? Book this domestic holiday package with Dream Sky Airways for affordable pricing, verified hotels, and complete travel support. Ideal for families, couples, and travelers searching cheap domestic tour packages in India.`,
          inclusions: [
            "Hotel accommodation as per itinerary",
            "Selected meals (as mentioned)",
            "Sightseeing support",
            "Travel assistance",
          ],
          exclusions: [
            "Personal expenses",
            "Entry tickets unless mentioned",
            "Meals not listed",
          ],
          faqs: [
            {
              q: `Is this ${pkg.title} good for families?`,
              a: "Yes. Dream Sky Airways domestic packages are family-friendly and can be customized for kids and senior citizens.",
            },
            {
              q: "How do I book online?",
              a: "Open the package page, check inclusions, and click Book Now or contact Dream Sky Airways for a custom quote.",
            },
          ],
        }}
      />
      <PackageCustomerReview />
    </div>
  );
}
