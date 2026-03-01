export type PaletteType =
  | "analogous"
  | "complementary"
  | "triadic"
  | "tetradic"
  | "monochromatic"
  | "split-complementary";

export interface ColorPaletteOptions {
  baseColor: string;
  paletteType: PaletteType;
  numColors: number;
  saturationAdjust: number;
  lightnessAdjust: number;
}

// ── Internal helpers ──────────────────────────────────────────────────

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { h: 0, s: 0, l: 0 };

  const r = parseInt(result[1], 16) / 255;
  const g = parseInt(result[2], 16) / 255;
  const b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  if (max === min) return { h: 0, s: 0, l: l * 100 };

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  let h = 0;
  switch (max) {
    case r:
      h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      break;
    case g:
      h = ((b - r) / d + 2) / 6;
      break;
    case b:
      h = ((r - g) / d + 4) / 6;
      break;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = clamp(s, 0, 100) / 100;
  l = clamp(l, 0, 100) / 100;

  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * clamp(color, 0, 1))
      .toString(16)
      .padStart(2, "0");
  };

  return `#${f(0)}${f(8)}${f(4)}`;
}

function getContrastLuminance(hex: string): number {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return 0;
  const r = parseInt(result[1], 16) / 255;
  const g = parseInt(result[2], 16) / 255;
  const b = parseInt(result[3], 16) / 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

// ── Palette generation ────────────────────────────────────────────────

function applyAdjustments(
  h: number,
  s: number,
  l: number,
  satAdj: number,
  lightAdj: number,
): string {
  return hslToHex(h, clamp(s + satAdj, 0, 100), clamp(l + lightAdj, 0, 100));
}

export function generatePalette(options: ColorPaletteOptions): string[] {
  const { baseColor, paletteType, numColors, saturationAdjust, lightnessAdjust } = options;
  const n = clamp(numColors, 3, 10);
  const { h, s, l } = hexToHsl(baseColor);

  let colors: string[];

  switch (paletteType) {
    case "analogous":
      colors = generateAnalogous(h, s, l, n);
      break;
    case "complementary":
      colors = generateComplementary(h, s, l, n);
      break;
    case "triadic":
      colors = generateTriadic(h, s, l, n);
      break;
    case "tetradic":
      colors = generateTetradic(h, s, l, n);
      break;
    case "monochromatic":
      colors = generateMonochromatic(h, s, l, n);
      break;
    case "split-complementary":
      colors = generateSplitComplementary(h, s, l, n);
      break;
    default:
      colors = generateAnalogous(h, s, l, n);
  }

  // Apply global saturation and lightness adjustments
  if (saturationAdjust !== 0 || lightnessAdjust !== 0) {
    colors = colors.map((hex) => {
      const hsl = hexToHsl(hex);
      return applyAdjustments(hsl.h, hsl.s, hsl.l, saturationAdjust, lightnessAdjust);
    });
  }

  return colors;
}

function generateAnalogous(h: number, s: number, l: number, n: number): string[] {
  const spread = 60; // total spread ±30°
  const step = spread / (n - 1);
  const startHue = h - spread / 2;
  return Array.from({ length: n }, (_, i) => hslToHex(startHue + step * i, s, l));
}

function generateComplementary(h: number, s: number, l: number, n: number): string[] {
  // Two anchor points: base and complement (180°)
  const anchors = [h, (h + 180) % 360];
  return distributeAroundAnchors(anchors, s, l, n);
}

function generateTriadic(h: number, s: number, l: number, n: number): string[] {
  const anchors = [h, (h + 120) % 360, (h + 240) % 360];
  return distributeAroundAnchors(anchors, s, l, n);
}

function generateTetradic(h: number, s: number, l: number, n: number): string[] {
  const anchors = [h, (h + 90) % 360, (h + 180) % 360, (h + 270) % 360];
  return distributeAroundAnchors(anchors, s, l, n);
}

function generateMonochromatic(h: number, s: number, l: number, n: number): string[] {
  // Vary lightness evenly, keep hue and saturation. Center around the base lightness.
  const minL = Math.max(10, l - 30);
  const maxL = Math.min(90, l + 30);
  const step = (maxL - minL) / (n - 1);
  return Array.from({ length: n }, (_, i) => hslToHex(h, s, minL + step * i));
}

function generateSplitComplementary(h: number, s: number, l: number, n: number): string[] {
  // Base + two colours at ±150° from base
  const anchors = [h, (h + 150) % 360, (h + 210) % 360];
  return distributeAroundAnchors(anchors, s, l, n);
}

/**
 * Distributes `n` colours around a set of anchor hues.
 * First fills anchors, then generates lighter/darker variants of anchors to fill remaining slots.
 */
function distributeAroundAnchors(
  anchors: number[],
  s: number,
  l: number,
  n: number,
): string[] {
  if (n <= anchors.length) {
    // Fewer colours requested than anchors — pick evenly spaced subset
    const step = anchors.length / n;
    return Array.from({ length: n }, (_, i) =>
      hslToHex(anchors[Math.floor(i * step)], s, l),
    );
  }

  // Start with anchor colours
  const colors: string[] = anchors.map((hue) => hslToHex(hue, s, l));
  let remaining = n - anchors.length;
  let variantLevel = 1;

  while (remaining > 0) {
    for (const hue of anchors) {
      if (remaining <= 0) break;
      // Alternate lighter and darker variants
      const lightShift = variantLevel % 2 === 1 ? variantLevel * 8 : -(variantLevel * 8);
      const newL = clamp(l + lightShift, 10, 90);
      colors.push(hslToHex(hue, s, newL));
      remaining--;
    }
    variantLevel++;
  }

  return colors;
}

// ── Export formatters ────────────────────────────────────────────────

export function generatePaletteCSSVariables(colors: string[]): string {
  const vars = colors
    .map((c, i) => `  --color-${i + 1}: ${c};`)
    .join("\n");
  return `:root {\n${vars}\n}`;
}

export function generatePaletteTailwindConfig(colors: string[]): string {
  const entries = colors
    .map((c, i) => `          ${i + 1}: '${c}',`)
    .join("\n");
  return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        palette: {
${entries}
        }
      }
    }
  }
}`;
}

export function generatePaletteJSON(colors: string[]): string {
  return JSON.stringify({ palette: colors }, null, 2);
}

export function generatePaletteSCSS(colors: string[]): string {
  const vars = colors
    .map((c, i) => `$color-${i + 1}: ${c};`)
    .join("\n");
  const list = colors.map((_, i) => `$color-${i + 1}`).join(", ");
  return `${vars}\n\n$palette: (${list});`;
}

// ── Utility (for preview contrast) ──────────────────────────────────

export function isLightColor(hex: string): boolean {
  return getContrastLuminance(hex) > 0.5;
}
