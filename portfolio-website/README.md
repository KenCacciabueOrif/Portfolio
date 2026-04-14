<!-- Purpose: Documentation projet; explique objectifs MVP, stack, scripts et workflow de mise a jour. -->
# Portfolio Website (MVP)

Vitrine personnelle pour presenter mon profil Full Stack, mes projets, mes competences et mes liens professionnels.

## Objectif

Mettre en ligne une vitrine personnelle fonctionnelle en 48h, afin qu'un recruteur comprenne en moins de 60 secondes:
- qui je suis,
- ce que je sais faire,
- quels projets je construis.

## Public cible

- Recruteurs
- Equipes IT
- Entreprises

## Perimetre MVP (IN)

- Page Accueil
- Section A propos
- Section Projets (cartes avec statut "En cours")
- Section Contact
- Liens GitHub + LinkedIn
- Version responsive mobile/desktop
- Deploiement sur Vercel

## Hors perimetre MVP (OUT)

- Blog
- Animations complexes
- CMS
- Multilingue (prevu plus tard)
- Formulaire backend avance

## Contenu minimum attendu

- Navigation simple et responsive
- Hero clair avec proposition de valeur
- Section profil (presentation courte + stack)
- Cartes projets avec badge "En cours"
- Point d'entree unique vers GitHub, LinkedIn et demos

## Stack cible

- Frontend: Next.js + Tailwind CSS
- Deploiement: Vercel
- Evolution possible: API backend Node.js/Express ou Spring Boot

## Organisation du projet

Le code source est isole dans `src/`.

- `src/app/`: routes App Router Next.js (pages, layout, metadata routes)
- `src/components/`: composants React classes par domaines
- `src/content/`: contenu statique et constantes metier (textes, liens, donnees)
- `src/config/`: configuration partagee (SEO, utilitaires applicatifs)

Les artefacts et dependances restent hors logique produit:

- `node_modules/` et `.next/` sont generes et ignores par Git
- la racine contient uniquement configuration/outillage

## Convention de nommage et placement

- Routes: `src/app/<route>/page.tsx`
- Composants: `src/components/<domaine>/<kebab-case>.tsx`
- Contenu: `src/content/<theme>.ts`
- Config partagee: `src/config/<theme>.ts`

Regles simples:

- Un composant = une responsabilite claire
- Eviter les textes en dur dans les pages; preferer `src/content/`
- Preferer les imports absolus via alias `@/src/...`
- Pour une nouvelle section de page, creer d'abord un composant dans `src/components/sections/`

## Criteres d'acceptation (Definition of Done)

- Site en ligne avec URL publique
- Les 4 sections MVP sont visibles et lisibles
- Les liens GitHub/LinkedIn fonctionnent
- Affichage correct mobile et desktop
- Temps de chargement percu < 3 secondes

## Roadmap projets (ordre fixe)

1. Portfolio Website MVP
2. Task Manager Collaboratif (projet phare)
3. Expense Tracker Personnel
4. URL Shortener & Analytics
5. Notes App avec Tags & Search

## Installation locale

### Prerequis

- Node.js LTS
- npm

### Demarrage

```bash
npm install
npm run dev
```

Application locale: http://localhost:3000

## Scripts utiles

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Convention de mise a jour

- Ajouter chaque projet des qu'il devient publiable
- Remplacer le badge "En cours" par "Live" quand une demo est disponible
- Mettre a jour les liens GitHub et demo en continu

## Auteur

Ken D. Cacciabue
