"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { GitBranch, ExternalLink, Star, Brain } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  category: string;
  accentRgb: readonly [number, number, number];
}

type ActionButtonProps =
  | { href: string; variant: "ghost"; accent?: undefined; children: ReactNode }
  | { href: string; variant: "accent"; accent: (a: number) => string; children: ReactNode };

/* ─── Constants ─────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const scrollFadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: "-80px" },
  transition:  { duration: 0.7, delay, ease: EASE_OUT },
});

const PROJECTS: Project[] = [
  {
    id: "pancreatic-cancer",
    title: "Pancreatic Cancer Detection AI",
    description:
      "Deep learning system for early-stage pancreatic cancer detection from CT scan imagery. Custom CNN architectures with transfer learning achieve 94%+ diagnostic accuracy — reducing radiologist workload and enabling earlier clinical intervention.",
    tech: ["PyTorch", "Python", "CNN", "Transfer Learning", "Medical Imaging", "DICOM"],
    github: "#",
    demo: "#",
    featured: true,
    category: "AI · Medical Imaging",
    accentRgb: [6, 182, 212],
  },
  {
    id: "ai-research",
    title: "AI Research Projects",
    description:
      "Suite of NLP and deep learning research implementations — transformer architectures, attention mechanisms, and fine-tuned LLMs applied to downstream language tasks.",
    tech: ["PyTorch", "HuggingFace", "Transformers", "BERT", "Python"],
    github: "#",
    demo: "#",
    featured: false,
    category: "Research · NLP",
    accentRgb: [129, 140, 248],
  },
  {
    id: "lms",
    title: "Learning Management System",
    description:
      "Full-stack LMS platform with course management, live student tracking, and real-time analytics built for educational institutions at scale.",
    tech: ["React", "Node.js", "Firebase", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: false,
    category: "Full Stack · Web",
    accentRgb: [56, 189, 248],
  },
  {
    id: "yield-management",
    title: "Yield Management System",
    description:
      "Intelligent revenue optimization engine for hospitality — demand forecasting and dynamic pricing algorithms that maximize occupancy and revenue per room.",
    tech: ["Python", "Machine Learning", "Flask", "SQL", "Analytics"],
    github: "#",
    demo: "#",
    featured: false,
    category: "ML · Analytics",
    accentRgb: [45, 212, 191],
  },
  {
    id: "frontend-projects",
    title: "Mobile & Frontend Projects",
    description:
      "Collection of responsive web applications and polished UI showcasing modern frontend development with production-grade animations and interaction design.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    featured: false,
    category: "Frontend · UI/UX",
    accentRgb: [148, 163, 184],
  },
];

/* ─── Section ───────────────────────────────────────────── */

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest     = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Projects"
    >
      {/* Ambient accents */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width:        "800px",
          height:       "800px",
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)",
          filter:       "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width:        "550px",
          height:       "550px",
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 65%)",
          filter:       "blur(56px)",
          transform:    "translate(30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Heading ────────────────────────────────── */}
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
            Selected Work
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-white">Featured </span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
              }}
            >
              Projects
            </span>
          </h2>

          <div
            className="mt-4 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,182,212,0.8), transparent)",
            }}
          />

          <p className="mt-5 text-[14.5px] text-white/38 max-w-lg leading-relaxed">
            A curated selection of AI research, full-stack applications, and
            engineering projects — from lab to production.
          </p>
        </motion.div>

        {/* ── Featured card ────────────────────────────── */}
        <motion.div {...scrollFadeUp(0.1)} className="mb-8">
          <FeaturedCard project={featured} />
        </motion.div>

        {/* ── Project grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <motion.div key={project.id} {...scrollFadeUp(0.18 + i * 0.09)}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Card ─────────────────────────────────────── */

function FeaturedCard({ project }: { project: Project }) {
  const accent = (a: number) => `rgba(${project.accentRgb.join(",")},${a})`;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="relative rounded-2xl border overflow-hidden"
      style={{
        backgroundColor:      "rgba(255,255,255,0.02)",
        borderColor:           accent(0.2),
        backdropFilter:       "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Left: Content */}
        <div className="relative p-8 sm:p-10 flex flex-col gap-6">
          {/* Corner glow */}
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width:     "300px",
              height:    "300px",
              background: `radial-gradient(circle, ${accent(0.08)} 0%, transparent 70%)`,
              filter:    "blur(32px)",
              transform: "translate(-40%, -40%)",
            }}
          />

          <div className="relative flex flex-col gap-5">
            {/* Meta row */}
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest uppercase"
                style={{
                  backgroundColor: accent(0.1),
                  color:           accent(1),
                  border:          `1px solid ${accent(0.25)}`,
                }}
              >
                <Star className="w-2.5 h-2.5" />
                Featured
              </span>
              <span className="text-[11px] text-white/25 font-mono tracking-wide">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {project.title}
            </h3>

            <p className="text-[14px] text-white/45 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-mono text-white/40 rounded-md border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor:     "rgba(255,255,255,0.08)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ActionButton href={project.github} variant="ghost">
              <GitBranch className="w-3.5 h-3.5" />
              GitHub
            </ActionButton>
            <ActionButton href={project.demo} variant="accent" accent={accent}>
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </ActionButton>
          </div>
        </div>

        {/* Right: Visual panel */}
        <div
          className="hidden lg:block relative overflow-hidden"
          style={{ borderLeft: `1px solid ${accent(0.1)}` }}
        >
          <ProjectVisual accent={accent} tech={project.tech} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Featured Card Visual Panel ────────────────────────── */

function ProjectVisual({
  accent,
  tech,
}: {
  accent: (a: number) => string;
  tech: string[];
}) {
  return (
    <div
      className="relative w-full h-full min-h-[340px] flex items-center justify-center"
      style={{ backgroundColor: "rgba(2,12,24,0.9)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Central radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle 200px at 50% 50%, ${accent(0.13)}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-5">
        {/* Center icon badge */}
        <div
          className="w-[76px] h-[76px] rounded-2xl flex items-center justify-center"
          style={{
            backgroundColor: accent(0.07),
            border:          `1px solid ${accent(0.22)}`,
            boxShadow:       `0 0 48px ${accent(0.15)}, inset 0 0 24px ${accent(0.05)}`,
          }}
        >
          <Brain
            className="w-8 h-8"
            style={{ color: accent(1) }}
          />
        </div>

        {/* Floating tech chips */}
        <div className="flex flex-col items-center gap-2">
          {tech.slice(0, 3).map((t, i) => (
            <motion.span
              key={t}
              className="px-3.5 py-1.5 rounded-lg text-[10.5px] font-mono"
              style={{
                backgroundColor: "rgba(2,12,24,0.92)",
                border:          `1px solid ${accent(0.18)}`,
                color:           accent(0.85),
              }}
              animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
              transition={{
                duration: 2.8 + i * 0.7,
                repeat:   Infinity,
                ease:     "easeInOut",
                delay:    i * 0.8,
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Left edge fade */}
      <div
        className="absolute inset-y-0 left-0 w-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(2,12,24,0.75), transparent)",
        }}
      />
    </div>
  );
}

/* ─── Grid Project Card ──────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const accent = (a: number) => `rgba(${project.accentRgb.join(",")},${a})`;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="relative h-full flex flex-col rounded-2xl border overflow-hidden cursor-default"
      style={{
        backgroundColor:      "rgba(255,255,255,0.02)",
        borderColor:           accent(0.14),
        backdropFilter:       "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Card header / image area */}
      <div
        className="relative h-[138px] overflow-hidden flex items-center justify-center"
        style={{
          background:   `linear-gradient(140deg, rgba(2,12,24,0.95) 0%, ${accent(0.09)} 55%, rgba(2,12,24,0.95) 100%)`,
          borderBottom: `1px solid ${accent(0.1)}`,
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle 90px at 50% 65%, ${accent(0.17)}, transparent)`,
          }}
        />

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width:     "130px",
            height:    "130px",
            background: `radial-gradient(circle, ${accent(0.14)} 0%, transparent 70%)`,
            filter:    "blur(20px)",
            transform: "translate(35%, -35%)",
          }}
        />

        {/* Category label */}
        <div className="relative flex flex-col items-center gap-2">
          <span
            className="text-[10px] font-mono tracking-[0.18em] uppercase"
            style={{ color: accent(0.7) }}
          >
            {project.category}
          </span>
          <div
            className="h-px w-10"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent(0.5)}, transparent)`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-[15px] font-semibold text-white/80 leading-snug">
            {project.title}
          </h3>
          <p className="text-[12.5px] text-white/38 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono text-white/35 rounded border"
              style={{
                backgroundColor: "rgba(255,255,255,0.025)",
                borderColor:     "rgba(255,255,255,0.07)",
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span
              className="px-2 py-0.5 text-[10px] font-mono rounded border"
              style={{
                color:           accent(0.75),
                backgroundColor: accent(0.06),
                borderColor:     accent(0.18),
              }}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div
          className="flex items-center gap-2.5 pt-3 border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <ActionButton href={project.github} variant="ghost">
            <GitBranch className="w-3 h-3" />
            GitHub
          </ActionButton>
          <ActionButton href={project.demo} variant="accent" accent={accent}>
            <ExternalLink className="w-3 h-3" />
            Demo
          </ActionButton>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Action Button ──────────────────────────────────────── */

function ActionButton({ href, variant, accent, children }: ActionButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-medium transition-all duration-200 hover:opacity-80"
      style={
        variant === "accent"
          ? {
              backgroundColor: accent(0.1),
              color:           accent(1),
              border:          `1px solid ${accent(0.22)}`,
            }
          : {
              backgroundColor: "rgba(255,255,255,0.04)",
              color:           "rgba(255,255,255,0.5)",
              border:          "1px solid rgba(255,255,255,0.09)",
            }
      }
    >
      {children}
    </a>
  );
}
