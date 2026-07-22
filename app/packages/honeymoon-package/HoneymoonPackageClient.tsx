"use client";

import Image from "next/image";
import Link from "next/link";
import {MapPin, Star, Clock} from "lucide-react";
import {honeymoonPackages} from "@/components/data/honeymoonPacakges";

export default function HoneymoonPackageClient() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {honeymoonPackages.map((item) => (
          <Link
            key={item.id}
            href={`/packages/honeymoon-package/${item.slug}`}
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white">
                {item.category}
              </span>
            </div>

            <div className="p-5">
              <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
                {item.title}
              </h2>

              <div className="mt-3 flex items-center gap-2 text-gray-500">
                <MapPin size={16} />
                <span className="text-sm">{item.location}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star size={17} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{item.rating}</span>
                  <span className="text-sm text-gray-500">({item.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock size={16} />
                  <span className="text-sm">{item.duration}</span>
                </div>
              </div>

              <p className="mt-4 line-clamp-2 text-sm text-gray-600">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.highlights.slice(0, 2).map((highlight, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <div>
                  <p className="text-sm text-gray-500">Starting From</p>
                  <h3 className="text-2xl font-bold text-pink-600">{item.price}</h3>
                </div>
                <span className="rounded-xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-pink-700">
                  View Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
