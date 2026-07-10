"use client";

import Link from "next/link";
import Image from "next/image";
import { packages } from "@/components/data/package";

export default function PopularPackages() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-blue-950 border border-blue-900 hover:border-blue-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.images?.[0] || "/placeholder.jpg"}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />

                  <span className="absolute top-4 left-4 bg-blue-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                    {pkg.duration}
                  </span>

                  <span className="absolute top-4 right-4 bg-white text-blue-950 text-sm font-bold px-3 py-1 rounded-lg">
                    ⭐ {pkg.rating}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-blue-300 text-sm mb-2">
                    📍 {pkg.location}
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 min-h-[56px]">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center justify-between border-t border-blue-900 pt-4">
                    <div>
                      <p className="text-gray-400 text-sm">
                        Starting From
                      </p>

                      <p className="text-2xl font-bold text-blue-400">
                        {pkg.price}
                      </p>
                    </div>

                    <button className="px-4 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 text-white font-medium transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}