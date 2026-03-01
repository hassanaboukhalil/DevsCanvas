import type { LucideIcon } from "lucide-react";
import { Circle, Waves, Palette, Grid3X3, Square, Pipette } from "lucide-react";

export interface Tool {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  category: "SVG" | "CSS" | "Color";
}

export const tools: Tool[] = [
  {
    id: 0,
    name: "Blob Generator",
    slug: "blob-generator",
    description:
      "Create organic SVG blob shapes with customizable complexity and colors",
    icon: Circle,
    category: "SVG",
  },
  {
    id: 1,
    name: "Wave Generator",
    slug: "wave-generator",
    description:
      "Generate layered SVG wave backgrounds for hero sections and dividers",
    icon: Waves,
    category: "SVG",
  },
  {
    id: 2,
    name: "Gradient Generator",
    slug: "gradient-generator",
    description:
      "Build beautiful CSS gradients with multiple color stops and directions",
    icon: Palette,
    category: "CSS",
  },
  {
    id: 3,
    name: "Pattern Generator",
    slug: "pattern-generator",
    description: "Create repeating SVG patterns for backgrounds and textures",
    icon: Grid3X3,
    category: "SVG",
  },
  {
    id: 4,
    name: "Box Shadow Generator",
    slug: "box-shadow-generator",
    description: "Design layered CSS box shadows with real-time preview",
    icon: Square,
    category: "CSS",
  },
  {
    id: 5,
    name: "Color Palette Generator",
    slug: "color-palette-generator",
    description: "Generate harmonious color palettes from any base color",
    icon: Pipette,
    category: "Color",
  },
];
