"use client";

import * as React from "react";
import { NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-brand",
              isActive ? "text-foreground font-semibold" : "text-muted"
            )}
          >
            {link.name}
            {isActive && (
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
