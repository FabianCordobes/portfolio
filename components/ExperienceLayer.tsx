"use client";

import { useEffect } from "react";

export default function ExperienceLayer() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    let frame = 0;
    let lastScrollY = window.scrollY;

    const onPointerMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;

        root.style.setProperty("--cursor-x", `${event.clientX}px`);
        root.style.setProperty("--cursor-y", `${event.clientY}px`);
        root.style.setProperty("--tilt-x", `${ny * -1.4}deg`);
        root.style.setProperty("--tilt-y", `${nx * 2}deg`);
        root.style.setProperty("--shift-x", `${nx * 7}px`);
        root.style.setProperty("--shift-y", `${ny * 7}px`);
      });
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const delta = Math.max(-40, Math.min(40, window.scrollY - lastScrollY));
      lastScrollY = window.scrollY;

      root.style.setProperty("--scroll-progress", progress.toString());
      root.style.setProperty("--scroll-depth", `${Math.min(window.scrollY * 0.028, 72)}px`);
      root.style.setProperty("--scroll-scrub", `${window.scrollY * 0.045}px`);
      root.style.setProperty("--scroll-energy", (Math.abs(delta) / 40).toFixed(3));
      root.dataset.scrollDirection = delta >= 0 ? "down" : "up";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    revealItems.forEach((item) => observer.observe(item));

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("motion-ready");
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-aura" aria-hidden="true" />
    </>
  );
}
