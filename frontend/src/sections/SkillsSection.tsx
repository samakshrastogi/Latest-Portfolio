import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { useState, type ReactNode } from "react";
import { skills as skillData, type SkillGroup } from "../lib/constants";

// 🔥 ICONS
import {
    SiReact,
    SiNodedotjs,
    SiDjango,
    SiMongodb,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiExpress,
    SiVercel,
    SiNetlify,
    SiRender,
    SiGoogle,
    SiBootstrap,
    SiPython,
    SiRedis,
    SiSocketdotio,
    SiMermaid,
    SiPandas,
    SiNumpy,
    SiPlotly,
    SiPytorch,
} from "react-icons/si";

import {
    FaAws,
    FaMicrosoft,
    FaBrain,
    FaCss3Alt,
    FaDatabase,
    FaLock,
    FaServer,
    FaCloud,
    FaLayerGroup,
    FaChartLine,
    FaCodeBranch,
} from "react-icons/fa";

const categoryMeta: Record<string, { icon: ReactNode }> = {
    frontend: {
        icon: <SiReact />,
    },
    backend: {
        icon: <FaServer />,
    },
    database: {
        icon: <FaDatabase />,
    },
    "cloud-devops": {
        icon: <FaCloud />,
    },
    "ai-ml": {
        icon: <FaBrain />,
    },
    "data-viz": {
        icon: <FaChartLine />,
    },
    "apis-realtime": {
        icon: <FaCodeBranch />,
    },
    "security-systems": {
        icon: <FaLock />,
    },
};

const coreStack = [
    "Python",
    "Django",
    "Django REST Framework",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "SQLite",
    "AWS S3",
    "AI / ML",
];

const INITIAL_VISIBLE_SKILLS = 8;

const iconMap: Record<string, ReactNode> = {
    // 🔥 FRONTEND
    react: <SiReact className="text-cyan-400" />,
    typescript: <SiTypescript className="text-blue-500" />,
    javascript: <SiJavascript className="text-yellow-400" />,
    html: <SiHtml5 className="text-orange-500" />,
    css: <FaCss3Alt className="text-blue-400" />,
    bootstrap: <SiBootstrap className="text-purple-400" />,
    djangotemplates: <SiDjango className="text-green-400" />,

    // 🔥 BACKEND
    python: <SiPython className="text-yellow-300" />,
    nodejs: <SiNodedotjs className="text-green-500" />,
    "node.js": <SiNodedotjs className="text-green-500" />,
    node: <SiNodedotjs className="text-green-500" />,
    django: <SiDjango className="text-green-400" />,
    djangorestframework: <SiDjango className="text-green-400" />,
    express: <SiExpress className="text-gray-300" />,
    "restapis": <FaServer className="text-indigo-400" />,
    celery: <FaServer className="text-green-400" />,
    apscheduler: <FaServer className="text-indigo-300" />,
    "paramiko/asyncssh": <FaServer className="text-blue-300" />,

    // 🔥 DATABASE
    mongodb: <SiMongodb className="text-green-500" />,
    postgresql: <SiPostgresql className="text-blue-400" />,
    sqlite: <FaDatabase className="text-gray-400" />,
    sqlite3: <FaDatabase className="text-gray-400" />,
    redis: <SiRedis className="text-red-400" />,

    // 🔥 CLOUD
    aws: <FaAws className="text-orange-400" />,
    "awss3": <FaAws className="text-orange-400" />,
    "s3/storageintegrations": <FaAws className="text-orange-400" />,
    cloudfront: <FaCloud className="text-gray-300" />,
    azure: <FaMicrosoft className="text-blue-500" />,
    azuresso: <FaMicrosoft className="text-blue-500" />,
    googlesso: <SiGoogle className="text-red-400" />,

    // 🔥 DEVOPS
    vercel: <SiVercel className="text-white" />,
    netlify: <SiNetlify className="text-cyan-400" />,
    render: <SiRender className="text-purple-400" />,
    pemdeployment: <FaLock className="text-amber-400" />,
    gunicorn: <FaServer className="text-green-300" />,
    whitenoise: <FaCloud className="text-gray-300" />,

    // 🔥 AI
    ai: <FaBrain className="text-purple-400" />,
    "ai/ml": <FaBrain className="text-purple-400" />,
    llms: <FaBrain className="text-purple-400" />,
    whisper: <FaBrain className="text-purple-400" />,
    "faster-whisper": <FaBrain className="text-purple-400" />,
    "whisper/faster-whisper": <FaBrain className="text-purple-400" />,
    ollama: <FaBrain className="text-purple-400" />,
    langchain: <FaBrain className="text-emerald-300" />,
    langgraph: <FaBrain className="text-emerald-300" />,
    "opencv/pillow": <FaBrain className="text-blue-300" />,
    spacy: <FaBrain className="text-cyan-300" />,
    "sentence-transformers": <FaBrain className="text-purple-300" />,
    pytorch: <SiPytorch className="text-orange-400" />,

    // 🔥 DATA
    pandas: <SiPandas className="text-blue-300" />,
    numpy: <SiNumpy className="text-blue-400" />,
    openpyxl: <FaChartLine className="text-emerald-300" />,
    plotly: <SiPlotly className="text-cyan-300" />,
    matplotlib: <FaChartLine className="text-yellow-300" />,

    // 🔥 APIS / REALTIME
    playwright: <FaCodeBranch className="text-green-400" />,
    sse: <FaCodeBranch className="text-indigo-300" />,
    "socket.io": <SiSocketdotio className="text-white" />,
    bullmq: <FaCodeBranch className="text-red-300" />,
    gmailapi: <SiGoogle className="text-red-400" />,
    mermaid: <SiMermaid className="text-pink-300" />,

    // 🔥 TOOLS
    ffmpeg: <FaServer className="text-gray-400" />,
    nodemailer: <FaServer className="text-gray-400" />,

    // 🔥 SECURITY
    datamasking: <FaLock className="text-red-400" />,
    encryption: <FaLock className="text-red-400" />,

    // 🔥 SYSTEM
    spritesheets: <FaServer className="text-gray-400" />,
    virtualenvironments: <FaServer className="text-gray-400" />,
};

/* ================= ICON COMPONENT ================= */

function SkillIcon({ skill }: { skill: string }) {
    const key = skill.toLowerCase().replace(/\s+/g, "");

    return (
        <span className="text-base">
            {iconMap[key] || <span className="text-gray-500">•</span>}
        </span>
    );
}

function SkillChip({
    skill,
    variant = "default",
}: {
    skill: string;
    variant?: "default" | "core";
}) {
    const className =
        variant === "core"
            ? "flex items-center gap-2 rounded-xl border border-indigo-300/25 bg-indigo-500/15 px-3 py-2 text-xs font-medium text-indigo-50 transition duration-300 hover:border-indigo-300/45 hover:bg-indigo-500/25 sm:text-sm"
            : "flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-200 transition duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/20 sm:px-3 sm:text-sm";

    return (
        <div className={className}>
            <SkillIcon skill={skill} />
            <span className="whitespace-nowrap">{skill}</span>
        </div>
    );
}

/* ================= MAIN ================= */

export default function SkillsSection() {
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

    const skills: SkillGroup[] = [...skillData].sort((a, b) => {
        const posA = a.position ?? 9999;
        const posB = b.position ?? 9999;
        return posA - posB;
    });

    const toggleGroup = (id: string) => {
        setExpandedGroups((current) => ({
            ...current,
            [id]: !current[id],
        }));
    };

    return (
        <SectionWrapper id="skills" variant="indigo">

            {/* ================= HEADING ================= */}
            <div className="text-center mb-10 sm:mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                    Skills & Expertise
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400 mt-4 text-sm leading-relaxed sm:text-base max-w-lg mx-auto"
                >
                    Technologies and tools I use to build scalable systems
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto mb-6 max-w-7xl sm:mb-8"
            >
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-300 sm:text-xs">
                            Core Stack
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">
                            Primary technologies used across projects and professional experience.
                        </p>
                    </div>
                    <span className="w-fit rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300">
                        {coreStack.length} highlighted
                    </span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {coreStack.map((skill) => (
                        <SkillChip key={skill} skill={skill} variant="core" />
                    ))}
                </div>
            </motion.div>

            {/* ================= GRID ================= */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="grid gap-4 sm:gap-6 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
                {skills.map((group) => {
                    const meta = categoryMeta[group.id] ?? {
                        icon: <FaLayerGroup />,
                    };
                    const isExpanded = expandedGroups[group.id] ?? false;
                    const visibleSkills = isExpanded
                        ? group.items
                        : group.items.slice(0, INITIAL_VISIBLE_SKILLS);
                    const hiddenCount = group.items.length - visibleSkills.length;

                    return (
                    <motion.div
                        key={group.id}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ y: -6 }}
                        className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-400/25 via-white/10 to-transparent"
                    >
                        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 sm:p-6">

                            {/* Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
                            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-400/10 blur-2xl" />

                            {/* Category */}
                            <div className="relative mb-5 flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-500/15 text-lg text-indigo-300 ring-1 ring-white/10">
                                        {meta.icon}
                                    </span>
                                    <h3 className="text-lg font-semibold text-indigo-300 sm:text-xl">
                                        {group.category}
                                    </h3>
                                </div>

                                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300">
                                    {group.items.length}
                                </span>
                            </div>

                            {/* Skills */}
                            <div className="relative flex flex-wrap gap-2">
                                {visibleSkills.map((skill) => (
                                    <SkillChip key={skill} skill={skill} />
                                ))}
                            </div>

                            {group.items.length > INITIAL_VISIBLE_SKILLS && (
                                <button
                                    type="button"
                                    aria-expanded={isExpanded}
                                    onClick={() => toggleGroup(group.id)}
                                    className="relative mt-5 inline-flex min-h-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-indigo-200 transition hover:border-indigo-400/40 hover:bg-indigo-500/15"
                                >
                                    {isExpanded
                                        ? "Show less"
                                        : `Show ${hiddenCount} more`}
                                </button>
                            )}

                        </div>
                    </motion.div>
                    );
                })}
            </motion.div>
        </SectionWrapper>
    );
}
