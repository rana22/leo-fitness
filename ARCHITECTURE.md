# Frontend architecture notes

## Principles

1. Routes compose; components own presentation and local interaction.
2. Domain data is separate from UI components.
3. Theme and other cross-cutting state live outside route components.
4. Styling uses semantic design tokens first and Tailwind utilities second.
5. External systems should be introduced behind typed seams.
6. Client navigation and explicit browser refresh are treated as different lifecycle events.

## Adding another business/domain

1. Keep the same route and component primitives where they are generic.
2. Create a new domain data module under `src/lib/data`.
3. Replace brand tokens and content/media references.
4. Add new route modules only where the information architecture actually differs.
5. Avoid copying components merely to change colors/text; prefer props, slots and domain configuration.

## When the app grows

A sensible next layer is:

```text
UI components
      ↓
Domain services / typed client
      ↓
SvelteKit server load/actions/API routes
      ↓
External systems / database / CMS
```

Keep server secrets out of `PUBLIC_` environment variables. Prefer SvelteKit form actions for important mutations and server-side validation for any data that matters.
