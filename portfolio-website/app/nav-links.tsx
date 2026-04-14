"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./site-content";

// Composant client car usePathname depend de l'etat de navigation cote navigateur.
export function NavLinks() {
  // Lit la route active (ex: /projets) pour marquer visuellement l'entree correspondante.
  const pathname = usePathname();

  return (
    <nav aria-label="Navigation principale" className="nav-links">
      {navLinks.map((item) => {
        // Egalite stricte volontaire: seul le lien exact est considere comme actif.
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link"
            // aria-current permet aux lecteurs d'ecran d'annoncer la page courante.
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
