"use client";

import GradientGenerator from "@/components/generators/gradient-generator/GradientGenerator";
import Section from "@/components/layout/Section";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function GradientGeneratorPage() {
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
        <span className="text-(--color-foreground)">Gradient Generator</span>
      </nav>
      <GradientGenerator />
    </Section>
  );
}
