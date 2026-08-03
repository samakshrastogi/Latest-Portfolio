export type Project = {
    id: string;
    title: string;
    description: string;
    date: string;
    tech: string[];
    live?: string;
    github: string;
    image?: string;
    status?: string;
    refreshPreview?: boolean;
    position?: number;
    category?: string;
    highlights?: string[];
    featured?: boolean;
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
        items: [
            "React",
            "TypeScript",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Django templates",
        ],
        position: 1,
    },
    {
        id: "backend",
        category: "Backend",
        items: [
            "Python",
            "Node.js",
            "Django",
            "Django REST Framework",
            "REST APIs",
            "Celery",
            "APScheduler",
            "Paramiko/AsyncSSH",
        ],
        position: 2,
    },
    {
        id: "database",
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "SQLite", "Redis"],
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
            "Gunicorn",
            "WhiteNoise",
            "PEM Deployment",
        ],
        position: 4,
    },
    {
        id: "ai-ml",
        category: "AI / ML & Media",
        items: [
            "Whisper / faster-whisper",
            "Ollama",
            "LLMs",
            "LangChain",
            "LangGraph",
            "OpenCV/Pillow",
            "spaCy",
            "sentence-transformers",
            "PyTorch",
            "FFmpeg",
        ],
        position: 5,
    },
    {
        id: "data-viz",
        category: "Data & Visualization",
        items: ["Pandas", "NumPy", "OpenPyXL", "Plotly", "Matplotlib"],
        position: 6,
    },
    {
        id: "apis-realtime",
        category: "APIs & Realtime",
        items: ["Playwright", "SSE", "Socket.IO", "BullMQ", "Gmail API", "Mermaid", "Nodemailer"],
        position: 7,
    },
    {
        id: "security-systems",
        category: "Security and Systems",
        items: [
            "Data Masking",
            "Encryption",
            "SpriteSheets",
        ],
        position: 8,
    },
];

export const projects: Project[] = [
    {
        id: "sk-central",
        title: "SK Central",
        category: "Platform & Identity",
        description: "The shared identity, SSO, application catalog, analytics, notifications, and administration platform for the complete SK product ecosystem.",
        date: "Production",
        tech: ["React", "TypeScript", "Express", "MongoDB", "SSO"],
        highlights: ["Centralized identity", "Cross-app analytics", "Secure application handoff"],
        live: "https://www.sk-hub.in",
        github: "https://github.com/samakshrastogi/SK-Central",
        status: "Live",
        featured: true,
        position: 1,
    },
    {
        id: "sk-connect",
        title: "SK Connect",
        category: "Realtime Communication",
        description: "A production communication platform for code-based connections, private and public communities, stories, attachments, notifications, and realtime voice and video calling.",
        date: "Production",
        tech: ["React", "Express", "MongoDB", "Socket.IO", "WebRTC"],
        highlights: ["Realtime messaging", "WebRTC calling", "Secure media delivery"],
        live: "https://connect.sk-hub.in",
        github: "https://github.com/samakshrastogi/SK-CHAT",
        status: "Live",
        position: 2,
    },
    {
        id: "sk-mediaflow",
        title: "SK MediaFlow",
        category: "Media Platform",
        description: "A full-stack media platform for secure uploads, streaming, organizations, creator analytics, AI metadata, and cloud-based content delivery.",
        date: "Production",
        tech: ["React", "Prisma", "MongoDB", "AWS S3", "CloudFront", "FFmpeg"],
        highlights: ["Secure upload pipeline", "Adaptive media delivery", "Creator analytics"],
        live: "https://mediaflow.sk-hub.in",
        github: "https://github.com/samakshrastogi/SK-MediaFlow",
        status: "Live",
        position: 3,
    },
    {
        id: "sk-quiz",
        title: "SK Quiz Coach",
        category: "Learning Platform",
        description: "An adaptive learning product with targeted quizzes, progress analytics, personalized review loops, and coach-style guidance.",
        date: "Production",
        tech: ["React", "TypeScript", "Node.js", "MongoDB", "Analytics"],
        highlights: ["Adaptive practice", "Progress intelligence", "SK Central SSO"],
        live: "https://quiz.sk-hub.in",
        github: "https://github.com/samakshrastogi/SK-Quiz",
        status: "Live",
        position: 4,
    },
    {
        id: "sk-mailpilot",
        title: "SK MailPilot",
        category: "AI Productivity",
        description: "An intelligent Gmail workspace for inbox triage, AI-assisted replies, approvals, scheduling, automation, and auditable team workflows.",
        date: "Production",
        tech: ["Node.js", "MongoDB", "Redis", "LangGraph", "Gmail API", "BullMQ"],
        highlights: ["Inbox intelligence", "Approval workflows", "Background automation"],
        live: "https://mailpilot.sk-hub.in",
        github: "https://github.com/samakshrastogi/SK-MAILPILOT",
        status: "Live",
        position: 5,
    },
    {
        id: "sk-crawlpulse",
        title: "SK CrawlPulse",
        category: "AI Quality Engineering",
        description: "An autonomous QA and website-analysis platform that crawls applications, maps journeys, and produces structured functional, API, UI, and edge-case test coverage.",
        date: "In development",
        tech: ["Playwright", "Node.js", "MongoDB", "SSE", "Mermaid"],
        highlights: ["Autonomous crawling", "Journey mapping", "Test intelligence"],
        live: "https://crawlpulse.sk-hub.in",
        github: "https://github.com/samakshrastogi/SK-CrawlPulse",
        status: "Building",
        position: 6,
    },
    {
        id: "sk-interview",
        title: "SK Interview",
        category: "Career Intelligence",
        description: "An interview and career preparation workspace with guided practice, role discovery, AI assistance, and structured candidate workflows.",
        date: "Active development",
        tech: ["React", "TypeScript", "Node.js", "AI", "Analytics"],
        highlights: ["Interview practice", "Career discovery", "Candidate workflows"],
        github: "https://github.com/samakshrastogi/SK-Interview",
        status: "Building",
        position: 7,
    },
    {
        id: "sk-jobpilot",
        title: "SK JobPilot",
        category: "Career Automation",
        description: "An AI-assisted career copilot for job discovery, saved roles, application tracking, tailored resumes, interviews, and agent activity.",
        date: "Active development",
        tech: ["React", "TypeScript", "Node.js", "AI Agents", "REST APIs"],
        highlights: ["Job discovery", "Application tracking", "Resume workflows"],
        github: "https://github.com/samakshrastogi/SK-Jobpilot",
        status: "Building",
        position: 8,
    },
];
