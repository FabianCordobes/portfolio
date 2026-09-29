export default function AIArchitectureScene() {
  return (
    <section className="ai-cinema">
      <div className="ai-cinema-copy" data-reveal>
        <p className="future-kicker">TECH LAYER</p>
        <h2>INTELLIGENCE<br />IN MOTION</h2>
        <p>
          IA, realtime y arquitectura moderna integrados como una sola capa
          visual y técnica.
        </p>
      </div>

      <div className="ai-cinema-stage" data-reveal aria-hidden="true">
        <div className="ai-cinema-haze" />
        <div className="ai-cinema-ring ai-cinema-ring-a" />
        <div className="ai-cinema-ring ai-cinema-ring-b" />
        <div className="ai-cinema-ring ai-cinema-ring-c" />
        <div className="ai-cinema-core">
          <span>AI</span>
        </div>

        <div className="ai-cinema-label label-a">REALTIME</div>
        <div className="ai-cinema-label label-b">DATA</div>
        <div className="ai-cinema-label label-c">SERVICES</div>
        <div className="ai-cinema-label label-d">SYSTEMS</div>

        <div className="ai-cinema-scan" />
        <div className="ai-cinema-beam" />
      </div>

      <div className="ai-cinema-caption" data-reveal>
        <span>Microservices</span>
        <span>WebSocket</span>
        <span>NoSQL</span>
        <span>MongoDB</span>
        <span>Lodash</span>
      </div>
    </section>
  );
}
