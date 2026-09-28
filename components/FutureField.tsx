"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number;
};

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
    let points: Point[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const amount = width < 768 ? 34 : 64;
      points = Array.from({ length: amount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        z: 0.35 + Math.random() * 0.9,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (const point of points) {
        if (!reducedMotion) {
          point.x += point.vx * point.z;
          point.y += point.vy * point.z;

          if (point.x < -20) point.x = width + 20;
          if (point.x > width + 20) point.x = -20;
          if (point.y < -20) point.y = height + 20;
          if (point.y > height + 20) point.y = -20;

          const dx = pointer.x - point.x;
          const dy = pointer.y - point.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 190 && distance > 1) {
            point.x -= (dx / distance) * 0.18 * point.z;
            point.y -= (dy / distance) * 0.18 * point.z;
          }
        }
      }

      for (let i = 0; i < points.length; i += 1) {
        const a = points[i];

        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < 128) {
            const alpha = (1 - distance / 128) * 0.11;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(200,255,98,${alpha})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        const radius = 0.8 + a.z * 1.35;
        context.beginPath();
        context.arc(a.x, a.y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(230,255,185,${0.22 + a.z * 0.34})`;
        context.fill();
      }

      const glow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        220,
      );
      glow.addColorStop(0, "rgba(200,255,98,0.08)");
      glow.addColorStop(1, "rgba(200,255,98,0)");
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
