"use client";

import GeneratorLayout from "@/components/generators/common/GeneratorLayout";
import BoxShadowControls from "./BoxShadowControls";
import BoxShadowPreview from "./BoxShadowPreview";
import BoxShadowExport from "./BoxShadowExport";
import {
  generateBoxShadow,
  createDefaultLayer,
  type BoxShadowOptions,
} from "@/lib/generators/box-shadow";
import { useMemo, useState } from "react";

const defaultOptions: BoxShadowOptions = {
  layers: [createDefaultLayer()],
  previewBackground: "#1a1a1a",
  previewBoxColor: "#ffffff",
  previewBorderRadius: 12,
};

const BoxShadowGenerator = () => {
  const [options, setOptions] = useState<BoxShadowOptions>(defaultOptions);
  const shadow = useMemo(() => generateBoxShadow(options), [options]);

  return (
    <GeneratorLayout
      controls={<BoxShadowControls options={options} onChange={setOptions} />}
      preview={
        <BoxShadowPreview
          shadow={shadow}
          boxColor={options.previewBoxColor}
          background={options.previewBackground}
          borderRadius={options.previewBorderRadius}
        />
      }
      exportPanel={<BoxShadowExport options={options} shadow={shadow} />}
    />
  );
};

export default BoxShadowGenerator;
