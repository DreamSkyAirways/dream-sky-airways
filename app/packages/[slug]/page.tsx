import { notFound } from "next/navigation";
import { packages } from "@/components/data/package";
import PackageGallery from "@/components/package/PackageGallery";
import PackageDetail from "@/components/package/PackageDetail";
import PackageCustomerReview from "@/components/package/PackageCustomerReview";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pkg = packages.find(
    (item) => item.slug === slug
  );

  if (!pkg) {
    notFound();
  }

  return (
    <div className="px-4 lg:px-10">
      <PackageGallery pkg={pkg} />
      <PackageDetail pkg={pkg} />
      <PackageCustomerReview />
    </div>
  );
}
