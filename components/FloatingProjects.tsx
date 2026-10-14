"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface FloatingProject {
  id: string;
  title: string;
  category: string;
  href: string;
  image: string;
  x: number; // percentage for left position
  y: number; // percentage for top position
  width: number; // percentage width
  aspectRatio?: string;
}

const FLOATING_PROJECTS: FloatingProject[] = [
  {
    id: "learnaxis",
    title: "LearnAxis Platform",
    category: "EdTech",
    href: "/projects/learnaxis",
    image: "/assets/image/LearnAxis/learnaxis laptop view.png",
    x: 10,
    y: 2,
    width: 24,
    aspectRatio: "1439 / 1030",
  },
  {
    id: "bl-party",
    title: "BL Party Palace",
    category: "Venue Booking",
    href: "/projects/bl-party-palace",
    image: "/assets/image/BL Party Palace/laptop preview BL.png",
    x: 38,
    y: 3,
    width: 24,
    aspectRatio: "1639 / 1030",
  },
  {
    id: "viewthali",
    title: "Viewthali Resort",
    category: "Hospitality",
    href: "/projects/viewthali",
    image: "/assets/image/Viewthali/viewthali preview.png",
    x: 65,
    y: 5,
    width: 24,
    aspectRatio: "1296 / 818",
  },
  {
    id: "movie-ticket",
    title: "BSR Movie Booking",
    category: "Entertainment",
    href: "/projects/movie-ticket",
    image: "/assets/image/BSR Movie Ticket Booking/BSR movie preview.png",
    x: 10,
    y: 40,
    width: 24,
    aspectRatio: "980 / 734",
  },
  {
    id: "sneaker",
    title: "Sneaker E-Commerce",
    category: "E-Commerce",
    href: "/projects/sneaker-ecommerce",
    image: "/assets/image/E-commerce shoes/sneaker shoes.png",
    x: 38,
    y: 40,
    width: 24,
    aspectRatio: "506 / 425",
  },
  {
    id: "thar",
    title: "Visual media and motion concepts",
    category: "3d design",
    href: "/projects/brand-media",
    image: "/assets/image/COLLECTIONS.png",
    x: 65,
    y: 40,
    width: 24,
    aspectRatio: "1283 / 853",
  },
];

interface FloatingCardProps {
  project: FloatingProject;
  isHovered: boolean;
  hoveredId: string | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function FloatingCard({
  project,
  isHovered,
  hoveredId,
  onMouseEnter,
  onMouseLeave,
}: FloatingCardProps) {
  // Calculate push away effect when another card is hovered
  const getPushAwayTransform = () => {
    if (!hoveredId || hoveredId === project.id) return { x: 0, y: 0 };

    // Simple push away logic - you can adjust these values
    const dx = project.x > 50 ? -8 : 8; // Push left or right based on position
    const dy = project.y > 50 ? -6 : 6; // Push up or down based on position

    return { x: dx, y: dy };
  };

  const pushAway = getPushAwayTransform();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: hoveredId && hoveredId !== project.id ? 0.95 : 1,
        x: hoveredId ? pushAway.x : 0,
        y: hoveredId ? pushAway.y : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
      style={{
        position: "absolute",
        left: `${project.x}%`,
        top: `${project.y}%`,
        width: `${project.width}%`,
      }}
      className="cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href={project.href} className="block">
        <motion.div
          whileHover={{
            scale: 1.15,
            zIndex: 50,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          className="relative group"
        >
          {/* Image container with hover glow */}
          <div
            className="relative transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            style={{ aspectRatio: project.aspectRatio || "4/3" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Spotlight overlay: removed when not hovering, only shown on hover */}
            <div
              className="absolute inset-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Label pill below the card */}
          <div className="mt-3 mx-auto w-fit px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300">
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
              {project.title}
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function FloatingProjects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#071D2D] py-0 md:py-8 px-4 sm:px-6 md:px-8 text-white relative"
    >
      <div id="work" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header - Matching SectionHeading style */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          {/* Label styled like 'My Project' */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-[2px] w-12 bg-[#24966F]/40 rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-wider px-3.5 py-1">
              <span className="text-white">My </span>
              <span className="text-[#24966F]">Project</span>
            </span>
            <span className="h-[2px] w-12 bg-[#24966F]/40 rounded-full" />
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Selected Projects
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Transforming ideas into beautiful, user-centered digital experiences.
          </p>
        </div>

        {/* Desktop: Static Canvas with Hover Effects */}
        <div className="hidden md:block">
          <div
            className="relative"
            style={{ height: "800px" }}
            onMouseLeave={() => setHoveredId(null)}
          >
            {FLOATING_PROJECTS.map((project) => (
              <FloatingCard
                key={project.id}
                project={project}
                isHovered={hoveredId === project.id}
                hoveredId={hoveredId}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>

        {/* Mobile: 2-Column Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {FLOATING_PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={project.href} className="block">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      },
                    }}
                    className="relative group"
                  >
                    {/* Image */}
                    <div
                      className="relative transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      style={{ aspectRatio: project.aspectRatio || "4/3" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                        sizes="50vw"
                      />
                      {/* Spotlight overlay: removed when not hovering, only shown on hover */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                        }}
                      />
                    </div>

                    {/* Label pill */}
                    <div className="mt-2 px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors duration-300">
                      <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors truncate">
                        {project.title}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
