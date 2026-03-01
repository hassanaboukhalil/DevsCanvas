import GeneratorPreview from "@/components/generators/common/GeneratorPreview";

interface WavePreviewProps {
  svg: string;
}

const WavePreview = ({ svg }: WavePreviewProps) => {
  return (
    <GeneratorPreview>
      <div className="w-full" dangerouslySetInnerHTML={{ __html: svg }} />
    </GeneratorPreview>
  );
};

export default WavePreview;
