"use client";

import GeneratorControls from "@/components/generators/common/GeneratorControls";
import type { BlobOptions } from "@/lib/generators/blob";
import { Shuffle } from "lucide-react";

interface BlobControlsProps {
  options: BlobOptions;
  onChange: (options: BlobOptions) => void;
  onRandomize: () => void;
}

const BlobControls = ({
  options,
  onChange,
  onRandomize,
}: BlobControlsProps) => {
  const updateOption = <K extends keyof BlobOptions>(
    key: K,
    value: BlobOptions[K],
  ) => {
    onChange({ ...options, [key]: value });
  };

  return (
    <GeneratorControls title="Controls">
      <button
        onClick={onRandomize}
        className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-(--color-primary) text-white text-sm font-medium hover:bg-[#5254d4] transition-all duration-300 cursor-pointer"
      >
        <Shuffle size={14} />
        Randomize
      </button>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Complexity: {options.complexity}
        </label>
        <input
          type="range"
          min={3}
          max={20}
          value={options.complexity}
          onChange={(e) => updateOption("complexity", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Contrast: {options.contrast}%
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={options.contrast}
          onChange={(e) => updateOption("contrast", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Size: {options.size}px
        </label>
        <input
          type="range"
          min={100}
          max={800}
          value={options.size}
          onChange={(e) => updateOption("size", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">Fill Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={options.fillColor}
            onChange={(e) => updateOption("fillColor", e.target.value)}
            className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
          />
          <input
            type="text"
            value={options.fillColor}
            onChange={(e) => updateOption("fillColor", e.target.value)}
            className="flex-1 px-2 py-1.5 rounded-md bg-(--color-background) border border-(--color-border) text-xs text-(--color-foreground)"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">Stroke Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={
              options.strokeColor === "transparent"
                ? "#000000"
                : options.strokeColor
            }
            onChange={(e) => updateOption("strokeColor", e.target.value)}
            className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
          />
          <input
            type="text"
            value={options.strokeColor}
            onChange={(e) => updateOption("strokeColor", e.target.value)}
            className="flex-1 px-2 py-1.5 rounded-md bg-(--color-background) border border-(--color-border) text-xs text-(--color-foreground)"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Stroke Width: {options.strokeWidth}
        </label>
        <input
          type="range"
          min={0}
          max={10}
          value={options.strokeWidth}
          onChange={(e) => updateOption("strokeWidth", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>
    </GeneratorControls>
  );
};

export default BlobControls;
