"use client";

import { FormEvent, useEffect, useState } from "react";

const SERVICES = [
  "Lanzar un producto / MVP",
  "Mejorar una experiencia digital",
  "Aplicación / sistema interno",
  "Automatización / integración",
  "Sumar capacidad técnica al equipo",
  "E-commerce",
  "No estoy seguro todavía",
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
        throw new Error(data.error || "No se pudo enviar la consulta.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No se pudo enviar la consulta.");
    }
  }

  const field =
    "mt-2 w-full rounded-2xl border border-black/15 bg-white/60 px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/45 focus:bg-white/90";

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-black/10 bg-black/[0.055] p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">Brief rápido</p>
          <p className="mt-1 text-sm font-medium text-black/70">Lo esencial para entender si hay encaje.</p>
        </div>
        <span className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-black/45">~2 min</span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-black/70">
          Nombre *
          <input className={field} name="name" type="text" autoComplete="name" maxLength={120} required placeholder="Tu nombre" />
        </label>

        <label className="text-sm font-medium text-black/70">
          Email *
          <input className={field} name="email" type="email" autoComplete="email" maxLength={180} required placeholder="nombre@empresa.com" />
        </label>

        <label className="text-sm font-medium text-black/70">
          Empresa / proyecto
          <input className={field} name="companyOrProject" type="text" maxLength={160} placeholder="Nombre" />
        </label>

        <label className="text-sm font-medium text-black/70">
          WhatsApp
          <input className={field} name="phone" type="tel" autoComplete="tel" maxLength={80} placeholder="+54 ..." />
        </label>

        <label className="text-sm font-medium text-black/70 sm:col-span-2">
          ¿Qué necesitás destrabar? *
          <select className={field} name="requestedService" defaultValue="" required>
            <option value="" disabled>Elegí la más cercana</option>
            {SERVICES.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </label>

        <label className="text-sm font-medium text-black/70 sm:col-span-2">
          Contexto *
          <textarea
            className={`${field} min-h-28 resize-y`}
            name="message"
            minLength={20}
            maxLength={1800}
            required
            placeholder="¿Qué está pasando hoy y qué debería cambiar?"
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
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:scale-[1.01] disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar contexto ↗"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-sm font-medium text-black/75" role="status">
          Listo. Recibí el contexto y te contacto con un próximo paso concreto.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-2xl border border-black/15 bg-white/55 px-4 py-3 text-sm font-medium text-black/75" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
