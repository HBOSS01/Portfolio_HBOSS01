"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Layer 0: Dot grid ───────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(6,182,212,0.45) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.09,
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
          x: [0, 48, 16, -24, 0],
          y: [0, -28, 36, -12, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-64 -right-64 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.11) 0%, transparent 62%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Layer 3: Sky-blue blob — bottom left ───────────── */}
      <motion.div
        animate={{
          x: [0, -44, 20, 0],
          y: [0, 32, -18, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-64 -left-64 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)",
          filter: "blur(52px)",
        }}
      />

      {/* ── Layer 4: Indigo accent — left center ───────────── */}
      <motion.div
        animate={{
          x: [0, 28, -16, 0],
          y: [0, -36, 20, 0],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />

      {/* ── Layer 5: Core center glow pulse ────────────────── */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.045) 0%, transparent 60%)",
          filter: "blur(72px)",
        }}
      />

      {/* ── Layer 6: Horizontal light sweep ────────────────── */}
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
        }}
      />

      {/* ── Layer 7: Secondary sweep (offset phase) ─────────── */}
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
        }}
      />

      {/* ── Layer 8: Edge vignette (darkens corners) ────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 50%, transparent 45%, rgba(2,12,24,0.55) 100%)",
        }}
      />
    </div>
  );
}
