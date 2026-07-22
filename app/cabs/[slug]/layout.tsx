import type {Metadata} from "next";
import {buildPageMetadata} from "@/lib/seo";

type Props = {
  params: Promise<{slug: string}>;
  children: React.ReactNode;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const readable = slug.replace(/[-_]/g, " ");

  return buildPageMetadata({
    title: `Cab ${readable} – Book Online`,
    description: `Book cab ${readable} with Dream Sky Airways.`,
    path: `/cabs/${slug}`,
    slug,
    noIndex: true,
  });
}

export default function CabSlugLayout({children}: Props) {
  return children;
}
