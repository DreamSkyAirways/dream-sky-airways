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
    title: `Bus ${readable} – Book Tickets Online`,
    description: `Book bus ${readable} with Dream Sky Airways.`,
    path: `/buses/${slug}`,
    slug,
    noIndex: true,
  });
}

export default function BusSlugLayout({children}: Props) {
  return children;
}
