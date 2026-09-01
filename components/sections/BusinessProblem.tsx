"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const BEFORE_ITEMS = [
  "Multiple Excel files",
  "Manual data entry",
  "Scattered customer information",
  "Orders through WhatsApp",
  "Difficult reporting",
  "Repetitive administrative work"
];

const AFTER_ITEMS = [
  "Centralized business data",
  "Automated workflows",
  "Organized customer information",
  "Real-time dashboards",
  "Easier reporting",
  "Less repetitive work"
];

export function BusinessProblem() {
  return (
    <section className="py-24 relative overflow-hidden bg-alt-bg">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <StaggerContainer className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <SlideUp>
            <SectionHeading>
              Still Managing Your Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Spreadsheets, WhatsApp & Paperwork?</span>
            </SectionHeading>
          </SlideUp>
        </StaggerContainer>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Before */}
          <SlideUp delay={0.1}>
            <div className="h-full rounded-2xl bg-card/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full" />
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Old Way</h3>
              </div>

              <ul className="space-y-4">
                {BEFORE_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start text-muted dark:text-white/70">
                    <X className="w-5 h-5 text-red-500/70 mr-3 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>

          {/* After */}
          <SlideUp delay={0.2}>
            <div className="h-full rounded-2xl bg-card dark:bg-brand/5 border border-black/5 dark:border-brand/20 shadow-lg relative overflow-hidden p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-teal)]/20 blur-3xl rounded-full" />
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Synchro Way</h3>
              </div>

              <ul className="space-y-4">
                {AFTER_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start text-foreground/90 font-medium">
                    <Check className="w-5 h-5 text-brand mr-3 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>
        </div>

        <SlideUp delay={0.3} className="mt-16 text-center">
          <Button href="/contact" size="lg" className="rounded-[30px] px-8 h-12 text-base font-medium">
            Let&apos;s Find the Right Solution
          </Button>
        </SlideUp>
      </div>
    </section>
  );
}
