"use client";

import { STATS } from "@/content/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StaggerContainer, SlideUp } from "@/components/motion";

export function StatsBar() {
  return (
    <section className="bg-brand text-white py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {STATS.map((stat) => (
            <SlideUp key={stat.id} className="flex flex-col items-center justify-center text-center px-4">
              <div className="text-4xl md:text-5xl font-mono font-bold mb-2 tracking-tighter">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  duration={2.5}
                />
              </div>
              <div className="text-sm md:text-base font-medium text-white/80">
                {stat.label}
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
