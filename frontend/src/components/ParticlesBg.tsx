import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBg() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            particlesInit={particlesInit}
            options={{
                background: { color: { value: "transparent" } },
                particles: {
                    number: { value: 40 },
                    color: { value: "#6366f1" },
                    links: {
                        enable: true,
                        color: "#6366f1",
                        opacity: 0.2,
                    },
                    move: { enable: true, speed: 1 },
                    size: { value: 2 },
                    opacity: { value: 0.5 },
                },
            }}
            className="absolute inset-0 -z-10"
        />
    );
}