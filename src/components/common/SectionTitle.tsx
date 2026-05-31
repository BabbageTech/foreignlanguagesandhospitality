interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  centered = true,
  light = false,
  className = "",
}: SectionTitleProps) {
  const alignment = centered ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {/* Eyebrow */}
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-8 h-[2px] rounded-full ${light ? "bg-accent" : "bg-secondary"}`} />
          <span className={`text-xs font-black uppercase tracking-[0.2em] ${light ? "text-accent" : "text-secondary"}`}>
            {eyebrow}
          </span>
          {centered && <div className={`w-8 h-[2px] rounded-full ${light ? "bg-accent" : "bg-secondary"}`} />}
        </div>
      )}

      {/* Title */}
      <h2 className={`font-black text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>

      {/* Decorative Underline */}
      <div className={`mt-6 h-1.5 w-16 rounded-full bg-accent ${centered ? "mx-auto" : ""}`} />

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-6 text-base md:text-lg leading-relaxed max-w-2xl ${light ? "text-white/80" : "text-neutral-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}