export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectCTA {
  text: string;
  link: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  overview: string;
  meta: ProjectMeta[];
  role: string;
  tools: string[];
  context: string;
  process: string[];
  image: string;
  workflowImage: string | null;
  cta: ProjectCTA | null;
  challenges?: string;
  solution?: string;
  outcome?: string;
  galleryImages?: string[];
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    slug: "architectural-vr-visualization",
    title: "Architectural VR Visualization",
    tagline: "High-fidelity Architectural Virtual Reality (VR) Visualization experience using Unreal Engine 5.",
    category: "Architectural Visualization",
    year: "2025",
    overview: "Developed a high-fidelity Architectural Virtual Reality (VR) Visualization experience using Unreal Engine 5, enabling clients to explore residential and commercial spaces in real time. Designed interactive walkthroughs, allowing users to navigate spaces naturally and experience realistic scale, lighting, and spatial layouts.",
    meta: [
      { label: "Client", value: "Aura Developer (Freelance)" },
      { label: "Software", value: "Unreal Engine 5, Lumen, Nanite" },
      { label: "Type", value: "Virtual Reality" },
      { label: "Goal", value: "Enable photorealistic and interactive residential and commercial exploration in VR." }
    ],
    role: "Freelance Unreal Engine Developer. Responsible for creating photorealistic environments, advanced lighting, materials, asset optimization, walkthrough interactions, post-processing, and client presentation support.",
    tools: ["Unreal Engine 5", "Virtual Reality (VR)", "Lumen", "Nanite", "Blueprint Visual Scripting", "Lighting", "Architectural Visualization", "Optimization", "Quixel Megascans", "Post Processing"],
    context: "Architectural walkthrough for client presentations and design reviews.",
    process: [
      "Integrate complex architectural models into Unreal Engine 5.",
      "Create photorealistic environments with custom materials and Quixel Megascans assets.",
      "Set up dynamic global illumination and reflections using Lumen.",
      "Leverage Nanite to render high-detail geometry while maintaining performance.",
      "Design and implement Blueprint navigation for natural VR walkthroughs.",
      "Optimize post-processing, reflections, foliage, and environment effects for smooth target frame rates."
    ],
    image: "/aura_arch.jpg",
    workflowImage: null,
    cta: {
      text: "Watch Video",
      link: "https://youtu.be/ndjf8jGb8gE"
    },
    galleryImages: [
      "/Architectural/HighresScreenshot00000.png",
      "/Architectural/HighresScreenshot00001.png",
      "/Architectural/HighresScreenshot00002.png",
      "/Architectural/HighresScreenshot00003.png",
      "/Architectural/HighresScreenshot00004.png",
      "/Architectural/HighresScreenshot00005.png",
      "/Architectural/HighresScreenshot00006.png"
    ]
  },
  {
    slug: "asters",
    title: "ASTERS — Active Shooter Tracking & Evacuation Routing",
    tagline: "Intelligent evacuation planning using real-time tracking, pathfinding, and LED guidance.",
    category: "Design & Analysis",
    year: "2024",
    overview: "Built to address intelligent evacuation planning during active threat scenarios. We combined Unreal Engine indoor simulations with OpenCV shooter detection and Python-based egress algorithms. Real-time pathfinding and LED guidance enable data-driven evaluation of safe escape strategies.",
    meta: [
      { label: "Client", value: "National Science Foundation (NSF)" },
      { label: "Software", value: "Unreal Engine, Python (OpenCV)" },
      { label: "Type", value: "Simulation" },
      { label: "Goal", value: "Development of a real-time virtual simulation system for emergency evacuation." }
    ],
    role: "Environment and behaviour logic; camera tools; egress routing & LED guidance integration; logging & analysis pipeline.",
    tools: ["Unreal Engine", "Python", "OpenCV", "CSV logging", "A* pathfinding"],
    context: "University research on safe egress strategies under dynamic threats.",
    process: [
      "Translate floor plans into a navigable 3D environment with NavMesh and agents.",
      "In Python/OpenCV, detect target events and stream positions into UE actors.",
      "Run A* pathfinding to compute safe egress paths and drive dynamic LED guidance.",
      "Provide researcher tools: camera presets, overlays and heat-map visualisations.",
      "Log each run to CSV for replay and parameter sweeps; tune performance and export video/report."
    ],
    image: "/A.png",
    workflowImage: "/A-1.png",
    cta: {
      text: "Read Report",
      link: "https://drive.google.com/file/d/1XUJs0Y8INELjnUNagX6r9uAhdaMSqK4y/view?usp=drive_link"
    },
    galleryImages: [
      "/Asters/HighresScreenshot00000.png",
      "/Asters/HighresScreenshot00001.png",
      "/Asters/Screenshot 2026-07-30 134602.png"
    ]
  },
  {
    slug: "maharashtra-truck",
    title: "Maharashtra Truck Simulation",
    tagline: "A detailed virtual simulation of the Maharashtra truck transportation model.",
    category: "Driving Physics & Training",
    year: "2025",
    overview: "A detailed virtual simulation of the Maharashtra truck transportation model, focusing on realistic road environments, vehicle behaviour, and operational logistics.",
    meta: [
      { label: "Software", value: "Unreal Engine" },
      { label: "Type", value: "Simulation" },
      { label: "Goal", value: "Create an interactive and visually accurate simulation for training and visualisation purposes." }
    ],
    role: "Implemented driving physics, creating the environment, and scripted interactive scenarios.",
    tools: ["Unreal Engine", "Blueprints", "Material Editor"],
    context: "Simulating complex transport operations in an Indian setting for safety and training.",
    process: [
      "Design truck and environmental assets with realistic textures.",
      "Set up driving mechanics and physics using Unreal Engine Blueprints.",
      "Integrate camera systems for multiple viewing modes.",
      "Test and refine the simulation to ensure accuracy and performance."
    ],
    image: "/M.png",
    workflowImage: "/M-1.png",
    cta: null
  },
  {
    slug: "dental-vr",
    title: "VR Dental Training Simulation",
    tagline: "Interactive VR training using real patient dental scans and real-time tool interactions.",
    category: "Medical Training Simulation",
    year: "2024",
    overview: "Interactive VR training using real patient dental scans. Key procedures are simulated with real-time tool interactions, detailed 3D assets, dynamic lighting, and materials—creating a repeatable, safe environment for understanding techniques.",
    meta: [
      { label: "Client", value: "Incise Dental" },
      { label: "Software", value: "Unreal Engine" },
      { label: "Type", value: "Virtual Reality" },
      { label: "Goal", value: "Enable immersive, hands-on dental training using real patient models in VR." }
    ],
    role: "Scan cleanup/retopo; tool interactions; scenario steps & evaluation; lighting & materials.",
    tools: ["Unreal Engine", "Asset Pipeline"],
    context: "Freelance training product for patient-model based education.",
    process: [
      "Convert CT/CBCT scans to clean meshes suitable for real-time use.",
      "Assemble a UE scene with accurate scale, lighting, and materials.",
      "Build dental tools and interactions in Blueprints with constraints for stable control.",
      "Script procedure steps with checks, timers, and scoring to measure performance.",
      "Iterate via user tests; optimise and produce a walkthrough video."
    ],
    image: "/Dental_Front.png",
    workflowImage: null,
    cta: {
      text: "Watch Video",
      link: "https://youtu.be/q3jmrM6cjmI"
    }
  },
  {
    slug: "ravana-vr",
    title: "Ravana VR — Cinematic Showcase",
    tagline: "An immersive VR cinematic combining animation, stage-like lighting, and synchronized audio.",
    category: "Cinematic Cultural Showcase",
    year: "2024",
    overview: "Immersive VR cinematic based on the character Ravana for a college event—combining animation, stage-like lighting, and synchronized audio to deliver a visually rich experience with detailed environments and timed sequences.",
    meta: [
      { label: "Client", value: "University purpose (showcase)" },
      { label: "Software", value: "Unreal Engine, Blender" },
      { label: "Type", value: "Virtual Reality" },
      { label: "Goal", value: "Create an immersive, cinematic VR experience for cultural storytelling." }
    ],
    role: "Environment lookdev, animation/sequencing, lighting, audio sync, and real-time polish.",
    tools: ["Unreal Engine", "Blender", "Sequencer"],
    context: "Showcase project to bring mythology to life with modern VR visuals.",
    process: [
      "Develop visual concept and mood; gather style references.",
      "Model and assemble the set; establish lighting to support tone and depth.",
      "Choreograph cameras in Sequencer; time beats to audio.",
      "Add animation passes and polish with post-fx; profile and export the final VR piece."
    ],
    image: "/Ravana_Front.png",
    workflowImage: null,
    cta: {
      text: "Watch Video",
      link: "https://youtu.be/1x3rMaC1Cc4"
    }
  },
  {
    slug: "nsk-digital-twin",
    title: "NSK Digital Twin VR Experience",
    tagline: "Immersive industrial VR simulation and high-fidelity Digital Twin replica in Unreal Engine 5.",
    category: "Digital Twin & VR Development",
    year: "2026",
    overview: "Designed and developed an immersive Digital Twin application in Unreal Engine 5 to replicate industrial workflows within a virtual environment. The project focused on creating an interactive, real-time virtual environment that accurately represented industrial processes, enabling immersive visualization, training, and operational demonstration.",
    meta: [
      { label: "Client", value: "NSK (Freelance)" },
      { label: "Software", value: "Unreal Engine 5, Blender" },
      { label: "Type", value: "Digital Twin & Virtual Reality" },
      { label: "Goal", value: "Enable high-fidelity real-time industrial visualization and training." }
    ],
    role: "Freelance Unreal Engine Developer. Responsible for the complete development pipeline, including environment creation, optimization, interaction systems, lighting, asset integration, and VR experience development.",
    tools: ["Unreal Engine 5", "Blueprints", "Virtual Reality (VR)", "Digital Twin", "Lumen", "Nanite", "OpenXR", "Quixel Megascans", "Blender", "Git"],
    context: "Freelance industrial simulation contract.",
    process: [
      "Develop the complete virtual environment using Unreal Engine 5.",
      "Build realistic industrial scenes with optimized assets.",
      "Integrate high-quality lighting using Lumen.",
      "Utilize Nanite for high-detail asset rendering.",
      "Create interactive Blueprint systems.",
      "Optimize the project for smooth VR performance.",
      "Implement navigation and user interaction systems.",
      "Improve scene organization and asset management.",
      "Conduct performance profiling and optimization.",
      "Collaborate with stakeholders to refine project requirements and user experience."
    ],
    image: "/NSK_Logo.png",
    workflowImage: "/NSK_Workflow.png",
    cta: null,
    challenges: "One of the primary challenges was maintaining high visual fidelity while ensuring stable VR performance. Careful optimization of assets, lighting, level design, and rendering techniques was required to achieve smooth frame rates without sacrificing realism.",
    solution: "Implemented Nanite for detailed geometry, leveraged Lumen for realistic lighting, optimized textures and materials, reduced unnecessary draw calls, and designed modular environments to improve maintainability and rendering efficiency.",
    outcome: "Successfully delivered a visually rich and optimized Digital Twin VR experience that provided an immersive platform for industrial visualization, demonstration, and future scalability.",
    galleryImages: [
      "/NSK/HighresScreenshot00000.png",
      "/NSK/HighresScreenshot00001.png",
      "/NSK/HighresScreenshot00002.png",
      "/NSK/HighresScreenshot00003.png",
      "/NSK/HighresScreenshot00004.png",
      "/NSK/HighresScreenshot00005.png"
    ]
  }
];
