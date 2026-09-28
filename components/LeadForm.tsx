"use client";

import { FormEvent, useState } from "react";

const SERVICES = [
  "Landing Page",
  "Sitio Web",
  "E-commerce",
  "Aplicación / Sistema",
  "Automatización",
  "Mantenimiento",
  "No estoy seguro",
];

const BUDGETS = [
  "Menos de USD 500",
  "USD 500–1.000",
  "USD 1.000–2.500",
  "USD 2.500–5.000",
  "Más de USD 5.000",
  "Prefiero conversarlo",
];

const DEADLINES = [
  "Lo antes posible",
  "2–4 semanas",
  "1–2 meses",
  "3+ meses",
  "Sin fecha definida",
];

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

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
    "mt-2 w-full rounded-2xl border border-black/15 bg-white/60 px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/45 focus:bg-white/85";

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-black/10 bg-black/[0.055] p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-black/70">
          Nombre *
          <input className={field} name="name" type="text" autoComplete="name" maxLength={120} required placeholder="Tu nombre" />
        </label>

        <label className="text-sm font-medium text-black/70">
          Email *
          <input className={field} name="email" type="email" autoComplete="email" maxLength={180} required placeholder="nombre@email.com" />
        </label>

        <label className="text-sm font-medium text-black/70">
          WhatsApp
          <input className={field} name="phone" type="tel" autoComplete="tel" maxLength={80} placeholder="+54 ..." />
        </label>

        <label className="text-sm font-medium text-black/70">
          Empresa / proyecto
          <input className={field} name="companyOrProject" type="text" maxLength={160} placeholder="Nombre del proyecto" />
        </label>

        <label className="text-sm font-medium text-black/70">
          ¿Qué necesitás? *
          <select className={field} name="requestedService" defaultValue="" required>
            <option value="" disabled>Seleccioná una opción</option>
            {SERVICES.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </label>

        <label className="text-sm font-medium text-black/70">
          Presupuesto aproximado
          <select className={field} name="budgetRange" defaultValue="">
            <option value="">No especificado</option>
            {BUDGETS.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
          </select>
        </label>

        <label className="text-sm font-medium text-black/70 sm:col-span-2">
          ¿Para cuándo lo necesitás?
          <select className={field} name="deadline" defaultValue="">
            <option value="">No especificado</option>
            {DEADLINES.map((deadline) => <option key={deadline} value={deadline}>{deadline}</option>)}
          </select>
        </label>

        <label className="text-sm font-medium text-black/70 sm:col-span-2">
          Contame sobre tu proyecto *
          <textarea
            className={`${field} min-h-36 resize-y`}
            name="message"
            minLength={20}
            maxLength={2500}
            required
            placeholder="Qué querés construir, qué problema necesitás resolver y cualquier contexto que nos ayude a entenderlo."
          />
        </label>

        <label className="sr-only" aria-hidden="true">
          Sitio web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-black/45">
          Usamos estos datos únicamente para evaluar tu proyecto y contactarte.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-w-48 items-center justify-center rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : "Enviar proyecto ↗"}
        </button>
      </div>

      {status === "success" && (
        <p className="mt-5 rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-sm font-medium text-black/75" role="status">
          ¡Listo! Recibí tu consulta. La voy a revisar y te contacto con los próximos pasos.
        </p>
      )}

      {status === "error" && (
        <p className="mt-5 rounded-2xl border border-black/15 bg-white/55 px-4 py-3 text-sm font-medium text-black/75" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
