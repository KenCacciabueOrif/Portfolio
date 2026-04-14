// Purpose: Page d'accueil; combine hero, apercu de projets et liens de contact rapides.
// Exports: `metadata` (SEO de la route /) et `Home` (composant de page serveur).
import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/src/components/projects/project-card";
import { createPageMetadata } from "@/src/config/seo";
import { homeCopy, siteMetadata } from "@/src/content/copy";
import { contactInfo, projects, socialLinks } from "@/src/content/site";

// Metadonnees SEO specifiques a la page d'accueil (fusionnees avec celles du layout).
export const metadata: Metadata = createPageMetadata({
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
});

export default function Home() {
  return (
    // Page d'accueil composee de 3 blocs: hero, apercu projets et liens rapides.
    <div className="space-y-10">
      <section className="hero-panel">
        <p className="eyebrow">Ken D. Cacciabue</p>
        <h1 className="hero-title">{homeCopy.heroTitle}</h1>
        <p className="hero-copy">
          {homeCopy.heroSummary}
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
        {/* Les cartes partagent le meme composant que /projets pour maintenir une UX coherente. */}
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>

      <section className="info-panel">
        {/* Les URL viennent de src/content/site.ts pour rester coherentes sur tout le site. */}
        <h2 className="section-title">Liens rapides</h2>
        <div className="flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contactInfo.email}`}>Email direct</a>
        </div>
      </section>
    </div>
  );
}
