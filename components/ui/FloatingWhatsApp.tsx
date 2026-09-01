"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down a bit to not clash with initial animations
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
        >
          <Link
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            aria-label="Chat with Synchro on WhatsApp"
          >
            <MessageCircle className="h-7 w-7" />
            <span className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm opacity-0 transition-opacity group-hover:opacity-100 hidden md:block border border-border pointer-events-none">
              Chat with Synchro
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
