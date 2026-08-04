import { useLayoutEffect } from "react";

export function useGsapAnimations() {
    useLayoutEffect(() => {
        let cancelled = false;
        let animationContext: { revert: () => void } | undefined;
        let cleanupSmoothScroll: (() => void) | undefined;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reducedMotion) {
            document
                .querySelectorAll<HTMLElement>("[data-gsap-reveal], [data-gsap-section], .gsap-card")
                .forEach((element) => {
                    element.style.opacity = "1";
                    element.style.transform = "none";
                });
            return;
        }

        void Promise.all([
            import("gsap"),
            import("gsap/ScrollTrigger"),
            import("lenis"),
        ]).then(([gsapModule, triggerModule, lenisModule]) => {
            if (cancelled) return;

            const gsap = gsapModule.default;
            const { ScrollTrigger } = triggerModule;
            const Lenis = lenisModule.default;
            gsap.registerPlugin(ScrollTrigger);
            gsap.config({ force3D: true, nullTargetWarn: false });

            const lenis = new Lenis({
                lerp: 0.085,
                smoothWheel: true,
                syncTouch: false,
                wheelMultiplier: 0.9,
                touchMultiplier: 1.05,
                anchors: { offset: -88 },
            });

            const smoothNavigate = (event: Event) => {
                const { id } = (event as CustomEvent<{ id: string }>).detail;
                lenis.scrollTo(`#${id}`, { offset: -88, duration: 1.15 });
            };
            const updateScrollTrigger = () => ScrollTrigger.update();
            const driveSmoothScroll = (time: number) => lenis.raf(time * 1000);

            window.addEventListener("portfolio:scroll-to", smoothNavigate);
            lenis.on("scroll", updateScrollTrigger);
            gsap.ticker.add(driveSmoothScroll);
            gsap.ticker.lagSmoothing(0);

            cleanupSmoothScroll = () => {
                window.removeEventListener("portfolio:scroll-to", smoothNavigate);
                gsap.ticker.remove(driveSmoothScroll);
                lenis.off("scroll", updateScrollTrigger);
                lenis.destroy();
            };

            animationContext = gsap.context(() => {
                gsap.fromTo("[data-gsap-topbar]", { autoAlpha: 0, y: -18 }, {
                    autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out", clearProps: "transform",
                });

                gsap.fromTo("[data-gsap-hero] > *", { autoAlpha: 0, y: 24 }, {
                    autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08,
                    ease: "power3.out", delay: 0.1, clearProps: "transform",
                });

                gsap.utils.toArray<HTMLElement>("[data-gsap-section]").forEach((section) => {
                    const directContent = section.querySelector<HTMLElement>(":scope > div");
                    if (directContent) {
                        gsap.fromTo(directContent, { autoAlpha: 0, y: 28 }, {
                            autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out",
                            clearProps: "transform",
                            scrollTrigger: {
                                trigger: section, start: "top 86%", once: true, invalidateOnRefresh: true,
                            },
                        });
                    }

                    const cards = section.querySelectorAll<HTMLElement>(".gsap-card");
                    if (cards.length) {
                        gsap.fromTo(cards, { autoAlpha: 0, y: 20, scale: 0.99 }, {
                            autoAlpha: 1, y: 0, scale: 1, duration: 0.72, stagger: 0.055,
                            ease: "power3.out", clearProps: "transform",
                            scrollTrigger: {
                                trigger: cards[0], start: "top 90%", once: true, invalidateOnRefresh: true,
                            },
                        });
                    }
                });

                gsap.to("[data-gsap-orb='left']", {
                    x: 24, y: 16, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut",
                });
                gsap.to("[data-gsap-orb='right']", {
                    x: -22, y: -18, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut",
                });
            });

            requestAnimationFrame(() => ScrollTrigger.refresh());
        });

        return () => {
            cancelled = true;
            cleanupSmoothScroll?.();
            animationContext?.revert();
        };
    }, []);
}
