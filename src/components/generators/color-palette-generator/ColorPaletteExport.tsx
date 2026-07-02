"use client";

import ExportPanel from "@/components/generators/common/ExportPanel";
import {
  generatePaletteCSSVariables,
  generatePaletteTailwindConfig,
  generatePaletteJSON,
  generatePaletteSCSS,
  type ColorPaletteOptions,
} from "@/lib/generators/color-palette";
import { Clipboard, Code2, FileCode, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type CodeTab = "CSS" | "JSON" | "SCSS" | "Tailwind";
const codeTabs: CodeTab[] = ["CSS", "JSON", "SCSS", "Tailwind"];

interface ColorPaletteExportProps {
  options: ColorPaletteOptions;
  colors: string[];
}

const ColorPaletteExport = ({ colors }: ColorPaletteExportProps) => {
  const [activeTab, setActiveTab] = useState<CodeTab>("CSS");

  const cssCode = useMemo(() => generatePaletteCSSVariables(colors), [colors]);
  const tailwindCode = useMemo(() => generatePaletteTailwindConfig(colors), [colors]);
  const jsonCode = useMemo(() => generatePaletteJSON(colors), [colors]);
  const scssCode = useMemo(() => generatePaletteSCSS(colors), [colors]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const buttons = [
    {
      label: "Copy CSS Variables",
      icon: <Clipboard size={14} />,
      onClick: () => copyToClipboard(cssCode),
    },
    {
      label: "Copy Tailwind Config",
      icon: <Code2 size={14} />,
      onClick: () => copyToClipboard(tailwindCode),
    },
    {
      label: "Copy JSON",
      icon: <FileCode size={14} />,
      onClick: () => copyToClipboard(jsonCode),
    },
    {
      label: "Copy SCSS",
      icon: <Sparkles size={14} />,
      onClick: () => copyToClipboard(scssCode),
    },
  ];

  const codeByTab: Record<CodeTab, string> = {
    CSS: cssCode,
    JSON: jsonCode,
    SCSS: scssCode,
    Tailwind: tailwindCode,
  };

  return (
    <div className="space-y-4">
      {/* Export buttons via shared component (without its built-in code preview) */}
      <ExportPanel buttons={buttons} />

      {/* Custom 4-tab code preview */}
      <div className="flex rounded-lg border border-(--color-border) overflow-x-auto">
        {codeTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-(--color-primary) text-white"
                : "text-(--color-muted) hover:text-(--color-foreground)"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-(--color-border) bg-(--color-background) p-3 overflow-x-auto">
        <pre className="text-xs text-(--color-muted) whitespace-pre-wrap break-all">
          <code>{codeByTab[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
};

export default ColorPaletteExport;
