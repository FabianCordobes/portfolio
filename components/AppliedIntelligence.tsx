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
          <p className="micro-label">CASO IMPLEMENTADO · LEADFLOW</p>
          <h2>
            Captura, clasificación<br />
            <span>y trazabilidad de consultas.</span>
          </h2>
          <p>
            LeadFlow es una implementación de este sitio: conserva atribución UTM y referrer, procesa el contenido enviado, detecta requerimientos, calcula una señal de prioridad y genera un registro estructurado para seguimiento.
          </p>

          <div className="ai-capability-line">
            <span>UTM TRACKING</span>
            <span>REQUIREMENT PARSING</span>
            <span>PRIORITY SIGNAL</span>
            <span>TRELLO</span>
          </div>

          <div className="leadflow-sequence" aria-label="Cómo funciona LeadFlow">
            <div><b>01</b><span>INGESTA</span><small>UTM + referrer + payload</small></div>
            <div><b>02</b><span>ANÁLISIS</span><small>Requerimientos detectados</small></div>
            <div><b>03</b><span>CLASIFICA</span><small>Score + prioridad</small></div>
            <div><b>04</b><span>REGISTRA</span><small>Trello + contexto</small></div>
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
