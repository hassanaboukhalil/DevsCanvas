import type { LucideIcon } from "lucide-react";
import { LayoutGrid, SlidersHorizontal, Download } from "lucide-react";

export interface HeroContent {
  title: string;
  highlightedWord: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const heroContent: HeroContent = {
  title: "Open-Source Design Generators for Developers",
  highlightedWord: "Generators",
  subtitle:
    "Create beautiful SVG assets, CSS styles, and color palettes. Export production-ready code in seconds.",
  primaryCta: { label: "Explore Tools", href: "/tools" },
  secondaryCta: {
    label: "View on GitHub",
    href: "https://github.com/username/devscanvas",
  },
};

export interface FeaturedSection {
  title: string;
  subtitle: string;
}

export const featuredSection: FeaturedSection = {
  title: "Featured Generators",
  subtitle: "Powerful tools to speed up your workflow",
};

export interface HowItWorksStep {
  id: number;
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const howItWorksSection = {
  title: "How It Works",
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 0,
    step: 1,
    icon: LayoutGrid,
    title: "Choose a Generator",
    description: "Browse our collection of design generators",
  },
  {
    id: 1,
    step: 2,
    icon: SlidersHorizontal,
    title: "Customize Visually",
    description: "Adjust parameters and see live changes instantly",
  },
  {
    id: 2,
    step: 3,
    icon: Download,
    title: "Export Code",
    description: "Copy or download production-ready code",
  },
];

export interface CtaSection {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export const ctaSection: CtaSection = {
  title: "Built for the Community",
  description:
    "DevsCanvas is fully open source. Contribute generators, report bugs, or suggest features.",
  buttonLabel: "Contribute on GitHub",
  buttonHref: "https://github.com/username/devscanvas",
};
