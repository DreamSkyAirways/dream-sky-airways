"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Check,
  Sparkles,
  MapPin,
  BookOpen,
  Compass,
  Copy,
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
    ...blog.slug
      .split("-")
      .filter((word) => word.length > 3)
      .slice(0, 4),
  ];

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this article link:", window.location.href);
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf7] pb-16 text-[#173b35]">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 border-b border-[#e5ece6] bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173b35] transition hover:text-[#087e70]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f5ee]">
              <ArrowLeft size={17} />
            </span>
            <span className="hidden sm:inline">Back to Travel Blog</span>
            <span className="sm:hidden">Back to Blog</span>
          </Link>

          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-[#087e70] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#06675d] sm:px-5 sm:text-sm"
          >
            Explore Packages
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Article header */}
      <header className="relative overflow-hidden border-b border-[#e4ece6] bg-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d9f1e9]/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#ffead7]/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c5e7dc] bg-[#f1f8f4] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#087e70]">
              <Compass size={15} />
              Travel Guide
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff2e5] px-3.5 py-2 text-xs font-semibold text-[#a65b21]">
              <Sparkles size={14} />
              Travel Inspiration
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-[#173b35] sm:text-4xl md:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
            {blog.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-[#e8eee9] pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173b35] text-sm font-black text-white">
                DS
              </div>

              <div>
                <p className="text-sm font-bold text-[#173b35]">
                  Dream Sky Airways
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Travel & Tourism
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} className="text-[#087e70]" />
                Travel Guide
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock size={16} className="text-[#087e70]" />
                Read at your own pace
              </span>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 rounded-full border border-[#dce9e2] bg-white px-4 py-2.5 font-bold text-[#087e70] transition hover:bg-[#eaf5ef]"
              >
                {copied ? <Check size={15} /> : <Share2 size={15} />}
                {copied ? "Link Copied" : "Share Article"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured image */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div className="relative h-[280px] overflow-hidden rounded-3xl bg-[#e5eee8] shadow-[0_20px_55px_rgba(23,59,53,0.10)] sm:h-[400px] lg:h-[520px]">
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#102d28]/70 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              <MapPin size={15} className="text-[#ffd0a3]" />
              Destination Inspiration
            </span>

            <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-white sm:text-base">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8 lg:pt-14">
        <article className="min-w-0">
          <div className="rounded-3xl border border-[#e4ece6] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-7 flex items-center gap-3 border-b border-[#e8eee9] pb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5ee] text-[#087e70]">
                <BookOpen size={20} />
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-[#173b35]">
                  Travel Guide
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Everything you need to know
                </p>
              </div>
            </div>

            <div
              className="blog-content prose prose-base max-w-none break-words prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-[#173b35] prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-7 prose-h3:text-xl prose-p:leading-8 prose-p:text-gray-600 prose-a:font-semibold prose-a:text-[#087e70] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#173b35] prose-li:leading-7 prose-li:text-gray-600 prose-blockquote:border-l-[#e88b42] prose-blockquote:text-gray-600"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Tags */}
          <div className="mt-8 rounded-3xl border border-[#e4ece6] bg-white p-6 sm:p-8">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087e70]">
              Explore Article Topics
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {Array.from(new Set(tags)).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#dce9e2] bg-[#f4f8f5] px-4 py-2 text-xs font-semibold text-[#35564f]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24">
          <div className="rounded-3xl bg-[#173b35] p-6 text-white shadow-lg sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#ffd0a3]">
              <Compass size={24} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#a9e2d2]">
              Plan Your Next Journey
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight">
              Turn your travel inspiration into a real adventure.
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/75">
              Explore holiday packages and find ideas for your next getaway.
            </p>

            <Link
              href="/packages"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e88b42] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#d77931]"
            >
              Explore Packages
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl border border-[#e4ece6] bg-white p-6">
            <h3 className="text-lg font-extrabold text-[#173b35]">
              Travel Planning Tips
            </h3>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
              <li className="flex gap-3">
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-[#087e70]"
                />
                Check the destination's best travel season.
              </li>
              <li className="flex gap-3">
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-[#087e70]"
                />
                Plan your budget and accommodation in advance.
              </li>
              <li className="flex gap-3">
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-[#087e70]"
                />
                Keep essential travel documents ready.
              </li>
            </ul>

            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087e70] transition hover:text-[#e88b42]"
            >
              Browse Travel Articles
              <ArrowRight size={16} />
            </Link>
          </div>
        </aside>
      </div>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="relative overflow-hidden rounded-3xl bg-[#e8f4ed] p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full bg-[#bfe5d6]/70 blur-2xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e70]">
                Your next adventure awaits
              </span>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#173b35] sm:text-3xl lg:text-4xl">
                Ready to discover somewhere new?
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Explore holiday ideas and choose a travel experience that
                suits your interests and budget.
              </p>
            </div>

            <Link
              href="/packages"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#087e70] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#06675d]"
            >
              Find Your Holiday
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e70]">
              Keep Exploring
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-[#173b35] sm:text-3xl">
              More Travel Guides
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#087e70] transition hover:text-[#e88b42]"
          >
            View All Articles
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedBlogs.map((relatedBlog) => (
            <Link
              key={relatedBlog.slug}
              href={`/blog/${relatedBlog.slug}`}
              className="group overflow-hidden rounded-3xl border border-[#e4ece6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden bg-[#e8f2ec]">
                {relatedBlog.image && (
                  <Image
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#173b35]/35 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#087e70]">
                  Travel Guide
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="line-clamp-2 text-lg font-extrabold leading-snug text-[#173b35] transition-colors group-hover:text-[#087e70]">
                  {relatedBlog.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                  {relatedBlog.excerpt}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087e70]">
                  Read Article
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
