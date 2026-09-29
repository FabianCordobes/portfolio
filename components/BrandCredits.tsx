"use client";

import { useEffect, useState } from "react";

const BRANDS = [
  { name: "WAYFAIR", mark: "W", meta: "DIGITAL TEAMS" },
  { name: "ISCX", mark: "IX", meta: "INSURANCE SOFTWARE" },
  { name: "SOCIAL WAVE", mark: "SW", meta: "FRONT-END" },
  { name: "BUILDVISION", mark: "BV", meta: "SOFTWARE DEVELOPMENT" },
  { name: "HENRY", mark: "H", meta: "FULL-STACK" },
];

export default function BrandCredits() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % BRANDS.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="brand-credits">
      <div className="section-shell brand-credits-head" data-reveal>
        <p className="micro-label">RECORRIDO</p>
        <div>
          <h2>
            Experiencia aplicada a<br />
            <span>proyectos y equipos reales.</span>
          </h2>
          <p>
            Años participando en proyectos digitales de distintas escalas, trabajando junto a equipos, marcas y organizaciones. Ese recorrido aporta criterio para entender cada objetivo y convertirlo en una solución clara, sólida y preparada para evolucionar.
          </p>
        </div>
      </div>

      <div className="section-shell film-credits-stage" data-reveal>
        <div className="film-credits-header">
          <span>TRAYECTORIA</span>
          <span>2022 — 2026</span>
        </div>

        <div className="film-credits-list" aria-label="Trayectoria">
          {BRANDS.map((brand, index) => (
            <div
              key={brand.name}
              className={active === index ? "film-credit-row is-active" : "film-credit-row"}
              onMouseEnter={() => setActive(index)}
            >
              <span className="film-credit-index">0{index + 1}</span>
              <span className="film-credit-mark">{brand.mark}</span>
              <strong>{brand.name}</strong>
              <small>{brand.meta}</small>
              <span className="film-credit-line" />
            </div>
          ))}
        </div>

        <div className="film-credits-focus" aria-hidden="true">
          <span>IN FOCUS</span>
          <strong>{BRANDS[active].name}</strong>
          <small>{BRANDS[active].meta}</small>
        </div>
      </div>
    </section>
  );
}
