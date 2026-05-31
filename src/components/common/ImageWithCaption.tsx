import Image from "next/image";

interface ImageCaptionProps {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  aspectRatio?: "video" | "square" | "wide";
  className?: string;
}

export default function ImageCaption({
  src,
  alt,
  caption,
  credit,
  aspectRatio = "video",
  className = "",
}: ImageCaptionProps) {
  
  const ratios = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  };

  return (
    <figure className={`group w-full ${className}`}>
      <div className={`relative w-full overflow-hidden rounded-[2rem] shadow-lg ${ratios[aspectRatio]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <figcaption className="mt-4 px-2">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-medium text-neutral-600 leading-relaxed italic">
            {caption}
          </p>
          {credit && (
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 shrink-0">
              Source: {credit}
            </span>
          )}
        </div>
      </figcaption>
    </figure>
  );
}