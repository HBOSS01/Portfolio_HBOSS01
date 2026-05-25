import dynamic from "next/dynamic";
import GlobalBackground from "@/components/layout/GlobalBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

const About      = dynamic(() => import("@/components/about/About"));
const Skills     = dynamic(() => import("@/components/skills/Skills"));
const Projects   = dynamic(() => import("@/components/projects/Projects"));
const Experience = dynamic(() => import("@/components/experience/Experience"));
const Contact    = dynamic(() => import("@/components/contact/Contact"));
const Footer     = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">

      {/* FIXED BACKGROUND */}
      <GlobalBackground />

      {/* CONTENT */}
      <div className="relative z-20">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

        <Footer />

      </div>
    </main>
  );
}
