"use client";

import React, { useState } from "react";

interface HotelGalleryProps {
  images: string[];
}

const HotelGallery = ({ images }: HotelGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-2 py-2">
      <h1 className="text-2xl font-bold mb-2 px-2 text-gray-900">
        Hotel Gallery
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        {/* Main Image */}
        <div className="lg:col-span-8">
          <div className="relative rounded-md overflow-hidden shadow-2xl bg-gray-100">
            <img
              src={mainImage}
              alt="Hotel View"
              className="w-full h-auto max-h-[520px] object-cover"
            />

            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full"
            >
              ←
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full"
            >
              →
            </button>

            <div className="absolute bottom-6 left-6 bg-black/70 text-white px-5 py-2 rounded-2xl">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-2 max-h-[500px] overflow-y-auto">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => {
                  setMainImage(img);
                  setCurrentIndex(index);
                }}
                className={`cursor-pointer rounded-2xl overflow-hidden border-2 ${
                  mainImage === img
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Hotel ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelGallery;