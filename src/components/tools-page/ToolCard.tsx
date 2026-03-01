import Link from "next/link";
import type { Tool } from "@/constants/tools";
import Badge from "@/components/ui/Badge";

interface ToolCardProps {
  tool: Tool;
}

const badgeVariant = (category: string) => {
  switch (category) {
    case "SVG":
      return "violet" as const;
    case "CSS":
      return "green" as const;
    case "Color":
      return "blue" as const;
    default:
      return "default" as const;
  }
};

const ToolCard = ({ tool }: ToolCardProps) => {
  const Icon = tool.icon;

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group rounded-xl border border-(--color-border) bg-(--color-background-card) p-6 transition-all duration-300 hover:bg-(--color-background-card-hover) hover:border-(--color-muted)/20 block"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-lg bg-(--color-primary-10) flex-center">
          <Icon size={24} className="text-(--color-primary)" />
        </div>
        <Badge variant={badgeVariant(tool.category)}>{tool.category}</Badge>
      </div>
      <h3 className="text-lg font-semibold text-(--color-foreground) mb-1">
        {tool.name}
      </h3>
      <p className="text-sm text-(--color-muted) leading-relaxed">
        {tool.description}
      </p>
    </Link>
  );
};

export default ToolCard;
