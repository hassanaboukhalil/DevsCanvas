"use client";

import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  contributeContent,
  contributeSteps,
  guidelinesContent,
  contributeCta,
} from "@/constants/contribute";
import { Github } from "lucide-react";
import { motion } from "motion/react";

const ContributePage = () => {
  return (
    <>
      <Section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-h1 text-(--color-foreground)">
            {contributeContent.title}
          </h1>
          <p className="mt-3 text-lg text-(--color-muted)">
            {contributeContent.subtitle}
          </p>
        </motion.div>
      </Section>

      <Section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributeSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <div className="w-8 h-8 rounded-full bg-(--color-primary) flex-center text-white text-sm font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-(--color-foreground) mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-(--color-muted) leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-8">
        <Card className="max-w-3xl">
          <h2 className="text-xl font-bold text-(--color-foreground) mb-4">
            {guidelinesContent.title}
          </h2>
          <ul className="space-y-2 mb-4">
            {guidelinesContent.guidelines.map((guideline) => (
              <li
                key={guideline.id}
                className="text-sm text-(--color-muted) flex items-center gap-2"
              >
                <span className="text-(--color-primary)">•</span>
                {guideline.text}
              </li>
            ))}
          </ul>
          <a
            href={guidelinesContent.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-(--color-primary) hover:underline"
          >
            {guidelinesContent.linkText}
          </a>
        </Card>
      </Section>

      <Section className="py-12 text-center">
        <Button href={contributeCta.href} variant="primary" size="lg">
          <Github size={16} />
          {contributeCta.label}
        </Button>
      </Section>
    </>
  );
};

export default ContributePage;
