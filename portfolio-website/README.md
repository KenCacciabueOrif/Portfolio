> Last updated: 2026-04-21
> Changes: Documented the new proof-backed home page strategy, the past-project card component, and restored French accents in the guide.

<!-- Purpose: Documentation projet; explique objectifs MVP, stack, scripts et workflow de mise à jour. -->
# Portfolio Website - Guide Technique

Ce README couvre uniquement l'application web dans ce dossier: architecture, lancement local, scripts, build et déploiement.

Pour la vision produit et la roadmap globale du portfolio, voir:
[../README.md](../README.md)

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint

## Architecture

Le code source est isolé dans [src/README.md](src/README.md).

- [src/app/README.md](src/app/README.md): routes App Router Next.js (pages, layout, metadata routes)
- [src/components/README.md](src/components/README.md): composants React classés par domaines
- [src/content/README.md](src/content/README.md): contenu statique et constantes métier (textes, liens, données)
- [src/config/README.md](src/config/README.md): configuration partagée (SEO, utilitaires applicatifs)

Les artefacts et dépendances restent hors logique produit:

- `node_modules/` et `.next/` sont générés et ignorés par Git
- la racine contient uniquement configuration/outillage
- [public/README.md](public/README.md): assets statiques servis directement

## Convention de nommage et placement

- Routes: `src/app/<route>/page.tsx`
- Composants: `src/components/<domaine>/<kebab-case>.tsx`
- Contenu: `src/content/<theme>.ts`
- Config partagée: `src/config/<theme>.ts`

Règles simples:

- Un composant = une responsabilité claire
- Éviter les textes en dur dans les pages; préférer `src/content/`
- Préférer les imports absolus via alias `@/src/...`
- Pour une nouvelle section de page, créer d'abord un composant dans `src/components/sections/`

Spécificité actuelle du site:

- La page d'accueil met d'abord en avant des projets passés avec preuves publiques.
- La roadmap active reste visible plus bas via les cartes `project-card.tsx`.
- Les cartes riches de projets passés sont centralisées dans `src/components/projects/past-project-card.tsx`.

## Critères techniques de validation

- Le projet compile sans erreur (`npm run build`)
- Le lint passe (`npm run lint`)
- L'application démarre localement (`npm run dev`)
- L'affichage reste lisible en mobile et desktop

## Installation locale

### Prérequis

- Node.js LTS
- npm

### Démarrage

```bash
npm install
npm run dev
```

Application locale: http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Déploiement

Déploiement cible: Vercel.

Le site lui-même ne nécessite pas de backend dédié à ce stade. Son rôle est de présenter le profil, les expériences et les cartes projets, puis de pointer vers les dépôts et démos des projets principaux au fur et à mesure.

Workflow recommande:

1. Push sur la branche de travail
2. Vérification lint/build en CI
3. Deploy preview
4. Validation visuelle
5. Promotion en production

## Scripts utiles

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Maintenance Steps

- Garder les dépendances à jour
- Ajouter les nouveaux composants dans les dossiers de domaine adéquats
- Éviter les contenus en dur dans les pages, préférer `src/content/`
- Mettre à jour les README des sous-dossiers quand l'architecture change

## Todo

- Ajouter un résumé court des conventions de contenu si plusieurs types de projets sont publiés sur le site.
- Compléter ce README avec le workflow de publication final une fois l'hébergement figé.

## Auteur

Ken D. Cacciabue
