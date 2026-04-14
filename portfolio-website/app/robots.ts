// Purpose: Route metadata robots; genere automatiquement le contenu de /robots.txt.
// Exports: `robots`, fonction qui definit les regles de crawl et l'URL du sitemap.
import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

// Route speciale App Router: Next.js genere automatiquement /robots.txt depuis cet objet.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Pointe les robots vers le sitemap genere par app/sitemap.ts.
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
