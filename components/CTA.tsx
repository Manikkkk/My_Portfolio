import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export function CTA() {
  return (
    <section id="cta" className="py-16 md:py-10 px-4 sm:px-6 md:px-8 max-w-full mx-auto">
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#071D2D] p-8 sm:p-14 md:px-30 lg:px-70 text-center shadow-2xl border border-slate-700/60 group max-w-7xl mx-auto w-full">
        {/* Background Image of Web Layout with dark overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/venue-booking.png"
            alt="Web Design Background"
            fill
            className="object-cover object-center filter grayscale brightness-50 contrast-125 transition-transform duration-1000 group-hover:scale-105"
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071D2D]/90 via-[#071D2D]/80 to-[#071D2D]/95 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-xl sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Build Something <span className="text-[#24966F]">Great</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-lg leading-relaxed">
            Let's bring your ideas to life with thoughtful design.
          </p>

          <Button
            href="mailto:manikshrestha.ux@gmail.com"
            variant="accent"
            size="lg"
            icon="arrow"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
