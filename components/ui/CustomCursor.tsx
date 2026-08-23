"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position — updates instantly on every mousemove
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Inner dot: near-instant snap
  const dotX = useSpring(rawX, { stiffness: 800, damping: 40, mass: 0.1 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 40, mass: 0.1 });

  // Outer ring: slightly trailing
  const ringX = useSpring(rawX, { stiffness: 400, damping: 30, mass: 0.3 });
  const ringY = useSpring(rawY, { stiffness: 400, damping: 30, mass: 0.3 });

  // Glow: lazy, soft trail
  const glowX = useSpring(rawX, { stiffness: 200, damping: 28, mass: 0.6 });
  const glowY = useSpring(rawY, { stiffness: 200, damping: 28, mass: 0.6 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        setIsVisible(true);
        hasMoved = true;
      }
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        !!target.closest("[role='button']");
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [rawX, rawY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient glow — laziest follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9990] rounded-full"
        style={{
          width: 180,
          height: 180,
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(15, 157, 149, 0.07) 0%, rgba(34, 199, 214, 0.04) 50%, transparent 75%)",
          filter: "blur(28px)",
        }}
        animate={{ scale: isHovering ? 1.3 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Outer ring — medium trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          width: 22,
          height: 22,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.2 : 1,
          opacity: isHovering ? 0.5 : 0.6,
          borderColor: isHovering ? "var(--brand-cyan)" : "var(--brand)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* Inner dot — snappiest, always on cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-brand"
        style={{
          width: 5,
          height: 5,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
