import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import {
    FaBell,
    FaNetworkWired,
    FaVideo,
} from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const experienceProjects = [
    {
        icon: <FaVideo />,
        title: "NIVR",
        subtitle: "Nokia Inventory Video Repository",
        phase: "01",
        date: "Nov 2025 - Mar 2026",
        description:
            "Internal Django-based video repository for network infrastructure learning content, with browsing, search, playback, uploads, playlists, feedback, and user engagement tracking. It includes admin workflows for content moderation, category management, analytics, audit history, notifications, and superuser approval governance.",
        tags: ["Video repository", "Playback", "Playlists", "Admin governance"],
        tech: [
            "Python",
            "Django",
            "SQLite",
            "Django templates",
            "Vanilla JavaScript",
            "CSS",
            "S3/storage integrations",
            "OpenCV/Pillow",
            "spaCy",
            "sentence-transformers",
            "faster-whisper",
            "PyTorch",
            "ffmpeg",
        ],
    },
    {
        icon: <FaNetworkWired />,
        title: "STSI",
        subtitle: "Simplified Technical Support Interface",
        phase: "02",
        date: "Apr 2026 - May 2026",
        description:
            "Django-based Nokia support portal for optical and network operations workflows, centralizing health checks, log collection, RCA, alarm troubleshooting, node information, report analysis, offline utilities, knowledge repositories, schedulers, and admin-managed access workflows.",
        tags: ["Operations", "RCA", "Schedulers", "Knowledge base"],
        tech: [
            "Python",
            "Django 4.2",
            "Django REST Framework",
            "SQLite",
            "Django templates",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Pandas",
            "NumPy",
            "OpenPyXL",
            "Plotly",
            "Matplotlib",
            "Paramiko/AsyncSSH",
            "Celery",
            "APScheduler",
            "Gunicorn",
            "WhiteNoise",
        ],
    },
    {
        icon: <FaBell />,
        title: "TSHID",
        subtitle: "Hot Issues Dashboard",
        phase: "03",
        date: "Jun 2026",
        description:
            "Django-based web application for tracking, managing, and reporting critical customer and product issues, including issue registration, comments, status and severity tracking, approvals, roles, email notifications, exports, dashboards, analytics, REST APIs, admin tools, and Nokia-branded templates.",
        tags: ["Issue tracking", "Approvals", "Email alerts", "Reports"],
        tech: [
            "Python",
            "Django 4.2",
            "Django REST Framework",
            "SQLite",
            "Django templates",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Pandas",
            "NumPy",
            "OpenPyXL",
            "Plotly",
            "Matplotlib",
            "Paramiko/AsyncSSH",
            "Celery",
            "APScheduler",
            "Gunicorn",
            "WhiteNoise",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <SectionWrapper id="experience" variant="default">
            <div className="mb-7 text-center sm:mb-14">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-slate-950 to-slate-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
                >
                    Experience
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-500 sm:mt-4 sm:text-base"
                >
                    Production engineering for internal tools used by real teams.
                </motion.p>
            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/25 via-purple-500/15 to-white/[0.05] p-px"
            >
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative rounded-3xl bg-white/80 p-3.5 backdrop-blur-xl sm:p-8 md:p-10">
                    <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-indigo-400/70 via-indigo-400/20 to-transparent sm:block" />

                    <div className="relative sm:pl-8">
                        <span className="absolute left-[-37px] top-1 hidden h-3 w-3 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.8)] sm:block" />

                        <div className="mb-3 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-xs sm:tracking-[0.24em]">
                                    Work Experience
                                </p>
                                <h3 className="max-w-xl text-lg font-semibold leading-tight text-slate-950 min-[380px]:text-xl sm:text-3xl">
                                    Nokia — Student Intern
                                </h3>
                                <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] sm:mt-3 sm:gap-2 sm:text-xs">
                                    <span className="rounded-full border border-slate-900/10 bg-white/80 px-2.5 py-1 text-slate-600 sm:px-3">
                                        Aug 2025 - June 2026
                                    </span>
                                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-emerald-300 sm:px-3">
                                        Production system
                                    </span>
                                    <span className="w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 font-medium text-indigo-300 sm:hidden">
                                        Internship
                                    </span>
                                </div>
                            </div>

                            <span className="hidden w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 sm:inline-flex">
                                Internship
                            </span>
                        </div>

                        <div className="relative mb-5 space-y-4 sm:mb-7 sm:space-y-5">
                            <div className="absolute left-5 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-indigo-400/70 via-indigo-400/25 to-transparent sm:block" />

                            {experienceProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    variants={fadeUp}
                                    whileHover={{ y: -4 }}
                                    className="relative flex flex-col gap-3 sm:flex-row sm:gap-5"
                                >
                                    <div className="flex shrink-0 items-center gap-3 sm:w-24 sm:flex-col sm:items-start">
                                        <span className="grid h-10 w-10 place-items-center rounded-full border border-indigo-300/40 bg-indigo-500 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.55)]">
                                            {project.phase}
                                        </span>
                                        {index < experienceProjects.length - 1 && (
                                            <span className="h-px flex-1 bg-indigo-400/25 sm:hidden" />
                                        )}
                                    </div>

                                    <div className="flex flex-1 flex-col rounded-2xl border border-slate-900/10 bg-white/80 p-4 transition duration-300 hover:border-indigo-400/30 hover:bg-white/85 sm:p-5">
                                        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                            <div className="flex min-w-0 items-start gap-3">
                                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-indigo-400/20 bg-indigo-500/15 text-indigo-300">
                                                    {project.icon}
                                                </span>
                                                <div className="min-w-0">
                                                    <h4 className="text-base font-semibold text-slate-950 sm:text-xl">
                                                        {project.title}
                                                    </h4>
                                                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-indigo-300">
                                                        {project.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                <span className="w-fit rounded-full border border-slate-900/10 bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                                                    Project {project.phase}
                                                </span>
                                                <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                                                    {project.date}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="mb-4 text-xs leading-relaxed text-slate-600 min-[380px]:text-sm sm:text-[15px]">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-md border border-slate-900/10 bg-white/80 px-2 py-1 text-[11px] font-medium text-slate-700"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-4 border-t border-slate-900/10 pt-3">
                                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                                Tech used
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded border border-indigo-400/15 bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-medium text-indigo-100"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
