import PopularPackages from "@/components/package/PopularPackages";
import SeoPageIntro from "@/components/seo/SeoPageIntro";

export default function PackagesPage() {
  return (
    <div>
      <SeoPageIntro
        title="Tour Packages India – Domestic, Adventure & Holiday Deals"
        subtitle="Affordable holiday packages by Dream Sky Airways"
        paragraphs={[
          "Explore the best tour packages in India with Dream Sky Airways—your trusted tour and travel company for domestic holidays, adventure trips, spiritual journeys, beach getaways, and heritage tours. From Rishikesh rafting packages and Manali snow holidays to Goa beach packages and Jaipur Rajasthan tours, we create complete travel experiences with hotels, transfers, and 24/7 support.",
          "Whether you are searching for cheap holiday packages India, family tour packages, honeymoon packages, weekend getaways, or customized itineraries, our travel experts help you compare destinations, budgets, and travel dates easily. Book online and enjoy transparent pricing with verified stays.",
          "Popular searches we cover include Rishikesh tour package, Delhi sightseeing package, Jaipur tour package, Goa holiday package, Varanasi spiritual tour, Ayodhya Ram Mandir package, and Manali tour package from Delhi. Choose a package below and start planning your next trip today.",
        ]}
        bullets={[
          "Best domestic tour packages across India",
          "Budget-friendly pricing with clear inclusions",
          "Adventure, beach, heritage and spiritual options",
          "Honeymoon and family-friendly itineraries",
          "Easy online booking and travel assistance",
          "Trusted since 2018 – Dream Sky Airways",
        ]}
        links={[
          {href: "/packages/domestic-package", label: "Domestic Packages"},
          {href: "/packages/honeymoon-package", label: "Honeymoon Packages"},
          {href: "/packages/family-package", label: "Family Packages"},
          {href: "/blog", label: "Travel Blog"},
          {href: "/contact", label: "Get Custom Quote"},
        ]}
      />
      <PopularPackages />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Why Book Holiday Packages with Dream Sky Airways?
        </h2>
        <div className="space-y-4 text-gray-700 leading-8 max-w-4xl">
          <p>
            Dream Sky Airways is a leading travel agency in India offering
            end-to-end holiday planning—flight booking, hotel reservation, cab
            rental, bus tickets, visa assistance, and travel insurance under one
            roof. Our domestic tour packages are designed for first-time
            travelers, families, couples, and adventure seekers who want
            reliable service without hidden costs.
          </p>
          <p>
            Looking for high-value travel ideas? Pair your trip with our
            expert guides on the{" "}
            <a href="/blog" className="text-blue-700 font-semibold underline">
              Dream Sky Airways Travel Blog
            </a>{" "}
            for destination tips, packing checklists, and best-time-to-visit
            advice that help you plan smarter and travel better.
          </p>
        </div>
      </section>
    </div>
  );
}
