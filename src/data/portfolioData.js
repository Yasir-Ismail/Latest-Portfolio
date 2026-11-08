export const personalInfo = {
  name: "Yasir Ismail",
  shortName: "Yasir",
  initials: "YI",
  title: "AI Student & Full-Stack Developer",
  headline: "Building digital experiences with code and creativity.",
  tagline: "Quiet Luxury • Architectural Simplicity • Intentional Engineering",
  introduction:
    "I'm a BS Artificial Intelligence student and Full-Stack Developer interested in building practical, user-focused digital products. I combine web development skills with an interest in emerging AI technologies.",
  location: "Rahim Yar Khan, Pakistan",
  coordinates: "28°25′ N, 70°18′ E",
  timezone: "Asia/Karachi (GMT+5)",
  status: "Available for select projects",
  availabilityNote: "Open for freelance web development and AI collaborations.",
  email: "yasirismail576@gmail.com",
  phone: "+92 312 7660893",
  whatsapp: "+923370795535",
  whatsappDisplay: "+92 337 0795535",
  github: "https://github.com/Yasir-Ismail",
  linkedin: "https://www.linkedin.com/in/yasir-ismail7/",
  existingPortfolio: "https://yasir-ismail.github.io/Portfolio/",
  avatar: "/assets/profile.jpg"
};

export const education = [
  {
    degree: "BS Artificial Intelligence",
    institution: "Khwaja Fareed University of Engineering & Information Technology (KFUEIT)",
    shortInstitution: "KFUEIT",
    period: "2024 — 2028",
    status: "In Progress",
    description:
      "Undergraduate studies focused on Artificial Intelligence fundamentals, Machine Learning algorithms, Computer Vision pipelines, Data Structures, and Software Engineering methodologies.",
    highlights: [
      "Machine Learning & Deep Learning architectures",
      "Computer Vision with YOLO & SSD",
      "Object-Oriented Programming & Algorithms",
      "Applied cognitive computing research"
    ]
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Oxbridge College, Rahim Yar Khan",
    shortInstitution: "Oxbridge College",
    period: "2022 — 2024",
    status: "Completed",
    description:
      "Pre-university degree focusing on foundational Computer Science, Mathematics, and Analytical Physics.",
    highlights: [
      "Fundamentals of Programming (C/C++)",
      "Discrete Mathematics & Calculus",
      "Core computing hardware and architectures"
    ]
  }
];

export const certifications = [
  {
    id: "azure-ai-900",
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "2025",
    category: "Artificial Intelligence",
    description:
      "Demonstrated foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.",
    skillsCovered: ["Azure AI Services", "Computer Vision Workloads", "NLP", "Responsible AI"]
  },
  {
    id: "web-dev",
    title: "Web Development Certification",
    issuer: "Professional Training Institute",
    year: "2024",
    category: "Full-Stack Development",
    description:
      "Comprehensive training covering modern semantic HTML, responsive CSS layouts, modern JavaScript application logic, PHP, and MySQL database management.",
    skillsCovered: ["HTML5 / CSS3", "Modern JavaScript", "PHP & MySQL", "Responsive Design"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Certification",
    issuer: "Industry Accredited Course",
    year: "2024",
    category: "Growth & Marketing",
    description:
      "Strategies for search engine visibility, audience acquisition, brand positioning, and analytics-driven content optimization.",
    skillsCovered: ["Technical SEO", "Brand Strategy", "Content Distribution", "Conversion Optimization"]
  },
  {
    id: "cca",
    title: "Certificate in Computer Applications (CCA)",
    issuer: "Vocational & Technical Authority",
    year: "2023",
    category: "Foundational Computing",
    description:
      "Rigorous certification in operational computing, office automation, database management, and computer network essentials.",
    skillsCovered: ["Office Productivity Systems", "Database Operations", "Operating Systems", "Networking"]
  }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Semantic, accessible, and responsive user interfaces",
    skills: [
      { name: "HTML5", level: "Semantic Markup, Accessibility, Standards", tag: "Core" },
      { name: "CSS3", level: "Custom Properties, Flexbox, Grid, Animations", tag: "Design" },
      { name: "Bootstrap", level: "Rapid Prototyping, Responsive Grid 5.x", tag: "Framework" },
      { name: "JavaScript", level: "ES6+, DOM Manipulation, Async/Await, APIs", tag: "Language" },
      { name: "React.js", level: "Component Architecture, Hooks, State Flow", tag: "Library" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    subtitle: "Server architecture, relational data, and authentication",
    skills: [
      { name: "PHP", level: "Procedural & OOP, Form Handling, Server Routing", tag: "Backend" },
      { name: "MySQL", level: "Relational Schemas, CRUD, Indexing, Queries", tag: "Database" },
      { name: "REST APIs", level: "JSON Endpoints, Client-Server Integration", tag: "Architecture" },
      { name: "Data Security", level: "Input Sanitization, Session Handling", tag: "Security" }
    ]
  },
  {
    id: "ai",
    title: "AI & Technology",
    subtitle: "Intelligent systems, deep learning, and computer vision",
    skills: [
      { name: "Artificial Intelligence", level: "Foundational Models, Supervised Learning", tag: "Theory" },
      { name: "Computer Vision", level: "Object Detection, OpenCV Image Processing", tag: "Vision" },
      { name: "YOLO (v5)", level: "Real-time Object Detection Pipelines", tag: "Deep Learning" },
      { name: "SSD", level: "Single Shot MultiBox Detector Architecture", tag: "Neural Nets" },
      { name: "Python", level: "NumPy, Pandas, Data Preparation, Scripting", tag: "Language" },
      { name: "Streamlit", level: "Interactive Machine Learning Web Dashboards", tag: "UI for AI" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    subtitle: "Version control, developer environments, and deployment",
    skills: [
      { name: "Git", level: "Branching, Merging, Commit Discipline", tag: "VCS" },
      { name: "GitHub", level: "Repository Management, Pages, Open Source", tag: "Platform" },
      { name: "VS Code", level: "Extensions, Debugging, Custom Workspaces", tag: "Editor" },
      { name: "Vercel", level: "Continuous Deployment, Edge Hosting", tag: "Deployment" }
    ]
  }
];

export const featuredProjects = [
  {
    id: "ja-sports-wear",
    number: "01",
    title: "JA Sports Wear",
    client: "Client Commission",
    year: "2025",
    category: "Commercial Web Application",
    headline: "Bespoke digital presence for a custom sportswear manufacturer.",
    description:
      "A client-commissioned commercial web platform engineered for JA Sports Wear, an activewear and team jersey manufacturer. Built with high-performance responsive frontend architecture, featuring an interactive product showcase, custom gear categories, and seamless client inquiry flows.",
    role: "Sole Full-Stack Developer",
    scope: "UI Design, Semantic Frontend, Catalog Engine, Responsive Testing, Deployment",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    githubUrl: "https://github.com/Yasir-Ismail/ja-sports-wear",
    liveUrl: "https://ja-sports-wear-iota.vercel.app",
    featuredBadge: "Client Project",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
    editorialQuote: "Balancing commercial activewear aesthetics with lightweight, lightning-fast client browsing."
  },
  {
    id: "pind-da-swaad",
    number: "02",
    title: "Pind Da Swaad",
    client: "Brand Identity & Digital Presence",
    year: "2025",
    category: "Hospitality & Dining Web",
    headline: "Traditional desi culinary brand identity and direct-order digital presence.",
    description:
      "An evocative digital catalog and ordering portal for Pind Da Swaad, an authentic desi food brand celebrating heritage village flavours. Crafted with warm rustic editorial styling, category filtering across traditional recipes, and an integrated direct WhatsApp order dispatch system.",
    role: "Concept, Web Architecture & Digital Experience",
    scope: "Editorial Layout, Digital Menu, WhatsApp Direct Commerce, Mobile-First UX",
    technologies: ["HTML5", "Modern CSS", "JavaScript", "WhatsApp API", "UX Architecture"],
    githubUrl: "https://github.com/Yasir-Ismail",
    liveUrl: null,
    featuredBadge: "Brand Experience",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1200&q=80&auto=format&fit=crop",
    editorialQuote: "Translating authentic regional heritage and hospitality into a frictionless digital menu."
  },
  {
    id: "ecommerce-platform",
    number: "03",
    title: "E-Commerce Web Application",
    client: "Full-Stack System",
    year: "2025",
    category: "Full-Stack Web & Database",
    headline: "Robust PHP and MySQL e-commerce architecture with session state handling.",
    description:
      "A comprehensive dynamic e-commerce system built from scratch with PHP and MySQL. Incorporates relational inventory data structures, session-backed shopping cart management, product categorization, customer credential authentication, and an administrative control interface for catalog updates.",
    role: "Full-Stack Web Developer",
    scope: "Relational Database Design, Session Management, CRUD Operations, UI Engineering",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "REST Principles"],
    githubUrl: "https://github.com/Yasir-Ismail/EasyShop",
    liveUrl: null,
    featuredBadge: "Database System",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80&auto=format&fit=crop",
    editorialQuote: "Engineered with strict separation of server logic, database integrity, and responsive storefront UI."
  },
  {
    id: "traffic-sign-detection",
    number: "04",
    title: "Traffic Sign Detection System",
    client: "AI / Computer Vision Research",
    year: "2025",
    category: "Deep Learning & Autonomous Perception",
    headline: "Real-time road sign classification using YOLOv5 and SSD architectures.",
    description:
      "A deep learning computer vision pipeline designed for autonomous driving perception benchmarks. Evaluates single-stage detector YOLOv5 alongside Single Shot MultiBox Detector (SSD) for low-latency traffic sign identification under variable lighting and scale, deployed via an interactive Streamlit testing dashboard.",
    role: "Machine Learning / Vision Developer",
    scope: "Dataset Preprocessing, Model Training, Comparative Benchmark, Streamlit Interface",
    technologies: ["Python", "YOLOv5", "SSD Architecture", "OpenCV", "Streamlit"],
    githubUrl: "https://github.com/Yasir-Ismail",
    liveUrl: null,
    featuredBadge: "AI & Computer Vision",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=1200&q=80&auto=format&fit=crop",
    editorialQuote: "Investigating the frontier where low-latency inference meets critical safety perception."
  }
];

export const archiveProjects = [
  {
    title: "TipTop Furniture",
    category: "E-Commerce Catalog",
    tech: "HTML5 • CSS3 • JavaScript",
    description:
      "Custom furniture catalog website with category filtering, modal views, and WhatsApp-driven order routing.",
    liveUrl: "https://tip-top-furniture.vercel.app",
    githubUrl: "https://github.com/Yasir-Ismail/Tip-Top-Furniture",
    image: "/assets/tip-top-furniture.png"
  },
  {
    title: "SolarEdge Energy",
    category: "Corporate Web Portal",
    tech: "HTML5 • CSS3 • JavaScript",
    description:
      "Solar energy solutions platform featuring dynamic savings estimator, project portfolio, and quote workflows.",
    liveUrl: "https://solar-edge-ten.vercel.app",
    githubUrl: "https://github.com/Yasir-Ismail/Solar-Company",
    image: "/assets/solar-edge.png"
  },
  {
    title: "IMS Pro (Inventory System)",
    category: "Full-Stack Enterprise",
    tech: "PHP • MySQL • Bootstrap • Chart.js",
    description:
      "Full-stack inventory dashboard with real-time stock alerts, supplier tracking, and visual analytics.",
    liveUrl: "http://yasir-projects.42web.io/Advance-inventory-management-System",
    githubUrl: "https://github.com/Yasir-Ismail/Advance-inventory-management-System",
    image: "/assets/inventory-management-system.png"
  },
  {
    title: "Intelligent Exam Hall Allocation",
    category: "Algorithm & Optimization",
    tech: "Python • Algorithmic Logic",
    description:
      "Automated academic hall seating algorithm resolving capacity constraints and candidate separation rules.",
    liveUrl: null,
    githubUrl: "https://github.com/Yasir-Ismail/intelligent-exam-hall-allocation-system",
    image: null
  }
];

export const workPrinciples = [
  {
    number: "01",
    title: "Discovery & Clarity",
    summary:
      "Every project begins with understanding the core objective. I prioritize asking the right questions, defining architectural boundaries, and establishing clean specifications before writing code."
  },
  {
    number: "02",
    title: "Build with Intent",
    summary:
      "Writing clean, modular, maintainable code with incremental verification. Thoughtful structures, robust type-checking, and zero bloat ensure high software longevity and effortless extensibility."
  },
  {
    number: "03",
    title: "Refine & Polish",
    summary:
      "Refining typography, responsive flow, accessibility benchmarks, and micro-interactions so every user touchpoint feels calm, intuitive, and elevated."
  }
];
