"use client";

import React, {useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {blogs} from "@/app/data/blogs";

const categories = ["All", "Travel", "India", "Family", "Tips"];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = useMemo(
    () =>
      blogs.map((blog) => ({
        ...blog,
        category: blog.slug.includes("family")
          ? "Family"
          : blog.slug.includes("agency") || blog.slug.includes("domestic")
            ? "Tips"
            : blog.slug.includes("india")
              ? "India"
              : "Travel",
        date: "2026",
        readTime: "8 min read",
        author: "Dream Sky Team",
      })),
    [],
  );

  const filteredBlogs =
    activeCategory === "All"
      ? posts
      : posts.filter((blog) => blog.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Travel Stories &amp; Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tips, destination guides, and travel stories to inspire your
            next adventure with Dream Sky Airways
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 bg-gray-100">
                {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : null}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h2 className="font-semibold text-xl leading-tight text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-[15px] line-clamp-3 mb-6">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">By {blog.author}</span>
                  <span className="text-blue-600 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
