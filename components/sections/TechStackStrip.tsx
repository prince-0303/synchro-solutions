"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Code2, Server, Smartphone } from "lucide-react";

const TECH_CATEGORIES = [
  {
    title: "Frontend",
    icon: Code2,
    techs: ["React", "Next.js"]
  },
  {
    title: "Backend",
    icon: Server,
    techs: ["Python", "Django", "FastAPI"]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    techs: ["Flutter"]
  }
];

export function TechStackStrip() {
  return (
    <section className="py-24 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <StaggerContainer className="space-y-4 mb-16">
          <SlideUp>
            <h2 className="text-3xl font-display font-bold text-foreground">Technology We Work With</h2>
          </SlideUp>
          <SlideUp>
            <p className="text-muted text-sm max-w-xl mx-auto">
              We use modern, scalable technologies to build solutions that are fast, reliable, and easy to maintain.
            </p>
          </SlideUp>
        </StaggerContainer>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((category, idx) => (
            <SlideUp key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-alt-bg flex items-center justify-center text-muted-foreground mb-4">
                <category.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.techs.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
