// Purpose: Navigation principale cote client; gere le lien actif selon la route courante.
// Exports: `NavLinks`, composant qui mappe `navLinks` et renseigne `aria-current`.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/src/content/site";

// Composant client car usePathname depend de l'etat de navigation cote navigateur.
export function NavLinks() {
  // Lit la route active (ex: /projets) pour marquer visuellement l'entree correspondante.
  const pathname = usePathname();

  function renderLinks(extraClassName?: string) {
    return navLinks.map((item) => {
      // Egalite stricte volontaire: seul le lien exact est considere comme actif.
      const isActive = pathname === item.href;
      return (
        <Link
          key={`${item.href}-${extraClassName ?? "base"}`}
          href={item.href}
          className={`nav-link${extraClassName ? ` ${extraClassName}` : ""}`}
          // aria-current permet aux lecteurs d'ecran d'annoncer la page courante.
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
        </Link>
      );
    });
  }

  return (
    <nav aria-label="Navigation principale" className="nav-shell">
      <div className="nav-links nav-links-desktop">{renderLinks()}</div>

      <details className="nav-mobile-disclosure">
        <summary className="nav-toggle">Menu</summary>
        <div className="nav-links nav-links-mobile">{renderLinks("nav-link-mobile")}</div>
      </details>
    </nav>
  );
}
