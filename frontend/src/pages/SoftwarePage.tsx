import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "../api/axios";

type Project = {
    _id: string;
    title: string;
    description: string;
    tech: string[];
    live: string;
    github: string;
    position?: number; // ✅ NEW
};

type Skill = {
    _id: string;
    category: string;
    items: string[];
    position?: number; // ✅ NEW
};
type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
    title: string;
};

type ProjectFormState = {
    title: string;
    description: string;
    tech: string;
    live: string;
    github: string;
    position: number;
};

type FormProjectProps = {
    project: ProjectFormState;
    setProject: React.Dispatch<React.SetStateAction<ProjectFormState>>;
    onSave: () => void;
    submitting: boolean;
};

type SkillFormState = {
    category: string;
    items: string;
    position: number;
};

type FormSkillProps = {
    skill: SkillFormState;
    setSkill: React.Dispatch<React.SetStateAction<SkillFormState>>;
    onSave: () => void;
    submitting: boolean;
};


export default function SoftwarePage() {
    const [allowed, setAllowed] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const [projects, setProjects] = useState<Project[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);

    // 🔥 Modal states
    const [isProjectModal, setIsProjectModal] = useState(false);
    const [isSkillModal, setIsSkillModal] = useState(false);

    const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
    const [editingSkillId, setEditingSkillId] = useState<string | null>(null);

    // Project form
    const [project, setProject] = useState({
        title: "",
        description: "",
        tech: "",
        live: "",
        github: "",
        position: 0, // ✅ add this too
    });

    // Skill form
    const [skill, setSkill] = useState({
        category: "",
        items: "",
        position: 0,
    });

    // 🔐 Feature toggle
    useEffect(() => {
        api.get("/feature/software-enabled")
            .then(res => setAllowed(Boolean(res.data.enabled)))
            .catch(() => setAllowed(false))
            .finally(() => setLoading(false));
    }, []);

    // 📥 Fetch
    const fetchData = async () => {
        const [p, s] = await Promise.all([
            api.get("/projects"),
            api.get("/skills"),
        ]);

        const projectsData = p.data.data || [];
        const skillsData = s.data.data || [];

        // ✅ SORT BY POSITION (fallback safe)
        const sortedProjects = [...projectsData].sort((a, b) => {
            const posA = a.position ?? 9999;
            const posB = b.position ?? 9999;
            return posA - posB;
        });

        const sortedSkills = [...skillsData].sort((a, b) => {
            const posA = a.position ?? 9999;
            const posB = b.position ?? 9999;
            return posA - posB;
        });

        setProjects(sortedProjects);
        setSkills(sortedSkills);
    };

    useEffect(() => {
        const load = async () => {
            await fetchData();
        };
        load();
    }, []);

    const openProjectModal = (p?: Project) => {
        if (p) {
            setEditingProjectId(p._id);
            setProject({
                title: p.title,
                description: p.description,
                tech: p.tech.join(", "),
                live: p.live,
                github: p.github,
                position: p.position ?? 0,
            });
        } else {
            setEditingProjectId(null);
            setProject({
                title: "",
                description: "",
                tech: "",
                live: "",
                github: "",
                position: 0,
            });
        }
        setIsProjectModal(true);
    };

    const saveProject = async () => {
        const payload = {
            ...project,
            position: project.position || 0,
            tech: project.tech.split(",").map(t => t.trim()),
        };

        setSubmitting(true);

        if (editingProjectId) {
            await api.put(`/projects/${editingProjectId}`, payload);
        } else {
            await api.post("/projects", payload);
        }

        setIsProjectModal(false);
        fetchData();
        setSubmitting(false);
    };

    const deleteProject = async (id: string) => {
        if (!confirm("Delete project?")) return;
        await api.delete(`/projects/${id}`);
        fetchData();
    };

    // ================= SKILL =================

    const openSkillModal = (s?: Skill) => {
        if (s) {
            setEditingSkillId(s._id);
            setSkill({
                category: s.category,
                items: s.items.join(", "),
                position: s.position ?? 0,
            });
        } else {
            setEditingSkillId(null);
            setSkill({
                category: "",
                items: "",
                position: 0,
            });
        }
        setIsSkillModal(true);
    };

    const saveSkill = async () => {
        const payload = {
            category: skill.category,
            items: skill.items.split(",").map(i => i.trim()),
            position: skill.position || 0,
        };

        setSubmitting(true);

        if (editingSkillId) {
            await api.put(`/skills/${editingSkillId}`, payload);
        } else {
            await api.post("/skills", payload);
        }

        setIsSkillModal(false);
        fetchData();
        setSubmitting(false);
    };

    const deleteSkill = async (id: string) => {
        if (!confirm("Delete skill?")) return;
        await api.delete(`/skills/${id}`);
        fetchData();
    };

    // ================= UI =================

    if (loading) return <div className="text-center mt-20 text-white">Loading...</div>;

    if (!allowed) {
        return (
            <div className="h-screen flex items-center justify-center text-red-500 text-xl bg-black">
                🚫 Access Denied
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white px-4 py-10">

            {/* ================= HEADER ================= */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">

                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    ⚙️ Admin Dashboard
                </h1>

                <div className="flex gap-3">
                    <button
                        onClick={() => openProjectModal()}
                        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm"
                    >
                        + Project
                    </button>

                    <button
                        onClick={() => openSkillModal()}
                        className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition text-sm"
                    >
                        + Skill
                    </button>

                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            window.location.href = "/login";
                        }}
                        className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-sm"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* ================= PROJECTS ================= */}
            <section className="max-w-7xl mx-auto mb-20">

                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-300">
                    🚀 Projects
                </h2>

                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                    {projects.map((p, index) => {
                        const preview = `https://api.microlink.io/?url=${encodeURIComponent(p.live)}&screenshot=true&meta=false&embed=screenshot.url`;

                        return (
                            <motion.div
                                key={p._id}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.04 }}
                                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent"
                            >
                                <div className="relative bg-[#0f172a]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:bg-[#0f172a]/90 transition">

                                    {/* Preview */}
                                    <a href={p.live} target="_blank">
                                        <div className="relative h-48 overflow-hidden">

                                            <img
                                                src={preview}
                                                alt={p.title}
                                                onError={(e) => {
                                                    e.currentTarget.src = `https://image.thum.io/get/width/800/${p.live}`;
                                                }}
                                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                            {/* Controls */}
                                            <div className="absolute top-3 left-3 flex gap-2 z-10">
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        openProjectModal(p);
                                                    }}
                                                    className="text-xs bg-yellow-500/90 px-2 py-1 rounded"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        deleteProject(p._id);
                                                    }}
                                                    className="text-xs bg-red-500/90 px-2 py-1 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </div>

                                            {/* Hover */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                                <span className="px-4 py-2 bg-indigo-600 rounded-lg text-sm">
                                                    View Project
                                                </span>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold mb-2">
                                            {p.title}
                                        </h3>

                                        <p className="text-sm text-gray-400 mb-4">
                                            {p.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {p.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </section>

            {/* ================= SKILLS ================= */}
            <section className="max-w-6xl mx-auto">

                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-300">
                    🧠 Skills
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {skills.map((s, index) => (
                        <motion.div
                            key={s._id}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/30 to-transparent"
                        >
                            <div className="relative bg-[#0f172a]/80 border border-white/10 rounded-2xl p-5 backdrop-blur-xl hover:bg-[#0f172a]/90 transition">

                                {/* Glow */}
                                <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition pointer-events-none"></div>

                                {/* Category */}
                                <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                                    {s.category}
                                </h3>

                                {/* Items */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {s.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300 hover:bg-indigo-500/20 transition"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Controls */}
                                <div className="flex justify-between text-xs">
                                    <button
                                        onClick={() => openSkillModal(s)}
                                        className="text-yellow-400 hover:text-yellow-300"
                                    >
                                        ✏️ Edit
                                    </button>

                                    <button
                                        onClick={() => deleteSkill(s._id)}
                                        className="text-red-400 hover:text-red-300"
                                    >
                                        🗑 Delete
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </section>

            {/* ================= MODALS ================= */}
            {isProjectModal && (
                <Modal title="Project" onClose={() => setIsProjectModal(false)}>
                    <FormProject
                        project={project}
                        setProject={setProject}
                        onSave={saveProject}
                        submitting={submitting}
                    />
                </Modal>
            )}

            {isSkillModal && (
                <Modal title="Skill" onClose={() => setIsSkillModal(false)}>
                    <FormSkill
                        skill={skill}
                        setSkill={setSkill}
                        onSave={saveSkill}
                        submitting={submitting}
                    />
                </Modal>
            )}
        </div>
    );
}

/* ================= COMPONENTS ================= */

function Modal({ children, onClose, title }: ModalProps){
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-lg mx-4"
                >

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl" />

                    <div className="relative bg-white/[0.06] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    {title}
                                </h2>
                                <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-400 to-purple-400 mt-2 rounded-full" />
                            </div>

                            <button
                                onClick={onClose}
                                className="h-9 w-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-5">
                            {children}
                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function FormProject({ project, setProject, onSave, submitting }: FormProjectProps) {
    return (
        <>
            {/* Title */}
            <input
                value={project.title}
                placeholder="Title"
                className="input"
                onChange={e => setProject({ ...project, title: e.target.value })}
            />

            {/* Description */}
            <textarea
                value={project.description}
                placeholder="Description"
                className="input mt-2"
                onChange={e => setProject({ ...project, description: e.target.value })}
            />

            {/* Tech */}
            <input
                value={project.tech}
                placeholder="Tech (comma separated)"
                className="input mt-2"
                onChange={e => setProject({ ...project, tech: e.target.value })}
            />

            {/* 🔥 LIVE URL (FIXED) */}
            <input
                value={project.live}
                placeholder="Live URL (https://...)"
                className="input mt-2"
                onChange={e => setProject({ ...project, live: e.target.value })}
            />

            {/* 🔥 GITHUB URL (FIXED) */}
            <input
                value={project.github}
                placeholder="GitHub URL (https://...)"
                className="input mt-2"
                onChange={e => setProject({ ...project, github: e.target.value })}
            />

            {/* Position */}
            <input
                type="number"
                value={project.position || ""}
                placeholder="Position (lower = higher priority)"
                className="input mt-2"
                onChange={e =>
                    setProject({
                        ...project,
                        position: Number(e.target.value),
                    })
                }
            />

            {/* Save */}
            <button onClick={onSave} className="btn-primary mt-3 w-full">
                {submitting ? "Saving..." : "Save"}
            </button>
        </>
    );
}

function FormSkill({ skill, setSkill, onSave, submitting }: FormSkillProps) {
    return (
        <>
            <input value={skill.category} placeholder="Category" className="input" onChange={e => setSkill({ ...skill, category: e.target.value })} />
            <input value={skill.items} placeholder="Items" className="input mt-2" onChange={e => setSkill({ ...skill, items: e.target.value })} />
            <input
                type="number"
                value={skill.position || ""}
                placeholder="Position (lower = higher priority)"
                className="input mt-2"
                onChange={e =>
                    setSkill({
                        ...skill,
                        position: Number(e.target.value),
                    })
                }
            />
            <button onClick={onSave} className="btn-primary mt-3 w-full">
                {submitting ? "Saving..." : "Save"}
            </button>
        </>
    );
}