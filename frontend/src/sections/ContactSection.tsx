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

            {/* HEADER */}
            <div className="text-center mb-14 sm:mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                    Let’s Build Something Exceptional
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto"
                >
                    Open to full-time roles, high-impact projects, and serious engineering work
                </motion.p>
            </div>

            {/* CARD */}
            <motion.div
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative max-w-2xl mx-auto rounded-2xl p-px bg-linear-to-br from-indigo-500/30 to-purple-500/30"
            >
                <div className="relative rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 text-center overflow-hidden">

                    {/* GLOW */}
                    <div
                        ref={glowRef}
                        className="pointer-events-none absolute w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                    />

                    {/* TEXT */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                        Full Stack Developer specializing in backend systems, scalable APIs,
                        and production-grade platforms used by real users.
                    </p>

                    {/* BADGES */}
                    <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                        {["Built NIVR @ Nokia", "Production Systems", "Real Users"].map((b) => (
                            <span
                                key={b}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                            >
                                {b}
                            </span>
                        ))}
                    </div>

                    {/* STATUS */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm">
                        <div className="flex items-center gap-2 text-green-400">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Available for work
                        </div>
                        <div className="text-gray-500">Fast response</div>
                    </div>

                    {/* CTA */}
                    <a
                        href={`mailto:${email}`}
                        className="mt-6 inline-block w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-white 
                        bg-linear-to-r from-indigo-600 to-purple-600
                        hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/30
                        transition"
                    >
                        Start a Conversation
                    </a>

                    {/* EMAIL COPY */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
                        <div className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 text-center break-all">
                            {email}
                        </div>

                        <button
                            onClick={copyEmail}
                            aria-label="Copy email"
                            className="p-2 rounded-lg bg-white/10 hover:bg-indigo-500/20 transition"
                        >
                            <FiCopy size={14} />
                        </button>

                        {copied && (
                            <span className="text-green-400 text-xs">Copied</span>
                        )}
                    </div>

                    {/* BUTTON GRID */}
                    <div className="mt-6 grid grid-cols-2 gap-3">

                        <a
                            href={`mailto:${email}`}
                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg 
                            bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <FiMail className="text-indigo-400" />
                            Email
                        </a>

                        <a
                            href="tel:+918299305586"
                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg 
                            bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <FiPhone className="text-indigo-400" />
                            Call
                        </a>

                        <a
                            href="https://github.com/samakshrastogi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg 
                            bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <FaGithub className="text-indigo-400" />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/samaksh-rastogi-9638b9254"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg 
                            bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <FaLinkedin className="text-indigo-400" />
                            LinkedIn
                        </a>

                    </div>
                </div>
            </motion.div>

            {/* FOOTER */}
            <div className="text-center text-gray-500 text-xs sm:text-sm mt-14">
                © {new Date().getFullYear()} Samaksh Rastogi · Engineering production systems
            </div>

        </SectionWrapper>
    );
}