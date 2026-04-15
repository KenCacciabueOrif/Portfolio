// Purpose: Centralise tous les textes statiques de pages et les metadonnees SEO.
// Exports: objets de copywriting (`homeCopy`, `aboutCopy`, etc.) et `siteMetadata`.

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

export const homeCopy = {
  heroTitle: "Portfolio - Developpeur full stack et projets interactifs",
  heroSummary:
    "Presentation synthetique de mon profil, de mes competences et d'une roadmap de projets volontairement differencies.",
};

export const aboutCopy = {
  heroTitle: "Experiences et projets passes",
  heroSummary:
    "Cette page regroupe mes experiences et les projets deja realises, extraits de mon CV et de mes lettres de motivation.",
};

export const projectsCopy = {
  heroTitle: "Roadmap projets 2026",
  heroSummary:
    "Ces trois projets sont concus pour montrer des competences differentes: web full stack unifie, architecture frontend/backend separee et interactivite hors web.",
};

export const contactCopy = {
  heroTitle: "Contact et suivi du portfolio",
  heroSummary:
    "Cette page centralise mes coordonnees et mes liens professionnels pour suivre l'evolution du portfolio et des projets publies.",
};
