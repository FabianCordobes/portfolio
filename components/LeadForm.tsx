"use client";

import { FormEvent, useEffect, useState } from "react";

const SERVICES = [
  "Landing / sitio web",
  "E-commerce",
  "Aplicación web",
  "Sistema a medida",
  "Integración / automatización",
  "Mejora de un proyecto existente",
  "Quiero orientación para definir la solución",
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
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [attribution, setAttribution] =
    useState<Attribution>(EMPTY_ATTRIBUTION);

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

    const form = event.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setError("El formulario no está disponible temporalmente.");
      return;
    }

    setStatus("sending");
    setError("");

    const formData = new FormData(form);

    // Honeypot: descartar envíos automatizados.
    if (formData.get("website")) {
      setStatus("success");
      return;
    }

    const payload = {
      ...Object.fromEntries(formData.entries()),
      access_key: accessKey,
      subject: "Nueva consulta desde el portfolio",
      from_name: "Portfolio - Formulario de contacto",
      source: attribution.source,
      utmSource: attribution.utmSource,
      utmMedium: attribution.utmMedium,
      utmCampaign: attribution.utmCampaign,
      utmContent: attribution.utmContent,
      landingPath: attribution.landingPath,
      referrer: attribution.referrer,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error("No pudimos enviar tu consulta. Intentá nuevamente.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setError(
        error instanceof Error
          ? error.message
          : "No pudimos enviar tu consulta. Intentá nuevamente.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="future-form">
      <div className="future-form-head">
        <p className="micro-label">PUNTO DE PARTIDA</p>
        <span>~2 min</span>
      </div>

      <div className="future-form-grid">
        <label>
          <span>Nombre</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            maxLength={120}
            required
            placeholder="Tu nombre"
          />
        </label>

        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={180}
            required
            placeholder="nombre@empresa.com"
          />
        </label>

        <label>
          <span>Empresa / proyecto</span>
          <input
            name="companyOrProject"
            type="text"
            maxLength={160}
            placeholder="Nombre"
          />
        </label>

        <label>
          <span>WhatsApp</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={80}
            placeholder="+54 ..."
          />
        </label>

        <label className="future-form-wide">
          <span>¿Qué necesitás?</span>
          <select name="requestedService" defaultValue="" required>
            <option value="" disabled>
              Elegí una opción
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="future-form-wide">
          <span>Contame brevemente el proyecto</span>
          <textarea
            name="message"
            minLength={20}
            maxLength={1800}
            required
            placeholder="Puede ser algo simple: qué querés crear o mejorar, para quién es y qué necesitás que permita hacer."
          />
        </label>

        <label className="sr-only" aria-hidden="true">
          Sitio web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="future-submit"
      >
        {status === "sending" ? "Enviando..." : "Enviar consulta ↗"}
      </button>

      {status === "success" && (
        <p className="future-form-status" role="status">
          Recibido. Voy a revisar el proyecto y te contacto para definir el
          siguiente paso.
        </p>
      )}

      {status === "error" && (
        <p className="future-form-status" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
