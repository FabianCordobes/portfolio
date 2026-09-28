"use client";

import { FormEvent, useEffect, useState } from "react";

const SERVICES = [
  "IA / agentes / automatización inteligente",
  "Crear un producto / MVP",
  "Evolucionar una experiencia digital",
  "Aplicación / sistema",
  "Automatización / integración",
  "Acelerar capacidad técnica",
  "E-commerce",
  "Quiero explorarlo",
];

type Attribution = {
  source: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  landingPath: string;
  referrer: string;
};

const EMPTY_ATTRIBUTION: Attribution = {
  source: "LANDING",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  landingPath: "",
  referrer: "",
};

function normalizeChannel(value: string) {
  const source = value.trim().toLowerCase();
  if (source === "linkedin") return "LINKEDIN";
  if (source === "whatsapp") return "WHATSAPP";
  if (source === "referral" || source === "referido") return "REFERRAL";
  return "LANDING";
}

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [attribution, setAttribution] = useState<Attribution>(EMPTY_ATTRIBUTION);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source") || "";
    setAttribution({
      source: normalizeChannel(utmSource),
      utmSource,
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmContent: params.get("utm_content") || "",
      landingPath: `${window.location.pathname}${window.location.search}`,
      referrer: document.referrer,
    });
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const payload = {
      ...Object.fromEntries(new FormData(form).entries()),
      budgetRange: "",
      deadline: "",
      ...attribution,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Volvamos a intentarlo en un momento.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Volvamos a intentarlo en un momento.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="future-form">
      <div className="future-form-head">
        <p className="future-kicker">START SOMETHING</p>
        <span>~2 min</span>
      </div>

      <div className="future-form-grid">
        <label><span>Nombre</span><input name="name" type="text" autoComplete="name" maxLength={120} required placeholder="Tu nombre" /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" maxLength={180} required placeholder="nombre@empresa.com" /></label>
        <label><span>Empresa / proyecto</span><input name="companyOrProject" type="text" maxLength={160} placeholder="Nombre" /></label>
        <label><span>WhatsApp</span><input name="phone" type="tel" autoComplete="tel" maxLength={80} placeholder="+54 ..." /></label>

        <label className="future-form-wide">
          <span>¿Qué querés explorar?</span>
          <select name="requestedService" defaultValue="" required>
            <option value="" disabled>Elegí una posibilidad</option>
            {SERVICES.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </label>

        <label className="future-form-wide">
          <span>¿Qué imaginás?</span>
          <textarea name="message" minLength={20} maxLength={1800} required placeholder="Una experiencia, un producto, una evolución..." />
        </label>

        <label className="sr-only" aria-hidden="true">
          Sitio web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" disabled={status === "sending"} className="future-submit">
        {status === "sending" ? "Enviando..." : "Quiero verlo tomar forma ↗"}
      </button>

      {status === "success" && <p className="future-form-status" role="status">Recibido. Lo convierto en una primera dirección para conversar.</p>}
      {status === "error" && <p className="future-form-status" role="alert">{error}</p>}
    </form>
  );
}
