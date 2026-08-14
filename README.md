# Aliia Tech

Sitio de [Aliia Tech](https://www.aliiatech.com) — Next.js 16 (App Router), Tailwind v4, Neon (Postgres) con Drizzle ORM, desplegado en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Variables de entorno requeridas (ver `.env.local`, no versionado): `DATABASE_URL`, `NEXT_PUBLIC_EMAILJS_*`, `SESSION_SECRET`, `NEXT_PUBLIC_SITE_URL`.

## Estructura

- `app/(site)` — sitio público (home, servicios, blog, nosotros, contacto)
- `app/admin` — panel de administración (servicios, blog, leads), protegido por `proxy.ts`
- `app/actions` — Server Actions (auth, leads, servicios, blog)
- `lib/db` — schema y cliente de Drizzle/Neon
- `scripts/seed*.ts` — scripts de siembra de datos

## Base de datos

```bash
npx drizzle-kit push   # aplica el schema a Neon
```
