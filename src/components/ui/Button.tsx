import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary: "bg-(--color-primary) text-white hover:bg-[#5254d4]",
    secondary:
      "bg-(--color-background-card) text-(--color-foreground) border border-(--color-border) hover:bg-(--color-background-card-hover)",
    outline:
      "border border-(--color-border) text-(--color-foreground) hover:bg-(--color-background-card)",
    ghost:
      "text-(--color-muted) hover:text-(--color-foreground) hover:bg-(--color-background-card)",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
