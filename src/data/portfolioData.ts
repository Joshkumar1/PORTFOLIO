import type { Project, SkillCategory, JourneyStep, DifferenceCard, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: "G. Josh Kumar",
  roles: ["Software Engineer", "Full Stack Developer", "AI Enthusiast", "Problem Solver"],
  tagline: "I don't just build applications—I engineer experiences that solve real-world problems through thoughtful design, scalable architecture, and intelligent software.",
  heroDescription: `I am a Computer Science student passionate about building impactful software that combines modern web technologies with artificial intelligence. I enjoy transforming complex ideas into intuitive digital experiences while continuously learning new technologies and solving challenging engineering problems.

Instead of simply writing code, I focus on understanding problems deeply, designing scalable systems, and creating products that people genuinely enjoy using.`,
  email: "joshkumar146@gmail.com",
  location: "India",
  github: "https://github.com/Joshkumar1",
  linkedin: "https://www.linkedin.com/in/joshkumar01/",
};

export const ABOUT_STORY = {
  curiosity: {
    title: "Unquenchable Technological Curiosity",
    content: "My fascination began with understanding how software transforms abstract logic into tools used by millions daily. I was never satisfied with just using apps—I needed to break them down, inspect their components, and understand how data flows end-to-end."
  },
  passion: {
    title: "Passion for Engineering & Craftsmanship",
    content: "Software engineering to me is an art form constrained by mathematics and performance. Crafting responsive interfaces, decoupling state management, and writing clean maintainable code brings immense satisfaction."
  },
  problemSolving: {
    title: "First-Principles Problem Solving",
    content: "Technology is simply a means to an end. My primary focus is always on the problem itself: identifying bottlenecks, simplifying user friction, and engineering minimal yet robust solutions."
  },
  aiInterest: {
    title: "Applied Artificial Intelligence",
    content: "I am fascinated by modern AI not as a gimmick, but as an amplifier for human capability. Integrating natural language models, computer vision, and predictive analytics directly into web workflows opens unprecedented software paradigms."
  },
  continuousLearning: {
    title: "Relentless Growth Mindset",
    content: "The tech ecosystem moves at lightning speed. I embrace continuous learning by constantly building projects, exploring emerging frameworks, reading source code, and refactoring existing projects with better patterns."
  },
  cleanArchitecture: {
    title: "Clean Architecture & Scalability",
    content: "I advocate for modular, predictable, and self-documenting code. Clear separation of concerns, strong type safety, and robust API design ensure systems remain extensible over time."
  },
  uiuxDetail: {
    title: "Meticulous UI/UX Craftsmanship",
    content: "A powerful backend deserves an intuitive frontend. I place high emphasis on typography, micro-interactions, layout ergonomics, and sub-100ms response times so users feel delight in every interaction."
  },
  practicalImpact: {
    title: "Building for Practical Impact",
    content: "Every project in my portfolio is born out of a real desire to address actual needs—whether it's making complex DSA concepts intuitive or accelerating satellite imagery visualization."
  }
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 92, experience: "Primary Library", iconName: "Atom" },
      { name: "TypeScript", level: 88, experience: "Type-Safe Production", iconName: "FileCode2" },
      { name: "JavaScript", level: 94, experience: "ES6+ Fundamentals", iconName: "Code2" },
      { name: "HTML5", level: 95, experience: "Semantic Structure", iconName: "Layout" },
      { name: "CSS3", level: 90, experience: "Flex/Grid & Animations", iconName: "Palette" },
      { name: "Tailwind CSS", level: 92, experience: "Utility-First Design", iconName: "Wind" },
      { name: "Responsive Design", level: 95, experience: "Mobile-First UX", iconName: "Smartphone" },
      { name: "Framer Motion", level: 85, experience: "Declarative Animations", iconName: "Sparkles" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88, experience: "Event-Driven Runtime", iconName: "Server" },
      { name: "Express.js", level: 86, experience: "REST API Framework", iconName: "Cpu" },
      { name: "REST APIs", level: 90, experience: "Resource Architecture", iconName: "Network" },
      { name: "Authentication", level: 84, experience: "JWT & OAuth Patterns", iconName: "ShieldCheck" },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 85, experience: "Document Database & Aggregations", iconName: "Database" },
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "Java", level: 86, experience: "OOP & Data Structures", iconName: "Coffee" },
      { name: "Python", level: 88, experience: "Data Analysis & Scripting", iconName: "Terminal" },
      { name: "JavaScript", level: 94, experience: "Full Stack Execution", iconName: "Code2" },
    ]
  },
  {
    category: "AI & Data",
    skills: [
      { name: "Pandas", level: 80, experience: "Data Manipulation", iconName: "Table" },
      { name: "NumPy", level: 78, experience: "Vector Mathematics", iconName: "Binary" },
      { name: "Machine Learning Basics", level: 75, experience: "Model Integration & Logic", iconName: "Brain" },
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: 90, experience: "Version Control & Branching", iconName: "GitBranch" },
      { name: "GitHub", level: 92, experience: "Collaboration & Actions", iconName: "Code2" },
      { name: "VS Code", level: 95, experience: "Customized Environment", iconName: "Laptop" },
      { name: "Docker", level: 76, experience: "Containerization Basics", iconName: "Box" },
      { name: "Postman", level: 88, experience: "API Testing & Docs", iconName: "Send" },
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "bitwise-beast",
    title: "BitwiseBeast",
    category: "AI-Powered DSA Learning Platform",
    subtitle: "Guides learners through thinking patterns, visual explanations, and adaptive hints instead of static solutions.",
    description: "An intelligent learning platform designed to help students truly understand Data Structures and Algorithms instead of memorizing solutions.",
    longDescription: "Traditional DSA platforms present problem statements and test cases, forcing students to guess solutions or memorize code. BitwiseBeast reverses this paradigm by providing an interactive AI mentor that breaks down problem constraints, analyzes algorithmic pattern matches (e.g. Sliding Window vs Two Pointers), visualizes memory layouts, and offers adaptive hints when stuck.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "AI-powered learning assistant with adaptive hint levels",
      "Structured DSA roadmap mapped by algorithmic patterns",
      "Interactive visual explanations for memory pointer movements",
      "Pattern-based learning engine (Graph, DP, Sliding Window)",
      "Personalized learning flow based on problem-solving speed",
      "Real-time code evaluation and time-complexity breakdown",
      "Clean developer dashboard with progress analytics",
      "Fluid responsive UI tuned for desktop code editing & mobile study"
    ],
    challenges: [
      "Preventing AI mentors from revealing direct answers while maintaining constructive guidance.",
      "Rendering complex data structure states (trees, graphs, arrays) smoothly without UI re-render bottlenecks.",
      "Structuring stateful multi-step hint trees in MongoDB for quick lookups."
    ],
    engineeringDecisions: [
      "Designed a tiered prompt architecture that converts raw code submissions into execution AST insights rather than generic LLM responses.",
      "Implemented optimistic UI rendering for node graph transitions to keep step-by-step visualizers running at 60 FPS.",
      "Constructed a REST API pipeline with stateless JWT validation for instant sandbox execution requests."
    ],
    whatILearned: [
      "Deepened understanding of state machine design for step-by-step visualizers.",
      "Mastered prompt engineering strategies for educational and diagnostic workflows.",
      "Gained hands-on experience in building scalable custom UI components for technical code environments."
    ],
    githubUrl: "https://github.com/Joshkumar1/bitwisebeast",
    liveUrl: "https://bitwisebeast-demo.vercel.app",
    featured: true,
    accentColor: "from-cyan-500 to-blue-600",
    demoType: "dsa"
  },
  {
    id: "cryptovision",
    title: "CryptoVision",
    category: "Institutional Crypto Intelligence & Quantitative Terminal",
    subtitle: "Deterministic on-chain telemetry, anti-hype reality engine, and multi-provider quantitative terminal.",
    description: "An institutional-grade crypto intelligence workstation and quantitative terminal that cross-examines marketing whitepaper claims against empirical blockchain telemetry, smart contract liquidity, commit velocity, and structural tokenomic risk models.",
    longDescription: "Over 90% of cryptocurrency projects fail due to deliberate obfuscation: low-float/high-FDV dilution traps, unbacked partnership claims, and dormant codebases. CryptoVision serves as the truth layer for digital assets. By ingesting live multi-provider telemetry across market feeds (CoinGecko), liquidity and TVL (DeFiLlama), developer codebase velocity (GitHub REST APIs), and verified smart contract addresses, CryptoVision programmatically evaluates digital assets through a deterministic mathematical framework. Features include an automated Market Regime Engine, Visual Treemap Heatmaps, a 12-Step Due Diligence Framework generating exportable IC memorandums, Structural Red Flag & Dilution Scanners, and an Algorithmic Backtesting Lab.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "TanStack Query", "Node.js", "Express", "CoinGecko & DeFiLlama APIs"],
    features: [
      "Deterministic Anti-Hype Reality Engine cross-examining claims against on-chain facts",
      "Macro Market Regime Engine classifying market states (Bullish, Bearish, Volatile) with confidence scoring",
      "Structural Red Flag Radar detecting low-float/high-FDV traps and whale concentration risks",
      "12-Step Institutional Due Diligence framework producing exportable IC research memorandums",
      "Algorithmic Backtest Lab simulating DCA and RSI mean reversion with Sharpe ratio and max drawdown metrics",
      "High-density Recharts financial charts with RSI, MACD, 20/50 SMA crosses, and Bollinger Bands",
      "Interactive Visual Treemap Market Heatmap and multi-timeframe asset explorers",
      "Server-side in-memory caching layer with TTL expiration reducing external provider egress by 70%"
    ],
    challenges: [
      "Normalizing disparate data payloads from heterogeneous providers (CoinGecko, DeFiLlama, GitHub REST APIs) into unified TypeScript models without UI thread degradation.",
      "Managing strict API rate limits and network latency while providing real-time telemetry across 100+ digital assets.",
      "Architecting a high-density, multi-persona workstation interface (Explore, Research, Analyst) that scales seamlessly from mobile to 4K displays."
    ],
    engineeringDecisions: [
      "Engineered a provider-agnostic data normalization pipeline with strict runtime schemas, ensuring analytical engines consume strictly verified models.",
      "Architected a server-side Node.js/Express in-memory caching microservice with TTL expiration, cutting third-party network egress by over 70%.",
      "Decoupled charting drivers into optimized Recharts canvas components and TanStack Query stale-while-revalidate caching to eliminate UI thread latency."
    ],
    whatILearned: [
      "Mastered quantitative finance risk modeling, tokenomic health evaluation (FDV-to-market-cap ratios), and TVL stability indicators.",
      "Gained deep expertise in React 19 concurrent state handling and TanStack Query cache orchestration.",
      "Refined institutional fintech UX standards: dark luxury ergonomics, high information density, and sub-100ms response times."
    ],
    githubUrl: "https://github.com/Joshkumar1/CryptoVision",
    liveUrl: "https://cryptovision-hjka.onrender.com",
    featured: true,
    accentColor: "from-indigo-500 to-violet-600",
    demoType: "crypto"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    category: "Dynamic Web Application",
    subtitle: "Real-time weather tracking with async REST APIs and clean DOM rendering.",
    description: "A responsive weather application that provides accurate real-time weather information through external API integration while delivering a clean and intuitive user experience.",
    longDescription: "Built with a deep focus on core JavaScript fundamentals, this application highlights asynchronous data fetching, DOM manipulation, custom geolocation lookups, and dynamic theme switching based on local weather conditions (rain, clear, snow, thunderstorms).",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs"],
    features: [
      "Current weather metrics (temperature, humidity, wind speed, pressure)",
      "5-day detailed weather forecast breakdown",
      "Global city search with auto-complete recommendations",
      "Dynamic weather condition icons and thematic backdrop transitions",
      "Automatic user geolocation discovery",
      "Fully mobile-responsive glassmorphism interface"
    ],
    challenges: [
      "Managing asynchronous promise chains cleanly without nested callback hell or unhandled API errors.",
      "Ensuring smooth UI state changes when loading dynamic weather icons and backgrounds."
    ],
    engineeringDecisions: [
      "Utilized async/await syntax paired with robust try/catch blocks and user-friendly error banners.",
      "Employed modular vanilla JS ES modules to separate API data fetching, DOM rendering, and event listeners.",
      "Designed pure CSS glassmorphism styles with zero heavy CSS framework dependencies for maximum performance."
    ],
    whatILearned: [
      "Deepened mastery of native JavaScript DOM methods and event loop behavior.",
      "Hands-on experience with browser Geolocation APIs and unit conversion algorithms.",
      "Creating performant pure CSS animations without framework overhead."
    ],
    githubUrl: "https://github.com/Joshkumar1/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    demoType: "weather"
  },
  {
    id: "studio-ai-eo-platform",
    title: "Studio AI EO Platform",
    category: "Earth Observation & AI Visualization",
    subtitle: "Simplifies satellite imagery analysis with computer vision techniques and modern web workflows.",
    description: "An AI-powered Earth Observation platform designed to simplify satellite imagery analysis using intelligent computer vision techniques and modern web technologies.",
    longDescription: "High-resolution satellite imagery presents immense spatial data complexity. Studio AI EO Platform connects intelligent computer vision models with an interactive map interface, allowing users to analyze land cover changes, vegetation indices (NDVI), and urban expansion through intuitive split-view controls.",
    techStack: ["React", "Python", "AI / Machine Learning", "Node.js", "Tailwind CSS"],
    features: [
      "Multi-band satellite image visualization and contrast controls",
      "Intelligent land cover classification overlay (Vegetation, Water, Urban)",
      "Interactive split-screen comparison slider for temporal changes",
      "AI-assisted region selection and metadata extraction",
      "Modern dark-mode dashboard tailored for geospatial exploration"
    ],
    challenges: [
      "Displaying large spatial images in the browser without freezing the UI thread.",
      "Translating Python ML model predictions into web-friendly JSON overlay coordinates."
    ],
    engineeringDecisions: [
      "Structured a decoupled system architecture: Node.js gateway handles frontend requests while communicating with Python inference scripts.",
      "Used SVG vector masks and Canvas tiles for smooth spatial overlay rendering at high zoom levels.",
      "Employed progressive image loader techniques to stream low-res placeholders before high-res tiles render."
    ],
    whatILearned: [
      "Architectural principles for bridging Python ML microservices with React frontends.",
      "Geospatial data formats (GeoTIFF, GeoJSON) and web visualization pipelines.",
      "Designing complex multi-pane software interfaces for specialized domain tools."
    ],
    githubUrl: "https://github.com/Joshkumar1/studio-ai-eo-platform",
    liveUrl: "https://studio-ai-eo.vercel.app",
    featured: true,
    accentColor: "from-amber-500 to-rose-600",
    demoType: "satellite"
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    year: "2023",
    title: "Started Web Development",
    description: "Sparked my journey by dissecting HTML structure, CSS layouts, and understanding how web browsers render web pages.",
    tag: "Foundation",
    icon: "BookOpen"
  },
  {
    year: "2023",
    title: "Learned JavaScript",
    description: "Mastered ES6+ syntax, asynchronous programming, event-driven loops, and native DOM manipulation.",
    tag: "Core Logic",
    icon: "Code"
  },
  {
    year: "2023 - 2024",
    title: "Built Responsive Websites",
    description: "Created mobile-first user interfaces focusing on flexbox, grid systems, accessibility, and smooth CSS transitions.",
    tag: "UI Engineering",
    icon: "Layout"
  },
  {
    year: "2024",
    title: "Learned React & TypeScript",
    description: "Transitioned to component-driven architecture, state management, hooks, and type-safe frontend application design.",
    tag: "Modern Frontend",
    icon: "Layers"
  },
  {
    year: "2024",
    title: "Backend Development",
    description: "Expanded into server-side programming with Node.js, Express, RESTful APIs, JWT auth, and MongoDB database design.",
    tag: "Server Side",
    icon: "Server"
  },
  {
    year: "2024 - 2025",
    title: "Full Stack Projects",
    description: "Engineered complete end-to-end applications integrating authentication, database persistence, and optimized frontend UIs.",
    tag: "End-to-End",
    icon: "Zap"
  },
  {
    year: "2025",
    title: "Artificial Intelligence",
    description: "Dived into AI concepts, machine learning fundamentals, data analysis with Python (Pandas/NumPy), and LLM API integrations.",
    tag: "AI Exploration",
    icon: "Brain"
  },
  {
    year: "Present",
    title: "Building Intelligent Applications",
    description: "Combining full-stack software architecture with intelligent AI models to engineer practical, high-impact products.",
    tag: "Innovation",
    icon: "Sparkles"
  }
];

export const DIFFERENTIATORS: DifferenceCard[] = [
  {
    title: "Problem-First Thinking",
    description: "I prioritize understanding the problem deeply before choosing technologies.",
    detail: "Rather than jumping straight to coding, I map out requirements, analyze constraints, and choose stack components based on real architectural needs.",
    icon: "Target"
  },
  {
    title: "Continuous Learning",
    description: "Every project is an opportunity to explore better architectures and modern practices.",
    detail: "I actively seek out code reviews, stay updated with web standards, and constantly refactor personal work to adopt modern engineering patterns.",
    icon: "TrendingUp"
  },
  {
    title: "Scalable Development",
    description: "I believe maintainable software comes from thoughtful design rather than quick fixes.",
    detail: "Writing clean, type-safe, self-documenting code with clear separation of concerns ensures products can scale gracefully as requirements evolve.",
    icon: "Cpu"
  },
  {
    title: "User-Centered Design",
    description: "Technology should feel effortless to the people using it.",
    detail: "Complex backend systems and AI models are only as good as the user experience. I build UIs that are fast, intuitive, accessible, and delightful.",
    icon: "Heart"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "Multiple Full Stack Projects",
    subtitle: "Built end-to-end applications combining React, Node.js, Express, and MongoDB.",
    icon: "Box",
    badge: "Production Ready"
  },
  {
    title: "Strong Interest in AI",
    subtitle: "Active exploration of ML models, prompt engineering, and LLM API applications.",
    icon: "Brain",
    badge: "AI Powered"
  },
  {
    title: "Continuous DSA Learning",
    subtitle: "Regular practice of algorithmic patterns, data structures, and optimization.",
    icon: "Binary",
    badge: "Problem Solving"
  },
  {
    title: "Modern Web Development",
    subtitle: "Expertise in React, TypeScript, Tailwind CSS, and Framer Motion workflows.",
    icon: "Code2",
    badge: "Modern Stack"
  },
  {
    title: "Open Source Portfolio",
    subtitle: "Public GitHub repositories showcasing clean code, commit history, and documentation.",
    icon: "Code2",
    badge: "Transparent"
  },
  {
    title: "Clean Software Architecture",
    subtitle: "Focus on type safety, modular design, clean code standards, and REST principles.",
    icon: "Shield",
    badge: "Craftsmanship"
  }
];

export const GITHUB_REPOS = [
  {
    name: "BitwiseBeast",
    description: "AI-Powered DSA learning platform with step-by-step thinking guidance.",
    language: "TypeScript",
    stars: 28,
    forks: 7,
    updated: "2 days ago",
    color: "#3178c6"
  },
  {
    name: "CryptoVision",
    description: "Institutional-grade crypto intelligence terminal & quantitative research workstation with deterministic on-chain telemetry.",
    language: "TypeScript",
    stars: 32,
    forks: 8,
    updated: "Recently updated",
    color: "#3178c6"
  },
  {
    name: "Studio-AI-EO-Platform",
    description: "Satellite imagery analysis web platform powered by computer vision.",
    language: "Python / React",
    stars: 34,
    forks: 9,
    updated: "3 days ago",
    color: "#3572A5"
  },
  {
    name: "Weather-Dashboard",
    description: "Responsive weather application using native JS modules and REST APIs.",
    language: "JavaScript",
    stars: 14,
    forks: 2,
    updated: "2 weeks ago",
    color: "#f1e05a"
  }
];

export const RESUME_DATA = {
  header: {
    name: "G. JOSH KUMAR",
    title: "Software Engineer | Full Stack Developer | AI/ML Enthusiast",
    location: "India",
    email: "joshkumar146@gmail.com",
    phone: "+91 98765 43210",
    linkedin: "linkedin.com/in/joshkumar01",
    github: "github.com/Joshkumar1",
    portfolio: "joshkumar.dev",
  },
  summary:
    "Analytical and outcome-driven Software Engineer with expertise in full-stack web architecture, React/TypeScript frontends, Node.js microservices, and applied AI workflows. Recognized for calm composure under complex technical constraints, taking end-to-end ownership from problem breakdown to high-throughput production deployment. A craft-focused engineer committed to writing clean, type-safe, maintainable code, supporting teammates, and engineering scalable products that solve real-world problems.",
  skills: [
    {
      category: "Languages",
      skills: ["Java", "Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Frontend Architecture",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive UX", "State Management", "DOM Performance"]
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT & OAuth", "System Architecture", "Microservices"]
    },
    {
      category: "Database & Storage",
      skills: ["MongoDB", "Schema Design", "Aggregation Pipelines", "Query Optimization"]
    },
    {
      category: "Data & Artificial Intelligence",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Prompt Engineering", "LLM API Integration", "Computer Vision Overlays"]
    },
    {
      category: "Developer Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vite", "Oxlint / ESLint"]
    }
  ],
  projects: [
    {
      title: "BitwiseBeast",
      category: "AI-Powered DSA Learning Platform",
      subtitle: "Interactive algorithmic mentor & step-by-step visualizer",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      bullets: [
        "Identified key friction in static DSA learning environments and engineered an adaptive AI mentor that guides problem decomposition instead of presenting raw answers.",
        "Architected a tiered prompt processing engine with Node.js and Express to convert user code submissions into Abstract Syntax Tree (AST) insights for tailored hints.",
        "Implemented high-performance state-machine visualizers using optimistic UI rendering, rendering memory pointer movements smoothly at 60 FPS.",
        "Designed stateful hint trees in MongoDB with stateless JWT authentication, processing sandbox execution requests with sub-150ms API response times."
      ]
    },
    {
      title: "CryptoVision",
      category: "Institutional Crypto Intelligence & Quantitative Terminal",
      subtitle: "Deterministic on-chain telemetry, anti-hype reality engine, and multi-provider quantitative workstation",
      technologies: ["React 19", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Recharts", "TanStack Query", "REST APIs"],
      bullets: [
        "Architected an institutional-grade crypto intelligence workstation integrating live multi-provider telemetry from CoinGecko, DeFiLlama, and GitHub REST APIs.",
        "Engineered a deterministic Anti-Hype Reality Engine that audits marketing claims against empirical smart contract TVL, commit velocity, and active liquidity.",
        "Implemented a resilient Node.js/Express in-memory caching layer with TTL expiration and rate-limiting dampeners, reducing third-party API egress by 70%.",
        "Built an Algorithmic Backtesting Lab and high-density Recharts analytics suite simulating DCA and mean-reversion strategies with Sharpe ratios and maximum drawdown metrics."
      ]
    },
    {
      title: "Studio AI EO Platform",
      category: "Earth Observation & AI Visualization Platform",
      subtitle: "Geospatial satellite imagery computer vision tool",
      technologies: ["React", "Python", "AI / Machine Learning", "Node.js", "Tailwind CSS"],
      bullets: [
        "Built a geospatial web application that simplifies multi-band satellite image visualization and computer vision land cover classification (NDVI, urban, water).",
        "Architected a decoupled microservices setup connecting a React interface with Python machine learning scripts through a lightweight Node.js gateway.",
        "Utilized SVG vector masks and HTML Canvas tile streaming to render high-resolution land classification overlays smoothly without freezing the UI thread.",
        "Created an interactive split-view comparison slider for temporal change detection across satellite datasets."
      ]
    },
    {
      title: "Weather Dashboard",
      category: "Dynamic Web Application",
      subtitle: "Asynchronous weather forecasting SPA with native JS modules",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs"],
      bullets: [
        "Developed a responsive weather dashboard featuring real-time condition lookups, 5-day forecasts, and automatic browser geolocation discovery.",
        "Utilized clean ES6+ JavaScript modules to maintain strict separation of concerns across asynchronous API fetching, DOM rendering, and event handlers.",
        "Crafted a zero-framework pure CSS glassmorphism UI with dynamic condition-based theme adapters and robust error banner boundaries."
      ]
    }
  ],
  experience: [
    {
      role: "Full-Stack Software Engineering Projects & Open Source",
      organization: "Independent & Collaborative Development",
      period: "2023 – Present",
      location: "India",
      bullets: [
        "Architected and delivered 4+ end-to-end full-stack software applications using React, TypeScript, Node.js, and MongoDB, prioritizing scalability and clean separation of concerns.",
        "Championed code quality, self-documenting codebases, and strong type safety, conducting continuous refactoring and performance optimization for sub-100ms interaction latency.",
        "Maintained public GitHub repositories showcasing clear commit histories, architectural design notes, and rigorous test coverage."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology / B.S. in Computer Science & Engineering",
      institution: "University Institute of Technology",
      period: "2022 – 2026 (Expected)",
      location: "India",
      details: "Core Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Object-Oriented Programming (Java)."
    }
  ],
  achievements: [
    {
      title: "Full-Stack Systems Craftsmanship",
      description: "Designed and deployed 4 production-grade full-stack applications with modular architecture, robust API error handling, and type safety."
    },
    {
      title: "Applied AI & Algorithmic Mentorship",
      description: "Built custom multi-tiered prompt architecture isolating execution AST logic from LLM prompt engines for educational platforms."
    },
    {
      title: "API Optimization & Caching",
      description: "Engineered server-side TTL memory caching systems that reduced external third-party API dependencies and network calls by 70%."
    },
    {
      title: "Algorithmic Pattern Mastery",
      description: "Consistent practice of complex Data Structures and Algorithms focusing on Graph theory, Dynamic Programming, and time-complexity optimization."
    }
  ]
};

