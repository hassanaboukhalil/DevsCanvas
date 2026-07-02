"use client";

import ExportPanel from "@/components/generators/common/ExportPanel";
import { generateSvgReactSnippet } from "@/components/generators/common/svgReactSnippet";
import { Clipboard, FileCode, Download } from "lucide-react";

interface WaveExportProps {
  svg: string;
}

const WaveExport = ({ svg }: WaveExportProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadSVG = () => {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wave.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  const reactComponent = generateSvgReactSnippet("WaveBackground", svg);

  const buttons = [
    {
      label: "Copy SVG",
      icon: <Clipboard size={14} />,
      onClick: () => copyToClipboard(svg),
    },
    {
      label: "Copy React Component",
      icon: <FileCode size={14} />,
      onClick: () => copyToClipboard(reactComponent),
    },
    {
      label: "Download SVG",
      icon: <Download size={14} />,
      onClick: downloadSVG,
    },
  ];

  return <ExportPanel buttons={buttons} codePreview={svg} />;
};

export default WaveExport;
