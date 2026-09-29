"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
  tone: 0 | 1 | 2;
};

const TONES = [
  [105, 216, 255],
  [159, 134, 255],
  [200, 255, 98],
] as const;

export default function LivingField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -5000, y: -5000 };
    let width = 1;
    let height = 1;
    let nodes: Node[] = [];
    let frame = 0;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = width < 768 ? 18 : 28;
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.055,
        vy: (Math.random() - 0.5) * 0.045,
        depth: 0.35 + Math.random() * 0.8,
        tone: (index % 3) as 0 | 1 | 2,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      time += 0.006;

      const drawRibbon = (
        baseY: number,
        amplitude: number,
        phase: number,
        rgba: string,
        widthPx: number,
      ) => {
        context.beginPath();

        for (let x = -40; x <= width + 40; x += 18) {
          const normalized = x / Math.max(width, 1);
          const y =
            baseY +
            Math.sin(normalized * Math.PI * 2.2 + time * 1.35 + phase) * amplitude +
            Math.sin(normalized * Math.PI * 5.3 - time * 0.72 + phase) * amplitude * 0.28;

          if (x === -40) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.strokeStyle = rgba;
        context.lineWidth = widthPx;
        context.shadowBlur = 22;
        context.shadowColor = rgba;
        context.stroke();
        context.shadowBlur = 0;
      };

      drawRibbon(height * 0.32, Math.min(34, height * 0.035), 0.3, "rgba(105,216,255,0.075)", 1.1);
      drawRibbon(height * 0.54, Math.min(42, height * 0.045), 1.7, "rgba(159,134,255,0.055)", 1);
      drawRibbon(height * 0.71, Math.min(27, height * 0.03), 3.1, "rgba(200,255,98,0.035)", 0.8);

      for (const node of nodes) {
        if (!reducedMotion) {
          node.x += node.vx * node.depth;
          node.y += node.vy * node.depth + Math.sin(time + node.x * 0.005) * 0.015;

          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 220 && distance > 1) {
            node.x += (dx / distance) * 0.025 * node.depth;
            node.y += (dy / distance) * 0.025 * node.depth;
          }

          if (node.x < -30) node.x = width + 30;
          if (node.x > width + 30) node.x = -30;
          if (node.y < -30) node.y = height + 30;
          if (node.y > height + 30) node.y = -30;
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > 155) continue;

          const [r, g, bTone] = TONES[a.tone];
          const alpha = (1 - distance / 155) * 0.055;
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2 - 10 * Math.sin(time + i);

          context.beginPath();
          context.moveTo(a.x, a.y);
          context.quadraticCurveTo(midX, midY, b.x, b.y);
          context.strokeStyle = `rgba(${r},${g},${bTone},${alpha})`;
          context.lineWidth = 0.65;
          context.stroke();
        }

        const [r, g, b] = TONES[a.tone];
        context.beginPath();
        context.arc(a.x, a.y, 0.8 + a.depth * 0.8, 0, Math.PI * 2);
        context.fillStyle = `rgba(${r},${g},${b},${0.16 + a.depth * 0.12})`;
        context.fill();
      }

      const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260);
      glow.addColorStop(0, "rgba(105,216,255,0.035)");
      glow.addColorStop(0.55, "rgba(159,134,255,0.016)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.x = -5000;
      pointer.y = -5000;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="living-field" aria-hidden="true" />;
}
