import {notFound} from "next/navigation";
import type {Metadata} from "next";
import PackageGallery from "@/components/package/PackageGallery";
import PackageDetail from "@/components/package/PackageDetail";
import PackageCustomerReview from "@/components/package/PackageCustomerReview";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {findPackageBySlug, getAllPackageSlugs} from "@/lib/packages";
import Script from "next/script";

type Props = {
  params: Promise<{slug: string}>;
};

export function generateStaticParams() {
  return getAllPackageSlugs().map((slug) => ({slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const pkg = findPackageBySlug(slug);

  if (!pkg) {
    return buildPageMetadata({
      title: "Tour Package",
      description: "Explore holiday packages with Dream Sky Airways.",
      path: `/packages/${slug}`,
      slug,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${pkg.title} – ${pkg.duration} Package`,
    description: pkg.shortDescription,
    path: `/packages/${slug}`,
    slug: pkg.slug,
    location: pkg.location,
    category: pkg.category,
    image: pkg.images?.[0],
    extras: [
      `${pkg.title} booking`,
      `${pkg.location} tour package`,
      `cheap ${pkg.location} package`,
      `${pkg.duration} holiday`,
    ],
  });
}

export default async function Page({params}: Props) {
  const {slug} = await params;
  const pkg = findPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="px-4 lg:px-10">
      <Script
        id={`package-schema-${pkg.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: pkg.title,
            description: pkg.shortDescription,
            image: pkg.images?.map((img) =>
              img.startsWith("http") ? img : `${SITE_URL}${img}`,
            ),
            brand: {
              "@type": "Brand",
              name: "Dream Sky Airways",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: String(pkg.price).replace(/[^\d.]/g, "") || "0",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/packages/${pkg.slug}`,
            },
          }),
        }}
      />
      <PackageGallery pkg={pkg} />
      <PackageDetail pkg={pkg} />
      <PackageCustomerReview />
    </div>
  );
}
