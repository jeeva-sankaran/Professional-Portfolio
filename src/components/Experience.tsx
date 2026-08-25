"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  summary: string;
  details: string[];
  featured?: boolean;
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2026",
    role: "Research Assistant",
    company: "IMXD Lab, IDC School of Design, IIT Bombay",
    summary: "Conducting XR research focused on Unreal Engine 5 virtual reality simulations, industrial digital twin replicas, and interactive spatial environments.",
    details: ["VR Simulation", "Digital Twins", "Unreal Engine 5", "Interactive Environments", "XR Research"],
    featured: true,
  },
  {
    year: "2025",
    role: "XR Instructor",
    company: "TechShikSha",
    summary: "Led technical instruction and hands-on mentoring in Unreal Engine 5, Blender 3D modeling, and real-time interactive VR development.",
    details: ["Unreal Engine 5", "Blender", "VR/XR Training", "Mentorship"],
  },
  {
    year: "2024",
    role: "Research Intern (NSF)",
    company: "COSMOS Lab, University of Tennessee, Knoxville (USA)",
    summary: "Engineered ASTERS emergency evacuation simulation combining Unreal Engine, OpenCV computer vision tracking, and dynamic A* egress routing.",
    details: ["ASTERS Project", "Emergency Evacuation Simulation", "Unreal Engine", "Computer Vision", "NSF Research"],
    featured: true,
  },
  {
    year: "2023",
    role: "XR Developer Intern",
    company: "Madras Mind Works Pvt. Ltd.",
    summary: "Developed interactive AR/VR applications in Unreal Engine, optimizing real-time 3D graphics pipelines and user interaction systems.",
    details: ["AR/VR Development", "Unreal Engine", "Interactive Systems", "Asset Pipeline"],
  },
  {
    year: "2022 & Before",
    role: "Computer Science & Data Foundation",
    company: "Academic & Skill Development",
    summary: "Built a core technical foundation in Python programming, C++, computer vision fundamentals, linear algebra, and data analytics.",
    details: ["Python", "C++", "Data Analysis", "Computer Vision Basics"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-20 py-20 px-6 md:px-12 lg:px-24 bg-[#121212] w-full border-t border-white/5">
      {/* Background radial gradient to keep depth consistent with projects */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(120,119,198,0.04),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold block mb-3">
            Career Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            Professional <span className="font-semibold">Journey.</span>
          </h2>
        </div>

        {/* Timeline Grid container */}
        <div className="relative mt-12">
          {/* Vertical timeline line in the center */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-[1px] md:-translate-x-1/2" />

          <div className="space-y-8">
            {TIMELINE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.year} className="relative flex flex-col md:flex-row md:items-center">
                  {/* Glowing Node Dot on Timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-3.5 h-3.5 rounded-full bg-white border-[3px] border-[#121212] shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 -translate-x-1/2 -translate-y-1/2" />

                  {/* Left Column (empty on odd items, contains card on even items) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 flex justify-end ${
                    isEven ? "md:opacity-100" : "md:pointer-events-none md:select-none"
                  }`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`w-full text-left md:text-right glass-card p-5 max-w-[420px] ml-auto rounded-xl relative ${
                          item.featured ? "border-white/20 shadow-lg" : ""
                        }`}
                      >
                        {/* Time indicator */}
                        <span className="text-[10px] font-mono tracking-wider text-[#86868b] uppercase block mb-1.5">
                          {item.company} • {item.year}
                        </span>
                        {/* Title */}
                        <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                          {item.role}
                        </h3>
                        {/* Summary */}
                        <p className="text-xs text-[#86868b] font-light leading-relaxed mb-3.5">
                          {item.summary}
                        </p>
                        {/* Pill tags */}
                        <div className="flex flex-wrap md:justify-end gap-1.5">
                          {item.details.map((detail) => (
                            <span
                              key={detail}
                              className="text-[9px] tracking-wider font-light text-white/75 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column (contains card on odd items, empty on even items) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 flex justify-start ${
                    !isEven ? "md:opacity-100" : "md:pointer-events-none md:select-none"
                  }`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`w-full text-left glass-card p-5 max-w-[420px] mr-auto rounded-xl relative ${
                          item.featured ? "border-white/20 shadow-lg" : ""
                        }`}
                      >
                        {/* Time indicator */}
                        <span className="text-[10px] font-mono tracking-wider text-[#86868b] uppercase block mb-1.5">
                          {item.company} • {item.year}
                        </span>
                        {/* Title */}
                        <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                          {item.role}
                        </h3>
                        {/* Summary */}
                        <p className="text-xs text-[#86868b] font-light leading-relaxed mb-3.5">
                          {item.summary}
                        </p>
                        {/* Pill tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.details.map((detail) => (
                            <span
                              key={detail}
                              className="text-[9px] tracking-wider font-light text-white/75 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
