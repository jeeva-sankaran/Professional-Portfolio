"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the 500vh parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="relative bg-[#121212] min-h-screen w-full select-none">
      {/* Cinematic Scrollytelling Canvas Section (Home) */}
      <div ref={containerRef} id="scrolly-container" className="relative h-[500vh] w-full bg-[#121212]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollProgress={scrollYProgress} />
          <Overlay />
        </div>
      </div>

      {/* Navigation Header (Sticky starting from Career Timeline downward) */}
      <header className="sticky top-0 z-50 glass-nav border-b border-white/5 w-full">
        <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          <a href="#" className="text-xs md:text-sm font-semibold tracking-widest text-white hover:opacity-80 transition-opacity uppercase font-mono">
            Jeevanantham S<span className="text-white/40">.</span>
          </a>
          <nav className="flex items-center gap-4 sm:gap-8 text-[11px] md:text-xs uppercase tracking-wider text-[#86868b] font-medium">
            <a href="#experience" className="hover:text-white transition-colors duration-200">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">
              Skills
            </a>
            <a href="#work" className="hover:text-white transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-200 text-white/90 font-semibold">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Experience Timeline Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Projects Showcase & Footer Section */}
      <Projects />
    </main>
  );
}

