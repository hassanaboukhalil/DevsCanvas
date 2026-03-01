"use client";

import GeneratorControls from "@/components/generators/common/GeneratorControls";
import type { PatternOptions, PatternType } from "@/lib/generators/pattern";

interface PatternControlsProps {
  options: PatternOptions;
  onChange: (options: PatternOptions) => void;
}

const patternTypes: { value: PatternType; label: string }[] = [
  { value: "dots", label: "Dots" },
  { value: "lines", label: "Lines" },
  { value: "grid", label: "Grid" },
  { value: "crosshatch", label: "Crosshatch" },
  { value: "zigzag", label: "Zigzag" },
  { value: "diamonds", label: "Diamonds" },
];

const PatternControls = ({ options, onChange }: PatternControlsProps) => {
  const updateOption = <K extends keyof PatternOptions>(
    key: K,
    value: PatternOptions[K],
  ) => {
    onChange({ ...options, [key]: value });
  };

  return (
    <GeneratorControls title="Controls">
      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">Pattern Type</label>
        <select
          value={options.type}
          onChange={(e) => updateOption("type", e.target.value as PatternType)}
          className="w-full px-3 py-2 rounded-lg bg-(--color-background) border border-(--color-border) text-sm text-(--color-foreground) appearance-none cursor-pointer"
        >
          {patternTypes.map((pt) => (
            <option key={pt.value} value={pt.value}>
              {pt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Size: {options.size}
        </label>
        <input
          type="range"
          min={1}
          max={20}
          value={options.size}
          onChange={(e) => updateOption("size", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Spacing: {options.spacing}
        </label>
        <input
          type="range"
          min={5}
          max={60}
          value={options.spacing}
          onChange={(e) => updateOption("spacing", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Stroke Width: {options.strokeWidth}
        </label>
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.5}
          value={options.strokeWidth}
          onChange={(e) => updateOption("strokeWidth", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Rotation: {options.rotation}°
        </label>
        <input
          type="range"
          min={0}
          max={360}
          value={options.rotation}
          onChange={(e) => updateOption("rotation", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">Foreground Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={options.foregroundColor}
            onChange={(e) => updateOption("foregroundColor", e.target.value)}
            className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
          />
          <input
            type="text"
            value={options.foregroundColor}
            onChange={(e) => updateOption("foregroundColor", e.target.value)}
            className="flex-1 px-2 py-1.5 rounded-md bg-(--color-background) border border-(--color-border) text-xs text-(--color-foreground)"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">Background Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={options.backgroundColor}
            onChange={(e) => updateOption("backgroundColor", e.target.value)}
            className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
          />
          <input
            type="text"
            value={options.backgroundColor}
            onChange={(e) => updateOption("backgroundColor", e.target.value)}
            className="flex-1 px-2 py-1.5 rounded-md bg-(--color-background) border border-(--color-border) text-xs text-(--color-foreground)"
          />
        </div>
      </div>
    </GeneratorControls>
  );
};

export default PatternControls;
