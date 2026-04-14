import { socialLinks } from "../site-content";

export default function ContactPage() {
  return (
    // Page orientee conversion: message de disponibilite, coordonnees, puis actions de contact.
    <div className="space-y-8">
      <section className="hero-panel">
        <p className="eyebrow">Contact</p>
        <h1 className="hero-title">Discutons de votre projet</h1>
        <p className="hero-copy">
          Disponible pour des echanges autour de developpement web full stack,
          integrations API et mise en production.
        </p>
      </section>

      <section className="info-panel">
        {/* Informations de contact directes visibles sans interaction. */}
        <h2 className="section-title">Me joindre</h2>
        <ul className="stack-list">
          <li>Email: kencacciabue@outlook.com</li>
          <li>Localisation: Ste-Croix, Suisse</li>
          <li>Disponibilite: missions junior full stack</li>
        </ul>
      </section>

      <section className="info-panel">
        {/* Regroupe les canaux professionnels pour simplifier la prise de contact. */}
        <h2 className="section-title">Liens professionnels</h2>
        <div className="flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:kencacciabue@outlook.com">Envoyer un email</a>
        </div>
      </section>
    </div>
  );
}