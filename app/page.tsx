const CONTACT = {
  whatsapp: "#contact",
  linkedin: "#",
  github: "https://github.com/FabianCordobes",
  instagram: "#",
};

const services = [
  {
    number: "01",
    title: "Landing pages",
    description:
      "Páginas enfocadas en presentar tu propuesta con claridad y convertir visitas en consultas.",
    tags: ["Diseño responsive", "SEO", "WhatsApp"],
  },
  {
    number: "02",
    title: "Sitios web",
    description:
      "Webs profesionales para empresas y marcas que necesitan una presencia digital sólida.",
    tags: ["Institucional", "Portfolio", "CMS"],
  },
  {
    number: "03",
    title: "Aplicaciones web",
    description:
      "Plataformas y sistemas a medida para automatizar procesos y resolver necesidades concretas.",
    tags: ["Dashboards", "Usuarios", "APIs"],
  },
  {
    number: "04",
    title: "E-commerce",
    description:
      "Experiencias de compra rápidas, claras y preparadas para integrarse con pagos y gestión.",
    tags: ["Catálogo", "Pagos", "Integraciones"],
  },
];

const projects = [
  {
    id: "01",
    title: "Tamara Atadía",
    type: "Portfolio artístico",
    description:
      "Sitio de marca personal para una artista multidisciplinaria, con contenido administrable y una experiencia visual enfocada en su identidad.",
    tech: "Next.js · TypeScript · Sanity · Tailwind CSS",
    github: "https://github.com/FabianCordobes/tamara-atadia-portfolio",
    live: "https://tamara-atadia-portfolio.vercel.app",
  },
  {
    id: "02",
    title: "Jamly",
    type: "Aplicación full-stack",
    description:
      "Plataforma para gestionar reservas de salas y estudios, con frontend y backend separados, autenticación y persistencia en base de datos.",
    tech: "Next.js · NestJS · TypeScript · PostgreSQL · TypeORM",
    github: "https://github.com/FabianCordobes/jamly",
  },
  {
    id: "03",
    title: "E-commerce App",
    type: "Aplicación web",
    description:
      "Experiencia de e-commerce desarrollada con React, manejo de estado global y Firebase.",
    tech: "React · Redux Toolkit · Firebase · Sass",
    github: "https://github.com/FabianCordobes/eCommerceApp",
    live: "https://e-commerce-app-eta-two.vercel.app",
  },
  {
    id: "04",
    title: "Travel App",
    type: "Single Page Application",
    description:
      "Aplicación frontend orientada a viajes construida como SPA con navegación del lado del cliente.",
    tech: "React · Vite · React Router",
    github: "https://github.com/FabianCordobes/travelApp",
  },
];

const process = [
  {
    number: "01",
    title: "Entender",
    text: "Me contás tu idea, objetivo y contexto. Definimos qué necesita realmente el proyecto.",
  },
  {
    number: "02",
    title: "Diseñar",
    text: "Organizo la experiencia, el contenido y la solución antes de entrar de lleno al código.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Desarrollo el producto con foco en rendimiento, responsive y una base mantenible.",
  },
  {
    number: "04",
    title: "Lanzar",
    text: "Publicamos, revisamos los últimos detalles y dejamos el proyecto listo para crecer.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#070707] text-[#f6f6f3]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070707]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Fabián<span className="text-[#c8ff62]">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
            <a className="transition hover:text-white" href="#services">Servicios</a>
            <a className="transition hover:text-white" href="#projects">Proyectos</a>
            <a className="transition hover:text-white" href="#process">Proceso</a>
            <a className="transition hover:text-white" href="#about">Sobre mí</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-[#c8ff62] hover:text-[#c8ff62]"
          >
            Hablemos ↗
          </a>
        </div>
      </header>

      <section id="home" className="relative min-h-screen border-b border-white/10 pt-20">
        <div className="grid-bg absolute inset-0" />
        <div className="hero-glow absolute -right-32 top-24 h-[620px] w-[620px] rounded-full blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#c8ff62] shadow-[0_0_22px_#c8ff62]" />
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-balance max-w-6xl text-[clamp(3.2rem,9vw,8.5rem)] font-semibold leading-[0.93] tracking-[-0.065em]">
            Desarrollo productos digitales que
            <span className="block text-white/35">mueven negocios.</span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <p className="max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Diseño y desarrollo páginas web, landing pages y aplicaciones a medida para profesionales, emprendimientos y empresas que necesitan una presencia digital seria y efectiva.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#c8ff62] px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#d5ff87]"
              >
                Quiero crear mi proyecto
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-medium text-white transition hover:bg-white/5"
              >
                Ver trabajos ↓
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-sm text-white/35">
            <span>React</span><span>Next.js</span><span>TypeScript</span><span>Node.js</span><span>NestJS</span><span>PostgreSQL</span>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Servicios"
            title="No vendo código. Construyo soluciones para objetivos concretos."
          />

          <div className="mt-16 grid border-t border-white/10 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border-b border-white/10 py-9 md:px-8 md:[&:nth-child(odd)]:border-r"
              >
                <div className="flex items-start justify-between gap-8">
                  <span className="text-xs text-white/30">{service.number}</span>
                  <span className="text-xl text-white/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c8ff62]">↗</span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-white/50">{service.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
          <Stat value="100%" label="Responsive" />
          <Stat value="SEO" label="Base técnica optimizada" />
          <Stat value="A medida" label="Sin plantillas genéricas" />
        </div>
      </section>

      <section id="projects" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Proyectos"
            title="Trabajo real, explicado desde el problema y la solución."
          />

          <div className="mt-16 space-y-4">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group grid gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.04] md:grid-cols-[80px_1fr_1.15fr_auto] md:items-center md:p-9"
              >
                <span className="text-xs text-white/25">{project.id}</span>
                <div>
                  <p className="text-sm text-[#c8ff62]">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                </div>
                <div>
                  <p className="max-w-xl text-sm leading-6 text-white/50">{project.description}</p>
                  <p className="mt-3 text-xs text-white/25">{project.tech}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#c8ff62] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#d5ff87]"
                    >
                      Ver sitio ↗
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/65 transition hover:border-white/30 hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition hover:text-[#c8ff62]"
            >
              Ver todos mis repositorios en GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Proceso" title="Simple, transparente y sin vueltas." />

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article key={step.number} className="min-h-72 bg-[#0a0a0a] p-7 sm:p-8">
                <span className="text-xs text-[#c8ff62]">{step.number}</span>
                <h3 className="mt-20 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/45">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">Sobre mí</p>
          </div>
          <div>
            <h2 className="text-balance max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Soy Fabián. Desarrollo productos web de punta a punta.
            </h2>
            <div className="mt-10 grid gap-8 text-base leading-8 text-white/50 md:grid-cols-2">
              <p>
                Trabajo tanto frontend como backend, por lo que puedo acompañar un proyecto desde la interfaz hasta APIs, autenticación, bases de datos e integraciones.
              </p>
              <p>
                Mi enfoque combina desarrollo sólido con una experiencia clara para el usuario y una solución que tenga sentido para el negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-5 sm:px-8 sm:pb-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#c8ff62] px-6 py-16 text-black sm:px-10 sm:py-24 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Empecemos</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-balance max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                ¿Tenés una idea? Hagámosla realidad.
              </h2>
              <p className="mt-7 max-w-xl leading-7 text-black/60">
                Contame qué querés construir, qué problema necesitás resolver o qué mejorarías de tu presencia digital.
              </p>
            </div>

            <a
              href={CONTACT.whatsapp}
              className="inline-flex w-fit items-center justify-center rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:scale-[1.02]"
            >
              Hablemos por WhatsApp ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 text-sm text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Fabián — Desarrollo web</p>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href={CONTACT.linkedin}>LinkedIn</a>
          <a className="transition hover:text-white" href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="transition hover:text-white" href={CONTACT.instagram}>Instagram</a>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr]">
      <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">{eyebrow}</p>
      <h2 className="text-balance max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">{title}</h2>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-white/40">{label}</p>
    </div>
  );
}
