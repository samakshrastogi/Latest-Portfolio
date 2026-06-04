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
            <div className="text-center mb-8 sm:mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-sm bg-linear-to-r from-white to-gray-400 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:max-w-xl sm:text-4xl md:text-5xl"
                >
                    Let’s Connect
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-400 sm:max-w-xl sm:text-base"
                >
                    Open to opportunities where I can contribute to scalable, reliable production systems.
                </motion.p>
            </div>

            {/* CARD */}
            <motion.div
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative mx-auto max-w-2xl rounded-3xl bg-linear-to-br from-indigo-500/40 via-purple-500/25 to-white/10 p-px"
            >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-5 text-center backdrop-blur-xl sm:p-7">

                    {/* GLOW */}
                    <div
                        ref={glowRef}
                        className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl"
                    />

                    <div className="relative rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.07] to-white/[0.03] px-4 py-4 text-left">
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-white sm:text-base">
                                Open to Opportunities
                            </p>

                            <span className="shrink-0 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                                Full-stack
                            </span>
                        </div>

                        <div>
                            <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                                I am seeking a role where I can apply my experience in backend systems,
                                API development, full-stack applications, and production-grade workflows.
                            </p>
                        </div>
                    </div>

                    {/* STATUS */}
                    <div className="relative mt-3 grid grid-cols-[1.15fr_1fr] gap-2 text-xs min-[380px]:text-sm">
                        <div className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-2 text-emerald-300">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="whitespace-nowrap">
                                Available for Roles
                            </span>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-gray-300">
                            <span className="whitespace-nowrap">
                                Timely Response
                            </span>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href={`mailto:${email}`}
                        className="relative mt-4 inline-block w-full rounded-xl px-6 py-3 font-medium text-white 
                        bg-linear-to-r from-indigo-600 to-purple-600
                        hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/30
                        transition"
                    >
                        Contact Me
                    </a>

                    {/* EMAIL COPY */}
                    <div className="relative mt-3 flex items-center justify-center gap-2">
                        <div className="min-w-0 flex-1 truncate rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-gray-300 sm:flex-none sm:px-4">
                            {email}
                        </div>

                        <button
                            onClick={copyEmail}
                            aria-label="Copy email"
                            className="shrink-0 rounded-lg bg-white/10 p-2 hover:bg-indigo-500/20 transition"
                        >
                            <FiCopy size={14} />
                        </button>

                        {copied && (
                            <span className="shrink-0 text-green-400 text-xs">Copied</span>
                        )}
                    </div>

                    {/* BUTTON GRID */}
                    <div className="relative mt-3 grid grid-cols-4 gap-2">

                        <a
                            href={`mailto:${email}`}
                            aria-label="Email"
                            className="flex items-center justify-center rounded-xl px-3 py-2 text-sm 
                            bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <FiMail className="text-indigo-400" />
                        </a>

                        <a
                            href="tel:+918299305586"
                            aria-label="Call"
                            className="flex items-center justify-center rounded-xl px-3 py-2 text-sm 
                            bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <FiPhone className="text-indigo-400" />
                        </a>

                        <a
                            href="https://github.com/samakshrastogi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex items-center justify-center rounded-xl px-3 py-2 text-sm 
                            bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <FaGithub className="text-indigo-400" />
                        </a>

                        <a
                            href="https://linkedin.com/in/samaksh-rastogi-9638b9254"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center justify-center rounded-xl px-3 py-2 text-sm 
                            bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <FaLinkedin className="text-indigo-400" />
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
