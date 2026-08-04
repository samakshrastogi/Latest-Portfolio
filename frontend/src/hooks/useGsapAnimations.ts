import { useLayoutEffect } from "react";

export function useGsapAnimations() {
    useLayoutEffect(() => {
        let cancelled = false;
        let animationContext: { revert: () => void } | undefined;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reducedMotion) {
            document.querySelectorAll<HTMLElement>("[data-gsap-reveal], [data-gsap-section], .gsap-card").forEach((element) => {
                element.style.opacity = "1";
                element.style.transform = "none";
            });
            return;
        }

        void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
            if (cancelled) return;
            const gsap = gsapModule.default;
            gsap.registerPlugin(triggerModule.ScrollTrigger);

            animationContext = gsap.context(() => {
                gsap.fromTo(
                    "[data-gsap-topbar]",
                    { autoAlpha: 0, y: -24 },
                    { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
                );

                gsap.fromTo(
                    "[data-gsap-hero] > *",
                    { autoAlpha: 0, y: 30 },
                    { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09, ease: "power3.out", delay: 0.12 },
                );

                gsap.utils.toArray<HTMLElement>("[data-gsap-section]").forEach((section) => {
                    gsap.fromTo(
                        section,
                        { autoAlpha: 0, y: 42 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.85,
                            ease: "power3.out",
                            scrollTrigger: { trigger: section, start: "top 84%", once: true },
                        },
                    );

                    const cards = section.querySelectorAll<HTMLElement>(".gsap-card");
                    if (cards.length) {
                        gsap.fromTo(
                            cards,
                            { autoAlpha: 0, y: 26, scale: 0.985 },
                            {
                                autoAlpha: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.65,
                                stagger: 0.07,
                                ease: "power2.out",
                                scrollTrigger: { trigger: cards[0], start: "top 88%", once: true },
                            },
                        );
                    }
                });

                gsap.to("[data-gsap-orb='left']", {
                    x: 28,
                    y: 18,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
                gsap.to("[data-gsap-orb='right']", {
                    x: -24,
                    y: -20,
                    duration: 10,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        });

        return () => {
            cancelled = true;
            animationContext?.revert();
        };
    }, []);
}