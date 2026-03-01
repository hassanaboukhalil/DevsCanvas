import GeneratorPreview from "@/components/generators/common/GeneratorPreview";

interface BlobPreviewProps {
  svg: string;
}

const BlobPreview = ({ svg }: BlobPreviewProps) => {
  return (
    <GeneratorPreview>
      <div
        className="w-full max-w-md"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </GeneratorPreview>
  );
};

export default BlobPreview;
