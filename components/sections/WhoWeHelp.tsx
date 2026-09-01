"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Rocket, Store, TrendingUp, GraduationCap } from "lucide-react";

const AUDIENCES = [
  {
    title: "Startups",
    description: "Turn your idea into an MVP, web application or scalable digital product.",
    icon: Rocket
  },
  {
    title: "Small Businesses",
    description: "Move away from spreadsheets, paperwork and repetitive manual processes.",
    icon: Store
  },
  {
    title: "Growing Businesses",
    description: "Connect your operations with software designed around your workflows.",
    icon: TrendingUp
  },
  {
    title: "Schools & Institutions",
    description: "Digitize student, staff, attendance, fee and administrative processes.",
    icon: GraduationCap
  }
];

export function WhoWeHelp() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <StaggerContainer className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SlideUp>
            <SectionHeading>Built for Businesses That Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">Ready to Grow</span></SectionHeading>
          </SlideUp>
        </StaggerContainer>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((audience, idx) => (
            <SlideUp key={idx} className="h-full">
              <div className="group relative flex flex-col h-full rounded-2xl bg-card p-8 transition-all hover:shadow-xl hover:-translate-y-1 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-alt-bg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-brand transition-all text-muted-foreground shadow-sm">
                    <audience.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{audience.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{audience.description}</p>
                </div>
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
