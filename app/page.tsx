import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { CTABanner } from "@/components/sections/CTABanner";
import { Contact } from "@/components/sections/Contact";

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
