import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Family Holiday Packages India – Kid-Friendly Tours",
  "Plan stress-free family holidays with Dream Sky Airways. Family tour packages with kid-friendly stays, sightseeing and easy booking.",
  "/packages/family-package",
  [
    "family holiday packages",
    "family tour India",
    "vacation with kids",
    "family travel packages",
  ],
);

export default function FamilyPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
