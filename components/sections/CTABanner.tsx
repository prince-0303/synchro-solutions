

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <FadeIn className="space-y-8 bg-card/50 backdrop-blur-2xl border border-border/50 p-8 md:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
          <SectionHeading>Ready to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">something remarkable?</span></SectionHeading>
          <p className="text-xl text-muted text-balance mx-auto max-w-2xl">
            Let&apos;s turn your complex problem into an elegant, scalable solution. We&apos;re ready when you are.
          </p>
          <div className="pt-4">
            <Button href="/contact" size="lg" className="text-lg px-10">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
