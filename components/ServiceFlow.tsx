"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Adquisición y Captura",
    line: "Interfaces conectadas a procesos.",
    text: "Diseño puntos de entrada que registran procedencia, intención y contexto. La información puede validarse, clasificarse y derivarse al flujo operativo correspondiente.",
  },
  {
    id: "02",
    title: "Web e Interfaces",
    line: "Arquitectura de información y experiencia.",
    text: "Construyo sitios e interfaces donde contenido, jerarquía visual, rendimiento y comportamiento responden a objetivos definidos, no a una plantilla.",
  },
  {
    id: "03",
    title: "Comercio Digital",
    line: "Catálogo, estado y transacciones.",
    text: "Implemento experiencias de comercio con navegación, gestión de estado, carrito, órdenes e integraciones, cuidando consistencia entre interfaz y lógica.",
  },
  {
    id: "04",
    title: "Aplicaciones y Sistemas",
    line: "Dominio, datos e integración.",
    text: "Desarrollo aplicaciones cuando el problema requiere reglas propias: autenticación, permisos, persistencia, APIs, integraciones y procesos específicos del dominio.",
  },
  {
    id: "05",
    title: "Automatización e Integración",
    line: "Menos transferencia manual entre sistemas.",
    text: "Conecto servicios, eventos y datos para ejecutar tareas repetibles de forma consistente, conservar trazabilidad y reducir puntos de intervención manual.",
  },
];

export default function ServiceFlow() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index || 0);
        setActive(index);
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-18% 0px -28% 0px" },
    );

    itemRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const current = SERVICES[active];

  return (
    <section id="services" className="service-flow">
      <div className="section-shell service-flow-head" data-reveal>
        <p className="micro-label">ÁREAS DE TRABAJO</p>
        <h2>No parto de una tecnología.<br /><span>Parto del problema y sus restricciones.</span></h2>
      </div>

      <div className="section-shell service-flow-layout">
        <div className="service-stage-wrap" aria-hidden="true">
          <div className="service-stage" key={current.id}>
            <div className="service-stage-haze" />
            <div className="service-stage-frame frame-a" />
            <div className="service-stage-frame frame-b" />
            <div className="service-stage-frame frame-c" />
            <div className="service-stage-number-ghost" aria-hidden="true">
              <span>{current.id}</span>
              <span>{current.id}</span>
            </div>
            <div className="service-stage-core">
              <span>{current.id}</span>
            </div>
            <div className="service-stage-pulse pulse-a" />
            <div className="service-stage-pulse pulse-b" />
            <div className="service-stage-caption">
              <small>CURRENT DOMAIN</small>
              <strong>{current.title}</strong>
            </div>
          </div>
        </div>

        <div className="service-flow-list">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              ref={(node) => { itemRefs.current[index] = node; }}
              data-index={index}
              className={active === index ? "service-flow-item is-active" : "service-flow-item"}
            >
              <span>{service.id}</span>
              <h3>{service.title}</h3>
              <p className="service-flow-line">{service.line}</p>
              <p className="service-flow-text">{service.text}</p>
              <a href="#contact">Plantear un caso ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
