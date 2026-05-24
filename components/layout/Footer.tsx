"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  GitBranch,
  ExternalLink,
  Mail,
  FileText,
  ArrowUpRight,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */

interface Social {
  label: string;
  href:  string;
  icon:  LucideIcon;
}

/* ─── Constants ─────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const scrollFadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-40px" },
  transition:  { duration: 0.65, delay, ease: EASE_OUT },
});

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

const SOCIALS: Social[] = [
  {
    label: "GitHub",
    href:  "https://github.com/HBOSS01",
    icon:  GitBranch,
  },
  {
    label: "LinkedIn",
    href:  "https://linkedin.com/in/md-fatin-hasnat-patwary-77b2a8318/",
    icon:  ExternalLink,
  },
  {
    label: "Email",
    href:  "mailto:ahnaf00hasan@gmail.com",
    icon:  Mail,
  },
];

/* ─── Footer ─────────────────────────────────────────────── */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      aria-label="Site footer"
    >
      {/* ── Top glowing divider ───────────────────────── */}
      <div className="relative h-px w-full overflow-visible">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.55) 25%, rgba(56,189,248,0.8) 50%, rgba(6,182,212,0.55) 75%, transparent 100%)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width:      "700px",
            height:     "120px",
            background: "radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, transparent 70%)",
            filter:     "blur(22px)",
          }}
        />
      </div>

      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width:      "900px",
          height:     "350px",
          background: "radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 65%)",
          filter:     "blur(48px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Main grid ─────────────────────────────────── */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">

          {/* LEFT: Brand */}
          <motion.div {...scrollFadeUp(0)} className="flex flex-col gap-5">

            {/* Logo + name */}
            <div className="flex items-center gap-3.5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 select-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.14) 0%, rgba(56,189,248,0.08) 100%)",
                  border:    "1.5px solid rgba(6,182,212,0.26)",
                  boxShadow: "0 0 20px rgba(6,182,212,0.13), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="text-[11px] font-bold tracking-wider text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #22d3ee 0%, #38bdf8 100%)",
                  }}
                >
                  MFH
                </span>
              </div>

              <div>
                <p className="text-[14px] font-semibold text-white/75 leading-none">
                  Md Fatin Hasnat
                </p>
                <p className="text-[10.5px] text-white/30 font-mono tracking-wider mt-1">
                  AI Engineer & Researcher
                </p>
              </div>
            </div>

            <p className="text-[13px] text-white/28 leading-relaxed max-w-[230px]">
              Building intelligent systems at the intersection of research and production.
            </p>

            {/* Availability pulse */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border w-fit"
              style={{
                backgroundColor: "rgba(6,182,212,0.06)",
                borderColor:     "rgba(6,182,212,0.16)",
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"
                animate={{ scale: [1, 1.9, 1], opacity: [1, 0.35, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 6px rgba(6,182,212,0.9)" }}
              />
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wide">
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* CENTER: Navigation */}
          <motion.nav
            {...scrollFadeUp(0.1)}
            aria-label="Footer navigation"
            className="md:flex md:justify-center"
          >
            <div className="flex flex-col">
              <p className="text-[9.5px] font-mono text-white/22 tracking-[0.16em] uppercase mb-4">
                Navigation
              </p>
              <ul className="flex flex-col gap-0.5" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink href={link.href}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>

          {/* RIGHT: Socials + Resume */}
          <motion.div
            {...scrollFadeUp(0.2)}
            className="flex flex-col gap-5 md:items-end"
          >
            <div>
              <p className="text-[9.5px] font-mono text-white/22 tracking-[0.16em] uppercase mb-4 md:text-right">
                Connect
              </p>
              <div className="flex items-center gap-2.5">
                {SOCIALS.map((s) => (
                  <SocialButton key={s.label} social={s} />
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <motion.a
              href="#"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-medium border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(56,189,248,0.06) 100%)",
                borderColor:          "rgba(6,182,212,0.26)",
                color:                "rgba(6,182,212,0.85)",
                backdropFilter:       "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              aria-label="View resume"
            >
              <FileText className="w-3.5 h-3.5" />
              View Resume
              <ArrowUpRight className="w-3 h-3 opacity-55" />
            </motion.a>
          </motion.div>
        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
          }}
        />

        <motion.div
          {...scrollFadeUp(0.28)}
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-[11px] font-mono text-white/20">
            &copy; {year} Md Fatin Hasnat Patwary. All rights reserved.
          </p>
          <p className="text-[11px] font-mono text-white/16">
            Built with{" "}
            <span className="text-white/30">Next.js</span>
            {" & "}
            <span className="text-white/30">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

/* ─── Nav link ───────────────────────────────────────────── */

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 3 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className="group flex items-center gap-2 py-1.5 text-[13px] text-white/35 hover:text-white/65 transition-colors duration-200"
    >
      <span
        className="w-0 group-hover:w-1.5 h-px rounded-full shrink-0 transition-all duration-200"
        style={{
          backgroundColor: "rgba(6,182,212,0.9)",
          boxShadow:       "0 0 4px rgba(6,182,212,0.8)",
        }}
      />
      {children}
    </motion.a>
  );
}

/* ─── Social button ──────────────────────────────────────── */

function SocialButton({ social }: { social: Social }) {
  const Icon = social.icon;
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y:               -3,
        scale:           1.1,
        backgroundColor: "rgba(6,182,212,0.1)",
        borderColor:     "rgba(6,182,212,0.28)",
        boxShadow:       "0 0 18px rgba(6,182,212,0.22)",
      }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="w-9 h-9 rounded-xl flex items-center justify-center border"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        borderColor:     "rgba(255,255,255,0.08)",
      }}
      aria-label={social.label}
    >
      <Icon className="w-4 h-4 text-white/45" />
    </motion.a>
  );
}
