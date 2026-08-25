"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Emergency Evacuation Simulations",
    category: "Design & Analysis",
    year: "2024",
    description: "Developed an Unreal Engine-based emergency evacuation simulation integrating OpenCV camera tracking, threat location, and dynamic A* egress routing.",
    tags: ["Unreal Engine", "Python", "OpenCV", "A* Pathfinding"],
    image: "/A.png",
    link: "/projects/asters",
    featured: true,
  },
  {
    id: "02",
    title: "NSK Digital Twin VR Experience",
    category: "Digital Twin & VR Development",
    year: "2026",
    description: "Engineered a high-fidelity industrial Digital Twin replica in Unreal Engine 5 for real-time facility visualization, VR training, and asset interaction.",
    tags: ["Unreal Engine 5", "VR", "Digital Twin", "Lumen & Nanite"],
    image: "/NSK_Logo.png",
    link: "/projects/nsk-digital-twin",
    featured: true,
  },
  {
    id: "03",
    title: "Maharashtra Truck Simulation",
    category: "Driving Physics & Training",
    year: "2025",
    description: "Built an interactive vehicle physics simulation in Unreal Engine modeling heavy truck transport mechanics, road conditions, and safety scenarios.",
    tags: ["Unreal Engine", "Blueprints", "Physics", "Material Editor"],
    image: "/M.png",
    link: "/projects/maharashtra-truck",
    featured: true,
  },
  {
    id: "04",
    title: "Dental VR Project",
    category: "Medical Training Simulation",
    year: "2024",
    description: "Designed a VR dental procedural simulator in Unreal Engine utilizing patient CT scans, real-time spatial tool constraints, and performance evaluation.",
    tags: ["Unreal Engine", "VR", "Asset Pipeline", "3D Interaction"],
    image: "/Dental_Front.png",
    link: "/projects/dental-vr",
  },
  {
    id: "05",
    title: "Architectural VR",
    category: "Architectural Visualization",
    year: "2025",
    description: "Created a photorealistic Unreal Engine 5 architectural VR walkthrough with Lumen dynamic GI, Nanite mesh streaming, and spatial navigation.",
    tags: ["Unreal Engine 5", "VR", "Lumen & Nanite", "ArchViz"],
    image: "/aura_arch.jpg",
    link: "/projects/architectural-vr-visualization",
  },
  {
    id: "06",
    title: "Ravana VR",
    category: "Cinematic Cultural Showcase",
    year: "2024",
    description: "Produced a cinematic VR experience in Unreal Engine using character animation, Sequencer choreography, stage lighting, and spatial audio sync.",
    tags: ["Unreal Engine", "Blender", "Sequencer", "Animation"],
    image: "/Ravana_Front.png",
    link: "/projects/ravana-vr",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative z-20 py-32 px-6 md:px-12 lg:px-24 bg-[#121212] w-full">
      {/* Background radial gradient to give a subtle depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold block mb-4">
              Featured Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              Selected <span className="font-semibold">Works.</span>
            </h2>
          </div>
          <p className="text-[#86868b] text-sm md:text-base max-w-md font-light">
            High-impact virtual reality simulations, digital twins, and real-time 3D environments engineered with Unreal Engine 5, C++, and Python.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => {
            const hasWatermark = project.image === "/A.png" || project.image === "/M.png";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full w-full rounded-2xl overflow-hidden glass-card"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-700 ease-out filter grayscale-[20%] group-hover:grayscale-0 brightness-[85%] group-hover:brightness-100 ${
                      hasWatermark
                        ? "scale-[1.08] group-hover:scale-[1.13]"
                        : "group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/10 to-transparent opacity-60" />

                  {/* Highlight indicator for top priority projects */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-white/90 bg-[#121212]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-sm">
                        Priority Project
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-5">
                  {/* Meta details */}
                  <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-[#86868b] font-medium mb-2.5">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base font-semibold text-white mb-2 flex items-center justify-between group-hover:text-white transition-colors duration-300">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868b] group-hover:text-white opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#86868b] font-light leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] tracking-wider font-light text-white/70 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clickable Overlay link */}
                <Link href={project.link} className="absolute inset-0 z-10" aria-label={`View project details for ${project.title}`} />
              </motion.div>
            );
          })}
        </div>

        {/* Footer Contact Call to Action */}
        <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 pt-20 border-t border-white/5 text-center flex flex-col items-center justify-center"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold mb-4">
            Recruiter &amp; Technical Contact
          </span>
          <a
            href="mailto:jeevaofficial1407@gmail.com"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white hover:text-[#86868b] transition-colors duration-300 mb-8 break-all"
          >
            jeevaofficial1407@gmail.com
          </a>

          {/* Quick Action Resume Download */}
          <div className="mb-10">
            <a
              href="/resume.pdf"
              download="Jeevanantham_Sankaran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-xs md:text-sm rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-100"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Professional Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[#86868b] text-sm font-light">
            <a
              href="https://github.com/jeeva-sankaran"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <span className="hidden sm:inline text-white/10">•</span>
            <a
              href="https://www.linkedin.com/in/jeevananthamsankaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <span className="hidden sm:inline text-white/10">•</span>
            <a
              href="https://jeevanathams07.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
            >
              <span>ArtStation</span>
            </a>
            <span className="hidden sm:inline text-white/10">•</span>
            <a
              href="mailto:jeevaofficial1407@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <p className="text-[#86868b] text-[11px] mt-12 tracking-widest uppercase font-mono">
            © {new Date().getFullYear()} Jeevanantham Sankaran • Unreal Engine Developer &amp; XR Researcher
          </p>
        </motion.div>
      </div>
    </section>
  );
}
