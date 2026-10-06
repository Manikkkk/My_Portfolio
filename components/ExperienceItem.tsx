"use client";

import React from "react";
import { ExperienceItemData } from "@/data/portfolioData";
import { Clock, ChevronDown, Briefcase } from "lucide-react";

interface ExperienceItemProps {
  item: ExperienceItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export function ExperienceItem({ item, isOpen, onToggle }: ExperienceItemProps) {
  return (
    <div
      className={`rounded-2xl sm:rounded-3xl transition-all duration-300 ${
        isOpen
          ? "bg-white shadow-soft"
          : "bg-white/70 hover:bg-white shadow-xs"
      } overflow-hidden`}
    >
      {/* Header Button */}
      <button
        onClick={onToggle}
        data-cursor="hover"
        className="w-full p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between text-left gap-4 outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-start sm:items-center gap-4">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
              isOpen
                ? "bg-[#24966F] text-white"
                : "bg-[#E2F4EE] text-[#24966F]"
            }`}
          >
            <Briefcase className="w-5 h-5" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1D2B] tracking-tight">
              {item.role} <span className="text-[#24966F] font-normal">— {item.company}</span>
            </h3>
            {item.isCurrent && (
              <span className="inline-block mt-1 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[#E2F4EE] text-[#24966F]">
                Current Role
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 justify-between sm:justify-end">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#526370] bg-[#EEF6F9] px-3.5 py-1.5 rounded-full border border-slate-200/60">
            <Clock className="w-4 h-4 text-[#24966F]" />
            <span>{item.date}</span>
          </div>

          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center text-[#526370] transition-transform duration-300 ${
              isOpen ? "rotate-180 bg-[#EEF6F9] text-[#24966F]" : ""
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </span>
        </div>
      </button>

      {/* Accordion Body */}
      {isOpen && (
        <div className="px-5 pb-6 sm:px-7 sm:pb-7 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="mt-4 space-y-3 pl-4">
            {item.description.map((point, index) => (
              <li
                key={index}
                className="relative text-sm sm:text-base text-[#526370] leading-relaxed before:content-['•'] before:absolute before:-left-4 before:text-[#24966F] before:font-bold"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
