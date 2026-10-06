import React from "react";
import { SectionHeading } from "./SectionHeading";
import { DESIGN_TOOLS, ToolItem } from "@/data/portfolioData";
import { FigmaIcon, FramerIcon } from "./BrandIcons";
import {
  Code2,
  PenTool,
  Layers,
  Palette,
  Sparkles,
  Wand2,
} from "lucide-react";

export function DesignToolkit() {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case "figma":
        return <FigmaIcon className="w-5 h-5" />;
      case "framer":
        return <FramerIcon className="w-5 h-5 text-[#0055FF]" />;
      case "photoshop":
        return <Layers className="w-5 h-5 text-[#31A8FF]" />;
      case "canva":
        return <Palette className="w-5 h-5 text-[#00C4CC]" />;
      case "code":
        return <Code2 className="w-5 h-5 text-[#007ACC]" />;
      case "penpot":
        return <PenTool className="w-5 h-5 text-[#24966F]" />;
      case "figjam":
        return <Sparkles className="w-5 h-5 text-[#F24E1E]" />;
      case "illustrator":
        return <Wand2 className="w-5 h-5 text-[#FF9A00]" />;
      default:
        return <PenTool className="w-5 h-5 text-[#24966F]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <SectionHeading
        label="Tech Stack"
        title="Design Toolkit"
        description="A curated set of technologies I rely on to build modern web experiences."
        align="center"
      />

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
        {DESIGN_TOOLS.map((tool: ToolItem) => (
          <div
            key={tool.id}
            data-cursor="hover"
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#E2F4EE] hover:bg-[#D2EFE4] text-[#0B1D2B] font-semibold text-sm sm:text-base border border-[#24966F]/20 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
          >
            <div className="p-1 rounded-full bg-white shadow-xs">
              {getToolIcon(tool.iconName)}
            </div>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
