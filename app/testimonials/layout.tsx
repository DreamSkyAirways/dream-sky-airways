import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Customer Testimonials – Real Travel Experiences",
  "Read genuine traveler reviews and testimonials for Dream Sky Airways holiday packages, flights and trips across India.",
  "/testimonials",
  [
    "Dream Sky Airways reviews",
    "travel testimonials",
    "customer reviews travel agency",
    "holiday package reviews",
  ],
);

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
