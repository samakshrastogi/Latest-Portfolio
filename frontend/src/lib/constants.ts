export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    live: string;
    github: string;
    image?: string;
    position?: number;
};

export type SkillGroup = {
    id: string;
    category: string;
    items: string[];
    position?: number;
};

// Replace these arrays with your own portfolio data when ready.
export const skills: SkillGroup[] = [
    {
        id: "frontend",
        category: "Frontend",
        items: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
        position: 1,
    },
    {
        id: "backend",
        category: "Backend",
        items: ["Node.js", "Django", "REST APIs"],
        position: 2,
    },
    {
        id: "database",
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "SQLite3"],
        position: 3,
    },
    {
        id: "cloud-devops",
        category: "Cloud & DevOps",
        items: [
            "AWS S3",
            "CloudFront",
            "Azure SSO",
            "Google SSO",
            "Vercel",
            "Netlify",
            "Render",
            "PEM Deployment",
        ],
        position: 4,
    },
    {
        id: "ai-ml",
        category: "AI / ML",
        items: ["Whisper", "Ollama", "LLMs", "FFmpeg", "Nodemailer"],
        position: 5,
    },
    {
        id: "security-systems",
        category: "Security and Systems",
        items: [
            "Data Masking",
            "Encryption",
            "SpriteSheets",
        ],
        position: 6,
    },
];

export const projects: Project[] = [
    {
        id: "sk-crawlpulse",
        title: "SK CrawlPulse",
        description:
            "An autonomous AI-powered QA and website analysis platform that crawls live web applications, maps user journeys, and generates structured test scenarios across functional, API, UI/UX, and edge-case coverage.",
        tech: ["Playwright", "Node.js", "MongoDB", "SSE", "Mermaid"],
        live: "https://sk-hub.com/crawlpulse",
        github: "#",
        position: 1,
    },
    {
        id: "sk-mailpilot",
        title: "SK MailPilot",
        description:
            "An AI-driven Gmail workspace that transforms inbox management into an intelligent workflow system with automated triage, smart replies, approvals, and task orchestration.",
        live: "https://sk-hub.com/mailpilot",
        tech: [
            "Node.js",
            "MongoDB",
            "Redis",
            "LangChain",
            "LangGraph",
            "Ollama",
            "BullMQ",
            "Gmail API",
            "SSE",
        ],
        github: "#",
        position: 2,
    },
    {
        id: "sk-mediaflow",
        title: "SK MediaFlow",
        description:
            "A full-stack media platform for streaming and content management with automated video processing, AI metadata generation, and secure delivery pipelines.",
        tech: [
            "AWS S3",
            "CloudFront",
            "Redis",
            "Socket.IO",
            "FFmpeg",
            "Ollama",
        ],
        live: "https://sk-hub.com/mediaflow",
        github: "#",
        position: 3,
    },
];
