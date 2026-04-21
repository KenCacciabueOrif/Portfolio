/**
 * Last updated: 2026-04-21
 * Changes: Added a maintenance header and converted sitemap route comments to English.
 * Purpose: Generate the sitemap metadata route for the indexable portfolio pages.
 */
import type { MetadataRoute } from "next";
import { siteUrl } from "@/src/config/seo";

// Next.js exposes this array as the generated /sitemap.xml response.
export default function sitemap(): MetadataRoute.Sitemap {
  // Reuse one timestamp so every sitemap entry reflects the same generation moment.
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
      // More stable pages can advertise a lower crawl frequency.
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
