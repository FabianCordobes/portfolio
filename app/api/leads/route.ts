import { NextResponse } from "next/server";

const TRELLO_NEW_LEADS_LIST_ID = "6abab828d0452e1269349622";

const SERVICE_CODES: Record<string, string> = {
  "Landing Page": "LANDING",
  "Sitio Web": "WEB",
  "E-commerce": "ECOM",
  "Aplicación / Sistema": "APP",
  Automatización: "AUTO",
  Mantenimiento: "MAINT",
  "No estoy seguro": "OTHER",
};

const SOURCE_CHANNELS = new Set([
  "LANDING",
  "LINKEDIN",
  "WHATSAPP",
  "REFERRAL",
  "OTHER",
]);

type LeadInput = {
  name: string;
  email: string;
  phone: string;
  companyOrProject: string;
  requestedService: string;
  budgetRange: string;
  deadline: string;
  message: string;
  website: string;
  source: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  landingPath: string;
  referrer: string;
};

export async function POST(request: Request) {
  try {
    const raw = (await request.json()) as Partial<LeadInput>;

    if (clean(raw.website, 160)) {
      return NextResponse.json({ ok: true });
    }

    const lead = validate(raw);
    const serviceCode = SERVICE_CODES[lead.requestedService] ?? "OTHER";
    const features = detectFeatures(lead.message);
    const score = calculateScore(lead, serviceCode);
    const receivedAt = new Date().toISOString();

    const card = await createTrelloCard({
      lead,
      serviceCode,
      features,
      score,
      receivedAt,
    });

    return NextResponse.json({
      ok: true,
      leadId: card.id,
      priority: score.priority,
      service: serviceCode,
      source: lead.source,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo registrar el lead.";

    if (message.startsWith("VALIDATION:")) {
      return NextResponse.json(
        { ok: false, error: message.replace("VALIDATION:", "").trim() },
        { status: 400 },
      );
    }

    if (message.startsWith("CONFIG:")) {
      console.error(message);
      return NextResponse.json(
        { ok: false, error: "Volvamos a conectarnos en unos minutos." },
        { status: 503 },
      );
    }

    console.error("Lead intake error:", error);
    return NextResponse.json(
      { ok: false, error: "Volvamos a intentarlo en un momento." },
      { status: 500 },
    );
  }
}

function validate(raw: Partial<LeadInput>): LeadInput {
  const requestedSource = clean(raw.source, 40).toUpperCase();

  const lead: LeadInput = {
    name: clean(raw.name, 120),
    email: clean(raw.email, 180).toLowerCase(),
    phone: clean(raw.phone, 80),
    companyOrProject: clean(raw.companyOrProject, 160),
    requestedService: clean(raw.requestedService, 80),
    budgetRange: clean(raw.budgetRange, 80),
    deadline: clean(raw.deadline, 80),
    message: clean(raw.message, 2500),
    website: "",
    source: SOURCE_CHANNELS.has(requestedSource) ? requestedSource : "LANDING",
    utmSource: clean(raw.utmSource, 80),
    utmMedium: clean(raw.utmMedium, 80),
    utmCampaign: clean(raw.utmCampaign, 120),
    utmContent: clean(raw.utmContent, 120),
    landingPath: clean(raw.landingPath, 500),
    referrer: clean(raw.referrer, 500),
  };

  if (!lead.name || !lead.email || !lead.requestedService || !lead.message) {
    throw new Error("VALIDATION: Completá los campos obligatorios.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    throw new Error("VALIDATION: Ingresá un email válido.");
  }

  if (lead.message.length < 20) {
    throw new Error("VALIDATION: Contame un poco más sobre el proyecto.");
  }

  if (!Object.prototype.hasOwnProperty.call(SERVICE_CODES, lead.requestedService)) {
    throw new Error("VALIDATION: Elegí un tipo de servicio válido.");
  }

  return lead;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function detectFeatures(message: string) {
  const text = message.toLowerCase();
  const features = [
    [/whatsapp/, "WhatsApp"],
    [/formulario|contacto/, "Formulario / contacto"],
    [/cat[aá]logo|productos|propiedades/, "Catálogo"],
    [/filtro|buscador|búsqueda/, "Filtros / buscador"],
    [/panel|admin|autogesti[oó]n/, "Panel de administración"],
    [/pago|checkout|mercado ?pago|stripe/, "Pagos / checkout"],
    [/login|usuario|roles|registro/, "Usuarios / autenticación"],
    [/reserva|turno|agenda/, "Reservas / agenda"],
    [/api|integraci[oó]n/, "Integraciones / API"],
  ]
    .filter(([pattern]) => (pattern as RegExp).test(text))
    .map(([, label]) => label as string);

  return features;
}

function calculateScore(lead: LeadInput, serviceCode: string) {
  let value = 0;
  const reasons: string[] = [];

  if (serviceCode !== "OTHER") {
    value += 2;
    reasons.push("necesidad categorizada");
  }

  if (lead.message.length >= 60) {
    value += 2;
    reasons.push("contexto suficiente");
  } else if (lead.message.length >= 30) {
    value += 1;
    reasons.push("contexto inicial");
  }

  if (lead.companyOrProject) {
    value += 2;
    reasons.push("empresa/proyecto identificado");
  }

  if (lead.phone) {
    value += 1;
    reasons.push("canal directo disponible");
  }

  if (lead.source === "LINKEDIN" || lead.source === "WHATSAPP" || lead.source === "REFERRAL") {
    value += 1;
    reasons.push("origen comercial identificado");
  }

  const intentSignals =
    /\b(ia|agente|llm|crear|evolucionar|automatizar|integrar|acelerar|mvp|sistema|aplicaci[oó]n|e-?commerce|experiencia|producto|websocket|microservicio|mongo|nosql)\b/i.test(
      lead.message,
    );

  if (intentSignals) {
    value += 1;
    reasons.push("intención concreta detectada");
  }

  const priceOnly =
    /\b(precio|cu[aá]nto cuesta|valor|tarifa)\b/i.test(lead.message) &&
    lead.message.length < 80;

  if (priceOnly) {
    value -= 2;
    reasons.push("consulta centrada en precio con poco contexto");
  }

  value = Math.max(0, Math.min(10, value));

  const priority =
    value >= 7 ? "ALTA" :
    value >= 5 ? "INTERESANTE" :
    value >= 3 ? "NUTRIR" :
    "BAJA";

  return {
    value,
    priority,
    reason: reasons.length ? reasons.join("; ") : "Falta información para priorizar mejor",
  };
}

async function createTrelloCard({
  lead,
  serviceCode,
  features,
  score,
  receivedAt,
}: {
  lead: LeadInput;
  serviceCode: string;
  features: string[];
  score: { value: number; priority: string; reason: string };
  receivedAt: string;
}) {
  const key = process.env.TRELLO_API_KEY;
  const token = process.env.TRELLO_TOKEN;
  const listId = process.env.TRELLO_LIST_ID || TRELLO_NEW_LEADS_LIST_ID;

  if (!key || !token) {
    throw new Error("CONFIG: Faltan TRELLO_API_KEY o TRELLO_TOKEN.");
  }

  const title = `[${serviceCode}] ${lead.name}${lead.companyOrProject ? ` — ${lead.companyOrProject}` : ""}`;

  const missing = [
    !lead.budgetRange ? "presupuesto" : null,
    !lead.deadline ? "plazo" : null,
    "quién toma la decisión",
  ].filter(Boolean);

  const campaignReference = [
    lead.utmCampaign || null,
    lead.utmContent || null,
  ].filter(Boolean).join(" / ") || "Sin campaña identificada";

  const description = [
    "CONTACTO",
    `Nombre: ${lead.name}`,
    `Email: ${lead.email}`,
    `WhatsApp: ${lead.phone || "No informado"}`,
    `Empresa / proyecto: ${lead.companyOrProject || "No informado"}`,
    "",
    "ORIGEN",
    `Canal: ${lead.source}`,
    `Campaña / referencia: ${campaignReference}`,
    `UTM source: ${lead.utmSource || "No informado"}`,
    `UTM medium: ${lead.utmMedium || "No informado"}`,
    `Landing: ${lead.landingPath || "No informado"}`,
    `Referrer: ${lead.referrer || "No informado"}`,
    `Fecha de ingreso: ${receivedAt}`,
    "",
    "CALIFICACIÓN INICIAL",
    `Servicio principal: ${serviceCode}`,
    `Servicio elegido: ${lead.requestedService}`,
    `Funcionalidades detectadas: ${features.join(", ") || "No detectadas"}`,
    `Presupuesto: ${lead.budgetRange || "No informado"}`,
    `Plazo: ${lead.deadline || "No informado"}`,
    "Decisor: UNKNOWN",
    "",
    "PRIORIZACIÓN",
    `Lead Score inicial: ${score.value}/10`,
    `Prioridad: ${score.priority}`,
    `Motivo: ${score.reason}`,
    `Información faltante: ${missing.join(", ")}`,
    "",
    "GESTIÓN",
    "Responsable: Tamara / New Evolution",
    "Estado: NUEVO",
    "Próxima acción: revisar y comenzar calificación",
    "",
    "TEXTO ORIGINAL",
    lead.message,
  ].join("\n");

  const body = new URLSearchParams({
    idList: listId,
    name: title,
    desc: description,
    pos: "bottom",
    key,
    token,
  });

  const response = await fetch("https://api.trello.com/1/cards", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Trello create card failed:", response.status, detail);
    throw new Error("No se pudo crear la tarjeta en Trello.");
  }

  return (await response.json()) as { id: string; url?: string };
}
