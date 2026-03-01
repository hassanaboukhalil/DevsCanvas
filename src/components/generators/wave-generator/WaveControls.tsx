"use client";

import GeneratorControls from "@/components/generators/common/GeneratorControls";
import type { WaveOptions } from "@/lib/generators/wave";
import { Shuffle, Plus } from "lucide-react";

interface WaveControlsProps {
  options: WaveOptions;
  onChange: (options: WaveOptions) => void;
  onRandomize: () => void;
}

const WaveControls = ({
  options,
  onChange,
  onRandomize,
}: WaveControlsProps) => {
  const updateOption = <K extends keyof WaveOptions>(
    key: K,
    value: WaveOptions[K],
  ) => {
    onChange({ ...options, [key]: value });
  };

  const updateColor = (index: number, color: string) => {
    const newColors = [...options.colors];
    newColors[index] = color;
    updateOption("colors", newColors);
  };

  const addColor = () => {
    updateOption("colors", [...options.colors, "#6366F1"]);
  };

  const removeColor = (index: number) => {
    if (options.colors.length <= 1) return;
    updateOption(
      "colors",
      options.colors.filter((_, i) => i !== index),
    );
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
          Layers: {options.layers}
        </label>
        <input
          type="range"
          min={1}
          max={5}
          value={options.layers}
          onChange={(e) => updateOption("layers", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Points: {options.points}
        </label>
        <input
          type="range"
          min={2}
          max={10}
          value={options.points}
          onChange={(e) => updateOption("points", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Amplitude: {options.amplitude}
        </label>
        <input
          type="range"
          min={10}
          max={150}
          value={options.amplitude}
          onChange={(e) => updateOption("amplitude", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs text-(--color-muted)">Colors</label>
          <button
            onClick={addColor}
            className="flex items-center gap-1 text-xs text-(--color-primary) hover:text-(--color-foreground) transition-colors duration-300 cursor-pointer"
          >
            <Plus size={12} />
            Add
          </button>
        </div>
        {options.colors.map((color, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="color"
              value={color}
              onChange={(e) => updateColor(index, e.target.value)}
              className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
            />
            <input
              type="text"
              value={color}
              onChange={(e) => updateColor(index, e.target.value)}
              className="flex-1 px-2 py-1.5 rounded-md bg-(--color-background) border border-(--color-border) text-xs text-(--color-foreground)"
            />
            {options.colors.length > 1 && (
              <button
                onClick={() => removeColor(index)}
                className="text-xs text-(--color-muted) hover:text-red-400 transition-colors duration-300 cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
    </GeneratorControls>
  );
};

export default WaveControls;
