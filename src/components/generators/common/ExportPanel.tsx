"use client";

import { useState, type ReactNode } from "react";

interface ExportButton {
  label: string;
  icon: ReactNode;
  onClick: () => void;
}

interface ExportPanelProps {
  buttons: ExportButton[];
  codePreview?: string;
  codeType?: "CSS" | "SVG";
  onCodeTypeChange?: (type: "CSS" | "SVG") => void;
}

const ExportPanel = ({
  buttons,
  codePreview,
  codeType,
  onCodeTypeChange,
}: ExportPanelProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number, onClick: () => void) => {
    onClick();
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-(--color-foreground)">
        Export
      </h3>

      <div className="space-y-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleCopy(index, button.onClick)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-(--color-border) text-sm text-(--color-foreground) hover:bg-(--color-background-card-hover) transition-all duration-300 cursor-pointer"
          >
            <span className="text-(--color-muted)">{button.icon}</span>
            <span>{copiedIndex === index ? "Copied!" : button.label}</span>
          </button>
        ))}
      </div>

      {codePreview && (
        <>
          {codeType && onCodeTypeChange && (
            <div className="flex rounded-lg border border-(--color-border) overflow-hidden">
              {(["CSS", "SVG"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => onCodeTypeChange(type)}
                  className={`flex-1 px-3 py-1.5 text-xs font-medium transition-all duration-300 cursor-pointer ${
                    codeType === type
                      ? "bg-(--color-primary) text-white"
                      : "text-(--color-muted) hover:text-(--color-foreground)"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
          <div className="rounded-lg border border-(--color-border) bg-(--color-background) p-3 overflow-x-auto">
            <pre className="text-xs text-(--color-muted) whitespace-pre-wrap break-all">
              <code>{codePreview}</code>
            </pre>
          </div>
        </>
      )}
    </div>
  );
};

export default ExportPanel;
