"use client";

const BRANDS = [
  { name: "WAYFAIR", mark: "W", meta: "PRODUCT TEAMS" },
  { name: "ISCX", mark: "IX", meta: "INSURANCE SOFTWARE" },
  { name: "SOCIAL WAVE", mark: "SW", meta: "FRONT-END" },
  { name: "BUILDVISION", mark: "BV", meta: "PRODUCT DEVELOPMENT" },
  { name: "HENRY", mark: "H", meta: "FULL-STACK" },
];

function BrandItem({ brand }: { brand: (typeof BRANDS)[number] }) {
  return (
    <div className="brand-credit-item">
      <span className="brand-credit-mark">{brand.mark}</span>
      <span className="brand-credit-copy">
        <strong>{brand.name}</strong>
        <small>{brand.meta}</small>
      </span>
    </div>
  );
}

function BrandTrack({ reverse = false }: { reverse?: boolean }) {
  const repeated = [...BRANDS, ...BRANDS];
  return (
    <div className={reverse ? "brand-credit-track brand-credit-track-reverse" : "brand-credit-track"}>
      <div className="brand-credit-track-inner">
        {repeated.map((brand, index) => (
          <BrandItem key={`${brand.name}-${index}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default function BrandCredits() {
  return (
    <section className="brand-credits">
      <div className="section-shell brand-credits-head" data-reveal>
        <p className="micro-label">EXPERIENCIA PROFESIONAL</p>
        <div>
          <h2>Equipos, productos<br /><span>y tecnología real.</span></h2>
          <p>
            Experiencia desarrollando producto y software en distintos equipos,
            contextos y escalas.
          </p>
        </div>
      </div>

      <div className="brand-credits-stage" aria-label="Marcas y equipos con experiencia profesional">
        <BrandTrack />
        <BrandTrack reverse />
      </div>
    </section>
  );
}
