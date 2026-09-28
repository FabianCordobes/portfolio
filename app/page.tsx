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

const services = [
  {
    number: "01",
    title: "Landing pages",
    description:
      "Para dejar de mandar explicaciones largas por mensaje y llevar a cada persona a una propuesta clara, enfocada en una sola acción.",
    tags: ["Conversión", "Claridad", "Contacto directo"],
  },
  {
    number: "02",
    title: "Sitios web",
    description:
      "Para que tu negocio se vea tan serio como realmente es, genere confianza antes del primer contacto y facilite que te elijan.",
    tags: ["Confianza", "Contenido", "Posicionamiento"],
  },
  {
    number: "03",
    title: "Aplicaciones web",
    description:
      "Para transformar tareas repetitivas, desorden operativo o procesos manuales en un sistema que ahorre tiempo y reduzca fricción.",
    tags: ["Procesos", "Automatización", "Operación"],
  },
  {
    number: "04",
    title: "E-commerce",
    description:
      "Para que vender online no dependa de conversaciones eternas, sino de una experiencia de compra clara, confiable y preparada para convertir.",
    tags: ["Ventas", "Catálogo", "Experiencia de compra"],
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
    text: "Construyo la solución con foco en claridad, velocidad y una experiencia simple para quien la usa.",
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
            <a className="transition hover:text-white" href="#process">Cómo trabajo</a>
            <a className="transition hover:text-white" href="/portfolio">Portfolio</a>
            <a className="transition hover:text-white" href="#contact">Contacto</a>
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
            Tomando nuevos proyectos
          </div>

          <h1 className="hero-title text-balance max-w-6xl text-[clamp(3.2rem,9vw,8.5rem)] font-semibold leading-[0.93] tracking-[-0.065em]">
            Tu web debería ayudarte a vender, no sólo
            <span className="block text-white/35">verse bien.</span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <p className="max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Si hoy tu negocio depende demasiado de explicar por mensaje qué hacés, perseguir consultas o perder oportunidades por una presencia digital débil, puedo ayudarte a convertir eso en una experiencia clara, profesional y preparada para generar acción.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#c8ff62] px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#d5ff87]"
              >
                Quiero mejorar mi presencia digital
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-medium text-white transition hover:bg-white/5"
              >
                Ver portfolio técnico ↗
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-sm text-white/35">
            <span>Claridad</span><span>Conversión</span><span>Experiencia</span><span>Velocidad</span><span>Escalabilidad</span>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Servicios"
            title="La tecnología importa. Pero lo que realmente importa es qué cambia en tu negocio."
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

      <section className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">Antes de postergarlo otra vez</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Una presencia digital débil no siempre se nota. Las oportunidades que se pierden, tampoco.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/50">
                Si una persona entra, no entiende rápido qué ofrecés, no confía o no sabe cuál es el siguiente paso, puede irse sin escribirte. Mejorar eso no es “hacer una web más linda”: es reducir fricción entre el interés y la acción.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "“Todavía no sé exactamente qué necesito.”",
                  text: "No hace falta. El primer paso es ordenar el problema, el objetivo y las prioridades. La solución se define después.",
                },
                {
                  title: "“No sé si ahora es el momento.”",
                  text: "Si hoy ya estás perdiendo tiempo explicando manualmente, derivando consultas o sosteniendo procesos desordenados, ya existe un costo. La pregunta es si conviene seguir absorbiéndolo.",
                },
                {
                  title: "“Me preocupa invertir y que no sirva.”",
                  text: "Por eso el trabajo empieza por alcance y objetivo. No se trata de sumar funciones: se trata de construir sólo lo que tenga una razón clara de existir.",
                },
                {
                  title: "“Seguro va a ser demasiado complejo.”",
                  text: "La complejidad se divide en etapas. Primero resolvemos lo esencial; después se puede evolucionar con una base preparada para crecer.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-black/20 p-6 sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-5 rounded-3xl border border-[#c8ff62]/25 bg-[#c8ff62]/[0.06] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <p className="text-sm font-semibold text-[#c8ff62]">No necesitás decidir todo hoy.</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55">
                Sí necesitás saber cuál sería el siguiente paso correcto. Contame tu situación y vemos si tiene sentido avanzar.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#c8ff62] px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#d5ff87]"
            >
              Evaluar mi proyecto ↗
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
          <Stat value="A medida" label="Una solución pensada para tu contexto" />
          <Stat value="Claro" label="Cada sección tiene un objetivo" />
          <Stat value="Preparado" label="Para crecer cuando el negocio lo necesite" />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">Prueba técnica</p>
              <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                La landing explica qué puedo resolver. El portfolio muestra cómo lo construyo.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
                Si querés revisar proyectos, experiencia, tecnologías y repositorios antes de avanzar, dejé toda la parte técnica separada en un portfolio específico.
              </p>
            </div>
            <a
              href="/portfolio"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-[#c8ff62] hover:text-[#c8ff62]"
            >
              Explorar portfolio técnico ↗
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Proceso" title="Menos incertidumbre. Más claridad desde el primer día." />

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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Empecemos</p>

          <div className="mt-5 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <h2 className="text-balance max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl">
                Si sabés que tu presencia digital puede estar rindiendo más, este es el momento de ordenarla.
              </h2>
              <p className="mt-7 max-w-xl leading-7 text-black/60">
                No necesitás llegar con todo definido. Contame dónde estás hoy y qué querés conseguir. Te ayudo a convertirlo en un alcance claro y en un próximo paso concreto.
              </p>

              <div className="mt-9 border-t border-black/10 pt-7">
                <p className="text-sm font-semibold">Sin vueltas y sin compromisos innecesarios</p>
                <ol className="mt-4 space-y-3 text-sm leading-6 text-black/55">
                  <li>01 · Me contás el problema y el objetivo.</li>
                  <li>02 · Ordenamos el alcance y detectamos qué conviene resolver primero.</li>
                  <li>03 · Si hay encaje, definimos próximos pasos, tiempos y propuesta.</li>
                </ol>
              </div>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Quiero hablarlo por WhatsApp ↗
              </a>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 text-sm text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Fabián — Desarrollo web</p>
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-white/40">{label}</p>
    </div>
  );
}
