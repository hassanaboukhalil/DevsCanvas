"use client";

import GeneratorControls from "@/components/generators/common/GeneratorControls";
import type {
  BoxShadowOptions,
  BoxShadowLayer,
} from "@/lib/generators/box-shadow";
import { createDefaultLayer } from "@/lib/generators/box-shadow";
import { Plus } from "lucide-react";

interface BoxShadowControlsProps {
  options: BoxShadowOptions;
  onChange: (options: BoxShadowOptions) => void;
}

const BoxShadowControls = ({ options, onChange }: BoxShadowControlsProps) => {
  const updateLayer = (id: string, updates: Partial<BoxShadowLayer>) => {
    const newLayers = options.layers.map((layer) =>
      layer.id === id ? { ...layer, ...updates } : layer,
    );
    onChange({ ...options, layers: newLayers });
  };

  const addLayer = () => {
    onChange({ ...options, layers: [...options.layers, createDefaultLayer()] });
  };

  const removeLayer = (id: string) => {
    if (options.layers.length <= 1) return;
    onChange({ ...options, layers: options.layers.filter((l) => l.id !== id) });
  };

  const updateOption = <K extends keyof BoxShadowOptions>(
    key: K,
    value: BoxShadowOptions[K],
  ) => {
    onChange({ ...options, [key]: value });
  };

  return (
    <GeneratorControls title="Controls">
      {/* Shadow Layers */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs text-(--color-muted)">Shadow Layers</label>
          <button
            onClick={addLayer}
            className="flex items-center gap-1 text-xs text-(--color-primary) hover:text-(--color-foreground) transition-colors duration-300 cursor-pointer"
          >
            <Plus size={12} />
            Add
          </button>
        </div>

        {options.layers.map((layer) => (
          <div
            key={layer.id}
            className="space-y-2 pb-3 border-b border-(--color-border) last:border-0"
          >
            <div className="flex items-center justify-between">
              <label className="text-xs text-(--color-muted) font-medium">
                {layer.inset ? "Inset Shadow" : "Shadow"}
              </label>
              {options.layers.length > 1 && (
                <button
                  onClick={() => removeLayer(layer.id)}
                  className="text-xs text-(--color-muted) hover:text-red-400 transition-colors duration-300 cursor-pointer"
                >
                  ×
                </button>
              )}
            </div>

            {/* Offset X */}
            <div className="space-y-1">
              <label className="text-xs text-(--color-muted)">
                Offset X: {layer.offsetX}px
              </label>
              <input
                type="range"
                min={-100}
                max={100}
                value={layer.offsetX}
                onChange={(e) =>
                  updateLayer(layer.id, { offsetX: Number(e.target.value) })
                }
                className="w-full accent-(--color-primary)"
              />
            </div>

            {/* Offset Y */}
            <div className="space-y-1">
              <label className="text-xs text-(--color-muted)">
                Offset Y: {layer.offsetY}px
              </label>
              <input
                type="range"
                min={-100}
                max={100}
                value={layer.offsetY}
                onChange={(e) =>
                  updateLayer(layer.id, { offsetY: Number(e.target.value) })
                }
                className="w-full accent-(--color-primary)"
              />
            </div>

            {/* Blur */}
            <div className="space-y-1">
              <label className="text-xs text-(--color-muted)">
                Blur: {layer.blur}px
              </label>
              <input
                type="range"
                min={0}
                max={200}
                value={layer.blur}
                onChange={(e) =>
                  updateLayer(layer.id, { blur: Number(e.target.value) })
                }
                className="w-full accent-(--color-primary)"
              />
            </div>

            {/* Spread */}
            <div className="space-y-1">
              <label className="text-xs text-(--color-muted)">
                Spread: {layer.spread}px
              </label>
              <input
                type="range"
                min={-100}
                max={100}
                value={layer.spread}
                onChange={(e) =>
                  updateLayer(layer.id, { spread: Number(e.target.value) })
                }
                className="w-full accent-(--color-primary)"
              />
            </div>

            {/* Color */}
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={layer.color.slice(0, 7)}
                onChange={(e) =>
                  updateLayer(layer.id, {
                    color:
                      e.target.value +
                      (layer.color.length > 7 ? layer.color.slice(7) : ""),
                  })
                }
                className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
              />
              <input
                type="text"
                value={layer.color}
                onChange={(e) =>
                  updateLayer(layer.id, { color: e.target.value })
                }
                className="flex-1 px-2 py-1.5 rounded-md bg-(--color-background) border border-(--color-border) text-xs text-(--color-foreground)"
              />
            </div>

            {/* Inset */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={layer.inset}
                onChange={(e) =>
                  updateLayer(layer.id, { inset: e.target.checked })
                }
                className="accent-(--color-primary) cursor-pointer"
              />
              <label className="text-xs text-(--color-muted)">Inset</label>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Settings */}
      <div className="space-y-2">
        <label className="text-xs text-(--color-muted) font-medium">
          Preview Settings
        </label>

        {/* Box Color */}
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={options.previewBoxColor}
            onChange={(e) => updateOption("previewBoxColor", e.target.value)}
            className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
          />
          <label className="text-xs text-(--color-muted)">Box Color</label>
        </div>

        {/* Background Color */}
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={options.previewBackground}
            onChange={(e) => updateOption("previewBackground", e.target.value)}
            className="w-8 h-8 rounded-md border border-(--color-border) cursor-pointer bg-transparent"
          />
          <label className="text-xs text-(--color-muted)">
            Background Color
          </label>
        </div>

        {/* Border Radius */}
        <div className="space-y-1">
          <label className="text-xs text-(--color-muted)">
            Border Radius: {options.previewBorderRadius}px
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={options.previewBorderRadius}
            onChange={(e) =>
              updateOption("previewBorderRadius", Number(e.target.value))
            }
            className="w-full accent-(--color-primary)"
          />
        </div>
      </div>
    </GeneratorControls>
  );
};

export default BoxShadowControls;
