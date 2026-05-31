export type Project = {
    id: string;
    title: string;
    description: string;
    date: string;
    tech: string[];
    live: string;
    github: string;
    image?: string;
    status?: string;
    refreshPreview?: boolean;
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
        date: "04/2026 - Present",
        tech: ["Playwright", "Node.js", "MongoDB", "SSE", "Mermaid"],
        live: "https://crawlpulse.sk-hub.in",
        github: "https://github.com/samakshrastogi/SK-CrawlPulse",
        status: "Working",
        position: 1,
    },
    {
        id: "sk-mailpilot",
        title: "SK MailPilot",
        description:
            "An AI-driven Gmail workspace that transforms inbox management into an intelligent workflow system with automated triage, smart replies, approvals, and task orchestration.",
        date: "04/2026 - 04/2026",
        live: "https://mailpilot.sk-hub.in/",
        refreshPreview: true,
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
        github: "https://github.com/samakshrastogi/SK-MAILPILOT",
        position: 2,
    },
    {
        id: "sk-mediaflow",
        title: "SK MediaFlow",
        description:
            "A full-stack media platform for streaming and content management with automated video processing, AI metadata generation, and secure delivery pipelines.",
        date: "02/2026 - 05/2026",
        tech: [
            "AWS S3",
            "CloudFront",
            "Redis",
            "Socket.IO",
            "FFmpeg",
            "Ollama",
        ],
        live: "https://mediaflow.sk-hub.in",
        github: "https://github.com/samakshrastogi/SK-MediaFlow",
        position: 3,
    },
];
