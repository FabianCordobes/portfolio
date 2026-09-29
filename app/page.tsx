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
    title: "LANDING PAGE",
    line: "Presencia. Claridad. Conversión.",
    text: "Una experiencia enfocada en presentar tu propuesta, atraer atención y generar oportunidades.",
    scene: "landing",
  },
  {
    index: "02",
    title: "SITIO WEB",
    line: "Identidad. Contenido. Evolución.",
    text: "Una presencia digital completa para comunicar valor, construir marca y acompañar el crecimiento.",
    scene: "website",
  },
  {
    index: "03",
    title: "E-COMMERCE",
    line: "Catálogo. Compra. Gestión.",
    text: "Una experiencia comercial conectada desde el descubrimiento hasta la administración.",
    scene: "commerce",
  },
  {
    index: "04",
    title: "APLICACIÓN / SISTEMA",
    line: "Producto. Lógica. Datos.",
    text: "Interfaces, procesos, integraciones y datos trabajando dentro de una experiencia a medida.",
    scene: "application",
  },
  {
    index: "05",
    title: "AUTOMATIZACIÓN",
    line: "Flujos. Conexión. Escala.",
    text: "Procesos digitales que conectan herramientas, información y acciones de forma inteligente.",
    scene: "automation",
  },
  {
    index: "06",
    title: "MANTENIMIENTO",
    line: "Continuidad. Mejora. Evolución.",
    text: "Acompañamiento técnico para mantener, optimizar y ampliar productos digitales en el tiempo.",
    scene: "maintenance",
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
          <a href="#architecture">Tech</a>
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

        <div className="future-hero-content">
          <div className="future-eyebrow">
            <span className="signal-dot" />
            LANDING · WEB · E-COMMERCE · APLICACIONES · AUTOMATIZACIÓN · MANTENIMIENTO
          </div>

          <h1 className="five-d-title">
            <span data-text="EXPERIENCIAS">EXPERIENCIAS</span>
            <span data-text="DIGITALES">DIGITALES</span>
          </h1>

          <div className="future-hero-bottom">
            <p>
              Diseño y desarrollo landing pages, sitios web, e-commerce, aplicaciones,
              automatizaciones y evolución técnica para marcas, profesionales y empresas.
            </p>

            <div className="future-hero-actions">
              <a href="#contact" className="future-cta future-cta-primary">
                Iniciar proyecto <span>↗</span>
              </a>
              <a href="#services" className="future-cta">
                Ver servicios <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="future-side-label" aria-hidden="true">
          DIGITAL EXPERIENCE · PRODUCT · ENGINEERING
        </div>
      </section>

      <section id="services" className="service-cinema">
        <div className="service-cinema-intro" data-reveal>
          <p className="future-kicker">SERVICIOS</p>
          <h2 className="five-d-heading" data-text="SERVICIOS DIGITALES">
            CUATRO FORMAS DE CONSTRUIR
          </h2>
        </div>

        <div className="service-cinema-list">
          {SERVICES.map((service) => (
            <article key={service.index} className="service-chapter">
              <div className="service-copy" data-reveal>
                <span className="service-number">{service.index}</span>
                <h3 className="service-five-d" data-text={service.title}>
                  {service.title}
                </h3>
                <p className="service-line">{service.line}</p>
                <p className="service-description">{service.text}</p>
                <a href="#contact" className="service-action">
                  Crear este proyecto <span>↗</span>
                </a>
              </div>

              <div className={`service-visual service-visual-${service.scene}`} aria-hidden="true">
                <div className="scene-grid" />
                <div className="scene-glow" />

                {service.scene === "landing" && (
                  <>
                    <div className="landing-screen landing-screen-main">
                      <div className="screen-toolbar">
                        <span /><span /><span />
                        <i>brand.com</i>
                      </div>
                      <div className="landing-screen-body">
                        <small>VALUE PROPOSITION</small>
                        <strong>MAKE IT<br />VISIBLE</strong>
                        <div className="landing-cta-demo">START ↗</div>
                      </div>
                    </div>
                    <div className="landing-screen landing-screen-data">
                      <small>CONVERSION SIGNAL</small>
                      <div className="mini-wave">
                        {[38, 62, 48, 72, 58, 86, 73, 94].map((height, index) => (
                          <i key={index} style={{ height: `${height}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="tech-whisper tech-whisper-a">AI_ASSIST / READY</div>
                    <div className="tech-whisper tech-whisper-b">lodash.transform()</div>
                  </>
                )}

                {service.scene === "website" && (
                  <>
                    <div className="site-orbit site-orbit-a" />
                    <div className="site-orbit site-orbit-b" />
                    <div className="site-panel site-panel-a">
                      <small>HOME / EXPERIENCE</small>
                      <strong>BRAND</strong>
                    </div>
                    <div className="site-panel site-panel-b">
                      <small>CONTENT SYSTEM</small>
                      <strong>STORY</strong>
                    </div>
                    <div className="site-panel site-panel-c">
                      <small>CONNECTED PAGES</small>
                      <strong>FLOW</strong>
                    </div>
                    <div className="tech-whisper tech-whisper-a">service.mesh / active</div>
                    <div className="tech-whisper tech-whisper-c">mongo.collection</div>
                  </>
                )}

                {service.scene === "application" && (
                  <>
                    <div className="app-console">
                      <div className="app-console-head">
                        <span>PRODUCT SYSTEM</span>
                        <span className="live-dot">● LIVE</span>
                      </div>
                      <div className="app-console-grid">
                        <div className="app-module app-module-main">
                          <small>REALTIME ACTIVITY</small>
                          <div className="realtime-wave">
                            {[42, 68, 51, 82, 63, 91, 74, 88, 67, 95].map((height, index) => (
                              <i key={index} style={{ height: `${height}%` }} />
                            ))}
                          </div>
                        </div>
                        <div className="app-module">
                          <small>API</small>
                          <strong>REST</strong>
                        </div>
                        <div className="app-module">
                          <small>DATA</small>
                          <strong>NoSQL</strong>
                        </div>
                        <div className="app-module app-module-wide">
                          <small>CHANNEL</small>
                          <strong>WebSocket</strong>
                        </div>
                      </div>
                    </div>
                    <div className="data-packet packet-a" />
                    <div className="data-packet packet-b" />
                    <div className="data-packet packet-c" />
                    <div className="tech-whisper tech-whisper-b">microservice.route()</div>
                  </>
                )}

                {service.scene === "commerce" && (
                  <>
                    <img className="commerce-service-shot commerce-service-a" src={MEDIA.commerceLogin} alt="" />
                    <img className="commerce-service-shot commerce-service-b" src={MEDIA.commerceRegister} alt="" />
                    <img className="commerce-service-shot commerce-service-c" src={MEDIA.commerceForgot} alt="" />
                    <div className="commerce-service-core">
                      <small>COMMERCE FLOW</small>
                      <strong>DISCOVER → BUY → MANAGE</strong>
                    </div>
                    <div className="tech-whisper tech-whisper-a">inventory.sync()</div>
                    <div className="tech-whisper tech-whisper-c">orders.stream</div>
                  </>
                )}

                {service.scene === "automation" && (
                  <>
                    <div className="automation-core">
                      <small>INTELLIGENT FLOW</small>
                      <strong>AUTOMATION</strong>
                      <span>events → rules → actions</span>
                    </div>
                    <div className="automation-node automation-node-a">
                      <small>AI</small><strong>AGENT</strong>
                    </div>
                    <div className="automation-node automation-node-b">
                      <small>REALTIME</small><strong>WS</strong>
                    </div>
                    <div className="automation-node automation-node-c">
                      <small>DATA</small><strong>MONGO</strong>
                    </div>
                    <div className="automation-node automation-node-d">
                      <small>UTILS</small><strong>LODASH</strong>
                    </div>
                    <div className="automation-link automation-link-a"><i /></div>
                    <div className="automation-link automation-link-b"><i /></div>
                    <div className="automation-link automation-link-c"><i /></div>
                    <div className="automation-link automation-link-d"><i /></div>
                    <div className="tech-whisper tech-whisper-a">microservice.execute()</div>
                    <div className="tech-whisper tech-whisper-c">event.stream / active</div>
                  </>
                )}

                {service.scene === "maintenance" && (
                  <>
                    <div className="maintenance-orbit maintenance-orbit-a" />
                    <div className="maintenance-orbit maintenance-orbit-b" />
                    <div className="maintenance-core">
                      <small>DIGITAL PRODUCT</small>
                      <strong>ACTIVE</strong>
                      <div className="maintenance-status">
                        <span><i /> PERFORMANCE</span>
                        <span><i /> EVOLUTION</span>
                        <span><i /> DELIVERY</span>
                      </div>
                    </div>
                    <div className="maintenance-module maintenance-module-a">01 · UPDATE</div>
                    <div className="maintenance-module maintenance-module-b">02 · OPTIMIZE</div>
                    <div className="maintenance-module maintenance-module-c">03 · EXTEND</div>
                    <div className="tech-whisper tech-whisper-b">release.pipeline()</div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="professional-proof">
        <div className="professional-proof-head" data-reveal>
          <p className="future-kicker">PRODUCTOS REALES</p>
          <h2 className="five-d-heading" data-text="DISEÑO + INGENIERÍA">
            DISEÑO + INGENIERÍA
          </h2>
        </div>

        <article className="proof-chapter proof-chapter-jamly">
          <div className="proof-visual">
            <div className="system-orbit system-orbit-a" />
            <div className="system-orbit system-orbit-b" />
            <div className="system-core">
              <div className="system-core-head">
                <span>JAMLY / BOOKING SYSTEM</span>
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
          </div>

          <div className="proof-copy" data-reveal>
            <p className="future-kicker">FULL-STACK PRODUCT</p>
            <h3>JAMLY</h3>
            <p>Sistema de reservas con autenticación, roles y disponibilidad.</p>
            <div className="proof-metrics">
              <Metric value="03" label="core domains" />
              <Metric value="45" label="source files" />
              <Metric value="04" label="test files" />
            </div>
            <a href="https://github.com/FabianCordobes/jamly" target="_blank" rel="noreferrer">
              Ver código ↗
            </a>
          </div>
        </article>

        <article className="proof-chapter proof-chapter-commerce">
          <div className="proof-copy" data-reveal>
            <p className="future-kicker">COMMERCE EXPERIENCE</p>
            <h3>E-COMMERCE</h3>
            <p>Catálogo, autenticación, carrito, administración y órdenes.</p>
            <div className="proof-metrics">
              <Metric value="08" label="flows" />
              <Metric value="22" label="source files" />
              <Metric value="03" label="auth screens" />
            </div>
            <a href="https://e-commerce-app-eta-two.vercel.app" target="_blank" rel="noreferrer">
              Ver producto ↗
            </a>
          </div>

          <div className="proof-visual commerce-proof-space">
            <img className="commerce-proof commerce-proof-a" src={MEDIA.commerceLogin} alt="Login e-commerce" />
            <img className="commerce-proof commerce-proof-b" src={MEDIA.commerceRegister} alt="Registro e-commerce" />
            <img className="commerce-proof commerce-proof-c" src={MEDIA.commerceForgot} alt="Recuperación de acceso e-commerce" />
            <div className="commerce-proof-beam" />
          </div>
        </article>

        <a href="/portfolio" className="portfolio-bridge" data-reveal>
          <span>Más experiencia técnica</span>
          <strong>PORTFOLIO ↗</strong>
        </a>
      </section>

      <div id="architecture">
        <AIArchitectureScene />
      </div>

      <section id="signal" className="future-signal-section">
        <FutureField />
        <div className="future-signal-copy" data-reveal>
          <p className="future-kicker">PUNTO DE PARTIDA</p>
          <h2 className="five-d-heading five-d-heading-center" data-text="ELEGÍ TU PROYECTO">
            ELEGÍ TU PROYECTO
          </h2>
        </div>

        <div className="future-signal-inner" data-reveal>
          <SmartProjectBrief />
        </div>
      </section>

      <section className="future-manifesto">
        <div className="future-manifesto-caption">Experiencias digitales con identidad.</div>
        <div className="future-manifesto-line">WEB</div>
        <div className="future-manifesto-caption future-manifesto-caption-shift">
          Productos conectados con la operación.
        </div>
        <div className="future-manifesto-line future-manifesto-line-shift">APPS</div>
        <div className="future-manifesto-caption">Tecnología integrada a la experiencia.</div>
        <div className="future-manifesto-line future-manifesto-line-accent">MOTION</div>
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
