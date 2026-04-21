/**
 * Last updated: 2026-04-21
 * Changes: Added a maintenance header and converted navigation comments to English.
 * Purpose: Render the main client-side navigation and expose the active route to assistive technologies.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/src/content/site";

// This must stay a client component because usePathname depends on browser navigation state.
export function NavLinks() {
  // Read the current route once so every rendered link can compare against the same pathname.
  const pathname = usePathname();

  function renderLinks(extraClassName?: string) {
    return navLinks.map((item) => {
      // Exact matching avoids marking parent routes as active when the pathname only shares a prefix.
      const isActive = pathname === item.href;
      return (
        <Link
          key={`${item.href}-${extraClassName ?? "base"}`}
          href={item.href}
          className={`nav-link${extraClassName ? ` ${extraClassName}` : ""}`}
          // aria-current lets screen readers announce which page is currently active.
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

      {/* The disclosure pattern keeps the mobile navigation compact without introducing extra state. */}
      <details className="nav-mobile-disclosure">
        <summary className="nav-toggle">Menu</summary>
        <div className="nav-links nav-links-mobile">{renderLinks("nav-link-mobile")}</div>
      </details>
    </nav>
  );
}
