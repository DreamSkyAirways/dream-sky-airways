import type {Metadata} from "next";
import {buildPageMetadata} from "@/lib/seo";

type Props = {
  params: Promise<{slug: string}>;
  children: React.ReactNode;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const readable = slug.replace(/[-_]/g, " ");

  // Mock flight detail pages — keep out of search until real inventory exists
  return buildPageMetadata({
    title: `Flight ${readable} – Book Online`,
    description: `Book flight ${readable} with Dream Sky Airways.`,
    path: `/flights/${slug}`,
    slug,
    noIndex: true,
  });
}

export default function FlightSlugLayout({children}: Props) {
  return children;
}
