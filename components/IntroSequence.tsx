"use client";

import { useEffect, useState } from "react";

export default function IntroSequence() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setVisible(false);
      return;
    }

    const leaveTimer = window.setTimeout(() => setLeaving(true), 1350);
    const removeTimer = window.setTimeout(() => setVisible(false), 2200);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={leaving ? "intro-sequence is-leaving" : "intro-sequence"} aria-hidden="true">
      <div className="intro-noise" />
      <div className="intro-horizon" />
      <div className="intro-orbit intro-orbit-a" />
      <div className="intro-orbit intro-orbit-b" />
      <div className="intro-orbit intro-orbit-c" />
      <div className="intro-flare" />

      <div className="intro-copy">
        <p>DESIGN · DEVELOPMENT · DIGITAL EXPERIENCES</p>
        <h1>
          <span>FABIÁN</span>
          <span>CORDOBÉS</span>
        </h1>
        <div className="intro-rule">
          <span />
        </div>
      </div>

      <div className="intro-side intro-side-left">BUENOS AIRES · ARGENTINA</div>
      <div className="intro-side intro-side-right">FULL-STACK DEVELOPER</div>
    </div>
  );
}
