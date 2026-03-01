export interface GradientColorStop {
  color: string;
  position: number;
}

export interface GradientOptions {
  type: "linear" | "radial" | "conic";
  angle: number;
  colorStops: GradientColorStop[];
}

export function generateGradient(options: GradientOptions): string {
  const { type, angle, colorStops } = options;
  const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);
  const stopsStr = sortedStops
    .map((stop) => `${stop.color} ${stop.position}%`)
    .join(", ");

  switch (type) {
    case "linear":
      return `linear-gradient(${angle}deg, ${stopsStr})`;
    case "radial":
      return `radial-gradient(circle, ${stopsStr})`;
    case "conic":
      return `conic-gradient(from ${angle}deg, ${stopsStr})`;
    default:
      return `linear-gradient(${angle}deg, ${stopsStr})`;
  }
}

export function generateGradientCSS(options: GradientOptions): string {
  const gradient = generateGradient(options);
  return `background: ${gradient};`;
}

export function generateGradientTailwind(options: GradientOptions): string {
  return `/* Tailwind doesn't support arbitrary gradients natively. Use inline style: */\nstyle={{ background: '${generateGradient(options)}' }}`;
}

export function generateGradientSVG(options: GradientOptions): string {
  const { type, angle, colorStops } = options;
  const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);

  const stopElements = sortedStops
    .map(
      (stop) =>
        `    <stop offset="${stop.position}%" stop-color="${stop.color}" />`,
    )
    .join("\n");

  if (type === "radial") {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
  <defs>
    <radialGradient id="grad" cx="50%" cy="50%" r="50%">
${stopElements}
    </radialGradient>
  </defs>
  <rect width="400" height="300" fill="url(#grad)" />
</svg>`;
  }

  const rad = (angle * Math.PI) / 180;
  const x1 = (50 - Math.cos(rad) * 50).toFixed(1);
  const y1 = (50 - Math.sin(rad) * 50).toFixed(1);
  const x2 = (50 + Math.cos(rad) * 50).toFixed(1);
  const y2 = (50 + Math.sin(rad) * 50).toFixed(1);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
  <defs>
    <linearGradient id="grad" x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%">
${stopElements}
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#grad)" />
</svg>`;
}

export function generateGradientReact(options: GradientOptions): string {
  const gradient = generateGradient(options);
  return `const GradientBox = () => (
  <div
    style={{
      background: '${gradient}',
      width: '100%',
      height: '300px',
      borderRadius: '8px',
    }}
  />
);`;
}
