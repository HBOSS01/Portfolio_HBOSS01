"use client";

import { useIsDark } from "@/hooks/useIsDark";
import { motion } from "framer-motion";

export default function HeroBackground() {
  const isDark = useIsDark();

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Layer 0: Dot grid ───────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(6,182,212,0.45) 1px, transparent 1px)"
            : "radial-gradient(rgba(6,182,212,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: isDark ? 0.09 : 0.07,
        }}
      />

      {/* ── Layer 1: Subtle scanlines ───────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 94%, rgba(6,182,212,0.025) 100%)",
          backgroundSize: "100% 80px",
        }}
      />

      {/* ── Layer 2: Cyan blob — top right ─────────────────── */}
      <motion.div
        animate={{
          x: [0, 40, 12, -20, 0],
          y: [0, -24, 28, -10, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-64 -right-64 w-[800px] h-[800px] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 62%)"
            : "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 62%)",
          filter: "blur(28px)",
          willChange: "transform",
        }}
      />

      {/* ── Layer 3: Core center glow pulse ────────────────── */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: isDark ? [0.4, 0.6, 0.4] : [0.22, 0.36, 0.22],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 60%)",
          filter: "blur(48px)",
          willChange: "transform, opacity",
        }}
      />

      {/* ── Layer 4: Horizontal light sweep ────────────────── */}
      <motion.div
        animate={{ x: ["-110%", "210%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 9,
          ease: "easeInOut",
        }}
        className="absolute top-[38%] left-0 w-2/5 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.28) 50%, transparent 100%)",
          willChange: "transform",
        }}
      />

      {/* ── Layer 5: Secondary sweep (offset phase) ─────────── */}
      <motion.div
        animate={{ x: ["210%", "-110%"] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatDelay: 13,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-[62%] left-0 w-1/3 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.18) 50%, transparent 100%)",
          willChange: "transform",
        }}
      />

      {/* ── Layer 6: Edge vignette ────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 85% 65% at 50% 50%, transparent 45%, rgba(2,12,24,0.55) 100%)"
            : "radial-gradient(ellipse 85% 65% at 50% 50%, transparent 45%, rgba(240,244,248,0.45) 100%)",
        }}
      />
    </div>
  );
}
