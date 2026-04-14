// Purpose: Composant de carte projet reutilisable pour l'accueil et la page projets.
// Exports: `ProjectCard`, qui rend le titre, le statut, le resume et la stack technique.
import type { ProjectCard as ProjectCardType } from "@/src/content/site";

type ProjectCardProps = {
  project: ProjectCardType;
};

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
