import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Travel Blog – Tips, Destinations & Holiday Guides",
  "Read travel blogs from Dream Sky Airways for destination guides, trip planning tips, family holidays and budget travel ideas across India and beyond.",
  "/blog",
  [
    "travel blog",
    "travel tips India",
    "holiday guides",
    "destination blog",
    "trip planning tips",
  ],
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
