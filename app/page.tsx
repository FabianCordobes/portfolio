import LeadForm from "../components/LeadForm";
import ExperienceLayer from "../components/ExperienceLayer";
import FutureField from "../components/FutureField";
import CinematicPortal from "../components/CinematicPortal";
import AIArchitectureScene from "../components/AIArchitectureScene";
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
  linkedin:
    "https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/?isSelfProfile=true",
};

const MEDIA = {
  tamaraHero:
    "https://raw.githubusercontent.com/FabianCordobes/tamara-atadia-portfolio/main/public/images/tamara/tamara-hero.jpg",
  tamaraStage:
    "https://raw.githubusercontent.com/FabianCordobes/tamara-atadia-portfolio/main/public/images/tamara/tamara-stage-purple.jpg",
  tamaraProduction:
    "https://raw.githubusercontent.com/FabianCordobes/tamara-atadia-portfolio/main/public/images/tamara/tamara-production-event.jpg",
  commerceLogin:
    "https://raw.githubusercontent.com/FabianCordobes/eCommerceApp/master/src/assets/login.png",
  commerceRegister:
    "https://raw.githubusercontent.com/FabianCordobes/eCommerceApp/master/src/assets/register.png",
  commerceForgot:
    "https://raw.githubusercontent.com/FabianCordobes/eCommerceApp/master/src/assets/forgot.png",
};

const SERVICES = [
  {
    index: "01",
    title: "LANDING PAGES",
    text: "Páginas enfocadas en presentar una propuesta y convertir visitas en oportunidades.",
    tags: "Conversión · Marca · Velocidad",
  },
  {
    index: "02",
    title: "SITIOS WEB",
    text: "Sitios profesionales para empresas, marcas y proyectos con una presencia digital sólida.",
    tags: "Contenido · Identidad · Escala",
  },
  {
    index: "03",
    title: "APLICACIONES WEB",
    text: "Productos, plataformas, dashboards y sistemas a medida con lógica de negocio.",
    tags: "Producto · Operación · Integración",
  },
  {
    index: "04",
    title: "E-COMMERCE",
    text: "Experiencias de compra, catálogo, carrito, administración y flujo de órdenes.",
    tags: "Ventas · Catálogo · Experiencia",
  },
];

export default function Home() {
  return (
    <main className="future-site">
      <ExperienceLayer />

      <header className="future-nav">
        <a href="#home" className="future-brand">
          FABIÁN<span>.</span>
        </a>

        <nav>
          <a href="#services">Servicios</a>
          <a href="#work">Proyectos</a>
          <a href="#architecture">Arquitectura</a>
          <a href="/portfolio">Portfolio</a>
        </nav>

        <a href="#contact" className="future-nav-cta">
          Iniciar proyecto ↗
        </a>
      </header>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Abrir conversación por WhatsApp"
      >
        <span className="whatsapp-pulse" />
        <span className="whatsapp-icon">WA</span>
        <span className="whatsapp-label">WhatsApp</span>
      </a>

      <section id="home" className="future-hero">
        <FutureField />
        <CinematicPortal />

        <div className="hero-cinema-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="future-hero-photo" aria-hidden="true">
          <img src={HERO_IMAGE} alt="" />
          <div className="future-hero-photo-mask" />
        </div>

        <div className="future-hero-orbit future-hero-orbit-a" aria-hidden="true" />
        <div className="future-hero-orbit future-hero-orbit-b" aria-hidden="true" />

        <div className="future-hero-content">
          <div className="future-eyebrow">
            <span className="signal-dot" />
            LANDING PAGES · SITIOS WEB · APLICACIONES · E-COMMERCE
          </div>

          <h1 className="five-d-title">
            <span data-text="PRODUCTOS">PRODUCTOS</span>
            <span data-text="DIGITALES">DIGITALES</span>
          </h1>

          <div className="future-hero-bottom">
            <p>
              Diseño y desarrollo landing pages, sitios web, aplicaciones y e-commerce
              para marcas, profesionales y empresas.
            </p>

            <div className="future-hero-actions">
              <a href="#contact" className="future-cta future-cta-primary">
                Quiero crear mi proyecto <span>↗</span>
              </a>
              <a href="#work" className="future-cta">
                Ver trabajos <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="future-side-label" aria-hidden="true">
          LANDING · WEB · APPS · COMMERCE
        </div>
      </section>

      <section id="services" className="future-services">
        <div className="future-services-head" data-reveal>
          <p className="future-kicker">SERVICIOS</p>
          <h2 className="five-d-heading" data-text="DE LA IDEA A PRODUCCIÓN">
            DE LA IDEA A PRODUCCIÓN
          </h2>
        </div>

        <div className="future-services-list">
          {SERVICES.map((service) => (
            <article key={service.index} className="future-service-row" data-reveal>
              <span className="future-service-index">{service.index}</span>
              <div className="future-service-main">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="future-service-tags">{service.tags}</span>
              <span className="future-service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="future-work">
        <div className="future-section-intro" data-reveal>
          <p className="future-kicker">PROYECTOS REALES</p>
          <h2 className="five-d-heading" data-text="TRABAJO PUBLICADO">
            TRABAJO PUBLICADO
          </h2>
        </div>

        <article className="project-chapter project-chapter-image">
          <div className="project-media project-media-tamara">
            <img src={MEDIA.tamaraHero} alt="Proyecto Tamara Atadía" />
            <img className="project-float project-float-a" src={MEDIA.tamaraStage} alt="" />
            <img className="project-float project-float-b" src={MEDIA.tamaraProduction} alt="" />
            <div className="project-gradient" />
          </div>

          <div className="project-overlay" data-reveal>
            <div>
              <p className="future-kicker">01 · BRAND EXPERIENCE</p>
              <h3>TAMARA<br />ATADÍA</h3>
              <p className="project-summary">
                Portfolio artístico, marca personal, contenido multimedia y contratación.
              </p>
            </div>

            <div className="project-meta">
              <Metric value="47" label="media assets" />
              <Metric value="05" label="routes" />
              <Metric value="46" label="source files" />
            </div>

            <div className="project-links">
              <a href="https://tamara-atadia-portfolio.vercel.app" target="_blank" rel="noreferrer">
                Live ↗
              </a>
              <a href="https://github.com/FabianCordobes/tamara-atadia-portfolio" target="_blank" rel="noreferrer">
                Code ↗
              </a>
            </div>
          </div>
        </article>

        <article className="project-chapter project-chapter-system">
          <div className="system-space">
            <div className="system-orbit system-orbit-a" />
            <div className="system-orbit system-orbit-b" />

            <div className="system-core">
              <div className="system-core-head">
                <span>JAMLY / LIVE SYSTEM</span>
                <span className="system-live">● ONLINE</span>
              </div>

              <div className="system-grid">
                <div className="system-block system-block-large">
                  <small>BOOKING ENGINE</small>
                  <strong>20:00</strong>
                  <span>Studio session</span>
                </div>

                <div className="system-block">
                  <small>ACCESS</small>
                  <strong>JWT</strong>
                  <span>1h</span>
                </div>

                <div className="system-block">
                  <small>ROLES</small>
                  <strong>02</strong>
                  <span>User · Admin</span>
                </div>

                <div className="system-block system-block-wide">
                  <small>AVAILABILITY</small>
                  <div className="availability-wave">
                    {[38, 62, 44, 86, 54, 92, 68, 78].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="system-label system-label-a">API</div>
            <div className="system-label system-label-b">DATA</div>
            <div className="system-label system-label-c">AUTH</div>
          </div>

          <div className="project-overlay project-overlay-light" data-reveal>
            <div>
              <p className="future-kicker">02 · FULL-STACK PRODUCT</p>
              <h3>JAMLY</h3>
              <p className="project-summary">
                Sistema de reservas con autenticación, roles y validación de disponibilidad.
              </p>
            </div>

            <div className="project-meta">
              <Metric value="03" label="core domains" />
              <Metric value="45" label="source files" />
              <Metric value="04" label="test files" />
            </div>

            <div className="project-links">
              <a href="https://github.com/FabianCordobes/jamly" target="_blank" rel="noreferrer">
                Code ↗
              </a>
            </div>
          </div>
        </article>

        <article className="project-chapter project-chapter-commerce">
          <div className="commerce-space">
            <div className="commerce-title-ghost">COMMERCE</div>
            <img className="commerce-shot commerce-shot-a" src={MEDIA.commerceLogin} alt="Login e-commerce" />
            <img className="commerce-shot commerce-shot-b" src={MEDIA.commerceRegister} alt="Registro e-commerce" />
            <img className="commerce-shot commerce-shot-c" src={MEDIA.commerceForgot} alt="Recuperación de acceso e-commerce" />
            <div className="commerce-beam commerce-beam-a" />
            <div className="commerce-beam commerce-beam-b" />
          </div>

          <div className="project-overlay" data-reveal>
            <div>
              <p className="future-kicker">03 · COMMERCE EXPERIENCE</p>
              <h3>E-COMMERCE</h3>
              <p className="project-summary">
                Catálogo, autenticación, carrito, administración y flujo de órdenes.
              </p>
            </div>

            <div className="project-meta">
              <Metric value="08" label="flows" />
              <Metric value="22" label="source files" />
              <Metric value="03" label="auth screens" />
            </div>

            <div className="project-links">
              <a href="https://e-commerce-app-eta-two.vercel.app" target="_blank" rel="noreferrer">
                Live ↗
              </a>
              <a href="https://github.com/FabianCordobes/eCommerceApp" target="_blank" rel="noreferrer">
                Code ↗
              </a>
            </div>
          </div>
        </article>
      </section>

      <div id="architecture">
        <AIArchitectureScene />
      </div>

      <section id="signal" className="future-signal-section">
        <FutureField />
        <div className="future-signal-copy" data-reveal>
          <p className="future-kicker">FORMAS DE TRABAJO</p>
          <h2 className="five-d-heading five-d-heading-center" data-text="ELEGÍ EL PUNTO DE PARTIDA">
            ELEGÍ EL PUNTO DE PARTIDA
          </h2>
        </div>

        <div className="future-signal-inner" data-reveal>
          <SmartProjectBrief />
        </div>
      </section>

      <section className="future-manifesto">
        <div className="future-manifesto-caption">Experiencias que representan una marca.</div>
        <div className="future-manifesto-line">WEB</div>
        <div className="future-manifesto-caption future-manifesto-caption-shift">
          Productos que operan, conectan y evolucionan.
        </div>
        <div className="future-manifesto-line future-manifesto-line-shift">APPS</div>
        <div className="future-manifesto-caption">Sistemas inteligentes integrados al negocio.</div>
        <div className="future-manifesto-line future-manifesto-line-accent">AI</div>
      </section>

      <section id="contact" className="future-contact">
        <div className="future-contact-copy" data-reveal>
          <p className="future-kicker">NUEVO PROYECTO</p>
          <h2 className="five-d-heading" data-text="LLEVÁ TU IDEA A PRODUCCIÓN">
            LLEVÁ TU IDEA A PRODUCCIÓN
          </h2>
          <p>Compartí el contexto y definimos una dirección clara para construirlo.</p>
        </div>

        <LeadForm />
      </section>

      <footer className="future-footer">
        <p>© {new Date().getFullYear()} Fabián Cordobés</p>
        <div>
          <a href="/portfolio">Portfolio</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="project-metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
