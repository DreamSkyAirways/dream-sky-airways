import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Clock } from "lucide-react";
import { honeymoonPackages } from "@/components/data/honeymoonPacakges";
import PackageGallery from "@/components/package/PackageGallery";
import PackageDetail from "@/components/package/PackageDetail";
import PackageCustomerReview from "@/components/package/PackageCustomerReview";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function HoneymoonPackageDetails({
  params,
}: Props) {
  const { slug } = await params;

  const pkg = honeymoonPackages.find(
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
