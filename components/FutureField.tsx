"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number;
  phase: number;
};

const COLORS = [
  [105, 216, 255],
  [159, 134, 255],
  [200, 255, 98],
] as const;

export default function FutureField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let tick = 0;
    let points: Point[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const amount = width < 768 ? 34 : 68;
      points = Array.from({ length: amount }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        z: 0.35 + Math.random() * 0.9,
        phase: (index / amount) * Math.PI * 2,
      }));
    };

    const movePoints = () => {
      for (const point of points) {
        if (reducedMotion) continue;

        point.x += point.vx * point.z;
        point.y += point.vy * point.z;

        if (point.x < -24) point.x = width + 24;
        if (point.x > width + 24) point.x = -24;
        if (point.y < -24) point.y = height + 24;
        if (point.y > height + 24) point.y = -24;

        const dx = pointer.x - point.x;
        const dy = pointer.y - point.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 220 && distance > 1) {
          const force = (1 - distance / 220) * 0.24 * point.z;
          point.x -= (dx / distance) * force;
          point.y -= (dy / distance) * force;
        }
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < points.length; i += 1) {
        const a = points[i];

        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance >= 138) continue;

          const alpha = (1 - distance / 138) * 0.105;
          const [r, g, bColor] = COLORS[(i + j) % COLORS.length];

          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const bend = Math.sin(tick * 0.008 + a.phase + b.phase) * 8;

          context.beginPath();
          context.moveTo(a.x, a.y);
          context.quadraticCurveTo(midX + bend, midY - bend, b.x, b.y);
          context.strokeStyle = `rgba(${r},${g},${bColor},${alpha})`;
          context.lineWidth = 0.75;
          context.stroke();
        }
      }
    };

    const drawPoints = () => {
      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        const [r, g, b] = COLORS[i % COLORS.length];
        const pulse = 0.76 + Math.sin(tick * 0.018 + point.phase) * 0.24;
        const radius = (0.8 + point.z * 1.28) * pulse;

        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${r},${g},${b},${0.16 + point.z * 0.28})`;
        context.fill();

        if (i % 9 === 0) {
          context.beginPath();
          context.arc(point.x, point.y, radius * 3.8, 0, Math.PI * 2);
          context.strokeStyle = `rgba(${r},${g},${b},0.055)`;
          context.lineWidth = 0.8;
          context.stroke();
        }
      }
    };

    const drawPointerGlow = () => {
      const glow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        250,
      );

      glow.addColorStop(0, "rgba(105,216,255,0.075)");
      glow.addColorStop(0.42, "rgba(159,134,255,0.03)");
      glow.addColorStop(1, "rgba(200,255,98,0)");

      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      tick += 1;

      movePoints();
      drawConnections();
      drawPoints();
      drawPointerGlow();

      if (!reducedMotion) {
        frame = requestAnimationFrame(draw);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="future-field" aria-hidden="true" />;
}
