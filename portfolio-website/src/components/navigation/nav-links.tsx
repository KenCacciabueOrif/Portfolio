// Purpose: Navigation principale cote client; gere le lien actif selon la route courante.
// Exports: `NavLinks`, composant qui mappe `navLinks` et renseigne `aria-current`.
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/src/content/site";

// Composant client car usePathname depend de l'etat de navigation cote navigateur.
export function NavLinks() {
  // Lit la route active (ex: /projets) pour marquer visuellement l'entree correspondante.
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <nav aria-label="Navigation principale" className="nav-shell">
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={isOpen}
        aria-controls="main-nav-links"
        onClick={() => setIsOpen((previous) => !previous)}
      >
        Menu
      </button>

      <div id="main-nav-links" className="nav-links" data-open={isOpen ? "true" : "false"}>
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
              onClick={handleCloseMenu}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
