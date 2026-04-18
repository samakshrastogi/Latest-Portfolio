import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "default" | "indigo" | "purple";

interface SectionWrapperProps {
    children: ReactNode;
    variant?: Variant;
    id?: string;
}

export default function SectionWrapper({
    children,
    variant = "default",
    id,
}: SectionWrapperProps) {

    const variants = {
        default: {
            bg: "bg-white/5",
            border: "border-white/10",
            glow: "bg-white/10",
        },
        indigo: {
            bg: "bg-indigo-500/5",
            border: "border-indigo-500/10",
            glow: "bg-indigo-500/10",
        },
        purple: {
            bg: "bg-purple-500/5",
            border: "border-purple-500/10",
            glow: "bg-purple-500/10",
        },
    };

    const current = variants[variant];

    return (
        <section
            id={id}
            className="relative pt-6 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 scroll-mt-24"
        >
            {/* TOP DIVIDER */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* CONTAINER */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`
                    relative max-w-6xl mx-auto
                    rounded-2xl p-5 sm:p-8 md:p-10
                    backdrop-blur-xl border shadow-xl
                    transition duration-300 ease-out
                    hover:scale-[1.01]
                    ${current.bg} ${current.border}
                `}
            >
                {/* GLOW */}
                <div
                    className={`
                        absolute inset-0 rounded-2xl
                        opacity-0 group-hover:opacity-100
                        transition duration-500 blur-xl
                        pointer-events-none
                        ${current.glow}
                    `}
                />

                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </section>
    );
}