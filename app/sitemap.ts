import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-hazel-six-lrkttprbjn.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }, { url: `${siteUrl}/portfolio` }];
}
