"use client";

import { useEffect } from "react";

export default function ExperienceLayer() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;

        root.style.setProperty("--cursor-x", `${event.clientX}px`);
        root.style.setProperty("--cursor-y", `${event.clientY}px`);
        root.style.setProperty("--tilt-x", `${ny * -3}deg`);
        root.style.setProperty("--tilt-y", `${nx * 4}deg`);
        root.style.setProperty("--shift-x", `${nx * 10}px`);
        root.style.setProperty("--shift-y", `${ny * 10}px`);
      });
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--scroll-progress", progress.toString());
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
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
