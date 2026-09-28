import { generateText, Output } from "ai";
import { z } from "zod";

export const serviceValues = [
  "LANDING",
  "WEB",
  "ECOM",
  "APP",
  "AUTO",
  "MAINT",
  "OTHER",
] as const;

export type ServiceCode = (typeof serviceValues)[number];
export type Priority = "ALTA" | "INTERESANTE" | "NUTRIR" | "BAJA";
export type DecisionMaker = "YES" | "NO" | "UNKNOWN";

export type LeadInput = {
  name: string;
  email: string;
  phone?: string;
  companyOrProject?: string;
  requestedService: string;
  message: string;
  budgetRange?: string;
  deadline?: string;
  website?: string;
};

export type LeadAnalysis = {
  service: ServiceCode;
  secondaryServices: ServiceCode[];
  industry: string;
  objective: string;
  features: string[];
  decisionMaker: DecisionMaker;
  summary: string;
  missingInformation: string[];
  suggestedQuestions: string[];
  confidence: number;
  serviceReason: string;
};

export type LeadScore = {
  leadScore: number;
  priority: Priority;
  scoreReason: string;
};

const serviceSchema = z.enum(serviceValues);

const analysisSchema = z.object({
  service: serviceSchema,
  secondaryServices: z.array(serviceSchema),
  industry: z.string(),
  objective: z.string(),
  features: z.array(z.string()),
  decisionMaker: z.enum(["YES", "NO", "UNKNOWN"]),
  summary: z.string(),
  missingInformation: z.array(z.string()),
  suggestedQuestions: z.array(z.string()).max(3),
  confidence: z.number().min(0).max(1),
  serviceReason: z.string(),
});

const serviceMap: Record<string, ServiceCode> = {
  "Landing Page": "LANDING",
  "Sitio Web": "WEB",
  "E-commerce": "ECOM",
  "Aplicación / Sistema": "APP",
  Automatización: "AUTO",
  Mantenimiento: "MAINT",
};

export async function analyzeLead(input: LeadInput): Promise<LeadAnalysis> {
  try {
    const result = await generateText({
      model: process.env.LEAD_AI_MODEL ?? "openai/gpt-5-mini",
      output: Output.object({ schema: analysisSchema }),
      system: [
        "Sos un analista comercial para una agencia de desarrollo web.",
        "Extraé y clasificá información sin inventar datos.",
        "Elegí un único servicio principal entre LANDING, WEB, ECOM, APP, AUTO, MAINT y OTHER.",
        "LANDING: una página enfocada en campaña, lanzamiento o conversión.",
        "WEB: sitio institucional, corporativo, profesional o portfolio.",
        "ECOM: tienda online, catálogo con checkout o pagos.",
        "APP: SaaS, dashboard, marketplace, sistema interno, usuarios/roles o lógica de negocio.",
        "AUTO: automatización, integraciones, IA aplicada o reducción de trabajo manual.",
        "MAINT: mantenimiento o evolución de un producto existente.",
        "OTHER: información insuficiente o fuera de estas categorías.",
        "No asumas presupuesto, plazo ni poder de decisión si no fueron declarados.",
        "Las preguntas sugeridas deben ser como máximo 3 y priorizar información faltante útil para calificar.",
        "Respondé en español.",
      ].join("\n"),
      prompt: JSON.stringify(
        {
          requestedService: input.requestedService,
          companyOrProject: input.companyOrProject || null,
          budgetRange: input.budgetRange || null,
          deadline: input.deadline || null,
          message: input.message,
        },
        null,
        2,
      ),
    });

    if (!result.output) {
      throw new Error("AI analysis returned no structured output");
    }

    return result.output;
  } catch {
    return fallbackAnalyzeLead(input);
  }
}

export function scoreLead(
  input: LeadInput,
  analysis: LeadAnalysis,
): LeadScore {
  let score = 0;
  const reasons: string[] = [];

  const clearNeed =
    input.message.trim().length >= 35 && analysis.service !== "OTHER";
  if (clearNeed) {
    score += 2;
    reasons.push("necesidad clara");
  }

  if (input.budgetRange) {
    score += 2;
    reasons.push("presupuesto informado o dispuesto a conversarlo");
  }

  if (input.deadline && input.deadline !== "Sin fecha definida") {
    score += 2;
    reasons.push("plazo definido");
  }

  if (analysis.decisionMaker === "YES") {
    score += 2;
    reasons.push("decisor identificado");
  }

  if (input.companyOrProject?.trim()) {
    score += 1;
    reasons.push("empresa/proyecto identificado");
  }

  const asksOnlyPrice =
    /\b(precio|cu[aá]nto cuesta|valor|tarifa)\b/i.test(input.message) &&
    input.message.trim().length < 80;

  if (asksOnlyPrice) {
    score -= 2;
    reasons.push("consulta principalmente por precio con poco contexto");
  }

  score = Math.max(0, Math.min(10, score));

  const priority: Priority =
    score >= 8
      ? "ALTA"
      : score >= 5
        ? "INTERESANTE"
        : score >= 3
          ? "NUTRIR"
          : "BAJA";

  return {
    leadScore: score,
    priority,
    scoreReason: reasons.length
      ? reasons.join("; ")
      : "Falta información para priorizar con mayor confianza",
  };
}

function fallbackAnalyzeLead(input: LeadInput): LeadAnalysis {
  const normalized = `${input.requestedService} ${input.message}`.toLowerCase();

  let service = serviceMap[input.requestedService] ?? "OTHER";

  if (service === "OTHER") {
    if (/checkout|tienda|carrito|productos|pago|e-?commerce/.test(normalized)) {
      service = "ECOM";
    } else if (/login|roles|dashboard|panel|usuarios|saas|marketplace|sistema/.test(normalized)) {
      service = "APP";
    } else if (/automat|integraci[oó]n|proceso manual|ia\b/.test(normalized)) {
      service = "AUTO";
    } else if (/mantenimiento|corregir|bug|mejorar mi web|sitio existente/.test(normalized)) {
      service = "MAINT";
    } else if (/landing|campa[nñ]a|lanzamiento|captar leads/.test(normalized)) {
      service = "LANDING";
    } else if (/web|sitio|p[aá]gina|portfolio|institucional/.test(normalized)) {
      service = "WEB";
    }
  }

  const features = [
    /whatsapp/.test(normalized) ? "WhatsApp" : null,
    /formulario/.test(normalized) ? "Formulario de contacto" : null,
    /cat[aá]logo|propiedades|productos/.test(normalized) ? "Catálogo" : null,
    /filtro|buscador/.test(normalized) ? "Filtros / buscador" : null,
    /panel|admin|autogestion/.test(normalized) ? "Panel de administración" : null,
    /pago|checkout/.test(normalized) ? "Pagos / checkout" : null,
    /login|usuario|roles/.test(normalized) ? "Usuarios / autenticación" : null,
  ].filter((value): value is string => Boolean(value));

  const missingInformation: string[] = [];
  if (!input.budgetRange) missingInformation.push("presupuesto");
  if (!input.deadline) missingInformation.push("plazo");
  missingInformation.push("quién toma la decisión");

  const suggestedQuestions: string[] = [];
  if (!input.budgetRange) {
    suggestedQuestions.push("¿Tenés un rango de inversión pensado?");
  }
  if (!input.deadline) {
    suggestedQuestions.push("¿Tenés una fecha objetivo para lanzarlo?");
  }
  suggestedQuestions.push(
    "¿Vos tomás la decisión final del proyecto o participa alguien más?",
  );

  return {
    service,
    secondaryServices: [],
    industry: "No informada",
    objective: input.message.slice(0, 220),
    features,
    decisionMaker: "UNKNOWN",
    summary: `${input.name} consulta por ${service} para ${input.companyOrProject || "su proyecto"}. ${input.message.slice(0, 240)}`,
    missingInformation,
    suggestedQuestions: suggestedQuestions.slice(0, 3),
    confidence: service === "OTHER" ? 0.45 : 0.72,
    serviceReason: "Clasificación de respaldo basada en el servicio elegido y palabras clave.",
  };
}
