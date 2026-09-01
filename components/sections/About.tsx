"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Settings, MessageSquare, Zap, MapPin, TrendingUp } from "lucide-react";

const REASONS = [
  {
    title: "BUILT AROUND YOUR BUSINESS",
    desc: "We don't force your workflow into a generic system. We design around your requirements.",
    icon: Settings
  },
  {
    title: "DIRECT COMMUNICATION",
    desc: "Work directly with the team building your solution.",
    icon: MessageSquare
  },
  {
    title: "MODERN TECHNOLOGY",
    desc: "Fast, maintainable and scalable solutions using modern development technologies.",
    icon: Zap
  },
  {
    title: "LOCAL SUPPORT",
    desc: "Based in Kerala and available to work closely with businesses across the state.",
    icon: MapPin
  },
  {
    title: "BUILT TO GROW",
    desc: "Start with what you need today and expand your system as your business grows.",
    icon: TrendingUp
  }
];

export function About() {
  return (
    <section id="about" className="py-24 scroll-mt-16 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <StaggerContainer className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SlideUp>
            <div className="text-brand font-semibold tracking-wider text-sm uppercase mb-2">Why Us</div>
            <SectionHeading>
              Why Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">Synchro?</span>
            </SectionHeading>
          </SlideUp>
        </StaggerContainer>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, idx) => (
            <SlideUp key={idx} className="h-full">
              <div className="group relative flex flex-col h-full rounded-2xl bg-card p-8 transition-all hover:shadow-xl hover:-translate-y-1 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-alt-bg flex items-center justify-center text-muted-foreground group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-2 leading-tight tracking-wider uppercase">{reason.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{reason.desc}</p>
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
