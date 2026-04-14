export type NavLink = {
  href: string;
  label: string;
};

export type ProjectCard = {
  title: string;
  summary: string;
  stack: string;
  status: "En cours" | "Live";
};

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
  linkedin: "https://www.linkedin.com",
};

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