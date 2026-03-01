"use client";

import GeneratorLayout from "@/components/generators/common/GeneratorLayout";
import PatternControls from "./PatternControls";
import PatternPreview from "./PatternPreview";
import PatternExport from "./PatternExport";
import { generatePattern, type PatternOptions } from "@/lib/generators/pattern";
import { useMemo, useState } from "react";

const defaultOptions: PatternOptions = {
  type: "dots",
  size: 4,
  spacing: 20,
  strokeWidth: 1,
  foregroundColor: "#6366F1",
  backgroundColor: "#0a0a0a",
  rotation: 0,
};

const PatternGenerator = () => {
  const [options, setOptions] = useState<PatternOptions>(defaultOptions);
  const svgOutput = useMemo(() => generatePattern(options), [options]);

  return (
    <GeneratorLayout
      controls={<PatternControls options={options} onChange={setOptions} />}
      preview={<PatternPreview svg={svgOutput} />}
      exportPanel={<PatternExport svg={svgOutput} />}
    />
  );
};

export default PatternGenerator;
