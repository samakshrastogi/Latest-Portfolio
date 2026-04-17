import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

type Project = {
    _id?: string;
    title: string;
    description: string;
    tech: string[];
    live: string;
    github: string;
    image?: string;
    position?: number; // ✅ NEW
};

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    // 🔥 Fetch + Sort
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${API}/projects`);
                const data: Project[] = res.data.data || [];

                // ✅ SORT BY POSITION (safe fallback)
                const sorted = [...data].sort((a, b) => {
                    const posA = a.position ?? 9999;
                    const posB = b.position ?? 9999;
                    return posA - posB;
                });

                setProjects(sorted);
            } catch {
                console.log("Failed to fetch projects");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className="py-20 sm:py-24 px-4 sm:px-6 bg-[var(--bg)]"
        >
            {/* ================= HEADING ================= */}
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[var(--text)] to-gray-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                <p className="text-[var(--muted)] mt-3 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto">
                    Real-world applications showcasing full-stack and AI capabilities
                </p>
            </div>

            {/* 🚀 Loading */}
            {loading && (
                <div className="text-center text-[var(--muted)]">
                    Loading projects...
                </div>
            )}

            {/* ❌ Empty */}
            {!loading && projects.length === 0 && (
                <div className="text-center text-[var(--muted)]">
                    No projects found
                </div>
            )}

            {/* ================= GRID ================= */}
            <div className="grid gap-6 sm:gap-8 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                {projects.map((project, index) => {
                    const preview = `https://api.microlink.io/?url=${encodeURIComponent(
                        project.live
                    )}&screenshot=true&meta=false&embed=screenshot.url`;

                    return (
                        <motion.div
                            key={project._id || index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="group relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl"
                        >
                            {/* 🔥 PREVIEW */}
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="relative overflow-hidden h-48 sm:h-52">

                                    <img
                                        src={preview}
                                        alt={project.title}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                project.image ||
                                                `https://image.thum.io/get/width/800/crop/600/${project.live}`;
                                        }}
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Badge */}
                                    <div className="absolute top-3 right-3 text-xs bg-black/70 text-white px-2 py-1 rounded-md">
                                        Live
                                    </div>

                                    {/* Hover CTA */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                        <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm shadow-lg">
                                            View Project
                                        </span>
                                    </div>
                                </div>
                            </a>

                            {/* ================= CONTENT ================= */}
                            <div className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[var(--text)]">
                                    {project.title}
                                </h3>

                                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech?.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-[var(--border)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs sm:text-sm px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition"
                                    >
                                        Live
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs sm:text-sm px-4 py-2 border border-[var(--border)] hover:bg-[var(--card)] rounded-lg transition"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}