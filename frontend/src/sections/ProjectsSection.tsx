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
            <div className="mb-12 text-center sm:mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700"
                >
                    <Layers3 size={14} /> SK product ecosystem
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-4 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-600 bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl"
                >
                    Production work, connected by design
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
                >
                    Independent products sharing identity, realtime infrastructure, analytics, security standards, and a consistent SK experience.
                </motion.p>
            </div>

            {featured ? <FeaturedProject project={featured} /> : null}

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
            >
                {rest.map((project) => <ProjectCard key={project.id} project={project} />)}
            </motion.div>
        </SectionWrapper>
    );
}

function FeaturedProject({ project }: { project: Project }) {
    const preview = getProjectPreviewUrl(project);
    return (
        <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative mb-10 overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/85 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:mb-12"
        >
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                <ProjectVisual project={project} preview={preview} featured />
                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                    <ProjectEyebrow project={project} />
                    <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{project.description}</p>
                    <Highlights project={project} />
                    <TechList project={project} />
                    <ProjectActions project={project} />
                </div>
            </div>
        </motion.article>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const preview = getProjectPreviewUrl(project);
    return (
        <motion.article
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -5 }}
            className="group flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-slate-900/10 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-shadow hover:shadow-[0_24px_70px_rgba(79,70,229,0.14)]"
        >
            <ProjectVisual project={project} preview={preview} />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <ProjectEyebrow project={project} />
                <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                <Highlights project={project} compact />
                <TechList project={project} />
                <ProjectActions project={project} />
            </div>
        </motion.article>
    );
}

function ProjectVisual({ project, preview, featured = false }: { project: Project; preview?: string; featured?: boolean }) {
    return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-cyan-100 ${featured ? "min-h-64 lg:min-h-full" : "h-48"}`}>
            {preview ? (
                <img src={preview} alt={`${project.title} application preview`} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
            ) : (
                <div className="grid h-full place-items-center p-8 text-center">
                    <div>
                        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-slate-950 text-xl font-black text-white shadow-xl">SK</span>
                        <p className="mt-4 font-black text-slate-800">{project.title}</p>
                        <p className="mt-1 text-xs text-slate-500">Preview coming with the public release</p>
                    </div>
                </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/10" />
            <ProjectStatusBadge status={project.status ?? "Project"} />
        </div>
    );
}

function ProjectEyebrow({ project }: { project: Project }) {
    return (
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]">
            <span className="text-indigo-700">{project.category ?? "Product engineering"}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{project.date}</span>
        </div>
    );
}

function Highlights({ project, compact = false }: { project: Project; compact?: boolean }) {
    if (!project.highlights?.length) return null;
    return (
        <ul className={`grid gap-2 ${compact ? "mt-4" : "mt-6 sm:grid-cols-3"}`}>
            {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-600">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                    {highlight}
                </li>
            ))}
        </ul>
    );
}

function TechList({ project }: { project: Project }) {
    return (
        <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((technology) => (
                <span key={technology} className="rounded-lg border border-slate-900/10 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                    {technology}
                </span>
            ))}
        </div>
    );
}

function ProjectActions({ project }: { project: Project }) {
    return (
        <div className="mt-6 flex gap-3">
            {project.live ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-600">
                    Open product <ArrowUpRight size={16} />
                </a>
            ) : null}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-900/10 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                <FaGithub size={16} /> Source
            </a>
        </div>
    );
}

function ProjectStatusBadge({ status }: { status: string }) {
    const live = status.toLowerCase() === "live";
    return (
        <span className={`absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] backdrop-blur-md ${live ? "border-emerald-200 bg-white/90 text-emerald-700" : "border-amber-200 bg-white/90 text-amber-700"}`}>
            <span className={`h-2 w-2 rounded-full ${live ? "bg-emerald-500" : "bg-amber-500"}`} />
            {status}
        </span>
    );
}
