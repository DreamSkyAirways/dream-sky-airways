
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { servicePageSeo } from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Tour & Travel Services | Holiday Packages & Trip Planning – Dream Sky Airways",
  "Explore tour and travel services from Dream Sky Airways, including holiday packages, domestic tours, honeymoon and family vacations, hotel reservations, cab transfers, visa assistance, and personalised trip planning.",
  "/services",
  [
    "tour and travel services",
    "holiday packages India",
    "domestic tour packages",
    "honeymoon holiday packages",
    "family vacation packages",
    "hotel booking services",
    "cab and transfer services",
    "visa assistance",
    "travel agency India",
    "Dream Sky Airways",
  ]
);

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}