"use client";

import React, { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ExperienceItem } from "./ExperienceItem";
import { EXPERIENCES, PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "./Button";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleItem = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="experience" className="relative bg-[#EEF6F9] pt-0 pb-20 md:pb-8 overflow-hidden">
      {/* Curved/Wave Transition from Navy Projects section */}
      <div className="w-full overflow-hidden leading-none text-[#071D2D] -mt-px">
        <svg
          className="relative block w-full h-12 sm:h-20 md:h-28 -translate-y-px"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C300,90 900,90 1200,0 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-2">
        <SectionHeading
          label="My Experience"
          title="Where I've Worked"
          description="A summary of my professional journey and the impact I've made"
          align="center"
        />

        {/* Accordion Stack */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <ExperienceItem
              key={exp.id}
              item={exp}
              isOpen={expandedId === exp.id}
              onToggle={() => toggleItem(exp.id)}
            />
          ))}
        </div>

        {/* Download CV CTA Button */}
        {/* <div className="flex justify-center">
          <Button
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            icon="arrow"
          >
            Download My CV
          </Button>
        </div> */}
      </div>
    </section>
  );
}
