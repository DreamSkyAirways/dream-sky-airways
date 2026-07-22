type Faq = {q: string; a: string};

type Props = {
  title: string;
  location: string;
  seoContent?: string;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  faqs?: Faq[];
};

export default function PackageSeoContent({
  title,
  location,
  seoContent,
  highlights = [],
  inclusions = [],
  exclusions = [],
  faqs = [],
}: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      {seoContent ? (
        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            About {title} – Why Book with Dream Sky Airways
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-8 whitespace-pre-line">
            {seoContent}
          </div>
        </div>
      ) : null}

      {highlights.length > 0 ? (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Top Highlights of {location}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="border rounded-xl px-4 py-3 bg-slate-50 text-gray-800"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {(inclusions.length > 0 || exclusions.length > 0) && (
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {inclusions.length > 0 ? (
            <div className="border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-gray-700">
                {inclusions.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {exclusions.length > 0 ? (
            <div className="border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-rose-700 mb-3">
                What&apos;s Not Included
              </h3>
              <ul className="space-y-2 text-gray-700">
                {exclusions.map((item) => (
                  <li key={item}>✕ {item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}

      {faqs.length > 0 ? (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions – {title}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border rounded-2xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 text-lg">{faq.q}</h3>
                <p className="mt-2 text-gray-700 leading-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-12 rounded-2xl bg-[#084248] text-white p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-3">
          Book {title} Online with Dream Sky Airways
        </h2>
        <p className="text-white/90 leading-7 max-w-3xl">
          Looking for affordable {location} holiday packages, honeymoon deals,
          or family tour packages? Dream Sky Airways offers transparent pricing,
          verified hotels, airport transfers, and 24/7 travel support. Compare
          our domestic tour packages, honeymoon packages India, and custom
          itineraries—then book online for the best travel experience. Read more
          travel tips on our blog and contact us for a personalized quote.
        </p>
      </div>
    </section>
  );
}
