import type { ReactNode } from "react";

interface GeneratorLayoutProps {
  controls: ReactNode;
  preview: ReactNode;
  exportPanel: ReactNode;
}

const GeneratorLayout = ({
  controls,
  preview,
  exportPanel,
}: GeneratorLayoutProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-4 w-full min-h-[calc(100vh-200px)]">
      {/* Left panel - Controls */}
      <div className="rounded-xl border border-(--color-border) bg-(--color-background-card) p-5 overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-none">
        {controls}
      </div>

      {/* Center panel - Preview */}
      <div className="rounded-xl border border-(--color-border) bg-(--color-background-card) flex-center overflow-hidden min-h-[300px]">
        {preview}
      </div>

      {/* Right panel - Export */}
      <div className="rounded-xl border border-(--color-border) bg-(--color-background-card) p-5 overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-none">
        {exportPanel}
      </div>
    </div>
  );
};

export default GeneratorLayout;
