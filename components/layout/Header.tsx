"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo/Synchro.png"
            alt={`${SITE_CONFIG.name} Logo`}
            width={300}
            height={100}
            className="w-auto h-12 md:h-16 object-contain"
            priority
          />
        </Link>

        <div className="flex items-center space-x-4 md:space-x-8">
          <Navbar />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
