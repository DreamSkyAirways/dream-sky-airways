import type {Metadata} from "next";
import {buildPageMetadata} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Booking",
  description: "Complete your booking with Dream Sky Airways.",
  path: "/bookingtabs",
  noIndex: true,
});

export default function BookingTabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
