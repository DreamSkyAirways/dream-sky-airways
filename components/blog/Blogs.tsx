"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import {
  Search,
  Clock,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  MapPin,
  X,
  BookOpen,
} from "lucide-react";

const categories = [
  "All",
  "India",
  "Family",
  "Tips",
  "Honeymoon",
  "Adventure",
];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const posts = useMemo(
    () =>
      blogs.map((blog) => ({
        ...blog,
        date: "2026",
        readTime: "6 min read",
        author: "Dream Sky Editorial",
      })),
    []
  );

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return posts.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category?.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <section
      id="blog-grid"
      className="relative overflow-hidden bg-[#f8faf7] py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#d9f1e9]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#ffead7]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c5e7dc] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087e70] shadow-sm">
            <Sparkles size={15} />
            Travel Stories & Inspiration
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#173b35] sm:text-4xl lg:text-5xl">
            Explore the World,
            <span className="block text-[#e88b42]">
              One Story at a Time
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Discover destination guides, practical travel tips, holiday
            inspiration, and ideas to help you plan your next memorable
            journey with Dream Sky Airways.
          </p>
        </div>

        {/* Search panel */}
        <div className="mx-auto mb-8 max-w-4xl rounded-3xl border border-[#e4ece6] bg-white p-4 shadow-[0_12px_35px_rgba(23,59,53,0.05)] sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#087e70]"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search destinations, travel tips, holidays..."
                aria-label="Search travel articles"
                className="w-full rounded-2xl border border-[#e4ece6] bg-[#f8faf7] py-3.5 pl-12 pr-11 text-sm text-[#173b35] outline-none transition placeholder:text-gray-400 focus:border-[#087e70] focus:ring-4 focus:ring-[#087e70]/10 sm:text-base"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-500 transition hover:bg-[#e6f3ed] hover:text-[#087e70]"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-[#f1f8f4] px-4 py-3.5 text-sm text-[#35564f]">
              <SlidersHorizontal size={17} className="text-[#087e70]" />
              <span className="font-medium">
                {filteredBlogs.length} articles
              </span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-sm font-bold text-[#173b35] sm:text-base">
              Explore by category
            </h3>

            {(activeCategory !== "All" || searchQuery) && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-bold text-[#087e70] transition hover:text-[#e88b42]"
              >
                Reset filters
              </button>
            )}
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "border-[#087e70] bg-[#087e70] text-white shadow-md shadow-[#087e70]/15"
                      : "border-[#e1eae4] bg-white text-gray-600 hover:border-[#087e70] hover:text-[#087e70]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results heading */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087e70]">
              The Travel Journal
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-[#173b35] sm:text-2xl">
              {activeCategory === "All"
                ? "Latest Travel Guides"
                : `${activeCategory} Travel Guides`}
            </h3>
          </div>

          <p className="text-xs text-gray-500 sm:text-sm">
            Showing{" "}
            <span className="font-bold text-[#173b35]">
              {filteredBlogs.length}
            </span>{" "}
            {filteredBlogs.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {/* Blog grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filteredBlogs.map((blog, index) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#e4ece6] bg-white shadow-[0_8px_30px_rgba(23,59,53,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c4e5d9] hover:shadow-[0_18px_45px_rgba(23,59,53,0.11)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-[#e8f2ec] sm:h-60">
                  {blog.image ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[#087e70]">
                      <MapPin size={36} />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173b35]/45 via-transparent to-black/5" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#087e70] shadow-sm sm:text-xs">
                    {blog.category || "Travel"}
                  </span>

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#087e70] shadow-lg transition-all duration-300 group-hover:bg-[#e88b42] group-hover:text-white">
                    <ArrowRight size={19} />
                  </div>

                  {index === 0 && activeCategory === "All" && !searchQuery && (
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#e88b42] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      <Sparkles size={12} />
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#087e70]" />
                      {blog.readTime}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#e88b42]" />

                    <span>{blog.date}</span>
                  </div>

                  <h4 className="line-clamp-2 text-lg font-extrabold leading-snug text-[#173b35] transition-colors group-hover:text-[#087e70] sm:text-xl">
                    {blog.title}
                  </h4>

                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-gray-600">
                    {blog.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#edf1ed] pt-4">
                    <span className="text-xs font-medium text-gray-500">
                      {blog.author}
                    </span>

                    <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#087e70] transition-colors group-hover:text-[#e88b42] sm:text-sm">
                      Read Guide
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="mx-auto max-w-xl rounded-3xl border border-[#e4ece6] bg-white px-6 py-12 text-center shadow-sm sm:px-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e6f4ee] text-[#087e70]">
              <BookOpen size={28} />
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-[#173b35]">
              No travel guides found
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Try another destination or category to discover more travel
              inspiration.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#087e70] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#06675d]"
            >
              Clear Filters
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
