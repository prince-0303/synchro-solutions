import { SITE_CONFIG, NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const WhatsApp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.39 0 0 5.39 0 12.031c0 2.128.552 4.195 1.602 6.02L.035 24l6.096-1.597A11.96 11.96 0 0012.03 24c6.64 0 12.03-5.391 12.03-12.031C24.06 5.391 18.672 0 12.031 0zm6.541 17.202c-.276.779-1.621 1.503-2.224 1.564-.54.054-1.233.155-3.923-1.025-3.447-1.51-5.669-5.116-5.839-5.342-.17-.226-1.393-1.854-1.393-3.535 0-1.681.875-2.518 1.185-2.843.311-.324.676-.406.899-.406.223 0 .445.003.639.011.203.01.474-.078.74.56.28.665.955 2.33 1.04 2.498.084.17.14.368.028.594-.112.226-.17.368-.338.567-.17.198-.354.43-.51.583-.17.17-.348.354-.15.695.198.34.88.88 2.062 1.002 2.535.122.473.666.58.899.64.233.056 1.46.666 1.674.887.214.221.214.58.102.813z"/></svg>
);

export function Footer() {

  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          <div className="pr-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/logo.png"
                alt={`${SITE_CONFIG.name} Logo`}
                width={160}
                height={160}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed mt-1">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground text-lg mb-6">Follow Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={SOCIAL_LINKS.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm text-muted hover:text-brand transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.instagram || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm text-muted hover:text-brand transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.whatsapp || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm text-muted hover:text-brand transition-colors">
                  <WhatsApp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.facebook || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm text-muted hover:text-brand transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground text-lg mb-6">Sitemap</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center text-sm text-muted hover:text-brand transition-colors">
                    {link.name} <span className="ml-1 text-[10px]">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground text-lg mb-6">Get in touch</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 text-sm text-muted leading-relaxed">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-brand" />
                <span>
                  {CONTACT_INFO.address.split(',').map((line, i) => (
                    <span key={i} className="block">{line.trim()}</span>
                  ))}
                </span>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone?.replace(/ /g, '')}`} className="flex items-center space-x-3 text-sm text-muted hover:text-brand transition-colors">
                  <Phone className="w-5 h-5 shrink-0 text-brand" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-3 text-sm text-muted hover:text-brand transition-colors">
                  <Mail className="w-5 h-5 shrink-0 text-brand" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
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
