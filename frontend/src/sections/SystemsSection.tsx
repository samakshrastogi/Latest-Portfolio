import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import type { ReactNode } from "react";
import {
    FaChartLine,
    FaCheck,
    FaCloud,
    FaCogs,
    FaDatabase,
    FaLayerGroup,
    FaProjectDiagram,
    FaServer,
    FaArrowRight,
} from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
};

const stats = [
    { value: "6+", label: "Projects", icon: <FaServer /> },
    { value: "100+", label: "Backend Endpoints", icon: <FaProjectDiagram /> },
    { value: "3", label: "Internal Systems", icon: <FaCloud /> },
    { value: "30+", label: "Technologies", icon: <FaDatabase /> },
];

const systemFlow = ["Client", "API", "Services", "Database", "Storage"];

const cards = [
    {
        index: "01",
        title: "Engineering",
        subtitle: "Backend foundations for production systems",
        icon: <FaCogs />,
        items: [
            "Modular backend architecture",
            "Secure authentication",
            "REST API design",
            "Optimized workflows",
        ],
    },
    {
        index: "02",
        title: "System Thinking",
        subtitle: "Design decisions that scale cleanly",
        icon: <FaLayerGroup />,
        items: [
            "Scalable architecture",
            "Clean separation of concerns",
            "Efficient data handling",
            "Performance-first design",
        ],
    },
    {
        index: "03",
        title: "Impact",
        subtitle: "Engineering tied to measurable outcomes",
        icon: <FaChartLine />,
        items: [
            "Real user systems",
            "Automated workflows",
            "Data-driven insights",
            "Production deployments",
        ],
    },
];

type SystemCardProps = {
    index: string;
    title: string;
    subtitle: string;
    icon: ReactNode;
    items: string[];
};

export default function SystemsSection() {
    return (
        <SectionWrapper id="systems" variant="indigo">
            <div className="mb-10 text-center sm:mb-14">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
                >
                    Systems & Impact
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base"
                >
                    Practical backend architecture, APIs, and product systems shipped with measurable outcomes.
                </motion.p>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                className="mb-12 grid grid-cols-2 gap-6 text-center sm:mb-14 sm:grid-cols-4"
            >
                {stats.map((stat) => (
                    <motion.div key={stat.label} variants={fadeUp}>
                        <div className="mb-2 flex justify-center text-xl text-indigo-400">
                            {stat.icon}
                        </div>
                        <p className="text-3xl font-semibold text-white">{stat.value}</p>
                        <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mx-auto mb-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:mb-14 sm:p-6"
            >
                <h3 className="mb-5 text-center text-lg font-semibold text-indigo-300">
                    System Flow
                </h3>

                <div className="mx-auto flex max-w-sm flex-wrap items-center justify-center gap-2 text-xs text-gray-300 sm:max-w-none sm:flex-nowrap sm:gap-3 sm:text-sm">
                    {systemFlow.map((node, index) => (
                        <div key={node} className="flex items-center gap-2">
                            <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 font-medium sm:min-w-24 sm:px-4">
                                {node}
                            </div>

                            {index < systemFlow.length - 1 && (
                                <FaArrowRight className="text-indigo-400/80" />
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
                {cards.map((card) => (
                    <SystemCard key={card.title} {...card} />
                ))}
            </div>
        </SectionWrapper>
    );
}

function SystemCard({ index, title, subtitle, icon, items }: SystemCardProps) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 sm:p-6"
        >
            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

            <div className="absolute right-4 top-4 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-300">
                {index}
            </div>

            <div className="relative">
                <div className="mb-3 flex items-center gap-3 text-indigo-300">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/15 text-sm">
                        {icon}
                    </span>
                    <h3 className="pr-12 text-xl font-semibold">{title}</h3>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {subtitle}
                </p>

                <ul className="space-y-3 text-sm text-gray-100">
                    {items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-xs text-emerald-300">
                                <FaCheck />
                            </span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
