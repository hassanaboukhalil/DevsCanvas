"use client";

import GeneratorLayout from "@/components/generators/common/GeneratorLayout";
import GradientControls from "./GradientControls";
import GradientPreview from "./GradientPreview";
import GradientExport from "./GradientExport";
import {
  generateGradient,
  type GradientOptions,
  type GradientColorStop,
} from "@/lib/generators/gradient";
import { useMemo, useState } from "react";

const defaultOptions: GradientOptions = {
  type: "linear",
  angle: 135,
  colorStops: [
    { color: "#6366F1", position: 0 },
    { color: "#8B5CF6", position: 100 },
  ],
};

const GradientGenerator = () => {
  const [options, setOptions] = useState<GradientOptions>(defaultOptions);
  const cssOutput = useMemo(() => generateGradient(options), [options]);

  return (
    <GeneratorLayout
      controls={<GradientControls options={options} onChange={setOptions} />}
      preview={<GradientPreview gradient={cssOutput} />}
      exportPanel={<GradientExport options={options} gradient={cssOutput} />}
    />
  );
};

export default GradientGenerator;
