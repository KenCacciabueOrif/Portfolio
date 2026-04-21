/**
 * Last updated: 2026-04-21
 * Changes: Added a maintenance header and converted contact page comments to English.
 * Purpose: Centralize direct contact details and professional profile links for the portfolio.
 */
import type { Metadata } from "next";
import { createPageMetadata } from "@/src/config/seo";
import { contactCopy, siteMetadata } from "@/src/content/copy";
import { contactInfo, socialLinks } from "@/src/content/site";

// Route metadata makes the contact page explicit for search previews and sharing.
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
});

export default function ContactPage() {
  return (
    // The contact page exposes immediate actions before asking visitors to navigate elsewhere.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">Contact</p>
        <h1 className="hero-title">{contactCopy.heroTitle}</h1>
        <p className="hero-copy">{contactCopy.heroSummary}</p>
      </section>

      <section className="info-panel">
        {/* Direct contact details stay visible without requiring a form or extra interaction. */}
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
        {/* External links stay centralized in src/content/site.ts for easier maintenance. */}
        {/* Professional channels are grouped together so outreach options can be scanned quickly. */}
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