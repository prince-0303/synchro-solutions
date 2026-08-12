"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ButtonBaseProps = {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const getStyles = (
  variant: ButtonBaseProps["variant"] = "primary",
  size: ButtonBaseProps["size"] = "md",
  className?: string
) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "[background-color:#0F9D95] hover:[background-color:#13B8AD] text-white shadow-[0_2px_12px_rgba(15,157,149,0.35)] hover:shadow-[0_4px_20px_rgba(15,157,149,0.5)] transition-all",
    ghost: "hover:bg-alt-bg/50 text-foreground transition-all",
    outline:
      "border border-border dark:border-white/25 bg-white/60 dark:bg-transparent backdrop-blur-md hover:bg-brand/5 dark:hover:bg-white/5 text-foreground shadow-sm hover:shadow-md hover:border-brand/40 dark:hover:border-brand/50 transition-all",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  return cn(base, variants[variant], sizes[size], className);
};

export function Button({ variant, size, className, href, children, ...props }: ButtonProps) {
  const cls = getStyles(variant, size, className);

  if (href !== undefined) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cls}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cls}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}

Button.displayName = "Button";

