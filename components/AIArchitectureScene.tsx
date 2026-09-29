export default function AIArchitectureScene() {
  const services = [
    { label: "AI ORCHESTRATOR", detail: "Agents · tools · context", className: "ai-node ai-node-core" },
    { label: "MICROSERVICE 01", detail: "Business logic", className: "ai-node ai-node-a" },
    { label: "MICROSERVICE 02", detail: "Automation", className: "ai-node ai-node-b" },
    { label: "MICROSERVICE 03", detail: "Integrations", className: "ai-node ai-node-c" },
    { label: "WEBSOCKET", detail: "Realtime channel", className: "ai-node ai-node-d" },
    { label: "NOSQL", detail: "MongoDB · DynamoDB", className: "ai-node ai-node-e" },
    { label: "LODASH", detail: "Utility layer", className: "ai-node ai-node-f" },
  ];

  return (
    <section className="ai-architecture" aria-label="Arquitectura digital con inteligencia artificial">
      <div className="ai-architecture-copy" data-reveal>
        <p className="future-kicker">ARQUITECTURA AVANZADA</p>
        <h2 className="five-d-heading" data-text="IA APLICADA AL PRODUCTO">
          IA APLICADA AL PRODUCTO
        </h2>
        <p className="ai-architecture-question">
          Agentes, microservicios, WebSocket y datos NoSQL conectados para construir sistemas que responden en tiempo real.
        </p>
      </div>

      <div className="ai-architecture-stage" data-reveal>
        <div className="ai-neural-grid" aria-hidden="true" />
        <div className="ai-data-wave ai-data-wave-a" aria-hidden="true" />
        <div className="ai-data-wave ai-data-wave-b" aria-hidden="true" />
        <div className="ai-data-wave ai-data-wave-c" aria-hidden="true" />

        <div className="ai-core-halo ai-core-halo-a" aria-hidden="true" />
        <div className="ai-core-halo ai-core-halo-b" aria-hidden="true" />
        <div className="ai-core-halo ai-core-halo-c" aria-hidden="true" />

        {services.map((service) => (
          <div key={service.label} className={service.className}>
            <span className="ai-node-light" />
            <small>{service.label}</small>
            <strong>{service.detail}</strong>
          </div>
        ))}

        <div className="ai-link ai-link-1"><i /></div>
        <div className="ai-link ai-link-2"><i /></div>
        <div className="ai-link ai-link-3"><i /></div>
        <div className="ai-link ai-link-4"><i /></div>
        <div className="ai-link ai-link-5"><i /></div>
        <div className="ai-link ai-link-6"><i /></div>

        <div className="ai-stream ai-stream-left" aria-hidden="true">
          <span>agent.invoke()</span>
          <span>socket.emit()</span>
          <span>service.route()</span>
          <span>mongo.write()</span>
        </div>

        <div className="ai-stream ai-stream-right" aria-hidden="true">
          <span>context.ready</span>
          <span>realtime.connected</span>
          <span>vector.signal</span>
          <span>response.stream</span>
        </div>
      </div>

      <div className="ai-capabilities" data-reveal>
        <span>AI agents</span>
        <span>LLM orchestration</span>
        <span>Microservices</span>
        <span>WebSocket</span>
        <span>NoSQL</span>
        <span>MongoDB</span>
        <span>DynamoDB</span>
        <span>Lodash</span>
      </div>
    </section>
  );
}
