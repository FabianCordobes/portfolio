"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Sistema de Captación",
    line: "Captar. Entender. Priorizar.",
    text: "Una landing conectada a un formulario inteligente que registra el origen de cada consulta, detecta necesidades y prepara la oportunidad para su seguimiento comercial.",
  },
  {
    id: "02",
    title: "Web de Conversión",
    line: "Claridad. Confianza. Acción.",
    text: "Diseño una presencia digital enfocada en explicar tu propuesta, reducir dudas y llevar a cada visitante hacia una acción concreta.",
  },
  {
    id: "03",
    title: "Comercio Digital",
    line: "Descubrir. Elegir. Comprar.",
    text: "Construyo experiencias de venta donde catálogo, navegación y checkout forman un recorrido simple y administrable.",
  },
  {
    id: "04",
    title: "Software a Medida",
    line: "Procesos. Datos. Operación.",
    text: "Desarrollo aplicaciones y sistemas cuando una solución estándar no alcanza: autenticación, roles, datos, integraciones y lógica de negocio.",
  },
  {
    id: "05",
    title: "Automatización",
    line: "Conectar. Ejecutar. Escalar.",
    text: "Conecto herramientas y flujos para reducir tareas manuales, acelerar respuestas y convertir información dispersa en acciones concretas.",
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
        <p className="micro-label">SOLUCIONES</p>
        <h2>Primero, el resultado.<br /><span>Después, la tecnología necesaria para conseguirlo.</span></h2>
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
              <small>ACTIVE LAYER</small>
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
              <a href="#contact">Quiero resolver esto ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
