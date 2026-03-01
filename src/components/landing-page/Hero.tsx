"use client";

import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { heroContent } from "@/constants/landing";
import { Github } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  const { title, highlightedWord, subtitle, primaryCta, secondaryCta } =
    heroContent;

  // Split title around the highlighted word, gracefully handling missing match
  const highlightIndex = title.indexOf(highlightedWord);
  const hasSplit = highlightIndex !== -1;
  const beforeHighlight = hasSplit ? title.slice(0, highlightIndex) : title;
  const afterHighlight = hasSplit
    ? title.slice(highlightIndex + highlightedWord.length)
    : "";

  return (
    <Section className="relative overflow-hidden min-h-[85vh] flex flex-col items-center justify-center py-24 md:py-32">
      {/* Ambient glow — top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-(--color-primary) opacity-[0.08] blur-[120px]"
      />

      {/* Ambient glow — bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-[360px] w-[360px] rounded-full bg-(--color-violet) opacity-[0.10] blur-[100px]"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-h1 text-(--color-foreground)"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {beforeHighlight}
          {hasSplit && (
            <span
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-violet))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {highlightedWord}
            </span>
          )}
          {afterHighlight}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-body-2 text-(--color-muted) max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Button href={primaryCta.href} variant="primary" size="lg">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="secondary" size="lg">
            <Github size={18} />
            {secondaryCta.label}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
