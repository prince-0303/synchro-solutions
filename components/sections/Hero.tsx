"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, SlideUp } from "@/components/motion";
import { ArrowRight, Code, BarChart3, Database, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

function InteractiveMockup() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl border border-border/50 bg-card/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden p-6 flex flex-col gap-4 group"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-brand/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-brand" />
          </div>
          <div>
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            <div className="h-3 w-16 bg-muted/50 rounded mt-1" />
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-border bg-background">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart3 className="w-4 h-4 text-muted" />
            <span className="text-xs text-muted">Conversion</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-2xl font-mono font-bold text-foreground"
          >
            +42.8%
          </motion.div>
        </div>
        <div className="p-4 rounded-xl border border-border bg-background">
          <div className="flex items-center space-x-2 mb-2">
            <Database className="w-4 h-4 text-muted" />
            <span className="text-xs text-muted">Uptime</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-2xl font-mono font-bold text-brand"
          >
            99.99%
          </motion.div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 rounded-xl border border-border bg-background p-4 relative overflow-hidden">
        <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
          {/* Grid lines */}
          <path d="M0,10 L100,10" stroke="currentColor" className="text-border" strokeWidth="0.5" strokeDasharray="2" />
          <path d="M0,25 L100,25" stroke="currentColor" className="text-border" strokeWidth="0.5" strokeDasharray="2" />
          <path d="M0,40 L100,40" stroke="currentColor" className="text-border" strokeWidth="0.5" strokeDasharray="2" />
          
          {/* Animated Line */}
          <motion.path
            d="M0,40 C20,35 30,10 50,20 C70,30 80,5 100,10"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.0, delay: 1.1, ease: "easeInOut" }}
          />
          
          {/* Accent glow */}
          <motion.path
            d="M0,40 C20,35 30,10 50,20 C70,30 80,5 100,10"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="8"
            className="opacity-20 blur-sm"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.0, delay: 1.1, ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      {/* Code Snippet block */}
      <div className="h-16 rounded-xl border border-border bg-background p-4 flex items-center space-x-3">
        <Code className="w-4 h-4 text-muted" />
        <div className="flex-1">
          <div className="h-2 w-3/4 bg-muted/30 rounded" />
          <div className="h-2 w-1/2 bg-muted/20 rounded mt-2" />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center scroll-mt-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <StaggerContainer className="flex flex-col space-y-6 max-w-2xl">
            <SlideUp>
              <div className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
                <span className="flex h-2 w-2 rounded-full bg-brand mr-2 animate-pulse"></span>
                Now taking new projects
              </div>
            </SlideUp>

            <SlideUp>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-balance leading-[1.1]">
                Build Products Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">Users Actually Love</span>
              </h1>
            </SlideUp>

            <SlideUp>
              <p className="text-lg md:text-xl text-muted text-balance max-w-xl">
                We&apos;re a specialized software development company building custom web applications, mobile applications, SaaS products, AI solutions, UI/UX experiences, and cloud solutions for startups and businesses.
              </p>
            </SlideUp>

            <SlideUp className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" className="w-full sm:w-auto text-base">
                Let&apos;s Build Together
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto text-base">
                See Our Work
              </Button>
            </SlideUp>
          </StaggerContainer>

          <FadeIn className="hidden lg:block relative perspective-[1000px]">
            <InteractiveMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
