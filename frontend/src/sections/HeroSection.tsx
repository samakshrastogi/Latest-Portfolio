import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import MagneticButton from "../components/MagneticButton";

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
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6"
        >
            {/* 🌐 3D Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} />

                    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
                        <mesh>
                            <sphereGeometry args={[1.2, 32, 32]} />
                            <meshStandardMaterial color="#6366f1" wireframe />
                        </mesh>
                    </Float>

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
                </Canvas>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[var(--bg)]/70 backdrop-blur-sm z-10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 text-center max-w-3xl mx-auto">

                {/* 🔥 PROFILE IMAGE (CENTERPIECE) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto mb-6 sm:mb-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
                >
                    {/* Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-40"></div>

                    {/* Border Ring */}
                    <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-indigo-500 to-purple-500">
                        <div className="w-full h-full rounded-full bg-[var(--bg)] flex items-center justify-center">

                            {/* Image */}
                            <img
                                src="images/profile.png" // 👉 put your image in public folder
                                alt="Samaksh Rastogi"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Glow Background */}
                <div className="absolute -z-10 pointer-events-none blur-3xl opacity-20 bg-indigo-500 w-72 sm:w-96 h-72 sm:h-96 rounded-full top-20 left-1/2 -translate-x-1/2"></div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-[var(--text)] to-gray-400 bg-clip-text text-transparent"
                >
                    Samaksh Rastogi
                </motion.h1>

                {/* Role */}
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-4 text-base sm:text-lg md:text-2xl text-[var(--muted)]"
                >
                    Full Stack Developer • Building Scalable Systems
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-4 text-sm sm:text-base md:text-lg text-[var(--muted)] leading-relaxed"
                >
                    Specialized in React, Node.js, Cloud, and AI-driven applications with real-world deployment experience.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <MagneticButton>
                        <button
                            onClick={scrollToProjects}
                            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-medium transition shadow-lg shadow-indigo-500/20"
                        >
                            View Projects
                        </button>
                    </MagneticButton>

                    <a
                        href="/resume.pdf"
                        download
                        className="w-full sm:w-auto px-6 py-3 border border-[var(--border)] bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 rounded-xl font-medium transition backdrop-blur text-center"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}