// Purpose: Page /projets; presente la roadmap complete a partir des donnees centralisees.
// Exports: `metadata` (SEO de la route) et `ProjectsPage` (composant de page serveur).
import type { Metadata } from "next";
import { ProjectCard } from "../components/project-card";
import { createPageMetadata } from "../seo";
import { projects } from "../site-content";

// SEO dedie a /projets pour renforcer la visibilite de la roadmap technique.
export const metadata: Metadata = createPageMetadata({
  title: "Projets | Portfolio - Ken D. Cacciabue",
  description:
    "Roadmap des projets 2026: Task Manager, Expense Tracker, URL Shortener et Notes App.",
});

export default function ProjectsPage() {
  return (
    // Cette page detaille toute la roadmap en reutilisant la meme source de donnees.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">Projets</p>
        <h1 className="hero-title">Roadmap projets 2026</h1>
        <p className="hero-copy">
          Ces projets sont en cours de construction dans un ordre defini pour
          demontrer des competences full stack complementaires.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {/* Ici, pas de slice: on affiche chaque entree pour presenter la feuille de route complete. */}
        {/* Le rendu est 100% data-driven: ajouter un projet dans site-content suffit. */}
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}