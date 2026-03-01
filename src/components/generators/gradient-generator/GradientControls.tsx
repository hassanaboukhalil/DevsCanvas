"use client";

import GeneratorControls from "@/components/generators/common/GeneratorControls";
import type {
  GradientOptions,
  GradientColorStop,
} from "@/lib/generators/gradient";
import { Plus } from "lucide-react";

interface GradientControlsProps {
  options: GradientOptions;
  onChange: (options: GradientOptions) => void;
}

const GradientControls = ({ options, onChange }: GradientControlsProps) => {
  const updateOption = <K extends keyof GradientOptions>(
    key: K,
    value: GradientOptions[K],
  ) => {
    onChange({ ...options, [key]: value });
  };

  const updateColorStop = (
    index: number,
    updates: Partial<GradientColorStop>,
  ) => {
    const newStops = options.colorStops.map((stop, i) =>
      i === index ? { ...stop, ...updates } : stop,
    );
    updateOption("colorStops", newStops);
  };

  const addColorStop = () => {
    const lastStop = options.colorStops[options.colorStops.length - 1];
    const newStop: GradientColorStop = {
      color: "#ffffff",
      position: Math.min(100, (lastStop?.position ?? 0) + 25),
    };
    updateOption("colorStops", [...options.colorStops, newStop]);
  };

  const removeColorStop = (index: number) => {
    if (options.colorStops.length <= 2) return;
    updateOption(
      "colorStops",
      options.colorStops.filter((_, i) => i !== index),
    );
  };

  return (
    <GeneratorControls title="Controls">
      {/* Gradient Type */}
      <div className="space-y-2">
        <label className="text-xs text-(--color-muted)">Gradient Type</label>
        <select
          value={options.type}
          onChange={(e) =>
            updateOption("type", e.target.value as GradientOptions["type"])
          }
          className="w-full px-3 py-2 rounded-lg bg-(--color-background) border border-(--color-border) text-sm text-(--color-foreground) appearance-none cursor-pointer"
        >
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
          <option value="conic">Conic</option>
        </select>
      </div>

      {/* Angle */}
      {options.type !== "radial" && (
        <div className="space-y-2">
          <label className="text-xs text-(--color-muted)">
            Angle: {options.angle}°
          </label>
          <input
            type="range"
            min={0}
            max={360}
            value={options.angle}
            onChange={(e) => updateOption("angle", Number(e.target.value))}
            className="w-full accent-(--color-primary)"
          />
        </div>
      )}

      {/* Color Stops */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs text-(--color-muted)">Color Stops</label>
          <button
            onClick={addColorStop}
            className="flex items-center gap-1 text-xs text-(--color-primary) hover:text-(--color-foreground) transition-colors duration-300 cursor-pointer"
          >
            <Plus size={12} />
            Add
          </button>
        </div>

        {options.colorStops.map((stop, index) => (
          <div
            key={index}
            className="space-y-2 pb-3 border-b border-(--color-border) last:border-0"
          >
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={stop.color}
                onChange={(e) =>
                  updateColorStop(index, { color: e.target.value })
                }
                className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
              />
              <input
                type="text"
                value={stop.color}
                onChange={(e) =>
                  updateColorStop(index, { color: e.target.value })
                }
                className="flex-1 px-2 py-1.5 rounded-md bg-(--color-background) border border-(--color-border) text-xs text-(--color-foreground)"
              />
              {options.colorStops.length > 2 && (
                <button
                  onClick={() => removeColorStop(index)}
                  className="text-xs text-(--color-muted) hover:text-red-400 transition-colors duration-300 cursor-pointer"
                >
                  ×
                </button>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-xs text-(--color-muted)">
                Position: {stop.position}%
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={stop.position}
                onChange={(e) =>
                  updateColorStop(index, { position: Number(e.target.value) })
                }
                className="w-full accent-(--color-primary)"
              />
            </div>
          </div>
        ))}
      </div>
    </GeneratorControls>
  );
};

export default GradientControls;
