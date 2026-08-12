import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";

export function Footer() {

  return (
    <footer className="bg-background border-t border-border py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="md:col-span-3">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/logo.png"
                alt={`${SITE_CONFIG.name} Logo`}
                width={120}
                height={120}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-muted text-sm max-w-sm mt-1">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted hover:text-brand transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-brand transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
