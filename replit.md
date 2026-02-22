# Orinoco Supply LLC - Industrial Supplies Website

## Overview

This is a full-stack web application for **Orinoco Supply LLC**, an industrial supplies company based in Miami, FL. The site is a Spanish-language product catalog and business presence website that lets visitors browse industrial products (bearings, fittings, electrical components, etc.), learn about the company, and submit contact inquiries.

The app follows a monorepo structure with a React frontend, Express backend, and PostgreSQL database. It uses a shared directory for schema definitions and API route contracts between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Directory Structure
- **`client/`** — React single-page application (SPA)
- **`server/`** — Express API server
- **`shared/`** — Shared TypeScript types, database schema, and API route definitions used by both client and server
- **`migrations/`** — Drizzle ORM database migrations
- **`script/`** — Build scripts

### Frontend Architecture
- **Framework**: React with TypeScript (no SSR, SPA only)
- **Routing**: Wouter (lightweight client-side router)
- **State/Data Fetching**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with CSS variables for theming, using an industrial color palette (deep navy blue primary, safety orange accent, metallic greys)
- **UI Components**: shadcn/ui component library (new-york style) with Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations and page transitions
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Icons**: Lucide React
- **Fonts**: Oswald (display/headings) and Roboto (body text) — industrial look
- **Build Tool**: Vite

### Pages
- `/` — Home page with hero section, featured products, value propositions
- `/products` — Product catalog with search and category filtering
- `/products/:id` — Individual product detail page with related products
- `/about` — Company information page
- `/contact` — Contact form that submits messages to the database
- 404 — Custom not-found page

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript, executed via `tsx`
- **API Pattern**: REST API under `/api/` prefix
- **Route Definitions**: Shared route contracts in `shared/routes.ts` define method, path, input validation (Zod), and response schemas — used by both client and server
- **Storage Layer**: `IStorage` interface in `server/storage.ts` with `DatabaseStorage` implementation — abstraction layer over database operations
- **Database Seeding**: Auto-seeds product data on first run if the products table is empty

### API Endpoints
- `GET /api/products` — List all products
- `GET /api/products/:id` — Get a single product by ID
- `POST /api/contact` — Submit a contact message (validated with Zod)

### Database
- **Database**: PostgreSQL (required, connection via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation
- **Schema Management**: `db:push` script uses `drizzle-kit push` to sync schema to database
- **Tables**:
  - `products` — id (serial), name (text), category (text), description (text), image_url (text)
  - `messages` — id (serial), name (text), email (text), message (text), created_at (text)

### Build & Development
- **Dev**: `npm run dev` — runs Express server with Vite middleware for HMR
- **Build**: `npm run build` — Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Production**: `npm start` — serves built client as static files from Express
- **Type checking**: `npm run check` — runs `tsc` with no emit

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

## External Dependencies

### Required Services
- **PostgreSQL Database** — Required. Must have `DATABASE_URL` environment variable set. Used via `pg` Pool + Drizzle ORM.

### Key NPM Packages
- **Frontend**: React 18, Wouter, TanStack React Query, Framer Motion, shadcn/ui (Radix primitives), Tailwind CSS, React Hook Form, Zod, Embla Carousel, Lucide React
- **Backend**: Express 5, Drizzle ORM, pg (node-postgres), connect-pg-simple
- **Shared**: Zod, drizzle-zod
- **Build**: Vite, esbuild, tsx

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Shows runtime errors in overlay
- `@replit/vite-plugin-cartographer` — Dev-only, Replit integration
- `@replit/vite-plugin-dev-banner` — Dev-only, Replit banner