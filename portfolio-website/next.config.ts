// Purpose: Point d'entree de configuration Next.js pour options runtime/build du projet.
// Exports: `nextConfig`, objet a etendre pour activer optimisations et comportements globaux.
import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: configDir,
  },
};

export default nextConfig;
