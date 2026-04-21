/**
 * Last updated: 2026-04-21
 * Changes: Added a maintenance header and kept page copy grouped by route and SEO usage.
 * Purpose: Centralize static page copy and route-level metadata labels used across the site.
 */

// Shared metadata labels keep route-level SEO text in one editable location.

export const siteMetadata = {
  defaultTitle: "Portfolio - Ken D. Cacciabue",
  defaultDescription:
    "Portfolio de projets logiciels: vitrine personnelle, competences, experiences et roadmap de projets differencies.",
  home: {
    title: "Accueil | Portfolio - Ken D. Cacciabue",
    description:
      "Presentation synthetique du profil, des competences et des trois axes projets du portfolio.",
  },
  about: {
    title: "A propos | Portfolio - Ken D. Cacciabue",
    description:
      "Experiences professionnelles et projets passes de Ken D. Cacciabue.",
  },
  projects: {
    title: "Projets | Portfolio - Ken D. Cacciabue",
    description:
      "Roadmap des projets 2026: une application Next.js full stack PWA, une application React Router avec Spring Boot et un prototype Godot.",
  },
  contact: {
    title: "Contact | Portfolio - Ken D. Cacciabue",
    description:
      "Coordonnees, liens professionnels et point de contact autour du portfolio et des projets en cours.",
  },
};

// Home page copy remains separate so the route component stays focused on layout.
export const homeCopy = {
  heroTitle: "Portfolio - Developpeur full stack et projets interactifs",
  heroSummary:
    "Presentation synthetique de mon profil, de mes competences et d'une roadmap de projets volontairement differencies.",
};

// About page copy highlights past experience and project history.
export const aboutCopy = {
  heroTitle: "Experiences et projets passes",
  heroSummary:
    "Cette page regroupe mes experiences et les projets deja realises, extraits de mon CV et de mes lettres de motivation.",
};

// Projects page copy frames the roadmap and technical positioning.
export const projectsCopy = {
  heroTitle: "Roadmap projets 2026",
  heroSummary:
    "Ces trois projets sont concus pour montrer des competences differentes: web full stack unifie, architecture frontend/backend separee et interactivite hors web.",
};

// Contact page copy keeps outreach messaging aligned with the rest of the site.
export const contactCopy = {
  heroTitle: "Contact et suivi du portfolio",
  heroSummary:
    "Cette page centralise mes coordonnees et mes liens professionnels pour suivre l'evolution du portfolio et des projets publies.",
};
