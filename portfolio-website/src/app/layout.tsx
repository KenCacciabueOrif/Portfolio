/**
 * Last updated: 2026-04-21
 * Changes: Added a maintenance header and converted layout comments to English.
 * Purpose: Define the shared App Router shell, default metadata, and global navigation structure.
 */
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { NavLinks } from "@/src/components/navigation/nav-links";
import { createPageMetadata, siteUrl } from "@/src/config/seo";
import { siteMetadata } from "@/src/content/copy";

// The font loader exposes a CSS variable that the global stylesheet can reuse.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Default metadata applies to every page before route-specific overrides are merged in.
export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
  }),
  metadataBase: new URL(siteUrl),
};

// The root layout keeps the same header, main width, and footer across all routes.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The html element carries language and font variables for the whole application.
    <html
      lang="fr"
      className={`${geistSans.variable} h-full`}
    >
      {/* A column flex shell lets the main content stretch while the footer stays at the bottom. */}
      <body className="site-shell min-h-full flex flex-col">
        <header className="top-nav-wrap">
          <div className="top-nav">
            <Link href="/" className="brand-mark">
              KC
            </Link>
            {/* NavLinks runs on the client so it can expose the active route state. */}
            <NavLinks />
          </div>
        </header>
        <main className="mx-auto w-full max-w-[23.5rem] flex-1 px-3 py-7 sm:max-w-6xl sm:px-8 sm:py-10">
          {children}
        </main>
        <footer className="site-footer mx-auto w-full max-w-[23.5rem] px-3 pb-8 pt-2 text-sm sm:max-w-6xl sm:px-8 sm:pb-10">
          Ken D. Cacciabue - Portfolio de projets logiciels
        </footer>
      </body>
    </html>
  );
}
