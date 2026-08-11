"use client";

import * as React from "react";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const activeSection = useActiveSection(["home", "about", "services", "contact"]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.href.replace("#", "");
        return (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-brand",
              isActive ? "text-foreground font-semibold" : "text-muted"
            )}
          >
            {link.name}
            {isActive && (
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand rounded-full" />
            )}
          </a>
        );
      })}
    </nav>
  );
}
