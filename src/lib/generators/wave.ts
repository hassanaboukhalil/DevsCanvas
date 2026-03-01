export interface WaveOptions {
  layers: number;
  points: number;
  amplitude: number;
  width: number;
  height: number;
  colors: string[];
  seed?: number;
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function generateWave(options: WaveOptions): string {
  const { layers, points, amplitude, width, height, colors, seed } = options;
  const random = seededRandom(seed ?? Date.now());

  const layerPaths: string[] = [];
  const layerCount = Math.max(1, Math.min(5, layers));

  for (let l = 0; l < layerCount; l++) {
    const baseY = height * (0.4 + l * 0.15);
    const ampScale = amplitude * (1 - l * 0.1);
    const numPoints = Math.max(2, points);

    const segmentWidth = width / (numPoints - 1);
    const wavePoints: { x: number; y: number }[] = [];

    for (let i = 0; i < numPoints; i++) {
      const x = i * segmentWidth;
      const y = baseY + (random() - 0.5) * ampScale * 2;
      wavePoints.push({ x, y });
    }

    let path = `M 0,${height} `;
    path += `L ${wavePoints[0].x},${wavePoints[0].y} `;

    for (let i = 0; i < wavePoints.length - 1; i++) {
      const current = wavePoints[i];
      const next = wavePoints[i + 1];
      const cpX1 = current.x + segmentWidth * 0.5;
      const cpX2 = next.x - segmentWidth * 0.5;
      path += `C ${cpX1.toFixed(2)},${current.y.toFixed(2)} ${cpX2.toFixed(2)},${next.y.toFixed(2)} ${next.x.toFixed(2)},${next.y.toFixed(2)} `;
    }

    path += `L ${width},${height} Z`;
    const color = colors[l % colors.length] || "#6467f2";
    layerPaths.push(`  <path d="${path}" fill="${color}" opacity="0.7" />`);
  }

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
${layerPaths.join("\n")}
</svg>`;
}
