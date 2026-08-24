

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
              <div className="group h-full flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/50 hover:shadow-lg">
                <div className="flex flex-col flex-1">
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-muted/20 border border-border/50">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                    />
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-brand hover:text-white transition-colors z-10 shadow-sm border border-border">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-6 flex-1">
                    {project.description}
                  </p>
                </div>
                
                <div className="pt-5 border-t border-border mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="font-mono text-[10px] sm:text-xs">
                        {tech}
                      </Badge>
                    ))}
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
