"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="bg-[#071D2D] py-20 md:py-28 px-4 sm:px-6 md:px-8 text-white relative">
      <div id="work" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="My Project"
          title="Selected Projects"
          description="Transforming ideas into beautiful, user-centered digital experiences."
          align="center"
          darkTheme={true}
        />

        {/* Desktop: Index + Preview Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 mt-16">
          {/* Left: Interactive Index */}
          <div className="col-span-7 space-y-0">
            {PROJECTS.map((project, index) => {
              const isActive = activeIndex === index;
              const number = String(index + 1).padStart(2, "0");

              return (
                <a
                  key={project.id}
                  href={project.href}
                  data-cursor="project"
                  data-cursor-image={project.image}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`group block w-full text-left border-b border-white/10 py-6 px-4 transition-all duration-500 motion-reduce:transition-none ${
                    isActive
                      ? "translate-x-4 opacity-100"
                      : "translate-x-0 opacity-50 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-6 flex-1">
                      {/* Number */}
                      <span
                        className={`text-5xl font-bold transition-colors duration-500 motion-reduce:transition-none ${
                          isActive ? "text-cyan-400" : "text-white/30"
                        }`}
                      >
                        {number}
                      </span>

                      {/* Title & Description */}
                      <div className="flex-1 pt-1">
                        <h3
                          className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                            isActive ? "text-white" : "text-white/70"
                          }`}
                        >
                          {project.title}
                        </h3>

                        {/* Description - expands on active */}
                        <div
                          className={`overflow-hidden transition-all duration-500 motion-reduce:transition-none ${
                            isActive
                              ? "max-h-40 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-slate-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Category & Arrow */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isActive ? "text-cyan-400" : "text-white/50"
                        }`}
                      >
                        {project.category}
                      </span>
                      <ArrowUpRight
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isActive ? "text-cyan-400" : "text-white/30"
                        }`}
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="col-span-5">
            <a
              href={PROJECTS[activeIndex].href}
              data-cursor="project"
              data-cursor-image={PROJECTS[activeIndex].image}
              className="block sticky top-24"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-900/50 cursor-pointer transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none">
                {/* Stacked Images with Cross-fade */}
                {PROJECTS.map((project, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={project.id}
                      className={`absolute inset-0 transition-all duration-700 motion-reduce:transition-none ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        priority={index === 0}
                      />
                    </div>
                  );
                })}

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Glass-style Tag Chips */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  {PROJECTS[activeIndex].tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile/Tablet: Stacked Cards */}
        <div className="lg:hidden space-y-6 mt-12">
          {PROJECTS.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <a
                key={project.id}
                href={project.href}
                data-cursor="project"
                data-cursor-image={project.image}
                className="block group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900/50 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl font-bold text-cyan-400">
                      {number}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-3 px-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-cyan-400">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
