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
              className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[0.98] tracking-tight"
            >
              <span className={isDark ? "text-white block" : "text-slate-900 block"}>
                Md Fatin Hasnat
              </span>

              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                }}
              >
                Patwary
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.28)}
              className={`text-lg sm:text-xl font-light tracking-[0.04em] ${isDark ? "text-white/60" : "text-slate-500"}`}
            >
              AI Engineer

              <span
                className="inline-flex mx-2.5 w-1.5 h-1.5 rounded-full bg-cyan-400 align-middle"
                style={{
                  boxShadow: "0 0 8px rgba(6,182,212,0.9)",
                }}
              />

              Researcher
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeUp(0.37)}
              className={`text-[15px] leading-[1.95] max-w-[560px] mx-auto lg:mx-0 ${isDark ? "text-white/45" : "text-slate-400"}`}
            >
              Building intelligent systems at the
              intersection of{" "}
              <span className={isDark ? "text-white/75" : "text-slate-600"}>
                machine learning
              </span>
              ,{" "}
              <span className={isDark ? "text-white/75" : "text-slate-600"}>
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
                  className={`px-3 py-1.5 text-[10px] font-mono tracking-[0.16em] rounded-lg border backdrop-blur-xl ${isDark ? "text-white/35" : "text-slate-400"}`}
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.04)",
                    borderColor: isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.08)",
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
        <span className={`text-[9px] font-mono tracking-[0.25em] uppercase ${isDark ? "text-white/20" : "text-slate-300"}`}>
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
          <ChevronDown className={`w-4 h-4 ${isDark ? "text-white/20" : "text-slate-300"}`} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* PROFILE IMAGE */

function ProfileImageCard({ isDark }: { isDark: boolean }) {
  return (
    <div className="relative flex items-center justify-center w-72 h-72 sm:w-[430px] sm:h-[430px]">

      {/* Main Glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%)",
          filter: "blur(42px)",
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
          border:
            "1px dashed rgba(6,182,212,0.18)",
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
          border:
            "1px dashed rgba(129,140,248,0.16)",
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
      >

        {/* Image */}
        <div
          className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden"
          style={{
            border:
              "2px solid rgba(6,182,212,0.35)",
            boxShadow:
              "0 0 60px rgba(6,182,212,0.2)",
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
              : "rgba(240,244,248,0.92)",
            borderColor:
              "rgba(6,182,212,0.22)",
            boxShadow:
              "0 0 30px rgba(6,182,212,0.12)",
          }}
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />

            <span className="text-cyan-400 font-medium tracking-wide">
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
              : "rgba(240,244,248,0.92)",
            borderColor:
              "rgba(129,140,248,0.22)",
            boxShadow:
              "0 0 30px rgba(129,140,248,0.12)",
          }}
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />

            <span className="text-indigo-300 font-medium tracking-wide">
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
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[13.5px] font-semibold tracking-wide text-[#020c18]"
      style={{
        backgroundColor: "#22d3ee",
        boxShadow:
          "0 0 34px rgba(34,211,238,0.34)",
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
      className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[13.5px] font-medium tracking-wide border backdrop-blur-xl ${isDark ? "text-white/65" : "text-slate-600"}`}
      style={{
        backgroundColor: isDark
          ? "rgba(255,255,255,0.04)"
          : "rgba(0,0,0,0.04)",
        borderColor: isDark
          ? "rgba(255,255,255,0.08)"
          : "rgba(0,0,0,0.10)",
      }}
    >
      {children}
    </motion.button>
  );
}