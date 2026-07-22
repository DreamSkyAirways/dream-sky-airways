import type {Metadata} from "next";
import {buildPageMetadata} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sign In",
  description: "Sign in to your Dream Sky Airways account.",
  path: "/sign-in",
  noIndex: true,
});

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
