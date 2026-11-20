import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, Video, Globe, TrendingUp } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { projects as projectData, type Project } from "../lib/constants";

function getProjectPreviewUrl(project: Project) {
    if (project.image) return project.image;
    if (!project.live) return undefined;

    const params = new URLSearchParams({
        url: project.live,
        screenshot: "true",
        meta: "false",
        embed: "screenshot.url",
        "viewport.width": "1440",
        "viewport.height": "900",
        "viewport.deviceScaleFactor": "2",
        waitForTimeout: "2500",
    });
    if (project.refreshPreview) params.set("force", "true");
    return `https://api.microlink.io/?${params.toString()}`;
}

export default function ProjectsSection() {
    const projects = [...projectData].sort((a, b) => (a.position ?? 9999) - (b.position ?? 9999));
    const featured = projects.find((project) => project.featured) ?? projects[0];

    return (
        <SectionWrapper id="projects" variant="purple">
            {/* COMPACT SECTION HEADER */}
            <div className="mb-4 text-center sm:mb-6">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700"
                >
                    <Layers3 size={12} /> Featured Project
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-1.5 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-600 bg-clip-text text-xl font-black text-transparent sm:text-2xl md:text-3xl"
                >
                    SK Control — AI Agent Orchestration Platform
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mx-auto mt-1 max-w-xl text-xs text-slate-600 sm:text-[13px]"
                >
                    Centralized platform managing three specialized AI-powered workspaces for video generation, website diagnostics, and digital marketing.
                </motion.p>
            </div>

            {featured && <FeaturedProject project={featured} />}
        </SectionWrapper>
    );
}

function FeaturedProject({ project }: { project: Project }) {
    const preview = getProjectPreviewUrl(project);

    const workspaces = [
        {
            num: "01",
            icon: Video,
            name: "Shorts Studio",
            badge: "AI Video",
            color: "text-rose-600 bg-rose-50 border-rose-200",
            desc: "AI video workflows converting long-form videos to short clips with highlight ID & smart framing.",
        },
        {
            num: "02",
            icon: Globe,
            name: "Web Engine",
            badge: "Diagnostics",
            color: "text-cyan-600 bg-cyan-50 border-cyan-200",
            desc: "Automated website analysis evaluating performance, cross-device responsiveness, and UX.",
        },
        {
            num: "03",
            icon: TrendingUp,
            name: "Growth Engine",
            badge: "AI Marketing",
            color: "text-purple-600 bg-purple-50 border-purple-200",
            desc: "AI-powered workflows for campaign creation, persuasive content, and acquisition strategies.",
        },
    ];

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gsap-card group relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-900/10 bg-white/90 p-3 sm:p-5 shadow-lg backdrop-blur-xl"
        >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 sm:gap-6 items-center">
                {/* LEFT: BROWSER MOCKUP PREVIEW */}
                <div className="flex flex-col justify-center">
                    <div className="group/browser relative overflow-hidden rounded-xl border border-slate-900/15 bg-slate-950 shadow-md">
                        {/* Browser Topbar */}
                        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/95 px-3 py-1.5 sm:px-3.5 sm:py-2">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-red-400/90 sm:h-2.5 sm:w-2.5" />
                                <span className="h-2 w-2 rounded-full bg-amber-400/90 sm:h-2.5 sm:w-2.5" />
                                <span className="h-2 w-2 rounded-full bg-emerald-400/90 sm:h-2.5 sm:w-2.5" />
                            </div>
                            <div className="flex items-center gap-1.5 rounded-md bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-mono text-slate-400 sm:text-xs">
                                <span className="text-[10px] text-emerald-400">🔒</span>
                                <span className="truncate max-w-[150px] sm:max-w-[200px]">sk-control.onrender.com</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Live</span>
                            </div>
                        </div>

                        {/* Preview Viewport */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="SK Control live platform preview"
                                    loading="lazy"
                                    className="h-full w-full object-cover object-top transition duration-500 group-hover/browser:scale-[1.02]"
                                />
                            ) : (
                                <div className="grid h-full place-items-center p-6 text-center text-white">
                                    <div>
                                        <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-sm font-black text-white shadow-lg">SK</span>
                                        <p className="mt-2 text-xs font-bold text-slate-200">{project.title}</p>
                                        <p className="mt-0.5 text-[10px] text-slate-400">Preview loading...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* RIGHT: COMPACT DETAILS & 3 WORKSPACES */}
                <div className="flex flex-col justify-center">
                    {/* Header line */}
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                            11/2026 – Present
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active Platform
                        </span>
                    </div>

                    <h3 className="mt-1 text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                        {project.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {project.description}
                    </p>

                    {/* 3 INTEGRATED WORKSPACES - COMPACT LIST */}
                    <div className="mt-3 space-y-1.5">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                                3 Integrated AI Workspaces
                            </span>
                        </div>
                        {workspaces.map((ws) => (
                            <div
                                key={ws.name}
                                className="flex items-start gap-2.5 rounded-xl border border-slate-900/5 bg-slate-50/80 p-2 transition hover:border-indigo-200 hover:bg-white"
                            >
                                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[10px] font-bold ${ws.color}`}>
                                    <ws.icon size={12} />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-1.5">
                                        <h4 className="text-xs font-bold text-slate-950">{ws.name}</h4>
                                        <span className="rounded bg-slate-200/70 px-1.5 py-0.2 text-[9px] font-semibold text-slate-600">
                                            {ws.badge}
                                        </span>
                                    </div>
                                    <p className="text-[10.5px] leading-tight text-slate-600 mt-0.5">
                                        {ws.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* TECH STACK PILLS */}
                    <div className="mt-3 flex flex-wrap gap-1">
                        {project.tech.map((technology) => (
                            <span
                                key={technology}
                                className="rounded border border-slate-900/10 bg-white px-1.5 py-0.5 text-[9.5px] font-semibold text-slate-600"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {/* ACTION BUTTON */}
                    {project.live && (
                        <div className="mt-3 flex items-center gap-2">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-950 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-600"
                            >
                                Visit & Open Platform <ArrowUpRight size={14} />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
