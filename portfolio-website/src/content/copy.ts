/**
 * Last updated: 2026-04-21
 * Changes: Updated the landing page messaging to highlight proof-backed past work and restored French accents.
 * Purpose: Centralize static page copy and route-level metadata labels used across the site.
 */

// Shared metadata labels keep route-level SEO text in one editable location.

export const siteMetadata = {
  defaultTitle: "Portfolio - Ken D. Cacciabue",
  defaultDescription:
    "Portfolio de projets logiciels: vitrine personnelle, compétences, expériences et roadmap de projets différenciés.",
  home: {
    title: "Accueil | Portfolio - Ken D. Cacciabue",
    description:
      "Présentation synthétique du profil, des compétences et de projets déjà réalisés avec preuves concrètes.",
  },
  about: {
    title: "À propos | Portfolio - Ken D. Cacciabue",
    description:
      "Expériences professionnelles et projets passés de Ken D. Cacciabue.",
  },
  projects: {
    title: "Projets | Portfolio - Ken D. Cacciabue",
    description:
      "Roadmap des projets 2026: une application Next.js full stack PWA, une application React Router avec Spring Boot et un prototype Godot.",
  },
  contact: {
    title: "Contact | Portfolio - Ken D. Cacciabue",
    description:
      "Coordonnées, liens professionnels et point de contact autour du portfolio et des projets en cours.",
  },
};

// Home page copy remains separate so the route component stays focused on layout.
export const homeCopy = {
  heroTitle: "Portfolio - Développeur full stack et projets interactifs",
  heroSummary:
    "Présentation synthétique de mon profil, de mes compétences et de projets déjà réalisés pour démontrer concrètement mon travail.",
};

// About page copy highlights past experience and project history.
export const aboutCopy = {
  heroTitle: "Expériences et projets passés",
  heroSummary:
    "Cette page regroupe mes expériences et les projets déjà réalisés, extraits de mon CV et de mes lettres de motivation.",
};

// Projects page copy frames the roadmap and technical positioning.
export const projectsCopy = {
  heroTitle: "Roadmap projets 2026",
  heroSummary:
    "Ces trois projets sont conçus pour montrer des compétences différentes: web full stack unifié, architecture frontend/backend séparée et interactivité hors web.",
};

// Contact page copy keeps outreach messaging aligned with the rest of the site.
export const contactCopy = {
  heroTitle: "Contact et suivi du portfolio",
  heroSummary:
    "Cette page centralise mes coordonnées et mes liens professionnels pour suivre l'évolution du portfolio et des projets publiés.",
};
