import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import { TypeAnimation } from "react-type-animation";
import {
    SiReact,
    SiNodedotjs,
    SiDjango,
    SiMongodb,
    SiPython,
    SiTypescript,
} from "react-icons/si";
import { FaAws, FaBrain, FaCodeBranch, FaDatabase, FaServer, FaChartLine } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";

const techStack = [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQLite", icon: <FaDatabase /> },
    { name: "AWS S3", icon: <FaAws /> },
    { name: "AI / ML", icon: <FaBrain /> },
    { name: "REST APIs", icon: <FaCodeBranch /> },
];

export default function HeroSection() {
    const scrollToProjects = () => {
        const el = document.getElementById("projects");
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen w-full items-center overflow-hidden px-5 pt-24 sm:px-6 md:px-8 md:pt-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl" />

            <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-16">
                <div className="order-2 max-w-3xl text-left lg:order-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-500 bg-clip-text pb-2 text-4xl font-bold leading-[1.12] text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Samaksh Rastogi
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-5 text-xl font-medium text-indigo-400 sm:text-2xl md:text-3xl"
                    >
                        <TypeAnimation
                            sequence={[
                                "Full-Stack Developer",
                                2000,
                                "Backend Engineer",
                                2000,
                                "Django & REST API Developer",
                                2000,
                                "AI Product Builder",
                                2000,
                                "Production Systems Developer",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        Building full-stack platforms, Django-based internal tools, and AI-powered products across support workflows, media systems, automation, and analytics.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-900/10 bg-white/85 px-3 py-2 text-sm text-slate-700 transition hover:scale-[1.03] hover:border-indigo-400/40 hover:bg-indigo-500/10 sm:justify-start sm:rounded-full sm:px-4"
                            >
                                <span className="text-base text-indigo-400">
                                    {tech.icon}
                                </span>
                                <span className="truncate">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-start gap-3 text-sm text-emerald-400 sm:items-center sm:text-base">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse sm:mt-0"></span>
                        <span>
                            Currently building: SK CrawlPulse (AI-powered QA and website analysis platform)
                        </span>
                    </div>

                    <div className="mt-10 flex flex-row items-center gap-3 sm:gap-4">
                        <MagneticButton className="min-w-0 flex-[1.25] sm:flex-none">
                            <button
                                onClick={scrollToProjects}
                                className="w-full whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-3 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.03] min-[380px]:px-4 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg"
                            >
                                Explore My Work
                            </button>
                        </MagneticButton>

                        <a
                            href="#contact"
                            className="min-w-0 flex-1 whitespace-nowrap rounded-xl border border-slate-900/10 bg-white/75 px-3 py-3 text-center text-sm font-medium text-slate-950 transition hover:bg-indigo-50 min-[380px]:px-4 sm:flex-none sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        <div className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3">
                            <TbBrain className="text-sm text-purple-400" />
                            <span className="whitespace-nowrap text-sm text-slate-600">
                                3 Nokia Internal Systems
                            </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3">
                            <FaServer className="text-sm text-indigo-400" />
                            <span className="whitespace-nowrap text-sm text-slate-600">
                                100+ Backend Endpoints
                            </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3">
                            <FaChartLine className="text-sm text-green-400" />
                            <span className="whitespace-nowrap text-sm text-slate-600">
                                AI, Analytics & Reports
                            </span>
                        </div>
                    </div>
                </div>

                <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                    <ProfileImage />
                </div>
            </div>

        </section>
    );
}

function ProfileImage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.84, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]"
        >
            <div className="absolute inset-4 rounded-[3rem] border border-indigo-200 bg-white/70 shadow-[0_28px_90px_rgba(79,70,229,0.16)] backdrop-blur-xl rotate-6" />
            <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-200/70 via-indigo-200/70 to-violet-200/70 -rotate-6" />
            <div className="absolute left-1 top-14 h-14 w-14 rounded-2xl border border-white bg-white/90 shadow-xl" />
            <div className="absolute bottom-10 right-0 h-20 w-20 rounded-[1.5rem] border border-white bg-slate-950 shadow-xl" />
            <div className="relative z-10 h-[68%] w-[68%] min-h-[210px] min-w-[210px] rounded-[2.5rem] border border-white bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.2)] sm:min-h-[250px] sm:min-w-[250px]">
                <img
                    src="images/profile.jpeg"
                    alt="Samaksh Rastogi"
                    className="h-full w-full rounded-[2rem] object-cover"
                />
            </div>
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-900/10 bg-white/95 px-4 py-2 text-xs font-black text-slate-700 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Building production systems
            </div>
        </motion.div>
    );
}
