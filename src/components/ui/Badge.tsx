import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "violet" | "green" | "default";
  className?: string;
}

const colorMap = {
  blue: "bg-(--color-primary-10) text-(--color-primary) border-(--color-primary-20)",
  violet:
    "bg-(--color-violet-10) text-(--color-violet) border-(--color-violet-20)",
  green: "bg-(--color-green-10) text-(--color-green) border-(--color-green-20)",
  default:
    "bg-(--color-primary-10) text-(--color-primary) border-(--color-primary-20)",
};

const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium",
        colorMap[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
