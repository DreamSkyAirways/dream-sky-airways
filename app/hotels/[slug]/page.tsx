import HotelGallery from "@/components/hotels/HotelGallery";
import HotelCardDescription from "@/components/hotels/HotelCardDescription";
import Reviews from "@/components/hotels/Reviews";
import {featuredHotels} from "@/components/data/featuredPackages";
import {notFound} from "next/navigation";

const Page = async ({params}: {params: Promise<{slug: string}>}) => {
  const {slug} = await params;
  console.log(slug);

  const hotel = featuredHotels.find((item) => item.slug === slug);
  console.log(hotel);
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
