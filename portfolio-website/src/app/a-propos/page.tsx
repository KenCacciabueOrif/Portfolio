/**
 * Last updated: 2026-04-21
 * Changes: Reused the shared past-project card component and restored French accents.
 * Purpose: Present professional experience, selected past projects, and external profile links.
 */
import type { Metadata } from "next";
import { PastProjectCard } from "../../components/projects/past-project-card";
import { createPageMetadata } from "@/src/config/seo";
import { aboutCopy, siteMetadata } from "@/src/content/copy";
import { pastProjects, professionalExperiences, socialLinks } from "@/src/content/site";

// Route metadata specializes the title and description for the About page.
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
});

export default function AboutPage() {
  return (
    // This page focuses on completed work so visitors can separate history from roadmap.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">À propos</p>
        <h1 className="hero-title">{aboutCopy.heroTitle}</h1>
        <p className="hero-copy">{aboutCopy.heroSummary}</p>
      </section>

      {/* Experience entries preserve chronology while keeping each role easy to scan. */}
      <section className="space-y-4">
        <h2 className="section-title section-heading">Expériences</h2>
        {professionalExperiences.map((experience) => (
          <article
            key={`${experience.organization}-${experience.period}`}
            className="info-panel"
          >
            <p className="eyebrow">{experience.period}</p>
            <h3 className="section-title">{experience.organization}</h3>
            <p className="project-stack">{experience.role}</p>
            <ul className="stack-list mt-3">
              {experience.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Past projects use richer cards because they need context, contribution, and optional links. */}
      <section className="space-y-4">
        <h2 className="section-title section-heading">Projets passés</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {pastProjects.map((project) => (
            <PastProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="info-panel">
        {/* Reusing socialLinks keeps external profile URLs consistent with the rest of the site. */}
        <h2 className="section-title">Présence en ligne</h2>
        <div className="flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}