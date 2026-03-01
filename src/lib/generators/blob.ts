export interface BlobOptions {
  complexity: number;
  contrast: number;
  size: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  seed?: number;
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function generateBlob(options: BlobOptions): string {
  const {
    complexity,
    contrast,
    size,
    fillColor,
    strokeColor,
    strokeWidth,
    seed,
  } = options;
  const numPoints = Math.max(3, Math.min(20, complexity));
  const random = seededRandom(seed ?? Date.now());
  const center = size / 2;
  const baseRadius = size * 0.35;
  const contrastFactor = contrast / 100;

  const points: { x: number; y: number }[] = [];
  const angleStep = (Math.PI * 2) / numPoints;

  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;
    const radiusVariation =
      baseRadius * (1 - contrastFactor * 0.5 + random() * contrastFactor);
    const x = center + Math.cos(angle) * radiusVariation;
    const y = center + Math.sin(angle) * radiusVariation;
    points.push({ x, y });
  }

  let path = "";
  for (let i = 0; i < points.length; i++) {
    const current = points[i];
    const next = points[(i + 1) % points.length];
    const prev = points[(i - 1 + points.length) % points.length];

    const cpLength =
      Math.sqrt(Math.pow(next.x - prev.x, 2) + Math.pow(next.y - prev.y, 2)) *
      0.25;

    const anglePrev = Math.atan2(next.y - prev.y, next.x - prev.x);
    const cp1x = current.x + Math.cos(anglePrev) * cpLength;
    const cp1y = current.y + Math.sin(anglePrev) * cpLength;

    const nextNext = points[(i + 2) % points.length];
    const angleNext = Math.atan2(
      nextNext.y - current.y,
      nextNext.x - current.x,
    );
    const cp2x = next.x - Math.cos(angleNext) * cpLength;
    const cp2y = next.y - Math.sin(angleNext) * cpLength;

    if (i === 0) {
      path += `M ${current.x.toFixed(2)},${current.y.toFixed(2)} `;
    }
    path += `C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${next.x.toFixed(2)},${next.y.toFixed(2)} `;
  }
  path += "Z";

  return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <path d="${path}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
</svg>`;
}
