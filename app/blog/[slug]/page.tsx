import BlogDescription from "@/components/blog/BlogDescription";
import {blogs} from "@/app/data/blogs";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import Script from "next/script";

type Props = {
  params: Promise<{slug: string}>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({slug: blog.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return buildPageMetadata({
      title: "Travel Blog",
      description:
        "Travel tips, destination guides and holiday planning advice from Dream Sky Airways.",
      path: `/blog/${slug}`,
      slug,
      type: "article",
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: blog.title,
    description: blog.excerpt,
    path: `/blog/${blog.slug}`,
    slug: blog.slug,
    image: blog.image,
    type: "article",
    extras: [
      "travel blog",
      "travel tips",
      "holiday planning guide",
      "Dream Sky Airways blog",
    ],
  });
}

export default async function Page({params}: Props) {
  const {slug} = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <Script
        id={`blog-article-${blog.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blog.title,
            description: blog.excerpt,
            image: blog.image?.startsWith("http")
              ? blog.image
              : `${SITE_URL}${blog.image}`,
            author: {
              "@type": "Organization",
              name: "Dream Sky Airways",
            },
            publisher: {
              "@type": "Organization",
              name: "Dream Sky Airways",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
              },
            },
            mainEntityOfPage: `${SITE_URL}/blog/${blog.slug}`,
          }),
        }}
      />
      <BlogDescription blog={blog} />
    </div>
  );
}
