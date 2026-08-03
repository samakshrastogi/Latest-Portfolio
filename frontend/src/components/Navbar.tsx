import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const navItems = [
    { label: "Home", id: "hero" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Systems", id: "systems" },
    { label: "Contact", id: "contact" },
];

const profileActions = [
    { label: "GitHub", href: "https://github.com/samakshrastogi", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/samaksh-rastogi-9638b9254", icon: FaLinkedin },
    { label: "Email", href: "mailto:samakshrastogi885@gmail.com", icon: Mail },
];

export default function Navbar() {
    const [active, setActive] = useState("hero");
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const update = () => {
            setScrolled(window.scrollY > 12);
            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (!section) continue;
                const rect = section.getBoundingClientRect();
                if (rect.top <= 130 && rect.bottom >= 130) setActive(item.id);
            }
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;
        const y = section.getBoundingClientRect().top + window.scrollY - 92;
        window.scrollTo({ top: y, behavior: "smooth" });
        setOpen(false);
    };

    return (
        <>
            <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-slate-900/10 bg-white/85 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl" : "border-transparent bg-white/60 backdrop-blur-xl"}`}>
                <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-3 px-4 sm:px-6">
                    <button type="button" onClick={() => scrollTo("hero")} className="flex min-w-fit items-center gap-2.5" aria-label="Go to portfolio home">
                        <img src={logo} alt="" className="h-9 w-9 rounded-xl object-cover shadow-sm" />
                        <span className="hidden text-sm font-black tracking-tight text-slate-950 sm:block">Samaksh Rastogi</span>
                    </button>

                    <nav className="mx-auto hidden items-center rounded-2xl border border-slate-900/10 bg-white/80 p-1 shadow-sm lg:flex" aria-label="Portfolio sections">
                        {navItems.map((item) => (
                            <button
                                type="button"
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`rounded-xl px-3 py-2 text-xs font-bold transition ${active === item.id ? "bg-slate-950 text-white shadow-md" : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="ml-auto flex items-center gap-2 lg:ml-0">
                        {profileActions.map((action) => (
                            <a key={action.label} href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={action.label} className="hidden h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/85 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 sm:flex">
                                <action.icon size={17} />
                            </a>
                        ))}
                        <button type="button" onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-900/10 bg-white text-slate-700 shadow-sm lg:hidden" aria-label="Open navigation">
                            <Menu size={19} />
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {open ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-slate-950/30 p-3 backdrop-blur-md lg:hidden" onClick={() => setOpen(false)}>
                        <motion.div initial={{ opacity: 0, y: -20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.98 }} onClick={(event) => event.stopPropagation()} className="mx-auto max-w-md rounded-[2rem] border border-slate-900/10 bg-white p-4 shadow-2xl">
                            <div className="flex items-center justify-between px-2 py-1">
                                <div className="flex items-center gap-2.5">
                                    <img src={logo} alt="" className="h-9 w-9 rounded-xl object-cover" />
                                    <span className="font-black text-slate-950">Portfolio</span>
                                </div>
                                <button type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-600" aria-label="Close navigation"><X size={18} /></button>
                            </div>
                            <nav className="mt-4 grid gap-1" aria-label="Mobile portfolio sections">
                                {navItems.map((item) => (
                                    <button type="button" key={item.id} onClick={() => scrollTo(item.id)} className={`rounded-xl px-4 py-3 text-left text-sm font-bold ${active === item.id ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"}`}>
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-900/10 pt-4">
                                {profileActions.map((action) => (
                                    <a key={action.label} href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-indigo-50 px-2 py-3 text-xs font-bold text-indigo-700">
                                        <action.icon size={15} /> {action.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <aside className="fixed bottom-5 right-4 z-40 hidden flex-col gap-2 sm:flex" aria-label="Quick profile links">
                {profileActions.map((action, index) => (
                    <motion.a key={action.label} href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + index * 0.08 }} className="group flex h-12 w-12 items-center justify-end overflow-hidden rounded-2xl border border-slate-900/10 bg-white/90 px-3 text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-all hover:w-32 hover:gap-2 hover:bg-slate-950 hover:text-white" aria-label={action.label}>
                        <span className="hidden whitespace-nowrap text-xs font-bold group-hover:inline">{action.label}</span>
                        <action.icon size={19} className="shrink-0" />
                    </motion.a>
                ))}
            </aside>
        </>
    );
}
