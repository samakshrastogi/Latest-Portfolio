import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import MagneticButton from "../components/MagneticButton";
import { TypeAnimation } from "react-type-animation";
import {
    SiReact,
    SiNodedotjs,
    SiDjango,
    SiMongodb,
    SiPostgresql,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaBrain, FaServer, FaChartLine } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";

const techStack = [
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "AWS S3", icon: <FaAws /> },
    { name: "Azure SSO", icon: <FaMicrosoft /> },
    { name: "AI", icon: <FaBrain /> },
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
                        className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
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
                                "Backend Engineer",
                                2000,
                                "System Design Enthusiast",
                                2000,
                                "AI Product Builder",
                                2000,
                                "Building Production Systems",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
                        Building scalable backend systems and AI-powered applications used in real production environments.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-gray-100 transition hover:scale-[1.03] hover:border-indigo-400/40 hover:bg-indigo-500/10"
                            >
                                <span className="text-base text-indigo-400">
                                    {tech.icon}
                                </span>
                                {tech.name}
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
                            className="min-w-0 flex-1 whitespace-nowrap rounded-xl border border-white/15 bg-white/[0.03] px-3 py-3 text-center text-sm font-medium text-white transition hover:bg-white/[0.08] min-[380px]:px-4 sm:flex-none sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                            <TbBrain className="text-sm text-purple-400" />
                            <span className="whitespace-nowrap text-sm text-gray-300">
                                Built NIVR @ Nokia
                            </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                            <FaServer className="text-sm text-indigo-400" />
                            <span className="whitespace-nowrap text-sm text-gray-300">
                                20+ APIs Designed
                            </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                            <FaChartLine className="text-sm text-green-400" />
                            <span className="whitespace-nowrap text-sm text-gray-300">
                                Real User Analytics
                            </span>
                        </div>
                    </div>
                </div>

                <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                    <ProfileImage />
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-6 hidden text-xs text-gray-500 sm:block"
            >
                ↓ Scroll
            </motion.div>
        </section>
    );
}

function ProfileImage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]"
        >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-full bg-fuchsia-600/20 blur-3xl" />

            <div className="pointer-events-none absolute right-0 top-0 hidden h-[72%] w-[72%] lg:block">
                <Canvas camera={{ position: [0, 0, 4] }}>
                    <ambientLight intensity={0.45} />
                    <directionalLight position={[2, 2, 5]} intensity={1} />

                    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
                        <mesh>
                            <sphereGeometry args={[1.55, 32, 32]} />
                            <meshStandardMaterial color="#4f46e5" wireframe />
                        </mesh>
                    </Float>

                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={0.7}
                    />
                </Canvas>
            </div>

            <div className="relative z-10 h-[66%] w-[66%] min-h-[210px] min-w-[210px] rounded-full border-[3px] border-violet-400 bg-gradient-to-r from-indigo-500 to-fuchsia-500 p-[3px] shadow-[0_0_40px_rgba(139,92,246,0.28)] sm:min-h-[250px] sm:min-w-[250px]">
                <div className="h-full w-full rounded-full bg-[var(--bg)]">
                    <img
                        src="images/profile.png"
                        alt="Samaksh Rastogi"
                        className="h-full w-full rounded-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
}
