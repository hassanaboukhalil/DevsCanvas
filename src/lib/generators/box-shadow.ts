export interface BoxShadowLayer {
  id: string;
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  inset: boolean;
}

export interface BoxShadowOptions {
  layers: BoxShadowLayer[];
  previewBackground: string;
  previewBoxColor: string;
  previewBorderRadius: number;
}

export function createDefaultLayer(): BoxShadowLayer {
  return {
    id: crypto.randomUUID(),
    offsetX: 4,
    offsetY: 4,
    blur: 10,
    spread: 0,
    color: "#00000040",
    inset: false,
  };
}

export function generateBoxShadow(options: BoxShadowOptions): string {
  const { layers } = options;
  if (layers.length === 0) return "none";

  const value = layers
    .map((layer) => {
      const parts: string[] = [];
      if (layer.inset) parts.push("inset");
      parts.push(`${layer.offsetX}px`);
      parts.push(`${layer.offsetY}px`);
      parts.push(`${layer.blur}px`);
      parts.push(`${layer.spread}px`);
      parts.push(layer.color);
      return parts.join(" ");
    })
    .join(", ");

  return value || "none";
}

export function generateBoxShadowCSS(options: BoxShadowOptions): string {
  const value = generateBoxShadow(options);
  return `box-shadow: ${value};\n-webkit-box-shadow: ${value};\n-moz-box-shadow: ${value};`;
}

export function generateBoxShadowTailwind(options: BoxShadowOptions): string {
  const value = generateBoxShadow(options);
  if (options.layers.length > 1) {
    return `/* Multiple shadow layers — use inline style instead: */\nstyle={{ boxShadow: '${value}' }}`;
  }
  const escaped = value.replace(/ /g, "_");
  return `shadow-[${escaped}]`;
}

export function generateBoxShadowReact(options: BoxShadowOptions): string {
  const value = generateBoxShadow(options);
  return `const ShadowBox = () => (
  <div
    style={{
      boxShadow: '${value}',
      width: '200px',
      height: '200px',
      borderRadius: '${options.previewBorderRadius}px',
      backgroundColor: '${options.previewBoxColor}',
    }}
  />
);`;
}
