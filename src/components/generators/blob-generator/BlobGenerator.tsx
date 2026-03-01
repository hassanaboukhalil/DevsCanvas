"use client";

import GeneratorLayout from "@/components/generators/common/GeneratorLayout";
import BlobControls from "./BlobControls";
import BlobPreview from "./BlobPreview";
import BlobExport from "./BlobExport";
import { generateBlob, type BlobOptions } from "@/lib/generators/blob";
import { useMemo, useState, useCallback } from "react";

const defaultOptions: BlobOptions = {
  complexity: 7,
  contrast: 50,
  size: 400,
  fillColor: "#6366F1",
  strokeColor: "transparent",
  strokeWidth: 0,
  seed: 42,
};

const BlobGenerator = () => {
  const [options, setOptions] = useState<BlobOptions>(defaultOptions);
  const svgOutput = useMemo(() => generateBlob(options), [options]);

  const randomize = useCallback(() => {
    setOptions((prev) => ({
      ...prev,
      seed: Math.floor(Math.random() * 100000),
    }));
  }, []);

  return (
    <GeneratorLayout
      controls={
        <BlobControls
          options={options}
          onChange={setOptions}
          onRandomize={randomize}
        />
      }
      preview={<BlobPreview svg={svgOutput} />}
      exportPanel={<BlobExport svg={svgOutput} />}
    />
  );
};

export default BlobGenerator;
