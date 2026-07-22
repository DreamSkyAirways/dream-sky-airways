import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Travel Services – Flights, Hotels, Packages, Visa & More",
  "Explore all Dream Sky Airways services: flight booking, hotels, holiday packages, buses, cabs, visa assistance and travel insurance under one roof.",
  "/services",
  [
    "travel services India",
    "flight hotel package booking",
    "one stop travel agency",
    "visa and insurance services",
  ],
);

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
