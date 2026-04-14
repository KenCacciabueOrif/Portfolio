import type { Metadata } from "next";
import { createPageMetadata } from "../seo";
import { socialLinks } from "../site-content";

// SEO dedie a la route /a-propos pour des titres/descriptions plus precis.
export const metadata: Metadata = createPageMetadata({
  title: "A propos | Portfolio - Ken D. Cacciabue",
  description:
    "Profil, formation, stack technique et cibles de stage de Ken D. Cacciabue.",
});

export default function AboutPage() {
  return (
    // Page de presentation: narration du profil + stack + points d'entree externes.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">A propos</p>
        <h1 className="hero-title">Profil, parcours et methode</h1>
        <p className="hero-copy">
          En formation CFC informaticien en developpement d&apos;applications a Orif
          Pomy, je cherche a contribuer a des equipes qui construisent des
          produits utiles, robustes et lisibles dans la duree.
        </p>
      </section>

      <section className="info-panel">
        {/* Liste statique de competences principales a lecture rapide pour les recruteurs. */}
        <h2 className="section-title">Stack principale</h2>
        <ul className="stack-list">
          <li>Frontend: React.js, Next.js, TypeScript</li>
          <li>Backend/API: Java Spring Boot, Node.js, Express.js</li>
          <li>Data: PostgreSQL, MySQL, PL/SQL, MongoDB</li>
          <li>Outils: Git, Docker, Python, Vercel</li>
          <li>Complementaires: C#, Neo4j, Shell/PowerShell, Cisco (bases)</li>
          <li>Interactivite: Godot (bases), Blender (bases)</li>
        </ul>
      </section>

      <section className="info-panel">
        {/* Section reutilisable stylisee via globals.css pour garder un systeme visuel simple. */}
        <h2 className="section-title">Formation et langues</h2>
        <ul className="stack-list">
          <li>2025-present: CFC Informaticien en dev d&apos;applications (Orif Pomy)</li>
          <li>2020-2023: HEG Geneve, informatique de gestion</li>
          <li>2023: CPNV, mediamatique</li>
          <li>Francais natif, anglais B2, italien (maturite italienne)</li>
        </ul>
      </section>

      <section className="info-panel">
        <h2 className="section-title">Cibles de stage</h2>
        <ul className="stack-list">
          <li>Experiences interactives web et outillage produit</li>
          <li>Backend/API et architecture logicielle maintenable</li>
          <li>Contexte industriel (interconnexion, robustesse, evolutivite)</li>
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