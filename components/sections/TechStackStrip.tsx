"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Server, 
  Layout, 
  Smartphone,
  Cloud,
  Cpu,
  Layers,
  Box,
  Globe,
  Terminal,
  PenTool
} from "lucide-react";

const TECH_STACK = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "GCP", icon: Cloud },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Layers },
  { name: "React Native", icon: Smartphone },
  { name: "TensorFlow", icon: Cpu },
  { name: "Tailwind CSS", icon: Layout },
  { name: "UI/UX", icon: PenTool },
];

export function TechStackStrip() {
  const prefersReducedMotion = useReducedMotion();
  // Double the array to create a seamless loop
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-12 border-y border-border/50 overflow-hidden relative bg-alt-bg/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-7xl mb-8 text-center">
        <p className="text-sm font-medium text-muted uppercase tracking-wider">Powered by modern technology</p>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap"
        >
          {duplicatedTech.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center space-x-3 px-8 py-4 mx-4 rounded-xl border border-border bg-alt-bg/50 backdrop-blur-sm shrink-0 grayscale hover:grayscale-0 hover:border-brand/50 transition-all cursor-default"
            >
              <tech.icon className="w-6 h-6 text-foreground" />
              <span className="font-display font-medium text-foreground">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
