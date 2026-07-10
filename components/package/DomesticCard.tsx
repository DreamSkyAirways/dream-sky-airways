"use client";

import Image from "next/image";
import Link from "next/link";
import {Star, MapPin, Clock} from "lucide-react";
import {domesticPackages} from "../data/domesticPackage";

const DomesticCard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {domesticPackages.map((item) => (
          <Link
            key={item.id}
            href={`/packages/domestic-package/${item.slug}`}
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Your existing content */}

              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <p className="text-sm text-gray-500">Starting From</p>
                  <h4 className="text-2xl font-bold text-blue-600">
                    {item.price}
                  </h4>
                </div>

                <span className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
                  View Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DomesticCard;
