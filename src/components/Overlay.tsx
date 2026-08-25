"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

export default function Overlay() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const container = document.getElementById("scrolly-container");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const p = Math.min(1, Math.max(0, -rect.top / totalHeight));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  // Interpolation helper (clamped by default)
  const interpolate = (val: number, input: number[], output: number[]) => {
    if (val <= input[0]) return output[0];
    if (val >= input[input.length - 1]) return output[output.length - 1];

    for (let i = 0; i < input.length - 1; i++) {
      if (val >= input[i] && val <= input[i + 1]) {
        const t = (val - input[i]) / (input[i + 1] - input[i]);
        return output[i] + t * (output[i + 1] - output[i]);
      }
    }
    return output[0];
  };

  const opacity1 = interpolate(progress, [0, 0.18, 0.25], [1, 1, 0]);
  const y1 = interpolate(progress, [0, 0.25], [0, -80]);

  const opacity2 = interpolate(progress, [0.22, 0.3, 0.48, 0.55], [0, 1, 1, 0]);
  const y2 = interpolate(progress, [0.22, 0.3, 0.48, 0.55], [60, 0, 0, -60]);

  const opacity3 = interpolate(progress, [0.52, 0.6, 0.78, 0.85], [0, 1, 1, 0]);
  const y3 = interpolate(progress, [0.52, 0.6, 0.78, 0.85], [60, 0, 0, -60]);

  const arrowOpacity = interpolate(progress, [0, 0.05], [0.8, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none">
      {/* Section 1: Introduction & Primary Title */}
      <div
        style={{ 
          opacity: opacity1, 
          transform: `translateY(${y1}px)`,
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out" 
        }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <span className="text-xs uppercase tracking-[0.35em] text-[#86868b] mb-4 font-semibold">
          Unreal Engine Developer &amp; XR Researcher
        </span>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white max-w-5xl leading-[1.15]">
          JEEVANANTHAM SANKARAN<span className="font-semibold">.</span>
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-light text-[#86868b] mt-5 tracking-wide max-w-3xl text-balance leading-relaxed">
          Building immersive simulations, digital twins, VR experiences, and interactive virtual environments with Unreal Engine 5.
        </p>

        {/* Supporting areas strip */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4 text-[11px] md:text-xs text-white/60 tracking-wider font-light">
          <span>VR/XR</span>
          <span className="text-[#86868b]">•</span>
          <span>Digital Twins</span>
          <span className="text-[#86868b]">•</span>
          <span>Simulation</span>
          <span className="text-[#86868b]">•</span>
          <span>Technical Art</span>
          <span className="text-[#86868b]">•</span>
          <span>Computer Vision</span>
          <span className="text-[#86868b]">•</span>
          <span>Python</span>
        </div>

        {/* Interactive Hero CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <a
            href="/resume.pdf"
            download="Jeevanantham_Sankaran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium text-xs md:text-sm rounded-full border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-100 backdrop-blur-md"
          >
            <FileText className="w-4 h-4 text-white/80" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Section 2: Core Philosophy */}
      <div
        style={{ 
          opacity: opacity2, 
          transform: `translateY(${y2}px)`,
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out" 
        }}
        className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 text-left max-w-3xl"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] mb-4 font-semibold">
          Immersive Simulations &amp; Research
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
          I design <span className="font-medium text-white">VR simulations</span> that bridge real‑world research with virtual innovation.
        </h2>
      </div>

      {/* Section 3: Professional Bridge */}
      <div
        style={{ 
          opacity: opacity3, 
          transform: `translateY(${y3}px)`,
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out" 
        }}
        className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-20 lg:px-32 text-right max-w-3xl ml-auto"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] mb-4 font-semibold">
          Digital Twins &amp; Technical Art
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
          Engineering <span className="font-medium text-white">Digital Twins &amp; XR</span> to set new standards in virtual training.
        </h2>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{ 
          opacity: arrowOpacity,
          transition: "opacity 0.15s ease-out" 
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#86868b] font-medium">
          Scroll to explore
        </span>
        <svg
          className="w-4 h-4 text-[#86868b] animate-bounce mt-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
