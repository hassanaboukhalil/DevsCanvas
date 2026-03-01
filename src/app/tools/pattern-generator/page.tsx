"use client";

import PatternGenerator from "@/components/generators/pattern-generator/PatternGenerator";
import Section from "@/components/layout/Section";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PatternGeneratorPage() {
  return (
    <Section className="py-6">
      <nav className="flex items-center gap-1 text-sm text-(--color-muted) mb-6">
        <Link
          href="/tools"
          className="hover:text-(--color-foreground) transition-colors duration-300"
        >
          Tools
        </Link>
        <ChevronRight size={14} />
        <span className="text-(--color-foreground)">Pattern Generator</span>
      </nav>
      <PatternGenerator />
    </Section>
  );
}
