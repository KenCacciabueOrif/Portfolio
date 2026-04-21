> Last updated: 2026-04-21
> Changes: Added README maintenance metadata and completed the root technical guide with explicit follow-up guidance.

<!-- Purpose: Documentation projet; explique objectifs MVP, stack, scripts et workflow de mise a jour. -->
# Portfolio Website - Guide Technique

Ce README couvre uniquement l'application web dans ce dossier: architecture, lancement local, scripts, build et deploiement.

Pour la vision produit et la roadmap globale du portfolio, voir:
[../README.md](../README.md)

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint

## Architecture

Le code source est isole dans [src/README.md](src/README.md).

- [src/app/README.md](src/app/README.md): routes App Router Next.js (pages, layout, metadata routes)
- [src/components/README.md](src/components/README.md): composants React classes par domaines
- [src/content/README.md](src/content/README.md): contenu statique et constantes metier (textes, liens, donnees)
- [src/config/README.md](src/config/README.md): configuration partagee (SEO, utilitaires applicatifs)

Les artefacts et dependances restent hors logique produit:

- `node_modules/` et `.next/` sont generes et ignores par Git
- la racine contient uniquement configuration/outillage
- [public/README.md](public/README.md): assets statiques servis directement

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

## Criteres techniques de validation

- Le projet compile sans erreur (`npm run build`)
- Le lint passe (`npm run lint`)
- L'application demarre localement (`npm run dev`)
- L'affichage reste lisible en mobile et desktop

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

## Build production

```bash
npm run build
npm run start
```

## Deploiement

Deploiement cible: Vercel.

Le site lui-meme ne necessite pas de backend dedie a ce stade. Son role est de presenter le profil, les experiences et les cartes projets, puis de pointer vers les depots et demos des projets principaux au fur et a mesure.

Workflow recommande:

1. Push sur la branche de travail
2. Verification lint/build en CI
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

- Garder les dependances a jour
- Ajouter les nouveaux composants dans les dossiers de domaine adequats
- Eviter les contenus en dur dans les pages, preferer `src/content/`
- Mettre a jour les README des sous-dossiers quand l'architecture change

## Todo

- Ajouter un resume court des conventions de contenu si plusieurs types de projets sont publies sur le site.
- Completer ce README avec le workflow de publication final une fois l'hebergement fige.

## Auteur

Ken D. Cacciabue
