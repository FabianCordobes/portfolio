import { NextResponse } from "next/server";
import {
  analyzeLead,
  scoreLead,
  type LeadInput,
  type LeadAnalysis,
  type LeadScore,
} from "@/lib/leads";

const DEFAULT_TRELLO_LIST_ID = "6abab828d0452e1269349622";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadInput>;

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const input = validateLead(body);
    const analysis = await analyzeLead(input);
    const score = scoreLead(input, analysis);
    const card = await createTrelloCard(input, analysis, score);

    return NextResponse.json({
      ok: true,
      leadId: card.id,
      service: analysis.service,
      priority: score.priority,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo registrar el lead.";

    const status = message.startsWith("CONFIG:")
      ? 503
      : message.startsWith("VALIDATION:")
        ? 400
        : 500;

    return NextResponse.json(
      {
        ok: false,
        error:
          status === 503
            ? "El formulario está en configuración. Probá nuevamente en unos minutos."
            : status === 400
              ? message.replace("VALIDATION:", "").trim()
              : "No pudimos enviar tu consulta. Probá nuevamente.",
      },
      { status },
    );
  }
}

function validateLead(body: Partial<LeadInput>): LeadInput {
  const name = clean(body.name, 120);
  const email = clean(body.email, 180).toLowerCase();
  const requestedService = clean(body.requestedService, 80);
  const message = clean(body.message, 2500);

  if (!name || !email || !requestedService || !message) {
    throw new Error("VALIDATION: Completá los campos obligatorios.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("VALIDATION: Ingresá un email válido.");
  }

  if (message.length < 20) {
    throw new Error(
      "VALIDATION: Contanos un poco más sobre el proyecto (mínimo 20 caracteres).",
    );
  }

  return {
    name,
    email,
    requestedService,
    message,
    phone: clean(body.phone, 80),
    companyOrProject: clean(body.companyOrProject, 160),
    budgetRange: clean(body.budgetRange, 80),
    deadline: clean(body.deadline, 80),
    website: clean(body.website, 160),
  };
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

async function createTrelloCard(
  input: LeadInput,
  analysis: LeadAnalysis,
  score: LeadScore,
) {
  const accessToken = process.env.TRELLO_ACCESS_TOKEN;
  const apiKey = process.env.TRELLO_API_KEY;
  const legacyToken = process.env.TRELLO_TOKEN;

  if (!accessToken && !(apiKey && legacyToken)) {
    throw new Error(
      "CONFIG: Falta configurar TRELLO_ACCESS_TOKEN o TRELLO_API_KEY + TRELLO_TOKEN.",
    );
  }

  const listId = process.env.TRELLO_LIST_ID ?? DEFAULT_TRELLO_LIST_ID;
  const receivedAt = new Date().toISOString();
  const name = `[${analysis.service}] ${input.name}${
    input.companyOrProject ? ` — ${input.companyOrProject}` : ""
  }`;

  const desc = buildCardDescription(input, analysis, score, receivedAt);
  const url = new URL("https://api.trello.com/1/cards");
  url.searchParams.set("idList", listId);

  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  } else {
    url.searchParams.set("key", apiKey!);
    url.searchParams.set("token", legacyToken!);
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name,
      desc,
      pos: "bottom",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Trello respondió con estado ${response.status}`);
  }

  return (await response.json()) as { id: string; url?: string };
}

function buildCardDescription(
  input: LeadInput,
  analysis: LeadAnalysis,
  score: LeadScore,
  receivedAt: string,
) {
  const lines = [
    "CONTACTO",
    `Nombre: ${input.name}`,
    `Email: ${input.email}`,
    `WhatsApp: ${input.phone || "No informado"}`,
    `Empresa / proyecto: ${input.companyOrProject || "No informado"}`,
    "",
    "ORIGEN",
    "Canal: LANDING",
    `Fecha de ingreso: ${receivedAt}`,
    "",
    "CALIFICACIÓN",
    `Servicio principal: ${analysis.service}`,
    `Servicios secundarios: ${analysis.secondaryServices.join(", ") || "Ninguno"}`,
    `Industria: ${analysis.industry || "No informada"}`,
    `Objetivo: ${analysis.objective}`,
    "Funcionalidades detectadas:",
    ...(analysis.features.length
      ? analysis.features.map((feature) => `- ${feature}`)
      : ["- No detectadas"]),
    `Presupuesto: ${input.budgetRange || "No informado"}`,
    `Plazo: ${input.deadline || "No informado"}`,
    `Decisor: ${analysis.decisionMaker}`,
    "",
    "IA",
    `Resumen: ${analysis.summary}`,
    `Lead Score: ${score.leadScore}/10`,
    `Prioridad: ${score.priority}`,
    `Confianza: ${analysis.confidence}`,
    `Motivo del score: ${score.scoreReason}`,
    `Motivo de clasificación: ${analysis.serviceReason}`,
    "Información faltante:",
    ...(analysis.missingInformation.length
      ? analysis.missingInformation.map((item) => `- ${item}`)
      : ["- Ninguna crítica"]),
    "Preguntas sugeridas:",
    ...(analysis.suggestedQuestions.length
      ? analysis.suggestedQuestions.map((item, index) => `${index + 1}. ${item}`)
      : ["- Lead listo para revisión"]),
    "",
    "GESTIÓN",
    "Responsable: Tamara / New Evolution",
    "Estado: NUEVO",
    "Próxima acción: Revisar lead y borrador de respuesta",
    "",
    "TEXTO ORIGINAL",
    input.message,
  ];

  return lines.join("\n");
}
