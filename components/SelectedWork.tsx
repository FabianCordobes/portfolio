"use client";

import { useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "Jamly",
    type: "Aplicación full-stack",
    description: "Reservas de salas y estudios con autenticación, roles, disponibilidad y lógica de negocio.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
    href: "https://github.com/FabianCordobes/jamly",
    visual: "jamly",
  },
  {
    id: "02",
    title: "E-commerce App",
    type: "Experiencia web",
    description: "Catálogo, autenticación, carrito, administración y flujo de órdenes.",
    tech: ["React", "Redux Toolkit", "Firebase", "Sass"],
    href: "https://e-commerce-app-eta-two.vercel.app",
    visual: "commerce",
  },
  {
    id: "03",
    title: "Travel App",
    type: "Single Page Application",
    description: "Una experiencia frontend orientada a viajes y navegación del lado del cliente.",
    tech: ["React", "Vite", "React Router"],
    href: "https://github.com/FabianCordobes/travelApp",
    visual: "travel",
  },
];

export default function SelectedWork() {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section id="work" className="selected-work">
      <div className="section-shell selected-work-head" data-reveal>
        <p className="micro-label dark">TRABAJO SELECCIONADO</p>
        <h2>Lo que construyo<br /><span>se puede recorrer.</span></h2>
      </div>

      <div className="section-shell selected-work-layout">
        <div className="work-list" data-reveal>
          {PROJECTS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={active === index ? "work-row is-active" : "work-row"}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="work-index">{item.id}</span>
              <span className="work-name">
                <strong>{item.title}</strong>
                <small>{item.type}</small>
              </span>
              <span className="work-arrow">↗</span>
            </button>
          ))}

          <a href="/portfolio" className="work-portfolio-link">
            Ver portfolio técnico <span>↗</span>
          </a>
        </div>

        <a
          className="work-preview"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${project.title}`}
        >
          <div className="work-preview-bar">
            <span>{project.title}</span>
            <span>{String(active + 1).padStart(2, "0")} / 03</span>
          </div>

          <div className={`work-preview-scene scene-${project.visual}`} key={project.id}>
            {project.visual === "jamly" && (
              <>
                <div className="preview-halo" />
                <div className="preview-orbit orbit-one" />
                <div className="preview-orbit orbit-two" />
                <div className="jamly-ui">
                  <div className="ui-top"><span>JAMLY</span><i>LIVE</i></div>
                  <div className="jamly-ui-grid">
                    <div className="jamly-big"><small>NEXT SESSION</small><strong>20:00</strong><span>Studio A</span></div>
                    <div><small>ACCESS</small><strong>JWT</strong></div>
                    <div><small>ROLES</small><strong>02</strong></div>
                  </div>
                </div>
              </>
            )}

            {project.visual === "commerce" && (
              <>
                <div className="commerce-light" />
                <div className="commerce-card">
                  <div className="commerce-visual"><span>NEW</span></div>
                  <div className="commerce-copy">
                    <small>COMMERCE EXPERIENCE</small>
                    <strong>DISCOVER<br />BUY<br />MANAGE</strong>
                    <b>EXPLORE ↗</b>
                  </div>
                </div>
              </>
            )}

            {project.visual === "travel" && (
              <>
                <div className="travel-grid" />
                <div className="travel-panel">
                  <small>EXPLORE / ROUTE</small>
                  <strong>BUENOS<br />AIRES</strong>
                  <div className="route-line"><i /><i /><i /></div>
                  <span>Discover · Move · Connect</span>
                </div>
              </>
            )}
          </div>

          <div className="work-preview-meta">
            <p>{project.description}</p>
            <div>{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </div>
        </a>
      </div>
    </section>
  );
}
