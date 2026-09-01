"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/motionVariants";

export function SlideUp({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      variants={delay ? {
        ...slideUp,
        visible: {
          // @ts-expect-error - Framer Motion types are complex, dynamic merge works runtime
          ...slideUp.visible,
          transition: {
            // @ts-expect-error - Framer Motion types
            ...slideUp.visible.transition,
            delay,
          },
        },
      } : slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
