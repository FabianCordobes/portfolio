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
          <a href="#solutions">Soluciones</a>
          <a href="#work">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="/portfolio">Trabajo realizado</a>
        </nav>

        <a href="#contact" className="nav-project-link">
          Plantear un proyecto ↗
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
            DESARROLLO WEB · APLICACIONES · SISTEMAS
          </div>

          <div className="hero-title-wrap">
            <h1 className="hero-title">
              <span className="hero-reveal hero-reveal-2">CREO</span>
              <span className="hero-reveal hero-reveal-3">SOLUCIONES</span>
              <span className="hero-reveal hero-reveal-3 hero-title-outline">DIGITALES.</span>
            </h1>

            <p className="hero-intro hero-reveal hero-reveal-4">
              Desde una landing o sitio profesional hasta una aplicación o sistema completo. Diseño y desarrollo experiencias digitales que presentan, venden, organizan, conectan y hacen avanzar una operación.
            </p>
          </div>

          <div className="hero-footer hero-reveal hero-reveal-5">
            <div className="hero-actions">
              <a href="#solutions" className="hero-button hero-button-primary">
                Encontrar mi solución <span>↗</span>
              </a>
              <a href="#contact" className="hero-button">
                Hablemos de tu proyecto <span>↗</span>
              </a>
            </div>

            <div className="hero-signature">
              <strong>Fabián Cordobés</strong>
              <span>Full-Stack Developer · Buenos Aires</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>EXPLORAR</span>
          <i />
        </div>
      </section>

      <section className="first-choice" aria-label="Tipos de proyecto">
        <div className="section-shell first-choice-inner">
          <p>¿Qué querés crear?</p>
          <div className="first-choice-links">
            <a href="#services"><span>01</span>Una web</a>
            <a href="#services"><span>02</span>Una tienda</a>
            <a href="#services"><span>03</span>Una aplicación</a>
            <a href="#services"><span>04</span>Un sistema</a>
            <a href="#contact"><span>05</span>Definirlo juntos</a>
          </div>
        </div>
      </section>

      <KineticType />

      <section className="signal-strip" aria-label="Flujo del sistema">
        <div className="signal-strip-track">
          <span>OBJETIVO</span><i>→</i><span>CONTEXTO</span><i>→</i><span>DECISIÓN</span><i>→</i><span>IMPLEMENTACIÓN</span><i>→</i><span>OPERACIÓN</span>
          <b>FROM CONTEXT TO SOFTWARE</b>
        </div>
      </section>

      <section className="statement-section">
        <div className="section-shell statement-grid" data-reveal>
          <p className="micro-label">ENFOQUE</p>
          <h2>
            Cada proyecto necesita una escala distinta.<br />
            <span>La solución crece en proporción a esa necesidad.</span>
          </h2>
          <p>
            Cada proyecto recibe la arquitectura que corresponde a su escala. Defino el alcance según el objetivo, el uso, la etapa actual y la evolución prevista.
          </p>
        </div>
      </section>

      <div id="experience"><BrandCredits /></div>

      <section id="solutions" className="client-spectrum">
        <div className="section-shell client-spectrum-grid" data-reveal>
          <p className="micro-label">PUNTOS DE PARTIDA</p>
          <div>
            <h2>Desde una web puntual<br /><span>hasta un sistema que articula una operación.</span></h2>
            <div className="client-spectrum-cases">
              <article><span>01</span><strong>Quiero crear</strong><p>Una landing, portfolio o sitio institucional para presentar una actividad, servicio o propuesta con claridad.</p></article>
              <article><span>02</span><strong>Quiero evolucionar</strong><p>Un sitio, tienda o aplicación existente que necesita una nueva etapa de diseño, funcionalidad o rendimiento.</p></article>
              <article><span>03</span><strong>Quiero integrar</strong><p>Herramientas, APIs y datos que necesitan integrarse para centralizar información, agilizar procesos y coordinar el trabajo entre sistemas.</p></article>
              <article><span>04</span><strong>Quiero desarrollar</strong><p>Una aplicación o sistema con reglas propias, usuarios, permisos, datos, procesos e integraciones específicas.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="client-spectrum">
        <div className="section-shell client-spectrum-grid" data-reveal>
          <p className="micro-label">NO HACE FALTA LLEGAR CON UNA SOLUCIÓN DEFINIDA</p>
          <div>
            <h2>Podés llegar con una idea,<br /><span>un problema o un sistema que ya existe.</span></h2>
            <div className="client-spectrum-cases">
              <article><span>01</span><strong>Necesito empezar</strong><p>Una presencia web, un MVP o una primera versión que permita validar y operar.</p></article>
              <article><span>02</span><strong>Necesito mejorar</strong><p>Una interfaz, flujo o aplicación existente que necesita evolucionar sin rehacerse sin criterio.</p></article>
              <article><span>03</span><strong>Necesito conectar</strong><p>Datos, APIs, herramientas o procesos que hoy funcionan separados o requieren intervención manual.</p></article>
              <article><span>04</span><strong>Necesito resolver</strong><p>Un problema específico que todavía no tiene una solución técnica definida. El trabajo puede empezar por ahí.</p></article>
            </div>
          </div>
        </div>
      </section>

      <ServiceFlow />

      <SelectedWork />

      <AppliedIntelligence />

      <section id="contact" className="contact-section">
        <div className="section-shell contact-heading" data-reveal>
          <p className="micro-label">CONTEXTO DEL PROYECTO</p>
          <h2>Un buen desarrollo empieza<br /><span>por entender bien el objetivo.</span></h2>
          <p>
            Describí el contexto, el objetivo y las condiciones conocidas. Con esa información puedo evaluar alcance, dependencias y una primera dirección técnica para el proyecto.
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
            <span>SOFTWARE ENGINEERING · WEB SYSTEMS · AUTOMATION</span>
          </div>
          <div>
            <a href="/portfolio">Proyectos</a>
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
