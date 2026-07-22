import {familyPackages} from "@/components/data/familyPackage";
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
  return familyPackages.map((pkg) => ({slug: pkg.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const pkg = familyPackages.find((item) => item.slug === slug);

  if (!pkg) {
    return buildPageMetadata({
      title: "Family Package",
      description: "Explore family holiday packages with Dream Sky Airways.",
      path: `/packages/family-package/${slug}`,
      slug,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${pkg.title} – Family Package`,
    description:
      pkg.description ||
      `Book ${pkg.title} family holiday in ${pkg.location}. Kid-friendly packages by Dream Sky Airways.`,
    path: `/packages/family-package/${slug}`,
    slug: pkg.slug,
    location: pkg.location,
    category: "Family",
    image: pkg.images?.[0],
    extras: [
      "family holiday packages",
      "family tour India",
      `${pkg.location} family package`,
      "vacation with kids",
    ],
  });
}

export default async function FamilyPackageDetails({params}: Props) {
  const {slug} = await params;

  const pkg = familyPackages.find((item) => item.slug === slug);

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
          category: pkg.category || "Family",
          seoContent: `${pkg.description}

Plan a stress-free family vacation with this ${pkg.location} family holiday package by Dream Sky Airways. Designed for kids and parents, with comfortable stays and paced sightseeing—ideal if you are searching family tour packages India and vacation with kids.`,
          inclusions: [
            "Family-friendly hotel stay",
            "Breakfast (as per plan)",
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
              q: "Is this package kid-friendly?",
              a: "Yes. Itineraries are paced for families with children and can be adjusted for comfort.",
            },
            {
              q: "Can elders travel on this package?",
              a: "Yes. We recommend comfortable hotels and lighter sightseeing for senior citizens.",
            },
          ],
        }}
      />
      <PackageCustomerReview />
    </div>
  );
}
