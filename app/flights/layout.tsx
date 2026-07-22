import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Flight Booking India – Cheap Domestic & International Flights",
  "Book cheap domestic and international flights with Dream Sky Airways. Compare fares, choose timings and enjoy smooth online flight booking.",
  "/flights",
  [
    "flight booking",
    "cheap flights India",
    "domestic flights",
    "international flights",
    "online flight booking",
    "air tickets India",
  ],
);

export default function FlightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
