import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "navy" | "bordered" | "flat" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  bar?: "none" | "primary" | "secondary" | "accent" | "tribar";
}

const variantClasses = {
  default:  "bg-white border border-base-300 shadow-sm",
  navy:     "bg-primary text-white border-none shadow-xl",
  bordered: "bg-white border-2 border-primary shadow-sm",
  flat:     "bg-base-100 border border-base-200 shadow-none",
  glass:    "bg-white/80 backdrop-blur-md border border-white/20 shadow-lg",
};

const paddingClasses = {
  none: "",
  sm:   "p-5",
  md:   "p-8",
  lg:   "p-12",
};

const barColors = {
  none:      "",
  primary:   "bg-primary",
  secondary: "bg-secondary",
  accent:    "bg-accent",
  tribar:    "bg-tribar",
};

export default function Card({
  children,
  className = "",
  hover = true,
  variant = "default",
  padding = "md",
  bar = "none",
}: CardProps) {
  return (
    <div
      className={`
        rounded-[2rem] overflow-hidden relative transition-all duration-500
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hover ? "hover:shadow-2xl hover:-translate-y-2" : ""}
        ${className}
      `}
    >
      {/* Top Accent Bar */}
      {bar !== "none" && (
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${barColors[bar]}`} />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}