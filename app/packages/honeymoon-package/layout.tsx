import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Honeymoon Packages India – Romantic Getaways",
  "Book romantic honeymoon packages with Dream Sky Airways. Curated couples holidays across scenic destinations in India.",
  "/packages/honeymoon-package",
  [
    "honeymoon packages India",
    "romantic holiday packages",
    "couples tour packages",
    "honeymoon destinations India",
  ],
);

export default function HoneymoonPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
