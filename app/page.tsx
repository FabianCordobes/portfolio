import LeadForm from "../components/LeadForm";
import ExperienceLayer from "../components/ExperienceLayer";
import LivingField from "../components/LivingField";
import ServiceFlow from "../components/ServiceFlow";
import KineticType from "../components/KineticType";
import BrandCredits from "../components/BrandCredits";
import AppliedIntelligence from "../components/AppliedIntelligence";
import SelectedWork from "../components/SelectedWork";
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

export default function Home() {
  return (
    <main className="living-site">
      <ExperienceLayer />

      <header className="living-nav">
        <a href="#home" className="living-brand">
          FABIÁN<span>.</span>
        </a>

        <nav>
          <a href="#services">Servicios</a>
          <a href="#work">Proyectos</a>
          <a href="/portfolio">Portfolio</a>
        </nav>

        <a href="#contact" className="nav-project-link">
          Solicitar propuesta ↗
        </a>
      </header>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-live"
        aria-label="Abrir conversación por WhatsApp"
      >
        <span className="whatsapp-live-pulse" />
        <span className="whatsapp-live-icon"><WhatsAppMark /></span>
        <span className="whatsapp-live-label">WhatsApp</span>
      </a>

      <section id="home" className="living-hero">
        <LivingField />

        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-horizon" />
          <div className="hero-film-light hero-film-light-a" />
          <div className="hero-film-light hero-film-light-b" />
          <div className="hero-anamorphic" />
          <div className="hero-ai-veil" />
          <div className="hero-chroma hero-chroma-a" />
          <div className="hero-chroma hero-chroma-b" />
          <div className="hero-scan-volume" />
          <div className="hero-data-streak streak-one" />
          <div className="hero-data-streak streak-two" />
          <div className="hero-data-streak streak-three" />
        </div>

        <div className="hero-human-system" aria-hidden="true">
          <div className="hero-portrait">
            <img src={HERO_IMAGE} alt="" />
            <div className="hero-portrait-wash" />
            <div className="hero-portrait-edge" />
          </div>

          <div className="hero-sculpture">
            <div className="sculpture-haze" />
            <div className="sculpture-plane plane-one" />
            <div className="sculpture-plane plane-two" />
            <div className="sculpture-plane plane-three" />
            <div className="sculpture-arc arc-one" />
            <div className="sculpture-arc arc-two" />
            <div className="sculpture-core">
              <span />
              <i />
              <b />
            </div>
            <div className="sculpture-signal signal-one" />
            <div className="sculpture-signal signal-two" />
          </div>
        </div>

        <div className="section-shell hero-content">
          <div className="hero-overline hero-reveal hero-reveal-1">
            <span className="live-dot" />
            DESIGN · DEVELOPMENT · DIGITAL GROWTH
          </div>

          <div className="hero-title-wrap">
            <h1 className="hero-title">
              <span className="hero-reveal hero-reveal-2">PRODUCTOS</span>
              <span className="hero-reveal hero-reveal-3">DIGITALES</span>
            </h1>

            <p className="hero-intro hero-reveal hero-reveal-4">
              Landing pages, sitios web, e-commerce, aplicaciones y automatizaciones
              creadas para captar atención, generar oportunidades y acompañar el crecimiento.
            </p>
          </div>

          <div className="hero-footer hero-reveal hero-reveal-5">
            <div className="hero-actions">
              <a href="#services" className="hero-button hero-button-primary">
                Ver servicios <span>↓</span>
              </a>
              <a href="#contact" className="hero-button">
                Solicitar propuesta <span>↗</span>
              </a>
            </div>

            <div className="hero-signature">
              <strong>Fabián Cordobés</strong>
              <span>Full-Stack Developer · Buenos Aires</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>SCROLL TO ENTER</span>
          <i />
        </div>
      </section>

      <KineticType />

      <section className="statement-section">
        <div className="section-shell statement-grid" data-reveal>
          <p className="micro-label">PRESENCIA DIGITAL</p>
          <h2>
            Diseño que capta.<br />
            <span>Tecnología que convierte.</span>
          </h2>
          <p>
            Cada sección guía la atención hacia una acción concreta. Diseño,
            desarrollo y movimiento trabajan juntos para generar oportunidades.
          </p>
        </div>
      </section>

      <BrandCredits />

      <ServiceFlow />

      <SelectedWork />

      <AppliedIntelligence />

      <section id="contact" className="contact-section">
        <div className="section-shell contact-heading" data-reveal>
          <p className="micro-label">NUEVO PROYECTO</p>
          <h2>Convirtamos tu idea<br /><span>en un producto listo para crecer.</span></h2>
          <p>
            Landing page, sitio web, e-commerce, aplicación, automatización o
            mantenimiento. Contame qué querés construir y preparo una propuesta.
          </p>
        </div>

        <div className="section-shell contact-form-wrap" data-reveal>
          <LeadForm />
        </div>
      </section>

      <footer className="living-footer">
        <div className="section-shell living-footer-inner">
          <div>
            <strong>FABIÁN CORDOBÉS</strong>
            <span>DESIGN · DEVELOPMENT · DIGITAL EXPERIENCES</span>
          </div>
          <div>
            <a href="/portfolio">Portfolio</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p>© {new Date().getFullYear()}</p>
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
