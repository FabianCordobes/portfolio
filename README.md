# Fabian Dev Landing

Landing de servicios y portfolio profesional construida con Next.js, TypeScript y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

## Captación de leads → Trello CRM

El formulario de contacto envía cada consulta a `POST /api/leads`.

El backend:

- valida y normaliza los datos;
- clasifica el servicio según la opción elegida;
- detecta funcionalidades básicas mencionadas;
- calcula un Lead Score inicial;
- crea una tarjeta en **Nuevos leads** del tablero **NEW EVOLUTION — Marketing & CRM**.

### Variables de entorno

Configurar en Vercel:

```bash
TRELLO_API_KEY=...
TRELLO_TOKEN=...
```

Opcionalmente puede sobrescribirse la lista destino:

```bash
TRELLO_LIST_ID=6abab828d0452e1269349622
```

Las credenciales se utilizan sólo en el backend. No deben usar el prefijo `NEXT_PUBLIC_`.
