import type { ReactNode } from "react";

interface GeneratorPreviewProps {
  children: ReactNode;
}

const GeneratorPreview = ({ children }: GeneratorPreviewProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      {children}
    </div>
  );
};

export default GeneratorPreview;
