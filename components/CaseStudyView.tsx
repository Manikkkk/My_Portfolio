"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  Layers,
} from "lucide-react";

interface CaseStudyViewProps {
  project: Project;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  // Find next and previous projects for quick navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const galleryImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const openLightbox = (index: number) => {
    setSelectedImgIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImgIndex(null);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex + 1) % galleryImages.length);
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF6F9] text-[#0B1D2B] pt-24 pb-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-semibold text-[#0B1D2B] border border-slate-200/80 shadow-xs hover:border-[#24966F] hover:text-[#24966F] transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Case Study Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-[#E2F4EE] text-[#24966F] text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-[#526370] flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5" /> 2026 UI/UX Case Study
            </span>
            <span className="text-xs text-[#526370] flex items-center gap-1 font-medium bg-[#EEF6F9] px-2.5 py-0.5 rounded-full border border-slate-200">
              <Layers className="w-3.5 h-3.5 text-[#24966F]" /> {galleryImages.length} Screenshots & Assets
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1D2B] tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#526370] leading-relaxed mb-6 max-w-4xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#EEF6F9] text-[#0B1D2B] border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Featured Asset / Video Section */}
        {project.video ? (
          <div className="mb-12 space-y-6">
            <div className="bg-[#071D2D] rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 text-white text-sm font-semibold">
                <Play className="w-4 h-4 text-[#24966F]" />
                <span>Interactive Prototype & Motion Showcase</span>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                <video
                  src={project.video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : null}

        {/* Featured Cover Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-[#071D2D] border border-slate-200 shadow-2xl mb-12 group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            priority
          />
          <button
            onClick={() => openLightbox(0)}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2.5 rounded-full bg-black/70 hover:bg-[#24966F] text-white text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 shadow-lg"
          >
            <Maximize2 className="w-4 h-4" />
            <span>View High-Res</span>
          </button>
        </div>

        {/* Detailed Sections: Overview & Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-soft">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1D2B] mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#24966F]" /> Project Overview
              </h2>
              <p className="text-[#526370] leading-relaxed">
                {project.overview ||
                  `This project was created to address key usability challenges, streamline navigation flows, and deliver a modern visual interface for ${project.title}. Designed in Figma with a focus on component consistency, responsive grids, and design system scalability.`}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1D2B] mb-4">Key Design Features</h3>
                <ul className="space-y-3 text-[#526370]">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#24966F] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1D2B] mb-3">Design System & Workflow</h3>
              <ul className="space-y-2 text-[#526370]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#24966F] flex-shrink-0 mt-0.5" />
                  <span><strong>Research & Discovery:</strong> Demographics, user personas, competitor heuristic review, task flow mapping.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#24966F] flex-shrink-0 mt-0.5" />
                  <span><strong>Wireframing & IA:</strong> Information architecture mapping and rapid interactive low-fi wireframes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#24966F] flex-shrink-0 mt-0.5" />
                  <span><strong>High-Fidelity UI:</strong> Custom design token library, dark/light themes, pixel-perfect responsive layouts.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#071D2D] text-white p-6 rounded-3xl border border-slate-800 shadow-lg">
              <h3 className="font-bold text-lg mb-1">Designer</h3>
              <p className="text-slate-300 text-sm mb-4">{PERSONAL_INFO.name}</p>

              <h3 className="font-bold text-lg mb-1">Role</h3>
              <p className="text-slate-300 text-sm mb-4">Lead UI/UX Designer</p>

              <h3 className="font-bold text-lg mb-1">Tools & Platform</h3>
              <p className="text-slate-300 text-sm mb-6">{project.tags.slice(0, 3).join(", ")}</p>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry regarding ${project.title}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#24966F] text-white font-semibold text-sm hover:bg-[#1E7D5C] transition-colors"
              >
                <span>Inquire About Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Full Image Gallery Showcase */}
        {galleryImages.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1D2B] tracking-tight">
                  Design Gallery & UI Screens
                </h2>
                <p className="text-sm text-[#526370] mt-1">
                  Explore full-resolution mockups, screens, and wireframe assets uploaded for this project ({galleryImages.length} items).
                </p>
              </div>
            </div>

            {/* Responsive Masonry / Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((imgPath, idx) => {
                const fileName = imgPath.split("/").pop() || `Screen ${idx + 1}`;
                return (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="group relative cursor-pointer aspect-[16/10] rounded-2xl overflow-hidden bg-[#071D2D] border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <Image
                      src={imgPath}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold truncate pr-2">{fileName}</span>
                        <span className="p-1.5 rounded-full bg-[#24966F] text-white">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Project Navigation (Prev / Next) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
          <Link
            href={prevProject.href}
            className="w-full sm:w-auto inline-flex items-center justify-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-[#0B1D2B] hover:border-[#24966F] hover:text-[#24966F] transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-[#24966F]" />
            <div className="text-left">
              <span className="text-xs text-[#526370] block">Previous Project</span>
              <span className="font-bold text-sm">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            href={nextProject.href}
            className="w-full sm:w-auto inline-flex items-center justify-end gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-[#0B1D2B] hover:border-[#24966F] hover:text-[#24966F] transition-all"
          >
            <div className="text-right">
              <span className="text-xs text-[#526370] block">Next Project</span>
              <span className="font-bold text-sm">{nextProject.title}</span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#24966F]" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImgIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={showPrevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Next Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={showNextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Modal Content */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[selectedImgIndex]}
                alt={`${project.title} view ${selectedImgIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-slate-300 text-sm font-medium bg-black/60 px-4 py-1.5 rounded-full border border-slate-800">
              Image {selectedImgIndex + 1} of {galleryImages.length} —{" "}
              {galleryImages[selectedImgIndex].split("/").pop()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
