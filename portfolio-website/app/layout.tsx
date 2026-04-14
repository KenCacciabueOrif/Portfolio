import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { navLinks } from "./site-content";

// Charge les polices Google et expose des variables CSS reutilisables dans toute l'app.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadonnees globales appliquees a toutes les pages (titre + description SEO).
export const metadata: Metadata = {
  title: "Portfolio - Ken D. Cacciabue",
  description:
    "Portfolio developpeur full stack: projets, competences et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Layout racine App Router: enveloppe commune de toutes les routes.
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Le body utilise flex colonne pour permettre aux pages de prendre toute la hauteur. */}
      <body className="site-shell min-h-full flex flex-col">
        <header className="top-nav-wrap">
          <div className="top-nav">
            <Link href="/" className="brand-mark">
              KC
            </Link>
            <nav aria-label="Navigation principale" className="nav-links">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
          {children}
        </main>
        <footer className="mx-auto w-full max-w-6xl px-5 pb-10 pt-2 text-sm text-slate-600 sm:px-8">
          Portfolio MVP - Ken D. Cacciabue
        </footer>
      </body>
    </html>
  );
}
