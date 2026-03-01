export interface NavLink {
  id: number;
  label: string;
  href: string;
}

export const navlinks: NavLink[] = [
  { id: 0, label: "Tools", href: "/tools" },
  { id: 1, label: "About", href: "/about" },
  { id: 2, label: "Contribute", href: "/contribute" },
];
