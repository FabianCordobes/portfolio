"use client";

import { useMemo, useState } from "react";

const INTENTS = [
  {
    id: "launch",
    label: "Lanzar",
    title: "Nueva iniciativa",
    route: "Discovery + desarrollo",
    detail: "Validar alcance, definir la primera versión y llevarla a producción.",
  },
  {
    id: "improve",
    label: "Mejorar",
    title: "Producto existente",
    route: "Proyecto definido",
    detail: "Detectar fricción, priorizar impacto y evolucionar sin rehacer todo.",
  },
  {
    id: "automate",
    label: "Automatizar",
    title: "Proceso manual",
    route: "Automatización / integración",
    detail: "Eliminar tareas repetitivas y conectar datos, sistemas o workflows.",
  },
  {
    id: "capacity",
    label: "Destrabar",
    title: "Equipo con backlog",
    route: "Extensión de equipo",
    detail: "Sumar capacidad técnica puntual sin agregar estructura permanente.",
  },
];

const URGENCY = ["Ahora", "30–60 días", "Exploración"];

export default function SmartProjectBrief() {
  const [intent, setIntent] = useState("launch");
  const [urgency, setUrgency] = useState("30–60 días");

  const selected = useMemo(
    () => INTENTS.find((item) => item.id === intent) ?? INTENTS[0],
    [intent],
  );

  return (
    <div className="signal-panel rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7 lg:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#c8ff62]">Smart brief</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">¿Qué necesitás destrabar?</h3>
        </div>
        <div className="ai-orb" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {INTENTS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIntent(item.id)}
            className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
              intent === item.id
                ? "border-[#c8ff62]/70 bg-[#c8ff62]/10 text-white"
                : "border-white/10 bg-black/20 text-white/45 hover:border-white/20 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-white/35">
          <span>SEÑAL</span>
          <span>→</span>
          <span className="text-white/70">{selected.title}</span>
          <span>→</span>
          <span className="text-[#c8ff62]">{selected.route}</span>
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-white/75">{selected.detail}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {URGENCY.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setUrgency(item)}
              className={`rounded-full border px-4 py-2 text-xs transition ${
                urgency === item
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 text-white/35 hover:text-white/70"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-white/35">
          Ruta sugerida · {selected.route} · {urgency}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#c8ff62] px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#d5ff87]"
        >
          Convertir esto en un plan ↗
        </a>
      </div>
    </div>
  );
}
