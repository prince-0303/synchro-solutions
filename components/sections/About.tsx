"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, SlideUp } from "@/components/motion";
import { Search, PenTool, Rocket } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: 1, title: "Discovery", icon: Search, desc: "We align on your goals and technical requirements." },
  { id: 2, title: "Build", icon: PenTool, desc: "Iterative, high-quality development sprints." },
  { id: 3, title: "Launch", icon: Rocket, desc: "Deploy, scale, and maintain with confidence." },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 scroll-mt-16 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <StaggerContainer className="space-y-6">
            <SlideUp>
              <div className="text-brand font-semibold tracking-wider text-sm uppercase mb-2">About Us</div>
              <SectionHeading>
                We build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">backend</span> your product actually needs.
              </SectionHeading>
            </SlideUp>
            
            <SlideUp className="space-y-4 text-muted text-lg text-balance">
              <p>
                Synchro Solutions was founded on a simple premise: great software shouldn&apos;t be constrained by technical debt or bloated processes. We are a team of engineers, designers, and strategists who believe in building products that work flawlessly and scale effortlessly.
              </p>
              <p>
                Whether you&apos;re a startup looking for an MVP or an enterprise needing a complex system overhaul, we bring a pragmatic, engineering-first approach to every challenge. No buzzwords, just solid architecture and beautiful design.
              </p>
            </SlideUp>
          </StaggerContainer>

          <div ref={containerRef} className="relative">
            <div className="absolute left-[27px] top-[24px] bottom-[24px] w-0.5 bg-border hidden sm:block" />
            <div 
              className={cn(
                "absolute left-[27px] top-[24px] bottom-[24px] w-0.5 bg-brand hidden sm:block origin-top transition-transform duration-1000 ease-out",
                isInView ? "scale-y-100" : "scale-y-0"
              )} 
            />
            
            <div className="space-y-8 sm:space-y-12">
              {STEPS.map((step) => (
                <FadeIn key={step.id} className="relative flex items-start group" /* transition delay based on idx can be added */>
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-card border-2 border-border group-hover:border-brand transition-colors duration-300 mr-6">
                    <step.icon className="w-6 h-6 text-muted group-hover:text-brand transition-colors duration-300" />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
