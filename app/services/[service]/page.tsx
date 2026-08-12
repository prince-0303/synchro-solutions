import { SERVICE_PAGES } from "@/content/servicePages";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/sections/CTABanner";
import { Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata({ params }: { params: { service: string } }) {
  const data = SERVICE_PAGES[params.service];
  if (!data) return { title: "Service Not Found" };

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${params.service}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICE_PAGES).map((service) => ({
    service,
  }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const data = SERVICE_PAGES[params.service];
  
  if (!data) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_CONFIG.url}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": `${SITE_CONFIG.url}/services/${params.service}`
      }
    ]
  };

  return (
    <div className="pt-32 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
          {data.h1}
        </h1>
        <p className="text-xl text-muted text-balance mb-16">
          {data.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold font-display mb-6">Capabilities</h2>
            <ul className="space-y-4">
              {data.capabilities.map((cap: string, i: number) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-brand mr-3 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {data.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-brand mr-3 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <CTABanner />
    </div>
  );
}
