"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverState, setHoverState] = useState<"default" | "hover" | "project">("default");
  const [isScrolling, setIsScrolling] = useState(false);
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Real mouse coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  // Trailing ring coordinates (lerp)
  const ringPos = useRef({ x: -100, y: -100 });
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check coarse pointer / touch device & prefers-reduced-motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Update inner dot / spider emblem immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isProject = !!target.closest("[data-cursor='project']");
      const isInteractive = !!target.closest("a, button, input, textarea, select, [role='button'], [data-cursor='hover']");

      if (isProject) {
        setHoverState("project");
      } else if (isInteractive) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }

      // Magnetic effect for buttons with data-magnetic="true"
      const magneticBtn = target.closest("[data-magnetic='true']") as HTMLElement | null;
      if (magneticBtn) {
        const rect = magneticBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.2; // 3-6px max
        const deltaY = (e.clientY - centerY) * 0.2;
        magneticBtn.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
        magneticBtn.style.transition = "transform 0.1s ease-out";
      } else {
        // Reset all magnetic buttons
        const magneticBtns = document.querySelectorAll("[data-magnetic='true']");
        magneticBtns.forEach((btn) => {
          (btn as HTMLElement).style.transform = `translate3d(0px, 0px, 0)`;
          (btn as HTMLElement).style.transition = "transform 0.3s ease-out";
        });
      }
    };

    const onScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Animation Loop for Smooth Lerp Ring
    let animationFrameId: number;

    const render = () => {
      // Lerp factor ~ 0.18 for smooth 60-120ms trailing
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        const scaleX = isScrolling ? 1.25 : 1;
        const scaleY = isScrolling ? 0.8 : 1;
        
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${scaleX}, ${scaleY})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Spider-Man Center Pointer Icon */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-3 -mt-3 flex items-center justify-center pointer-events-none transition-opacity duration-200"
        style={{
          willChange: "transform",
        }}
      >
        <svg
          className={`w-6 h-6 transition-all duration-300 ${
            hoverState === "hover"
              ? "text-[#E50914] scale-125 drop-shadow-[0_0_12px_rgba(229,9,20,0.9)]"
              : "text-[#24966F] drop-shadow-[0_0_8px_rgba(36,150,111,0.8)]"
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Spider Emblem SVG */}
          <path d="M12 2C11.5 2 11 3.5 11 4.5C11 5.5 11.5 6 12 6C12.5 6 13 5.5 13 4.5C13 3.5 12.5 2 12 2ZM12 7.5C10.5 7.5 9.5 9 9.5 11C9.5 12.5 10.5 14 12 14C13.5 14 14.5 12.5 14.5 11C14.5 9 13.5 7.5 12 7.5ZM6 6.5L9 9.5M18 6.5L15 9.5M4 11H8.5M20 11H15.5M5 16L8.5 13.5M19 16L15.5 13.5M7 21.5L10 16.5M17 21.5L14 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
