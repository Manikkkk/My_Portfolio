import React from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  darkTheme?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  darkTheme = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  // Split label into first part and last accent word
  const words = label.trim().split(" ");
  const firstPart = words.length > 1 ? words.slice(0, words.length - 1).join(" ") : "";
  const lastPart = words.length > 1 ? words[words.length - 1] : words[0];

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } mb-8 sm:mb-12`}
    >
      {/* Label styled according to 'My Design' specification */}
      <div className={`flex items-center ${isCenter ? "justify-center" : "justify-start"} gap-2 mb-2`}>
        <span className="h-[2px] w-12 bg-[#24966F]/40 rounded-full" />
        <span className="text-xs sm:text-sm font-bold tracking-wider px-3.5 py-1">
          {firstPart && (
            <span className={darkTheme ? "text-white" : "text-[#111827]"}>
              {firstPart}{" "}
            </span>
          )}
          <span className="text-[#24966F]">{lastPart}</span>
        </span>
        <span className="h-[2px] w-12 bg-[#24966F]/40 rounded-full" />
      </div>

      {/* Main Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
          darkTheme ? "text-white" : "text-[#0B1D2B]"
        }`}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-3 max-w-2xl text-sm sm:text-base leading-relaxed ${
            darkTheme ? "text-slate-300" : "text-[#526370]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
