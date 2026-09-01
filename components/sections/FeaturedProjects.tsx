"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/content/projects";

export function FeaturedProjects() {

  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <StaggerContainer className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl space-y-4">
            <SlideUp>
              <div className="text-brand font-semibold tracking-wider text-sm uppercase">Selected Work</div>
            </SlideUp>
            <SlideUp>
              <SectionHeading>Real products and systems built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">Synchro Solutions</span>.</SectionHeading>
            </SlideUp>
          </div>
        </StaggerContainer>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project) => (
            <SlideUp key={project.id}>
              <div className="group flex flex-col h-full rounded-3xl bg-card p-8 border border-border/50 hover:border-brand/30 transition-all hover:shadow-xl overflow-hidden shadow-sm relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="mb-6 flex-1">
                  <Badge variant="secondary" className="mb-4">{project.label}</Badge>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/40 mt-auto">
                  <Button href={project.link} variant="outline" className="w-full group/btn h-12 rounded-full border-border hover:bg-brand hover:text-white hover:border-brand transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
