"use client";

import GeneratorControls from "@/components/generators/common/GeneratorControls";
import type { ColorPaletteOptions, PaletteType } from "@/lib/generators/color-palette";
import { Shuffle } from "lucide-react";

interface ColorPaletteControlsProps {
  options: ColorPaletteOptions;
  onChange: (options: ColorPaletteOptions) => void;
}

const paletteTypes: { value: PaletteType; label: string }[] = [
  { value: "analogous", label: "Analogous" },
  { value: "complementary", label: "Complementary" },
  { value: "triadic", label: "Triadic" },
  { value: "tetradic", label: "Tetradic" },
  { value: "monochromatic", label: "Monochromatic" },
  { value: "split-complementary", label: "Split-Complementary" },
];

const ColorPaletteControls = ({ options, onChange }: ColorPaletteControlsProps) => {
  const updateOption = <K extends keyof ColorPaletteOptions>(
    key: K,
    value: ColorPaletteOptions[K],
  ) => {
    onChange({ ...options, [key]: value });
  };

  const handleHexInput = (value: string) => {
    // Allow typing — only apply if valid
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      updateOption("baseColor", value);
    }
  };

  const randomize = () => {
    const randomHex =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    const randomType =
      paletteTypes[Math.floor(Math.random() * paletteTypes.length)].value;
    onChange({
      ...options,
      baseColor: randomHex,
      paletteType: randomType,
    });
  };

  return (
    <GeneratorControls title="Controls">
      {/* Base Color */}
      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">Base Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={options.baseColor}
            onChange={(e) => updateOption("baseColor", e.target.value)}
            className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
          />
          <input
            type="text"
            value={options.baseColor}
            onChange={(e) => handleHexInput(e.target.value)}
            className="flex-1 px-2 py-1.5 rounded-md bg-(--color-background) border border-(--color-border) text-xs text-(--color-foreground)"
          />
        </div>
      </div>

      {/* Palette Type */}
      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">Palette Type</label>
        <select
          value={options.paletteType}
          onChange={(e) => updateOption("paletteType", e.target.value as PaletteType)}
          className="w-full px-3 py-2 rounded-lg bg-(--color-background) border border-(--color-border) text-sm text-(--color-foreground) appearance-none cursor-pointer"
        >
          {paletteTypes.map((pt) => (
            <option key={pt.value} value={pt.value}>
              {pt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Number of Colors */}
      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Colors: {options.numColors}
        </label>
        <input
          type="range"
          min={3}
          max={10}
          value={options.numColors}
          onChange={(e) => updateOption("numColors", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      {/* Saturation Adjustment */}
      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Saturation: {options.saturationAdjust}
        </label>
        <input
          type="range"
          min={-50}
          max={50}
          value={options.saturationAdjust}
          onChange={(e) => updateOption("saturationAdjust", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      {/* Lightness Adjustment */}
      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">
          Lightness: {options.lightnessAdjust}
        </label>
        <input
          type="range"
          min={-50}
          max={50}
          value={options.lightnessAdjust}
          onChange={(e) => updateOption("lightnessAdjust", Number(e.target.value))}
          className="w-full accent-(--color-primary)"
        />
      </div>

      {/* Randomize */}
      <button
        onClick={randomize}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-(--color-primary) text-sm text-(--color-primary) hover:bg-(--color-primary) hover:text-white transition-all duration-300 cursor-pointer"
      >
        <Shuffle size={14} />
        Randomize
      </button>
    </GeneratorControls>
  );
};

export default ColorPaletteControls;
