"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  details: string[];
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2026",
    role: "Research Assistant",
    company: "IMXD Lab, IDC School of Design, IIT Bombay",
    details: ["Virtual Reality Simulation", "Digital Twins", "Unreal Engine 5", "XR Research"],
  },
  {
    year: "2025",
    role: "XR Instructor",
    company: "TechShikSha",
    details: ["Unreal Engine", "Blender", "VR/XR Training", "Student Mentoring"],
  },
  {
    year: "2024",
    role: "Research Intern",
    company: "COSMOS Lab, University of Tennessee, Knoxville (USA)",
    details: ["ASTERS Project", "Emergency Evacuation Simulation", "Unreal Engine", "NSF Research"],
  },
  {
    year: "2023",
    role: "XR Developer Intern",
    company: "Madras Mind Works Pvt. Ltd.",
    details: ["AR/VR Applications", "Unreal Engine Development", "Interactive Experiences"],
  },
  {
    year: "2022 & Before",
    role: "Data Analytics Journey",
    company: "Foundation & Learning",
    details: ["Data Analysis", "Python", "SQL", "Visualization"],
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
                        className="w-full text-left md:text-right glass-card p-4 md:p-5 max-w-[380px] ml-auto rounded-xl relative"
                      >
                        {/* Time indicator */}
                        <span className="text-[10px] font-mono tracking-wider text-[#86868b] uppercase block mb-1.5">
                          {item.company} • {item.year}
                        </span>
                        {/* Title */}
                        <h3 className="text-base md:text-lg font-medium text-white mb-2.5">
                          {item.role}
                        </h3>
                        {/* Pill tags */}
                        <div className="flex flex-wrap md:justify-end gap-1.5">
                          {item.details.map((detail) => (
                            <span
                              key={detail}
                              className="text-[9px] tracking-wider font-light text-white/75 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"
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
                        className="w-full text-left glass-card p-4 md:p-5 max-w-[380px] mr-auto rounded-xl relative"
                      >
                        {/* Time indicator */}
                        <span className="text-[10px] font-mono tracking-wider text-[#86868b] uppercase block mb-1.5">
                          {item.company} • {item.year}
                        </span>
                        {/* Title */}
                        <h3 className="text-base md:text-lg font-medium text-white mb-2.5">
                          {item.role}
                        </h3>
                        {/* Pill tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.details.map((detail) => (
                            <span
                              key={detail}
                              className="text-[9px] tracking-wider font-light text-white/75 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"
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
