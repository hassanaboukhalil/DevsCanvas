"use client";

import GeneratorLayout from "@/components/generators/common/GeneratorLayout";
import WaveControls from "./WaveControls";
import WavePreview from "./WavePreview";
import WaveExport from "./WaveExport";
import { generateWave, type WaveOptions } from "@/lib/generators/wave";
import { useMemo, useState, useCallback } from "react";

const defaultOptions: WaveOptions = {
  layers: 3,
  points: 5,
  amplitude: 60,
  width: 800,
  height: 400,
  colors: ["#6366F1", "#8B5CF6", "#A78BFA"],
  seed: 42,
};

const WaveGenerator = () => {
  const [options, setOptions] = useState<WaveOptions>(defaultOptions);
  const svgOutput = useMemo(() => generateWave(options), [options]);

  const randomize = useCallback(() => {
    setOptions((prev) => ({
      ...prev,
      seed: Math.floor(Math.random() * 100000),
    }));
  }, []);

  return (
    <GeneratorLayout
      controls={
        <WaveControls
          options={options}
          onChange={setOptions}
          onRandomize={randomize}
        />
      }
      preview={<WavePreview svg={svgOutput} />}
      exportPanel={<WaveExport svg={svgOutput} />}
    />
  );
};

export default WaveGenerator;
