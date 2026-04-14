import { projects } from "../site-content";

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
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-top">
              <h2 className="project-title">{project.title}</h2>
              <span className="status-pill">{project.status}</span>
            </div>
            <p className="project-summary">{project.summary}</p>
            <p className="project-stack">{project.stack}</p>
          </article>
        ))}
      </section>
    </div>
  );
}