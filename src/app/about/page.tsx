import AboutHero from "@/components/about-page/AboutHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — DevsCanvas",
  description:
    "Learn about DevsCanvas, an open-source toolkit for frontend developers and designers.",
};

const AboutPage = () => {
  return <AboutHero />;
};

export default AboutPage;
