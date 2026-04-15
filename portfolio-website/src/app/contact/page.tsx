// Purpose: Page /contact; centralise les coordonnees et points d'entree professionnels.
// Exports: `metadata` (SEO de la route) et `ContactPage` (composant de page serveur).
import type { Metadata } from "next";
import { createPageMetadata } from "@/src/config/seo";
import { contactCopy, siteMetadata } from "@/src/content/copy";
import { contactInfo, socialLinks } from "@/src/content/site";

// SEO dedie a /contact pour centraliser les points de contact du portfolio.
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
});

export default function ContactPage() {
  return (
    // Page orientee contact: coordonnees, disponibilite portfolio, puis actions de contact.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">Contact</p>
        <h1 className="hero-title">{contactCopy.heroTitle}</h1>
        <p className="hero-copy">{contactCopy.heroSummary}</p>
      </section>

      <section className="info-panel">
        {/* Informations de contact directes visibles sans interaction. */}
        <h2 className="section-title">Me joindre</h2>
        <ul className="stack-list">
          <li>
            Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li>
          <li>
            Telephone: <a href={`tel:${contactInfo.phone}`}>+41 79 721 69 23</a>
          </li>
          <li>Localisation: {contactInfo.location}</li>
          <li>Statut: {contactInfo.availability}</li>
        </ul>
      </section>

      <section className="info-panel">
        {/* Les liens externes restent centralises dans src/content/site.ts. */}
        {/* Regroupe les canaux professionnels pour simplifier la prise de contact. */}
        <h2 className="section-title">Liens professionnels</h2>
        <div className="flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contactInfo.email}`}>Envoyer un email</a>
        </div>
      </section>
    </div>
  );
}