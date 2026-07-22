import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Bus Booking India – AC & Non-AC Bus Tickets Online",
  "Book bus tickets online with Dream Sky Airways. Find AC, sleeper and seater buses across popular routes in India at affordable prices.",
  "/buses",
  [
    "bus booking",
    "online bus tickets",
    "AC bus booking",
    "sleeper bus",
    "cheap bus tickets India",
  ],
);

export default function BusesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
