import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className, hover = false }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-(--color-border) bg-(--color-background-card) p-6",
        hover &&
          "transition-all duration-300 hover:bg-(--color-background-card-hover) hover:border-(--color-muted)/20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
