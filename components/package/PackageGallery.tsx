"use client";

import { useState } from "react";
import Image from "next/image";

interface PackageGalleryProps {
  pkg: {
    title: string;
    location: string;
    images: string[];
  };
}

const PackageGallery = ({ pkg }: PackageGalleryProps) => {
  const [mainImage, setMainImage] = useState(pkg.images[0]);

  const handlePrevious = () => {
    const currentIndex = pkg.images.indexOf(mainImage);
    const prevIndex =
      (currentIndex - 1 + pkg.images.length) % pkg.images.length;

    setMainImage(pkg.images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = pkg.images.indexOf(mainImage);
    const nextIndex = (currentIndex + 1) % pkg.images.length;

    setMainImage(pkg.images[nextIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        {pkg.title}
      </h1>

      <p className="text-gray-600 mb-6">
        📍 {pkg.location}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* Main Image */}
        <div className="lg:col-span-8">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={mainImage}
              alt={pkg.title}
              fill
              priority
              className="object-cover transition-all duration-500"
            />

            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-xl text-sm">
              {pkg.title}
            </div>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="lg:col-span-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Gallery
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {pkg.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                className={`relative h-32 cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  mainImage === img
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt={`${pkg.title}-${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={handlePrevious}
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl"
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
            >
              Next →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PackageGallery;