import GeneratorPreview from "@/components/generators/common/GeneratorPreview";

interface BoxShadowPreviewProps {
  shadow: string;
  boxColor: string;
  background: string;
  borderRadius: number;
}

const BoxShadowPreview = ({
  shadow,
  boxColor,
  background,
  borderRadius,
}: BoxShadowPreviewProps) => {
  return (
    <GeneratorPreview>
      <div
        className="w-full h-full min-h-[300px] rounded-lg flex items-center justify-center"
        style={{ background }}
      >
        <div
          style={{
            boxShadow: shadow,
            backgroundColor: boxColor,
            borderRadius: `${borderRadius}px`,
            width: "200px",
            height: "200px",
          }}
        />
      </div>
    </GeneratorPreview>
  );
};

export default BoxShadowPreview;
