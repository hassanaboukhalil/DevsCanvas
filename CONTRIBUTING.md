# Contributing to DevsCanvas

Thanks for your interest in contributing! This guide covers how to set up the project, the conventions we follow, and how to add a new generator tool.

## Setup

```bash
npm install
npm run dev
```

Before opening a PR, make sure both of these pass:

```bash
npm run lint
npm run build
```

## Branching & commits

- Branch from `main`, using a short descriptive name (e.g. `fix/pattern-export-bug`, `feat/noise-generator`).
- Write commit messages in the imperative mood, e.g. `Fix overflow in ColorPaletteExport`, `Add noise generator`.
- Keep PRs focused — one feature or fix per PR.

## Adding a new generator tool

Every tool follows the same three-layer pattern. To add one (call it `<tool>`):

1. **Pure generation logic** — `src/lib/generators/<tool>.ts`. Export a `<Tool>Options` interface and a pure `generate<Tool>(options)` function returning an SVG or CSS string. No React here. Use the shared seeded PRNG for randomness so output is reproducible from a `seed` option — "randomize" should just pick a new seed.
2. **Components** — `src/components/generators/<tool>-generator/`, with four files:
   - `<Tool>Generator.tsx` — client component holding `options` state, calling the lib generator via `useMemo`, composing the other three files.
   - `<Tool>Controls.tsx` — form controls for the options.
   - `<Tool>Preview.tsx` — live preview.
   - `<Tool>Export.tsx` — export panel (copyable code / download).

   Compose these with `GeneratorLayout` from `src/components/generators/common/` (controls | preview | export grid).
3. **Route** — `src/app/tools/<tool>-generator/page.tsx`, a thin client page rendering a breadcrumb and the generator inside `Section`.
4. **Register the tool** — add an entry to `src/constants/tools.ts` (`Tool` with a slug matching the route, a `lucide-react` icon, and a category of `"SVG" | "CSS" | "Color"`). This drives the tools listing page.

See `CLAUDE.md` for the full architecture reference.

## Styling conventions

- Dark theme only. Reference design tokens via Tailwind v4 arbitrary-variable syntax, e.g. `bg-(--color-background-card)`, `text-(--color-muted)`, `border-(--color-border)` — tokens are defined in `src/app/globals.css`.
- Prefer existing shared utility classes (`flex-center`, `text-h1`/`text-h2`, etc.) over re-composing the same Tailwind stacks.
- Components are arrow functions with a default export; interactive components need `"use client"`.

## Pull requests

- Describe what changed and why.
- Link any related issue.
- Ensure `npm run lint` and `npm run build` pass — CI will check this automatically.
- Be responsive to review feedback; small, iterative changes are easier to review than large rewrites.

## Code of Conduct

By participating in this project you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).
