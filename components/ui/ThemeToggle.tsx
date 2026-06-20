"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center opacity-0" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      id="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: isDark
          ? "rgba(255,255,255,0.05)"
          : "rgba(255,255,255,0.9)",
        borderColor: isDark
          ? "rgba(255,255,255,0.10)"
          : "rgba(100,116,139,0.25)",
        boxShadow: isDark ? "none" : "0 2px 8px rgba(15,23,42,0.08)",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <Moon className="w-4 h-4 text-cyan-400" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <Sun className="w-4 h-4 text-amber-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
