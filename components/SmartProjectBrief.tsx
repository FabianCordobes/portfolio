"use client";

import { useMemo, useState } from "react";

const NEEDS = [
  { id: "create", label: "Crear", title: "Nueva experiencia", route: "Discovery + build", outcome: "Idea → alcance → primera versión." },
  { id: "evolve", label: "Evolucionar", title: "Producto activo", route: "Product evolution", outcome: "Experiencia → prioridad → siguiente nivel." },
  { id: "automate", label: "Automatizar", title: "Operación digital", route: "Automation + integration", outcome: "Flujo → conexión → escala." },
  { id: "accelerate", label: "Acelerar", title: "Equipo en movimiento", route: "Technical acceleration", outcome: "Roadmap → capacidad → entrega." },
];

const MOMENTS = ["Ahora", "Este trimestre", "Exploración"];

export default function SmartProjectBrief() {
  const [need, setNeed] = useState("create");
  const [moment, setMoment] = useState("Este trimestre");
  const selected = useMemo(() => NEEDS.find((item) => item.id === need) ?? NEEDS[0], [need]);

  return (
    <div className="signal-panel">
      <div className="signal-header">
        <div>
          <p className="future-kicker">PROJECT SIGNAL</p>
          <h3>Elegí tu próximo movimiento.</h3>
        </div>
        <div className="ai-orb" aria-hidden="true"><span /><span /><span /></div>
      </div>

      <div className="signal-options">
        {NEEDS.map((item) => (
          <button key={item.id} type="button" onClick={() => setNeed(item.id)} className={need === item.id ? "is-active" : ""}>
            {item.label}
          </button>
        ))}
      </div>

      <div className="signal-result">
        <p className="signal-path">{selected.title} <span>→</span> {selected.route}</p>
        <p className="signal-outcome">{selected.outcome}</p>

        <div className="signal-moments">
          {MOMENTS.map((item) => (
            <button key={item} type="button" onClick={() => setMoment(item)} className={moment === item ? "is-active" : ""}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <a href="#contact" className="future-cta signal-cta">Quiero algo así <span>↗</span></a>
    </div>
  );
}
