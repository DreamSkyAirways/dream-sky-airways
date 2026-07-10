import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sneha Kapoor",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      date: "5 days ago",
      title: "Perfect Stay in Ubud!",
      feedback: "Absolutely loved this resort! The private pool villa was a dream. Staff was extremely hospitable and the breakfast spread was amazing. Highly recommended for couples.",
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Arjun Malhotra",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      date: "2 weeks ago",
      title: "Great Location & Service",
      feedback: "Beautiful property surrounded by nature. The spa session was rejuvenating. Only minor issue was WiFi speed in some areas. Overall a memorable experience.",
      location: "Delhi"
    },
    {
      id: 3,
      name: "Meera Joshi",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      date: "1 month ago",
      title: "Honeymoon Paradise",
      feedback: "We chose this for our honeymoon and it exceeded all expectations. Romantic setup, stunning views, and exceptional service. Will definitely return!",
      location: "Bangalore"
    },
    {
      id: 4,
      name: "Rohan Sharma",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      date: "3 weeks ago",
      title: "Family Friendly Resort",
      feedback: "Kids loved the pool and activities. Clean rooms, delicious food, and very helpful staff. Great value for money.",
      location: "Hyderabad"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Guest Reviews</h2>
          <p className="text-gray-600 mt-2 text-lg">Real stories from real guests</p>
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-3xl px-10 py-8 shadow-md text-center border border-gray-100 min-w-[280px]">
          <div className="flex items-center justify-center gap-4">
            <span className="text-7xl font-bold text-gray-900">4.8</span>
            <div>
              <div className="flex text-yellow-400 text-4xl">★★★★☆</div>
              <p className="text-sm text-gray-500 mt-1">Based on 184 reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-14">
        {[
          { label: "Excellent", count: "142", percent: "77%" },
          { label: "Very Good", count: "31", percent: "17%" },
          { label: "Good", count: "8", percent: "4%" },
          { label: "Average", count: "2", percent: "1%" },
          { label: "Poor", count: "1", percent: "1%" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between text-sm mb-3">
              <span className="font-medium">{item.label}</span>
              <span className="text-gray-500">{item.count}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-2 bg-emerald-500 rounded-full" style={{ width: item.percent }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                  </div>
                </div>

                <h5 className="font-semibold text-gray-800 mt-5 mb-2">{review.title}</h5>
                <p className="text-gray-700 leading-relaxed">
                  “{review.feedback}”
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review Button */}
      <div className="text-center mt-12">
        <button className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all inline-flex items-center gap-3">
          ✍️ Write Your Review
        </button>
        <p className="text-gray-500 text-sm mt-3">Share your experience with us</p>
      </div>
    </div>
  );
};

export default Reviews;