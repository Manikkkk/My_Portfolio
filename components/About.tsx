import React from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { ABOUT_INFO, PERSONAL_INFO } from "@/data/portfolioData";
import { MapPin, Target, Wrench, Heart, FileText } from "lucide-react";
import { Button } from "./Button";

export function About() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MapPin className="w-5 h-5 text-[#24966F]" />;
      case 1:
        return <Target className="w-5 h-5 text-[#24966F]" />;
      case 2:
        return <Wrench className="w-5 h-5 text-[#24966F]" />;
      case 3:
        return <Heart className="w-5 h-5 text-[#24966F]" />;
      default:
        return <MapPin className="w-5 h-5 text-[#24966F]" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <SectionHeading
        label="About Me"
        title={ABOUT_INFO.heading}
        align="center"
      />

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-10">
          {/* Avatar Image */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-[#EEF6F9] shadow-md group">
              <Image
                src={PERSONAL_INFO.avatarSecondary || PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="208px"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <p className="text-base sm:text-lg text-[#526370] leading-relaxed">
              {ABOUT_INFO.paragraph}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Button
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon="arrow"
              >
                Download Resume (CV)
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Supporting Detail Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {ABOUT_INFO.details.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#EEF6F9] border border-slate-200/60 flex flex-col items-start gap-2 hover:border-[#24966F]/40 transition-colors"
            >
              <div className="p-2 rounded-xl bg-white shadow-xs">
                {getIcon(idx)}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#526370]">
                {item.label}
              </span>
              <span className="text-sm font-bold text-[#0B1D2B]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
