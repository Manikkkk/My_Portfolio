"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on where the viewport is, so the project
      // tab does not stay active while the user is still at the hero section.
      const sections = ["projects", "experience", "about"];
      const triggerY = window.scrollY + window.innerHeight * 0.4;
      let nextActiveSection = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (triggerY >= top && triggerY < top + height) {
            nextActiveSection = section;
            break;
          }
        }
      }

      setActiveSection(nextActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Project", href: "/#projects", id: "projects" },
    { label: "Experience", href: "/#experience", id: "experience" },
    { label: "About", href: "/#about", id: "about" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/70 shadow-soft transition-all duration-300 ${
          scrolled ? "shadow-lg bg-white/95 border-slate-300/80 py-2 sm:py-2.5" : ""
        }`}
        aria-label="Main Navigation"
      >
        {/* Profile Avatar & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none outline-none p-1"
          data-cursor="hover"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#24966F]/30 group-hover:border-[#24966F] transition-colors">
            <Image
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="font-bold text-sm sm:text-base tracking-tight text-[#0B1D2B]">
            Manik <span className="text-[#24966F]">Shrestha</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 bg-[#EEF6F9] px-4 py-1.5 rounded-full border border-slate-200/60">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 block ${
                  activeSection === item.id
                    ? "bg-white text-[#24966F] shadow-sm font-semibold"
                    : "text-[#526370] hover:text-[#0B1D2B] hover:bg-white/50"
                }`}
                data-cursor="hover"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            icon="arrow"
            className="hidden sm:inline-flex"
          >
            Download CV
          </Button>

          {/* Mobile Hamburger Menu Button */}
          {/* <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#0B1D2B] hover:bg-[#EEF6F9] focus:outline-none focus:ring-2 focus:ring-[#24966F]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button> */}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-xl md:hidden px-6 py-8 flex flex-col justify-between border-t border-slate-200 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#24966F]">
              Navigation
            </p>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-[#0B1D2B] hover:text-[#24966F] py-2 transition-colors border-b border-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <Button
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon="arrow"
              className="w-full"
            >
              Download CV
            </Button>

            <p className="text-xs text-center text-[#526370]">
              © 2026 {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
