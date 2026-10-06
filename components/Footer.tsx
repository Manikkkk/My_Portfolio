"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";
import { LinkedinIcon, GithubIcon, DribbbleIcon } from "./BrandIcons";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <LinkedinIcon className="w-5 h-5" />;
      case "github":
        return <GithubIcon className="w-5 h-5" />;
      case "dribbble":
        return <DribbbleIcon className="w-5 h-5" />;
      default:
        return <LinkedinIcon className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-[#071D2D] text-white pt-16 pb-8 px-4 sm:px-6 md:px-8 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center pb-12">
          {/* Left Column: Short Statement */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              UI/UX Designer crafting intuitive and engaging digital experiences.
            </p>
          </div>

          {/* Center Column: Avatar + Name + Navigation */}
          <div className="md:col-span-4 flex flex-col items-center text-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#24966F] group-hover:scale-105 transition-transform">
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="font-bold text-base tracking-tight text-white group-hover:text-[#24966F] transition-colors">
                Manik <span className="text-[#24966F]">Shrestha</span>
              </span>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
              <Link href="/#projects" className="hover:text-[#24966F] transition-colors" data-cursor="hover">
                Project
              </Link>
              <Link href="/#experience" className="hover:text-[#24966F] transition-colors" data-cursor="hover">
                Experience
              </Link>
              <Link href="/#about" className="hover:text-[#24966F] transition-colors" data-cursor="hover">
                About
              </Link>
            </nav>
          </div>

          {/* Right Column: Follow Me Social Links & Back to Top Button */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end gap-4 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Follow Me
            </span>
            <div className="flex items-center justify-center md:justify-end gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  data-cursor="hover"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#24966F] hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>

            {/* UNIQUE ANIMATED BACK TO TOP BUTTON */}
            {/* <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="mt-2 group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-800/90 hover:bg-[#24966F] text-white text-xs font-bold border border-slate-700/80 hover:border-[#24966F] shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(36,150,111,0.5)] focus:outline-none focus:ring-2 focus:ring-[#24966F]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#24966F] group-hover:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#24966F] group-hover:bg-white"></span>
              </span>
              <span>Back to Top</span>
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
              </span>
            </button> */}
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-center text-xs text-slate-400 gap-4">
          <p>© 2026 Manik Shrestha. All rights reserved.</p>
          {/* <p className="text-slate-500">Designed & Built with Next.js & Tailwind CSS</p> */}
        </div>
      </div>
    </footer>
  );
}
