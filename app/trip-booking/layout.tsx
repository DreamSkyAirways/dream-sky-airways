import type {Metadata} from "next";
import {buildPageMetadata} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Trip Booking",
  description: "Book your trip with Dream Sky Airways.",
  path: "/trip-booking",
  noIndex: true,
});

export default function TripBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
