"use client";

import AirlineSlider from "@/components/AirlineSlider";
import BusForm from "@/components/forms/BusForm";
import CarForm from "@/components/forms/CabForm";
import FlightForm from "@/components/forms/FlightForm";
import HotelForm from "@/components/forms/HotelForm";
import PackageForm from "@/components/forms/PackageForm";
import ContactCTA from "@/components/homePage/ContactCTA";
import CustomersSaying from "@/components/homePage/CustomerSaying";
import FAQSection from "@/components/homePage/FAQSection";
import FeaturedPackages from "@/components/homePage/FeaturedPackages";
import PopularDestinations from "@/components/homePage/PopularDestinations";
import SpecialOffers from "@/components/homePage/SpecialOffers";
import Statistics from "@/components/homePage/Statistics";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import { Car, Hotel, Package, Plane } from "lucide-react";
import { useState } from "react";
import { IoBusOutline } from "react-icons/io5";


// export const metadata: Metadata = {
//   title: "Dream Sky Airways | Aviation & Travel Company in India",
//   description:
//     "Explore aviation-based holiday packages and flight services with Dream Sky Airways. Enjoy easy booking and reliable travel assistance for smooth journeys.",
// };

export default function Home(string: any) {
  const [selectedOption, setSelectedOption] = useState<
    "Flight" | "Hotel" | "Package" | "Bus" | "CarRental"
  >("Flight");

  return (
    <>
      <div className="relative w-full desktop-safe-mobile">
        <div className="flex flex-col items-start justify-start w-full">
          <div
            className="
                  relative 
                  w-full 
                  h-[220px]
                  sm:h-[300px]
                  md:h-[400px]
                  lg:h-[500px]
                  xl:h-[600px]

                  rounded-b-[40px]
                  sm:rounded-b-[60px]
                  lg:rounded-b-[80px]
                  overflow-hidden 
                  bg-cover 
                  bg-center 
                  bg-no-repeat
                "
            style={{
              backgroundImage: "url('/travel-poster.png')",
            }}
          ></div>

          <div
            className="
                relative
                -mt-20
                sm:-mt-28
                md:-mt-32
                lg:-mt-40
                z-10
                w-full
                px-3
                sm:px-4
                lg:px-6
              "
          >
            <section className="rounded-lg flex flex-col gap-2  ">
              <div
                className="
                    bg-white
                    relative
                    z-20
                    mb-[-30px]
                    sm:mb-[-40px]
                    p-3
                    max-w-6xl
                    mx-auto
                    rounded-2xl
                    shadow-lg
                    overflow-x-auto
                    scrollbar-hide
                  "
              >
                <ul
                  className="
                          flex
                          items-center
                          gap-2
                          sm:gap-4
                          lg:gap-6
                          whitespace-nowrap
                          min-w-max
                        "
                >
                  <li
                    onClick={() => setSelectedOption("Flight")}
                    className={`
                            flex
                            items-center
                            gap-2
                            cursor-pointer
                            px-3
                            sm:px-4
                            lg:px-5
                            py-2
                            sm:py-3
                            rounded-xl
                            transition-all
                            duration-300
                            min-w-fit
                            ${selectedOption === "Flight"
                        ? "bg-blue-50 text-blue-600 shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                      }
                          `}
                  >
                    <Plane className="hidden sm:inline-block w-6 h-6 lg:w-7 lg:h-7" />
                    <span className="font-semibold text-sm sm:text-base lg:text-lg">Flight</span>
                  </li>
                  <li
                    onClick={() => setSelectedOption("Hotel")}
                    className={`
                              flex
                              items-center
                              gap-2
                              cursor-pointer
                              px-3
                              sm:px-4
                              lg:px-5
                              py-2
                              sm:py-3
                              rounded-xl
                              transition-all
                              duration-300
                              min-w-fit
                              ${selectedOption === "Hotel"
                        ? "bg-blue-50 text-blue-600 shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                      }
                            `}
                  >
                    <Hotel className="hidden sm:inline-block w-6 h-6 lg:w-7 lg:h-7" />
                    <span className="font-semibold text-sm sm:text-base lg:text-lg">Hotel</span>
                  </li>

                  <li
                    onClick={() => setSelectedOption("Package")}
                    className={`
                                flex
                                items-center
                                gap-2
                                cursor-pointer
                                px-3
                                sm:px-4
                                lg:px-5
                                py-2
                                sm:py-3
                                rounded-xl
                                transition-all
                                duration-300
                                min-w-fit
                                ${selectedOption === "Package"
                        ? "bg-blue-50 text-blue-600 shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                      }
                              `}  >
                    <Package className="hidden sm:inline-block w-6 h-6 lg:w-7 lg:h-7" />
                    <span className="font-semibold text-sm sm:text-base lg:text-lg">Package</span>
                  </li>

                  <li
                    onClick={() => setSelectedOption("Bus")}
                    className={`
                              flex
                              items-center
                              gap-2
                              cursor-pointer
                              px-3
                              sm:px-4
                              lg:px-5
                              py-2
                              sm:py-3
                              rounded-xl
                              transition-all
                              duration-300
                              min-w-fit
                              ${selectedOption === "Bus"
                        ? "bg-blue-50 text-blue-600 shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                      }
                            `}
                  >
                    <IoBusOutline className="hidden sm:inline-block w-6 h-6 lg:w-7 lg:h-7" />
                    <span className="font-semibold text-sm sm:text-base lg:text-lg">Bus</span>
                  </li>
                  <li
                    onClick={() => setSelectedOption("CarRental")}
                    className={`
                                flex
                                items-center
                                gap-2
                                cursor-pointer
                                px-3
                                sm:px-4
                                lg:px-5
                                py-2
                                sm:py-3
                                rounded-xl
                                transition-all
                                duration-300
                                min-w-fit
                                ${selectedOption === "CarRental"
                        ? "bg-blue-50 text-blue-600 shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                      }
                              `}
                  >
                    <Car className="hidden sm:inline-block w-6 h-6 lg:w-7 lg:h-7" />
                    <span className="font-semibold text-sm sm:text-base lg:text-lg">Car </span>
                  </li>
                </ul>
              </div>

              <div
                className="
                          bg-white
                          p-3
                          sm:p-5
                          lg:p-8
                          w-full
                          max-w-7xl
                          mx-auto
                          rounded-2xl
                          shadow-xl
                        "
              >
                {selectedOption === "Flight" && <FlightForm />}

                {selectedOption == "Hotel" && <HotelForm />}

                {selectedOption === "Package" && <PackageForm />}

                {selectedOption === "Bus" && <BusForm />}
                {selectedOption === "CarRental" && <CarForm />}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <PopularDestinations />
        </div>
        <div className="mt-4 sm:mt-2">
          <FeaturedPackages />
        </div>
        <div className="mt-8 sm:mt-10">
          <WhyChooseUs />
        </div>
        {/* <div className="mt-8 sm:mt-10">
          <SpecialOffers />
        </div> */}
        {/* <div className="mt-8 sm:mt-10">
          <VisaBanner />
        </div> */}

        <div className="mt-8 sm:mt-10">
          <Statistics />
        </div>
        <div>
          <AirlineSlider />
        </div>
        <div>
          <CustomersSaying />
        </div>
        {/* <div >
          <Testimonials />
        </div> */}
        <div>
          <FAQSection />
        </div>
        <div>
          <ContactCTA />
        </div>
      </div>
    </>
  );
}
