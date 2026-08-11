"use client";

import { PROJECTS } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <StaggerContainer className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <SlideUp>
              <div className="text-brand font-semibold tracking-wider text-sm uppercase">Portfolio</div>
            </SlideUp>
            <SlideUp>
              <SectionHeading>Work that speaks for itself.</SectionHeading>
            </SlideUp>
          </div>
          <SlideUp>
            <p className="text-muted text-lg text-balance max-w-md">
              We partner with ambitious teams to turn complex problems into elegant, scalable solutions.
            </p>
          </SlideUp>
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <SlideUp key={project.id} className="h-full">
              <div className="group h-full flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all hover:border-brand/50 hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="secondary">{project.category}</Badge>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-brand transition-colors" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-8">
                    {project.outcome}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {project.metric}
                    </span>
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
