"use client";

import type { LucideIcon } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Globe,
  Database,
  Terminal,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */

type Level = "expert" | "advanced" | "intermediate" | "familiar";

interface Skill {
  name: string;
  level: Level;
}

interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  rgb: readonly [number, number, number];
  skills: Skill[];
}

/* ─── Constants ─────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const LEVEL_PCT: Record<Level, number> = {
  expert:       100,
  advanced:     75,
  intermediate: 50,
  familiar:     25,
};

const CATEGORIES: Category[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code2,
    rgb: [6, 182, 212],
    skills: [
      { name: "Python",     level: "expert"       },
      { name: "C++",        level: "advanced"     },
      { name: "Java",       level: "intermediate" },
      { name: "JavaScript", level: "advanced"     },
      { name: "TypeScript", level: "advanced"     },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    rgb: [129, 140, 248],
    skills: [
      { name: "PyTorch",         level: "expert"   },
      { name: "TensorFlow",      level: "advanced" },
      { name: "Scikit-learn",    level: "advanced" },
      { name: "NLP",             level: "expert"   },
      { name: "Computer Vision", level: "advanced" },
      { name: "Deep Learning",   level: "expert"   },
      { name: "LLMs",            level: "expert"   },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Globe,
    rgb: [56, 189, 248],
    skills: [
      { name: "React",         level: "advanced"     },
      { name: "Next.js",       level: "advanced"     },
      { name: "Tailwind CSS",  level: "advanced"     },
      { name: "Framer Motion", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: Database,
    rgb: [45, 212, 191],
    skills: [
      { name: "Node.js",  level: "intermediate" },
      { name: "Firebase", level: "intermediate" },
      { name: "MySQL",    level: "intermediate" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: Terminal,
    rgb: [148, 163, 184],
    skills: [
      { name: "Git",          level: "expert"   },
      { name: "GitHub",       level: "expert"   },
      { name: "VS Code",      level: "expert"   },
      { name: "Linux",        level: "advanced" },
      { name: "Google Colab", level: "advanced" },
    ],
  },
];

/* ─── Motion helpers ─────────────────────────────────────── */

const scrollFadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-80px" },
  transition:  { duration: 0.7, delay, ease: EASE_OUT },
});

/* ─── Section ───────────────────────────────────────────── */

export default function Skills() {
  const isDark = useIsDark();
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Skills"
    >
      {/* Background accents */}
      <div
        className="absolute top-1/3 right-0 pointer-events-none"
        style={{
          width: "620px",
          height: "620px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 65%)",
          filter: "blur(52px)",
          transform: "translateX(42%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-0 pointer-events-none"
        style={{
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)",
          filter: "blur(52px)",
          transform: "translateX(-42%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Heading ────────────────────────────────────── */}
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
            Technical Expertise
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
            <span className={isDark ? "text-white" : "text-[#050F1E]"}}>My </span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: isDark
                  ? "linear-gradient(100deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)"
                  : "linear-gradient(100deg, #0891b2 0%, #0ea5e9 50%, #6366f1 100%)",
              }}
            >
              Skills
            </span>
          </h2>

          <div
            className="mt-4 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,182,212,0.8), transparent)",
            }}
          />

          <p className={`mt-5 text-[14.5px] max-w-lg leading-relaxed ${isDark ? "text-white/38" : "text-[#475569]"}`}>
            A curated set of technologies I use to design, build, and ship
            intelligent AI systems — from research to production.
          </p>
        </motion.div>

        {/* ── Category grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {CATEGORIES.map((cat, i) => (
            <motion.div key={cat.id} {...scrollFadeUp(0.1 + i * 0.1)}>
              <CategoryCard category={cat} />
            </motion.div>
          ))}
        </div>

        {/* ── Proficiency legend ──────────────────────────── */}
        <motion.div
          {...scrollFadeUp(0.65)}
          className="mt-12 flex items-center justify-center gap-7 flex-wrap"
          aria-label="Proficiency level guide"
        >
          {(
            [
              { label: "Familiar",     pct: 25  },
              { label: "Intermediate", pct: 50  },
              { label: "Advanced",     pct: 75  },
              { label: "Expert",       pct: 100 },
            ] as const
          ).map(({ label, pct }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div
                className="relative h-1.5 w-12 rounded-full overflow-hidden"
                style={{ backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.08)" }}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width:      `${pct}%`,
                    background: isDark
                      ? "rgba(6,182,212,0.55)"
                      : "linear-gradient(90deg, #0891b2, #0ea5e9)",
                  }}
                />
              </div>
              <span className={`text-[11px] font-mono tracking-wide ${isDark ? "text-white/28" : "text-[#64748B]"}`}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Category card ─────────────────────────────────────── */

function CategoryCard({ category }: { category: Category }) {
  const isDark = useIsDark();
  const Icon = category.icon;

  const accent = (a: number) =>
    `rgba(${category.rgb.join(",")},${a})`;

  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.015 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="relative h-full p-6 rounded-2xl border overflow-hidden cursor-default"
      style={{
        backgroundColor:      isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.95)",
        borderColor:           isDark ? accent(0.14) : accent(0.22),
        backdropFilter:       "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow:             isDark
          ? "none"
          : `0 1px 0 ${accent(0.18)}, 0 10px 40px rgba(15,23,42,0.09)`,
      }}
    >
      {/* Corner ambient glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width:     "180px",
          height:    "180px",
          background: `radial-gradient(circle, ${accent(isDark ? 0.18 : 0.22)} 0%, transparent 70%)`,
          filter:    "blur(28px)",
          transform: "translate(40%, -40%)",
        }}
      />

      <div className="relative flex flex-col gap-5">

        {/* Header */}
        <div className="flex items-center gap-3.5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{
              backgroundColor: isDark ? accent(0.12) : accent(0.10),
              border:          isDark ? "none" : `1.5px solid ${accent(0.25)}`,
            }}
          >
            <Icon
              className="w-5 h-5"
              style={{ color: isDark ? accent(1) : accent(0.9) }}
            />
          </div>
          <div className="min-w-0">
            <h3 className={`text-[14px] font-bold leading-snug truncate ${isDark ? "text-white/75" : "text-[#0F172A]"}`}>
              {category.title}
            </h3>
            <p className={`text-[10.5px] font-mono mt-0.5 ${isDark ? "text-white/28" : "text-[#64748B]"}`}>
              {category.skills.length} technologies
            </p>
          </div>
        </div>

        {/* Accent divider */}
        <div
          className="h-px w-full"
          style={{
            background: isDark
              ? `linear-gradient(90deg, ${accent(0.3)}, transparent)`
              : `linear-gradient(90deg, ${accent(0.5)}, transparent)`,
          }}
        />

        {/* Skill rows */}
        <ul className="flex flex-col gap-4" role="list">
          {category.skills.map((skill) => (
            <SkillRow
              key={skill.name}
              skill={skill}
              accent={accent}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ─── Skill row with animated bar ───────────────────────── */

function SkillRow({
  skill,
  accent,
}: {
  skill: Skill;
  accent: (a: number) => string;
}) {
  const isDark = useIsDark();
  return (
    <li className="group flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className={`text-[13px] font-medium leading-none ${isDark ? "text-white/55" : "text-[#1E293B]"}`}>
          {skill.name}
        </span>
        <span
          className={`text-[9.5px] font-mono tracking-wider uppercase shrink-0 transition-opacity duration-200 ${
            isDark
              ? "text-white/20 opacity-0 group-hover:opacity-100"
              : "text-[#64748B] opacity-60 group-hover:opacity-100"
          }`}
          aria-label={`Proficiency: ${skill.level}`}
        >
          {skill.level}
        </span>
      </div>

      {/* Animated progress bar — 3px tall, gradient fill */}
      <div
        className="relative h-[3px] w-full rounded-full overflow-hidden"
        style={{
          backgroundColor: isDark
            ? "rgba(255,255,255,0.06)"
            : "rgba(15,23,42,0.07)",
        }}
        role="meter"
        aria-valuenow={LEVEL_PCT[skill.level]}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name}: ${skill.level}`}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${LEVEL_PCT[skill.level]}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.15, ease: EASE_OUT }}
          style={{
            background:  isDark
              ? accent(0.75)
              : `linear-gradient(90deg, ${accent(0.9)}, ${accent(0.65)})`,
            boxShadow:  isDark ? `0 0 6px 1px ${accent(0.5)}` : `0 0 8px 1px ${accent(0.4)}`,
          }}
        />
      </div>
    </li>
  );
}
