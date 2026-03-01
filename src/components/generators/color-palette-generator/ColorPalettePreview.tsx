"use client";

import GeneratorPreview from "@/components/generators/common/GeneratorPreview";
import { isLightColor } from "@/lib/generators/color-palette";
import { useState } from "react";

interface ColorPalettePreviewProps {
  colors: string[];
}

const ColorPalettePreview = ({ colors }: ColorPalettePreviewProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (hex: string, index: number) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Clipboard API failed — show error state briefly
      setCopiedIndex(-1);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <GeneratorPreview>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4">
        {/* Swatches row */}
        <div className="flex w-full flex-1 min-h-62.5 max-h-87.5 rounded-lg overflow-hidden">
          {colors.map((color, i) => {
            const light = isLightColor(color);
            const isCopied = copiedIndex === i;

            return (
              <button
                key={`${i}-${color}`}
                onClick={() => handleCopy(color, i)}
                className="flex-1 flex items-end justify-center pb-4 transition-all duration-200 hover:brightness-110 hover:flex-[1.15] cursor-pointer border-0 outline-none"
                style={{ backgroundColor: color }}
                title={`Click to copy ${color}`}
              >
                <span
                  className="text-xs font-mono font-medium px-1.5 py-0.5 rounded"
                  style={{ color: light ? "#1a1a1a" : "#ffffff" }}
                >
                  {isCopied ? "Copied!" : color.toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </GeneratorPreview>
  );
};

export default ColorPalettePreview;
