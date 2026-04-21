/**
 * Last updated: 2026-04-21
 * Changes: Added a maintenance header and clarified the shared SEO helper responsibilities.
 * Purpose: Centralize canonical URL handling and shared page metadata generation.
 */
import type { Metadata } from "next";

// The deployed URL can be overridden by environment configuration without changing route code.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-lilac-gamma-40.vercel.app";

type PageMetadataInput = {
  title: string;
  description: string;
};

// Shared metadata generation keeps Open Graph and Twitter fields aligned across routes.
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
