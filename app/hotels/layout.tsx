import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Hotel Booking India – Best Stays & Resorts",
  "Book hotels and resorts across India with Dream Sky Airways. Find luxury, budget and family-friendly stays with transparent pricing.",
  "/hotels",
  [
    "hotel booking India",
    "book hotels online",
    "cheap hotels India",
    "luxury hotels",
    "resort booking",
    "hotel deals India",
  ],
);

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
