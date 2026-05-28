import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import {
    FaAws,
    FaChartLine,
    FaDatabase,
    FaLock,
    FaMicrosoft,
    FaServer,
    FaVideo,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const experiencePoints = [
    {
        icon: <FaVideo />,
        label: "Video interactions",
    },
    {
        icon: <FaLock />,
        label: "Azure SSO authentication",
    },
    {
        icon: <FaServer />,
        label: "Scalable upload pipeline",
    },
    {
        icon: <FaServer />,
        label: "Metadata generation",
    },
    {
        icon: <FaChartLine />,
        label: "User analytics",
    },
    {
        icon: <FaDatabase />,
        label: "Storage & ranking system",
    },
];

const techStack = [
    { icon: <SiDjango className="text-green-400" />, label: "Django" },
    { icon: <FaServer className="text-indigo-400" />, label: "REST APIs" },
    { icon: <FaDatabase className="text-blue-400" />, label: "SQLite3" },
    { icon: <FaAws className="text-orange-400" />, label: "AWS S3" },
    { icon: <FaMicrosoft className="text-blue-400" />, label: "Azure SSO" },
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
                    className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
                >
                    Experience
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-gray-400 sm:mt-4 sm:text-base"
                >
                    Production engineering for internal tools used by real teams.
                </motion.p>
            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/25 via-purple-500/15 to-white/[0.05] p-px"
            >
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative rounded-3xl bg-black/40 p-3.5 backdrop-blur-xl sm:p-8 md:p-10">
                    <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-indigo-400/70 via-indigo-400/20 to-transparent sm:block" />

                    <div className="relative sm:pl-8">
                        <span className="absolute left-[-37px] top-1 hidden h-3 w-3 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.8)] sm:block" />

                        <div className="mb-3 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-xs sm:tracking-[0.24em]">
                                    Professional Experience
                                </p>
                                <h3 className="max-w-xl text-lg font-semibold leading-tight text-white min-[380px]:text-xl sm:text-3xl">
                                    Nokia — Student Intern
                                </h3>
                                <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] sm:mt-3 sm:gap-2 sm:text-xs">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-gray-300 sm:px-3">
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

                        <div className="mb-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:mb-5 sm:rounded-2xl sm:p-4">
                            <div className="mb-1.5 flex items-start gap-2.5 text-indigo-300 sm:mb-3 sm:gap-3">
                                <FaServer className="mt-1 shrink-0" />
                                <p className="text-sm font-medium leading-relaxed min-[380px]:text-base sm:text-lg">
                                    Built NIVR — Nokia Inventory Video Repository
                                </p>
                            </div>

                            <p className="text-xs leading-relaxed text-gray-300 min-[380px]:text-sm">
                                Internal video platform covering backend architecture, auth,
                                analytics, and media pipelines.
                            </p>
                        </div>

                        <div className="mb-4 grid grid-cols-2 gap-2 text-xs text-gray-300 min-[380px]:text-sm sm:mb-7 sm:gap-3">
                            {experiencePoints.map((point) => (
                                <div
                                    key={point.label}
                                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2 sm:items-start sm:gap-3 sm:rounded-xl sm:px-3 sm:py-2.5"
                                >
                                    <span className="shrink-0 text-indigo-400 sm:mt-0.5">
                                        {point.icon}
                                    </span>
                                    <span className="leading-snug">
                                        {point.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:mb-3 sm:text-xs">
                                Tech used
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-xs min-[380px]:text-sm sm:flex sm:flex-wrap sm:gap-3">
                                {techStack.map((item) => (
                                    <span
                                        key={item.label}
                                        className="flex min-w-0 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 text-gray-100 transition hover:border-indigo-400/40 hover:bg-indigo-500/20 sm:justify-start sm:px-3 sm:py-2"
                                    >
                                        {item.icon}
                                        <span className="truncate">
                                            {item.label}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
