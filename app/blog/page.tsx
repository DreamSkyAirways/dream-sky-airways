import React from "react";
import BlogHeroOne from "@/components/blog/BlogHeroOne";
import BlogFeaturedSlider from "@/components/blog/BlogFeaturedSlider";
import BlogCategorySections from "@/components/blog/BlogCategorySections";

export const metadata = {
  title: "Travel Blog – Destination Guides & Holiday Ideas | Dream Sky Airways",
  description:
    "Explore handpicked destination guides, budget travel hacks, family holiday planning tips, and expert advice for India, Bali, and worldwide travel with Dream Sky Airways.",
};

export default function BlogPage() {
  return (
    <main className="bg-white text-black w-full overflow-x-hidden space-y-0">
      {/* 3D Animated Title Section */}
      <BlogHeroOne />

      {/* Destination Hero Visual Slider */}
      <BlogFeaturedSlider />

      {/* Dedicated Category Sections (All, India, Family, Tips, Honeymoon, Adventure - 3 boxes per row) */}
      <BlogCategorySections />


    </main>
  );
}
