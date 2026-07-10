'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Best Heritage Hotels in Varanasi You Must Stay At",
    excerpt: "Discover the charm of royal palaces turned into luxury hotels with breathtaking Ganges views and authentic Indian hospitality.",
    image: "",
    category: "Hotels",
    date: "Jun 15, 2026",
    readTime: "8 min read",
    author: "Dream Sky Team",
  },
  {
    id: 2,
    title: "How to Book Cheap Flights to Bangkok in 2026",
    excerpt: "Insider tips, best booking windows, and hidden deals to fly to Bangkok without burning a hole in your pocket.",
    image: "",
    category: "Flights",
    date: "Jun 12, 2026",
    readTime: "6 min read",
    author: "Travel Desk",
  },
  {
    id: 3,
    title: "Complete Guide to Cab Rentals in Goa for Tourists",
    excerpt: "Everything you need to know about renting cabs, bikes, and luxury cars in Goa — prices, tips, and best operators.",
    image: "",
    category: "Cab Rental",
    date: "Jun 10, 2026",
    readTime: "10 min read",
    author: "Dream Sky Team",
  },
  {
    id: 4,
    title: "Top 7 Bus Routes in India That Feel Like a Vacation",
    excerpt: "From Leh to Kerala, these scenic bus journeys offer breathtaking views and unforgettable travel experiences.",
    image: "",
    category: "Bus",
    date: "Jun 8, 2026",
    readTime: "7 min read",
    author: "Adventure Blog",
  },
  {
    id: 5,
    title: "Why Kashmir Should Be Your Next Summer Destination",
    excerpt: "Snow-capped mountains, tulip gardens, houseboats, and incredible hospitality await you in paradise on earth.",
    image: "",
    category: "Destinations",
    date: "Jun 5, 2026",
    readTime: "12 min read",
    author: "Dream Sky Team",
  },
  {
    id: 6,
    title: "Ultimate Guide to International Travel with Dream Sky Airways",
    excerpt: "Visa tips, packing checklist, in-flight hacks, and how to make the most of your journey with us.",
    image: "",
    category: "Travel Tips",
    date: "Jun 3, 2026",
    readTime: "9 min read",
    author: "Travel Desk",
  },
];

const categories = ["All", "Hotels", "Flights", "Bus", "Cab Rental", "Destinations", "Travel Tips"];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(blog => blog.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Travel Stories &amp; Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tips, destination guides, and travel stories to inspire your next adventure with Dream Sky Airways
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-64">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
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

                <h3 className="font-semibold text-xl leading-tight text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-[15px] line-clamp-3 mb-6">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">By {blog.author}</span>
                  <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all">
            View All Travel Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;