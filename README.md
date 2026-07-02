# DevsCanvas

DevsCanvas is a collection of free, browser-based design tools for developers. Every tool runs entirely client-side — tweak options, preview the result live, and export ready-to-use SVG or CSS.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Tools

- **Blob Generator** — organic SVG blob shapes with customizable complexity and colors
- **Wave Generator** — layered SVG wave backgrounds for hero sections and dividers
- **Gradient Generator** — CSS gradients with multiple color stops and directions
- **Pattern Generator** — repeating SVG patterns for backgrounds and textures
- **Box Shadow Generator** — layered CSS box shadows with real-time preview
- **Color Palette Generator** — harmonious color palettes from any base color

## Getting started

Requires Node.js 18.18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run lint    # ESLint
```

There is no test suite.

## Project structure

Each generator follows the same three-layer pattern:

1. **Generation logic** — a pure function in `src/lib/generators/<tool>.ts` that returns an SVG or CSS string. Randomness uses a seeded PRNG so output is reproducible from a `seed` option.
2. **Components** — `src/components/generators/<tool>-generator/`, split into `<Tool>Generator.tsx` (state + composition), `<Tool>Controls.tsx`, `<Tool>Preview.tsx`, and `<Tool>Export.tsx`.
3. **Route** — a thin page at `src/app/tools/<tool>-generator/page.tsx`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on adding a new tool, and [CLAUDE.md](CLAUDE.md) for the full architecture reference.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR, and note our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE)
