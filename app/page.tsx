import LeadForm from "../components/LeadForm";
import { heroImagePart1 } from "./_hero-image/part1";
import { heroImagePart2 } from "./_hero-image/part2";
import { heroImagePart3 } from "./_hero-image/part3";
import { heroImagePart4 } from "./_hero-image/part4";
import { heroImagePart5 } from "./_hero-image/part5";

const HERO_IMAGE =
  "data:image/webp;base64," +
  heroImagePart1 +
  heroImagePart2 +
  heroImagePart3 +
  heroImagePart4 +
  heroImagePart5;

const CONTACT = {
  whatsapp: "https://wa.me/5491127813814",
  linkedin: "https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/?isSelfProfile=true",
};

const solutions = [
  {
    number: "01",
    title: "Lanzar una iniciativa digital",
    description:
      "Cuando hay una oportunidad, una idea o una necesidad comercial que necesita convertirse en una experiencia concreta: desde un MVP hasta una web, e-commerce o producto digital.",
    tags: ["MVP", "Producto digital", "Web", "E-commerce"],
  },
  {
    number: "02",
    title: "Mejorar una experiencia que ya existe",
    description:
      "Cuando un sitio o producto funciona, pero genera fricción, no acompaña el crecimiento o necesita evolucionar para cumplir mejor su objetivo.",
    tags: ["UX", "Conversión", "Performance", "Evolución"],
  },
  {
    number: "03",
    title: "Digitalizar un proceso manual",
    description:
      "Cuando el equipo pierde tiempo entre planillas, mensajes, tareas repetitivas o pasos que podrían resolverse con un sistema más simple.",
    tags: ["Automatización", "Sistemas internos", "Operación"],
  },
  {
    number: "04",
    title: "Extender capacidad del equipo",
    description:
      "Cuando existe trabajo por ejecutar pero no conviene sumar estructura fija: nuevas funcionalidades, integraciones o desarrollo frontend y backend.",
    tags: ["Frontend", "Backend", "Integraciones", "Producto"],
  },
];

const process = [
  {
    number: "01",
    title: "Diagnosticar",
    text: "Entiendo el problema, el objetivo, el contexto actual y las restricciones antes de definir una solución.",
  },
  {
    number: "02",
    title: "Definir",
    text: "Convertimos la necesidad en un alcance claro, prioridades y una primera versión que tenga sentido construir.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Desarrollo la solución con foco en experiencia, mantenibilidad y comunicación directa durante la ejecución.",
  },
  {
    number: "04",
    title: "Entregar y evolucionar",
    text: "La solución queda lista para operar, continuar desarrollándose y crecer sin depender de decisiones improvisadas.",
  },
];

const proofPoints = [
  {
    title: "Producto y aplicaciones",
    text: "Experiencia desarrollando frontend y backend sobre productos digitales y funcionalidades que tienen que convivir con usuarios y procesos reales.",
  },
  {
    title: "APIs e integraciones",
    text: "Trabajo conectando servicios, datos y flujos para que la solución no quede aislada del resto de la operación.",
  },
  {
    title: "Calidad y mantenibilidad",
    text: "Testing, decisiones técnicas claras y una base preparada para que el producto pueda continuar evolucionando.",
  },
];

const riskItems = [
  {
    title: "“Todavía no tenemos el alcance cerrado.”",
    text: "No hace falta llegar con una especificación completa. El primer trabajo es separar problema, objetivo y prioridades para definir qué conviene construir y qué no.",
  },
  {
    title: "“Ya tenemos equipo interno o proveedor.”",
    text: "Puedo trabajar sobre una necesidad puntual, integrarme a un flujo existente o tomar una pieza del proyecto sin obligar a reemplazar lo que ya funciona.",
  },
  {
    title: "“No podemos rehacer todo desde cero.”",
    text: "No siempre hay que hacerlo. Muchas veces el mejor camino es mejorar por etapas, reducir fricción y preservar lo que ya aporta valor.",
  },
  {
    title: "“Nos preocupa quedar atados a una sola persona.”",
    text: "La solución debe poder mantenerse y transferirse. Por eso priorizo código claro, documentación de lo necesario y decisiones que otro equipo pueda continuar.",
  },
];

const reasons = [
  {
    title: "Trato directo",
    text: "Hablás con la misma persona que entiende el problema, toma decisiones técnicas y construye la solución.",
  },
  {
    title: "Criterio antes que features",
    text: "No agrego complejidad para justificar desarrollo. Primero definimos qué tiene impacto y qué puede esperar.",
  },
  {
    title: "Capacidad full-stack",
    text: "Puedo trabajar desde la experiencia de usuario hasta APIs, lógica de negocio, datos e integraciones cuando el proyecto lo necesita.",
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
            <a className="transition hover:text-white" href="#solutions">Soluciones</a>
            <a className="transition hover:text-white" href="#experience">Experiencia</a>
            <a className="transition hover:text-white" href="#process">Cómo trabajo</a>
            <a className="transition hover:text-white" href="/portfolio">Portfolio</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-[#c8ff62] hover:text-[#c8ff62]"
          >
            Hablemos ↗
          </a>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden border-b border-white/10 pt-20">
        <div className="grid-bg absolute inset-0 z-0" />
        <div className="hero-glow absolute -right-32 top-24 z-0 h-[620px] w-[620px] rounded-full blur-3xl" />

        <div className="hero-portrait absolute inset-y-0 right-0 z-[1] w-[96%] sm:w-[78%] lg:w-[61%] xl:w-[56%]" aria-hidden="true">
          <img
            src={HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover object-[54%_34%]"
          />
          <div className="hero-portrait-overlay absolute inset-0" />
        </div>

        <div className="hero-portrait-accent pointer-events-none absolute right-[4%] top-[18%] z-[2] h-[48%] w-[34%] rounded-full bg-[#c8ff62]/10 blur-[110px]" />

        <div className="relative z-[3] mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#c8ff62] shadow-[0_0_22px_#c8ff62]" />
            Desarrollo de producto y soluciones digitales
          </div>

          <h1 className="hero-title text-balance max-w-6xl text-[clamp(3rem,8vw,7.8rem)] font-semibold leading-[0.93] tracking-[-0.065em]">
            Cuando una necesidad de negocio necesita tecnología para avanzar.
            <span className="block text-white/35">La convierto en una solución concreta.</span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <p className="max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Trabajo con empresas, equipos y negocios que necesitan lanzar una iniciativa digital, mejorar un producto, automatizar procesos o sumar capacidad técnica sin incorporar complejidad innecesaria.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#c8ff62] px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#d5ff87]"
              >
                Contame qué necesitás resolver
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-medium text-white transition hover:bg-white/5"
              >
                Ver experiencia técnica ↗
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-sm text-white/35">
            <span>Producto digital</span>
            <span>Aplicaciones</span>
            <span>Automatización</span>
            <span>Integraciones</span>
            <span>Web</span>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">La situación</p>
            <div>
              <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Una oportunidad aparece. El negocio sabe qué quiere lograr. Lo difícil es convertirlo en algo que funcione.
              </h2>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/50">
                Entre la idea y la ejecución aparecen decisiones de alcance, experiencia, tecnología, datos e integración. Mi trabajo es ordenar esas decisiones y convertir la necesidad en una solución que pueda usarse, mantenerse y evolucionar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Dónde aporto valor"
            title="No empiezo por el tipo de software. Empiezo por lo que el negocio necesita destrabar."
          />

          <div className="mt-16 grid border-t border-white/10 md:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="group border-b border-white/10 py-9 md:px-8 md:[&:nth-child(odd)]:border-r"
              >
                <div className="flex items-start justify-between gap-8">
                  <span className="text-xs text-white/30">{solution.number}</span>
                  <span className="text-xl text-white/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c8ff62]">↗</span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">{solution.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-white/50">{solution.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Experiencia aplicada"
            title="Capacidad técnica para trabajar más allá de una landing."
          />

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/50">
            Mi recorrido incluye desarrollo frontend y backend, APIs, integraciones, testing y trabajo sobre productos digitales que tienen que convivir con equipos, datos y procesos reales.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {proofPoints.map((item) => (
              <article key={item.title} className="min-h-64 bg-[#0a0a0a] p-7 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/45">{item.text}</p>
              </article>
            ))}
          </div>

          <a
            href="/portfolio"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-[#c8ff62] hover:text-[#c8ff62]"
          >
            Revisar proyectos, experiencia y stack ↗
          </a>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">Reducir riesgo</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Una buena decisión técnica también tiene que ser una buena decisión para el negocio.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/50">
                Antes de desarrollar, hay que entender qué conviene resolver, cómo se integra con lo que ya existe y qué necesita quedar preparado para después.
              </p>
            </div>

            <div className="grid gap-4">
              {riskItems.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Forma de trabajo"
            title="Menos capas entre el problema y la ejecución."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {reasons.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-black/20 p-7">
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#c8ff62]/25 bg-[#c8ff62]/[0.06] p-7 sm:p-9">
            <p className="max-w-4xl text-xl font-semibold leading-8 sm:text-2xl">
              Hablás con la misma persona que entiende el contexto, propone el alcance y trabaja sobre la solución. Eso reduce pérdida de información y acelera decisiones.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Proceso"
            title="Del problema al producto, con un alcance que se pueda explicar antes de construir."
          />

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

      <section id="contact" className="px-5 pb-5 sm:px-8 sm:pb-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#c8ff62] px-6 py-16 text-black sm:px-10 sm:py-24 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Próximo paso</p>

          <div className="mt-5 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <h2 className="text-balance max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl">
                Contame qué necesita cambiar. Definimos si la tecnología es la solución y cuál es el alcance correcto.
              </h2>
              <p className="mt-7 max-w-xl leading-7 text-black/60">
                No hace falta llegar con todo resuelto. Necesito entender el problema, el contexto y el resultado que buscás. A partir de ahí podemos decidir qué vale la pena construir.
              </p>

              <div className="mt-9 border-t border-black/10 pt-7">
                <p className="text-sm font-semibold">Primera conversación, foco concreto</p>
                <ol className="mt-4 space-y-3 text-sm leading-6 text-black/55">
                  <li>01 · Entiendo el problema, el objetivo y el contexto actual.</li>
                  <li>02 · Identificamos restricciones, prioridades y qué conviene resolver primero.</li>
                  <li>03 · Si hay encaje, definimos alcance, tiempos y propuesta.</li>
                </ol>
              </div>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Hablar por WhatsApp ↗
              </a>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 text-sm text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Fabián — Desarrollo de producto y soluciones digitales</p>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="/portfolio">Portfolio técnico</a>
          <a className="transition hover:text-white" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
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
