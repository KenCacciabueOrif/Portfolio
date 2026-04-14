import Link from "next/link";
import { projects, socialLinks } from "./site-content";

export default function Home() {
  return (
    // Page d'accueil composee de 3 blocs: hero, apercu projets et liens rapides.
    <div className="space-y-10">
      <section className="hero-panel">
        <p className="eyebrow">Developpeur Full Stack</p>
        <h1 className="hero-title">
          Je construis des applications web claires, utiles et deployables.
        </h1>
        <p className="hero-copy">
          Vitrine MVP pour presenter mon profil, mes projets en cours et mes
          objectifs de progression.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/projets" className="cta-primary">
            Voir mes projets
          </Link>
          <Link href="/contact" className="cta-secondary">
            Me contacter
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {/* L'accueil affiche seulement les 2 premiers projets pour garder une lecture rapide. */}
        {projects.slice(0, 2).map((project) => (
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

      <section className="info-panel">
        {/* Les URL viennent de site-content.ts pour rester coherentes sur tout le site. */}
        <h2 className="section-title">Liens rapides</h2>
        <div className="flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
