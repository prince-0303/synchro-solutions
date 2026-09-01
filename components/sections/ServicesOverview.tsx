

import { SERVICES } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 scroll-mt-16 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <StaggerContainer className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SlideUp>
            <div className="text-brand font-semibold tracking-wider text-sm uppercase">What We Build</div>
          </SlideUp>
          <SlideUp>
            <SectionHeading>Solutions designed around <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">your business</span>.</SectionHeading>
          </SlideUp>
          <SlideUp>
            <p className="text-muted text-lg text-balance">
              We focus on the tools you need to grow—no unnecessary jargon or complicated tech specs.
            </p>
          </SlideUp>
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <SlideUp key={service.id} className="h-full">
              <div className="block h-full">
                <div className="group relative flex flex-col h-full rounded-2xl bg-card p-8 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden shadow-sm">
                  {/* Hover Gradient Border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-brand-hover/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-12 h-12 rounded-lg bg-alt-bg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-brand transition-all">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted mb-6 text-sm">{service.description}</p>

                    <ul className="space-y-2 mb-8 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-brand mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto pt-6">
                      <Button href="/contact" variant="outline" className="w-full justify-center group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all border-none bg-alt-bg group-hover:bg-brand">
                        {service.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
