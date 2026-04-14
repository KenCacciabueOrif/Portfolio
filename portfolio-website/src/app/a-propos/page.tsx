// Purpose: Page /a-propos; affiche le profil, la stack et les cibles de stage.
// Exports: `metadata` (SEO de la route) et `AboutPage` (composant de page serveur).
import type { Metadata } from "next";
import { createPageMetadata } from "@/src/config/seo";
import { aboutCopy, siteMetadata } from "@/src/content/copy";
import { socialLinks } from "@/src/content/site";

// SEO dedie a la route /a-propos pour des titres/descriptions plus precis.
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
});

export default function AboutPage() {
  return (
    // Page de presentation: narration du profil + stack + points d'entree externes.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">A propos</p>
        <h1 className="hero-title">{aboutCopy.heroTitle}</h1>
        <p className="hero-copy">{aboutCopy.heroSummary}</p>
      </section>

      <section className="info-panel">
        {/* Liste statique de competences principales a lecture rapide pour les recruteurs. */}
        <h2 className="section-title">Stack principale</h2>
        <ul className="stack-list">
          {aboutCopy.mainStack.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="info-panel">
        {/* Section reutilisable stylisee via globals.css pour garder un systeme visuel simple. */}
        <h2 className="section-title">Formation et langues</h2>
        <ul className="stack-list">
          {aboutCopy.educationAndLanguages.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="info-panel">
        <h2 className="section-title">Cibles de stage</h2>
        <ul className="stack-list">
          {aboutCopy.internshipTargets.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="info-panel">
        {/* Reutilise socialLinks pour centraliser la maintenance des URLs. */}
        <h2 className="section-title">Presence en ligne</h2>
        <div className="flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}