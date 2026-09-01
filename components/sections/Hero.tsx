"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, SlideUp } from "@/components/motion";
import { Code, BarChart3, Database, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-12 flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl flex flex-col items-center text-center">

        <StaggerContainer className="flex flex-col items-center space-y-6 w-full mt-10 md:mt-20">
          <SlideUp>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto">
              Software Solutions Built Around <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">
                Your Business.
              </span>
            </h1>
          </SlideUp>

          <SlideUp>
            <p className="text-lg md:text-xl text-muted text-balance max-w-2xl mx-auto font-light leading-relaxed mt-2">
              From professional websites to custom business management software, Synchro Solutions helps startups and growing businesses simplify operations, automate manual work, and grow digitally.
            </p>
          </SlideUp>

          <SlideUp className="pt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
            <Button href="/contact" size="lg" className="w-full sm:w-auto text-base rounded-[30px] px-8 h-12 font-medium">
              Get a Free Consultation
            </Button>
            <Button href="/#solutions" variant="outline" size="lg" className="w-full sm:w-auto text-base rounded-[30px] px-8 h-12 font-medium">
              View Our Work
            </Button>
          </SlideUp>

          <SlideUp className="pt-4 flex items-center justify-center">
            <p className="text-sm font-medium text-muted">
              Based in Kerala. Building digital solutions for businesses that are ready to grow.
            </p>
          </SlideUp>
        </StaggerContainer>
      </div>
    </section>
  );
}
