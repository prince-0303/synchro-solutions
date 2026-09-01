"use client";

import dynamic from "next/dynamic";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { BusinessProblem } from "@/components/sections/BusinessProblem";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { About } from "@/components/sections/About";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Contact } from "@/components/sections/Contact";

const Hero = dynamic(() => import("@/components/sections/Hero").then(mod => mod.Hero), { ssr: false });
const TechStackStrip = dynamic(() => import("@/components/sections/TechStackStrip").then(mod => mod.TechStackStrip), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <div id="solutions">
        <ServicesOverview />
      </div>
      <BusinessProblem />
      <div id="who-we-help">
        <WhoWeHelp />
      </div>
      <FeaturedProjects />
      <About />
      <HowWeWork />
      <TechStackStrip />
      <Contact />
    </>
  );
}

