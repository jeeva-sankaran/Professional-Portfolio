"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Experience from "@/components/Experience";
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
      {/* Cinematic Scrollytelling Canvas Section */}
      <div ref={containerRef} id="scrolly-container" className="relative h-[500vh] w-full bg-[#121212]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollProgress={scrollYProgress} />
          <Overlay />
        </div>
      </div>

      {/* Experience Timeline Section */}
      <Experience />

      {/* Projects Showcase & Footer Section */}
      <Projects />
    </main>
  );
}

