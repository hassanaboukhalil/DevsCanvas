import type { ReactNode } from "react";

interface GeneratorControlsProps {
  children: ReactNode;
  title?: string;
}

const GeneratorControls = ({
  children,
  title = "Controls",
}: GeneratorControlsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-(--color-foreground)">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default GeneratorControls;
