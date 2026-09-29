"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Landing Page",
    line: "Presencia. Claridad. Conversión.",
    text: "Convierte una campaña, lanzamiento o servicio en un recorrido enfocado en una acción: consultar, reservar, comprar o solicitar una propuesta.",
  },
  {
    id: "02",
    title: "Sitio Web",
    line: "Identidad. Contenido. Evolución.",
    text: "Dale a tu negocio una presencia profesional que explique mejor lo que hacés, genere confianza y transforme visitas en oportunidades.",
  },
  {
    id: "03",
    title: "E-commerce",
    line: "Descubrir. Elegir. Comprar.",
    text: "Reduce fricción entre descubrir, elegir y comprar con una experiencia clara, administrable y preparada para vender.",
  },
  {
    id: "04",
    title: "Aplicación / Sistema",
    line: "Software. Operación. Datos.",
    text: "Cuando una web estándar no alcanza, desarrollo software a medida para convertir procesos, datos e ideas en una herramienta de trabajo real.",
  },
  {
    id: "05",
    title: "Automatización",
    line: "Conectar. Ejecutar. Escalar.",
    text: "Elimina tareas repetitivas y conecta herramientas para responder más rápido, mejorar el seguimiento y liberar tiempo operativo.",
  },
  {
    id: "06",
    title: "Mantenimiento",
    line: "Continuidad. Mejora. Expansión.",
    text: "Tu plataforma no termina al publicarse. La mantengo estable, actualizada y preparada para evolucionar cuando el negocio lo necesite.",
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
        <p className="micro-label">SERVICIOS</p>
        <h2>Una solución para cada etapa.<br /><span>Un objetivo claro detrás de cada decisión.</span></h2>
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
