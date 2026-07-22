import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Tour Packages India – Domestic, Honeymoon & Family Holidays",
  "Browse affordable domestic, honeymoon and family tour packages with Dream Sky Airways. Book curated holiday packages across India with easy online booking.",
  "/packages",
  [
    "tour packages India",
    "holiday packages",
    "domestic packages",
    "honeymoon packages",
    "family tour packages",
    "cheap holiday packages India",
  ],
);

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
