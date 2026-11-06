export const experience = [
  {
    company: "Xelasoft Inc.",
    image: "/assets/xelasoft.png",
    monochrome: true,
    role: "Full Stack Software Engineer",
    dates: "May 2024 — Present",
    tags: ["React", "Next.js", "Angular", "TypeORM", "AI workflows"],
    points: [
      "Developed a React and Next.js application serving tens of thousands of daily users, using LLMs and AI coding tools throughout development.",
      "Built responsive Angular interfaces and secure data retrieval and persistence solutions with TypeORM, integrating frontend components, backend services, and third-party APIs.",
      "Used AI to build data pipelines and multi-bot workflows, including cleanup and verification steps to check outputs and task completion.",
      "Configured automated CI checks within CI/CD workflows to support code quality and collaborated with cross-functional teams on product delivery.",
    ],
  },
  {
    company: "VectorSolv Inc.",
    role: "Full Stack Software Developer",
    dates: "Jan 2022 — Feb 2024",
    image: "/assets/vectorsolv.png",
    tags: ["TypeScript", "Angular", "TypeORM", "MySQL"],
    points: [
      "Designed and built reusable pages, components, and dialogs for administrative and customer-facing web portals using TypeScript, Angular, and HTML.",
      "Implemented backend API endpoints to create, retrieve, and update data using TypeORM and MySQL.",
      "Contributed to system design, daily stand-ups, code reviews, and task delegation, and mentored more than eight co-op students in design principles and development practices.",
      "Configured automated CI checks within CI/CD workflows to support code quality.",
    ],
  },
  {
    company: "Kids Great Minds",
    role: "Programming Course Instructor",
    dates: "Jun 2020 — Jan 2022",
    image: "/assets/KGM.png",
    tags: ["Python", "Ruby", "Java", "Teaching"],
    points: [
      "Taught introductory and advanced Python, Ruby, and Java concepts to students aged 7-14.",
      "Adapted lesson plans to students' abilities to make programming concepts approachable.",
      "Collaborated on an adventure game designed to teach financial concepts to high-school students.",
    ],
  },
  {
    company: "Environment and Climate Change Canada",
    role: "Atmospheric Chemist",
    dates: "Sep — Dec 2019",
    image: "/assets/canada.png",
    tags: ["Data analysis", "Automation", "Research"],
    points: [
      "Developed automation tools to analyze and organize atmospheric chemical-distribution data over the oil sands.",
      "Computed time shifts to align datasets and monitored real-time measurements for inaccuracies.",
    ],
  },
  {
    company: "Natural Resources Canada",
    role: "Research Assistant",
    dates: "Jan — Apr 2019",
    image: "/assets/canada.png",
    tags: ["Statistical analysis", "Visualization", "Space weather"],
    points: [
      "Researched the effects of space weather on GPS through statistical analysis of correlated datasets.",
      "Created detailed scatter plots, histograms, and 3D graphs using Origin and authored a scientific paper presenting the results.",
    ],
  },
];

export const projects = [
  {
    name: "Locus UI",
    logo: "/assets/locus-ui.svg",
    category: "Component library",
    description:
      "An optionally unstyled React component library built around accessibility, customization, and reusable interfaces. The components behind this site.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://locus-ui.com/",
    source: "https://github.com/LocusInc/locus-ui",
    visual: "locus",
  },
  {
    name: "Mana Locus",
    logo: "/assets/mana-locus.svg",
    category: "Deck building & collection management",
    description:
      "An open-source application for building decks and managing a Magic: The Gathering collection, bringing cards and deck-building tools into one place.",
    tags: ["React", "TypeScript", "Open source"],
    href: "https://www.manalocus.com/",
    source: "https://github.com/AsteroidDown/ManaLocus",
    visual: "mana",
  },
  {
    name: "Life Tracker",
    logo: "/assets/life-tracker-logo.png",
    category: "Game companion",
    description:
      "A companion app for tracking life totals in Magic: the Gathering. Keep the focus on the game with a simple, colorful counter for every player.",
    tags: ["Flutter", "Dart"],
    href: "https://asteroiddown.github.io/life-tracker/",
    visual: "life",
  },
];

export const contacts = [
  {
    name: "Email",
    detail: "jasper@stahmer.ca",
    href: "mailto:jasper@stahmer.ca",
    icon: "email",
  },
  {
    name: "LinkedIn",
    detail: "Let's connect",
    href: "https://www.linkedin.com/in/jasperstahmer/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    detail: "AsteroidDown",
    href: "https://github.com/AsteroidDown",
    icon: "github",
  },
  {
    name: "Phone",
    detail: "(647) 574-6240",
    href: "tel:6475746240",
    icon: "phone",
  },
];
