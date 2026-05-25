"use client";

import type { LucideIcon } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  BookOpen,
  Eye,
  Code2,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */

interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  accentRgb: readonly [number, number, number];
}

/* ─── Constants ─────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const scrollFadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: "-80px" },
  transition:  { duration: 0.7, delay, ease: EASE_OUT },
});

const ENTRIES: TimelineEntry[] = [
  {
    id: "llm-research",
    period: "2026 – Present",
    title: "AI Research & LLM Engineering",
    description:
      "Fine-tuning large language models, building production RAG pipelines, and exploring multimodal AI systems. Bridging cutting-edge research with scalable, real-world deployment.",
    tech: ["PyTorch", "HuggingFace", "LangChain", "Python", "CUDA"],
    icon: Brain,
    accentRgb: [6, 182, 212],
  },
  {
    id: "cancer-detection",
    period: "2025 – 2026",
    title: "Pancreatic Cancer Detection AI",
    description:
      "Designed and trained a custom CNN with transfer learning for early-stage pancreatic cancer detection from CT scans — achieving 94%+ diagnostic accuracy and reducing false-negative rates.",
    tech: ["PyTorch", "CNN", "Transfer Learning", "Medical Imaging", "DICOM"],
    icon: Activity,
    accentRgb: [129, 140, 248],
  },
  {
    id: "full-stack",
    period: "2025",
    title: "Full Stack LMS Development",
    description:
      "Built a production-grade Learning Management System with real-time analytics, course tracking, and student management — deployed for active educational institution use.",
    tech: ["React", "Node.js", "Firebase", "TypeScript", "Tailwind CSS"],
    icon: BookOpen,
    accentRgb: [56, 189, 248],
  },
  {
    id: "computer-vision",
    period: "2026 – Present",
    title: "Computer Vision Research",
    description:
      "Explored object detection, semantic segmentation, and real-world CV pipelines. Implemented YOLO variants and custom vision architectures for applied research use cases.",
    tech: ["OpenCV", "PyTorch", "YOLO", "Python", "Scikit-learn"],
    icon: Eye,
    accentRgb: [45, 212, 191],
  },
  {
    id: "foundations",
    period: "2024 – Present",
    title: "Engineering Foundations",
    description:
      "Built core software engineering skills — frontend development, version control, Linux systems, and open-source contribution. The launchpad for everything that followed.",
    tech: ["JavaScript", "React", "Git", "Linux", "Python"],
    icon: Code2,
    accentRgb: [129, 140, 248],
  },
];

/* ─── Section ───────────────────────────────────────────── */

export default function Experience() {
  const isDark = useIsDark();
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Experience"
    >
      {/* Ambient accents */}
      <div
        className="absolute top-1/4 left-0 pointer-events-none"
        style={{
          width:        "600px",
          height:       "600px",
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)",
          filter:       "blur(56px)",
          transform:    "translateX(-40%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 pointer-events-none"
        style={{
          width:        "500px",
          height:       "500px",
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 65%)",
          filter:       "blur(52px)",
          transform:    "translateX(35%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Heading ──────────────────────────────── */}
        <motion.div {...scrollFadeUp(0)} className="mb-16 md:mb-20">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider text-cyan-400 border select-none"
            style={{
              backgroundColor: "rgba(6,182,212,0.07)",
              borderColor:     "rgba(6,182,212,0.22)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"
              style={{ boxShadow: "0 0 8px rgba(6,182,212,1)" }}
            />
            Journey
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
            <span className={isDark ? "text-white" : "text-slate-900"}>My </span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
              }}
            >
              Experience
            </span>
          </h2>

          <div
            className="mt-4 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,182,212,0.8), transparent)",
            }}
          />

          <p className={`mt-5 text-[14.5px] max-w-lg leading-relaxed ${isDark ? "text-white/38" : "text-slate-400"}`}>
            A timeline of research milestones, engineering projects, and
            continuous learning — from foundations to the frontier.
          </p>
        </motion.div>

        {/* ── Timeline ─────────────────────────────── */}
        <div className="relative">

          {/* Vertical glow line */}
          <div
            className="absolute top-5 bottom-5 w-px left-5 sm:left-6 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(6,182,212,0.35) 8%, rgba(6,182,212,0.18) 85%, transparent 100%)",
            }}
          />

          <ol className="flex flex-col gap-8 sm:gap-10" aria-label="Career timeline">
            {ENTRIES.map((entry, i) => (
              <motion.li
                key={entry.id}
                {...scrollFadeUp(0.1 + i * 0.09)}
              >
                <TimelineItem entry={entry} />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─── Timeline item ──────────────────────────────────────── */

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const Icon   = entry.icon;
  const accent = (a: number) => `rgba(${entry.accentRgb.join(",")},${a})`;

  return (
    <div className="flex items-start gap-5 sm:gap-7">

      {/* Node */}
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: accent(0.08),
            border:          `1.5px solid ${accent(0.35)}`,
            boxShadow:       `0 0 20px ${accent(0.22)}, 0 0 40px ${accent(0.08)}`,
          }}
        >
          <Icon
            className="w-4 h-4 sm:w-5 sm:h-5"
            style={{ color: accent(1) }}
          />

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.6, 1], opacity: [0.35, 0, 0.35] }}
            transition={{
              duration: 3,
              repeat:   Infinity,
              ease:     "easeInOut",
            }}
            style={{ border: `1px solid ${accent(0.55)}` }}
          />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="flex-1 min-w-0"
      >
        <EntryCard entry={entry} accent={accent} />
      </motion.div>
    </div>
  );
}

/* ─── Entry card ─────────────────────────────────────────── */

function EntryCard({
  entry,
  accent,
}: {
  entry: TimelineEntry;
  accent: (a: number) => string;
}) {
  const isDark = useIsDark();
  return (
    <div
      className="relative p-5 sm:p-6 rounded-2xl border overflow-hidden"
      style={{
        backgroundColor:      isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.75)",
        borderColor:           accent(0.15),
        backdropFilter:       "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width:     "200px",
          height:    "200px",
          background: `radial-gradient(circle, ${accent(0.09)} 0%, transparent 70%)`,
          filter:    "blur(28px)",
          transform: "translate(40%, -40%)",
        }}
      />

      <div className="relative flex flex-col gap-3.5">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className={`text-[15px] sm:text-[15.5px] font-semibold leading-snug ${isDark ? "text-white/80" : "text-slate-800"}`}>
            {entry.title}
          </h3>

          <span
            className="flex-shrink-0 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest whitespace-nowrap"
            style={{
              backgroundColor: accent(0.08),
              color:           accent(0.9),
              border:          `1px solid ${accent(0.22)}`,
            }}
          >
            {entry.period}
          </span>
        </div>

        {/* Accent divider */}
        <div
          className="h-px w-full"
          style={{
            background: `linear-gradient(90deg, ${accent(0.28)}, transparent)`,
          }}
        />

        {/* Description */}
        <p className={`text-[13px] leading-relaxed ${isDark ? "text-white/40" : "text-slate-500"}`}>
          {entry.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-0.5">
          {entry.tech.map((t) => (
            <span
              key={t}
              className={`px-2 py-0.5 text-[10px] font-mono rounded border ${isDark ? "text-white/35" : "text-slate-400"}`}
              style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.04)",
                borderColor:     isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
