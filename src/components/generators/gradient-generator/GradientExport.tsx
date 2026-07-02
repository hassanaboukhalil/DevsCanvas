"use client";

import ExportPanel from "@/components/generators/common/ExportPanel";
import {
  generateGradientCSS,
  generateGradientTailwind,
  generateGradientSVG,
  generateGradientReact,
  type GradientOptions,
} from "@/lib/generators/gradient";
import { Clipboard, Code2, FileCode, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

interface GradientExportProps {
  options: GradientOptions;
}

const GradientExport = ({ options }: GradientExportProps) => {
  const [codeType, setCodeType] = useState<"CSS" | "SVG">("CSS");

  const cssCode = useMemo(() => generateGradientCSS(options), [options]);
  const svgCode = useMemo(() => generateGradientSVG(options), [options]);
  const reactCode = useMemo(() => generateGradientReact(options), [options]);
  const tailwindCode = useMemo(
    () => generateGradientTailwind(options),
    [options],
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const buttons = [
    {
      label: "Copy CSS",
      icon: <Clipboard size={14} />,
      onClick: () => copyToClipboard(cssCode),
    },
    {
      label: "Copy Tailwind",
      icon: <Code2 size={14} />,
      onClick: () => copyToClipboard(tailwindCode),
    },
    {
      label: "Copy SVG",
      icon: <FileCode size={14} />,
      onClick: () => copyToClipboard(svgCode),
    },
    {
      label: "Copy React Component",
      icon: <Sparkles size={14} />,
      onClick: () => copyToClipboard(reactCode),
    },
  ];

  const codePreview = codeType === "CSS" ? cssCode : svgCode;

  return (
    <ExportPanel
      buttons={buttons}
      codePreview={codePreview}
      codeType={codeType}
      onCodeTypeChange={setCodeType}
    />
  );
};

export default GradientExport;
