import GlobalBackground from "@/components/layout/GlobalBackground";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";

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