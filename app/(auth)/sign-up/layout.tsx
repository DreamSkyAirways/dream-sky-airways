import type {Metadata} from "next";
import {buildPageMetadata} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sign Up",
  description: "Create your Dream Sky Airways account.",
  path: "/sign-up",
  noIndex: true,
});

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
