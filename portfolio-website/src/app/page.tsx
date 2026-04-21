/**
 * Last updated: 2026-04-21
 * Changes: Replaced the roadmap preview with proof-backed past projects and restored French accents.
 * Purpose: Render the landing page with positioning, selected proof-backed work, and direct contact actions.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { PastProjectCard } from "../components/projects/past-project-card";
import { ProjectCard } from "@/src/components/projects/project-card";
import { createPageMetadata } from "@/src/config/seo";
import { homeCopy, siteMetadata } from "@/src/content/copy";
import {
  contactInfo,
  credentials,
  cvIdentity,
  cvSkillGroups,
  featuredPastProjects,
  projects,
  socialLinks,
} from "@/src/content/site";

// Route-level metadata refines the default layout metadata for the landing page.
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
});

export default function Home() {
  return (
    // The landing page mixes profile context, roadmap preview, and trust-building credentials.
    <div className="space-y-7 sm:space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">{cvIdentity.name}</p>
        <h1 className="hero-title">{homeCopy.heroTitle}</h1>
        <p className="hero-copy">{homeCopy.heroSummary}</p>
        <p className="hero-copy">
          <strong>Positionnement:</strong> {cvIdentity.role}
          <br />
          <strong>Objectif:</strong> {cvIdentity.objective}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/a-propos" className="cta-primary">
            Voir mes expériences
          </Link>
          <Link href="/contact" className="cta-secondary">
            Me contacter
          </Link>
        </div>
      </section>

      {/* Profile statements explain working style before the more detailed experience page. */}
      <section className="section-box">
        <h2 className="section-title">Profil professionnel</h2>
        <ul className="stack-list">
          {cvIdentity.profile.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      {/* The landing page now leads with projects that already expose public proof links. */}
      <section className="section-box">
        <h2 className="section-title">Projets réalisés avec preuves</h2>
        <p className="project-summary section-intro">
          Aperçu de projets déjà réalisés avec dépôts publics ou livrables consultables.
        </p>
        <div className="section-content-grid sm:grid-cols-2">
          {featuredPastProjects.map((project) => (
            <PastProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/a-propos" className="cta-secondary">
            Voir l’historique complet
          </Link>
          <Link href="/projets" className="cta-secondary">
            Voir la roadmap en cours
          </Link>
        </div>
      </section>

      {/* Skill groups are rendered from shared content so the same taxonomy can evolve centrally. */}
      <section className="section-box">
        <h2 className="section-title">Compétences</h2>
        <p className="project-summary section-intro">
          Panorama de mes compétences techniques principales, organisées par domaine.
        </p>
        <div className="section-content-grid sm:grid-cols-2">
          {cvSkillGroups.map((group) => (
            <article key={group.label} className="sub-panel">
              <h3 className="section-title text-[1.03rem]">{group.label}</h3>
              <ul className="stack-list">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Education and languages stay together because both act as concise qualification signals. */}
      <section className="section-box">
        <h2 className="section-title">Formation et langues</h2>
        <div className="section-content-grid sm:grid-cols-2">
          <article className="sub-panel">
            <h3 className="section-title">Formation</h3>
            <ul className="stack-list">
              {credentials.education.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>

          <article className="sub-panel">
            <h3 className="section-title">Langues</h3>
            <ul className="stack-list">
              {credentials.languages.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-box">
        <h2 className="section-title">Roadmap active</h2>
        <p className="project-summary section-intro">
          Les prochains projets publiés servent à montrer trois axes complémentaires de progression.
        </p>
        <div className="section-content-grid sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section-box">
        <h2 className="section-title">Références</h2>
        <ul className="stack-list">
          {credentials.references.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="section-box">
        {/* Shared URLs from src/content/site.ts prevent contact links from drifting between pages. */}
        <h2 className="section-title">Liens rapides</h2>
        <div className="flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contactInfo.email}`}>Email direct</a>
          <a href={`tel:${contactInfo.phone}`}>Téléphone</a>
        </div>
      </section>
    </div>
  );
}
