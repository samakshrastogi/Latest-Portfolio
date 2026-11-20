export type WorkspaceItem = {
    title: string;
    subtitle: string;
    description: string;
    tags?: string[];
};

export type Project = {
    id: string;
    title: string;
    description: string;
    date: string;
    tech: string[];
    live?: string;
    github?: string;
    image?: string;
    status?: string;
    refreshPreview?: boolean;
    position?: number;
    category?: string;
    highlights?: string[];
    workspaces?: WorkspaceItem[];
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
        id: "programming-languages",
        category: "Programming Languages",
        items: [
            "Python",
            "TypeScript",
            "JavaScript",
            "SQL",
        ],
        position: 1,
    },
    {
        id: "backend-apis",
        category: "Backend & APIs",
        items: [
            "Django",
            "Django REST Framework (DRF)",
            "Node.js",
            "Express.js",
            "RESTful APIs",
        ],
        position: 2,
    },
    {
        id: "databases-caching",
        category: "Databases & Caching",
        items: [
            "MongoDB",
            "Redis",
            "SQLite",
        ],
        position: 3,
    },
    {
        id: "frontend-technologies",
        category: "Frontend Technologies",
        items: [
            "React.js",
            "Vite",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
        ],
        position: 4,
    },
    {
        id: "engineering-automation",
        category: "Engineering & Automation",
        items: [
            "Workflow Automation",
            "Background Job Processing",
            "Data Processing",
            "JWT Authentication",
            "Role-Based Access Control (RBAC)",
            "Google OAuth",
        ],
        position: 5,
    },
];

export const projects: Project[] = [
    {
        id: "sk-control",
        title: "SK Control",
        category: "AI Agent Orchestration & Automation Platform",
        description:
            "Designed and developed a centralized web platform for managing and orchestrating three specialized AI-powered workspaces, focused on content automation, website diagnostics, and digital marketing.",
        date: "11/2026 – Present",
        tech: [
            "Python",
            "TypeScript",
            "React.js",
            "Node.js",
            "Django REST Framework",
            "MongoDB",
            "Redis",
            "AI Agent Workflows",
            "Workflow Automation",
        ],
        highlights: [
            "Centralized web platform for AI agent orchestration & automation",
            "Three integrated workspaces: Shorts Studio, Web Engine & Growth Engine",
            "Automated background processing, diagnostics, and campaign generation workflows",
        ],
        workspaces: [
            {
                title: "Shorts Studio",
                subtitle: "AI Video Generation",
                description:
                    "Developing AI-assisted video processing workflows to convert long-form videos into short clips using intelligent highlight identification and smart framing.",
                tags: ["Highlight Identification", "Smart Framing", "Video Workflows"],
            },
            {
                title: "Web Engine",
                subtitle: "Website Testing & Diagnostics",
                description:
                    "Building automated website analysis workflows to evaluate performance, cross-device responsiveness, and user experience.",
                tags: ["Automated Diagnostics", "Responsiveness", "UX Analysis"],
            },
            {
                title: "Growth Engine",
                subtitle: "AI Marketing & Campaigns",
                description:
                    "Developing AI-powered workflows for marketing campaign creation, persuasive content generation, and customer acquisition strategies.",
                tags: ["Campaign Creation", "Content Generation", "Acquisition Strategies"],
            },
        ],
        live: "https://sk-control.onrender.com/",
        status: "Active",
        featured: true,
        position: 1,
    },
];
