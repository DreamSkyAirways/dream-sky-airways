import type {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/login",
          "/dashboard",
          "/sign-in",
          "/sign-up",
          "/careerform",
          "/bookingtabs",
          "/trip-booking",
          "/flights/flights",
        ],
      },
    ],
    sitemap: "https://www.dreamskyairways.com/sitemap.xml",
  };
}
