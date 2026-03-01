import Section from "@/components/layout/Section";
import { tools } from "@/constants/tools";
import { featuredSection } from "@/constants/landing";
import ToolCard from "@/components/tools-page/ToolCard";

const Features = () => {
  return (
    <Section id="features" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-h2 text-(--color-foreground)">
          {featuredSection.title}
        </h2>
        <p className="mt-3 text-lg text-(--color-muted)">
          {featuredSection.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </Section>
  );
};

export default Features;
