"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import { Search, Clock, ArrowRight, Sparkles, Filter } from "lucide-react";

const categories = ["All", "India", "Family", "Tips", "Honeymoon", "Adventure"];

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
    return posts.filter((blog) => {
      const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  return (
    <section className="py-16 bg-gray-50 text-gray-900 font-sans border-t border-gray-100" id="blog-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100 text-amber-900 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Latest Travel Articles
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 uppercase">
            EXPLORE DESTINATION GUIDES &amp; HACKS
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Search our library of verified travel stories, budget tips, and honeymoon itineraries written by Dream Sky Airways travel experts.
          </p>

          {/* Search Input Bar */}
          <div className="relative max-w-xl mx-auto mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination, e.g. Bali, Rishikesh, Goa, Honeymoon..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-gray-200 focus:border-amber-400 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 text-sm sm:text-base transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105 border-2 border-amber-300"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:text-amber-600 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 px-2">
          <p className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-amber-500" /> Showing{" "}
            <span className="font-bold text-gray-900">{filteredBlogs.length}</span> articles
          </p>
        </div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative h-60 bg-gray-100 overflow-hidden">
                    {blog.image ? (
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : null}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-950/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-400 mb-3">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500" /> {blog.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-xl leading-snug text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-gray-500">{blog.author}</span>
                  <span className="text-amber-600 font-bold group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 max-w-lg mx-auto">
            <p className="text-lg font-bold text-gray-800 mb-2">No matching travel guides found</p>
            <p className="text-sm text-gray-500 mb-6">
              Try searching for &quot;Bali&quot;, &quot;Goa&quot;, &quot;Manali&quot;, or reset your active category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-amber-400 text-black font-extrabold rounded-full hover:bg-amber-300 transition-all text-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
