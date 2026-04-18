import { motion } from "framer-motion";
import { FiMail, FiPhone, FiCopy } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const glowRef = useRef<HTMLDivElement>(null);

    const email = "samakshrastogi885@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (glowRef.current) {
            glowRef.current.style.left = `${x}px`;
            glowRef.current.style.top = `${y}px`;
        }
    };

    return (
        <SectionWrapper id="contact" variant="default">

            {/* ================= HEADER ================= */}
            <div className="text-center mb-16 sm:mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                    Let’s Build Something Exceptional
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto"
                >
                    Open to full-time roles, high-impact projects, and serious engineering work
                </motion.p>
            </div>

            {/* ================= MAIN CARD ================= */}
            <motion.div
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="relative max-w-3xl mx-auto rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/30 to-purple-500/30"
            >
                <div className="relative rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-8 sm:p-10 text-center overflow-hidden">

                    {/* 🔥 Cursor Glow */}
                    <div
                        ref={glowRef}
                        className="pointer-events-none absolute w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                    />

                    {/* ================= PITCH ================= */}
                    <div className="mb-8">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                            Full Stack Developer specializing in backend systems, scalable APIs,
                            and production-grade platforms used by real users.
                        </p>

                        {/* 🔥 TRUST BADGES */}
                        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                Built NIVR @ Nokia
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                Production Systems
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                Real Users
                            </span>
                        </div>
                    </div>

                    {/* ================= AVAILABILITY ================= */}
                    <div className="flex justify-center items-center gap-4 mb-8 text-sm">
                        <div className="flex items-center gap-2 text-green-400">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Available for work
                        </div>
                        <div className="text-gray-500">
                            Fast response
                        </div>
                    </div>

                    {/* ================= CTA ================= */}
                    <a
                        href={`mailto:${email}`}
                        className="group relative inline-block px-8 py-3 rounded-xl font-medium text-white overflow-hidden transition-all duration-300 mb-8"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90 group-hover:opacity-100 transition"></span>
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 blur-xl"></span>
                        <span className="relative z-10">
                            Start a Conversation
                        </span>
                    </a>

                    {/* ================= EMAIL COPY ================= */}
                    <div className="flex justify-center items-center gap-3 mb-8">
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                            {email}
                        </div>

                        <button
                            onClick={copyEmail}
                            className="p-2 rounded-lg bg-white/10 hover:bg-indigo-500/20 transition"
                            aria-label="copy email"
                        >
                            <FiCopy size={14} />
                        </button>

                        {copied && (
                            <span className="text-green-400 text-xs">Copied</span>
                        )}
                    </div>

                    {/* ================= LINKS ================= */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">

                        {[
                            { icon: <FiMail />, label: "Email", href: `mailto:${email}` },
                            { icon: <FiPhone />, label: "Call", href: "tel:+918299305586" },
                            { icon: <FaGithub />, label: "GitHub", href: "https://github.com/samakshrastogi" },
                            { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/samaksh-rastogi-9638b9254" },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.label !== "Call" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 hover:border-indigo-400/40 hover:bg-white/10 transition"
                            >
                                <span className="text-indigo-400 group-hover:scale-110 transition">
                                    {item.icon}
                                </span>
                                {item.label}
                            </a>
                        ))}

                    </div>
                </div>
            </motion.div>

            {/* ================= FOOTER ================= */}
            <div className="text-center text-gray-500 text-xs sm:text-sm mt-16">
                © {new Date().getFullYear()} Samaksh Rastogi · Engineering production systems
            </div>

        </SectionWrapper>
    );
}