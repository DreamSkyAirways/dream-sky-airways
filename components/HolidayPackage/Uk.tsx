"use client";
import React from 'react';

interface DestinationCard {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  duration?: string;
  price?: string;
}

const UkDestinations: React.FC = () => {
  const destinations: DestinationCard[] = [
    {
      id: 1,
      title: "Nainital",
      location: "Lake District",
      description: "Experience the serene beauty of Naini Lake surrounded by majestic Himalayan peaks. Perfect for boating, shopping at Mall Road, and romantic getaways.",
      image: "/holidaypack/uk.jpeg",
      duration: "3 Days",
      price: "₹12,999"
    },
    {
      id: 2,
      title: "Mussoorie",
      location: "Queen of Hills",
      description: "Known as the Queen of Hills, Mussoorie offers stunning valley views, Kempty Falls, and pleasant weather throughout the year.",
      image: "/holidaypack/uk.jpeg",
      duration: "4 Days",
      price: "₹14,999"
    },
    {
      id: 3,
      title: "Rishikesh",
      location: "Yoga Capital",
      description: "The adventure and spiritual capital of India. White water rafting, yoga retreats, and the sacred Ganges River await you.",
      image: "/holidaypack/uk.jpeg",
      duration: "5 Days",
      price: "₹16,499"
    },
    {
      id: 4,
      title: "Auli",
      location: "Ski Paradise",
      description: "Famous for its pristine slopes and breathtaking views of Nanda Devi. Ideal for skiing, snowboarding, and cable car rides.",
      image: "/holidaypack/uk.jpeg",
      duration: "4 Days",
      price: "₹18,999"
    },
    {
      id: 5,
      title: "Haridwar",
      location: "Gateway to Gods",
      description: "Witness the magical Ganga Aarti at Har Ki Pauri. A sacred pilgrimage site known for its spiritual significance and vibrant culture.",
      image: "/holidaypack/uk.jpeg",
      duration: "3 Days",
      price: "₹9,999"
    },
    {
      id: 6,
      title: "Jim Corbett",
      location: "Wildlife Haven",
      description: "India's first national park. Spot majestic tigers, elephants, and diverse wildlife on thrilling jungle safaris.",
      image: "/holidaypack/uk.jpeg",
      duration: "4 Days",
      price: "₹15,499"
    }
  ];

  const handleBookNow = (title: string) => {
    alert(`Booking initiated for ${title} package! Redirecting to booking page...`);
    // In real app: navigate to booking form or open modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          🏔️ Uttarakhand
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Discover Uttarakhand
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the majestic Himalayas with our curated holiday packages. 
          From serene lakes to thrilling adventures — create memories that last forever.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/id/${dest.id + 20}/600/400`;
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-700 shadow">
                  {dest.duration}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-1">
                  <span className="text-blue-600 font-medium text-sm tracking-widest">{dest.location.toUpperCase()}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {dest.title}
                </h3>
                
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-1">
                  {dest.description}
                </p>

                {/* Price & Button */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-xs text-gray-500">Starting from</span>
                      <div className="text-2xl font-bold text-blue-600">{dest.price}</div>
                    </div>
                    <button
                      onClick={() => handleBookNow(dest.title)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all active:scale-95 shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
                    >
                      Book Now
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Banner */}
      <div className="max-w-7xl mx-auto mt-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-3">Ready for your Himalayan Adventure?</h2>
        <p className="text-blue-100 mb-8 max-w-md mx-auto">
          Book any of these packages with Dream Sky Airways and enjoy exclusive flight discounts + complimentary airport transfers.
        </p>
        <button 
          onClick={() => alert('Redirecting to full Uttarakhand packages page...')}
          className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-10 py-4 rounded-2xl text-lg transition-colors"
        >
          View All Packages
        </button>
      </div>
    </div>
  );
};

export default UkDestinations;