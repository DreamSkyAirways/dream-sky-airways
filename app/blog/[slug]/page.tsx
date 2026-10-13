
import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import BlogDescription from "@/components/blog/BlogDescription";
import { blogs } from "@/app/data/blogs";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return buildPageMetadata({
      title: "Travel Guide Not Found",
      description:
        "Explore destination guides, holiday inspiration, and travel tips from Dream Sky Airways.",
      path: `/blog/${slug}`,
      slug,
      type: "article",
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${blog.title} | Dream Sky Airways Travel Guide`,
    description: blog.excerpt,
    path: `/blog/${blog.slug}`,
    slug: blog.slug,
    image: blog.image,
    type: "article",
    extras: [
      "travel guide",
      "destination guide",
      "travel tips",
      "holiday planning",
      "Dream Sky Airways",
    ],
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/blog/${blog.slug}`;

  const imageUrl = blog.image
    ? blog.image.startsWith("http://") ||
      blog.image.startsWith("https://")
      ? blog.image
      : `${SITE_URL}${
          blog.image.startsWith("/") ? "" : "/"
        }${blog.image}`
    : undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    ...(imageUrl ? { image: [imageUrl] } : {}),
    author: {
      "@type": "Organization",
      name: "Dream Sky Airways",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Dream Sky Airways",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    inLanguage: "en-IN",
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8faf7] text-[#173b35]">
      <Script
        id={`blog-article-${blog.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <BlogDescription blog={blog} />
    </main>
  );
}
