"use client";

import Image from "next/image";
import Link from "next/link";

export type BlogPostView = {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  content: string;
};

type Props = {
  blog: BlogPostView;
};

export default function BlogDescription({blog}: Props) {
  const tags = [
    "Travel",
    "India",
    "Dream Sky Airways",
    ...blog.slug.split("-").filter((w) => w.length > 3).slice(0, 4),
  ];

  return (
    <article className="max-w-7xl mx-auto px-4 py-4">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full">
            Travel
          </span>
          <Link
            href="/blog"
            className="bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1 rounded-full hover:bg-emerald-200"
          >
            Dream Sky Blog
          </Link>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {blog.title}
        </h1>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#084248] text-white flex items-center justify-center font-bold">
              DS
            </div>
            <div>
              <p className="font-semibold text-gray-900">Dream Sky Airways</p>
              <p className="text-sm text-gray-500">Travel Editorial Team</p>
            </div>
          </div>
          <div className="text-sm text-gray-500">Travel Guide</div>
        </div>
      </div>

      <div className="relative h-[320px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl mb-12 bg-gray-100">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        ) : null}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
          <p className="text-white/90 text-base md:text-lg">{blog.excerpt}</p>
        </div>
      </div>

      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed blog-content"
        dangerouslySetInnerHTML={{__html: blog.content}}
      />

      <div className="flex flex-wrap gap-3 mt-16 mb-12">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <p className="font-medium text-gray-900">Written by Dream Sky Airways</p>
          <p className="text-gray-600 text-sm">
            Expert travel guides, holiday tips and destination advice for India
            and beyond.
          </p>
        </div>
        <Link
          href="/packages"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all"
        >
          Explore Packages
        </Link>
      </div>
    </article>
  );
}
