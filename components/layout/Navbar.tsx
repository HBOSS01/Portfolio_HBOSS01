"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useIsDark } from "@/hooks/useIsDark";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = useIsDark();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        }
      );

      obs.observe(el);

      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);

    requestAnimationFrame(() => {
      const el = document.getElementById(id);

      if (!el) return;

      const top = el.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-cyan-500/15 shadow-[0_8px_40px_rgba(6,182,212,0.04)]"
            : ""
        )}
        style={{
          backgroundColor: scrolled
            ? isDark
              ? "rgba(2,12,24,0.82)"
              : "rgba(255,255,255,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "blur(4px)",
          WebkitBackdropFilter: scrolled
            ? "blur(28px) saturate(180%)"
            : "blur(4px)",
          borderBottom: scrolled ? (isDark ? "1px solid rgba(6,182,212,0.12)" : "1px solid rgba(100,116,139,0.15)") : "none",
          boxShadow: scrolled && !isDark ? "0 8px 32px rgba(15,23,42,0.06)" : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* LOGO */}
            <motion.button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-3 rounded-lg focus:outline-none"
            >
              <div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                style={{
                  backgroundColor: isDark ? "rgba(6,182,212,0.08)" : "rgba(8,145,178,0.08)",
                  borderColor:     isDark ? "rgba(6,182,212,0.25)" : "rgba(8,145,178,0.30)",
                  boxShadow:       isDark ? "none" : "0 2px 8px rgba(8,145,178,0.15)",
                }}
              >
                <span className={`font-mono font-bold text-sm tracking-wider z-10 ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>
                  MDF
                </span>

                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgba(6,182,212,0.1)",
                  }}
                />
              </div>

              <div className="hidden sm:flex flex-col leading-none gap-1">
                <span className={cn("text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-300", isDark ? "text-white/75 group-hover:text-white" : "text-[#1E293B] group-hover:text-black")}>
                  MD F HASNAT
                </span>

                <span className={cn("text-[10px] font-mono tracking-[0.22em] uppercase font-medium", isDark ? "text-white/35" : "text-[#64748B]")}>
                  AI Engineer
                </span>
              </div>
            </motion.button>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map(({ id, label }) => (
                <NavLink
                  key={id}
                  label={label}
                  isActive={activeSection === id}
                  onClick={() => scrollTo(id)}
                />
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* CTA BUTTON */}
              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn("hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] tracking-wide border transition-all duration-300", isDark ? "text-cyan-400 font-medium" : "text-white font-semibold")}
                style={{
                  background:  isDark ? "rgba(6,182,212,0.08)" : "linear-gradient(135deg, #0891b2 0%, #0ea5e9 100%)",
                  borderColor: isDark ? "rgba(6,182,212,0.3)"  : "rgba(8,145,178,0.40)",
                  boxShadow:   isDark ? "none"                 : "0 4px 14px rgba(8,145,178,0.30), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>

              {/* THEME TOGGLE */}
              <ThemeToggle />

              {/* MOBILE MENU BUTTON */}
              <motion.button
                onClick={() => setMenuOpen((v) => !v)}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "md:hidden w-10 h-10 flex items-center justify-center rounded-lg border",
                  isDark ? "text-white/60" : "text-[#475569] bg-white"
                )}
                style={{
                  borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(100,116,139,0.25)",
                  boxShadow:   isDark ? "none" : "0 2px 8px rgba(15,23,42,0.05)",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? "x" : "menu"}
                    initial={{
                      opacity: 0,
                      rotate: menuOpen ? -90 : 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: menuOpen ? 90 : -90,
                    }}
                    transition={{ duration: 0.18 }}
                    className={
                      menuOpen
                        ? "text-cyan-400"
                        : isDark ? "text-white/60" : "text-slate-600"
                    }
                  >
                    {menuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>

          </div>
        </div>

        {/* GLOW LINE */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.4,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              exit={{
                opacity: 0,
                scaleX: 0.4,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background: isDark
                  ? "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.5) 40%, rgba(6,182,212,0.5) 60%, transparent 100%)"
                  : "linear-gradient(90deg, transparent 0%, rgba(8,145,178,0.5) 40%, rgba(8,145,178,0.5) 60%, transparent 100%)",
              }}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -16,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 md:hidden flex flex-col overflow-hidden"
            style={{
              backgroundColor: isDark ? "#020c18" : "#F5F7FB",
            }}
          >
            <div className="relative flex flex-col items-center justify-center flex-1 gap-2 px-8">

              {NAV_ITEMS.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.065 + 0.08,
                    duration: 0.45,
                  }}
                  onClick={() => scrollTo(id)}
                  className={cn(
                    "relative py-4 text-center text-[28px] font-extralight tracking-[0.06em] transition-colors duration-300",
                    activeSection === id
                      ? "text-cyan-400"
                      : isDark
                        ? "text-white/45 hover:text-white/85"
                        : "text-slate-400 hover:text-slate-800"
                  )}
                >
                  {label}
                </motion.button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const isDark = useIsDark();
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-3.5 py-2 text-[13.5px] tracking-wide rounded-lg group transition-colors duration-300 font-medium",
        isActive
          ? isDark ? "text-cyan-500" : "text-cyan-700 font-semibold"
          : isDark
            ? "text-white/45 hover:text-white/85"
            : "text-[#475569] hover:text-[#0F172A]"
      )}
    >
      <span className="relative z-10">
        {label}
      </span>

      {isActive && (
        <motion.span
          layoutId="desktop-active-bg"
          className="absolute inset-0 rounded-lg"
          style={{
            background: isDark ? "rgba(6,182,212,0.12)" : "rgba(8,145,178,0.12)",
            border:     isDark ? "none" : "1px solid rgba(8,145,178,0.18)",
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 32,
          }}
        />
      )}
    </button>
  );
}