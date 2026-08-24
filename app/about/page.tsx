import { About } from "@/components/sections/About";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = {
  title: "About Us",
  description: "Learn about Synchro Solutions. We are a team of engineers, designers, and strategists building scalable software products without the technical debt.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us",
    description: "Learn about Synchro Solutions. We are a team of engineers, designers, and strategists building scalable software products without the technical debt.",
    url: "/about",
    siteName: "Synchro Solutions",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
          Our Engineering Philosophy
        </h1>
        <p className="text-xl text-muted text-balance max-w-3xl mx-auto">
          We bring a pragmatic, engineering-first approach to every challenge. No buzzwords, just solid architecture.
        </p>
      </div>
      <About />
      <CTABanner />
    </div>
  );
}
