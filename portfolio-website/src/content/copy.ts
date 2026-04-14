// Purpose: Centralise tous les textes statiques de pages et les metadonnees SEO.
// Exports: objets de copywriting (`homeCopy`, `aboutCopy`, etc.) et `siteMetadata`.

export const siteMetadata = {
  defaultTitle: "Portfolio - Ken D. Cacciabue",
  defaultDescription:
    "Portfolio developpeur full stack junior: CV, experiences, competences et contact stage.",
  home: {
    title: "Accueil | Portfolio - Ken D. Cacciabue",
    description:
      "Developpeur full stack junior: profil, projets en cours et contact pour stage developpement logiciel.",
  },
  about: {
    title: "A propos | Portfolio - Ken D. Cacciabue",
    description:
      "Profil, formation, stack technique et cibles de stage de Ken D. Cacciabue.",
  },
  projects: {
    title: "Projets | Portfolio - Ken D. Cacciabue",
    description:
      "Roadmap des projets 2026: Task Manager, Expense Tracker, URL Shortener et Notes App.",
  },
  contact: {
    title: "Contact | Portfolio - Ken D. Cacciabue",
    description:
      "Contact stage developpement logiciel: email, telephone, localisation et liens professionnels.",
  },
};

export const homeCopy = {
  heroTitle: "Developpeur full stack junior",
  heroSummary:
    "Je contribue a des projets web et API concrets avec une approche orientee qualite, fiabilite et amelioration continue. Stack principale: Next.js, TypeScript, Spring Boot, Node.js et PostgreSQL.",
};

export const aboutCopy = {
  heroTitle: "Profil, parcours et methode",
  heroSummary:
    "En formation CFC informaticien en developpement d'applications a Orif Pomy, je cherche a contribuer a des equipes qui construisent des produits utiles, robustes et lisibles dans la duree.",
  mainStack: [
    "Frontend: React.js, Next.js, TypeScript",
    "Backend/API: Java Spring Boot, Node.js, Express.js",
    "Data: PostgreSQL, MySQL, PL/SQL, MongoDB",
    "Outils: Git, Docker, Python, Vercel",
    "Complementaires: C#, Neo4j, Shell/PowerShell, Cisco (bases)",
    "Interactivite: Godot (bases), Blender (bases)",
  ],
  educationAndLanguages: [
    "2025-present: CFC Informaticien en dev d'applications (Orif Pomy)",
    "2020-2023: HEG Geneve, informatique de gestion",
    "2023: CPNV, mediamatique",
    "Francais natif, anglais B2, italien (maturite italienne)",
  ],
  internshipTargets: [
    "Experiences interactives web et outillage produit",
    "Backend/API et architecture logicielle maintenable",
    "Contexte industriel (interconnexion, robustesse, evolutivite)",
  ],
};

export const projectsCopy = {
  heroTitle: "Roadmap projets 2026",
  heroSummary:
    "Ces projets sont en cours de construction dans un ordre defini pour demontrer des competences full stack complementaires.",
};

export const contactCopy = {
  heroTitle: "Candidature stage developpement logiciel",
  heroSummary:
    "Je recherche un stage pour contribuer sur des sujets web full stack, API backend, interactivite et architecture logicielle.",
};
