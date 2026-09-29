"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    id: "01",
    title: "Landing y sitio web",
    line: "Una presencia digital clara, rápida y profesional.",
    text: "Para profesionales, marcas y empresas que necesitan presentar servicios, generar consultas, lanzar una propuesta o contar con un sitio institucional bien construido.",
  },
  {
    id: "02",
    title: "E-commerce",
    line: "Una experiencia de compra pensada de principio a fin.",
    text: "Catálogo, navegación, carrito, órdenes, administración e integraciones reunidos en una experiencia consistente para el cliente y manejable para el negocio.",
  },
  {
    id: "03",
    title: "Aplicaciones web",
    line: "Experiencias digitales donde el usuario participa y opera.",
    text: "Interfaces con autenticación, perfiles, paneles, formularios, búsquedas, reservas, estados y flujos específicos para convertir una necesidad funcional en una herramienta usable.",
  },
  {
    id: "04",
    title: "Sistemas a medida",
    line: "Software construido alrededor de una operación real.",
    text: "Para procesos que requieren reglas de negocio, permisos, bases de datos, APIs, integraciones y una arquitectura preparada para crecer con mayor complejidad.",
  },
  {
    id: "05",
    title: "Integración y automatización",
    line: "Conectar lo que hoy funciona por separado.",
    text: "Integro servicios y automatizo tareas repetitivas para agilizar procesos, conservar trazabilidad y coordinar el trabajo entre herramientas.",
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
        <p className="micro-label">SOLUCIONES POR ESCALA</p>
        <h2>La escala adecuada.<br /><span>Una solución alineada con cada etapa del proyecto.</span></h2>
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
              <small>PROJECT SCALE</small>
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
              <a href="#contact">Consultar por esta solución ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
