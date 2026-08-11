import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { About } from "@/components/sections/About";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { CTABanner } from "@/components/sections/CTABanner";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <ServicesOverview />
      <FeaturedProjects />
      <TechStackStrip />
      <CTABanner />
      <Contact />
    </>
  );
}
