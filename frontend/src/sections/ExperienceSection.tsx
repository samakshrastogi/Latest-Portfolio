import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import type { ReactNode } from "react";

// 🔥 ICONS (FA FIRST)
import {
    FaServer,
    FaDatabase,
    FaChartLine,
    FaUsers,
    FaLock,
    FaCogs,
    FaLayerGroup,
    FaCloud,
    FaProjectDiagram,
    FaAws,
    FaMicrosoft,
    FaArrowDown,
    FaArrowRight,
} from "react-icons/fa";

// 🔥 FALLBACK (ONLY WHERE NEEDED)
import { SiDjango } from "react-icons/si";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};
const systemFlow = ["Client", "API", "Services", "Database", "Storage"];

type CardProps = {
    title: string;
    icon: ReactNode;
    children: ReactNode;
};
export default function ExperienceSection() {
    return (
        <SectionWrapper id="experience" variant="default">

            {/* ================= HERO ================= */}
            <div className="text-center mb-20">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                    System Design & Engineering
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto"
                >
                    Building scalable backend systems, pipelines, and production-grade platforms
                </motion.p>
            </div>

            {/* ================= NOKIA ================= */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="max-w-6xl mx-auto mb-20 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-6 sm:p-8 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-indigo-500/10 blur-3xl opacity-20" />

                <div className="relative z-10">

                    {/* HEADER */}
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                            Nokia — Software Engineering Intern
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-400">
                            Aug 2025 → June 2026
                        </span>
                    </div>

                    {/* HIGHLIGHT */}
                    <div className="flex items-center gap-2 text-indigo-400 mb-4">
                        <FaServer />
                        <span>Built NIVR — Nokia Inventory Video Repository</span>
                    </div>

                    {/* DESC */}
                    <p className="text-gray-300 text-sm mb-6 max-w-3xl">
                        Designed and built a production-grade internal video system used by Nokia employees,
                        including backend architecture, authentication, analytics, and media pipelines.
                    </p>

                    {/* FEATURES */}
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300 mb-6">

                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <FaUsers className="text-indigo-400 mt-1" />
                                Video interactions (likes, comments, playlists)
                            </div>

                            <div className="flex gap-2">
                                <FaLock className="text-indigo-400 mt-1" />
                                Azure SSO authentication
                            </div>

                            <div className="flex gap-2">
                                <FaServer className="text-indigo-400 mt-1" />
                                Scalable upload pipeline
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <FaCogs className="text-indigo-400 mt-1" />
                                Metadata generation (transcripts, thumbnails)
                            </div>

                            <div className="flex gap-2">
                                <FaChartLine className="text-indigo-400 mt-1" />
                                User analytics & session tracking
                            </div>

                            <div className="flex gap-2">
                                <FaDatabase className="text-indigo-400 mt-1" />
                                Storage & ranking system
                            </div>
                        </div>

                    </div>

                    {/* TECH */}
                    <div className="flex flex-wrap gap-3 text-sm">

                        {[
                            { icon: <SiDjango className="text-green-400" />, label: "Django" },
                            { icon: <FaServer className="text-indigo-400" />, label: "REST APIs" },
                            { icon: <FaDatabase className="text-blue-400" />, label: "SQLite3" },
                            { icon: <FaAws className="text-orange-400" />, label: "AWS S3" },
                            { icon: <FaMicrosoft className="text-blue-400" />, label: "Azure SSO" },
                        ].map((item) => (
                            <span
                                key={item.label}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-400/40 transition"
                            >
                                {item.icon}
                                {item.label}
                            </span>
                        ))}

                    </div>

                </div>
            </motion.div>

            {/* ================= IMPACT ================= */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20 text-center"
            >
                {[
                    { value: "10+", label: "Projects", icon: <FaServer /> },
                    { value: "20+", label: "APIs", icon: <FaProjectDiagram /> },
                    { value: "Live", label: "Systems", icon: <FaCloud /> },
                    { value: "5+", label: "Tech", icon: <FaDatabase /> },
                ].map((stat) => (
                    <motion.div key={stat.label} variants={fadeUp}>
                        <div className="flex justify-center text-indigo-400 mb-2 text-lg">
                            {stat.icon}
                        </div>
                        <p className="text-2xl font-semibold text-white">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* ================= SYSTEM FLOW ================= */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="max-w-6xl mx-auto mb-20 rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-8"
            >
                <h3 className="text-center text-lg font-semibold text-indigo-400 mb-8">
                    System Flow
                </h3>

                <div className="mx-auto flex max-w-xs flex-col items-stretch gap-2 text-sm text-gray-300 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-3">
                    {systemFlow.map((node, index) => (
                        <div key={node} className="contents">
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 font-medium shadow-[0_10px_30px_rgba(79,70,229,0.08)] sm:min-w-24">
                                {node}
                            </div>

                            {index < systemFlow.length - 1 && (
                                <div className="flex justify-center text-indigo-400/80">
                                    <FaArrowDown className="sm:hidden" />
                                    <FaArrowRight className="hidden sm:block" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* ================= CORE ================= */}
            <div className="grid gap-6 sm:gap-8 max-w-7xl mx-auto grid-cols-1 md:grid-cols-3">

                {/* ENGINEERING */}
                <Card title="Engineering" icon={<FaCogs />}>
                    Modular backend architecture<br />
                    Secure authentication<br />
                    REST API design<br />
                    Optimized workflows
                </Card>

                {/* SYSTEM */}
                <Card title="System Thinking" icon={<FaLayerGroup />}>
                    Scalable architecture<br />
                    Clean separation of concerns<br />
                    Efficient data handling<br />
                    Performance-first design
                </Card>

                {/* IMPACT */}
                <Card title="Impact" icon={<FaChartLine />}>
                    Real user systems<br />
                    Automated workflows<br />
                    Data-driven insights<br />
                    Production deployments
                </Card>

            </div>

        </SectionWrapper>
    );
}

/* ================= CARD ================= */
function Card({ title, icon, children }: CardProps) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-6"
        >
            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

            <div className="flex items-center gap-2 mb-4 text-indigo-400">
                {icon}
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            <div className="text-gray-300 text-sm space-y-2">
                {children}
            </div>
        </motion.div>
    );
}
