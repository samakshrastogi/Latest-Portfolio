import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { label: "Home", id: "hero" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false); // close mobile menu
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all ${scrolled
                    ? "bg-[var(--bg)]/70 backdrop-blur-xl border-b border-[var(--border)]"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="font-semibold tracking-wide text-base sm:text-lg">
                    Samaksh.dev
                </h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="relative text-sm text-gray-400 hover:text-white transition group"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all group-hover:w-full"></span>
                        </button>
                    ))}

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>

                {/* Mobile Right */}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />

                    <button
                        onClick={() => setOpen(!open)}
                        className="p-2 rounded-lg bg-[var(--card)] border border-[var(--border)]"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 pb-6 pt-2 bg-[var(--bg)] border-t border-[var(--border)] backdrop-blur-xl">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="text-left text-gray-400 hover:text-white transition"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}