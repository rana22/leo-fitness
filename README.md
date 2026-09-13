# Leo Fitness & Gym — SvelteKit Foundation

A responsive, theme-aware SvelteKit application based on the supplied Leo Fitness design reference. The project is intentionally organized as a reusable frontend foundation rather than a one-off gym website.

## Stack

- Bun 1.4+
- SvelteKit 2.70+
- Svelte 5.56+
- TypeScript
- Vite 8
- Tailwind CSS 4.3 + `@tailwindcss/vite`
- Lucide Svelte (`@lucide/svelte`)

Tailwind's current SvelteKit integration uses its Vite plugin and a CSS-first `@import "tailwindcss"` setup. The project follows that pattern. SvelteKit's `adapter-auto` is used so deployment can be selected later rather than hard-coding a hosting target.

## Setup with Bun

```bash
bun install
bun run dev --open
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

### Validation

```bash
bun run check
bun run build
bun run preview
```

For development with live type checking:

```bash
bun run check:watch
```

## Routes

- `/` — branded home page / conversion landing page
- `/classes` — filterable class catalog + weekly schedule
- `/membership` — membership plans + onboarding story
- `/about` — brand story + values + metrics
- `/contact` — contact information + demo form + location panel

## Architecture

```text
src/
├── lib/
│   ├── components/      # reusable presentation + interaction components
│   ├── data/             # replaceable demo content / API seams
│   ├── state/            # application-wide reactive state (Svelte 5 runes)
│   ├── types/            # domain contracts
│   └── utils/            # future pure helpers
├── routes/               # route-level composition
└── app.css               # design tokens + global primitives
```

### Design-system approach

The UI does not hard-code the black/gold theme into every component. Semantic CSS variables (`--bg`, `--surface`, `--text`, `--brand`, etc.) are defined once and switched by `data-theme`. This makes the same component tree reusable for light/dark themes and future brands/domains.

Tailwind handles layout, spacing, responsive behavior, states and most component styling. A small global CSS layer handles the brand's typography roles, theme tokens, image treatments and a few effects that are clearer as normal CSS.

### Navigation and state

Internal navigation is normal SvelteKit client navigation, so clicking site links does not require a browser document refresh. A deliberate browser refresh is different: the browser requests a new document and application memory is reconstructed. The theme preference is persisted to `localStorage` as an example of how state that should survive refresh can be restored.

The project deliberately keeps state simple. Svelte 5 runes are used for cross-component theme state and route-local interactive state. As the application grows, domain state can move behind typed stores/services without replacing the component API.

## Asset strategy

The supplied Leo Fitness logo variants are stored in:

```text
static/brand/logo-light.png
static/brand/logo-dark.png
```

The current demo uses remote Unsplash image URLs for workout photography so the repository stays small. For production, replace those URLs with optimized local/CDN assets and introduce a typed media/content layer.

## Future-ready seams

The starter intentionally leaves room for:

- real authentication and member profiles
- CMS-driven pages and content
- live schedules / class capacity / waitlists
- booking and checkout
- payment provider integration
- trainer profiles
- CRM/email integrations
- analytics
- server-side form actions
- database-backed search and filters
- accessibility and automated browser tests
- PWA/mobile enhancements
- additional brands/domains using the same design-system primitives

The goal is to extend the product by adding domain modules and route sections, not by replacing the foundational styling or component architecture.

## Changing the brand

Start in `src/app.css`. Replace the theme variables with the next brand's semantic values. Components should generally remain unchanged because they consume semantic tokens rather than Leo-specific hex values.

## Production hardening checklist

Before production, add an actual data/API layer, server-side form handling, validation, auth/session strategy, content storage, error/loading states, tests, observability, image optimization, CSP/security headers, and the deployment adapter for the chosen host.

### Versioning note

This starter pins compatible major/minor ranges around the current stable SvelteKit/Svelte/Vite/Tailwind ecosystem as checked during initial setup. TypeScript is intentionally kept on the stable 5.x line for the first iteration because `svelte-check` currently documents extra requirements for TypeScript 7; moving the project to TypeScript 7 can be treated as a deliberate upgrade rather than an accidental compatibility change.
