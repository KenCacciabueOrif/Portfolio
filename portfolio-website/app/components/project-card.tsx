import type { ProjectCard as ProjectCardType } from "../site-content";

type ProjectCardProps = {
  project: ProjectCardType;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <h2 className="project-title">{project.title}</h2>
        <span className="status-pill">{project.status}</span>
      </div>
      <p className="project-summary">{project.summary}</p>
      <p className="project-stack">{project.stack}</p>
    </article>
  );
}
