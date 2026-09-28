"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Landing Page",
  "Sitio Web",
  "E-commerce",
  "Aplicación / Sistema",
  "Automatización",
  "Mantenimiento",
  "No estoy seguro",
];

const budgetOptions = [
  "Menos de USD 500",
  "USD 500–1.000",
  "USD 1.000–2.500",
  "USD 2.500–5.000",
  "Más de USD 5.000",
  "Prefiero conversarlo",
];

const deadlineOptions = [
  "Lo antes posible",
  "2–4 semanas",
  "1–2 meses",
  "3+ meses",
  "Sin fecha definida",
];

export default function LeadForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "No se pudo enviar la consulta.");
      }

      form.reset();
      setStatus("success");
    } catch (requestError) {
      setStatus("error");
      setError(
        requestError instanceof Error
          ? requestError.message
          : "No se pudo enviar la consulta.",
      );
    }
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-black/15 bg-white/55 px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/45 focus:bg-white/80";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-black/10 bg-black/[0.055] p-5 sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-black/70">
          Nombre *
          <input
            className={inputClass}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Tu nombre"
          />
        </label>

        <label className="text-sm font-medium text-black/70">
          Email *
          <input
            className={inputClass}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={180}
            placeholder="nombre@email.com"
          />
        </label>

        <label className="text-sm font-medium text-black/70">
          WhatsApp
          <input
            className={inputClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={80}
            placeholder="+54 ..."
          />
        </label>

        <label className="text-sm font-medium text-black/70">
          Empresa / proyecto
          <input
            className={inputClass}
            name="companyOrProject"
            type="text"
            maxLength={160}
            placeholder="Nombre del proyecto"
          />
        </label>

        <label className="text-sm font-medium text-black/70">
          ¿Qué necesitás? *
          <select
            className={inputClass}
            name="requestedService"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Seleccioná una opción
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-black/70">
          Presupuesto aproximado
          <select className={inputClass} name="budgetRange" defaultValue="">
            <option value="">No especificado</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-black/70 sm:col-span-2">
          ¿Para cuándo lo necesitás?
          <select className={inputClass} name="deadline" defaultValue="">
            <option value="">No especificado</option>
            {deadlineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-black/70 sm:col-span-2">
          Contame sobre tu proyecto *
          <textarea
            className={`${inputClass} min-h-36 resize-y`}
            name="message"
            required
            minLength={20}
            maxLength={2500}
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
          La consulta se analiza automáticamente para derivarla al servicio y
          responsable correctos. Ningún presupuesto se genera sin revisión humana.
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
        <p
          className="mt-5 rounded-2xl border border-black/10 bg-white/50 px-4 py-3 text-sm font-medium text-black/75"
          role="status"
        >
          ¡Listo! Recibimos tu proyecto. Lo revisamos y te contactamos con los
          próximos pasos.
        </p>
      )}

      {status === "error" && (
        <p
          className="mt-5 rounded-2xl border border-black/15 bg-white/50 px-4 py-3 text-sm font-medium text-black/75"
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
