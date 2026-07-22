import type {Metadata} from "next";
import {servicePageSeo} from "@/lib/seo";

export const metadata: Metadata = servicePageSeo(
  "Careers at Dream Sky Airways – Jobs in Travel & Aviation",
  "Explore career opportunities at Dream Sky Airways. Join our travel and aviation team with open roles, growth and a people-first culture.",
  "/careers",
  [
    "Dream Sky Airways careers",
    "travel company jobs",
    "aviation jobs India",
    "jobs in travel agency",
  ],
);

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
