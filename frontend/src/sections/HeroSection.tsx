import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import MagneticButton from "../components/MagneticButton";
import { TypeAnimation } from "react-type-animation";

// ICONS
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
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 pt-24 md:pt-28"
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl pointer-events-none" />

            {/* 3D BACKGROUND */}
            <div className="absolute right-0 top-0 w-[40%] h-full z-0 pointer-events-none hidden lg:block">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} />

                    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
                        <mesh>
                            <sphereGeometry args={[1.2, 32, 32]} />
                            <meshStandardMaterial color="#6366f1" wireframe />
                        </mesh>
                    </Float>

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
                </Canvas>
            </div>

            {/* MAIN GRID */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-12 md:gap-16 max-w-7xl w-full mx-auto">

                {/* MOBILE IMAGE */}
                <div className="flex justify-center md:hidden">
                    <ProfileImage />
                </div>

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">

                    {/* NAME */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                    >
                        Samaksh Rastogi
                    </motion.h1>

                    {/* ROLE */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 text-base sm:text-lg md:text-2xl text-indigo-400 font-medium"
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

                    {/* TAGLINE */}
                    <p className="mt-4 text-gray-300 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
                        Building scalable backend systems and AI-powered applications used in real production environments.
                    </p>

                    {/* TECH STACK */}
                    <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-2 px-3 py-1 text-xs sm:text-sm bg-white/10 border border-white/20 rounded-full hover:scale-105 hover:bg-indigo-500/20 transition"
                            >
                                <span className="text-indigo-400 text-sm sm:text-base">
                                    {tech.icon}
                                </span>
                                {tech.name}
                            </div>
                        ))}
                    </div>

                    {/* STATUS */}
                    <div className="mt-4 flex items-start sm:items-center gap-2 text-xs sm:text-sm text-green-400 justify-center md:justify-start text-center md:text-left">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mt-1 sm:mt-0"></span>
                        <span>
                            Building: AI Quiz Platform (auto question generation + analytics)
                        </span>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center md:justify-start">

                        <MagneticButton>
                            <button
                                onClick={scrollToProjects}
                                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:scale-105 transition shadow-lg shadow-indigo-500/30"
                            >
                                Explore My Work
                            </button>
                        </MagneticButton>

                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition text-center"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* STATS */}
                    <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-gray-400 justify-center md:justify-start text-xs sm:text-sm">

                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <TbBrain className="text-purple-400" />
                            <span>Built NIVR @ Nokia</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <FaServer className="text-indigo-400" />
                            <span>20+ APIs Designed</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <FaChartLine className="text-green-400" />
                            <span>Real User Analytics</span>
                        </div>

                    </div>
                </div>

                {/* DESKTOP IMAGE */}
                <div className="hidden md:flex justify-center">
                    <ProfileImage />
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-6 text-gray-500 text-xs sm:text-sm"
            >
                ↓ Scroll
            </motion.div>
        </section>
    );
}

/* PROFILE IMAGE */
function ProfileImage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
        >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-40 animate-pulse"></div>

            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-indigo-500 to-purple-500">
                <div className="w-full h-full rounded-full bg-[var(--bg)]">
                    <img
                        src="images/profile.png"
                        alt="Samaksh Rastogi"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
        </motion.div>
    );
}