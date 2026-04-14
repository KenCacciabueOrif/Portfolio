// Purpose: Page /a-propos; affiche le profil, la stack et les cibles de stage.
// Exports: `metadata` (SEO de la route) et `AboutPage` (composant de page serveur).
import type { Metadata } from "next";
import { createPageMetadata } from "@/src/config/seo";
import { aboutCopy, siteMetadata } from "@/src/content/copy";
import { pastProjects, professionalExperiences, socialLinks } from "@/src/content/site";

// SEO dedie a la route /a-propos pour des titres/descriptions plus precis.
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
});

export default function AboutPage() {
  return (
    // Page de presentation centree sur l'experience et les projets deja realises.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">A propos</p>
        <h1 className="hero-title">{aboutCopy.heroTitle}</h1>
        <p className="hero-copy">{aboutCopy.heroSummary}</p>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Experiences</h2>
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

      <section className="space-y-4">
        <h2 className="section-title">Projets passes</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {pastProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <span className="status-pill">{project.period}</span>
              </div>
              <p className="project-summary">{project.context}</p>
              <p className="project-summary">
                <strong>Contribution:</strong> {project.contribution}
              </p>
              <p className="project-stack">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-panel">
        {/* Reutilise socialLinks pour centraliser la maintenance des URLs. */}
        <h2 className="section-title">Presence en ligne</h2>
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