"use client";

import { useEffect, useRef } from "react";

type LivingHeroProps = {
  portraitSrc: string;
};

export default function LivingHero({ portraitSrc }: LivingHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    let width = 0;
    let height = 0;
    let ratio = 1;
    let frame = 0;
    let start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.targetX = event.clientX / window.innerWidth - 0.5;
      pointer.targetY = event.clientY / window.innerHeight - 0.5;
    };

    const drawHorizon = (time: number) => {
      const horizon = height * 0.68;
      const drift = Math.sin(time * 0.00018) * 3;

      context.save();
      context.lineWidth = 0.7;

      for (let index = 0; index < 9; index += 1) {
        const progress = index / 8;
        const y = horizon + Math.pow(progress, 2.2) * height * 0.34;
        const alpha = 0.055 * (1 - progress * 0.68);

        context.beginPath();
        context.moveTo(0, y + drift);
        context.lineTo(width, y + drift);
        context.strokeStyle = `rgba(113, 213, 255, ${alpha})`;
        context.stroke();
      }

      const vanishingX = width * (0.72 + pointer.x * 0.018);
      for (let index = -9; index <= 9; index += 1) {
        const edgeX = width * 0.5 + index * width * 0.11;
        context.beginPath();
        context.moveTo(vanishingX, horizon);
        context.lineTo(edgeX, height);
        context.strokeStyle = "rgba(157, 134, 255, 0.028)";
        context.stroke();
      }

      context.restore();
    };

    const drawCore = (time: number) => {
      const mobile = width < 760;
      const cx = mobile ? width * 0.68 : width * (0.735 + pointer.x * 0.012);
      const cy = mobile ? height * 0.38 : height * (0.44 + pointer.y * 0.009);
      const baseX = mobile ? Math.min(width * 0.17, 74) : Math.min(width * 0.055, 92);
      const baseY = mobile ? Math.min(height * 0.105, 110) : Math.min(height * 0.15, 154);

      const halo = context.createRadialGradient(cx, cy, 0, cx, cy, baseY * 2.8);
      halo.addColorStop(0, "rgba(229, 249, 255, 0.13)");
      halo.addColorStop(0.2, "rgba(105, 216, 255, 0.07)");
      halo.addColorStop(0.52, "rgba(159, 134, 255, 0.034)");
      halo.addColorStop(1, "rgba(5, 5, 5, 0)");
      context.fillStyle = halo;
      context.fillRect(cx - baseY * 3, cy - baseY * 3, baseY * 6, baseY * 6);

      for (let layer = 7; layer >= 0; layer -= 1) {
        const expansion = layer * (mobile ? 6 : 9);
        const phase = time * (0.00015 + layer * 0.000007);
        const alpha = 0.035 + (7 - layer) * 0.012;

        context.beginPath();

        for (let step = 0; step <= 180; step += 1) {
          const angle = (step / 180) * Math.PI * 2;
          const wave =
            Math.sin(angle * 3 + phase * 2.3 + layer * 0.7) * (5 + layer * 0.7) +
            Math.sin(angle * 5 - phase * 1.4) * 2.8 +
            Math.cos(angle * 2 + phase) * 3.4;

          const rx = baseX + expansion + wave;
          const ry = baseY + expansion * 1.55 + wave * 1.2;
          const x = cx + Math.cos(angle) * rx;
          const y = cy + Math.sin(angle) * ry;

          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.closePath();
        context.strokeStyle =
          layer % 2 === 0
            ? `rgba(105, 216, 255, ${alpha})`
            : `rgba(159, 134, 255, ${alpha * 0.9})`;
        context.lineWidth = layer === 0 ? 1.25 : 0.65;
        context.stroke();
      }

      const warmX = cx + Math.sin(time * 0.00028) * baseX * 0.42;
      const warmY = cy - baseY * 0.18;
      const warm = context.createRadialGradient(warmX, warmY, 0, warmX, warmY, baseX * 0.62);
      warm.addColorStop(0, "rgba(255, 213, 145, 0.19)");
      warm.addColorStop(0.35, "rgba(255, 189, 97, 0.055)");
      warm.addColorStop(1, "rgba(255, 189, 97, 0)");
      context.fillStyle = warm;
      context.fillRect(warmX - baseX, warmY - baseX, baseX * 2, baseX * 2);

      const nodes = Array.from({ length: 11 }, (_, index) => {
        const angle = (index / 11) * Math.PI * 2 + time * 0.00005;
        const radial = 0.72 + Math.sin(index * 1.7 + time * 0.00035) * 0.12;

        return {
          x: cx + Math.cos(angle) * baseX * radial,
          y: cy + Math.sin(angle) * baseY * radial,
        };
      });

      context.save();
      context.lineWidth = 0.65;

      for (let index = 0; index < nodes.length; index += 1) {
        const current = nodes[index];
        const next = nodes[(index + 3) % nodes.length];

        context.beginPath();
        context.moveTo(current.x, current.y);
        context.quadraticCurveTo(
          cx + Math.sin(time * 0.0003 + index) * 12,
          cy + Math.cos(time * 0.00022 + index) * 18,
          next.x,
          next.y,
        );
        context.strokeStyle = "rgba(211, 244, 255, 0.075)";
        context.stroke();

        context.beginPath();
        context.arc(current.x, current.y, index % 3 === 0 ? 1.7 : 1, 0, Math.PI * 2);
        context.fillStyle =
          index % 4 === 0 ? "rgba(200, 255, 98, 0.42)" : "rgba(213, 246, 255, 0.28)";
        context.fill();
      }

      const travel = (time * 0.00016) % 1;
      const from = nodes[1];
      const to = nodes[7];
      const tx = from.x + (to.x - from.x) * travel;
      const ty = from.y + (to.y - from.y) * travel;
      const pulse = context.createRadialGradient(tx, ty, 0, tx, ty, 16);
      pulse.addColorStop(0, "rgba(200, 255, 98, 0.7)");
      pulse.addColorStop(0.35, "rgba(105, 216, 255, 0.22)");
      pulse.addColorStop(1, "rgba(105, 216, 255, 0)");
      context.fillStyle = pulse;
      context.fillRect(tx - 18, ty - 18, 36, 36);

      context.restore();
    };

    const drawLight = (time: number) => {
      const x = width * (0.38 + Math.sin(time * 0.00011) * 0.05);
      const beam = context.createLinearGradient(x - width * 0.12, 0, x + width * 0.22, 0);
      beam.addColorStop(0, "rgba(255,255,255,0)");
      beam.addColorStop(0.47, "rgba(208,240,255,0.014)");
      beam.addColorStop(0.55, "rgba(255,226,181,0.026)");
      beam.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = beam;
      context.fillRect(0, 0, width, height);
    };

    const render = (now: number) => {
      const time = reducedMotion ? 0 : now - start;

      pointer.x += (pointer.targetX - pointer.x) * 0.035;
      pointer.y += (pointer.targetY - pointer.y) * 0.035;

      context.clearRect(0, 0, width, height);
      drawHorizon(time);
      drawLight(time);
      drawCore(time);

      if (!reducedMotion) frame = requestAnimationFrame(render);
    };

    resize();
    render(performance.now());

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <section id="home" className="living-hero">
      <canvas ref={canvasRef} className="living-hero-canvas" aria-hidden="true" />

      <div className="living-hero-atmosphere" aria-hidden="true">
        <div className="living-hero-beam" />
        <div className="living-hero-haze" />
        <div className="living-hero-scan" />
      </div>

      <div className="living-sculpture" aria-hidden="true">
        <div className="living-frame living-frame-a" />
        <div className="living-frame living-frame-b" />
        <div className="living-frame living-frame-c" />
        <div className="living-frame-line living-frame-line-a" />
        <div className="living-frame-line living-frame-line-b" />

        <div className="living-portrait">
          <img src={portraitSrc} alt="" />
          <div className="living-portrait-vignette" />
          <div className="living-portrait-light" />
        </div>

        <div className="living-signal living-signal-a" />
        <div className="living-signal living-signal-b" />
        <div className="living-signal living-signal-c" />
      </div>

      <div className="living-hero-content">
        <div className="living-hero-topline">
          <span className="living-status">
            <i />
            DIGITAL EXPERIENCE · FULL-STACK DEVELOPMENT
          </span>
          <span className="living-location">BUENOS AIRES · ARGENTINA</span>
        </div>

        <div className="living-hero-copy">
          <h1>
            <span>EXPERIENCIAS</span>
            <span>DIGITALES</span>
          </h1>

          <div className="living-hero-meta">
            <div>
              <p>Diseño y desarrollo de productos digitales.</p>
              <span>Fabián Cordobés · Full-Stack Developer</span>
            </div>

            <div className="living-hero-actions">
              <a href="#contact" className="living-cta living-cta-primary">
                Iniciar proyecto <span>↗</span>
              </a>
              <a href="#services" className="living-cta">
                Ver servicios <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="living-hero-services">
          <span>Landing Page</span>
          <span>Sitio Web</span>
          <span>E-commerce</span>
          <span>Aplicación / Sistema</span>
          <span>Automatización</span>
          <span>Mantenimiento</span>
        </div>
      </div>

      <a href="#services" className="living-scroll-cue" aria-label="Ir a servicios">
        <span>SCROLL</span>
        <i />
      </a>
    </section>
  );
}
