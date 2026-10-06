"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "./Button";
import { FigmaIcon, FramerIcon } from "./BrandIcons";
import { Code2, Palette, Layers, Sparkles, Wand2 } from "lucide-react";

interface StackTool {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const ALL_STACK_TOOLS: StackTool[] = [
  { id: "figma", name: "Figma", icon: <FigmaIcon className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "framer", name: "Framer", icon: <FramerIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0055FF]" /> },
  { id: "vscode", name: "VS Code", icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#007ACC]" /> },
  { id: "canva", name: "Canva", icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C4CC]" /> },
  { id: "photoshop", name: "Photoshop", icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#31A8FF]" /> },
  { id: "penpot", name: "Penpot", icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#24966F]" /> },
  { id: "figjam", name: "FigJam", icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F24E1E]" /> },
  { id: "illustrator", name: "Illustrator", icon: <Wand2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9A00]" /> },
];

interface ActiveBadge {
  id: string;
  tool: StackTool;
  topPercent: number;
  leftPercent: number;
  rotateDeg: number;
  delayMs: number;
}

const generateRandomBadges = (): ActiveBadge[] => {
  const count = 5 + Math.floor(Math.random() * 2); // 5 to 6 random badges
  const shuffledTools = [...ALL_STACK_TOOLS].sort(() => 0.5 - Math.random());
  
  const angleStep = (2 * Math.PI) / count;
  const startAngle = Math.random() * Math.PI;

  return Array.from({ length: count }).map((_, i) => {
    const angle = startAngle + i * angleStep + (Math.random() - 0.5) * 0.35;
    // Radius from center (50%, 50%): ~44% to 52% puts center of badge cleanly around the image border
    const radius = 44 + Math.random() * 8;
    
    // Convert polar coordinates to top/left percentages
    const leftPercent = 50 + Math.cos(angle) * radius;
    const topPercent = 50 + Math.sin(angle) * radius;

    const rotateDeg = -10 + Math.random() * 20; // Slight tilt -10deg to +10deg
    const delayMs = i * 65; // Staggered entrance delay

    return {
      id: `${shuffledTools[i].id}-${i}-${Date.now()}`,
      tool: shuffledTools[i],
      topPercent,
      leftPercent,
      rotateDeg,
      delayMs,
    };
  });
};

export function Hero() {
  const [activeBadges, setActiveBadges] = useState<ActiveBadge[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  // Initial setup on mount
  useEffect(() => {
    setActiveBadges(generateRandomBadges());
  }, []);

  const handleMouseEnter = () => {
    // 1. Temporarily hide/reset hover state so initial frame mounts invisibly
    setIsHovered(false);
    
    // 2. Generate new random set of badges
    const newBadges = generateRandomBadges();
    setActiveBadges(newBadges);

    // 3. Double requestAnimationFrame guarantees browser paints opacity:0 state before animating to opacity:1
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(() => {
      animFrameRef.current = requestAnimationFrame(() => {
        setIsHovered(true);
      });
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Text Content (~45% width: 6 cols on lg screen) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2F4EE] text-[#24966F] text-xs sm:text-sm font-semibold mb-6 border border-[#24966F]/20 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DE45C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0DE45C]"></span>
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-6xl font-extrabold text-[#0B1D2B] tracking-tight leading-[1.1] mb-6">
            UI/UX <span className="text-[#24966F]">Designer</span>
          </h1>

          {/* Bio Paragraph */}
          <p className="text-base sm:text-sm md:text-base text-[#526370] leading-relaxed max-w-xl mb-8">
            {PERSONAL_INFO.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Button
              href="#cta"
              variant="primary"
              size="md"
              icon="arrow"
            >
              Contact Me
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              size="md"
              icon="arrow"
            >
              View Work
            </Button>
          </div>
        </div>

        {/* Right Visual Portrait (~55% width: 6 cols on lg screen) */}
        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-md lg:max-w-lg aspect-[4/4] rounded-[26px] sm:rounded-[120px] p-2 sm:p-3 group cursor-pointer"
          >
            {/* Corner light highlights */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#24966F]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#24966F]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Inner Image Container */}
            <div className="relative w-full h-full rounded-[50px] sm:rounded-[90px] overflow-hidden bg-slate-900/10 shadow-inner">
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>

            {/* SMOOTH RANDOM 360-DEGREE FLOATING TECH STACK BADGES */}
            {activeBadges.map((badge) => (
              <div
                key={badge.id}
                style={{
                  top: `${badge.topPercent}%`,
                  left: `${badge.leftPercent}%`,
                  transform: isHovered
                    ? `translate(-50%, -50%) scale(1) rotate(${badge.rotateDeg}deg)`
                    : `translate(-50%, -50%) scale(0.4)`,
                  opacity: isHovered ? 1 : 0,
                  transition: `opacity 650ms cubic-bezier(0.34, 1.4, 0.64, 1), transform 650ms cubic-bezier(0.34, 1.4, 0.64, 1)`,
                  transitionDelay: isHovered ? `${badge.delayMs}ms` : "0ms",
                  willChange: "transform, opacity",
                }}
                className="absolute bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-200 shadow-xl flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B1D2B] z-20 pointer-events-none whitespace-nowrap"
              >
                {badge.tool.icon}
                <span>{badge.tool.name}</span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
