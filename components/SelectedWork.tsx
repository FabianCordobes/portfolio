"use client";

import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "Jamly",
    type: "Aplicación full-stack",
    result: "Reservas, disponibilidad y operación en una sola experiencia.",
    description:
      "Plataforma full-stack para gestionar reservas de salas y estudios con autenticación, roles y lógica de disponibilidad.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
    href: "https://github.com/FabianCordobes/jamly",
    visual: "jamly",
  },
  {
    id: "02",
    title: "E-commerce App",
    type: "Comercio digital",
    result: "Del descubrimiento al checkout sin romper el recorrido.",
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
  const [hovered, setHovered] = useState<number | null>(null);
  const refs = useRef<Array<HTMLElement | null>>([]);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
  const previousTarget = useRef({ x: -500, y: -500 });

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

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !finePointer) return;

    let frame = 0;

    const animate = () => {
      const preview = previewRef.current;
      if (preview) {
        const dx = target.current.x - current.current.x;
        const dy = target.current.y - current.current.y;
        current.current.x += dx * 0.135;
        current.current.y += dy * 0.135;

        const eventVX = target.current.x - previousTarget.current.x;
        const eventVY = target.current.y - previousTarget.current.y;
        const rotate = Math.max(-7, Math.min(7, dx * 0.028 + eventVX * 0.018));
        const skewY = Math.max(-3.5, Math.min(3.5, dy * 0.018 + eventVY * 0.012));

        preview.style.transform =
          `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-8%, -48%) rotate(${rotate}deg) skewY(${skewY}deg)`;

        previousTarget.current.x += eventVX * 0.2;
        previousTarget.current.y += eventVY * 0.2;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const movePreview = (event: React.PointerEvent<HTMLElement>) => {
    target.current.x = event.clientX + 30;
    target.current.y = event.clientY + 18;
  };

  const showPreview = (index: number, event: React.PointerEvent<HTMLElement>) => {
    current.current.x = event.clientX + 22;
    current.current.y = event.clientY + 18;
    target.current.x = event.clientX + 30;
    target.current.y = event.clientY + 18;
    previousTarget.current = { ...target.current };
    setActive(index);
    setHovered(index);
  };

  const hoveredProject = hovered === null ? null : PROJECTS[hovered];

  return (
    <section id="work" className="cinematic-work">
      <div className="section-shell cinematic-work-head" data-reveal>
        <p className="micro-label dark">TRABAJO SELECCIONADO</p>
        <div>
          <h2>
            Proyectos con lógica.<br />
            <span>Experiencias con carácter.</span>
          </h2>
          <p>
            Cada proyecto se construye desde la necesidad real hasta la experiencia
            final: interfaz, arquitectura, datos y operación.
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
              <div
                className="work-chapter-copy"
                onPointerEnter={(event) => showPreview(index, event)}
                onPointerMove={movePreview}
                onPointerLeave={() => setHovered(null)}
              >
                <p className="work-chapter-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="work-chapter-result">{project.result}</p>
                <p className="work-chapter-description">{project.description}</p>

                <div className="work-chapter-tech">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <a href={project.href} target="_blank" rel="noreferrer">
                  Ver proyecto <span>↗</span>
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

                <div className="project-frame-stage">
                  <div className="project-frame-bloom" />
                  <div className="project-frame-scan" />
                  <div className="project-frame-chroma chroma-one" />
                  <div className="project-frame-chroma chroma-two" />

                  {project.visual === "jamly" && (
                    <>
                      <div className="jamly-film-orbit jamly-film-orbit-a" />
                      <div className="jamly-film-orbit jamly-film-orbit-b" />
                      <div className="jamly-film-ui">
                        <div className="jamly-film-head">
                          <span>JAMLY</span>
                          <i>LIVE SYSTEM</i>
                        </div>
                        <div className="jamly-film-body">
                          <div className="jamly-film-main">
                            <small>NEXT SESSION</small>
                            <strong>20:00</strong>
                            <span>Studio A · Confirmed</span>
                          </div>
                          <div className="jamly-film-side">
                            <small>AVAILABILITY</small>
                            <div className="jamly-bars">
                              {[34, 58, 43, 81, 62, 92, 68, 78].map((height, barIndex) => (
                                <i key={barIndex} style={{ height: `${height}%` }} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
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

      <div
        ref={previewRef}
        className={hoveredProject ? `work-cursor-preview is-visible preview-${hoveredProject.visual}` : "work-cursor-preview"}
        aria-hidden="true"
      >
        {hoveredProject && (
          <>
            <div className="cursor-preview-light" />
            <div className="cursor-preview-scan" />
            <div className="cursor-preview-index">{hoveredProject.id}</div>
            <div className="cursor-preview-copy">
              <small>{hoveredProject.type}</small>
              <strong>{hoveredProject.title}</strong>
              <span>EXPLORE ↗</span>
            </div>
          </>
        )}
      </div>

      <div className="section-shell cinematic-work-footer">
        <a href="/portfolio">
          Ver portfolio técnico completo <span>↗</span>
        </a>
      </div>
    </section>
  );
}
