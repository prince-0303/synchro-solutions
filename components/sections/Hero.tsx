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
            <div className="inline-flex items-center rounded-full border border-border bg-background/50 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm shadow-sm">
              <span className="font-bold mr-2 text-background bg-foreground px-2 py-0.5 rounded-full text-[10px]">AVAILABLE</span> For your next big idea
            </div>
          </SlideUp>

          <SlideUp>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto">
              Build Products Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">
                Users Actually Love
              </span>
            </h1>
          </SlideUp>

          <SlideUp>
            <p className="text-lg md:text-xl text-muted text-balance max-w-2xl mx-auto font-light leading-relaxed mt-2">
              We&apos;re a specialized software development company building custom web applications, mobile applications, SaaS products, AI solutions, UI/UX experiences, and cloud solutions for startups and businesses.
            </p>
          </SlideUp>

          <SlideUp className="pt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
            <Button href="/contact" size="lg" className="w-full sm:w-auto text-base rounded-[30px] px-8 h-12 font-medium">
              Let&apos;s Build Together
            </Button>
            <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto text-base rounded-[30px] px-8 h-12 font-medium">
              See Our Work
            </Button>
          </SlideUp>

          <SlideUp className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/80 font-medium hidden sm:flex">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>Custom Web Apps</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>AI Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand" />
              <span>UI/UX Experiences</span>
            </div>
          </SlideUp>
        </StaggerContainer>

        {/* Floating Cards mapped from pertinent website elements (Stats) */}
        <div className="relative w-full h-[180px] mt-16 perspective-[1000px] hidden md:block">
          <FadeIn className="absolute left-[10%] top-4">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="px-6 py-4 rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 text-left w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-brand" />
              </div>
              <div>
                <div className="text-[13px] text-muted mb-0.5">Support</div>
                <div className="text-xl font-mono font-bold text-foreground">24/7</div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn className="absolute right-[5%] top-0">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="px-6 py-4 rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 text-left w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <div className="text-[13px] text-muted mb-0.5">Code Quality</div>
                <div className="text-xl font-mono font-bold text-foreground">Enterprise</div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn className="absolute left-[35%] bottom-5">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="px-6 py-4 rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 text-left w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <div className="text-[13px] text-muted mb-0.5">Fast Delivery</div>
                <div className="text-xl font-mono font-bold text-foreground">Agile & Sprint</div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
