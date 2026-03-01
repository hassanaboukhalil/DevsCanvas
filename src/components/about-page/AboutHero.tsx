"use client";

import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { aboutContent, creatorInfo, aboutCta } from "@/constants/about";
import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const AboutHero = () => {
  return (
    <>
      <Section className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-h1 text-(--color-foreground)">
            {aboutContent.title}
          </h1>
          <p className="mt-3 text-lg text-(--color-muted)">
            {aboutContent.subtitle}
          </p>
        </motion.div>
      </Section>

      <Section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-(--color-muted) leading-7"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-48 rounded-xl bg-linear-to-br from-(--color-primary) to-(--color-violet) opacity-60" />
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <Card className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-(--color-background-card-hover) flex-center text-(--color-foreground) font-bold text-lg">
              {creatorInfo.initial}
            </div>
            <div>
              <h3 className="font-semibold text-(--color-foreground)">
                {creatorInfo.name}
              </h3>
              <p className="text-sm text-(--color-muted)">{creatorInfo.role}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={creatorInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-(--color-border) text-(--color-muted) hover:text-(--color-foreground) hover:bg-(--color-background-card-hover) transition-all duration-300"
            >
              <Github size={16} />
            </a>
            <a
              href={creatorInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-(--color-border) text-(--color-muted) hover:text-(--color-foreground) hover:bg-(--color-background-card-hover) transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </Card>
      </Section>

      <Section className="py-12 text-center">
        <Button href={aboutCta.href} variant="primary" size="lg">
          {aboutCta.label}
        </Button>
      </Section>
    </>
  );
};

export default AboutHero;
