/**
 * Last updated: 2026-04-21
 * Changes: Added a reusable card for past projects that already expose proof links.
 * Purpose: Render richer past-project summaries on the home page and the About page.
 */
import type { PastProject } from "@/src/content/site";

type PastProjectCardProps = {
  project: PastProject;
};

// The card focuses on evidence-backed work by combining context, contribution, and proof links.
export function PastProjectCard({ project }: PastProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <h3 className="project-title">{project.title}</h3>
        <span className="status-pill">{project.period}</span>
      </div>
      <p className="project-summary">{project.context}</p>
      <p className="project-summary">
        <strong>Contribution:</strong> {project.contribution}
      </p>
      <p className="project-stack">{project.stack}</p>
      {project.links?.length ? (
        <div className="project-links" aria-label={`Liens du projet ${project.title}`}>
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}