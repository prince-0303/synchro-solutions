"use client";

import dynamic from "next/dynamic";
import { About } from "@/components/sections/About";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CTABanner } from "@/components/sections/CTABanner";
import { Contact } from "@/components/sections/Contact";

const Hero = dynamic(() => import("@/components/sections/Hero").then(mod => mod.Hero), { ssr: false });
const TechStackStrip = dynamic(() => import("@/components/sections/TechStackStrip").then(mod => mod.TechStackStrip), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesOverview />
      <TechStackStrip />
      <CTABanner />
      <Contact />
    </>
  );
}
