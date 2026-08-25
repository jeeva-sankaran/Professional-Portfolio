"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Eye, Box, BarChart3 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  description: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Unreal Engine & XR",
    icon: Cpu,
    description: "Core real-time engine development, VR/XR spatial interactions, and rendering optimization.",
    skills: ["Unreal Engine 5", "Blueprint Scripting", "Virtual Reality (VR/XR)", "OpenXR", "Lumen & Nanite", "Sequencer"],
  },
  {
    title: "Programming Languages",
    icon: Code,
    description: "Object-oriented software development and scripting for simulations and data workflows.",
    skills: ["Python", "C++", "Blueprint Logic", "CSV Data Pipelines"],
  },
  {
    title: "Computer Vision & Simulation",
    icon: Eye,
    description: "Spatial tracking, dynamic agent navigation, and threat detection simulation.",
    skills: ["OpenCV", "Egress Simulation", "A* Pathfinding", "NavMesh AI", "Threat Tracking"],
  },
  {
    title: "3D & Technical Art",
    icon: Box,
    description: "Asset creation, retopology, photorealistic lighting, and surface material authoring.",
    skills: ["Blender", "Quixel Megascans", "AutoCAD", "Creo", "PBR Shaders", "Lighting & LookDev"],
  },
  {
    title: "Data & Visualization",
    icon: BarChart3,
    description: "Quantitative analysis, simulation logging metrics, and data dashboarding.",
    skills: ["Excel", "Power BI", "Tableau", "Data Analysis"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 py-24 px-6 md:px-12 lg:px-24 bg-[#121212] w-full border-t border-white/5">
      {/* Subtle background radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_70%_at_50%_40%,rgba(120,119,198,0.05),transparent_80%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold block mb-3">
            Technical Proficiency
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            Specialized <span className="font-semibold">Skill Set.</span>
          </h2>
          <p className="text-[#86868b] text-sm md:text-base max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Core technologies and tools verified through research projects at IIT Bombay &amp; Univ. of Tennessee, and industrial contracts.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                      <Icon className="w-5 h-5 text-white/90" />
                    </div>
                    <h3 className="text-lg font-medium text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#86868b] font-light leading-relaxed mb-5">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs tracking-wider font-light text-white/80 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
