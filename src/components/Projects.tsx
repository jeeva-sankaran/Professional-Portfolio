"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Architectural VR",
    category: "Architectural Visualization",
    year: "2025",
    description: "High-fidelity Architectural VR Visualization in Unreal Engine 5, featuring photorealistic luxury interiors, dynamic lighting, and natural walkthrough navigation.",
    tags: ["Unreal Engine 5", "VR", "Lumen & Nanite", "ArchViz"],
    image: "/aura_arch.jpg",
    link: "/projects/architectural-vr-visualization",
  },
  {
    id: "02",
    title: "Emergency Evacuation Simulations",
    category: "Design & Analysis",
    year: "2024",
    description: "Intelligent evacuation planning under dynamic threats, combining Unreal Engine simulations with OpenCV camera tracking and A* pathfinding egress routing.",
    tags: ["Unreal Engine", "Python", "OpenCV", "A* Pathfinding"],
    image: "/A.png",
    link: "/projects/asters",
  },
  {
    id: "03",
    title: "Maharashtra Truck Simulation",
    category: "Driving Physics & Training",
    year: "2025",
    description: "A detailed virtual simulation of the Maharashtra truck transportation model, focusing on realistic road environments, vehicle physics, and training scenarios.",
    tags: ["Unreal Engine", "Blueprints", "Physics", "Material Editor"],
    image: "/M.png",
    link: "/projects/maharashtra-truck",
  },
  {
    id: "04",
    title: "Dental VR Project",
    category: "Medical Training Simulation",
    year: "2024",
    description: "Immersive VR training using real patient dental scans. Simulates procedures with real-time tool constraints, detailed meshes, and scoring systems.",
    tags: ["Unreal Engine", "VR", "Asset Pipeline", "3D Interaction"],
    image: "/Dental_Front.png",
    link: "/projects/dental-vr",
  },
  {
    id: "05",
    title: "Ravana VR",
    category: "Cinematic Cultural Showcase",
    year: "2024",
    description: "Immersive VR cinematic combining character animation, stage-like lighting, post-processing effects, and sequenced audio for cultural storytelling.",
    tags: ["Unreal Engine", "Blender", "Sequencer", "Animation"],
    image: "/Ravana_Front.png",
    link: "/projects/ravana-vr",
  },
  {
    id: "06",
    title: "NSK Digital Twin VR Experience",
    category: "Digital Twin & VR Development",
    year: "2026",
    description: "Immersive industrial VR simulation and high-fidelity Digital Twin replica in Unreal Engine 5, focusing on realism and performance optimization.",
    tags: ["Unreal Engine 5", "VR", "Digital Twin", "Lumen & Nanite", "Blueprints"],
    image: "/NSK_Logo.png",
    link: "/projects/nsk-digital-twin",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative z-20 py-32 px-6 md:px-12 lg:px-24 bg-[#121212] w-full">
      {/* Background radial gradient to give a subtle depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold block mb-4">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              Selected <span className="font-semibold">Works.</span>
            </h2>
          </div>
          <p className="text-[#86868b] text-sm md:text-base max-w-sm font-light">
            A curated selection of projects pushing the boundaries of interface speed, creative coding, and web aesthetics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => {
            const hasWatermark = project.image === "/A.png" || project.image === "/M.png";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full max-w-[240px] mx-auto w-full rounded-2xl overflow-hidden glass-card"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className={`object-cover transition-transform duration-700 ease-out filter grayscale-[20%] group-hover:grayscale-0 brightness-[85%] group-hover:brightness-100 ${
                      hasWatermark
                        ? "scale-[1.08] group-hover:scale-[1.13]"
                        : "group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/10 to-transparent opacity-60" />
                </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-[9px] tracking-wider uppercase text-[#86868b] font-medium mb-2.5">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-1 group-hover:text-white transition-colors duration-300">
                  {project.title}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>

                {/* Description */}
                <p className="text-[11px] text-[#86868b] font-light leading-relaxed mb-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] tracking-wider font-light text-white/60 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clickable Overlay link */}
              <Link href={project.link} className="absolute inset-0 z-10" aria-label={`View project ${project.title}`} />
            </motion.div>
          );
        })}
        </div>

        {/* Footer Contact Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 pt-20 border-t border-white/5 text-center flex flex-col items-center justify-center"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold mb-4">
            Get In Touch
          </span>
          <a
            href="mailto:jeevaofficial1407@gmail.com"
            className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white hover:text-[#86868b] transition-colors duration-300 mb-6"
          >
            jeevaofficial1407@gmail.com
          </a>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[#86868b] text-sm font-light mt-4">
            <a href="tel:+918838813020" className="hover:text-white transition-colors duration-300">
              Phone: +91 8838813020
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://www.linkedin.com/in/jeevananthamsankaran/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              LinkedIn
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://jeevanathams07.artstation.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              ArtStation
            </a>
          </div>
          <p className="text-[#86868b] text-xs mt-12 tracking-widest uppercase">
            © {new Date().getFullYear()} Jeevanantham Sankaran. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
