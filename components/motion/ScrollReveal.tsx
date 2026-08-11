"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScrollReveal({ 
  children, 
  className, 
  variants 
}: { 
  children: React.ReactNode; 
  className?: string;
  variants: any; // using any for simplicity, can type properly later
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
