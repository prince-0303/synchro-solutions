"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { MessageSquare, LayoutTemplate, Code2, Rocket, Headset } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Understand",
    description: "We learn about your business, challenges and goals.",
    icon: MessageSquare
  },
  {
    num: "02",
    title: "Plan",
    description: "We define the features, workflows and technology needed.",
    icon: LayoutTemplate
  },
  {
    num: "03",
    title: "Build",
    description: "We design and develop your website or software.",
    icon: Code2
  },
  {
    num: "04",
    title: "Launch",
    description: "We deploy your solution and help you get started.",
    icon: Rocket
  },
  {
    num: "05",
    title: "Support",
    description: "We remain available for improvements, updates and ongoing support.",
    icon: Headset
  }
];

export function HowWeWork() {
  return (
    <section className="py-24 relative overflow-hidden bg-alt-bg">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <StaggerContainer className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <SlideUp>
            <SectionHeading>From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">Working Solution</span></SectionHeading>
          </SlideUp>
        </StaggerContainer>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-border z-0" />
          
          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-[39px] w-0.5 bg-border z-0" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {STEPS.map((step, idx) => (
              <SlideUp key={idx} className="relative">
                <div className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 group">
                  <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-background border-4 border-alt-bg shadow-sm flex flex-col items-center justify-center relative transition-transform group-hover:scale-105 group-hover:border-brand/20 group-hover:shadow-md">
                    <span className="text-xs font-bold text-muted mb-1 block group-hover:text-brand transition-colors">{step.num}</span>
                    <step.icon className="w-6 h-6 text-foreground group-hover:text-brand transition-colors" />
                  </div>
                  
                  <div className="pt-2 md:pt-4">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand transition-colors">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </SlideUp>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
