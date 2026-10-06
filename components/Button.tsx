import React from "react";
import { ArrowRight, Download } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "dark-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: "arrow" | "download" | "none";
  magnetic?: boolean;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon = "arrow",
  magnetic = true,
  children,
  className = "",
  target,
  rel,
  ...props
}: ButtonProps) {
  // Base classes with pill radius (999px)
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#24966F] focus:ring-offset-2";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs md:text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-[#071D2D] text-white hover:bg-[#0B2538] hover:shadow-lg shadow-md hover:scale-[1.02]",
    secondary:
      "bg-white/80 backdrop-blur-sm text-[#071D2D] border border-slate-200/80 hover:bg-white hover:border-[#24966F] hover:text-[#24966F] hover:shadow-md",
    accent:
      "bg-[#24966F] text-white hover:bg-[#1E7D5C] hover:shadow-lg shadow-md hover:scale-[1.02]",
    ghost:
      "bg-transparent text-[#071D2D] hover:text-[#24966F] hover:bg-[#E2F4EE]/50",
    "dark-outline":
      "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const renderIcon = () => {
    if (icon === "arrow") {
      return (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      );
    }
    if (icon === "download") {
      return (
        <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      );
    }
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        data-magnetic={magnetic ? "true" : "false"}
        data-cursor="hover"
        target={target}
        rel={rel}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      className={`group ${combinedClasses}`}
      data-magnetic={magnetic ? "true" : "false"}
      data-cursor="hover"
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
