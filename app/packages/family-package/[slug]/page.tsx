import { familyPackages } from "@/components/data/familyPackage";
import PackageCustomerReview from "@/components/package/PackageCustomerReview";
import PackageDetail from "@/components/package/PackageDetail";
import PackageGallery from "@/components/package/PackageGallery";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FamilyPackageDetails({
  params,
}: Props) {
  const { slug } = await params;

  const pkg = familyPackages.find(
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
