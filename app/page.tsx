import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { DesignToolkit } from "@/components/DesignToolkit";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Featured Work Preview Row */}
      <FeaturedWork />

      {/* Design Toolkit Tech Stack */}
      <DesignToolkit />

      {/* Selected Projects (Dark Navy Section) */}
      <Projects />

      {/* Experience Accordion with Wave Transition */}
      <Experience />

      {/* Compact About Section */}
      <About />

      {/* Final Call To Action */}
      <CTA />

      {/* Dark Navy Footer */}
      <Footer />
    </main>
  );
}
