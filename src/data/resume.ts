export const profile = {
  name: "Efe Güçlü",
  location: "Ankara, Türkiye",
  email: "efeguclu3435@gmail.com",
  github: "https://github.com/Efeguclu1",
  linkedin: "https://www.linkedin.com/in/EfeGuclu1",
};

export const education = [
  {
    school: "Sabancı University",
    detail: "B.Sc. Computer Science and Engineering (half scholarship)",
    date: "2021 – 2026",
    place: "İstanbul",
    points: [
      "Relevant coursework: Machine Learning, NLP, Statistical Modelling, Database Systems, Data Structures, Algorithms.",
    ],
  },
  {
    school: "Royal Lyceum Aalst",
    detail: "Exchange student (AFS Program)",
    date: "2017 – 2018",
    place: "Belgium",
    points: [
      "Completed a full academic year in Dutch-medium instruction; developed cross-cultural communication through immersion.",
    ],
  },
];

export const experience = [
  {
    org: "LFX Mentorship, LF Decentralized Trust",
    role: "Open Source Contributor, Hyperledger Labs (Fablo)",
    date: "2026 – Present",
    current: true,
    points: [
      "Selected for the Linux Foundation LFX Mentorship to improve the developer experience of Fablo, a CLI tool that bootstraps Hyperledger Fabric networks (2.x/3.x) from a single configuration file.",
      "Designing GitHub Actions workflows that leverage AI agents to keep documentation continuously in sync with the codebase, and building a GitHub Pages documentation site.",
      "Adding npm as a new distribution channel alongside the existing Docker image, and authoring an agent skill file for Fablo.",
      "Debugging and resolving network setup friction (intermittent errors, slow responsiveness) and submitting upstream fixes via PRs in TypeScript, Bash, and YAML.",
    ],
  },
  {
    org: "Yapı Kredi Teknoloji",
    role: "Software Engineer Intern, Fraud Detection Team",
    date: "Feb 2026 – Jun 2026",
    points: [
      "Developing backend services for real-time fraud detection using Java and Spring Boot, exposing REST APIs consumed by transaction monitoring systems.",
      "Collaborating with security engineering and platform teams on transaction monitoring pipelines, focusing on reliability and low-latency processing.",
    ],
  },
  {
    org: "Logo Yazılım",
    role: "Software Testing Intern",
    date: "Jul 2025 – Sep 2025",
    points: [
      "Built automated test suites for RESTful APIs using Apidog and Selenium, reducing manual testing effort and improving release confidence.",
      "Designed and validated end-to-end test cases for web interfaces in a CI-oriented workflow.",
    ],
  },
  {
    org: "TürkTraktör",
    role: "IT Intern",
    date: "Jul 2024 – Aug 2024",
    points: [
      "Evaluated and presented Microsoft Copilot integration strategies for enterprise-wide adoption.",
      "Researched endpoint protection and secure software practices in large-scale enterprise environments.",
    ],
  },
];

export const projects = [
  {
    slug: "thz-drone-networks",
    name: "Adaptive Protocols for High-Speed THz Drone Networks",
    label: "Graduation project",
    date: "Jan 2026",
    summary:
      "Extended a Python-based UAV network simulator for THz communication and routing protocol analysis.",
    points: [
      "Implemented a THz path loss channel model with altitude-dependent molecular absorption based on IEEE literature.",
      "Benchmarked Pure ALOHA, CSMA/CA, DSDV, OPAR, and Greedy routing protocols under different network conditions.",
      "Analyzed network metrics including throughput, latency, collisions, and hop count using controlled simulation environments.",
    ],
    stack: ["Python", "UAV simulation", "THz channel model", "Routing protocols"],
  },
  {
    slug: "gcp-ecommerce",
    name: "Cloud-Native E-Commerce Platform on GCP",
    date: "May 2025",
    summary:
      "Migrated a MERN stack app to a cloud-native architecture on GCP, decomposing the backend into RESTful microservices on GKE and serverless functions on Cloud Run.",
    points: [
      "Provisioned all infrastructure as code with Terraform; load-tested autoscaling behavior under concurrent traffic using Locust.",
      "Containerized all services with Docker and managed orchestration via Kubernetes.",
    ],
    stack: ["GCP", "GKE", "Cloud Run", "Terraform", "Locust", "MERN"],
  },
  {
    slug: "containerized-ecommerce",
    name: "Full-Stack Containerized E-Commerce Application",
    date: "May 2025",
    summary:
      "Built a production-grade web app with a Node.js REST backend and React frontend, deployed via Docker and Kubernetes.",
    points: [
      "Implemented JWT authentication, order tracking, and AES encryption following security best practices.",
      "Developed collaboratively using agile SCRUM methodology with iterative sprint cycles and code reviews.",
    ],
    stack: ["Node.js", "React", "JWT", "Docker", "Kubernetes"],
  },
  {
    slug: "stance-detection",
    name: "Stance Detection System — VAST Dataset (NLP)",
    date: "Dec 2024",
    summary:
      "Fine-tuned BERT and RoBERTa for stance classification in Python using the HuggingFace Transformers library.",
    points: [
      "Enriched inputs with Wikipedia context to improve accuracy on zero-shot targets.",
    ],
    stack: ["Python", "HuggingFace Transformers", "BERT", "RoBERTa"],
  },
];

export const skills = [
  { group: "Programming", items: ["Python", "Java", "SQL", "TypeScript"] },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "GCP", "GitHub Actions", "CI/CD", "YAML"],
  },
  { group: "Networking & Systems", items: ["Linux"] },
  { group: "Backend & APIs", items: ["Spring Boot", "REST APIs", "Node.js (Express)"] },
];

export const activities = [
  {
    org: "AI and Machine Learning Club, Sabancı University",
    role: "Active Member",
    date: "Jan 2024 – Jan 2026",
    points: [
      "Participated in workshops and collaborative ML/NLP projects within a student research community.",
    ],
  },
];

export const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Full professional proficiency" },
  { name: "Dutch", level: "Limited working proficiency" },
];
