"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/motionVariants";

export function SlideUp({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
