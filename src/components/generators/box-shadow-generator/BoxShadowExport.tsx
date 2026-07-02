"use client";

import ExportPanel from "@/components/generators/common/ExportPanel";
import {
  generateBoxShadowCSS,
  generateBoxShadowTailwind,
  generateBoxShadowReact,
  type BoxShadowOptions,
} from "@/lib/generators/box-shadow";
import { Clipboard, Code2, Sparkles } from "lucide-react";
import { useMemo } from "react";

interface BoxShadowExportProps {
  options: BoxShadowOptions;
}

const BoxShadowExport = ({ options }: BoxShadowExportProps) => {
  const cssCode = useMemo(() => generateBoxShadowCSS(options), [options]);
  const tailwindCode = useMemo(
    () => generateBoxShadowTailwind(options),
    [options],
  );
  const reactCode = useMemo(() => generateBoxShadowReact(options), [options]);

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
      label: "Copy React Component",
      icon: <Sparkles size={14} />,
      onClick: () => copyToClipboard(reactCode),
    },
  ];

  return <ExportPanel buttons={buttons} codePreview={cssCode} />;
};

export default BoxShadowExport;
