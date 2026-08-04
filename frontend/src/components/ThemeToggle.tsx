import { Sun } from "lucide-react";

export default function ThemeToggle() {
    return (
        <span className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm" aria-label="Light appearance enabled">
            <Sun size={15} className="text-amber-500" /> Light appearance
        </span>
    );
}