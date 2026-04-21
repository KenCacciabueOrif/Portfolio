> Last updated: 2026-04-21
> Changes: Added README maintenance metadata and formalized the components domain index.

# Components Domains

This folder groups reusable component domains for the portfolio website.

## Contents

- [navigation/README.md](navigation/README.md): composants de navigation globale.
- [projects/README.md](projects/README.md): composants lies aux projets.
- [theme/README.md](theme/README.md): composants ou utilitaires de theme.

## Code Comment Index

- [navigation/nav-links.tsx](navigation/nav-links.tsx): documents active-route detection, accessibility semantics, and the mobile disclosure pattern.
- [projects/project-card.tsx](projects/project-card.tsx): documents the reusable project card contract and its dependency on shared content data.

## Maintenance Steps

1. Garder un sous-dossier par domaine fonctionnel de composants.
2. Mettre a jour cet index lorsqu'un nouveau domaine apparait ou disparait.
3. Documenter les conventions de placement ici si le nombre de composants augmente.

## Todo

- Les dossiers `sections/` et `ui/` ne sont pas presents dans l'etat actuel du projet.
- Ajouter un index de commentaires de code importants lorsque les composants seront davantage documentes.
