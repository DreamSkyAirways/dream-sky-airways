import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { domesticPackages } from "@/components/data/domesticPackage";
import { Star, MapPin, Clock } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DomesticPackageDetails({ params }: Props) {
  const { slug } = await params;

  const packageData = domesticPackages.find(
    (item) => item.slug === slug
  );

  if (!packageData) {
    notFound();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="relative h-[500px] overflow-hidden rounded-3xl">
        <Image
          src={packageData.images[0]}
          alt={packageData.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        {/* Left */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold">{packageData.title}</h1>

          <div className="mt-5 flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {packageData.location}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              {packageData.duration}
            </div>

            <div className="flex items-center gap-2">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
              {packageData.rating} ({packageData.reviews} Reviews)
            </div>
          </div>

          <p className="mt-6 leading-8 text-gray-700">
            {packageData.description}
          </p>

          {/* Highlights */}
          <div className="mt-10">
            <h2 className="mb-5 text-2xl font-bold">
              Tour Highlights
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {packageData.highlights.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-blue-50 p-4"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <h2 className="mb-5 text-2xl font-bold">
              Gallery
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {packageData.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-60 overflow-hidden rounded-xl"
                >
                  <Image
                    src={image}
                    alt={`${packageData.title}-${index}`}
                    fill
                    className="object-cover transition hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <aside>
          <div className="sticky top-24 rounded-3xl border bg-white p-6 shadow-lg">
            <p className="text-gray-500">Starting From</p>

            <h2 className="mt-2 text-4xl font-bold text-blue-600">
              {packageData.price}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Per Person
            </p>

            <hr className="my-6" />

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Location</span>
                <span>{packageData.location}</span>
              </div>

              <div className="flex justify-between">
                <span>Duration</span>
                <span>{packageData.duration}</span>
              </div>

              <div className="flex justify-between">
                <span>Rating</span>
                <span>⭐ {packageData.rating}</span>
              </div>
            </div>

            <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">
              Book Now
            </button>

            <Link
              href="/contact"
              className="mt-4 block rounded-xl border border-blue-600 py-4 text-center font-semibold text-blue-600 hover:bg-blue-50"
            >
              Enquiry Now
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}