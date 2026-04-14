import { socialLinks } from "../site-content";

export default function AboutPage() {
  return (
    // Page de presentation: narration du profil + stack + points d'entree externes.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">A propos</p>
        <h1 className="hero-title">Profil et approche de travail</h1>
        <p className="hero-copy">
          Je suis un developpeur full stack junior oriente qualite, fiabilite et
          amelioration continue. Mon objectif est de livrer des applications
          utiles avec une architecture claire.
        </p>
      </section>

      <section className="info-panel">
        {/* Liste statique de competences principales a lecture rapide pour les recruteurs. */}
        <h2 className="section-title">Stack principale</h2>
        <ul className="stack-list">
          <li>Frontend: Next.js, React, TypeScript, Tailwind CSS</li>
          <li>Backend: Node.js/Express et Spring Boot</li>
          <li>Data: PostgreSQL, MySQL, MongoDB</li>
          <li>Deployment: Vercel, Docker, GitHub</li>
        </ul>
      </section>

      <section className="info-panel">
        {/* Reutilise socialLinks pour centraliser la maintenance des URLs. */}
        <h2 className="section-title">Presence en ligne</h2>
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