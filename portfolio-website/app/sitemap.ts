import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

// Route speciale App Router: Next.js expose ce tableau au format /sitemap.xml.
export default function sitemap(): MetadataRoute.Sitemap {
  // Date courante appliquee a toutes les pages pour indiquer une actualisation recente.
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/a-propos`,
      lastModified: now,
      // Pages plus stables: cadence de crawl plus faible.
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projets`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
