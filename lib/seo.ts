import type {Metadata} from "next";

export const SITE_URL = "https://www.dreamskyairways.com";
export const SITE_NAME = "Dream Sky Airways";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/ogImage.webp`;
export const ADSENSE_CLIENT = "ca-pub-3804438885787200";

/** Always-on brand + travel keywords for site-wide discoverability */
export const CORE_KEYWORDS = [
  "Dream Sky Airways",
  "dreamskyairways",
  "tour and travel company India",
  "travel agency India",
  "holiday packages India",
  "flight booking India",
  "online flight booking",
  "cheap flights India",
  "domestic tour packages",
  "international tour packages",
  "honeymoon packages India",
  "family holiday packages",
  "hotel booking India",
  "bus booking India",
  "cab rental India",
  "visa services India",
  "travel insurance India",
  "best travel agency",
  "book flights hotels packages",
  "affordable holiday packages",
];

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "of",
  "for",
  "to",
  "in",
  "on",
  "at",
  "with",
  "by",
  "from",
  "is",
  "are",
  "was",
  "were",
  "be",
  "this",
  "that",
  "your",
  "our",
  "you",
  "we",
  "as",
  "it",
  "its",
  "into",
  "over",
  "under",
  "via",
  "vs",
  "how",
  "why",
  "what",
  "when",
  "where",
  "who",
  "which",
  "best",
  "top",
  "new",
]);

function unique(values: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of values) {
    const key = value.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(value.trim());
  }
  return out;
}

/** Turn a slug into readable keyword fragments */
export function keywordsFromSlug(slug: string): string[] {
  if (!slug) return [];
  const parts = slug
    .split(/[-_/]+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 1 && !STOP_WORDS.has(p.toLowerCase()));

  const phrase = parts.join(" ");
  return unique([
    phrase,
    ...parts,
    `${phrase} Dream Sky Airways`,
    `book ${phrase}`,
    `${phrase} package`,
    `${phrase} India`,
  ].filter(Boolean));
}

/** Extract searchable keywords from free text */
export function keywordsFromText(text: string, limit = 18): string[] {
  if (!text) return [];
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  const bigrams: string[] = [];
  for (let i = 0; i < words.length - 1; i++) {
    bigrams.push(`${words[i]} ${words[i + 1]}`);
  }

  return unique([...bigrams.slice(0, 8), ...words]).slice(0, limit);
}

export type BuildSeoInput = {
  title: string;
  description: string;
  path: string;
  /** Extra hand-picked keywords (optional) */
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  /** Used to auto-derive keywords for future content pages */
  slug?: string;
  location?: string;
  category?: string;
  extras?: string[];
};

/**
 * Builds full Next.js Metadata with automatic keywords.
 * Future content pages only need title + description + path (+ slug);
 * keywords/OG/Twitter/robots are generated automatically.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
  slug,
  location,
  category,
  extras = [],
}: BuildSeoInput): Metadata {
  const canonical = path.startsWith("http")
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const autoKeywords = unique([
    ...CORE_KEYWORDS,
    ...keywords,
    ...keywordsFromText(title),
    ...keywordsFromText(description, 12),
    ...(slug ? keywordsFromSlug(slug) : []),
    ...(location
      ? [location, `${location} tour`, `${location} holiday`, `travel to ${location}`]
      : []),
    ...(category
      ? [category, `${category} packages`, `${category} travel`]
      : []),
    ...extras,
    SITE_NAME,
    "dreamskyairways.com",
  ]).slice(0, 45);

  const brandedTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  return {
    title: brandedTitle,
    description,
    keywords: autoKeywords,
    alternates: {canonical},
    robots: noIndex
      ? {index: false, follow: false}
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: brandedTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
  };
}

/** Quick helper for listing / service pages */
export function servicePageSeo(
  title: string,
  description: string,
  path: string,
  extraKeywords: string[] = [],
): Metadata {
  return buildPageMetadata({
    title,
    description,
    path,
    keywords: extraKeywords,
  });
}
