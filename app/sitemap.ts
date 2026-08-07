import {MetadataRoute} from "next";
import {jobs} from "../app/data/jobs";
import {blogs} from "../app/data/blogs";
import {getAllPackageSlugs} from "../lib/packages";
import {domesticPackages} from "../components/data/domesticPackage";
import {honeymoonPackages} from "../components/data/honeymoonPacakges";
import {familyPackages} from "../components/data/familyPackage";
import {featuredHotels} from "../components/data/featuredPackages";
import {testimonials} from "../components/data/testimonials";

const baseUrl = "https://www.dreamskyairways.com";

function mapUrls(
  paths: string[],
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const unique = Array.from(new Set(paths));
  return unique.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/disclaimer",
    "/insurance",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/flights",
    "/hotels",
    "/packages",
    "/packages/domestic-package",
    "/packages/honeymoon-package",
    "/packages/family-package",
    "/buses",
    "/cabs",
    "/blog",
    "/careers",
    "/services",
    "/testimonials",
  ];

  const jobsUrl = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const packagesUrl = [
    ...getAllPackageSlugs().map((slug) => `/packages/${slug}`),
    ...domesticPackages.map(
      (pkg) => `/packages/domestic-package/${pkg.slug}`,
    ),
    ...honeymoonPackages.map(
      (pkg) => `/packages/honeymoon-package/${pkg.slug}`,
    ),
    ...familyPackages.map((pkg) => `/packages/family-package/${pkg.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const hotelsUrl = featuredHotels.map((hotel) => ({
    url: `${baseUrl}/hotels/${hotel.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogsUrl = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const testimonialsUrl = testimonials.map((item) => ({
    url: `${baseUrl}/testimonials/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...mapUrls(staticPages, "monthly", 0.9).map((entry) =>
      entry.url === `${baseUrl}/` ? {...entry, priority: 1} : entry,
    ),
    ...jobsUrl,
    ...packagesUrl,
    ...hotelsUrl,
    ...blogsUrl,
    ...testimonialsUrl,
  ];
}
