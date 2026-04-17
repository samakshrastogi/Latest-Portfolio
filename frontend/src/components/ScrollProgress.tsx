import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const total =
                document.documentElement.scrollHeight - window.innerHeight;
            const current = window.scrollY;
            setProgress((current / total) * 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
            <div
                className="h-full bg-indigo-500 transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}