export type PatternType =
  | "dots"
  | "lines"
  | "grid"
  | "crosshatch"
  | "zigzag"
  | "diamonds";

export interface PatternOptions {
  type: PatternType;
  size: number;
  spacing: number;
  strokeWidth: number;
  foregroundColor: string;
  backgroundColor: string;
  rotation: number;
}

function generateDotsPattern(options: PatternOptions): string {
  const { size, spacing, foregroundColor } = options;
  const r = size / 2;
  return `<circle cx="${spacing / 2}" cy="${spacing / 2}" r="${r}" fill="${foregroundColor}" />`;
}

function generateLinesPattern(options: PatternOptions): string {
  const { spacing, strokeWidth, foregroundColor } = options;
  return `<line x1="0" y1="${spacing / 2}" x2="${spacing}" y2="${spacing / 2}" stroke="${foregroundColor}" stroke-width="${strokeWidth}" />`;
}

function generateGridPattern(options: PatternOptions): string {
  const { spacing, strokeWidth, foregroundColor } = options;
  return `<line x1="${spacing / 2}" y1="0" x2="${spacing / 2}" y2="${spacing}" stroke="${foregroundColor}" stroke-width="${strokeWidth}" />
    <line x1="0" y1="${spacing / 2}" x2="${spacing}" y2="${spacing / 2}" stroke="${foregroundColor}" stroke-width="${strokeWidth}" />`;
}

function generateCrosshatchPattern(options: PatternOptions): string {
  const { spacing, strokeWidth, foregroundColor } = options;
  return `<line x1="0" y1="0" x2="${spacing}" y2="${spacing}" stroke="${foregroundColor}" stroke-width="${strokeWidth}" />
    <line x1="${spacing}" y1="0" x2="0" y2="${spacing}" stroke="${foregroundColor}" stroke-width="${strokeWidth}" />`;
}

function generateZigzagPattern(options: PatternOptions): string {
  const { spacing, strokeWidth, foregroundColor } = options;
  const halfSpacing = spacing / 2;
  const quarterSpacing = spacing / 4;
  return `<polyline points="0,${halfSpacing} ${quarterSpacing},0 ${halfSpacing},${halfSpacing} ${spacing * 0.75},0 ${spacing},${halfSpacing}" fill="none" stroke="${foregroundColor}" stroke-width="${strokeWidth}" />`;
}

function generateDiamondsPattern(options: PatternOptions): string {
  const { spacing, foregroundColor, size } = options;
  const half = spacing / 2;
  const s = size / 2;
  return `<polygon points="${half},${half - s} ${half + s},${half} ${half},${half + s} ${half - s},${half}" fill="${foregroundColor}" />`;
}

const patternGenerators: Record<
  PatternType,
  (options: PatternOptions) => string
> = {
  dots: generateDotsPattern,
  lines: generateLinesPattern,
  grid: generateGridPattern,
  crosshatch: generateCrosshatchPattern,
  zigzag: generateZigzagPattern,
  diamonds: generateDiamondsPattern,
};

export function generatePattern(options: PatternOptions): string {
  const { type, spacing, backgroundColor, rotation } = options;
  const patternContent = patternGenerators[type](options);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
  <defs>
    <pattern id="pattern" x="0" y="0" width="${spacing}" height="${spacing}" patternUnits="userSpaceOnUse" patternTransform="rotate(${rotation})">
      ${patternContent}
    </pattern>
  </defs>
  <rect width="400" height="400" fill="${backgroundColor}" />
  <rect width="400" height="400" fill="url(#pattern)" />
</svg>`;
}
