"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, PROJECTS } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Mail,
} from "lucide-react";

interface CaseStudyViewProps {
  project: Project;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState("sec-overview");

  // Next project for bottom navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Gallery items
  const galleryItems = project.galleryItems && project.galleryItems.length > 0
    ? project.galleryItems
    : (project.gallery || [project.image]).map((imgPath, idx) => ({
        src: imgPath,
        alt: `${project.title} screenshot ${idx + 1}`,
        caption: `Interface Screen ${idx + 1}`,
        layout: (idx % 3 === 0 ? "full" : "half") as "full" | "half" | "third",
      }));

  // Reading progress scroll bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for Section Index
  useEffect(() => {
    const sectionIds = project.id === "brand-media"
      ? ["sec-overview", "sec-features", "sec-gallery"]
      : ["sec-overview", "sec-problem-solution", "sec-features", "sec-gallery", "sec-outcome"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [project.id]);

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImgIndex === null) return;
      if (e.key === "Escape") {
        setSelectedImgIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImgIndex((selectedImgIndex + 1) % galleryItems.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImgIndex((selectedImgIndex - 1 + galleryItems.length) % galleryItems.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImgIndex, galleryItems.length]);

  const openLightbox = (index: number) => {
    setSelectedImgIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImgIndex(null);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const accentColor = project.accent || "#24966F";

  const navIndexItems = project.id === "brand-media"
    ? [
        { id: "sec-overview", label: "01 Overview" },
        { id: "sec-features", label: "02 Key Features" },
        { id: "sec-gallery", label: "03 Screens Gallery" },
      ]
    : [
        { id: "sec-overview", label: "01 Overview" },
        { id: "sec-problem-solution", label: "02 Problem & Solution" },
        { id: "sec-features", label: "03 Key Features" },
        { id: "sec-gallery", label: "04 Screens Gallery" },
        { id: "sec-outcome", label: "05 Outcome" },
      ];

  return (
    <div className="min-h-screen bg-[#EEF6F9] text-[#0B1D2B] pt-28 sm:pt-36 pb-20 selection:bg-[#24966F]/20">
      {/* Reading Progress Line */}
      <div className="fixed top-0 inset-x-0 z-50 h-1 bg-[#0B1D2B]/5">
        <div
          className="h-full transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%`, backgroundColor: accentColor }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Mobile Sticky Section Index Chips (<1024px) */}
        <div className="lg:hidden sticky top-20 z-40 bg-[#EEF6F9]/95 backdrop-blur-md py-2 border-y border-slate-200/80 mb-8 -mx-4 px-4 overflow-x-auto no-scrollbar flex items-center gap-2">
          {navIndexItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeSectionId === item.id
                  ? "bg-[#071D2D] text-white border-transparent shadow-xs"
                  : "bg-white text-[#526370] border-slate-200/80 hover:text-[#0B1D2B]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* STICKY SPLIT VIEW CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ==================== LEFT COLUMN (34% width, Sticky Desktop) ==================== */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto no-scrollbar flex flex-col justify-between pr-0 lg:pr-2">
            <div>
              {/* Back Link */}
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#526370] hover:text-[#24966F] transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Portfolio</span>
              </Link>

              {/* Category */}
              <span
                className="text-xs font-bold uppercase tracking-wider block mb-2"
                style={{ color: accentColor }}
              >
                {project.category}
              </span>

              {/* Project Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0B1D2B] tracking-tight leading-tight mb-4">
                {project.title}
              </h1>

              {/* One-Line Summary */}
              <p className="text-sm sm:text-base text-[#526370] leading-relaxed mb-6">
                {project.summary || project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E2F4EE] text-[#24966F] border border-[#24966F]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metadata List (Role, Timeline, Platform, Tools) */}
              <div className="border-y border-slate-200/80 py-5 my-6 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider block text-[#526370] mb-0.5">Role</span>
                  <span className="text-sm font-bold text-[#0B1D2B]">
                    {project.role || "Lead UI/UX Designer"}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider block text-[#526370] mb-0.5">Timeline</span>
                  <span className="text-sm font-bold text-[#0B1D2B]">
                    {project.timeline || "4 Weeks"}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider block text-[#526370] mb-0.5">Platform</span>
                  <span className="text-sm font-bold text-[#0B1D2B]">
                    {project.platform || "Web & Mobile"}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider block text-[#526370] mb-0.5">Tools</span>
                  <span className="text-sm font-bold text-[#0B1D2B]">
                    {(project.tools || project.tags.slice(0, 3)).join(", ")}
                  </span>
                </div>
              </div>

              {/* Desktop Mini Section Index */}
              <div className="hidden lg:block my-6">
                <span className="text-xs font-bold uppercase tracking-wider block mb-3 text-[#526370]">
                  Case Study Index
                </span>
                <nav className="space-y-1.5">
                  {navIndexItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`block text-xs font-semibold py-2 px-3.5 rounded-xl transition-all ${
                        activeSectionId === item.id
                          ? "bg-[#071D2D] text-white shadow-xs"
                          : "text-[#526370] hover:text-[#0B1D2B] hover:bg-white/60"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Left Panel Contact Link */}
            <div className="pt-6 border-t border-slate-200/80 mt-6">
              <a
                href="mailto:manikshrestha452@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1D2B] hover:text-[#24966F] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#24966F]" />
                <span>Contact me regarding this project</span>
              </a>
            </div>
          </div>


          {/* ==================== RIGHT COLUMN (66% width, Scrolling Story) ==================== */}
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            
            {/* 1. Cover Image or Video */}
            <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-white border border-slate-200/80 shadow-soft group">
              <Image
                src={project.cover || project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                priority
              />
              <button
                onClick={() => openLightbox(0)}
                className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#071D2D]/90 hover:bg-[#071D2D] text-white text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 border border-slate-700/60 shadow-md"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View High-Res</span>
              </button>
            </div>

            {/* 2. Overview Block */}
            <section id="sec-overview" className="scroll-mt-32">
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: accentColor }}>
                01 Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1D2B] mb-6 tracking-tight">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg text-[#526370] leading-relaxed max-w-[65ch] mb-8">
                {project.overview || project.description}
              </p>
            </section>

            {/* 3. Problem & Solution Blocks (Side-by-side cards on desktop) */}
            {project.id !== "brand-media" && (
            <section id="sec-problem-solution" className="scroll-mt-32">
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: accentColor }}>
                02 Problem &amp; Solution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1D2B] mb-8 tracking-tight">
                Challenges &amp; Strategic Solution
              </h2>

              {/* Problem Section */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#526370] block mb-4">
                  The Challenge
                </h3>
                
                {typeof project.problem === 'string' ? (
                  // Simple string problem (existing format)
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8">
                    <p className="text-sm sm:text-base text-[#526370] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                ) : project.problem ? (
                  // Structured problem with intro + points
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8">
                      <p className="text-sm sm:text-base text-[#526370] leading-relaxed">
                        {project.problem.intro}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {project.problem.points.map((point, idx) => (
                        <div 
                          key={idx} 
                          className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 hover:border-red-400/40 transition-colors"
                        >
                          <h4 className="text-lg font-bold text-[#0B1D2B] mb-3 tracking-tight">
                            {point.heading}
                          </h4>
                          <p className="text-sm text-[#526370] leading-relaxed">
                            {point.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8">
                    <p className="text-sm sm:text-base text-[#526370] leading-relaxed">
                      [ADD: problem statement — Legacy LMS portals suffer from fragmented navigation, high cognitive load, and poor mobile responsiveness during multi-module online study]
                    </p>
                  </div>
                )}
              </div>

              {/* Solution Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#24966F] block mb-4">
                  The Approach
                </h3>
                
                {typeof project.solution === 'string' ? (
                  // Simple string solution (existing format)
                  <div className="bg-[#E2F4EE]/70 rounded-2xl border border-[#24966F]/30 shadow-xs p-6 sm:p-8">
                    <p className="text-sm sm:text-base text-[#0B1D2B] leading-relaxed font-semibold">
                      {project.solution}
                    </p>
                  </div>
                ) : project.solution ? (
                  // Structured solution with intro + points
                  <div className="space-y-6">
                    <div className="bg-[#E2F4EE]/70 rounded-2xl border border-[#24966F]/30 shadow-xs p-6 sm:p-8">
                      <p className="text-sm sm:text-base text-[#0B1D2B] leading-relaxed font-semibold">
                        {project.solution.intro}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.solution.points.map((point, idx) => (
                        <div 
                          key={idx} 
                          className="bg-white rounded-2xl border border-[#24966F]/30 shadow-xs p-6 hover:border-[#24966F]/60 transition-colors"
                        >
                          <h4 className="text-lg font-bold text-[#0B1D2B] mb-3 tracking-tight">
                            {point.heading}
                          </h4>
                          <p className="text-sm text-[#526370] leading-relaxed">
                            {point.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#E2F4EE]/70 rounded-2xl border border-[#24966F]/30 shadow-xs p-6 sm:p-8">
                    <p className="text-sm sm:text-base text-[#0B1D2B] leading-relaxed font-semibold">
                      A unified dashboard architecture featuring filtered category carousels, progress milestone widgets, and high-contrast WCAG AA theme tokens optimized for long study sessions.
                    </p>
                  </div>
                )}
              </div>
            </section>
            )}

            {/* Key Features Grid (2-column grid of small cards) */}
            {((project.featuresList && project.featuresList.length > 0) || (project.features && project.features.length > 0)) && (
              <section id="sec-features" className="scroll-mt-32 border-t border-slate-200/80 pt-16">
                <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: accentColor }}>
                  {project.id === "brand-media" ? "02 Key Features" : "03 Key Features"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1D2B] mb-8 tracking-tight">
                  Core Interface Workflows
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.featuresList ? (
                    project.featuresList.map((ft, idx) => (
                      <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 flex flex-col justify-between hover:border-[#24966F]/40 transition-colors">
                        <div>
                          <span className="text-xs font-bold text-[#24966F] block mb-2">
                            {ft.number || String(idx + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-lg font-bold text-[#0B1D2B] mb-2 tracking-tight">
                            {ft.title}
                          </h3>
                          <p className="text-sm text-[#526370] leading-relaxed">
                            {ft.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    project.features?.map((ftText, idx) => (
                      <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 hover:border-[#24966F]/40 transition-colors">
                        <span className="text-xs font-bold text-[#24966F] block mb-2">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-[#0B1D2B] font-semibold leading-relaxed">
                          {ftText}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </section>
            )}

            {/* Video Showcase (if present) */}
            {project.video && (
              <div className="border-t border-slate-200/80 pt-16">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#24966F]">
                    Interactive Prototype
                  </span>
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-bold text-[#0B1D2B] hover:bg-[#EEF6F9] hover:text-[#24966F] shadow-xs flex items-center gap-2 transition-all cursor-pointer"
                  >
                    {isVideoPlaying ? <Pause className="w-3.5 h-3.5 text-[#24966F]" /> : <Play className="w-3.5 h-3.5 text-[#24966F]" />}
                    <span>{isVideoPlaying ? "Pause Video" : "Play Prototype"}</span>
                  </button>
                </div>
                <div className="relative aspect-video rounded-[20px] overflow-hidden bg-[#071D2D] border border-slate-700/60 shadow-md">
                  <video
                    src={project.video}
                    controls={isVideoPlaying}
                    autoPlay={false}
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* 4. Screens Gallery */}
            {galleryItems.length > 0 && (
              <section id="sec-gallery" className="scroll-mt-32 border-t border-slate-200/80 pt-16">
                <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: accentColor }}>
                  {project.id === "brand-media" ? "03 Gallery" : "04 Gallery"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1D2B] mb-8 tracking-tight">
                  High-Fidelity Interface Screens ({galleryItems.length})
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {galleryItems.map((item, idx) => {
                    const isFullWidth = item.layout === "full" || idx === 0;
                    return (
                      <div
                        key={idx}
                        className={`group ${isFullWidth ? "md:col-span-2" : "md:col-span-1"}`}
                      >
                        <div
                          onClick={() => openLightbox(idx)}
                          className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-white border border-slate-200/80 shadow-xs cursor-pointer transition-all duration-300 hover:border-[#24966F]/50 hover:shadow-soft"
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 800px"
                          />
                          <div className="absolute top-3 right-3 p-2 rounded-full bg-[#071D2D]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        {/* Descriptive Caption Below Screen */}
                        <p className="text-xs text-[#526370] font-semibold mt-2.5 px-1">
                          {item.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 5. Outcome & Reflection Block */}
            {project.id !== "brand-media" && (
            <section id="sec-outcome" className="scroll-mt-32 border-t border-slate-200/80 pt-16">
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: accentColor }}>
                05 Outcome
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1D2B] mb-6 tracking-tight">
                Outcome &amp; Reflection
              </h2>
              
              {typeof project.outcome === 'string' ? (
                // Simple string outcome (existing format)
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8">
                  <p className="text-base sm:text-lg text-[#526370] leading-relaxed max-w-[65ch]">
                    {project.outcome}
                  </p>
                </div>
              ) : project.outcome ? (
                // Structured outcome with intro + points
                <div className="space-y-6">
                  {/* Intro text */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8">
                    <p className="text-base sm:text-lg text-[#526370] leading-relaxed max-w-[65ch]">
                      {project.outcome.intro}
                    </p>
                  </div>

                  {/* Outcome points grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.outcome.points.map((point, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 hover:border-[#24966F]/40 transition-colors"
                      >
                        <h3 className="text-lg font-bold text-[#0B1D2B] mb-3 tracking-tight">
                          {point.heading}
                        </h3>
                        <p className="text-sm text-[#526370] leading-relaxed">
                          {point.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Fallback if no outcome provided
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8">
                  <p className="text-base sm:text-lg text-[#526370] leading-relaxed max-w-[65ch]">
                    [ADD: outcome & reflection — Metrics on student retention, component system adoption, and instructor satisfaction feedback]
                  </p>
                </div>
              )}
            </section>
            )}

            {/* 6. Next Project Card at the End */}
            <div className="border-t border-slate-200/80 pt-16">
              <span className="text-xs font-bold uppercase tracking-wider block mb-4 text-[#526370]">
                Next Case Study
              </span>

              <Link
                href={nextProject.href}
                className="group block bg-white rounded-2xl border border-slate-200/80 shadow-soft hover:border-[#24966F]/40 transition-all duration-300 mb-12 overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-6 sm:p-8">
                  <div className="sm:col-span-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#24966F] block">
                      {nextProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1D2B] group-hover:text-[#24966F] transition-colors tracking-tight">
                      {nextProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526370] leading-relaxed line-clamp-2">
                      {nextProject.description}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#0B1D2B] group-hover:text-[#24966F]">
                      <span>Explore Next Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#24966F]" />
                    </div>
                  </div>

                  <div className="sm:col-span-5">
                    <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden bg-[#071D2D] border border-slate-200/60">
                      <Image
                        src={nextProject.image}
                        alt={nextProject.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="300px"
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Short closing line with email link */}
              <div className="text-center pt-6 border-t border-slate-200/80">
                <p className="text-sm text-[#526370]">
                  Interested in this project or looking to collaborate?{" "}
                  <a
                    href="mailto:manikshrestha452@gmail.com"
                    className="font-bold text-[#0B1D2B] hover:text-[#24966F] underline transition-colors"
                  >
                    manikshrestha452@gmail.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox Modal with Arrow Navigation & Esc Close */}
      {selectedImgIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#071D2D]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {galleryItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImgIndex((selectedImgIndex - 1 + galleryItems.length) % galleryItems.length);
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {galleryItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImgIndex((selectedImgIndex + 1) % galleryItems.length);
              }}
              className="absolute right-4 sm:left-auto sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-[16px] overflow-hidden">
              <Image
                src={galleryItems[selectedImgIndex].src}
                alt={galleryItems[selectedImgIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-xs font-semibold text-white/90 bg-[#071D2D]/80 px-4 py-1.5 rounded-full border border-slate-700/80 shadow-md">
              {selectedImgIndex + 1} / {galleryItems.length} — {galleryItems[selectedImgIndex].caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
