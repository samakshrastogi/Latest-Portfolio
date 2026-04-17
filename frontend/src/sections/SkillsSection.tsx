import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { api } from "../api/axios";

// ✅ Types
type SkillGroup = {
    _id: string;
    category: string;
    items: string[];
    position?: number; // ✅ NEW
};

// ✅ Normalize skill name → match /icons folder
const getIconPath = (skill: string) =>
    `/icons/${skill
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/\./g, "")}.svg`;

// 🔥 Icon Component (ONLY local, silent fail)
function SkillIcon({ skill }: { skill: string }) {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <img
            src={getIconPath(skill)}
            alt={skill}
            className="w-4 h-4 object-contain"
            onError={() => setVisible(false)}
        />
    );
}

export default function SkillsSection() {
    const [skills, setSkills] = useState<SkillGroup[]>([]);
    const [loading, setLoading] = useState(true);

    // 📥 Fetch from DB
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await api.get("/skills");

                const data: SkillGroup[] = res.data.data || [];

                // ✅ SORT BY POSITION (fallback safe)
                const sorted = [...data].sort((a, b) => {
                    const posA = a.position ?? 9999;
                    const posB = b.position ?? 9999;
                    return posA - posB;
                });

                setSkills(sorted);

            } catch {
                console.log("Failed to fetch skills");
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    // ⏳ Loading
    if (loading) {
        return (
            <div className="text-center py-20 text-[var(--muted)]">
                Loading skills...
            </div>
        );
    }

    return (
        <section
            id="skills"
            className="py-20 sm:py-24 px-4 sm:px-6 bg-[var(--bg)]"
        >
            {/* ================= HEADING ================= */}
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[var(--text)] to-gray-400 bg-clip-text text-transparent">
                    Skills & Expertise
                </h2>

                <p className="text-[var(--muted)] mt-3 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto">
                    Technologies and tools I use to build scalable applications
                </p>
            </div>

            {/* ================= GRID ================= */}
            <div className="grid gap-6 sm:gap-8 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                {skills.map((group, index) => (
                    <motion.div
                        key={group._id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent"
                    >
                        <div className="relative h-full bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 backdrop-blur-xl transition hover:bg-white/10">

                            {/* Glow */}
                            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                            {/* Category */}
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-indigo-500">
                                {group.category}
                            </h3>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {group.items.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm rounded-md bg-white/10 border border-[var(--border)] hover:bg-indigo-500/20 hover:border-indigo-500/40 transition"
                                    >
                                        <SkillIcon skill={skill} />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}