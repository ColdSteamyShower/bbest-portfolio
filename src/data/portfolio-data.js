// Portfolio data extracted from resume content
export const personalInfo = {
  name: "Brennan A. Best",
  email: "bbest@chapman.edu",
  phone: "916-257-0302",
  linkedin: "https://linkedin.com/in/brennan-best",
  location: "Orange County, CA",
  title: "Software Engineer",
  bio: "Passionate Software Engineer with a Bachelor's degree from Chapman University and professional experience in full-stack development, DevOps, and team leadership. Experienced in modern web technologies, database systems, and agile development methodologies."
};

export const education = {
  institution: "Chapman University",
  location: "Orange, CA",
  degree: "Bachelor of Science in Software Engineering",
  minor: "Psychology",
  gpa: "3.6",
  duration: "August 2018 – May 2022"
};

export const experiences = [
  {
    id: "purpose-financial",
    company: "Purpose Financial",
    position: "Contract Software Engineer",
    duration: "August 2021–April 2022",
    type: "Contract",
    description: [
      "Software Engineer in professional development environment using version control, DevOps pipelines, strong communication with team and meeting client deadlines while contributing to a large codebase",
      "Created documentation for Windows users to install company tools which shortened the onboarding process",
      "Refactored CSS + React.js code by optimizing performance and transitioning projects to SASS and Tailwind for a cleaner working environment",
      "Implemented a distributed GraphQL database and performed Quality Assurance to prepare it for production",
      "Worked with third party APIs and client-created APIs while performing Quality Assurance for client APIs to prepare"
    ],
    technologies: ["React.js", "CSS", "SASS", "Tailwind", "GraphQL", "DevOps", "Quality Assurance"]
  },
  {
    id: "fyc-labs",
    company: "FYC Labs",
    position: "Contract Software Engineer",
    duration: "August 2021–April 2022",
    type: "Contract",
    description: [
      "Software Engineer in professional development environment using version control, DevOps pipelines, strong communication with team and meeting client deadlines while contributing to a large codebase",
      "Created documentation for Windows users to install company tools which shortened the onboarding process",
      "Refactored CSS + React.js code by optimizing performance and transitioning projects to SASS and Tailwind for a cleaner working environment",
      "Implemented a distributed GraphQL database and performed Quality Assurance to prepare it for production",
      "Worked with third party APIs and client-created APIs while performing Quality Assurance for client APIs to prepare"
    ],
    technologies: ["React.js", "CSS", "SASS", "Tailwind", "GraphQL", "DevOps", "Quality Assurance"]
  },
  {
    id: "advantage-presentation",
    company: "Advantage Presentation Services",
    position: "Lead Audio Visual Technician / Software Support",
    duration: "August 2017–August 2020",
    type: "Full-time",
    description: [
      "Administered commercial events by creating event orders, managed teams of technicians and freelancers on-site by delegating tasks, and communicated with clients to deliver client-facing products",
      "Configured new software tools to improve business operations, save time, and automate tasks",
      "Installed and configured network system to enable secure local and remote access to local file server",
      "Worked independently to research and repair audiovisual equipment"
    ],
    technologies: ["Network Administration", "Software Configuration", "Team Management", "Client Relations"]
  }
];

export const projects = [
  {
    id: "demessage",
    name: "DeMessage",
    url: "https://gitlab.com/ColdSteamyShower/demessage/",
    description: "A decentralized instant messaging web app built on Ethereum, IPFS and Gun.js using MetaMask and web3.js",
    details: [
      "Created a centralized Node.js server to ensure data consistency and availability that can easily be scaled",
      "Developed with task tracking and agile methodologies on Jira to simulate real world development",
      "Implemented DevOps to practice CI/CD with Docker containers, Quality Assurance, and Unit Testing"
    ],
    technologies: ["Ethereum", "IPFS", "Gun.js", "MetaMask", "Web3.js", "Node.js", "Docker", "Jira", "DevOps"]
  },
  {
    id: "quizify",
    name: "Quizify",
    url: "https://github.com/ColdSteamyShower/Quizify",
    description: "CRUD web application that uses analytics data from Spotify to quiz players on their music expertise",
    details: [
      "Built frontend with HTML, CSS, and JavaScript + React.js, with a local Express.js server to process SQL queries on a GCP MySQL database for practice with cloud technologies and server-side technologies",
      "Entity Relationship Diagram to practice relational database optimization for efficient use in cloud technology"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Express.js", "SQL", "MySQL", "Google Cloud Platform"]
  },
  {
    id: "social-media-screensaver",
    name: "Social Media Screensaver",
    url: "https://github.com/tarekel96/electron-backgroundimage-app",
    description: "Team leader in development for a cross-platform React Native application that sets social media content as your screensaver",
    details: [
      "Organized system design, developed SRS document, built RESTful API for accessing web content from Reddit, and performed configuration management for the testing environment",
      "Managed a team of 9 through the Software Development Life Cycle using agile methodologies"
    ],
    technologies: ["React Native", "Electron.js", "RESTful API", "Reddit API", "Team Leadership", "Agile"]
  }
];

export const technicalSkills = {
  languages: [
    "HTML", "CSS", "Javascript", "SQL", "Python", "Java", "C#", "C++", 
    "Objective C", "C", "LaTeX", "Haskell"
  ],
  frameworks: [
    "React", "Vue", "Nuxt", "Redux", "Web3.js", "Express.js", "Bootstrap", 
    "Tailwind", "Electron.js", "Gun.js"
  ],
  tools: [
    "NetBeans", "Git", "MySQL", "Jenkins", "GitLab", "DevOps", "Visual Studio", 
    "Unity", "Eclipse", "Webpack", "Node.js", "Google Cloud Platform", "Sass", 
    "Linux (Ubuntu, Penguin, Kali)", "WSL", "Docker"
  ]
};

export const achievements = [
  {
    id: "mediation-training",
    title: "Mediation / Conflict Resolution Training",
    description: "Completed required training to pursue work as a mediator for restorative justice",
    details: "Meets the requirements for Article 3, Section 3622 of the California Dispute Resolution Programs Act of 1986"
  },
  {
    id: "delta-queen",
    title: "Delta Queen 2022",
    description: "Lead production manager for Delta Queen 2022, a pageant event run by Delta Tau Delta fraternity for charity to Juvenile Diabetes Research Foundation",
    details: "Managed 12 performance teams, created show orders, organized full production, maintained timeline, and used communication and team management skills to raise over $27,000"
  }
];

// Navigation items for sidebar
export const navigationItems = [
  { id: "bio", label: "BIO", path: "/bio" },
  { id: "experience", label: "PROFESSIONAL EXPERIENCE", path: "/experience" },
  { id: "projects", label: "PROJECTS", path: "/projects" },
  { id: "contact", label: "CONTACT", path: "/contact" }
];
