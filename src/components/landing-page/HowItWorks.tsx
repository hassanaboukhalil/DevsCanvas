"use client";

import Section from "@/components/layout/Section";
import { howItWorksSection, howItWorksSteps } from "@/constants/landing";
import { motion } from "motion/react";

const HowItWorks = () => {
  return (
    <Section id="how-it-works" className="py-20">
      <h2 className="text-h2 text-(--color-foreground) text-center mb-16">
        {howItWorksSection.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {howItWorksSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-12 h-12 rounded-full bg-(--color-primary) flex-center text-white font-bold text-lg mb-4">
                {step.step}
              </div>
              <div className="w-8 h-8 flex-center mb-3">
                <Icon size={32} className="text-(--color-muted)" />
              </div>
              <h3 className="text-h3 text-(--color-foreground) mt-2">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-(--color-muted)">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default HowItWorks;
