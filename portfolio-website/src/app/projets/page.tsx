/**
 * Last updated: 2026-04-21
 * Changes: Added a maintenance header and converted projects page comments to English.
 * Purpose: Render the full project roadmap from centralized portfolio data.
 */
import type { Metadata } from "next";
import { ProjectCard } from "@/src/components/projects/project-card";
import { createPageMetadata } from "@/src/config/seo";
import { projectsCopy, siteMetadata } from "@/src/content/copy";
import { projects } from "@/src/content/site";

// Route metadata emphasizes the roadmap and technical direction of the portfolio.
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.projects.title,
  description: siteMetadata.projects.description,
});

export default function ProjectsPage() {
  return (
    // The projects page expands the preview shown on the home page into the full roadmap.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">Projets</p>
        <h1 className="hero-title">{projectsCopy.heroTitle}</h1>
        <p className="hero-copy">{projectsCopy.heroSummary}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {/* No slice here: the page intentionally renders every roadmap entry. */}
        {/* The section stays data-driven so adding a project in src/content/site.ts updates the UI directly. */}
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}