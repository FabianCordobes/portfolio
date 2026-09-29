"use client";

import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Jamly",
    type: "Aplicación full-stack",
    period: "Producto propio",
    description: "Reservas de salas y estudios con autenticación, roles y disponibilidad.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
    href: "https://github.com/FabianCordobes/jamly",
    preview: "jamly",
  },
  {
    id: "02",
    title: "E-commerce App",
    type: "E-commerce",
    period: "Producto web",
    description: "Catálogo, autenticación, carrito, administración y flujo de órdenes.",
    tech: ["React", "Redux Toolkit", "Firebase", "Sass"],
    href: "https://e-commerce-app-eta-two.vercel.app",
    preview: "commerce",
  },
  {
    id: "03",
    title: "Travel App",
    type: "Single Page Application",
    period: "Frontend",
    description: "Experiencia SPA orientada a viajes con navegación del lado del cliente.",
    tech: ["React", "Vite", "React Router"],
    href: "https://github.com/FabianCordobes/travelApp",
    preview: "travel",
  },
];

export default function SelectedWorkShowcase() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="work" className="selected-work">
      <div className="selected-work-heading" data-reveal>
        <p className="future-kicker">TRABAJO SELECCIONADO</p>
        <h2>Productos reales.<br />Un foco a la vez.</h2>
      </div>

      <div className="selected-work-layout">
        <div className="selected-work-list">
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={active === index ? "work-row is-active" : "work-row"}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="work-index">{item.id}</span>
              <span className="work-copy">
                <strong>{item.title}</strong>
                <small>{item.type}</small>
              </span>
              <span className="work-period">{item.period}</span>
              <span className="work-arrow">↗</span>
            </button>
          ))}
        </div>

        <a
          className="work-preview"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${project.title}`}
        >
          <div className="work-preview-topline">
            <span>{project.title}</span>
            <span>{String(active + 1).padStart(2, "0")} / 03</span>
          </div>

          <div className={`work-preview-stage preview-${project.preview}`}>
            {project.preview === "jamly" && (
              <>
                <div className="preview-orbit preview-orbit-a" />
                <div className="preview-orbit preview-orbit-b" />
                <div className="preview-window jamly-window">
                  <div className="preview-window-head">
                    <span>JAMLY / BOOKING</span>
                    <i>LIVE</i>
                  </div>
                  <div className="jamly-grid">
                    <div className="jamly-slot jamly-slot-large">
                      <small>NEXT SESSION</small>
                      <strong>20:00</strong>
                      <span>Studio A</span>
                    </div>
                    <div className="jamly-slot">
                      <small>ACCESS</small>
                      <strong>JWT</strong>
                    </div>
                    <div className="jamly-slot">
                      <small>ROLES</small>
                      <strong>02</strong>
                    </div>
                  </div>
                </div>
              </>
            )}

            {project.preview === "commerce" && (
              <div className="preview-window commerce-window">
                <div className="preview-window-head">
                  <span>COMMERCE / FLOW</span>
                  <i>ACTIVE</i>
                </div>
                <div className="commerce-product-demo">
                  <div className="commerce-product-visual" />
                  <div className="commerce-product-copy">
                    <small>NEW COLLECTION</small>
                    <strong>PRODUCT<br />EXPERIENCE</strong>
                    <span>Discover · Buy · Manage</span>
                    <b>EXPLORE ↗</b>
                  </div>
                </div>
              </div>
            )}

            {project.preview === "travel" && (
              <>
                <div className="travel-horizon" />
                <div className="preview-window travel-window">
                  <div className="preview-window-head">
                    <span>TRAVEL / EXPLORE</span>
                    <i>SPA</i>
                  </div>
                  <div className="travel-route">
                    <small>DESTINATION</small>
                    <strong>BUENOS AIRES</strong>
                    <div className="travel-line"><span /><span /><span /></div>
                    <p>Explore · Route · Discover</p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="work-preview-bottom">
            <p>{project.description}</p>
            <div>
              {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </div>
        </a>
      </div>

      <a href="/portfolio" className="work-all-link">
        Ver portfolio técnico <span>↗</span>
      </a>
    </section>
  );
}
