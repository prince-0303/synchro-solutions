import { Variants } from "framer-motion";

export const duration = {
  fast: 0.35,
  base: 0.65,
  slow: 1.0,
};

export const easing = {
  standard: [0.22, 1, 0.36, 1] as const,
};

export const stagger = {
  children: 0.12,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: duration.base, 
      ease: easing.standard 
    } 
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: duration.base, 
      ease: easing.standard 
    } 
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.children,
    },
  },
};
