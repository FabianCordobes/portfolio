import LivingField from "./LivingField";

export default function AppliedIntelligence() {
  return (
    <section className="applied-intelligence">
      <LivingField />

      <div className="ai-cinema-bg" aria-hidden="true">
        <div className="ai-cinema-type ai-cinema-type-a">
          LEADFLOW · CAPTURA · CONTEXTO · PRIORIDAD · SEGUIMIENTO ·
        </div>
        <div className="ai-cinema-type ai-cinema-type-b">
          UTM · FORMULARIO · SCORING · TRELLO · AUTOMATION ·
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
          <p className="micro-label">SISTEMA LEADFLOW</p>
          <h2>
            De una visita a una oportunidad.<br />
            <span>Sin perder el contexto en el camino.</span>
          </h2>
          <p>
            El sistema registra de dónde llega la consulta, interpreta qué necesita el prospecto, asigna señales de prioridad y organiza la información para que el seguimiento empiece con contexto.
          </p>

          <div className="ai-capability-line">
            <span>UTM TRACKING</span>
            <span>NEED DETECTION</span>
            <span>LEAD SCORE</span>
            <span>TRELLO</span>
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
            <span>VISIT / SOURCE</span>
            <b />
          </div>
          <div className="ai-signal-rail rail-b">
            <span>ANALYZE / SCORE</span>
            <b />
          </div>
          <div className="ai-signal-rail rail-c">
            <span>PIPELINE / FOLLOW-UP</span>
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
