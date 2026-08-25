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
    slug: "asters",
    title: "ASTERS — Active Shooter Tracking & Evacuation Routing",
    tagline: "Intelligent emergency evacuation planning combining Unreal Engine simulations with real-time computer vision.",
    category: "Design & Analysis",
    year: "2024",
    overview: "Built to address intelligent evacuation planning during active threat scenarios. We combined Unreal Engine indoor simulations with OpenCV threat tracking and Python-based egress algorithms. Real-time pathfinding and dynamic LED guidance enable data-driven evaluation of safe escape strategies.",
    meta: [
      { label: "Client / Sponsor", value: "National Science Foundation (NSF)" },
      { label: "Software & Stack", value: "Unreal Engine, Python, OpenCV, A* Pathfinding" },
      { label: "Type", value: "Research Simulation System" },
      { label: "Goal", value: "Development of a real-time virtual simulation system for emergency evacuation." }
    ],
    role: "Research Intern at COSMOS Lab (Univ. of Tennessee). Responsible for environment layout, agent behavior logic, camera tracking tools, egress routing & LED guidance integration, and data logging pipelines.",
    tools: ["Unreal Engine", "Python", "OpenCV", "CSV Logging", "A* Pathfinding", "NavMesh", "Blueprint Scripting"],
    context: "University research funded by NSF focusing on safe building egress strategies under dynamic active threats.",
    process: [
      "Translate floor plans into a navigable 3D environment with NavMesh and dynamic agent AI.",
      "In Python/OpenCV, detect threat events and stream location positions into Unreal Engine actors.",
      "Execute A* pathfinding to compute safe egress paths and drive dynamic LED guidance fixtures.",
      "Provide researcher tools: camera presets, visual overlays, and real-time heat-map visualizations.",
      "Log simulation runs to CSV for parameter sweeps, statistical analysis, and performance optimization."
    ],
    image: "/A.png",
    workflowImage: "/A-1.png",
    cta: {
      text: "Read Research Report",
      link: "https://drive.google.com/file/d/1XUJs0Y8INELjnUNagX6r9uAhdaMSqK4y/view?usp=drive_link"
    },
    challenges: "Maintaining low-latency real-time synchronization between external Python/OpenCV threat detection feeds and in-engine Unreal Engine agent navigation actors during dynamic threat scenarios.",
    solution: "Implemented a high-frequency socket communication protocol between Python and Unreal Engine, enabling dynamic NavMesh updates, real-time A* egress recalculations, and reactive LED light bar guidance.",
    outcome: "Delivered a robust research-grade simulation framework evaluating occupant safety and egress routing under National Science Foundation (NSF) research scope.",
    galleryImages: [
      "/Asters/HighresScreenshot00000.png",
      "/Asters/HighresScreenshot00001.png",
      "/Asters/Screenshot 2026-07-30 134602.png"
    ]
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
      { label: "Software", value: "Unreal Engine 5, Blender, OpenXR" },
      { label: "Type", value: "Digital Twin & Virtual Reality" },
      { label: "Goal", value: "Enable high-fidelity real-time industrial visualization, training, and operational demonstration." }
    ],
    role: "Freelance Unreal Engine Developer. Responsible for the complete development pipeline, including environment creation, asset optimization, Blueprint interaction systems, dynamic lighting, and VR experience development.",
    tools: ["Unreal Engine 5", "Blueprints", "Virtual Reality (VR)", "Digital Twin", "Lumen", "Nanite", "OpenXR", "Quixel Megascans", "Blender", "Git"],
    context: "Freelance industrial digital twin contract.",
    process: [
      "Develop the complete virtual facility environment using Unreal Engine 5.",
      "Build realistic industrial machinery and scenes with optimized polygon counts.",
      "Integrate high-quality dynamic global illumination using Lumen.",
      "Utilize Nanite for high-detail geometry mesh rendering.",
      "Create interactive Blueprint systems for equipment operation.",
      "Optimize the project for smooth 90 FPS VR performance.",
      "Implement OpenXR navigation and hand interaction mechanics.",
      "Improve scene hierarchy, organization, and asset streaming.",
      "Conduct extensive performance profiling using Unreal Insights.",
      "Collaborate with stakeholders to refine user interaction and workflow accuracy."
    ],
    image: "/NSK_Logo.png",
    workflowImage: "/NSK_Workflow.png",
    cta: null,
    challenges: "Maintaining high visual fidelity with complex industrial machinery while ensuring solid 90 FPS VR performance across OpenXR headsets. Careful optimization of geometry, lighting, materials, and draw calls was vital.",
    solution: "Implemented Nanite virtualized geometry, leveraged Lumen dynamic GI, created optimized master materials, reduced draw calls through mesh merging, and developed modular environment assets.",
    outcome: "Successfully delivered an optimized, visually rich Digital Twin VR application providing an interactive platform for industrial demonstration, training, and scalable future feature additions.",
    galleryImages: [
      "/NSK/HighresScreenshot00000.png",
      "/NSK/HighresScreenshot00001.png",
      "/NSK/HighresScreenshot00002.png",
      "/NSK/HighresScreenshot00003.png",
      "/NSK/HighresScreenshot00004.png",
      "/NSK/HighresScreenshot00005.png"
    ]
  },
  {
    slug: "maharashtra-truck",
    title: "Maharashtra Truck Simulation",
    tagline: "Interactive heavy vehicle transport simulation modeling road environments and vehicle dynamics.",
    category: "Driving Physics & Training",
    year: "2025",
    overview: "A detailed virtual simulation of the Maharashtra heavy truck transportation model, focusing on realistic road environments, vehicle handling physics, and operational safety training scenarios.",
    meta: [
      { label: "Software", value: "Unreal Engine, Blueprints, Material Editor" },
      { label: "Type", value: "Vehicle Physics & Training Simulation" },
      { label: "Goal", value: "Create an interactive and visually accurate vehicle simulation for training and transport logistics." }
    ],
    role: "Unreal Engine Developer. Implemented truck driving physics, built environmental terrain assets, designed custom shaders, and scripted interactive scenario logic.",
    tools: ["Unreal Engine", "Blueprints", "Physics Constraints", "Material Editor", "Chaos Physics"],
    context: "Simulating heavy transport operations in Indian road environments for driver safety and route awareness.",
    process: [
      "Design truck chassis and environment assets with realistic textures and PBR materials.",
      "Configure vehicle suspension, wheel friction, and center of mass using Unreal Engine Blueprints.",
      "Integrate multiple camera perspectives including first-person cockpit and third-person tactical view.",
      "Build environmental hazards and test physics interactions across varied terrain conditions."
    ],
    image: "/M.png",
    workflowImage: "/M-1.png",
    cta: null,
    challenges: "Replicating realistic heavy-vehicle inertial physics and tire friction dynamics in Unreal Engine while maintaining steady rendering performance.",
    solution: "Utilized Blueprint physics constraints, fine-tuned torque curves and friction coefficients, and structured lightweight dynamic material instances.",
    outcome: "Created a functional driving simulation modeling real-world transport conditions for operator training and logistical analysis."
  },
  {
    slug: "dental-vr",
    title: "VR Dental Training Simulation",
    tagline: "Interactive medical VR training utilizing patient CT scans and real-time tool interactions.",
    category: "Medical Training Simulation",
    year: "2024",
    overview: "Interactive VR training application built using real patient dental CT scans. Procedural steps are simulated with real-time tool collision constraints, detailed 3D anatomy models, dynamic lighting, and quantitative scoring metrics.",
    meta: [
      { label: "Client", value: "Incise Dental" },
      { label: "Software", value: "Unreal Engine, Blender, OpenXR" },
      { label: "Type", value: "Medical VR Simulation" },
      { label: "Goal", value: "Enable immersive, hands-on dental procedural training using authentic patient scan models in VR." }
    ],
    role: "XR Developer. Handled DICOM/CT scan cleanup, mesh retopology, VR tool interactions, procedure step logic, performance scoring, and lighting.",
    tools: ["Unreal Engine", "VR / OpenXR", "Blender Mesh Pipeline", "Blueprints", "Medical Visualization"],
    context: "Freelance medical training product developed for clinical dental education.",
    process: [
      "Convert CT/CBCT patient scans into clean, performance-friendly 3D meshes.",
      "Assemble an accurate clinical room scene with lighting, spatial audio, and proper scale.",
      "Program dental instrument interaction constraints and force feedback cues in Blueprints.",
      "Script procedural evaluation rules, precision checks, and timing metrics.",
      "Conduct user testing iterations and optimize asset shaders for smooth VR playback."
    ],
    image: "/Dental_Front.png",
    workflowImage: null,
    cta: {
      text: "Watch Walkthrough Video",
      link: "https://youtu.be/q3jmrM6cjmI"
    },
    challenges: "Converting raw volumetric patient scan data into lightweight, low-latency 3D geometry suitable for VR rendering without losing anatomical fidelity.",
    solution: "Executed custom retopology and texture baking pipelines in Blender, paired with Blueprint interaction boundary checks and localized tool collision detection.",
    outcome: "Delivered a safe, repeatable VR training module allowing dental students to practice procedures with instant feedback."
  },
  {
    slug: "architectural-vr-visualization",
    title: "Architectural VR Visualization",
    tagline: "Photorealistic real-time architectural walkthrough experience built in Unreal Engine 5.",
    category: "Architectural Visualization",
    year: "2025",
    overview: "Developed a photorealistic Architectural Virtual Reality (VR) Visualization experience using Unreal Engine 5, enabling clients to explore residential and commercial interiors in real time. Designed interactive walkthroughs with dynamic lighting, material customization, and spatial scale evaluation.",
    meta: [
      { label: "Client", value: "Aura Developer (Freelance)" },
      { label: "Software", value: "Unreal Engine 5, Lumen, Nanite, Quixel" },
      { label: "Type", value: "Architectural Real-Time VR" },
      { label: "Goal", value: "Enable photorealistic and interactive residential and commercial exploration in VR." }
    ],
    role: "Freelance Unreal Engine Developer. Responsible for creating photorealistic interiors, dynamic GI lighting setups, material creation, asset optimization, navigation Blueprints, and client presentations.",
    tools: ["Unreal Engine 5", "Virtual Reality (VR)", "Lumen", "Nanite", "Blueprint Scripting", "Quixel Megascans", "Post Processing"],
    context: "Architectural VR walkthrough created for real estate presentations and spatial review.",
    process: [
      "Import architectural CAD/BIM models into Unreal Engine 5.",
      "Author custom PBR materials and integrate Quixel Megascans surface textures.",
      "Configure dynamic global illumination and reflections using Lumen.",
      "Utilize Nanite virtualized geometry for high-detail architectural furniture and decor.",
      "Implement intuitive Blueprint teleportation and smooth locomotion for VR.",
      "Optimize post-processing and volumetric lighting for target VR frame rates."
    ],
    image: "/aura_arch.jpg",
    workflowImage: null,
    cta: {
      text: "Watch Walkthrough Video",
      link: "https://youtu.be/ndjf8jGb8gE"
    },
    challenges: "Achieving photorealistic interior illumination and shadow quality in VR while keeping frame delivery consistent.",
    solution: "Configured Unreal Engine 5 Lumen dynamic GI with tailored ray distance budgets, applied Nanite streaming, and tuned post-processing profiles.",
    outcome: "Provided an immersive, photorealistic architectural VR experience enabling clients to evaluate spatial layouts before physical construction.",
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
    slug: "ravana-vr",
    title: "Ravana VR — Cinematic Showcase",
    tagline: "An immersive cultural VR cinematic experience with synchronized lighting and audio choreography.",
    category: "Cinematic Cultural Showcase",
    year: "2024",
    overview: "Immersive VR cinematic experience based on mythological storytelling—combining character animation, theatrical stage lighting, post-processing effects, and synchronized audio to deliver an engaging real-time visual showcase.",
    meta: [
      { label: "Project Type", value: "University Cultural Showcase" },
      { label: "Software", value: "Unreal Engine, Blender, Sequencer" },
      { label: "Type", value: "Real-Time VR Cinematic" },
      { label: "Goal", value: "Create an immersive cinematic VR experience combining traditional mythology with modern real-time visual art." }
    ],
    role: "Technical Artist & Unreal Developer. Handled environment lookdev, character staging, camera sequencing, theatrical lighting setup, audio timing, and final VR rendering.",
    tools: ["Unreal Engine", "Blender", "Unreal Sequencer", "Post-Processing", "Spatial Audio"],
    context: "Showcase project combining 3D character animation and stage-like lighting in virtual reality.",
    process: [
      "Develop visual concept art, character models, and environmental mood boards.",
      "Assemble set pieces and establish high-contrast theatrical lighting.",
      "Choreograph camera cuts and movement tracks in Unreal Sequencer.",
      "Synchronize character animation passes with audio tracks and visual effects.",
      "Profile real-time rendering performance and optimize post-processing passes."
    ],
    image: "/Ravana_Front.png",
    workflowImage: null,
    cta: {
      text: "Watch Showcase Video",
      link: "https://youtu.be/1x3rMaC1Cc4"
    },
    challenges: "Ensuring tight timing synchronization between dramatic lighting changes, character animation tracks, and audio cues in real time.",
    solution: "Utilized Unreal Sequencer master tracks with embedded event triggers and spatial audio attenuation models.",
    outcome: "Successfully created an engaging VR cinematic showcase presenting mythological narrative through modern real-time graphics."
  }
];
