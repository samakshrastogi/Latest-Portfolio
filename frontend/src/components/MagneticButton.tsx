import { useRef } from "react";

type MagneticButtonProps = {
    children: React.ReactNode;
};

export default function MagneticButton({ children }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        if (ref.current) {
            ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        }
    };

    const reset = () => {
        if (ref.current) ref.current.style.transform = "translate(0,0)";
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="inline-block transition-transform duration-200"
        >
            {children}
        </div>
    );
}