import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {honeymoonPackages} from "@/components/data/honeymoonPacakges";
import PackageGallery from "@/components/package/PackageGallery";
import PackageDetail from "@/components/package/PackageDetail";
import PackageCustomerReview from "@/components/package/PackageCustomerReview";
import {buildPageMetadata} from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return honeymoonPackages.map((pkg) => ({slug: pkg.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const pkg = honeymoonPackages.find((item) => item.slug === slug);

  if (!pkg) {
    return buildPageMetadata({
      title: "Honeymoon Package",
      description: "Explore romantic honeymoon packages with Dream Sky Airways.",
      path: `/packages/honeymoon-package/${slug}`,
      slug,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${pkg.title} – Honeymoon Package`,
    description:
      pkg.description ||
      `Book ${pkg.title} honeymoon package in ${pkg.location}. Romantic getaways by Dream Sky Airways.`,
    path: `/packages/honeymoon-package/${slug}`,
    slug: pkg.slug,
    location: pkg.location,
    category: "Honeymoon",
    image: pkg.images?.[0],
    extras: [
      "honeymoon packages India",
      "romantic holiday package",
      `${pkg.location} honeymoon`,
      `couples tour ${pkg.location}`,
    ],
  });
}

export default async function HoneymoonPackageDetails({params}: Props) {
  const {slug} = await params;

  const pkg = honeymoonPackages.find((item) => item.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="px-4 lg:px-10">
      <PackageGallery pkg={pkg} />
      <PackageDetail
        pkg={{
          ...pkg,
          shortDescription: pkg.description,
          category: pkg.category || "Honeymoon",
          seoContent: `${pkg.description}

Book this romantic ${pkg.location} honeymoon package with Dream Sky Airways. Perfect for couples searching honeymoon packages India, affordable romantic getaways, and customized couple holiday packages with scenic stays and flexible sightseeing.`,
          inclusions: [
            "Couple-friendly hotel stay",
            "Breakfast (as per plan)",
            "Sightseeing support",
            "Travel assistance",
          ],
          exclusions: [
            "Personal expenses",
            "Optional romantic add-ons unless mentioned",
            "Meals not listed",
          ],
          faqs: [
            {
              q: "Can this honeymoon package be customized?",
              a: "Yes. We can upgrade rooms, add candlelight dinner, and adjust sightseeing for privacy.",
            },
            {
              q: "Is this suitable for first-time honeymoon travelers?",
              a: "Absolutely. Dream Sky Airways handles hotels, transfers guidance, and complete support so you can relax.",
            },
          ],
        }}
      />
      <PackageCustomerReview />
    </div>
  );
}
