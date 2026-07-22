import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Domestic Tour Packages India – Affordable Holiday Deals",
  "Explore domestic tour packages across India with Dream Sky Airways. Book Mumbai, Goa, Jaipur, Kerala and more holiday packages online.",
  "/packages/domestic-package",
  [
    "domestic tour packages",
    "India holiday packages",
    "cheap domestic packages",
    "weekend getaways India",
  ],
);

export default function DomesticPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
