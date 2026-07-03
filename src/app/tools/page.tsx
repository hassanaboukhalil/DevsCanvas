import Section from "@/components/layout/Section";
import ToolsGrid from "@/components/tools-page/ToolsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools | DevsCanvas",
  description:
    "Browse our collection of free, open-source design generators. Create SVGs, CSS gradients, patterns, and more.",
};

const ToolsPage = () => {
  return (
    <Section className="py-12">
      <h1 className="text-h1 text-(--color-foreground)">All Tools</h1>
      <p className="mt-3 text-lg text-(--color-muted)">
        Browse our collection of free, open-source design generators
      </p>
      <div className="mt-10">
        <ToolsGrid />
      </div>
    </Section>
  );
};

export default ToolsPage;
