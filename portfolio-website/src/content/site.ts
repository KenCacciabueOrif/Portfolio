// Purpose: Source de verite du contenu du site (navigation, contact, liens sociaux, projets).
// Exports: types (`NavLink`, `ProjectCard`) et constantes consommees par les pages/composants.
export type NavLink = {
  href: string;
  label: string;
};

export type CvSkillGroup = {
  label: string;
  items: string[];
};

export type ProfessionalExperience = {
  period: string;
  organization: string;
  role: string;
  highlights: string[];
};

export type PastProject = {
  title: string;
  period: string;
  context: string;
  contribution: string;
  stack: string;
};

export type ProjectCard = {
  title: string;
  summary: string;
  stack: string;
  status: "En cours" | "Live";
};

// Les types servent de contrat unique pour tous les composants qui affichent ces donnees.
// Source de verite du menu principal: le layout mappe ce tableau pour afficher la navigation.
export const navLinks: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

// Liens externes centralises pour eviter la duplication dans plusieurs pages.
export const socialLinks = {
  github: "https://github.com/KenCacciabueOrif",
  linkedin: "https://www.linkedin.com/in/ken-cacciabue-138770161/",
};

export const contactInfo = {
  email: "kencacciabue@outlook.com",
  phone: "+41797216923",
  location: "Ste-Croix, Suisse",
  availability: "stage dev logiciel (full stack / API)",
};

export const cvIdentity = {
  name: "Ken D. Cacciabue",
  role: "Developpeur Full Stack Junior",
  objective:
    "Contribuer a des projets web et API concrets avec un impact mesurable pour les utilisateurs et l'organisation.",
  profile: [
    "Approche pragmatique: qualite du code, collaboration d'equipe et amelioration continue.",
    "Polyvalence full stack: frontend, backend/API, data et deploiement.",
    "Motivation forte pour construire des produits utiles, lisibles et fiables.",
  ],
};

export const cvSkillGroups: CvSkillGroup[] = [
  {
    label: "Web et frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    label: "Backend et API",
    items: ["Java Spring Boot", "Node.js", "Express.js"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "PL/SQL", "MongoDB", "Neo4j"],
  },
  {
    label: "Outils et deploiement",
    items: ["Git", "Docker", "Python", "Vercel", "Shell/PowerShell"],
  },
  {
    label: "Complementaires",
    items: ["C#", "Godot (bases)", "Blender (bases)", "Cisco (bases)"],
  },
];

export const credentials = {
  education: [
    "2025-present: CFC Informaticien en developpement d'applications (Orif Pomy)",
    "2020-2023: HEG Geneve, informatique de gestion",
    "2023: CPNV Ste-Croix, mediamatique",
  ],
  languages: [
    "Francais: natif",
    "Anglais: B2",
    "Italien: maturite italienne (formation secondaire italienne)",
  ],
  references: [
    "Attila Kruezsely - Attila.Kruezsely@orif.ch",
    "Didier Viret - Didier.Viret@orif.ch",
    "Raphael Schmutz - Raphael.Schmutz@orif.ch",
  ],
};

export const professionalExperiences: ProfessionalExperience[] = [
  {
    period: "2024-present",
    organization: "Orif Pomy",
    role: "Developpement d'applications (formation CFC)",
    highlights: [
      "Developpement full stack sur des projets web et API en contexte reel.",
      "Conception API, modelisation de donnees, documentation technique et deploiement.",
      "Application des bonnes pratiques: architecture, lisibilite, testabilite et maintenance.",
    ],
  },
  {
    period: "2020-2022",
    organization: "Junior Entreprise HEG Geneve (benevolat)",
    role: "Membre IT",
    highlights: [
      "Refonte du site internet sous WordPress.",
      "Aide au transfert de serveur.",
      "Participation aux entretiens de nouveaux candidats IT.",
    ],
  },
];

export const pastProjects: PastProject[] = [
  {
    title: "Simpl.",
    period: "Orif Pomy - 2024-present",
    context:
      "Reseau social de partage de posts textuels avec tri par proximite geographique et moderation communautaire.",
    contribution:
      "Developpement de l'application full stack, structuration technique et deploiement.",
    stack: "Next.js, TypeScript, PostgreSQL, Prisma, Vercel, Git",
  },
  {
    title: "Template d'API + API d'authentification",
    period: "Orif Pomy - 2024-present",
    context:
      "Creation d'un template reutilisable pour accelerer les futurs projets et d'une API d'authentification complete.",
    contribution:
      "Developpement API, gestion des profils, integration Azure AD et documentation REST automatisee.",
    stack: "Java Spring Boot, Maven, Docker, Git",
  },
  {
    title: "HTTP Battles",
    period: "Orif Pomy - 2024-present",
    context:
      "Projet formatif de bataille navale pilotee par requetes HTTP.",
    contribution:
      "Conception API, creation base de donnees et logique orientee gameplay.",
    stack: "Express.js, MongoDB, Mongoose, Git",
  },
  {
    title: "Prototypage interactif personnel",
    period: "Projets personnels",
    context:
      "Experimentation de mecaniques interactives et iteration rapide sur des prototypes.",
    contribution:
      "Prototypage avec Godot/Blender et renforcement logique gameplay via modding C#.",
    stack: "Godot (bases), Blender (bases), C#",
  },
  {
    title: "Refonte site Junior Entreprise HEG",
    period: "HEG Geneve - 2020-2022",
    context:
      "Contribution benevole a l'activite IT de la Junior Entreprise.",
    contribution:
      "Refonte WordPress et participation a la transition serveur.",
    stack: "WordPress, administration web",
  },
];

// Chaque objet alimente les composants de cartes (page d'accueil + page projets).
// Donnees des cartes projets reutilisees sur l'accueil (extrait) et la page projets (liste complete).
export const projects: ProjectCard[] = [
  {
    title: "Task Manager Collaboratif",
    summary:
      "Gestion des taches, priorites et filtres dans une interface orientee productivite.",
    stack: "Next.js, Tailwind CSS, API backend, PostgreSQL",
    status: "En cours",
  },
  {
    title: "Expense Tracker Personnel",
    summary:
      "Suivi depenses/revenus avec dashboard simple et visualisation des tendances.",
    stack: "Next.js, API Node.js, PostgreSQL",
    status: "En cours",
  },
  {
    title: "URL Shortener & Analytics",
    summary:
      "Creation de liens courts avec redirection et statistiques de clics par periode.",
    stack: "Next.js, API backend, PostgreSQL",
    status: "En cours",
  },
  {
    title: "Notes App avec Tags & Search",
    summary:
      "Edition de notes en Markdown, tags multi-notes et recherche texte rapide.",
    stack: "Next.js, API CRUD, PostgreSQL",
    status: "En cours",
  },
];