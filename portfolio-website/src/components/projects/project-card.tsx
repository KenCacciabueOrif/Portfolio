/**
 * Last updated: 2026-04-21
 * Changes: Added a maintenance header and converted the reusable project card comments to English.
 * Purpose: Render a reusable project summary card for both the home page preview and the full projects page.
 */
import type { ProjectCard as ProjectCardType } from "@/src/content/site";

type ProjectCardProps = {
  project: ProjectCardType;
};

// The component stays intentionally small because layout and wording come from centralized content data.
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <h3 className="project-title">{project.title}</h3>
        <span className="status-pill">{project.status}</span>
      </div>
      <p className="project-summary">{project.summary}</p>
      <p className="project-stack">{project.stack}</p>
    </article>
  );
}
