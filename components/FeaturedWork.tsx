import React from "react";
import Image from "next/image";

// Curated high quality hero designs (8 items)
const FEATURED_HIGH_QUALITY_DESIGNS = [
  "/assets/image/LearnAxis/main.png",
  "/assets/image/BL Party Palace/Desktop - 1.png",
  "/assets/image/Shambala Hotel webpage/Hotel.png",
  "/assets/image/Viewthali/first.png",
  "/assets/image/BSR Movie Ticket Booking/movie ticket webpage.png",
  "/assets/image/E-commerce shoes/shoes first page.png",
  "/assets/image/MacBook Pro 2- 1.png",
];

export function FeaturedWork() {
  // Duplicate array for seamless infinite loop scrolling
  const track = [...FEATURED_HIGH_QUALITY_DESIGNS, ...FEATURED_HIGH_QUALITY_DESIGNS];

  return (
    <section className="py-12 md:py-16 overflow-hidden relative select-none">
      {/* Label: "My Design" */}
      <div className="flex flex-col items-center justify-center text-center mb-8 px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[2px] w-12 bg-[#24966F]/40 rounded-full" />
          <span className="text-xs sm:text-sm font-bold tracking-wider px-3.5 py-1 ">
            <span className="text-[#111827]">My</span>{" "}
            <span className="text-[#24966F]">Design</span>
          </span>
          <span className="h-[2px] w-12 bg-[#24966F]/40 rounded-full" />
        </div>
        <p className="text-xs sm:text-sm text-[#526370] font-medium">
          Featured high-quality UI/UX design showcase
        </p>
      </div>

      {/* Side Fade Overlays (Kept strictly at left and right edges) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 bg-gradient-to-r from-[#EEF6F9] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 bg-gradient-to-l from-[#EEF6F9] to-transparent z-10" />

      {/* Single Marquee Track (Moving Left) */}
      <div className="flex overflow-hidden w-full pointer-events-none">
        <div className="animate-marquee-left flex gap-4 sm:gap-6 items-center">
          {track.map((imgPath, idx) => (
            <div
              key={`design-${idx}`}
              className="relative flex-shrink-0 w-[260px] sm:w-[340px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#071D2D] border border-slate-200/80 shadow-soft"
            >
              <Image
                src={imgPath}
                alt="High Quality Design"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, 400px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
