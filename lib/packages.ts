import {packages as popularPackages} from "@/components/data/package";
import {packages as detailedPackages} from "@/app/data/packages";

export type NormalizedPackage = {
  id: number | string;
  title: string;
  slug: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  reviews?: number;
  category: string;
  shortDescription: string;
  images: string[];
  seoContent?: string;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  faqs?: {q: string; a: string}[];
};

function normalizePopular(
  pkg: (typeof popularPackages)[number],
): NormalizedPackage {
  return {
    id: pkg.id,
    title: pkg.title,
    slug: pkg.slug,
    location: pkg.location,
    duration: pkg.duration,
    price: pkg.price,
    rating: pkg.rating ?? 4.8,
    reviews: pkg.reviews,
    category: pkg.category || "Tour Package",
    shortDescription: pkg.shortDescription,
    images: pkg.images || [],
    seoContent: (pkg as {seoContent?: string}).seoContent,
    highlights: (pkg as {highlights?: string[]}).highlights,
    inclusions: (pkg as {inclusions?: string[]}).inclusions,
    exclusions: (pkg as {exclusions?: string[]}).exclusions,
    faqs: (pkg as {faqs?: {q: string; a: string}[]}).faqs,
  };
}

function normalizeDetailed(
  pkg: (typeof detailedPackages)[number],
): NormalizedPackage {
  return {
    id: pkg.id,
    title: pkg.title,
    slug: pkg.slug,
    location: pkg.location,
    duration: pkg.days || "Flexible",
    price: pkg.price,
    rating: 4.8,
    category: "Tour Package",
    shortDescription: pkg.description || `${pkg.title} by Dream Sky Airways`,
    images: pkg.images || [],
    seoContent: `${pkg.description || ""}

Book this ${pkg.title} with Dream Sky Airways for affordable ${pkg.location} holiday packages, verified hotels, and complete travel support. Ideal for families, couples, and first-time travelers searching for cheap domestic tour packages in India.`,
    highlights: pkg.stayStops?.slice(0, 6),
    inclusions: pkg.includedServices,
    exclusions: pkg.notIncludedServices,
    faqs: [
      {
        q: `What is included in the ${pkg.title}?`,
        a: "Hotel stay, selected meals as listed, pickup/drop assistance, and sightseeing support as mentioned in package inclusions.",
      },
      {
        q: `How do I book ${pkg.location} tour package online?`,
        a: "Select your dates on Dream Sky Airways, confirm the package details, and complete booking online with our travel support team.",
      },
    ],
  };
}

/** All packages that resolve under /packages/[slug] */
export function getAllPackageSlugs(): string[] {
  const slugs = new Set<string>();
  popularPackages.forEach((p) => slugs.add(p.slug));
  detailedPackages.forEach((p) => slugs.add(p.slug));
  return Array.from(slugs);
}

/** Find package by slug from either dataset (popular first, then detailed) */
export function findPackageBySlug(slug: string): NormalizedPackage | undefined {
  const popular = popularPackages.find((p) => p.slug === slug);
  if (popular) return normalizePopular(popular);

  const detailed = detailedPackages.find((p) => p.slug === slug);
  if (detailed) return normalizeDetailed(detailed);

  return undefined;
}
