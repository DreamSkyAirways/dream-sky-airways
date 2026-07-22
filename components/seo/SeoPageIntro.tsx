import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  bullets?: string[];
  links?: {href: string; label: string}[];
};

export default function SeoPageIntro({
  title,
  subtitle,
  paragraphs,
  bullets = [],
  links = [],
}: Props) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 text-lg text-blue-800 font-medium">{subtitle}</p>
        ) : null}

        <div className="mt-6 space-y-4 text-gray-700 leading-8 max-w-4xl">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>

        {bullets.length > 0 ? (
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-4xl">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-gray-700 bg-white border rounded-xl px-4 py-3"
              >
                <span className="text-blue-600 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
