"use client";

import ExportPanel from "@/components/generators/common/ExportPanel";
import { Clipboard, FileCode, Download } from "lucide-react";

interface PatternExportProps {
  svg: string;
}

const PatternExport = ({ svg }: PatternExportProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadSVG = () => {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "pattern.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  const cssBackground = `background-image: url("data:image/svg+xml,${encodeURIComponent(svg)}");`;

  const reactComponent = `const PatternBackground = () => (
  <div
    style={{
      backgroundImage: \`url("data:image/svg+xml,${encodeURIComponent(svg)}")\`,
      width: '100%',
      height: '400px',
    }}
  />
);`;

  const buttons = [
    {
      label: "Copy SVG",
      icon: <Clipboard size={14} />,
      onClick: () => copyToClipboard(svg),
    },
    {
      label: "Copy CSS Background",
      icon: <FileCode size={14} />,
      onClick: () => copyToClipboard(cssBackground),
    },
    {
      label: "Download SVG",
      icon: <Download size={14} />,
      onClick: downloadSVG,
    },
  ];

  return <ExportPanel buttons={buttons} codePreview={svg} />;
};

export default PatternExport;
