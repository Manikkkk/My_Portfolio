import React from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const offsetCard = index % 2 === 1;

  return (
    <a
      href={project.href}
      data-cursor="project"
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#0E293E] border border-slate-700/60 shadow-navy-card transition-all duration-500 hover:-translate-y-1.5 hover:border-[#24966F]/60 ${
        project.gridSpan || "col-span-1"
      } ${offsetCard ? "md:translate-y-6" : ""}`}
    >
      {/* Top Banner & Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />

        {/* Gradient Overlay for visual polish & legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E293E] via-[#0E293E]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-[#24966F]/90 text-white backdrop-blur-md shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Floating Arrow Icon Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#24966F] group-hover:scale-110 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-[#0E293E]">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#24966F] transition-colors mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/50">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 group-hover:border-[#24966F]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
