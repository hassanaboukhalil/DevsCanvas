"use client";

import Link from "next/link";
import { navlinks } from "@/constants/navlinks";
import { cn } from "@/lib/utils";
import { Code2, Github, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="my-container flex items-center justify-between h-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Code2 size={20} className="text-(--color-primary)" />
        <span className="text-lg font-bold text-(--color-foreground)">
          DevsCanvas
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navlinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-sm text-(--color-muted) hover:text-(--color-foreground) transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* GitHub link (desktop) */}
      <div className="hidden md:flex items-center">
        <Link
          href="https://github.com/username/devscanvas"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-(--color-muted) hover:text-(--color-foreground) hover:bg-(--color-background-card) transition-all duration-300"
        >
          <Github size={16} />
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-lg text-(--color-muted) hover:text-(--color-foreground)"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-(--color-background) md:hidden transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center gap-6 pt-12">
          {navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-lg text-(--color-muted) hover:text-(--color-foreground) transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com/username/devscanvas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-(--color-muted) hover:text-(--color-foreground) transition-colors duration-300"
            onClick={() => setMobileOpen(false)}
          >
            <Github size={18} />
            GitHub
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
