"use client";

import { useState } from "react";
import { useIsDark } from "@/hooks/useIsDark";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Globe,
  Send,
  Clock,
  CheckCircle,
  User,
  MessageSquare,
  AtSign,
  GitBranch,
  ExternalLink,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
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

const SOCIAL_LINKS: SocialLink[] = [
  {
    label:     "GitHub",
    href:      "https://github.com/HBOSS01",
    icon:      GitBranch,
    accentRgb: [6, 182, 212],
  },
  {
    label:     "LinkedIn",
    href:      "https://linkedin.com/in/md-fatin-hasnat-patwary-77b2a8318/",
    icon:      ExternalLink,
    accentRgb: [56, 189, 248],
  },
  {
    label:     "Email",
    href:      "mailto:mdf.hasnat@gmail.com",
    icon:      Mail,
    accentRgb: [129, 140, 248],
  },
  {
    label:     "Portfolio",
    href:      "#",
    icon:      Globe,
    accentRgb: [45, 212, 191],
  },
];

/* ─── Section ───────────────────────────────────────────── */

export default function Contact() {
  const isDark = useIsDark();
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Contact"
    >
      {/* Ambient accents */}
      <div
        className="absolute top-1/3 left-0 pointer-events-none"
        style={{
          width:        "700px",
          height:       "700px",
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)",
          filter:       "blur(60px)",
          transform:    "translateX(-45%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/3 pointer-events-none"
        style={{
          width:        "600px",
          height:       "600px",
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 65%)",
          filter:       "blur(56px)",
          transform:    "translateY(30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

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
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
            <span className={isDark ? "text-white" : "text-slate-900"}>Contact </span>
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

          <p className={`mt-5 text-[14.5px] max-w-lg leading-relaxed ${isDark ? "text-white/38" : "text-slate-400"}`}>
            Open to research collaborations, AI engineering roles, and
            interesting project conversations. Let&apos;s build something exceptional.
          </p>
        </motion.div>

        {/* ── Two-column layout ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* LEFT: Info + socials */}
          <div className="flex flex-col gap-8">

            {/* Availability badge */}
            <motion.div {...scrollFadeUp(0.1)}>
              <div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(6,182,212,0.04)",
                  borderColor:     "rgba(6,182,212,0.14)",
                }}
              >
                <div className="relative flex-shrink-0">
                  <span
                    className="block w-2.5 h-2.5 rounded-full bg-cyan-400"
                    style={{ boxShadow: "0 0 8px rgba(6,182,212,1)" }}
                  />
                  <motion.span
                    className="absolute inset-0 rounded-full bg-cyan-400"
                    animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div>
                  <p className={`text-[12px] font-medium ${isDark ? "text-white/65" : "text-slate-700"}`}>
                    Available for opportunities
                  </p>
                  <p className={`text-[10.5px] font-mono mt-0.5 ${isDark ? "text-white/30" : "text-slate-400"}`}>
                    Open to AI / ML roles & research
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div {...scrollFadeUp(0.15)} className="flex flex-col gap-3">
              <p className={`text-[15px] leading-[1.9] ${isDark ? "text-white/50" : "text-slate-500"}`}>
                I&apos;m{" "}
                <span className={`font-medium ${isDark ? "text-white/80" : "text-slate-800"}`}>
                  Md Fatin Hasnat Patwary
                </span>
                , an AI Engineer & Researcher passionate about building
                intelligent systems that matter. Whether it&apos;s a research
                collaboration, a challenging engineering role, or just an
                interesting idea —{" "}
                <span className={isDark ? "text-white/70" : "text-slate-700"}>I&apos;m always open to a conversation.</span>
              </p>
            </motion.div>

            {/* Quick info */}
            <motion.div {...scrollFadeUp(0.2)} className="flex flex-col gap-3">
              {[
                { icon: Mail,    text: "mdf.hasnat@gmail.com"  },
                { icon: Clock,   text: "Response within 24 hours" },
                { icon: Globe,   text: "Available globally · Remote"  },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(6,182,212,0.08)" }}
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className={`text-[13px] font-mono ${isDark ? "text-white/45" : "text-slate-500"}`}>
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              {...scrollFadeUp(0.24)}
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(6,182,212,0.2), transparent)",
              }}
            />

            {/* Social links */}
            <motion.div {...scrollFadeUp(0.28)}>
              <p className={`text-[11px] font-mono tracking-[0.16em] uppercase mb-4 ${isDark ? "text-white/28" : "text-slate-400"}`}>
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <SocialCard key={link.label} link={link} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <motion.div {...scrollFadeUp(0.14)}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Social card ────────────────────────────────────────── */

function SocialCard({ link }: { link: SocialLink }) {
  const isDark = useIsDark();
  const Icon   = link.icon;
  const accent = (a: number) => `rgba(${link.accentRgb.join(",")},${a})`;

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex items-center gap-3 p-3.5 rounded-xl border"
      style={{
        backgroundColor:      isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.7)",
        borderColor:           accent(0.16),
        backdropFilter:       "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: accent(0.1),
          boxShadow:       `0 0 12px ${accent(0.2)}`,
        }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: accent(1) }} />
      </div>
      <span className={`text-[12.5px] font-medium ${isDark ? "text-white/55" : "text-slate-600"}`}>
        {link.label}
      </span>
    </motion.a>
  );
}

/* ─── Contact form ───────────────────────────────────────── */

function ContactForm() {
  const isDark = useIsDark();
  const [form, setForm]       = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div
      className="relative p-7 sm:p-8 rounded-3xl border overflow-hidden"
      style={{
        backgroundColor:      isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
        borderColor:           "rgba(6,182,212,0.15)",
        backdropFilter:       "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Corner glows */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width:     "260px",
          height:    "260px",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter:    "blur(32px)",
          transform: "translate(35%, -35%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width:     "200px",
          height:    "200px",
          background: "radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)",
          filter:    "blur(28px)",
          transform: "translate(-35%, 35%)",
        }}
      />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="relative flex flex-col items-center justify-center gap-5 py-16 text-center"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "rgba(6,182,212,0.1)",
                border:          "1.5px solid rgba(6,182,212,0.35)",
                boxShadow:       "0 0 32px rgba(6,182,212,0.2)",
              }}
            >
              <CheckCircle className="w-7 h-7 text-cyan-400" />
            </div>
            <div>
              <p className={`text-[17px] font-semibold mb-1.5 ${isDark ? "text-white/80" : "text-slate-800"}`}>
                Message sent!
              </p>
              <p className={`text-[13px] max-w-xs leading-relaxed ${isDark ? "text-white/38" : "text-slate-500"}`}>
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
              className="text-[12px] font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors duration-200 underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-5"
            aria-label="Contact form"
          >
            <div className="mb-1">
              <p className={`text-[13px] font-semibold tracking-wide ${isDark ? "text-white/55" : "text-slate-600"}`}>
                Send a message
              </p>
              <div
                className="mt-2.5 h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(6,182,212,0.25), transparent)",
                }}
              />
            </div>

            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                icon={User}
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Email"
                icon={AtSign}
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Subject */}
            <Field
              label="Subject"
              icon={MessageSquare}
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              required
            />

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono text-white/35 tracking-[0.12em] uppercase">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
                required
                className={`w-full resize-none rounded-xl px-4 py-3 text-[13px] placeholder:text-white/18 outline-none transition-all duration-200 focus:border-cyan-400/40 ${isDark ? "text-white/65" : "text-slate-700"}`}
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                  border:          isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className={`relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-[13.5px] font-semibold tracking-wide overflow-hidden mt-1 ${isDark ? "text-[#020c18]" : "text-white"}`}
              style={{
                backgroundColor: "#22d3ee",
                boxShadow:       loading
                  ? "none"
                  : "0 0 28px rgba(34,211,238,0.32)",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? (
                <>
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-[#020c18]/40 border-t-[#020c18]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Field ──────────────────────────────────────────────── */

function Field({
  label,
  icon: Icon,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  icon: React.ElementType;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  const isDark = useIsDark();
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className={`text-[11px] font-mono tracking-[0.12em] uppercase ${isDark ? "text-white/35" : "text-slate-400"}`}
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none ${isDark ? "text-white/20" : "text-slate-400"}`}
        />
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full rounded-xl pl-9 pr-4 py-3 text-[13px] placeholder:text-white/18 outline-none transition-all duration-200 focus:border-cyan-400/40 ${isDark ? "text-white/65" : "text-slate-700"}`}
          style={{
            backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
            border:          isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
          }}
        />
      </div>
    </div>
  );
}

