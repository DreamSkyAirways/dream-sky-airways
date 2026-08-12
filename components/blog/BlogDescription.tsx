"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  Check,
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";

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

export default function BlogDescription({ blog }: Props) {
  const [copied, setCopied] = useState(false);

  const tags = [
    "Travel Guide",
    "Dream Sky Airways",
    "India Tourism",
    ...blog.slug.split("-").filter((w) => w.length > 3).slice(0, 4),
  ];

  // Find related blogs excluding current one
  const relatedBlogs = blogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-gray-50
     min-h-screen
      text-gray-900
       font-sans pb-20">

      {/* Top Back Navigation Bar */}
      <div className="bg-white
       border-b 
       border-gray-200
        sticky top-0
         z-30 shadow-xs">
        <div className="max-w-7xl
         mx-auto px-4 
         sm:px-6 lg:px-8
          py-4 flex 
          items-center
           justify-between">
          <Link
            href="/blog"
            className="inline-flex
             items-center gap-2
              text-sm font-bold
               text-gray-700
                hover:text-blue-600
                 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Travel Blog
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex
               items-center 
               gap-1.5 px-3.5
                py-1.5 bg-gray-100
                 hover:bg-gray-200 
                 text-gray-800 
                 rounded-full 
                 text-xs font-semibold 
                 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" /> Link Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-blue-600" /> Share Article
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl
       mx-auto px-4
        sm:px-6 pt-10">

        {/* Article Meta Header */}
        <div className="space-y-4 mb-8">
          <div className="flex 
          items-center 
          gap-3 
          flex-wrap">
            <span className="bg-blue-600 
            text-white text-xs
             font-extrabold
              uppercase tracking-widest
               px-3.5 py-1 rounded-full
                shadow-sm">
              Featured Guide
            </span>
            <span className="bg-amber-100 
            text-amber-900
             text-xs font-bold
              px-3 py-1 rounded-full
               flex items-center
                gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" /> Verified Content
            </span>
          </div>

          <h1 className="text-3xl
           sm:text-4xl 
           md:text-5xl 
           font-extrabold
            text-gray-900 
            leading-tight
             tracking-tight">
            {blog.title}
          </h1>

          <p className="text-lg 
          sm:text-xl 
          text-gray-600 
          font-medium
           leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex
           items-center 
          justify-between 
          flex-wrap 
          gap-4 pt-4
           border-t 
           border-gray-200 
           text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11
               rounded-2xl bg-blue-950
                text-amber-300 
                font-black flex
                 items-center
                  justify-center
                   text-sm shadow-md">
                DS
              </div>
              <div>
                <p className="font-bold text-gray-900">Dream Sky Airways Editorial</p>
                <p className="text-xs text-gray-500">Travel &amp; Tourism Experts</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-600" /> Published 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" /> 7 min read
              </span>
            </div>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="relative h-[280px]
         sm:h-[380px] md:h-[450px]
          rounded-3xl overflow-hidden
           shadow-2xl mb-12 
           bg-gray-900 border border-gray-200">
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              unoptimized
              className="object-cover object-[center_30%] transition-all duration-500"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white/90 text-sm sm:text-base font-medium">
            <p className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4" /> Destination Highlight
            </p>
            <p className="line-clamp-2">{blog.excerpt}</p>
          </div>
        </div>

        {/* Body HTML Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-md border border-gray-200 mb-12">
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-sans blog-content space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h4 className="text-xs uppercase tracking-widest font-extrabold text-gray-400 mb-3">
            Article Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-white text-gray-700 px-4 py-2 rounded-full text-xs font-semibold border border-gray-200 shadow-2xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16 border border-blue-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
              Ready to Experience This Destination?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Book Tailored Tour Packages with Dream Sky Airways
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Get 24/7 travel assistance, verified luxury stays, GDS flight deals, and customized day-by-day itineraries.
            </p>
          </div>
          <Link
            href="/packages"
            className="px-8 py-4 bg-amber-400 text-black font-extrabold rounded-2xl hover:bg-amber-300 transition-all shadow-lg hover:scale-105 whitespace-nowrap text-sm uppercase tracking-wider flex items-center gap-2"
          >
            Explore Packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
              Related Travel Guides
            </h3>
            <Link href="/blog" className="text-sm font-bold text-blue-600 hover:underline">
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((rBlog) => (
              <Link
                key={rBlog.slug}
                href={`/blog/${rBlog.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 bg-gray-100">
                    {rBlog.image ? (
                      <Image
                        src={rBlog.image}
                        alt={rBlog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="300px"
                      />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-base text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">
                      {rBlog.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{rBlog.excerpt}</p>
                  </div>
                </div>
                <div className="p-4 pt-0 text-xs font-bold text-blue-600 flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
