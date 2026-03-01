export interface FooterColumn {
  id: number;
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  id: number;
  label: string;
  href: string;
}

export const footerColumns: FooterColumn[] = [
  {
    id: 0,
    title: "Product",
    links: [
      { id: 0, label: "Tools", href: "/tools" },
      { id: 1, label: "About", href: "/about" },
    ],
  },
  {
    id: 1,
    title: "Community",
    links: [
      { id: 0, label: "Contribute", href: "/contribute" },
      {
        id: 1,
        label: "GitHub",
        href: "https://github.com/hassanaboukhalil/DevsCanvas",
      },
    ],
  },
  {
    id: 2,
    title: "Legal",
    links: [{ id: 0, label: "MIT License", href: "#" }],
  },
];

export const footerBrand = {
  name: "DevsCanvas",
  description: "Open-source design generators for developers.",
};

export const footerBottom = {
  left: "Built with Nextjs & Tailwind CSS",
  right: "© 2026 DevsCanvas. Open source under MIT License.",
};
