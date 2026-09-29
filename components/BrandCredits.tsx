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
        <p className="micro-label">EXPERIENCIA PROFESIONAL</p>
        <div>
          <h2>
            Trabajo en software que<br />
            <span>opera fuera del portfolio.</span>
          </h2>
          <p>
            Experiencia en equipos y sistemas con código existente, integraciones, restricciones de negocio, testing y mantenimiento. El criterio técnico también se forma trabajando sobre complejidad que ya existe.
          </p>
        </div>
      </div>

      <div className="section-shell film-credits-stage" data-reveal>
        <div className="film-credits-header">
          <span>SELECTED EXPERIENCE</span>
          <span>2022 — 2026</span>
        </div>

        <div className="film-credits-list" aria-label="Experiencia profesional">
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
