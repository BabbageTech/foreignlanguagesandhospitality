import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "right",
  isLoading = false,
  type = "button",
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300 rounded-2xl active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary:   "bg-primary text-white shadow-glow hover:bg-primary/90",
    secondary: "bg-secondary text-white shadow-glow hover:bg-secondary/90",
    outline:   "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white:     "bg-white text-primary hover:bg-neutral-100",
    ghost:     "bg-transparent text-primary hover:bg-primary/5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[10px]",
    md: "px-8 py-4 text-xs",
    lg: "px-10 py-5 text-sm",
  };

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && iconPosition === "left" && <span className="mr-2 transition-transform group-hover:-translate-x-1">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2 transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const fullClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} group ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={fullClassName}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={fullClassName} disabled={isLoading}>
      {content}
    </button>
  );
}