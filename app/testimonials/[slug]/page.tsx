import Image from "next/image";
import { notFound } from "next/navigation";
import { testimonials } from "@/components/data/testimonials";

export default async function TestimonialDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const testimonial = testimonials.find(
    (item) => item.slug === slug
  );

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">

        <Image
          src={testimonial.coverImage}
          alt={testimonial.destination}
          width={1200}
          height={500}
          className="rounded-3xl mb-8"
        />

        <div className="flex items-center gap-4 mb-6">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={80}
            className="rounded-full"
          />

          <div>
            <h1 className="text-3xl font-bold">
              {testimonial.name}
            </h1>

            <p className="text-gray-500">
              {testimonial.location}
            </p>
          </div>
        </div>

        <div className="text-yellow-500 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-lg text-gray-700 leading-8">
          {testimonial.review}
        </p>
      </div>
    </div>
  );
}