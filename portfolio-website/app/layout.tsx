import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { NavLinks } from "./nav-links";
import { createPageMetadata, siteUrl } from "./seo";

// Charge les polices Google et expose des variables CSS reutilisables dans toute l'app.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Metadonnees globales appliquees a toutes les pages (titre + description SEO).
export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Portfolio - Ken D. Cacciabue",
    description:
      "Portfolio developpeur full stack junior: CV, experiences, competences et contact stage.",
  }),
  metadataBase: new URL(siteUrl),
};

// Root layout partage la meme structure (header/main/footer) a toutes les pages App Router.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Layout racine App Router: enveloppe commune de toutes les routes.
    <html
      lang="fr"
      className={`${geistSans.variable} h-full antialiased`}
    >
      {/* Le body utilise flex colonne pour permettre aux pages de prendre toute la hauteur. */}
      <body className="site-shell min-h-full flex flex-col">
        <header className="top-nav-wrap">
          <div className="top-nav">
            <Link href="/" className="brand-mark">
              KC
            </Link>
            {/* NavLinks est un composant client qui detecte la route active. */}
            <NavLinks />
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
          {children}
        </main>
        <footer className="mx-auto w-full max-w-6xl px-5 pb-10 pt-2 text-sm text-slate-600 sm:px-8">
          Ken D. Cacciabue - Portfolio et candidature stage
        </footer>
      </body>
    </html>
  );
}
