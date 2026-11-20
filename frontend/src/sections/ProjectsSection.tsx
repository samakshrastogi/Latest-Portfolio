import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layers3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
    const rest = projects.filter((project) => project.id !== featured?.id);

    return (
        <SectionWrapper id="projects" variant="purple">
            <div className="mb-6 text-center sm:mb-8">
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-700"
                >
                    <Layers3 size={13} /> AI Agent Orchestration & Automation
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-2.5 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-600 bg-clip-text text-2xl font-black text-transparent sm:text-3xl md:text-4xl"
                >
                    Featured Project
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 }}
                    className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm"
                >
                    Centralized platform managing three specialized AI-powered workspaces for video generation, website diagnostics, and digital marketing.
                </motion.p>
            </div>

            {featured ? <FeaturedProject project={featured} /> : null}

            {rest.length > 0 && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.08 }}
                    variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
                >
                    {rest.map((project) => <ProjectCard key={project.id} project={project} />)}
                </motion.div>
            )}
        </SectionWrapper>
    );
}

function FeaturedProject({ project }: { project: Project }) {
    const preview = getProjectPreviewUrl(project);
    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gsap-card group relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-900/10 bg-white/90 shadow-xl backdrop-blur-xl"
        >
            <div className="grid lg:grid-cols-[1.12fr_0.88fr] items-center">
                <ProjectVisual project={project} preview={preview} featured />
                <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                    <ProjectEyebrow project={project} />
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{project.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{project.description}</p>
                    <Highlights project={project} />
                    <TechList project={project} />
                    <ProjectActions project={project} />
                </div>
            </div>

            {project.workspaces && project.workspaces.length > 0 && (
                <div className="border-t border-slate-900/10 bg-gradient-to-b from-slate-50/70 to-white/90 p-4 sm:p-6">
                    <div className="mb-3.5 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
                            <Layers3 size={13} /> 3 Integrated AI Workspaces
                        </span>
                        <span className="rounded-full border border-indigo-200 bg-indigo-50/80 px-2 py-0.5 text-[10px] font-bold text-indigo-700">
                            3 Workspaces
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {project.workspaces.map((ws, idx) => (
                            <div
                                key={ws.title}
                                className="group/ws rounded-xl border border-slate-900/10 bg-white p-3.5 shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-sm"
                            >
                                <div className="flex items-center justify-between gap-1.5">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 text-[10px] font-black text-white shadow-xs">
                                        0{idx + 1}
                                    </span>
                                    <span className="rounded-md border border-indigo-100 bg-indigo-50/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-indigo-700">
                                        {ws.subtitle}
                                    </span>
                                </div>
                                <h4 className="mt-2 text-sm font-bold text-slate-950 transition-colors group-hover/ws:text-indigo-600">
                                    {ws.title}
                                </h4>
                                <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                                    {ws.description}
                                </p>
                                {ws.tags && ws.tags.length > 0 && (
                                    <div className="mt-2.5 flex flex-wrap gap-1">
                                        {ws.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded border border-slate-200/80 bg-slate-50 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </motion.article>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const preview = getProjectPreviewUrl(project);
    return (
        <motion.article
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4 }}
            className="gsap-card group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white/80 shadow-md backdrop-blur-xl"
        >
            <ProjectVisual project={project} preview={preview} />
            <div className="flex flex-1 flex-col p-4 sm:p-5">
                <ProjectEyebrow project={project} />
                <h3 className="mt-2 text-lg font-black tracking-tight text-slate-950">{project.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{project.description}</p>
                <Highlights project={project} compact />
                <TechList project={project} />
                <ProjectActions project={project} />
            </div>
        </motion.article>
    );
}

function ProjectVisual({ project, preview }: { project: Project; preview?: string; featured?: boolean }) {
    return (
        <div className="p-3 sm:p-4 lg:p-5">
            <div className="group/browser relative overflow-hidden rounded-xl border border-slate-900/15 bg-slate-950 shadow-md">
                {/* Browser Mockup Top Bar */}
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
                            alt={`${project.title} live interface preview`}
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
    );
}

function ProjectEyebrow({ project }: { project: Project }) {
    return (
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
            <span className="text-indigo-700">{project.category ?? "Product engineering"}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{project.date}</span>
        </div>
    );
}

function Highlights({ project, compact = false }: { project: Project; compact?: boolean }) {
    if (!project.highlights?.length) return null;
    return (
        <ul className={`grid gap-1.5 ${compact ? "mt-2.5" : "mt-3 sm:grid-cols-3"}`}>
            {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-1.5 text-[11px] font-medium leading-4 text-slate-600">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>{highlight}</span>
                </li>
            ))}
        </ul>
    );
}

function TechList({ project }: { project: Project }) {
    return (
        <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.tech.map((technology) => (
                <span key={technology} className="rounded-md border border-slate-900/10 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                    {technology}
                </span>
            ))}
        </div>
    );
}

function ProjectActions({ project }: { project: Project }) {
    if (!project.live && !project.github) return null;
    return (
        <div className="mt-4 flex flex-wrap gap-2.5">
            {project.live ? (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-950 px-4 py-2 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-indigo-600 sm:text-sm"
                >
                    Visit & Open Platform <ArrowUpRight size={15} />
                </a>
            ) : null}
            {project.github ? (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-900/10 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                >
                    <FaGithub size={14} /> Source
                </a>
            ) : null}
        </div>
    );
}
