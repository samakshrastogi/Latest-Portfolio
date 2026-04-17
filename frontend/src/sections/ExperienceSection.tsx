import { motion } from "framer-motion";

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="py-20 sm:py-24 px-4 sm:px-6 bg-[var(--bg)]"
        >
            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[var(--text)] to-gray-400 bg-clip-text text-transparent">
                    Experience & Architecture
                </h2>

                <p className="text-[var(--muted)] mt-3 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto">
                    Designing scalable backend systems and full-stack applications
                </p>
            </div>

            {/* Summary */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center text-[var(--muted)] text-sm sm:text-base leading-relaxed"
            >
                <p>
                    Full Stack Developer with hands-on experience in building scalable applications
                    using modern technologies like React, Node.js, and cloud platforms.
                    Strong expertise in designing REST APIs, authentication systems, and deploying
                    production-ready applications.
                </p>
            </motion.div>

            {/* Grid */}
            <div className="grid gap-6 sm:gap-8 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2">

                {/* Backend Architecture */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent"
                >
                    <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 backdrop-blur-xl transition hover:bg-white/10">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-indigo-500">
                            Backend Architecture
                        </h3>

                        <div className="text-[var(--muted)] text-xs sm:text-sm space-y-1 sm:space-y-2 font-mono">
                            <p>src/</p>
                            <p>├── config/</p>
                            <p>├── controllers/</p>
                            <p>├── middleware/</p>
                            <p>├── models/</p>
                            <p>├── routes/</p>
                            <p>├── app.ts</p>
                            <p>└── server.ts</p>
                        </div>
                    </div>
                </motion.div>

                {/* Engineering Approach */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent"
                >
                    <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 backdrop-blur-xl transition hover:bg-white/10">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-indigo-500">
                            Engineering Approach
                        </h3>

                        <ul className="text-[var(--muted)] text-sm space-y-2">
                            <li>• Modular MVC architecture</li>
                            <li>• Secure authentication (JWT, SSO)</li>
                            <li>• Scalable REST APIs</li>
                            <li>• Cloud integration (AWS S3, CloudFront)</li>
                            <li>• Data security (masking & encryption)</li>
                            <li>• AI/ML integrations (Whisper, LLMs)</li>
                        </ul>
                    </div>
                </motion.div>

            </div>

            {/* DevOps */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto mt-12 sm:mt-16 group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent"
            >
                <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 backdrop-blur-xl transition hover:bg-white/10">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-indigo-500">
                        Deployment & DevOps
                    </h3>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {[
                            "Vercel",
                            "Netlify",
                            "Render",
                            "AWS S3",
                            "CloudFront",
                            "Azure SSO",
                            "Google SSO",
                            "PEM Deployment",
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1 text-xs sm:text-sm rounded-md bg-white/10 border border-[var(--border)]"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>

                </div>
            </motion.div>
        </section>
    );
}