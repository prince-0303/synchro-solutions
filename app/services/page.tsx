import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = {
  title: "Our Services | Custom Software Development | Synchro Solutions",
  description: "Explore our range of custom software development services including web apps, mobile apps, SaaS, AI solutions, UI/UX, and cloud infrastructure.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Our Services | Synchro Solutions", description: "Explore our range of custom software development services including web apps, mobile apps, SaaS, AI solutions, UI/UX, and cloud infrastructure." },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
          Our Software Development Services
        </h1>
        <p className="text-xl text-muted text-balance max-w-3xl mx-auto">
          We provide end-to-end engineering and design services to build digital products that scale.
        </p>
      </div>
      <ServicesOverview />
      <CTABanner />
    </div>
  );
}
