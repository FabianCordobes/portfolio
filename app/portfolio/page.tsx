import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos y soluciones digitales — Fabián Cordobés",
  description:
    "Sitios web, aplicaciones y sistemas desarrollados por Fabián Cordobés para marcas, profesionales y operaciones digitales.",
};

const CONTACT = {
  linkedin: "https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/?isSelfProfile=true",
  github: "https://github.com/FabianCordobes",
};

const projects = [
  {
    id: "01",
    title: "Tamara Atadía",
    type: "Portfolio artístico",
    description:
      "Sitio de marca personal para una artista multidisciplinaria, con contenido administrable y una experiencia visual enfocada en su identidad.",
    tech: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS"],
    github: "https://github.com/FabianCordobes/tamara-atadia-portfolio",
    live: "https://tamara-atadia-portfolio.vercel.app",
  },
  {
    id: "02",
    title: "Jamly",
    type: "Aplicación full-stack",
    description:
      "Plataforma para gestionar reservas de salas y estudios, con frontend y backend separados, autenticación, roles y persistencia en base de datos.",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "TypeORM"],
    github: "https://github.com/FabianCordobes/jamly",
  },
  {
    id: "03",
    title: "E-commerce App",
    type: "Aplicación web",
    description:
      "Experiencia de e-commerce desarrollada con React, manejo de estado global, Firebase y una interfaz responsive.",
    tech: ["React", "Redux Toolkit", "Firebase", "Sass"],
    github: "https://github.com/FabianCordobes/eCommerceApp",
    live: "https://e-commerce-app-eta-two.vercel.app",
  },
  {
    id: "04",
    title: "Travel App",
    type: "Single Page Application",
    description:
      "Aplicación frontend orientada a viajes construida como SPA con navegación del lado del cliente.",
    tech: ["React", "Vite", "React Router"],
    github: "https://github.com/FabianCordobes/travelApp",
  },
];

const experience = [
  {
    period: "abr. 2023 — mar. 2025",
    company: "BuildVision",
    role: "Full Stack Developer",
    description:
      "Participé en planificación y desarrollo de una plataforma orientada a conectar constructoras y organizar cotizaciones, con foco principal en frontend y contribuciones backend.",
    tech: ["Next.js", "React Query", "NestJS", "Node.js", "TypeORM", "shadcn/ui"],
  },
  {
    period: "jul. 2023 — nov. 2023",
    company: "Social Wave",
    role: "Front-End Developer",
    description:
      "Desarrollé interfaces a partir de requerimientos técnicos y trabajé en comunicación directa con clientes y colaboradores para proponer e implementar mejoras.",
    tech: ["JavaScript", "React", "Redux", "Tailwind CSS", "Sass"],
  },
  {
    period: "nov. 2022 — ene. 2023",
    company: "Henry",
    role: "Teaching Assistant · Full Stack",
    description:
      "Coordiné grupos de estudio y acompañé resolución de ejercicios mediante pair programming, reforzando conceptos de frontend y backend.",
    tech: ["React", "Redux", "Node.js", "Express", "Sequelize"],
  },
];

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux Toolkit",
  "React Query",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
  "NestJS",
  "Express",
  "PostgreSQL",
  "TypeORM",
  "MySQL",
  "DynamoDB",
  "Jest",
  "SuperTest",
  "Docker",
  "Git",
  "AWS",
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-[#f6f6f3]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Fabián<span className="text-[#c8ff62]">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
            <a className="transition hover:text-white" href="#projects">Proyectos</a>
            <a className="transition hover:text-white" href="#experience">Experiencia</a>
            <a className="transition hover:text-white" href="/#contact">Contacto</a>
          </nav>

          <a
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-[#c8ff62] hover:text-[#c8ff62]"
          >
            Crear mi proyecto ↗
          </a>
        </div>
      </header>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">
            TRABAJO REALIZADO
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Ideas convertidas en experiencias digitales que funcionan.
              </h1>
            </div>
            <div>
              <p className="max-w-xl text-base leading-8 text-white/50 sm:text-lg">
                Una selección de sitios, aplicaciones y sistemas que muestran distintas escalas de trabajo: presencia digital, experiencias de compra, reservas, gestión e integraciones.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#c8ff62] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#d5ff87]"
                >
                  Ver proyectos ↗
                </a>
                <a
                  href="/#contact"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-white/30"
                >
                  Hablemos ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Proyectos seleccionados" title="Distintas ideas, objetivos y escalas convertidas en soluciones digitales." />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex min-h-[360px] flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs text-white/30">{project.id}</p>
                    <p className="mt-7 text-sm text-[#c8ff62]">{project.type}</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h2>
                  </div>
                  <span className="text-xl text-white/20">↗</span>
                </div>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-9">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#c8ff62] px-4 py-2.5 text-xs font-semibold text-black"
                    >
                      Ver sitio ↗
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-medium text-white/70"
                  >
                    Repositorio ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-white/[0.02] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Experiencia"
            title="Experiencia que aporta criterio, solidez y capacidad para proyectos de distintas escalas."
          />

          <div className="mt-14 border-t border-white/10">
            {experience.map((item) => (
              <article
                key={item.company}
                className="grid gap-7 border-b border-white/10 py-9 md:grid-cols-[0.5fr_1.5fr]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                    {item.period}
                  </p>
                  <p className="mt-3 text-sm font-medium text-[#c8ff62]">{item.company}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{item.role}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="text-xs text-white/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Capacidad técnica"
            title="Tecnología elegida según el alcance, la experiencia y la evolución de cada proyecto."
          />
          <div className="mt-14 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-5 sm:px-8 sm:pb-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#c8ff62] px-6 py-14 text-black sm:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                NUEVO PROYECTO
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
                Transformemos tu idea en una solución digital pensada para avanzar.
              </h2>
            </div>
            <a
              href="/#contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-black px-6 py-3.5 font-semibold text-white"
            >
              Hablemos de tu proyecto ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 text-sm text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Fabián — TRABAJO REALIZADO</p>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="/">Servicios</a>
          <a className="transition hover:text-white" href="#projects" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-white" href="/#contact" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr]">
      <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">{eyebrow}</p>
      <h2 className="text-balance max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
        {title}
      </h2>
    </div>
  );
}
