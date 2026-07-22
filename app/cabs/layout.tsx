import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Cab Rental India – Airport Transfers & Outstation Cabs",
  "Book reliable cabs and car rentals with Dream Sky Airways. Airport transfers, local rides and outstation cabs at transparent prices.",
  "/cabs",
  [
    "cab booking",
    "car rental India",
    "airport taxi",
    "outstation cab",
    "hire cab online",
  ],
);

export default function CabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
