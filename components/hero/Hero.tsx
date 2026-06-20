"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsDark } from "@/hooks/useIsDark";
import {
  ArrowRight,
  Mail,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import HeroBackground from "./HeroBackground";

const TECH_TAGS = [
  "Machine Learning",
  "Large Language Models",
  "NLP",
  "Computer Vision",
  "Python",
  "PyTorch",
] as const;

const EASE_OUT: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: EASE_OUT,
  },
});

export default function Hero() {
  const isDark = useIsDark();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      80;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
      aria-label="Introduction"
    >
      {/* Local Ambient Layer */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-32 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">

            {/* Badge */}
            <motion.div
              {...fadeUp(0.1)}
              className="flex justify-center lg:justify-start"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider text-cyan-400 border select-none backdrop-blur-xl"
                style={{
                  backgroundColor: "rgba(6,182,212,0.07)",
                  borderColor: "rgba(6,182,212,0.22)",
                  boxShadow: "0 0 24px rgba(6,182,212,0.08)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"
                  style={{
                    boxShadow: "0 0 8px rgba(6,182,212,1)",
                  }}
                />

                Open to Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.18)}
              className="text-5xl sm:text-6xl lg:text-[76px] font-black leading-[0.96] tracking-tight"
            >
              <span className={isDark ? "text-white block" : "text-[#050F1E] block"}>
                Md Fatin Hasnat
              </span>

              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: isDark
                    ? "linear-gradient(100deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)"
                    : "linear-gradient(100deg, #0891b2 0%, #0ea5e9 50%, #6366f1 100%)",
                }}
              >
                Patwary
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.28)}
              className={`text-xl sm:text-2xl tracking-[0.02em] ${isDark ? "text-white/60 font-light" : "text-[#334155] font-medium"}`}
            >
              AI Engineer

              <span
                className="inline-flex mx-2.5 w-1.5 h-1.5 rounded-full align-middle"
                style={{
                  backgroundColor: isDark ? "#22d3ee" : "#0891b2",
                  boxShadow: isDark ? "0 0 8px rgba(6,182,212,0.9)" : "0 0 8px rgba(8,145,178,0.7)",
                }}
              />

              Researcher
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeUp(0.37)}
              className={`text-[15.5px] leading-[1.9] max-w-[560px] mx-auto lg:mx-0 ${isDark ? "text-white/45" : "text-[#475569]"}`}
            >
              Building intelligent systems at the
              intersection of{" "}
              <span className={isDark ? "text-white/75" : "text-[#0F172A] font-semibold"}>
                machine learning
              </span>
              ,{" "}
              <span className={isDark ? "text-white/75" : "text-[#0F172A] font-semibold"}>
                NLP
              </span>
              , and impactful innovation.

              I design and deploy production-grade
              AI solutions — from large language
              model pipelines to computer vision
              research — with a relentless focus on
              precision, scalability, and modern AI
              engineering.
            </motion.p>

            {/* Tech Tags */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 text-[10px] font-mono tracking-[0.16em] rounded-lg border backdrop-blur-xl ${isDark ? "text-white/35" : "text-slate-500"}`}
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(255,255,255,0.75)",
                    borderColor: isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(100,116,139,0.22)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              {...fadeUp(0.53)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2"
            >
              <PrimaryButton
                onClick={() =>
                  scrollTo("projects")
                }
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </PrimaryButton>

              <SecondaryButton
                onClick={() =>
                  scrollTo("contact")
                }
                isDark={isDark}
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </SecondaryButton>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.22,
              ease: EASE_OUT,
            }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <ProfileImageCard isDark={isDark} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.9,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className={`text-[9px] font-mono tracking-[0.25em] uppercase ${isDark ? "text-white/20" : "text-slate-400"}`}>
          Scroll
        </span>

        <motion.div
          animate={{ y: 6 }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <ChevronDown className={`w-4 h-4 ${isDark ? "text-white/20" : "text-slate-400"}`} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* PROFILE IMAGE */

function ProfileImageCard({ isDark }: { isDark: boolean }) {
  return (
    <div className="relative flex items-center justify-center w-72 h-72 sm:w-[430px] sm:h-[430px]">

      {/* Main Glow — stronger in light mode */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(8,145,178,0.28) 0%, rgba(6,182,212,0.10) 45%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full"
        style={{
          border: isDark ? "1px dashed rgba(6,182,212,0.18)" : "1px dashed rgba(8,145,178,0.32)",
          willChange: "transform",
        }}
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-8 right-8 bottom-8 left-8 rounded-full"
        style={{
          border: isDark ? "1px dashed rgba(129,140,248,0.16)" : "1px dashed rgba(99,102,241,0.28)",
          willChange: "transform",
        }}
      />

      {/* Image Floating */}
      <motion.div
        animate={{ y: 12 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="relative z-10"
        style={{ willChange: "transform" }}
      >

        {/* Image */}
        <div
          className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden"
          style={{
            border: isDark
              ? "2px solid rgba(6,182,212,0.35)"
              : "3px solid rgba(8,145,178,0.65)",
            boxShadow: isDark
              ? "0 0 60px rgba(6,182,212,0.2)"
              : "0 0 0 6px rgba(8,145,178,0.08), 0 8px 48px rgba(8,145,178,0.25)",
          }}
        >
          <Image
            src="/profile.jpeg"
            alt="Md Fatin Hasnat Patwary"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* INNER BADGE */}
        <div
          className="absolute top-10 -left-12 px-4 py-2 rounded-xl text-xs border backdrop-blur-xl"
          style={{
            backgroundColor: isDark
              ? "rgba(2,12,24,0.9)"
              : "rgba(255,255,255,0.96)",
            borderColor: isDark
              ? "rgba(6,182,212,0.22)"
              : "rgba(8,145,178,0.35)",
            boxShadow: isDark
              ? "0 0 30px rgba(6,182,212,0.12)"
              : "0 4px 20px rgba(15,23,42,0.10)",
          }}
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Sparkles className={`w-3.5 h-3.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />

            <span className={`font-semibold tracking-wide ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>
              AI Engineer
            </span>
          </div>
        </div>

        {/* OUTER BADGE */}
        <div
          className="absolute bottom-8 -right-20 px-4 py-2 rounded-xl text-xs border backdrop-blur-xl"
          style={{
            backgroundColor: isDark
              ? "rgba(2,12,24,0.9)"
              : "rgba(255,255,255,0.96)",
            borderColor: isDark
              ? "rgba(129,140,248,0.22)"
              : "rgba(99,102,241,0.35)",
            boxShadow: isDark
              ? "0 0 30px rgba(129,140,248,0.12)"
              : "0 4px 20px rgba(15,23,42,0.10)",
          }}
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Sparkles className={`w-3.5 h-3.5 ${isDark ? "text-indigo-400" : "text-indigo-500"}`} />

            <span className={`font-semibold tracking-wide ${isDark ? "text-indigo-300" : "text-indigo-600"}`}>
              Researcher
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* BUTTONS */

function PrimaryButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  const isDark = useIsDark();
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[13.5px] font-semibold tracking-wide text-white"
      style={{
        background: isDark
          ? "#22d3ee"
          : "linear-gradient(135deg, #0891b2 0%, #0ea5e9 100%)",
        color: isDark ? "#020c18" : "#ffffff",
        boxShadow: isDark
          ? "0 0 34px rgba(34,211,238,0.34)"
          : "0 4px 20px rgba(8,145,178,0.40), 0 1px 4px rgba(8,145,178,0.25)",
      }}
    >
      {children}
    </motion.button>
  );
}

function SecondaryButton({
  children,
  onClick,
  isDark,
}: {
  children: ReactNode;
  onClick?: () => void;
  isDark: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[13.5px] font-medium tracking-wide border backdrop-blur-xl ${isDark ? "text-white/65" : "text-slate-700"}`}
      style={{
        backgroundColor: isDark
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.85)",
        borderColor: isDark
          ? "rgba(255,255,255,0.08)"
          : "rgba(100,116,139,0.35)",
        boxShadow: isDark ? "none" : "0 2px 12px rgba(15,23,42,0.06)",
      }}
    >
      {children}
    </motion.button>
  );
}