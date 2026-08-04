import { Award, BriefcaseBusiness, CheckCircle2, Download, ExternalLink, FileText, Layers3 } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const strengths = [
    "Production backend and full-stack delivery",
    "Django, Node.js, REST APIs, MongoDB and Redis",
    "Realtime systems with Socket.IO and WebRTC",
    "AI workflows, media processing and analytics",
];

const highlights = [
    { value: "8", label: "SK products", icon: Layers3 },
    { value: "3", label: "Nokia systems", icon: BriefcaseBusiness },
    { value: "100+", label: "Backend endpoints", icon: Award },
];

export default function ResumeSection() {
    return (
        <SectionWrapper id="resume" variant="indigo">
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                <div className="gsap-card relative overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-white p-5 shadow-[0_22px_65px_rgba(15,23,42,0.1)] sm:p-7">
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-gradient-to-br from-indigo-100 to-cyan-100" />
                    <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg">
                                <FileText size={22} />
                            </span>
                            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">Updated 2026</span>
                        </div>
                        <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-indigo-700">Professional resume</p>
                        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Samaksh Rastogi</h3>
                        <p className="mt-2 text-sm font-bold text-slate-500">Full-Stack Developer · Backend Engineer · AI Systems Builder</p>
                        <div className="mt-6 grid grid-cols-3 gap-2">
                            {highlights.map((item) => (
                                <div key={item.label} className="rounded-xl border border-slate-900/10 bg-slate-50 p-3 text-center">
                                    <item.icon size={15} className="mx-auto text-indigo-600" />
                                    <strong className="mt-1 block text-lg text-slate-950">{item.value}</strong>
                                    <span className="text-[10px] font-bold text-slate-500">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-indigo-700">
                        <CheckCircle2 size={14} /> Recruiter-ready
                    </span>
                    <h2 className="mt-4 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-600 bg-clip-text text-3xl font-black leading-tight text-transparent sm:text-4xl md:text-5xl">
                        A concise resume built around measurable engineering work
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                        The resume summarizes production experience at Nokia, the SK ecosystem, core technical strengths, and selected systems without inflated claims or unnecessary visual noise.
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {strengths.map((strength) => (
                            <li key={strength} className="flex items-start gap-2 rounded-xl border border-slate-900/10 bg-white/80 p-3 text-sm font-semibold text-slate-600">
                                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                                {strength}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a href="/Samaksh-Rastogi-Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-600">
                            <ExternalLink size={17} /> View resume
                        </a>
                        <a href="/Samaksh-Rastogi-Resume.pdf" download="Samaksh-Rastogi-Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-900/10 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                            <Download size={17} /> Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}