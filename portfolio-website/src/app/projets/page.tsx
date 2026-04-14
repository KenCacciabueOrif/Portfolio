// Purpose: Page /projets; presente la roadmap complete a partir des donnees centralisees.
// Exports: `metadata` (SEO de la route) et `ProjectsPage` (composant de page serveur).
import type { Metadata } from "next";
import { ProjectCard } from "@/src/components/projects/project-card";
import { createPageMetadata } from "@/src/config/seo";
import { projectsCopy, siteMetadata } from "@/src/content/copy";
import { projects } from "@/src/content/site";

// SEO dedie a /projets pour renforcer la visibilite de la roadmap technique.
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.projects.title,
  description: siteMetadata.projects.description,
});

export default function ProjectsPage() {
  return (
    // Cette page detaille toute la roadmap en reutilisant la meme source de donnees.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">Projets</p>
        <h1 className="hero-title">{projectsCopy.heroTitle}</h1>
        <p className="hero-copy">{projectsCopy.heroSummary}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {/* Ici, pas de slice: on affiche chaque entree pour presenter la feuille de route complete. */}
        {/* Le rendu est 100% data-driven: ajouter un projet dans src/content/site.ts suffit. */}
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}