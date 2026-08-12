import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = {
  title: "Our Portfolio | Synchro Solutions",
  description: "Explore our recent work. We partner with ambitious teams to turn complex problems into elegant, scalable solutions.",
  alternates: { canonical: "/portfolio" },
  openGraph: { title: "Our Portfolio | Synchro Solutions", description: "Explore our recent work. We partner with ambitious teams to turn complex problems into elegant, scalable solutions." },
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
          Our Work
        </h1>
        <p className="text-xl text-muted text-balance max-w-3xl mx-auto">
          Take a look at some of the digital products and solutions we&apos;ve built.
        </p>
      </div>
      <FeaturedProjects />
      <CTABanner />
    </div>
  );
}
