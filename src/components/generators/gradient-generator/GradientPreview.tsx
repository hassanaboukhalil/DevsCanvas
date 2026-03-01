import GeneratorPreview from "@/components/generators/common/GeneratorPreview";

interface GradientPreviewProps {
  gradient: string;
}

const GradientPreview = ({ gradient }: GradientPreviewProps) => {
  return (
    <GeneratorPreview>
      <div
        className="w-full h-full min-h-[300px] rounded-lg"
        style={{ background: gradient }}
      />
    </GeneratorPreview>
  );
};

export default GradientPreview;
