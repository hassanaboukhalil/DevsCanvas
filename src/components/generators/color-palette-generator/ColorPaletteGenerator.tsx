"use client";

import GeneratorLayout from "@/components/generators/common/GeneratorLayout";
import ColorPaletteControls from "./ColorPaletteControls";
import ColorPalettePreview from "./ColorPalettePreview";
import ColorPaletteExport from "./ColorPaletteExport";
import {
  generatePalette,
  type ColorPaletteOptions,
} from "@/lib/generators/color-palette";
import { useMemo, useState } from "react";

const defaultOptions: ColorPaletteOptions = {
  baseColor: "#6366F1",
  paletteType: "analogous",
  numColors: 5,
  saturationAdjust: 0,
  lightnessAdjust: 0,
};

const ColorPaletteGenerator = () => {
  const [options, setOptions] = useState<ColorPaletteOptions>(defaultOptions);
  const colors = useMemo(() => generatePalette(options), [options]);

  return (
    <GeneratorLayout
      controls={
        <ColorPaletteControls options={options} onChange={setOptions} />
      }
      preview={<ColorPalettePreview colors={colors} />}
      exportPanel={<ColorPaletteExport options={options} colors={colors} />}
    />
  );
};

export default ColorPaletteGenerator;
