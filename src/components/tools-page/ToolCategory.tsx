import Badge from "@/components/ui/Badge";

interface ToolCategoryProps {
  category: string;
  active?: boolean;
  onClick?: () => void;
}

const ToolCategory = ({
  category,
  active = false,
  onClick,
}: ToolCategoryProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
        active
          ? "bg-(--color-primary) text-white"
          : "bg-(--color-background-card) text-(--color-muted) border border-(--color-border) hover:text-(--color-foreground)"
      }`}
    >
      {category}
    </button>
  );
};

export default ToolCategory;
