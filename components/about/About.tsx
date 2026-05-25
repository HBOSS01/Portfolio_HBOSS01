"use client";

import type { LucideIcon } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Code2,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Cpu,
  Zap,
} from "lucide-react";

/* ─── Motion ────────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const scrollFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

/* ─── Data ──────────────────────────────────────────────── */

const STATS = [
  { label: "Research Projects",  value: "8+",     icon: BookOpen      },
  { label: "AI Models Deployed", value: "12+",    icon: Brain         },
  { label: "Technologies",       value: "20+",    icon: Code2         },
  { label: "Learning Journey",   value: "3+ yrs", icon: GraduationCap },
];

const RESEARCH_AREAS = [
  "Natural Language Processing",
  "Computer Vision",
  "Large Language Models",
  "Reinforcement Learning",
  "Deep Learning",
  "Multimodal AI",
];

const HIGHLIGHTS = [
  { label: "Current Focus",     value: "LLM Fine-tuning & RAG Pipelines"  },
  { label: "Core Stack",        value: "PyTorch · HuggingFace · LangChain" },
  { label: "Language",          value: "Python · CUDA · SQL"               },
  { label: "Research Interest", value: "Multimodal AI Systems"             },
];

/* ─── Section ───────────────────────────────────────────── */

export default function About() {
  const isDark = useIsDark();
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="About me"
    >
      {/* Ambient background accents */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "-12%",
          width: "580px",
          height: "580px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          right: "-8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Section heading ────────────────────────────── */}
        <motion.div {...scrollFadeUp(0)} className="mb-16 md:mb-20">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider text-cyan-400 border select-none"
            style={{
              backgroundColor: "rgba(6,182,212,0.07)",
              borderColor: "rgba(6,182,212,0.22)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"
              style={{ boxShadow: "0 0 8px rgba(6,182,212,1)" }}
            />
            Get to Know Me
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
            <span className={isDark ? "text-white" : "text-slate-900"}>About </span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
              }}
            >
              Me
            </span>
          </h2>

          <div
            className="mt-4 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,182,212,0.8), transparent)",
            }}
          />
        </motion.div>

        {/* ── Two-column grid ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Bio + Stats */}
          <div className="flex flex-col gap-8">

            {/* Bio paragraphs */}
            <motion.div {...scrollFadeUp(0.1)} className="flex flex-col gap-4">
              <p className={`text-[15px] leading-[1.9] ${isDark ? "text-white/50" : "text-slate-600"}`}>
                I&apos;m{" "}
                <span className={`font-medium ${isDark ? "text-white/80" : "text-slate-700"}`}>
                  Md Fatin Hasnat Patwary
                </span>
                , an AI Engineer and Researcher driven by a deep passion for
                building intelligent systems that make a tangible difference.
                My expertise spans{" "}
                <span className={isDark ? "text-white/70" : "text-slate-600"}>machine learning</span>,{" "}
                <span className={isDark ? "text-white/70" : "text-slate-600"}>
                  natural language processing
                </span>
                , and{" "}
                <span className={isDark ? "text-white/70" : "text-slate-600"}>computer vision</span> —
                bridging cutting-edge research with real-world engineering.
              </p>
              <p className={`text-[15px] leading-[1.9] ${isDark ? "text-white/40" : "text-slate-500"}`}>
                I thrive at the intersection of innovation and precision —
                whether fine-tuning large language models, designing RAG
                pipelines, or training end-to-end computer vision
                architectures. Every problem I approach is an opportunity to
                push the frontier of what AI can achieve.
              </p>
            </motion.div>

            {/* "What drives me" callout */}
            <motion.div
              {...scrollFadeUp(0.18)}
              className="flex items-start gap-3.5 p-4 rounded-xl border"
              style={{
                backgroundColor: "rgba(6,182,212,0.04)",
                borderColor: "rgba(6,182,212,0.12)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(6,182,212,0.1)" }}
              >
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className={`text-[13px] font-medium mb-1 ${isDark ? "text-white/65" : "text-slate-600"}`}>
                  What drives me
                </p>
                <p className={`text-[13px] leading-relaxed ${isDark ? "text-white/38" : "text-slate-500"}`}>
                  Building AI that doesn&apos;t just perform — but understands,
                  adapts, and empowers. Research-first thinking, production-grade
                  execution.
                </p>
              </div>
            </motion.div>

            {/* Stats 2 × 2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div key={stat.label} {...scrollFadeUp(0.24 + i * 0.08)}>
                  <StatCard icon={stat.icon} value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Glass card */}
          <motion.div {...scrollFadeUp(0.14)}>
            <GlassCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stat card ─────────────────────────────────────────── */

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  const isDark = useIsDark();
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.015 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="p-5 rounded-2xl border flex flex-col gap-3 h-full cursor-default select-none"
      style={{
        backgroundColor: "rgba(6,182,212,0.04)",
        borderColor: "rgba(6,182,212,0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: "rgba(6,182,212,0.1)" }}
        >
          <Icon className="w-4 h-4 text-cyan-400" />
        </div>
        <span
          className="text-2xl font-bold tracking-tight text-transparent bg-clip-text leading-none"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #22d3ee 0%, #38bdf8 100%)",
          }}
        >
          {value}
        </span>
      </div>
      <span className={`text-[11.5px] tracking-wide leading-snug ${isDark ? "text-white/40" : "text-slate-500"}`}>
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Right glass card ──────────────────────────────────── */

function GlassCard() {
  const isDark = useIsDark();
  return (
    <div
      className="relative p-7 sm:p-8 rounded-3xl border overflow-hidden"
      style={{
        backgroundColor: isDark ? "rgba(6,182,212,0.025)" : "rgba(255,255,255,0.7)",
        borderColor: isDark ? "rgba(6,182,212,0.1)" : "rgba(6,182,212,0.15)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Corner glows */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)",
          filter: "blur(32px)",
          transform: "translate(35%, -35%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
          filter: "blur(28px)",
          transform: "translate(-35%, 35%)",
        }}
      />

      <div className="relative flex flex-col gap-7">

        {/* Research areas */}
        <section aria-label="Research areas">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <h3 className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${isDark ? "text-white/55" : "text-slate-500"}`}>
              Research Areas
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {RESEARCH_AREAS.map((area) => (
              <motion.span
                key={area}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.18 }}
                className="px-3 py-1.5 text-[12px] font-medium text-cyan-400 rounded-lg border cursor-default select-none"
                style={{
                  backgroundColor: "rgba(6,182,212,0.07)",
                  borderColor: "rgba(6,182,212,0.18)",
                }}
              >
                {area}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(6,182,212,0.15), transparent)",
          }}
        />

        {/* Stack highlights */}
        <section aria-label="Stack highlights">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
            <h3 className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${isDark ? "text-white/55" : "text-slate-600"}`}>
              Stack Highlights
            </h3>
          </div>
          <ul className="flex flex-col gap-3.5">
            {HIGHLIGHTS.map((h) => (
              <li key={h.label} className="flex items-start gap-2.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <p className={`text-[10.5px] tracking-[0.15em] uppercase font-mono mb-0.5 ${isDark ? "text-white/30" : "text-slate-500"}`}>
                    {h.label}
                  </p>
                  <p className={`text-[13.5px] leading-snug ${isDark ? "text-white/60" : "text-slate-600"}`}>
                    {h.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(6,182,212,0.15), transparent)",
          }}
        />

        {/* Currently status */}
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border shrink-0"
            style={{
              backgroundColor: "rgba(6,182,212,0.07)",
              borderColor: "rgba(6,182,212,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 8px rgba(6,182,212,1)" }}
            />
            <span className="text-[11px] font-mono tracking-wide text-cyan-400">
              Currently
            </span>
          </span>
          <p className={`text-[13px] leading-snug ${isDark ? "text-white/40" : "text-slate-500"}`}>
            Researching{" "}
            <span className={isDark ? "text-white/60" : "text-slate-600"}>multimodal AI</span> and building
            production LLM systems
          </p>
        </div>
      </div>
    </div>
  );
}
