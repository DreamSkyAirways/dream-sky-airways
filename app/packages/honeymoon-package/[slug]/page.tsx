import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Clock } from "lucide-react";
import { honeymoonPackages } from "@/components/data/honeymoonPacakges";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function HoneymoonPackageDetails({
  params,
}: Props) {
  const { slug } = await params;

  const packageData = honeymoonPackages.find(
    (item) => item.slug === slug
  );

  if (!packageData) {
    notFound();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* Hero Image */}
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

        {/* Left Content */}
        <div className="lg:col-span-2">

          <h1 className="text-4xl font-bold">
            {packageData.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-6 text-gray-600">

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-pink-600" />
              {packageData.location}
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-pink-600" />
              {packageData.duration}
            </div>

            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              {packageData.rating} ({packageData.reviews} Reviews)
            </div>

          </div>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            {packageData.description}
          </p>

          {/* Highlights */}

          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-bold">
              ❤️ Honeymoon Highlights
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {packageData.highlights.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border bg-pink-50 p-4"
                >
                  ❤️ {item}
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}

          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-bold">
              Amenities
            </h2>

            <div className="flex flex-wrap gap-3">
              {packageData.amenities.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery */}

          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-bold">
              Gallery
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {packageData.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-56 overflow-hidden rounded-xl"
                >
                  <Image
                    src={image}
                    alt={`${packageData.title}-${index}`}
                    fill
                    className="object-cover transition duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Booking Card */}

        <aside>

          <div className="sticky top-24 rounded-3xl border bg-white p-6 shadow-lg">

            <p className="text-gray-500">
              Starting From
            </p>

            <h2 className="mt-2 text-4xl font-bold text-pink-600">
              {packageData.price}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Per Couple
            </p>

            <hr className="my-6" />

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Duration</span>
                <span>{packageData.duration}</span>
              </div>

              <div className="flex justify-between">
                <span>Rating</span>
                <span>⭐ {packageData.rating}</span>
              </div>

              <div className="flex justify-between">
                <span>Location</span>
                <span>{packageData.location}</span>
              </div>

            </div>

            <button className="mt-8 w-full rounded-xl bg-pink-600 py-4 font-semibold text-white transition hover:bg-pink-700">
              Book Now
            </button>

            <Link
              href="/contact"
              className="mt-3 block rounded-xl border border-pink-600 py-4 text-center font-semibold text-pink-600 transition hover:bg-pink-50"
            >
              Enquiry Now
            </Link>

          </div>

        </aside>

      </div>

    </section>
  );
}
