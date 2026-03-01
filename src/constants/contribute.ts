export interface ContributeStep {
  id: number;
  step: number;
  title: string;
  description: string;
}

export const contributeContent = {
  title: "Contribute",
  subtitle: "Help us build the best open-source design toolkit",
};

export const contributeSteps: ContributeStep[] = [
  {
    id: 0,
    step: 1,
    title: "Fork the Repository",
    description: "Start by forking the DevsCanvas repository on GitHub",
  },
  {
    id: 1,
    step: 2,
    title: "Create a Generator Folder",
    description: "Add a new folder under src/app/tools/your-generator/",
  },
  {
    id: 2,
    step: 3,
    title: "Write Generator Logic",
    description:
      "Create a pure function in src/lib/generators/your-generator.ts",
  },
  {
    id: 3,
    step: 4,
    title: "Build the Page",
    description:
      "Use GeneratorLayout to compose your controls, preview, and export panels",
  },
  {
    id: 4,
    step: 5,
    title: "Register the Tool",
    description: "Add your tool entry to src/lib/tools-data.ts",
  },
  {
    id: 5,
    step: 6,
    title: "Submit a Pull Request",
    description: "Open a PR and we'll review it",
  },
];

export interface Guideline {
  id: number;
  text: string;
}

export const guidelinesContent = {
  title: "Contribution Guidelines",
  guidelines: [
    { id: 0, text: "TypeScript strict mode" },
    { id: 1, text: "Tailwind CSS for all styling" },
    { id: 2, text: "Generator logic must be pure functions" },
    { id: 3, text: "Follow existing component patterns" },
  ] as Guideline[],
  linkText: "Read the full contribution guide on GitHub",
  linkHref: "https://github.com/username/devscanvas",
};

export const contributeCta = {
  label: "View Repository on GitHub",
  href: "https://github.com/username/devscanvas",
};
