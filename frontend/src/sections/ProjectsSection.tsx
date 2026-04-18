import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionWrapper from "../components/SectionWrapper";

const API = import.meta.env.VITE_API_URL;

type Project = {
    _id?: string;
    title: string;
    description: string;
    tech: string[];
    live: string;
    github: string;
    image?: string;
    position?: number;
};

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${API}/projects`);
                const data: Project[] = res.data.data || [];

                const sorted = [...data].sort((a, b) => {
                    const posA = a.position ?? 9999;
                    const posB = b.position ?? 9999;
                    return posA - posB;
                });

                setProjects(sorted);
            } catch {
                console.log("Failed to fetch projects");
            }
        };

        fetchProjects();
    }, []);

    const featured = projects[0];
    const rest = projects.slice(1);

    return (
        <SectionWrapper id="projects" variant="purple">

            {/* ================= HEADING ================= */}
            <div className="text-center mb-14 sm:mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                    Featured Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto"
                >
                    Real-world applications showcasing full-stack and AI capabilities
                </motion.p>
            </div>

            {/* ================= FEATURED PROJECT ================= */}
            {featured && (
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-16 group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                >
                    <div className="grid md:grid-cols-2">

                        {/* IMAGE */}
                        <div className="relative overflow-hidden">
                            <img
                                src={`https://api.microlink.io/?url=${encodeURIComponent(
                                    featured.live
                                )}&screenshot=true&meta=false&embed=screenshot.url`}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                alt="preview"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 sm:p-10 flex flex-col justify-center">

                            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                                {featured.title}
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {featured.description}
                            </p>

                            {/* TECH */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {featured.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex gap-3">
                                <a
                                    href={featured.live}
                                    target="_blank"
                                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                                >
                                    View Live
                                </a>

                                <a
                                    href={featured.github}
                                    target="_blank"
                                    className="px-5 py-2.5 border border-white/10 hover:bg-white/10 rounded-lg transition"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Glow */}
                    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition" />
                </motion.div>
            )}

            {/* ================= GRID ================= */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
                {rest.map((project) => (
                    <motion.div
                        key={project._id}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ y: -6 }}
                        className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]"
                    >
                        {/* IMAGE */}
                        <div className="relative h-44 overflow-hidden">
                            <img
                                src={`https://api.microlink.io/?url=${encodeURIComponent(
                                    project.live
                                )}&screenshot=true&meta=false&embed=screenshot.url`}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                alt="preview"
                            />

                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 text-sm">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="text-indigo-400 hover:underline"
                                >
                                    Live
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}