# Fabián — Desarrollo web

Landing de servicios construida con Next.js, TypeScript y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

## Captación de leads

El formulario de contacto envía cada consulta a `/api/leads`.

El backend:

1. valida y normaliza los datos;
2. analiza la consulta con Vercel AI Gateway cuando está disponible;
3. usa una clasificación de respaldo si la IA no está disponible;
4. calcula el Lead Score;
5. crea una tarjeta en la lista **Nuevos leads** del tablero **NEW EVOLUTION — Marketing & CRM**.

La IA no define precios ni acepta/rechaza proyectos. Tamara / New Evolution mantiene la revisión comercial y Fabián interviene en la etapa técnica.

### Variables de entorno

Copiar `.env.example` y configurar la autenticación de Trello.

Se recomienda OAuth 2.0:

```bash
TRELLO_ACCESS_TOKEN=...
```

También se mantiene compatibilidad con el esquema legacy:

```bash
TRELLO_API_KEY=...
TRELLO_TOKEN=...
```

La lista de destino puede sobrescribirse con:

```bash
TRELLO_LIST_ID=...
```

En Vercel, AI Gateway puede autenticarse con OIDC automáticamente. `LEAD_AI_MODEL` permite elegir otro modelo si fuera necesario.
