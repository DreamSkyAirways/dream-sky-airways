import React from 'react';

const PackageCustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      date: "2 weeks ago",
      feedback: "This Bali trip was absolutely magical! The itinerary was perfectly balanced between adventure and relaxation. The Nusa Penida snorkeling was the highlight. Everything was well organized and the hotels were fantastic.",
      location: "Delhi, India"
    },
    {
      id: 2,
      name: "Rahul Verma",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      date: "1 month ago",
      feedback: "Best family vacation we've had! Our kids loved the jungle swing and rice terrace trekking. The guide was very knowledgeable and friendly. Highly recommended for families.",
      location: "Mumbai, India"
    },
    {
      id: 3,
      name: "Ananya Patel",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
      date: "3 weeks ago",
      feedback: "The sunset dinner in Seminyak was unforgettable. Beautiful villas with private pools. Only suggestion - more vegetarian food options could be added. Overall a wonderful experience!",
      location: "Bangalore, India"
    },
    {
      id: 4,
      name: "Vikram Singh",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      date: "2 months ago",
      feedback: "Professional team and seamless execution. From airport pickup to drop-off, everything was on time. The temples tour was very insightful. Will definitely book again with them.",
      location: "Hyderabad, India"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          What Our Travelers Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Real experiences from real adventurers who explored Bali with us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Customer Info */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md"
              />
              <div>
                <h3 className="font-semibold text-xl text-gray-900">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.location}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-gray-400 text-sm">• {review.date}</span>
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div className="text-gray-700 leading-relaxed text-[17px]">
              "{review.feedback}"
            </div>

            {/* Optional: Company Logo or Verified Badge */}
            <div className="mt-6 pt-6 border-t flex items-center gap-2 text-emerald-600 text-sm font-medium">
              <span>✓ Verified Traveler</span>
            </div>
          </div>
        ))}
      </div>

      {/* Overall Rating Summary */}
      <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-10 text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="text-6xl font-bold text-emerald-600">4.9</div>
          <div>
            <div className="flex text-3xl text-yellow-400">★★★★☆</div>
            <p className="text-gray-600 mt-1">Based on 248 reviews</p>
          </div>
        </div>
        <p className="text-gray-700 font-medium">Our customers love traveling with us</p>
      </div>
    </div>
  );
};

export default PackageCustomerReview;

