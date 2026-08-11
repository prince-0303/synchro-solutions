import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({ children, className, as: Tag = "h2", ...props }: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-bold tracking-tight",
        Tag === "h2" ? "text-3xl md:text-4xl lg:text-5xl" : "",
        Tag === "h3" ? "text-2xl md:text-3xl" : "",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
