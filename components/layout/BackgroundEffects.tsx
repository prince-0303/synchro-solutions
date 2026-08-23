"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackgroundEffects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 -z-50 pointer-events-none" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Base Grid */}
      <div 
        className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          isDark ? "opacity-[0.04]" : "opacity-[0.03]"
        )}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? '#fff' : '#000'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)
          `,
          backgroundSize: '6rem 6rem',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 90%)'
        }}
      />

      {/* Atmospheric Glows */}
      <div 
        className={cn(
          "absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[140px] transition-all duration-1000",
          isDark ? "bg-[var(--brand-teal)] opacity-20" : "bg-[var(--brand-teal)] opacity-[0.15]"
        )} 
      />
      <div 
        className={cn(
          "absolute top-[10%] right-[-10%] w-[50%] h-[70%] rounded-full blur-[160px] transition-all duration-1000",
          isDark ? "bg-[var(--brand-blue)] opacity-15" : "bg-[var(--brand-blue)] opacity-[0.12]"
        )} 
      />
      
      {/* Noise Texture */}
      <div 
        className={cn(
          "absolute inset-0 mix-blend-screen transition-opacity duration-1000",
          isDark ? "opacity-[0.15]" : "opacity-[0.04]"
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px'
        }}
      />
    </div>
  );
}
