"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

export function ScrollReveal({ 
  children, 
  className, 
  variants 
}: { 
  children: React.ReactNode; 
  className?: string;
  variants: Variants;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
