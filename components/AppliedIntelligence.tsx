import LivingField from "./LivingField";

export default function AppliedIntelligence() {
  return (
    <section className="applied-intelligence">
      <LivingField />

      <div className="ai-cinema-bg" aria-hidden="true">
        <div className="ai-cinema-type ai-cinema-type-a">
          INTELIGENCIA APLICADA · AUTOMATIZACIÓN · DATOS · REALTIME ·
        </div>
        <div className="ai-cinema-type ai-cinema-type-b">
          SYSTEMS · WORKFLOWS · APIs · SIGNAL · LOGIC ·
        </div>

        <div className="ai-frame-burn ai-frame-burn-a" />
        <div className="ai-frame-burn ai-frame-burn-b" />
        <div className="ai-chromatic-sheet ai-sheet-a" />
        <div className="ai-chromatic-sheet ai-sheet-b" />
        <div className="ai-depth-grid" />
        <div className="ai-film-scan" />
      </div>

      <div className="section-shell ai-cinema-layout">
        <div className="ai-cinema-copy" data-reveal>
          <p className="micro-label">INTELIGENCIA APLICADA</p>
          <h2>
            Menos trabajo manual.<br />
            <span>Más capacidad para avanzar.</span>
          </h2>
          <p>
            Integro herramientas, datos y automatizaciones para reducir tareas repetitivas, mejorar tiempos de respuesta y hacer que la operación acompañe el crecimiento.
          </p>

          <div className="ai-capability-line">
            <span>APIs</span>
            <span>WORKFLOWS</span>
            <span>WEBSOCKET</span>
            <span>DATA</span>
          </div>
        </div>

        <div className="ai-cinema-machine" data-reveal aria-hidden="true">
          <div className="ai-machine-glow" />
          <div className="ai-machine-lens">
            <div className="ai-lens-core" />
            <div className="ai-lens-refraction refraction-a" />
            <div className="ai-lens-refraction refraction-b" />
            <div className="ai-lens-refraction refraction-c" />
          </div>

          <div className="ai-stream stream-a"><i /><i /><i /><i /></div>
          <div className="ai-stream stream-b"><i /><i /><i /><i /><i /></div>
          <div className="ai-stream stream-c"><i /><i /><i /></div>

          <div className="ai-signal-rail rail-a">
            <span>INPUT / DATA</span>
            <b />
          </div>
          <div className="ai-signal-rail rail-b">
            <span>PROCESS / LOGIC</span>
            <b />
          </div>
          <div className="ai-signal-rail rail-c">
            <span>OUTPUT / ACTION</span>
            <b />
          </div>

          <div className="ai-sweep ai-sweep-a" />
          <div className="ai-sweep ai-sweep-b" />
          <div className="ai-pulse-wave pulse-wave-a" />
          <div className="ai-pulse-wave pulse-wave-b" />
        </div>
      </div>
    </section>
  );
}
