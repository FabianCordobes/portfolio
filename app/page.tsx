import LeadForm from "../components/LeadForm";
import ExperienceLayer from "../components/ExperienceLayer";
import SmartProjectBrief from "../components/SmartProjectBrief";
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

const TAMARA_IMAGES = [
  "https://raw.githubusercontent.com/FabianCordobes/tamara-atadia-portfolio/main/public/images/tamara/tamara-hero.jpg",
  "https://raw.githubusercontent.com/FabianCordobes/tamara-atadia-portfolio/main/public/images/tamara/tamara-stage-purple.jpg",
  "https://raw.githubusercontent.com/FabianCordobes/tamara-atadia-portfolio/main/public/images/tamara/tamara-production-event.jpg",
];

const realSignals = [
  { value: "52", label: "assets multimedia", detail: "Tamara Atadía" },
  { value: "5", label: "rutas de producto", detail: "portfolio artístico" },
  { value: "3", label: "dominios core", detail: "Jamly" },
  { value: "8", label: "flujos/pantallas", detail: "e-commerce" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#070707] text-[#f6f6f3]">
      <ExperienceLayer />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070707]/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Fabián<span className="text-[#c8ff62]">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a className="transition hover:text-white" href="#work">Trabajo real</a>
            <a className="transition hover:text-white" href="#brief">Diagnóstico</a>
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
        <div className="hero-glow absolute -right-32 top-10 z-0 h-[720px] w-[720px] rounded-full blur-3xl" />
        <div className="depth-ring depth-ring-one" aria-hidden="true" />
        <div className="depth-ring depth-ring-two" aria-hidden="true" />

        <div
          className="hero-portrait absolute inset-y-0 right-0 z-[1] w-[96%] sm:w-[76%] lg:w-[55%]"
          aria-hidden="true"
        >
          <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover object-[54%_34%]" />
          <div className="hero-portrait-overlay absolute inset-0" />
        </div>

        <div className="relative z-[4] mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/50 backdrop-blur-xl">
              <span className="signal-dot" />
              Product engineer · web · automation · AI-ready
            </div>

            <h1 className="hero-title max-w-5xl text-balance text-[clamp(3.4rem,7.5vw,7.7rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Menos fricción.
              <span className="block text-white/35">Más producto.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/52 sm:text-lg">
              Diseño y construyo soluciones digitales para empresas y equipos que necesitan lanzar, automatizar o destrabar producto.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#brief"
                className="inline-flex items-center justify-center rounded-full bg-[#c8ff62] px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#d5ff87]"
              >
                Diagnosticar mi necesidad ↗
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/15 px-6 py-3.5 font-medium text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/5"
              >
                Ver trabajo real
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/32">
              <span>Next.js</span>
              <span>NestJS</span>
              <span>APIs</span>
              <span>Automatización</span>
              <span>AWS</span>
            </div>
          </div>

          <div className="relative hidden min-h-[620px] lg:block" aria-hidden="true">
            <div className="floating-ui floating-ui-a">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">Signal</span>
                <span className="h-2 w-2 rounded-full bg-[#c8ff62] shadow-[0_0_18px_#c8ff62]" />
              </div>
              <p className="mt-5 text-3xl font-semibold">Problem → Product</p>
              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div className="signal-bar h-full w-[78%] rounded-full bg-[#c8ff62]" />
              </div>
              <p className="mt-3 text-xs text-white/35">Scope · Build · Ship</p>
            </div>

            <div className="floating-ui floating-ui-b">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">Architecture</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {["UI", "API", "DATA"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center text-xs text-white/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[10px] text-white/25">
                <span className="h-px bg-white/10" />
                <span>CONNECTED</span>
                <span className="h-px bg-white/10" />
              </div>
            </div>

            <div className="floating-ui floating-ui-c">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">Delivery</p>
              <div className="mt-4 flex items-end gap-2">
                {[42, 65, 54, 88, 72, 96].map((height, index) => (
                  <span
                    key={height + index}
                    className="metric-bar block w-6 rounded-t-md bg-white/12"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
              <p className="mt-4 text-xs text-[#c8ff62]">Production-ready</p>
            </div>

            <div className="neural-orbit">
              <span className="neural-node neural-node-a" />
              <span className="neural-node neural-node-b" />
              <span className="neural-node neural-node-c" />
              <span className="neural-node neural-node-d" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {realSignals.map((item) => (
            <div key={item.label} className="border-white/10 px-0 py-8 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0">
              <p className="text-4xl font-semibold tracking-[-0.04em]">{item.value}</p>
              <p className="mt-1 text-sm text-white/55">{item.label}</p>
              <p className="mt-1 text-xs text-white/25">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">Trabajo real</p>
              <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
                Menos promesas. Más evidencia.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/38">
              Datos visibles en proyectos y repositorios reales. Sin ROI inventado.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            <article className="case-card grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex flex-col p-7 sm:p-9 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Brand + web
                  </span>
                  <span className="text-xs text-[#c8ff62]">Live</span>
                </div>

                <h3 className="mt-8 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Tamara Atadía</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/45">
                  Portfolio artístico con narrativa de marca, contenido multimedia y rutas específicas para contratación, coaching y portfolio.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <MiniMetric value="52" label="media assets" />
                  <MiniMetric value="5" label="routes" />
                  <MiniMetric value="46" label="source files" />
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-10">
                  <a
                    href="https://tamara-atadia-portfolio.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Ver sitio ↗
                  </a>
                  <a
                    href="/portfolio"
                    className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/70 transition hover:text-white"
                  >
                    Ver caso
                  </a>
                </div>
              </div>

              <div className="relative min-h-[520px] overflow-hidden bg-[#15120d]">
                <img
                  src={TAMARA_IMAGES[0]}
                  alt="Proyecto web de Tamara Atadía"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-82 transition duration-700 hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/45 via-transparent to-transparent" />
                <img
                  src={TAMARA_IMAGES[1]}
                  alt=""
                  className="case-float-image absolute bottom-8 right-7 h-44 w-32 rounded-2xl border border-white/15 object-cover shadow-2xl sm:h-52 sm:w-40"
                />
                <img
                  src={TAMARA_IMAGES[2]}
                  alt=""
                  className="case-float-image case-float-image-delay absolute right-36 top-8 hidden h-36 w-28 rounded-2xl border border-white/15 object-cover shadow-2xl sm:block"
                />
              </div>
            </article>

            <article className="case-card grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:grid-cols-[1.12fr_0.88fr]">
              <div className="relative order-2 min-h-[500px] overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(200,255,98,0.12),transparent_34%),#090b09] p-6 sm:p-10 lg:order-1">
                <div className="jamly-window mx-auto max-w-2xl rounded-[1.75rem] border border-white/10 bg-[#0d100d]/90 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs text-white/30">JAMLY / BOOKING</p>
                      <p className="mt-1 text-lg font-semibold">Studio Session</p>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#c8ff62]" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-white/30">Space</p>
                      <p className="mt-2 text-xl font-semibold">Sala Norte</p>
                      <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                        {["18:00", "19:00", "20:00", "21:00"].map((time, index) => (
                          <div
                            key={time}
                            className={`rounded-xl border px-3 py-3 text-center ${
                              index === 2
                                ? "border-[#c8ff62]/50 bg-[#c8ff62]/10 text-[#c8ff62]"
                                : "border-white/10 text-white/45"
                            }`}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-white/30">Booking engine</p>
                      <div className="mt-4 space-y-3">
                        {[
                          ["Conflict validation", "Active"],
                          ["Role control", "USER / ADMIN"],
                          ["JWT session", "1h"],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-center justify-between rounded-xl bg-black/25 px-3 py-3">
                            <span className="text-xs text-white/40">{label}</span>
                            <span className="text-xs font-medium text-white/75">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#c8ff62]/20 bg-[#c8ff62]/[0.06] px-4 py-3 text-xs text-[#c8ff62]">
                    Booking ready · overlap protection enabled
                  </div>
                </div>

                <div className="data-orbit data-orbit-a" />
                <div className="data-orbit data-orbit-b" />
              </div>

              <div className="order-1 flex flex-col p-7 sm:p-9 lg:order-2 lg:p-10">
                <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Full-stack product
                </span>
                <h3 className="mt-8 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Jamly</h3>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/45">
                  Sistema de reservas con autenticación, roles y validación real de solapamientos.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <MiniMetric value="3" label="core domains" />
                  <MiniMetric value="45" label="source files" />
                  <MiniMetric value="4" label="test layers" />
                </div>

                <a
                  href="https://github.com/FabianCordobes/jamly"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto w-fit pt-10 text-sm font-medium text-white/55 transition hover:text-[#c8ff62]"
                >
                  Ver repositorio ↗
                </a>
              </div>
            </article>

            <article className="case-card grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:grid-cols-[0.72fr_1.28fr]">
              <div className="flex flex-col p-7 sm:p-9 lg:p-10">
                <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Commerce
                </span>
                <h3 className="mt-8 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">E-commerce</h3>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/45">
                  Catálogo, autenticación, carrito, administración y órdenes conectados con estado global y Firebase.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <MiniMetric value="8" label="flows" />
                  <MiniMetric value="22" label="source files" />
                  <MiniMetric value="1" label="live build" />
                </div>

                <a
                  href="https://e-commerce-app-eta-two.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto w-fit pt-10 text-sm font-medium text-white/55 transition hover:text-[#c8ff62]"
                >
                  Abrir experiencia ↗
                </a>
              </div>

              <div className="browser-stage relative min-h-[520px] overflow-hidden bg-[#0b0b0d] p-5 sm:p-8">
                <div className="browser-shell absolute inset-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white shadow-2xl sm:inset-10">
                  <div className="flex h-10 items-center gap-2 border-b border-black/10 bg-[#f1f1f1] px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <div className="ml-3 h-5 flex-1 rounded-full bg-black/[0.06]" />
                  </div>
                  <iframe
                    src="https://e-commerce-app-eta-two.vercel.app"
                    title="Vista previa del proyecto e-commerce"
                    loading="lazy"
                    tabIndex={-1}
                    className="pointer-events-none h-[760px] w-[1180px] origin-top-left scale-[0.56] border-0"
                  />
                </div>
                <div className="scan-line" aria-hidden="true" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="brief" className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#c8ff62]">Diagnóstico inteligente</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
              Antes del código, una mejor decisión.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
              Elegí qué necesitás destrabar y te muestro la ruta de trabajo más lógica.
            </p>
          </div>
          <SmartProjectBrief />
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
            <CompactValue
              kicker="01"
              title="Directo"
              text="La misma persona entiende, decide y construye."
            />
            <CompactValue
              kicker="02"
              title="Full-stack"
              text="Frontend, backend, datos e integraciones en una sola conversación."
            />
            <CompactValue
              kicker="03"
              title="Transferible"
              text="Código y decisiones pensados para que el producto pueda continuar."
            />
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-5 sm:px-8 sm:pb-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#c8ff62] px-6 py-14 text-black sm:px-10 sm:py-20 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">Lead → conversación</p>
              <h2 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl">
                Traé el problema.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-black/58">
                Te digo qué veo, qué priorizaría y si tiene sentido que lo construyamos juntos.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-black/50">
                <span className="rounded-full border border-black/15 px-3 py-2">Sin pitch genérico</span>
                <span className="rounded-full border border-black/15 px-3 py-2">Sin alcance inflado</span>
                <span className="rounded-full border border-black/15 px-3 py-2">Próximo paso concreto</span>
              </div>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                WhatsApp ↗
              </a>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-9 text-sm text-white/30 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Fabián Cordobés</p>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="/portfolio">Portfolio técnico</a>
          <a className="transition hover:text-white" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-[11px] leading-4 text-white/32">{label}</p>
    </div>
  );
}

function CompactValue({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <article className="min-h-52 bg-[#0a0a0a] p-7 sm:p-8">
      <span className="text-xs text-[#c8ff62]">{kicker}</span>
      <h3 className="mt-12 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">{text}</p>
    </article>
  );
}
