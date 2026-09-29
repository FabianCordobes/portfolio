"use client";

const TRACK_A = [
  "DIGITAL PRODUCTS",
  "FULL-STACK DEVELOPMENT",
  "AUTOMATION",
  "E-COMMERCE",
  "WEB SYSTEMS",
];

const TRACK_B = [
  "LANDING PAGES",
  "REALTIME",
  "DESIGN SYSTEMS",
  "APPS",
  "INTEGRATIONS",
];

function Track({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items];
  return (
    <div className={reverse ? "kinetic-track kinetic-track-reverse" : "kinetic-track"}>
      <div className="kinetic-track-inner">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <i aria-hidden="true">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function KineticType() {
  return (
    <section className="kinetic-type" aria-label="Capacidades">
      <Track items={TRACK_A} />
      <Track items={TRACK_B} reverse />
    </section>
  );
}
