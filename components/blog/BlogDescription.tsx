import React from 'react';

const BlogDescription = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Blog Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full">
            Travel
          </span>
          <span className="bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1 rounded-full">
            Bali
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          10 Hidden Gems in Bali You Must Visit in 2026
        </h1>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Author"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Rohan Mehta</p>
              <p className="text-sm text-gray-500">Travel Writer</p>
            </div>
          </div>

          <div className="text-sm text-gray-500 flex flex-col md:flex-row gap-4 md:items-center">
            <span>June 15, 2026</span>
            <span className="hidden md:block">•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-[460px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl mb-12">
        <img
          src="https://picsum.photos/id/1015/1200/700"
          alt="Hidden Gems in Bali"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
          <p className="text-white/90 text-lg">Secret waterfalls, untouched beaches, and magical temples</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p>
          Bali is known for its popular tourist spots, but beyond the crowded beaches of Kuta and Seminyak 
          lie some of the most breathtaking and peaceful destinations. Here are 10 hidden gems that will 
          make your 2026 trip truly unforgettable.
        </p>

        <h2>1. Tegenungan Waterfall (Secret Viewpoint)</h2>
        <p>
          While most tourists visit the main viewpoint, very few know about the hidden trail that leads to 
          the base of the waterfall. The misty atmosphere and lush greenery make it perfect for photography 
          and swimming.
        </p>

        <h2>2. Banjar Hot Springs</h2>
        <p>
          Nestled in the northern part of Bali, these natural hot springs offer a serene and rejuvenating 
          experience. The water is rich in minerals and surrounded by tropical jungle — a perfect escape 
          from the heat.
        </p>

        <div className="my-10">
          <img
            src="https://picsum.photos/id/133/800/500"
            alt="Banjar Hot Springs"
            className="w-full rounded-2xl"
          />
          <p className="text-center text-sm text-gray-500 mt-3">Banjar Hot Springs • North Bali</p>
        </div>

        <h2>3. Campuhan Ridge Walk</h2>
        <p>
          A peaceful 2-hour walk through lush hills and rice terraces. Early morning is the best time to 
          enjoy the misty views and avoid the crowd. It feels like a scene straight out of a movie.
        </p>

        <h2>Why Visit These Hidden Spots?</h2>
        <ul>
          <li>Less crowded and more authentic experience</li>
          <li>Perfect for nature lovers and photographers</li>
          <li>Budget-friendly compared to touristy areas</li>
          <li>Deeper connection with Balinese culture and nature</li>
        </ul>

        <p>
          Pro tip: Hire a local guide or rent a scooter to explore these locations comfortably. Always 
          respect local customs and the environment while visiting these pristine places.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-16 mb-12">
        {["Bali", "Hidden Gems", "Waterfalls", "Travel Guide", "Nature", "2026"].map((tag, i) => (
          <span
            key={i}
            className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 px-5 py-2 rounded-full text-sm cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Share & Author Bio */}
      <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <p className="font-medium text-gray-900">Written by Rohan Mehta</p>
          <p className="text-gray-600 text-sm">
            Passionate traveler and photographer with 8+ years exploring Southeast Asia.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-2xl hover:bg-black transition-all">
            Share on X
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all">
            Share on Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
