// Purpose: Utilitaires SEO partages; centralise l'URL canonique et la generation de metadata.
// Exports: `siteUrl` et `createPageMetadata` pour harmoniser Open Graph/Twitter par page.
import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-lilac-gamma-40.vercel.app";

type PageMetadataInput = {
  title: string;
  description: string;
};

// Fabrique commune pour garder un SEO coherent et eviter la duplication entre routes.
export function createPageMetadata({
  title,
  description,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fr_CH",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
