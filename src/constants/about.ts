export interface AboutContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export const aboutContent: AboutContent = {
  title: "About DevsCanvas",
  subtitle: "An open-source toolkit for frontend developers and designers",
  paragraphs: [
    "DevsCanvas provides a suite of free, interactive design generators that help developers create production-ready assets without leaving their browser.",
    "Built with Nextjs, TypeScript, and Tailwind CSS for performance and developer experience.",
    "Every line of code is open source. We believe great developer tools should be free, transparent, and community-driven.",
  ],
};

export interface CreatorInfo {
  name: string;
  role: string;
  initial: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const creatorInfo: CreatorInfo = {
  name: "Hassan Abou Khalil",
  role: "Creator of DevsCanvas",
  initial: "H",
  githubUrl: "https://github.com/hassanaboukhalil/",
  linkedinUrl: "https://www.linkedin.com/in/hassan-abou-khalil/",
};

export const aboutCta = {
  label: "Want to contribute?",
  href: "/contribute",
};
