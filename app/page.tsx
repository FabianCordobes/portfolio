import LeadForm from "../components/LeadForm";
import ExperienceLayer from "../components/ExperienceLayer";
import FutureField from "../components/FutureField";
import CinematicPortal from "../components/CinematicPortal";
import AIArchitectureScene from "../components/AIArchitectureScene";
import SelectedWorkShowcase from "../components/SelectedWorkShowcase";
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

const SERVICES = [
  {
    id: "01",
    title: "Landing Page",
    statement: "Presentar. Impactar. Convertir.",
    description:
      "Una página enfocada en comunicar una propuesta con claridad y transformar atención en oportunidades.",
  },
  {
    id: "02",
    title: "Sitio Web",
    statement: "Identidad. Presencia. Evolución.",
    description:
      "Un sitio profesional para representar una marca, ordenar contenido y acompañar su crecimiento.",
  },
  {
    id: "03",
    title: "E-commerce",
    statement: "Descubrir. Elegir. Comprar.",
    description:
      "Una experiencia comercial fluida desde el catálogo hasta la gestión de órdenes.",
  },
  {
    id: "04",
    title: "Aplicación / Sistema",
    statement: "Producto. Operación. Datos.",
    description:
      "Aplicaciones a medida con interfaces, lógica de negocio, integraciones y persistencia.",
  },
  {
    id: "05",
    title: "Automatización",
    statement: "Conectar. Ejecutar. Escalar.",
    description:
      "Flujos que conectan herramientas, información y acciones para acelerar la operación.",
  },
  {
    id: "06",
    title: "Mantenimiento",
    statement: "Continuidad. Mejora. Expansión.",
    description:
      "Evolución técnica, optimización y nuevas funcionalidades para productos digitales activos.",
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
          <a href="#work">Trabajos</a>
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
        <span className="whatsapp-icon">
          <WhatsAppMark />
        </span>
        <span className="whatsapp-label">WhatsApp</span>
      </a>

      <section id="home" className="future-hero focus-hero">
        <FutureField />
        <CinematicPortal />

        <div className="future-hero-photo" aria-hidden="true">
          <img src={HERO_IMAGE} alt="" />
          <div className="future-hero-photo-mask" />
        </div>

        <div className="future-hero-content">
          <div className="future-eyebrow">
            <span className="signal-dot" />
            DISEÑO + DESARROLLO WEB
          </div>

          <h1 className="five-d-title">
            <span data-text="EXPERIENCIAS">EXPERIENCIAS</span>
            <span data-text="DIGITALES">DIGITALES</span>
          </h1>

          <div className="future-hero-bottom">
            <p>
              Landing pages, sitios web, e-commerce, aplicaciones, automatización
              y mantenimiento para marcas, profesionales y empresas.
            </p>

            <div className="future-hero-actions">
              <a href="#services" className="future-cta future-cta-primary">
                Ver servicios <span>↓</span>
              </a>
              <a href="#contact" className="future-cta">
                Iniciar proyecto <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="service-stack">
        <div className="service-stack-header" data-reveal>
          <p className="future-kicker">SERVICIOS</p>
          <h2>
            Una presencia digital que se siente
            <span> propia.</span>
          </h2>
        </div>

        <div className="service-stack-list">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="service-stack-card"
              style={{ top: `calc(76px + ${index * 18}px)` }}
            >
              <div className="service-stack-copy">
                <span className="service-stack-index">{service.id}</span>
                <h3>{service.title}</h3>
                <p className="service-stack-statement">{service.statement}</p>
                <p className="service-stack-description">{service.description}</p>
                <a href="#contact">Crear este proyecto ↗</a>
              </div>

              <div className="service-stack-sigil" aria-hidden="true">
                <div className="sigil-ring sigil-ring-a" />
                <div className="sigil-ring sigil-ring-b" />
                <div className="sigil-core" />
                <span>{service.id}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SelectedWorkShowcase />

      <AIArchitectureScene />

      <section id="contact" className="future-contact clean-contact">
        <div className="future-contact-copy" data-reveal>
          <p className="future-kicker">NUEVO PROYECTO</p>
          <h2 className="five-d-heading" data-text="CREEMOS ALGO MEMORABLE">
            CREEMOS ALGO MEMORABLE
          </h2>
          <p>
            Compartí tu idea y definimos una dirección clara para llevarla a una
            experiencia digital profesional.
          </p>
        </div>

        <LeadForm />
      </section>

      <footer className="future-footer">
        <p>© {new Date().getFullYear()} Fabián Cordobés</p>
        <div>
          <a href="/portfolio">Portfolio</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.93 7.93 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.25a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.591-6.592 6.591Zm3.615-4.934c-.197-.1-1.17-.578-1.353-.646-.182-.066-.315-.1-.445.1-.133.197-.513.646-.627.775-.115.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.984-.59-.525-.986-1.17-1.1-1.37-.116-.198-.013-.306.084-.404.09-.088.2-.23.3-.345.098-.115.132-.198.198-.33.066-.133.033-.25-.017-.35-.05-.1-.445-1.078-.61-1.475-.161-.387-.325-.334-.445-.34-.115-.007-.247-.007-.38-.007a.729.729 0 0 0-.528.247c-.182.198-.695.68-.695 1.657s.712 1.916.81 2.049c.1.132 1.4 2.137 3.4 2.996.476.205.847.328 1.136.42.477.15.91.13 1.253.079.383-.058 1.17-.48 1.335-.943.164-.462.164-.858.115-.943-.05-.084-.182-.132-.38-.23Z"
      />
    </svg>
  );
}
