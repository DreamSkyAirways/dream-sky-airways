import type {Metadata} from "next";
import {buildPageMetadata} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Career Application Form",
  description: "Apply for jobs at Dream Sky Airways.",
  path: "/careerform",
  noIndex: true,
});

export default function CareerFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
