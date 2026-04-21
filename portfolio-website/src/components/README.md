> Last updated: 2026-04-21
> Changes: Added the reusable past-project card to the components index and clarified the projects domain role.

# Components Domains

This folder groups reusable component domains for the portfolio website.

## Contents

- [navigation/README.md](navigation/README.md): composants de navigation globale.
- [projects/README.md](projects/README.md): composants liés aux projets, à la roadmap et aux preuves passées.
- [theme/README.md](theme/README.md): composants ou utilitaires de thème.

## Code Comment Index

- [navigation/nav-links.tsx](navigation/nav-links.tsx): documents active-route detection, accessibility semantics, and the mobile disclosure pattern.
- [projects/project-card.tsx](projects/project-card.tsx): documents the reusable project card contract and its dependency on shared content data.
- [projects/past-project-card.tsx](projects/past-project-card.tsx): documents the richer card used for past projects that already expose proof links.

## Maintenance Steps

1. Garder un sous-dossier par domaine fonctionnel de composants.
2. Mettre à jour cet index lorsqu'un nouveau domaine apparaît ou disparaît.
3. Documenter les conventions de placement ici si le nombre de composants augmente.

## Todo

- Les dossiers `sections/` et `ui/` ne sont pas présents dans l'état actuel du projet.
- Ajouter un index de commentaires de code importants lorsque les composants seront davantage documentes.
