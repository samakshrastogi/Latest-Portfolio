import type { ReactNode } from "react";

type Variant = "default" | "indigo" | "purple";

interface SectionWrapperProps {
    children: ReactNode;
    variant?: Variant;
    id?: string;
}

const variants = {
    default: "border-slate-900/10 bg-white/88",
    indigo: "border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/55 to-cyan-50/45",
    purple: "border-violet-200/80 bg-gradient-to-br from-white via-violet-50/50 to-fuchsia-50/35",
};

export default function SectionWrapper({ children, variant = "default", id }: SectionWrapperProps) {
    return (
        <section id={id} className="relative scroll-mt-24 px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10">
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
            <div
                data-gsap-section
                className={`relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8 md:p-10 ${variants[variant]}`}
            >
                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-indigo-200/25 blur-3xl" />
                <div className="relative z-10">{children}</div>
            </div>
        </section>
    );
}