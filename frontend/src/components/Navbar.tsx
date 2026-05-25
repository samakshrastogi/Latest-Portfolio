import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { label: "Home", id: "hero" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("hero");
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    const lastScroll = useRef(0);
    const indicatorRef = useRef<HTMLSpanElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const glowRef = useRef<HTMLDivElement>(null);

    // 🔥 Scroll logic (hide/show + active section)
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            if (current > lastScroll.current && current > 80) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            lastScroll.current = current;

            navItems.forEach((item) => {
                const el = document.getElementById(item.id);
                if (!el) return;

                const rect = el.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActive(item.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔥 Sliding indicator
    useEffect(() => {
        const index = navItems.findIndex((i) => i.id === active);
        const el = itemRefs.current[index];

        if (el && indicatorRef.current) {
            indicatorRef.current.style.width = `${el.offsetWidth}px`;
            indicatorRef.current.style.left = `${el.offsetLeft}px`;
        }
    }, [active]);

    // 🔥 Cursor glow (desktop only feel)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (glowRef.current) {
            glowRef.current.style.left = `${x}px`;
            glowRef.current.style.top = `${y}px`;
        }
    };

    // 🔥 Scroll with offset
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - 100;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });

        setOpen(false);
    };

    return (
        <>
            {/* ================= DESKTOP / MAIN NAV ================= */}
            <div
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
                    }`}
            >
                <motion.div
                    onMouseMove={handleMouseMove}
                    whileHover={{ scale: 1.02 }}
                    className="relative flex items-center gap-6 px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden"
                >
                    {/* Glow */}
                    <div
                        ref={glowRef}
                        className="pointer-events-none absolute w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                    />

                    {/* Logo */}
                    <div className="font-semibold text-white whitespace-nowrap">
                        Samaksh.dev
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex relative items-center gap-6">
                        <span
                            ref={indicatorRef}
                            className="absolute bottom-0 h-[2px] bg-indigo-500 transition-all duration-300"
                        />

                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.id}
                                ref={(el) => {
                                    itemRefs.current[i] = el;
                                }}
                                onClick={() => scrollTo(item.id)}
                                whileHover={{ y: -2 }}
                                className={`relative text-sm transition ${active === item.id
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
                        aria-label="humburger"
                    >
                        <Menu size={20} />
                    </button>
                </motion.div>
            </div>

            {/* ================= MOBILE FULLSCREEN MENU ================= */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl md:hidden"
                    >
                        {/* Close */}
                        <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setOpen(false)}
                                className="p-2 rounded-lg bg-white/10 border border-white/10"
                                aria-label="close"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="h-full flex flex-col justify-center items-center gap-8">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    className={`text-2xl font-medium transition ${active === item.id
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
