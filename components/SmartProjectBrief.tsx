"use client";

import { useMemo, useState } from "react";

const NEEDS = [
  { id: "create", label: "Crear", title: "Una nueva experiencia", route: "Discovery + build", outcome: "¿Qué forma podría tomar tu idea?" },
  { id: "evolve", label: "Evolucionar", title: "Una experiencia en evolución", route: "Product evolution", outcome: "¿Qué podría sentirse todavía mejor?" },
  { id: "automate", label: "Automatizar", title: "Un sistema conectado", route: "Automation + integration", outcome: "¿Qué podría suceder de forma más inteligente?" },
  { id: "ai", label: "Potenciar con IA", title: "Una experiencia inteligente", route: "AI orchestration", outcome: "¿Qué podría pensar, responder o crear junto a tus usuarios?" },
  { id: "accelerate", label: "Acelerar", title: "Un equipo en expansión", route: "Technical acceleration", outcome: "¿Qué podrías llevar más lejos este trimestre?" },
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
          <h3>¿Qué te gustaría activar?</h3>
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

      <a href="#contact" className="future-cta signal-cta">Quiero algo así <span>↗</span></a>
    </div>
  );
}
