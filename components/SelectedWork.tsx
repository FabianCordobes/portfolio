"use client";

import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "FlowOps",
    type: "Backend + mobile · MVP en desarrollo",
    result: "Órdenes de trabajo, permisos y aprobación con trazabilidad.",
    description:
      "Aplicación para gestionar órdenes de trabajo con roles, asignaciones, transiciones de estado validadas y registro auditable. Proyecto propio en evolución.",
    tech: ["NestJS", "TypeScript", "React Native", "PostgreSQL"],
    href: "https://github.com/FabianCordobes/flowops",
    visual: "flowops",
  },
  {
    id: "02",
    title: "E-commerce App",
    type: "Comercio digital",
    result: "Un recorrido continuo desde el descubrimiento hasta el checkout.",
    description:
      "Experiencia de e-commerce con catálogo, autenticación, carrito, administración y flujo de órdenes.",
    tech: ["React", "Redux Toolkit", "Firebase", "Sass"],
    href: "https://e-commerce-app-eta-two.vercel.app",
    visual: "commerce",
  },
  {
    id: "03",
    title: "Travel App",
    type: "Experiencia web",
    result: "Exploración, navegación y contenido dentro de un flujo continuo.",
    description:
      "Aplicación frontend orientada a viajes, navegación del lado del cliente y una experiencia visual dinámica.",
    tech: ["React", "Vite", "React Router"],
    href: "https://github.com/FabianCordobes/travelApp",
    visual: "travel",
  },
];

export default function SelectedWork() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        setActive(Number((visible.target as HTMLElement).dataset.index || 0));
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-12% 0px -20% 0px" },
    );

    refs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="cinematic-work">
      <div className="section-shell cinematic-work-head" data-reveal>
        <p className="micro-label dark">PROYECTOS / SOLUCIONES EN ACCIÓN</p>
        <div>
          <h2>
            Ideas llevadas a experiencias reales.<br />
            <span>Proyectos que muestran distintas formas de crear valor digital.</span>
          </h2>
          <p>
            Sitios, aplicaciones y experiencias desarrolladas para objetivos distintos: presentar una propuesta, facilitar una compra, coordinar tareas y construir recorridos digitales claros.
          </p>
        </div>
      </div>

      <div className="cinematic-work-progress" aria-hidden="true">
        <span>{String(active + 1).padStart(2, "0")}</span>
        <i />
        <span>03</span>
      </div>

      <div className="cinematic-work-stack">
        {PROJECTS.map((project, index) => (
          <article
            key={project.id}
            ref={(node) => { refs.current[index] = node; }}
            data-index={index}
            className={active === index ? "work-chapter is-active" : "work-chapter"}
          >
            <div className="work-chapter-number" aria-hidden="true">
              <span>{project.id}</span>
              <span>{project.id}</span>
            </div>

            <div className="section-shell work-chapter-grid">
              <div className="work-chapter-copy">
                <p className="work-chapter-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="work-chapter-result">{project.result}</p>
                <p className="work-chapter-description">{project.description}</p>

                <div className="work-chapter-tech">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <a href={project.href} target="_blank" rel="noreferrer">
                  Explorar proyecto <span>↗</span>
                </a>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={`cinematic-project-frame frame-${project.visual}`}
                aria-label={`Abrir ${project.title}`}
              >
                <div className="project-frame-top">
                  <span>FABIAN / SELECTED WORK</span>
                  <span>{project.id} / 03</span>
                </div>

                <div className="project-frame-stage" aria-hidden="true">
                  <div className="project-frame-bloom" />
                  <div className="project-frame-scan" />
                  <div className="project-frame-chroma chroma-one" />
                  <div className="project-frame-chroma chroma-two" />

                  {project.visual === "flowops" && (
                    <div className="flowops-film-ui">
                      <div className="flowops-film-head">
                        <span>FLOWOPS / WORK ORDERS</span>
                        <strong>MVP EN DESARROLLO</strong>
                      </div>
                      <div className="flowops-film-body">
                        <small>FLUJO DE UNA ORDEN</small>
                        <div className="flowops-film-states">
                          {["NEW", "ASSIGNED", "IN PROGRESS", "IN REVIEW", "COMPLETED"].map((step, index) => (
                            <div className="flowops-film-state" key={step}>
                              <span>{String(index + 1).padStart(2, "0")}</span>
                              <strong>{step}</strong>
                            </div>
                          ))}
                        </div>
                        <p>ROLES · TRANSICIONES VALIDADAS · HISTORIAL AUDITABLE</p>
                      </div>
                    </div>
                  )}

                  {project.visual === "commerce" && (
                    <>
                      <div className="commerce-film-product">
                        <span className="commerce-film-badge">NEW DROP</span>
                        <div className="commerce-film-object" />
                      </div>
                      <div className="commerce-film-panel">
                        <small>COMMERCE EXPERIENCE</small>
                        <strong>DISCOVER<br />CHOOSE<br />BUY</strong>
                        <div className="commerce-film-line"><i /><i /><i /></div>
                        <span>CATALOG · CART · CHECKOUT</span>
                      </div>
                    </>
                  )}

                  {project.visual === "travel" && (
                    <>
                      <div className="travel-film-map" />
                      <div className="travel-film-route">
                        <i /><i /><i /><i />
                      </div>
                      <div className="travel-film-panel">
                        <small>EXPLORE / LIVE ROUTE</small>
                        <strong>BUENOS<br />AIRES</strong>
                        <span>Discover · Move · Connect</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="project-frame-bottom">
                  <span>{project.result}</span>
                  <span>OPEN ↗</span>
                </div>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="section-shell cinematic-work-footer">
        <a href="/portfolio#projects">
          Ver más proyectos <span>↗</span>
        </a>
      </div>
    </section>
  );
}
