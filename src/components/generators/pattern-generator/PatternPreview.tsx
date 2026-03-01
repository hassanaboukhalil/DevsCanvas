import GeneratorPreview from "@/components/generators/common/GeneratorPreview";

interface PatternPreviewProps {
  svg: string;
}

const PatternPreview = ({ svg }: PatternPreviewProps) => {
  return (
    <GeneratorPreview>
      <div
        className="w-full max-w-md"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </GeneratorPreview>
  );
};

export default PatternPreview;
