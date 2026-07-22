import HotelGallery from "@/components/hotels/HotelGallery";
import HotelCardDescription from "@/components/hotels/HotelCardDescription";
import Reviews from "@/components/hotels/Reviews";
import {featuredHotels} from "@/components/data/featuredPackages";
import {buildPageMetadata} from "@/lib/seo";
import {notFound} from "next/navigation";
import type {Metadata} from "next";

type Props = {
  params: Promise<{slug: string}>;
};

export function generateStaticParams() {
  return featuredHotels.map((hotel) => ({slug: hotel.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const hotel = featuredHotels.find((item) => item.slug === slug);

  if (!hotel) {
    return buildPageMetadata({
      title: "Hotel Booking",
      description: "Book hotels across India with Dream Sky Airways.",
      path: `/hotels/${slug}`,
      slug,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${hotel.title} – Hotel in ${hotel.location}`,
    description:
      hotel.description ||
      `Book ${hotel.title} in ${hotel.location}. ${hotel.star}-star hotel stays with Dream Sky Airways.`,
    path: `/hotels/${slug}`,
    slug: hotel.slug,
    location: hotel.location,
    category: hotel.category,
    image: hotel.images?.[0],
    extras: [
      `hotels in ${hotel.location}`,
      `${hotel.title} booking`,
      "hotel booking India",
      `${hotel.star} star hotel`,
    ],
  });
}

const Page = async ({params}: Props) => {
  const {slug} = await params;

  const hotel = featuredHotels.find((item) => item.slug === slug);
  if (!hotel) {
    notFound();
  }

  return (
    <div className="px-10">
      <HotelGallery images={hotel.images} />
      <HotelCardDescription hotel={hotel} />
      <Reviews />
    </div>
  );
};

export default Page;
