import Link from "next/link";
import { Code2 } from "lucide-react";
import { footerColumns, footerBrand, footerBottom } from "@/constants/footer";

const Footer = () => {
  return (
    <footer className="w-full border-t border-(--color-border)">
      <div className="my-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Code2 size={20} className="text-(--color-primary)" />
              <span className="text-lg font-bold text-(--color-foreground)">
                {footerBrand.name}
              </span>
            </Link>
            <p className="text-sm text-(--color-muted) leading-5">
              {footerBrand.description}
            </p>
          </div>

          {/* Footer columns */}
          {footerColumns.map((column) => (
            <div key={column.id} className="space-y-3">
              <h4 className="text-sm font-semibold text-(--color-foreground)">
                {column.title}
              </h4>
              <div className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-sm text-(--color-muted) hover:text-(--color-foreground) transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-(--color-border) flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-(--color-muted)">{footerBottom.left}</p>
          <p className="text-xs text-(--color-muted)">{footerBottom.right}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
