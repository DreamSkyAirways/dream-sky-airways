import type { Metadata } from "next";
import BlogHeroOne from "@/components/blog/BlogHeroOne";
import BlogFeaturedSlider from "@/components/blog/BlogFeaturedSlider";
import BlogCategorySections from "@/components/blog/BlogCategorySections";

export const metadata: Metadata = {
  title: "Travel Blog | Destination Guides, Tips & Holiday Ideas",
  description:
    "Discover destination guides, travel tips, family holidays, honeymoon inspiration, and adventure ideas with Dream Sky Airways. Plan your next memorable journey.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Travel Blog | Dream Sky Airways",
    description:
      "Explore travel guides, destination inspiration, holiday ideas, and practical tips for your next adventure.",
    url: "/blog",
    siteName: "Dream Sky Airways",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <main className="w-full overflow-x-clip bg-[#f8faf7] text-[#173b35]">
      {/* Travel blog introduction */}
      <BlogHeroOne />

      {/* Featured destinations and travel stories */}
      <BlogFeaturedSlider />

      {/* Travel categories and articles */}
      <section
        aria-label="Browse travel articles by category"
        className="bg-[#f8faf7]"
      >
        <BlogCategorySections />
      </section>
    </main>
  );
}
