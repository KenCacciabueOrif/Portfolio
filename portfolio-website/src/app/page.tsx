// Purpose: Page d'accueil; combine hero, apercu de projets et liens de contact rapides.
// Exports: `metadata` (SEO de la route /) et `Home` (composant de page serveur).
import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/src/components/projects/project-card";
import { createPageMetadata } from "@/src/config/seo";
import { homeCopy, siteMetadata } from "@/src/content/copy";
import {
  contactInfo,
  credentials,
  cvIdentity,
  cvSkillGroups,
  projects,
  socialLinks,
} from "@/src/content/site";

// Metadonnees SEO specifiques a la page d'accueil (fusionnees avec celles du layout).
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
});

export default function Home() {
  return (
    // Page d'accueil orientee CV: profil, competences, credentials et actions de contact.
    <div className="space-y-10">
      <section className="hero-panel">
        <p className="eyebrow">{cvIdentity.name}</p>
        <h1 className="hero-title">{homeCopy.heroTitle}</h1>
        <p className="hero-copy">{homeCopy.heroSummary}</p>
        <p className="hero-copy">
          <strong>Role vise:</strong> {cvIdentity.role}
          <br />
          <strong>Objectif:</strong> {cvIdentity.objective}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/a-propos" className="cta-primary">
            Voir mes experiences
          </Link>
          <Link href="/contact" className="cta-secondary">
            Me contacter
          </Link>
        </div>
      </section>

      <section className="info-panel">
        <h2 className="section-title">Profil professionnel</h2>
        <ul className="stack-list">
          {cvIdentity.profile.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <div className="info-panel">
          <h2 className="section-title">Projets en cours</h2>
          <p className="project-summary">
            Apercu de deux projets actifs. La liste complete reste sur la page Projets.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="info-panel">
        <h2 className="section-title">Competences</h2>
        <p className="project-summary">
          Panorama de mes competences techniques principales, organisees par domaine.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {cvSkillGroups.map((group) => (
          <article key={group.label} className="info-panel">
            <h2 className="section-title">{group.label}</h2>
            <ul className="stack-list">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <article className="info-panel">
          <h2 className="section-title">Formation</h2>
          <ul className="stack-list">
            {credentials.education.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>

        <article className="info-panel">
          <h2 className="section-title">Langues</h2>
          <ul className="stack-list">
            {credentials.languages.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="info-panel">
        <h2 className="section-title">References</h2>
        <ul className="stack-list">
          {credentials.references.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="info-panel">
        {/* Les URL viennent de src/content/site.ts pour rester coherentes sur tout le site. */}
        <h2 className="section-title">Liens rapides</h2>
        <div className="flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contactInfo.email}`}>Email direct</a>
          <a href={`tel:${contactInfo.phone}`}>Telephone</a>
        </div>
      </section>
    </div>
  );
}
