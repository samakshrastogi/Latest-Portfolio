import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="py-20 sm:py-24 px-4 sm:px-6 bg-[var(--bg)]"
        >
            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[var(--text)] to-gray-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <p className="text-[var(--muted)] mt-3 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto">
                    Let’s build something scalable and impactful together
                </p>
            </div>

            {/* Contact Card */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent"
            >
                {/* 💡 Glow (FIXED - behind everything) */}
                <div className="absolute inset-0 -z-10 pointer-events-none rounded-2xl bg-indigo-500/10 opacity-40 blur-xl"></div>

                {/* Card */}
                <div className="relative z-10 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 backdrop-blur-xl text-center">

                    {/* Description */}
                    <p className="text-[var(--muted)] mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                        I'm a Full Stack Developer specializing in building scalable systems,
                        APIs, and AI-powered applications. Open to opportunities and collaborations.
                    </p>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8">

                        <a
                            href="mailto:samakshrastogi885@gmail.com"
                            className="z-20 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                        >
                            <FiMail size={18} />
                            Email
                        </a>

                        <a
                            href="tel:+918299305586"
                            className="z-20 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                        >
                            <FiPhone size={18} />
                            Call
                        </a>

                        <a
                            href="https://github.com/samakshrastogi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="z-20 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                        >
                            <FaGithub size={18} />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/samaksh-rastogi-9638b9254"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="z-20 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                        >
                            <FaLinkedin size={18} />
                            LinkedIn
                        </a>

                    </div>

                    {/* CTA */}
                    <a
                        href="mailto:samakshrastogi885@gmail.com"
                        className="z-20 inline-block w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-medium transition shadow-lg shadow-indigo-500/20"
                    >
                        Let’s Connect
                    </a>
                </div>
            </motion.div>

            {/* Footer */}
            <div className="text-center text-[var(--muted)] text-xs sm:text-sm mt-12 sm:mt-16">
                © {new Date().getFullYear()} Samaksh Rastogi. Built with React & ❤️
            </div>
        </section>
    );
}