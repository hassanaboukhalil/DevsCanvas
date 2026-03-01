"use client";

import Button from "@/components/ui/Button";
import { ctaSection } from "@/constants/landing";
import { Github } from "lucide-react";
import { motion } from "motion/react";

const CallToAction = () => {
  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 bg-(--color-primary) opacity-[0.03]" />
      <motion.div
        className="relative z-10 my-container text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h2 text-(--color-foreground)">
          {ctaSection.title}
        </h2>
        <p className="mt-4 text-lg text-(--color-muted) max-w-xl mx-auto">
          {ctaSection.description}
        </p>
        <div className="mt-8">
          <Button href={ctaSection.buttonHref} variant="primary" size="md">
            <Github size={16} />
            {ctaSection.buttonLabel}
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
