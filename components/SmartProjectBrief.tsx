"use client";

import { useMemo, useState } from "react";

const NEEDS = [
  { id: "landing", label: "Landing Page", title: "Landing Page", route: "Diseño + desarrollo", outcome: "Propuesta clara, identidad visual y conversión." },
  { id: "website", label: "Sitio Web", title: "Sitio Web", route: "Arquitectura + experiencia", outcome: "Contenido, presencia y evolución digital." },
  { id: "commerce", label: "E-commerce", title: "E-commerce", route: "Experiencia + ventas", outcome: "Catálogo, compra, administración y crecimiento." },
  { id: "app", label: "Aplicación / Sistema", title: "Aplicación / Sistema", route: "Producto + desarrollo", outcome: "Interfaz, lógica, datos e integraciones." },
  { id: "automation", label: "Automatización", title: "Automatización", route: "Flujos + integración", outcome: "Procesos conectados y acciones inteligentes." },
  { id: "maintenance", label: "Mantenimiento", title: "Mantenimiento", route: "Evolución continua", outcome: "Optimización, mejoras y nuevas capacidades." },
];

const MOMENTS = ["Ahora", "Este trimestre", "Exploración"];

export default function SmartProjectBrief() {
  const [need, setNeed] = useState("landing");
  const [moment, setMoment] = useState("Este trimestre");
  const selected = useMemo(() => NEEDS.find((item) => item.id === need) ?? NEEDS[0], [need]);

  return (
    <div className="signal-panel">
      <div className="signal-header">
        <div>
          <p className="future-kicker">TIPO DE PROYECTO</p>
          <h3>Elegí qué querés construir.</h3>
        </div>
        <div className="ai-orb" aria-hidden="true"><span /><span /><span /></div>
      </div>

      <div className="signal-options signal-options-vertical">
        {NEEDS.map((item, index) => (
          <button key={item.id} type="button" onClick={() => setNeed(item.id)} className={need === item.id ? "is-active" : ""}>
            <span className="signal-index">0{index + 1}</span>
            <span className="signal-option-label">{item.label}</span>
            <span className="signal-option-arrow">↗</span>
          </button>
        ))}
      </div>

      <div className="signal-result signal-result-open">
        <div>
          <p className="signal-path">{selected.title} <span>→</span> {selected.route}</p>
          <p className="signal-outcome">{selected.outcome}</p>
        </div>

        <div className="signal-moments">
          {MOMENTS.map((item) => (
            <button key={item} type="button" onClick={() => setMoment(item)} className={moment === item ? "is-active" : ""}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <a href="#contact" className="future-cta signal-cta">Iniciar proyecto <span>↗</span></a>
    </div>
  );
}
